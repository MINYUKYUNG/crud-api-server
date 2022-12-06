const db = require('../models');
const { companies } = db;

// SELECT (조회하기)
const getAllCompanies = async (req, res) => {
  const companyLists = await companies.findAll({
    attributes: {
      exclude: ['email', 'password']
    }
  });
  res.send(companyLists);
};

const getCompany = async (req, res) => {
  const { id } = req.params;

  const company = await companies.findOne({
    attributes: {
      exclude: ['email', 'password']
    },
    where: { id }
  });

  if (company) res.send(company);
  else res.status(404).send({ message: '존재하지 않는 회사 ID 입니다' });
};

// INSERT (추가하기)
const postCompany = async (req, res) => {
  const newCompany = req.body;

  const company = await companies.create(newCompany);
  res.send(company);
};

// UPDATE (갱신하기)
const putCompany = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  const result = await companies.update(newInfo, { where: { id } });
  if (result[0]) {
    const company = await companies.findOne({
      attributes: {
        exclude: ['email', 'password']
      },
      where: { id }
    });
    res.send(company);
  } else res.status(404).send({ message: '존재하지 않는 회사 ID 입니다' });
};

// DELETE (삭제하기)
const deleteCompany = async (req, res) => {
  const { id } = req.params;

  const deleteCompanyCount = await companies.destroy({ where: { id } });
  if (deleteCompanyCount) res.send({ message: `회사 ID_${id} 삭제되었습니다`});
  else res.status(404).send({ message: '존재하지 않는 회사 ID 입니다' });
};

module.exports = {
  getAllCompanies,
  getCompany,
  postCompany,
  putCompany,
  deleteCompany,
};