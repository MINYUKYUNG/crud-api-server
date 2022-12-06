const db = require('../models');
const { applications } = db;

// SELECT (조회하기)
const getAllApplications = async (req, res) => {
  const applicationLists = await applications.findAll({
    attributes: ['user_id', 'company_id', 'job_opening_id']
  });
  res.send(applicationLists);
};

const getUserApplications = async (req, res) => {
  const { userId } = req.params;

  const applicationLists = await applications.findAll({
    attributes: ['user_id', 'company_id', 'job_opening_id'],
    where: {
      user_id: userId
    }
  });

  if (applicationLists.length) res.send(applicationLists);
  else res.status(404).send({ message: '존재하지 않는 지원내역 ID 입니다' });
};

// INSERT (추가하기)
const postApplication = async (req, res) => {
  const newApplication = req.body;

  const applicationLists = await applications.findAll({
    attributes: ['user_id', 'company_id', 'job_opening_id'],
    where: {
      user_id: newApplication.user_id,
      company_id: newApplication.company_id,
      job_opening_id: newApplication.job_opening_id
    }
  });

  if (applicationLists.length) res.status(404).send({ message: '이미 지원완료한 채용공고입니다' });
  else {
    const application = await applications.create(newApplication);

    const result = await applications.findOne({
      attributes: [
        ['job_opening_id', '채용공고_id'],
        ['user_id', '사용자_id']
      ],
      where: {
        id: application.id
      }
    });

    res.send(result);
  };
};

// DELETE (삭제하기)
const deleteApplication = async (req, res) => {
  const { id } = req.params;

  const deleteApplicationCount = await applications.destroy({ where: { id } });
  if (deleteApplicationCount) res.send({ message: `지원내역 ID_${id} 삭제되었습니다`});
  else res.status(404).send({ message: '존재하지 않는 지원내역 ID 입니다' });
};

module.exports = {
  getAllApplications,
  getUserApplications,
  postApplication,
  deleteApplication,
};