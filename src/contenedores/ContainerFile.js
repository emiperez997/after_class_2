const fs = require('fs');

class ContainerFile {
    constructor(fileName) {
        this.fileName = fileName;
    }

    saveInFile(content) {
        fs.writeFileSync(this.fileName, JSON.stringify(content, null,'\t'));
    }

    getContentFile() {
        let content = [];

        try {
            let file = fs.readFileSync(this.fileName, 'utf-8');
            content = JSON.parse(file);
        } catch (error) {
            this.saveInFile(content);
            console.log(`Creacion del archivo ${this.fileName}`);
        }

        return content;
    }

  getById(id){
    let content = this.getContentFile()
    let user = content.find(user => user.id == id)
    return user
  }

    deleteById(id){
      let content = this.getContentFile()
      let user = content.find(user => user.id == id)
      content.splice(user.id - 1, 1)
      this.saveInFile(content)
      return user
    }

  updateById(id, updateUser){
    let content = this.getContentFile()
    let user = content.map(user => {
      if(user.id == id){
	user.name = updateUser.name
	user.email = updateUser.email
	user.age = updateUser.age
      }
      return user
    })
    
    this.saveInFile(user)
    
    return user.find(user => user.id == id)
  }
}

module.exports = { ContainerFile }
