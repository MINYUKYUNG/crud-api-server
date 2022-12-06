const db = require('../models');
const { users } = db;

// SELECT (조회하기)
const getAllUsers = async (req, res) => {
  const userLists = await users.findAll({
    attributes: {
      exclude: ['email', 'password']
    }
  });
  res.send(userLists);
};

const getUser = async (req, res) => {
  const { id } = req.params;

  const user = await users.findOne({
    attributes: {
      exclude: ['email', 'password']
    },
    where: { id }
  });

  if (user) res.send(user);
  else res.status(404).send({ message: '존재하지 않는 사용자 ID 입니다' });
};

// INSERT (추가하기)
const postUser = async (req, res) => {
  const newUser = req.body;

  const user = await users.create(newUser);
  res.send(user);
};

// UPDATE (갱신하기)
const putUser = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  const result = await users.update(newInfo, { where: { id } });
  if (result[0]) {
    const user = await users.findOne({
      attributes: {
        exclude: ['email', 'password']
      },
      where: { id }
    });
    res.send(user);
  } else res.status(404).send({ message: '존재하지 않는 사용자 ID 입니다' });
};

// DELETE (삭제하기)
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deleteUserCount = await users.destroy({ where: { id } });
  if (deleteUserCount) res.send({ message: `사용자 ID_${id} 삭제되었습니다`});
  else res.status(404).send({ message: '존재하지 않는 사용자 ID 입니다' });
};

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
};