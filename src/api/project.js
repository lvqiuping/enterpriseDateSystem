import request from '@/utils/request'
/**
 *
 * @param {*} query
 * @returns
 */
export function GetPageProjects(query) {
  return request({
    url: '/api/Project/GetPageProjects',
    method: 'get',
    params: query
  })
}
