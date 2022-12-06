const companyController = require('../controllers/companyController');
const {
  getAllCompanies,
  getCompany,
  postCompany,
  putCompany,
  deleteCompany,
} = companyController;
const router = require('express').Router();

router.get('/', getAllCompanies);
router.get('/:id', getCompany);
router.post('/', postCompany);
router.put('/:id', putCompany);
router.delete('/:id', deleteCompany);

module.exports = router;