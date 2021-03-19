import {UserInfoModel} from '/@/types/user'

export default {
  login(params: UserInfoModel): Promise<string> {
    
    return new Promise(res=>{
      setTimeout(()=>{
        const token = 'TOKEN: ' + JSON.stringify(params)
        res(token)
      }, 1000)
    })
  },

  getUserInfo(): Promise<UserInfoModel>{
     
    return new Promise(res=>{
      setTimeout(()=>{
        const userInfo: UserInfoModel = {
          username: 'admin',
          password: '123456'
        }
        res(userInfo)
      }, 1000)
    })
  }
}