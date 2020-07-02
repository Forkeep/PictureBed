import {observable, action} from "mobx";

class AuthStore {
  @observable isLogin = false;
  @observable isLoading = false;
  @observable value = {
    username: 'lizhe',
    password: ''
  };

  @action setIsLogin(isLogin) {
    this.isLogin = isLogin
  }

  @action setUserName(username) {
    this.value.username = username
  }

  @action setPassword(password) {
    this.value.password = password
  }

  @action login() {
    console.log('longining...');
    this.isLoading = true;
    setTimeout(() => {
      console.log('login success!');
      this.isLoading = false;
      this.isLogin = true;
    }, 1000)
  }

  @action register() {
    console.log('registering...');
    this.isLoading = true;
    setTimeout(() => {
      console.log('register success!');
      this.isLoading = false;
      this.isLogin = true;
    }, 1000)
  }

  @action logout() {
    console.log('logout!')
  }

}


export {AuthStore};