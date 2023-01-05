class Api {
    constructor (t) {
        this.path ="https://api.react-learning.ru"
        this.token = t;
    }
    getProducts() {
      return fetch(`${this.path}/products`, {
        headers: {
            "Authorization": `Bearer ${this.token}`
        }
      })
     
    }
    getProduct () {

    }
    addProduct() {

    }
    updProduct() {

    }
    delProduct(){

    }
    logIn(body) {
       return fetch(`${this.path}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
         body: JSON.stringify(body)
       })
    }
    signUp() {

    }
    showProfile() {
      return fetch(`${this.path}/v2/group-7/users/me`, {
        headers: {
          "Authorization": `Bearer ${this.token}`
        }
      })
    }
}

export default Api;