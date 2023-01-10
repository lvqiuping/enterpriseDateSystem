import request from '@/utils/request'
/**
 *
 * @param {*} query
 * @returns
 */

export function GetCmpByDimQuery(query) {
  return request({
    url: '/api/Company/GetCmpByDimQuery',
    method: 'get',
    params: query
  })
}
export function GetPageList(query) {
  return request({
    url: '/api/Company/GetPageList',
    method: 'get',
    params: query
  })
}
export function Get(query) {
  return request({
    url: '/api/Company/Get',
    method: 'get',
    params: query
  })
}
export function GetPageCmpZiZhis(query) {
  return request({
    url: '/api/Company/GetPageCmpZiZhis',
    method: 'get',
    params: query
  })
}
export function GetPageCompanyProjects(query) {
  return request({
    url: '/api/Company/GetPageCompanyProjects',
    method: 'get',
    params: query
  })
}
export function GetPageCompanyContacts(query) {
  return request({
    url: '/api/Company/GetPageCompanyContacts',
    method: 'get',
    params: query
  })
}
export function GetPageCmpPerTitles(query) {
  return request({
    url: '/api/Company/GetPageCmpPerTitles',
    method: 'get',
    params: query
  })
}
export function GetPageCmpPerOthers(query) {
  return request({
    url: '/api/Company/GetPageCmpPerOthers',
    method: 'get',
    params: query
  })
}
export function GetCmpSummaryCount(query) {
  return request({
    url: '/api/Company/GetCmpSummaryCount',
    method: 'get',
    params: query
  })
}
export function GetRegGroupMajors(query) {
  return request({
    url: '/api/Company/GetRegGroupMajors',
    method: 'get',
    params: query
  })
}
export function GetPageCmpRegMajors(query) {
  return request({
    url: '/api/Company/GetPageCmpRegMajors',
    method: 'get',
    params: query
  })
}

