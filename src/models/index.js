import AV, {User} from 'leancloud-storage';

AV.init({
  appId: "V24cUNyJTQu2t3Lu0APQ4mlJ-gzGzoHsz",
  appKey: "U0cBbXaOuLdlckocrBjnr6da",
  serverURL: "https://v24cunyj.lc-cn-n1-shared.com"
});

const user = new User();
user.setUsername('Tom');
user.setPassword('cat!@#123');
user.signUp().then((user) => {
  // 注册成功
  console.log(`注册成功。objectId：${user.id}`);
}, (error) => {
  // 注册失败（通常是因为用户名已被使用）
});


const AuthModel = {
  register(username, password) {
    let user = new User();
    user.setUsername(username);
    user.setPassword(password);
    return new Promise((resolve, reject) => {
      User.signUp().then(loginUser => resolve(loginUser), error => reject(error))
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginUser => resolve(loginUser), error => reject(error))
    })
  },
  logout() {
    User.logOut();
  },
  getCurrentUser() {
    return User.current();
  }
};

export default AuthModel
