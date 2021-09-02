import { mock } from 'mockjs'


mock('/login', 'post', (req: any) => {
  const { username, password } = JSON.parse(req.body)
  return mock({
    code: 10000,
    msg: 'ok',
    data: 'this is token'
  })
})


mock('/getuserinfo', 'get', (req: any) => {
  const { token } = JSON.parse(req)

  return mock({
    code: 10000,
    msg: 'ok',
    data: {
       token
    }
  })
})

mock('/test', 'get', () => {
  return mock({
    code: 10000,
    msg: 'ok',
    data: [
      {
        name: '1'
      },
      {
        name: '2'
      },
      {
        name: '3'
      },
    ]
  })
})