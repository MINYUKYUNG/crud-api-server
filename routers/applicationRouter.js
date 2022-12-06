const applicationController = require('../controllers/applicationController');
const {
  getAllApplications,
  getUserApplications,
  postApplication,
  deleteApplication,
} = applicationController;
const router = require('express').Router();

router.get('/', getAllApplications);
router.get('/:userId', getUserApplications);
router.post('/', postApplication);
router.delete('/:id', deleteApplication);

module.exports = router;