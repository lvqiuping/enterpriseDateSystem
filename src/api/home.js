import request from '@/utils/request'
export function GetCmpTotalCount(query) {
  return request({
    url: '/api/HomePage/GetCmpTotalCount',
    method: 'get',
    params: query
  })
}
export function GetPersonTotalCount(query) {
  return request({
    url: '/api/HomePage/GetPersonTotalCount',
    method: 'get',
    params: query
  })
}
export function GetProjectTotalCount(query) {
  return request({
    url: '/api/HomePage/GetProjectTotalCount',
    method: 'get',
    params: query
  })
}
export function GetRegGroupMajorCounts(query) {
  return request({
    url: '/api/HomePage/GetRegGroupMajorCounts',
    method: 'get',
    params: query
  })
}
export function GetOtherCerTypeCounts(query) {
  return request({
    url: '/api/HomePage/GetOtherCerTypeCounts',
    method: 'get',
    params: query
  })
}
export function GetProjectTypeCounts(query) {
  return request({
    url: '/api/HomePage/GetProjectTypeCounts',
    method: 'get',
    params: query
  })
}
