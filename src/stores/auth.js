import {observable, action} from "mobx";
import AuthModel from "../models/index";

class AuthStore {
  @observable value = {
    username: 'lizheindex',
    password: '123'
  };

  @action setUsername(username) {
    this.value.username = username;
  }

  @action setPassword(password) {
    this.value.password = password;
  }

  @action login() {
    return new Promise((resolve, reject) => {
      AuthModel.login(this.value.username, this.value.password)
        .then(user => {
          console.log('登录成功');
          resolve(user)
        })
        .catch(error => {
          console.log('登录失败');
          reject(error)
        })
    });
  }

  @action register() {
    return new Promise((resolve, reject) => {
      AuthModel.register(this.value.username, this.value.password)
        .then(user => {
          console.log('注册成功');
          resolve(user)
        })
        .catch(error => {
          console.log('注册失败');
          reject(error)
        })
    });
  }

  @action logout() {
    AuthModel.logout();
  }

}


export {AuthStore};