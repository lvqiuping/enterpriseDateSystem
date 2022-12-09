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
export function getUserList(query) {
  return request({
    url: '/api/User/GetPageList',
    method: 'get',
    params: query
  })
}
export function UpdateStatus(data) {
  return request({
    url: '/api/User/UpdateStatus',
    method: 'post',
    data: data
  })
}
export function UpdatePassword(data) {
  return request({
    url: '/api/User/UpdatePassword',
    method: 'post',
    data: data
  })
}
export function AddUser(data) {
  return request({
    url: '/api/User/AddUser',
    method: 'post',
    data: data
  })
}
