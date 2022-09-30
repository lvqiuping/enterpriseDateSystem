import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/User/Login',
    method: 'post',
    data: data
  })
}
export function logout(data) {
  return request({
    url: '/api/User/LogOut',
    method: 'post',
    data: data
  })
}
// 前

export function getUserList(query) {
  return request({
    url: '/api/User/GetPageList',
    method: 'get',
    params: query
  })
}

export function DisableUser(data) {
  return request({
    url: '/api/User/DisableUser?' + data,
    method: 'post'
  })
}

export function EnableUser(data) {
  return request({
    url: '/api/User/EnableUser?' + data,
    method: 'post'
  })
}
export function UpdatePassword(data) {
  return request({
    url: '/api/User/UpdatePassword',
    method: 'post',
    data: data
  })
}
export function DeleteUsers(data) {
  return request({
    url: '/api/User/DeleteUsers',
    method: 'post',
    data: data
  })
}
export function getInfo(token) {
  return request({
    url: '/WeatherForecast',
    method: 'get',
    params: { token }
  })
}

