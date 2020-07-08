import {observable, action} from "mobx";
import AuthModel from "../models";

class UserStore {
  @observable currentUser = null;

  @action pullUser() {
    this.currentUser = AuthModel.getCurrentUser();
  }

  @action resetUser() {
    this.currentUser = null;
  }
}


export default new UserStore();