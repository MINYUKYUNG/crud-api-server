const jobOpeningController = require('../controllers/jobOpeningController');
const {
  getAllJobOpenings,
  getJobOpening,
  postJobOpening,
  putJobOpening,
  deleteJobOpening,
} = jobOpeningController;
const router = require('express').Router();

router.get('/', getAllJobOpenings);
router.get('/:id', getJobOpening);
router.post('/', postJobOpening);
router.put('/:id', putJobOpening);
router.delete('/:id', deleteJobOpening);

module.exports = router;