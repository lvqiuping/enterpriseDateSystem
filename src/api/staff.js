import request from '@/utils/request'
/**
 *
 * @param {*} query
 * @returns
 */
export function GetPagePersons(query) {
  return request({
    url: '/api/Person/GetPagePersons',
    method: 'get',
    params: query
  })
}
export function GetTopLevelMajors(query) {
  return request({
    url: '/api/Person/GetTopLevelMajors',
    method: 'get',
    params: query
  })
}
export function GetPerDetailInfo(query) {
  return request({
    url: '/api/Person/GetPerDetailInfo',
    method: 'get',
    params: query
  })
}
export function GetPerRegCertificates(query) {
  return request({
    url: '/api/Person/GetPerRegCertificates',
    method: 'get',
    params: query
  })
}
export function GetPerProjects(query) {
  return request({
    url: '/api/Person/GetPerProjects',
    method: 'get',
    params: query
  })
}
