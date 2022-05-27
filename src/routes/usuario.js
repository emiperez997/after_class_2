const express = require('express')
const { Router } = express
const usersRouter = Router()

const { UserDaoFile } = require('../daos/usuarios/UsuarioDaoArchivo')
const userDao = new UserDaoFile()

// const { UserDaoMongo } = require('../daos/usuarios/UsuarioDaoMongo')
// const userDao = new UserDaoMongo()

usersRouter.get('/', (req, res) => {
  let users = userDao.getAll()

  res.json({users: users})
})

usersRouter.get('/:id', (req, res) => {
  let user = userDao.getById(req.params.id)
  res.json({user})
})

usersRouter.post('/', (req, res) => {
  let user = req.body

  if(user && user.name && user.email && user.age){
    user = userDao.save(user.name, user.email, user.age)
    res.json({result: 'User saved', user: user})
  } else {
    res.json({result: 'User cannot saved'})
  }
})

usersRouter.delete('/:id', (req, res) => {
  let { id } = req.params
  user = userDao.deleteById(id)
  res.json({result: 'Result', user_deleted: user})
})

usersRouter.put('/:id', (req, res) => {
  let user = req.body 
  let response = userDao.updateById(req.params.id, user)
  res.json(response)
})

module.exports = usersRouter
