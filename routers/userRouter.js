const userController = require('../controllers/userController');
const {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
} = userController;
const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

module.exports = router;