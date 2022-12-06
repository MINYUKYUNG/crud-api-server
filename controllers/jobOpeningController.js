const db = require('../models');
const { sequelize, Op, QueryTypes, job_openings } = db;

// SELECT (조회하기)
const getAllJobOpenings = async (req, res) => {
  const { search } = req.query;

  if (search) {
    const query = `
      SELECT 
          JO.id AS '채용공고_id', 
          CO.회사명,
          CO.국가, 
          CO.지역, 
          JO.채용포지션, 
          JO.채용보상금, 
          JO.사용기술 
      FROM crud_api_server.job_openings AS JO LEFT OUTER JOIN crud_api_server.companies AS CO 
      ON JO.company_id = CO.id 
      WHERE CO.회사명 LIKE :search 
          OR CO.국가 LIKE :search 
          OR CO.지역 LIKE :search 
          OR JO.채용포지션 LIKE :search 
          OR JO.채용보상금 LIKE :search 
          OR JO.사용기술 LIKE :search;
    `; 
    const JobOpeningLists = await sequelize.query(query, { 
      type: QueryTypes.SELECT,
      replacements: {
        search: `%${search}%`
      }
    });

    if (JobOpeningLists.length) res.send(JobOpeningLists);
    else res.status(404).send({ message: '검색어와 일치하는 목록이 없습니다' });
  } else {
    const query = `
      SELECT 
          JO.id AS '채용공고_id', 
          CO.회사명,
          CO.국가, 
          CO.지역, 
          JO.채용포지션, 
          JO.채용보상금, 
          JO.사용기술 
      FROM crud_api_server.job_openings AS JO LEFT OUTER JOIN crud_api_server.companies AS CO 
      ON JO.company_id = CO.id;
    `; 
    const JobOpeningLists = await sequelize.query(query, { 
      type: QueryTypes.SELECT
    });

    res.send(JobOpeningLists);
  };
};

const getJobOpening = async (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT 
        JO.id AS '채용공고_id', 
        CO.회사명,
        CO.국가, 
        CO.지역, 
        JO.채용포지션, 
        JO.채용보상금, 
        JO.사용기술, 
        JO.company_id 
    FROM crud_api_server.job_openings AS JO LEFT OUTER JOIN crud_api_server.companies AS CO 
    ON JO.company_id = CO.id 
    WHERE JO.id = :paramsId;
  `; 
  const JobOpening = await sequelize.query(query, { 
    type: QueryTypes.SELECT,
    replacements: {
      paramsId: id
    }
  });

  if (JobOpening.length) {
    const result = JobOpening[0];

    const sameCompanyJobOpenings = await job_openings.findAll({
      raw: true,
      attributes: ['id'],
      where: {
        company_id: result['company_id']
      }
    });

    result['회사가올린다른공고'] = sameCompanyJobOpenings;

    delete result['company_id'];

    res.send(JobOpening[0]);
  } else res.status(404).send({ message: '존재하지 않는 채용공고 ID 입니다' });
};

// INSERT (추가하기)
const postJobOpening = async (req, res) => {
  const newJobOpening = req.body;

  const jobOpening = await job_openings.create(newJobOpening);
  const show = await job_openings.findOne({
    attributes: [
      ['company_id', '회사_id'], 
      '채용포지션', 
      '채용보상금', 
      '채용내용', 
      '사용기술'
    ],
    where: {
      id: jobOpening.id
    }
  });
  res.send(show);
};

// UPDATE (갱신하기)
const putJobOpening = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  const result = await job_openings.update(newInfo, { where: { id } });
  if (result[0]) {
    const jobOpening = await job_openings.findOne({
      attributes: [
        ['company_id', '회사_id'], 
        '채용포지션', 
        '채용보상금', 
        '채용내용', 
        '사용기술'
      ],
      where: { id }
    });
    res.send(jobOpening);
  } else res.status(404).send({ message: '존재하지 않는 채용공고 ID 입니다' });
};

// DELETE (삭제하기)
const deleteJobOpening = async (req, res) => {
  const { id } = req.params;

  const deleteJobOpeningCount = await job_openings.destroy({ where: { id } });
  if (deleteJobOpeningCount) res.send({ message: `채용공고 ID_${id} 삭제되었습니다`});
  else res.status(404).send({ message: '존재하지 않는 채용공고 ID 입니다' });
};

module.exports = {
  getAllJobOpenings,
  getJobOpening,
  postJobOpening,
  putJobOpening,
  deleteJobOpening,
};