const { ContainerFirestore } = require('../../contenedores/ContainerFirestore')

class UserDaoFirestore extends ContainerFirestore {
  constructor(){
    super('users')
    this.id = 0
    this.checkId()
    // console.log(this.id)
  }

  // Chequea para obtener el ultimo ID y asignarlo al id local (this.id)
  async checkId(){
    let users = await this.getAll()
    // console.log(users[users.length - 1].id)
    this.id = parseInt(users[users.length - 1].id) + 1
    // console.log(this.id)
  }

  saveUser(user){
    if(user){
      console.log(user)
      this.save(user, this.id)
      // console.log(this.id)
      this.id++
      return user
    } else {
      return 'Not saved'
    }
  }

  updateUser(user, id){
    if(user) {
      console.log(user)
      this.update(user, id)
      return user
    } else {
      return 'Not updated'
    }
  }
}

module.exports = { UserDaoFirestore }
