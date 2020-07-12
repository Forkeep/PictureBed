import {observable, action} from "mobx";
import AuthModel from "../models/index";
import UserStore from "./user"

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
          UserStore.pullUser();
          console.log('登录成功');
          resolve(user)
        })
        .catch(error => {
          UserStore.resetUser();
          console.log('登录失败');
          reject(error)
        })
    });
  }

  @action register() {
    return new Promise((resolve, reject) => {
      AuthModel.register(this.value.username, this.value.password)
        .then(user => {
          UserStore.pullUser();
          console.log('注册成功');
          resolve(user)
        })
        .catch(error => {
          UserStore.resetUser();
          console.log('注册失败');
          reject(error)
        })
    });
  }

  @action logout() {
    UserStore.resetUser();
    AuthModel.logout();
  }

}


export default new AuthStore();