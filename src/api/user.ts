import http from '/@/utils/http'

export function getData(params: any) {
  return http.request({
    url: '/api/xxx',
    params
  })
}

// getApi
export const getApi = (params: any) => http.get('/api/get', params)

// postApi
export const postApi =(params: any) => http.post('/api/post', params)

// putApi
export const putApi =(params: any) => http.put('/api/put', params)

// deleteApi
export const deleteApi =(params: any) => http.delete('/api/delete', params)