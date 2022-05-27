const userModel = require('../../contenedores/ContainerMongo')

class UserDaoMongo {
  async getAll(){
    return await userModel.find()
  }

} 

module.exports = { UserDaoMongo }
