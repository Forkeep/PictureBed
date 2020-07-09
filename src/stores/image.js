import {observable, action} from "mobx";
import UploaderModel from "../models";

class ImageStore {
  @observable filename = '';
  @observable file = null;
  @observable isLoading = false;
  @observable serverFile = null;

  @action setFilename(newFilename) {
    this.filename = newFilename
  }

  @action setFile(newFile) {
    this.file = newFile
  }

  @action upload() {
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      UploaderModel.add(this.file, this.filename)
        .then(data => {
          this.serverFile = data;
          resolve(data)
        })
        .catch(error => {
          console.log('上传失败');
          reject(error)
        })
        .finally(() => {
          this.isLoading = false
        })

    });
  }
}


export default new ImageStore();