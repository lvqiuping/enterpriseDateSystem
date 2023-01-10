import request from '@/utils/request'
/**
 *
 * @param {*} query
 * @returns
 */

export function GetProjectsByDimQuery(query) {
  return request({
    url: '/api/Project/GetProjectsByDimQuery',
    method: 'get',
    params: query
  })
}

export function GetPageProjects(query) {
  return request({
    url: '/api/Project/GetPageProjects',
    method: 'get',
    params: query
  })
}
export function GetProjectDetail(query) {
  return request({
    url: '/api/Project/GetProjectDetail',
    method: 'get',
    params: query
  })
}
export function GetProjectJoinUnits(query) {
  return request({
    url: '/api/Project/GetProjectJoinUnits',
    method: 'get',
    params: query
  })
}
export function GetProjectSingleInfos(query) {
  return request({
    url: '/api/Project/GetProjectSingleInfos',
    method: 'get',
    params: query
  })
}
