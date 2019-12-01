import request from '@/utils/request'

/**
 * 用户管理
 */
export const userinfo = (page, pageSize) => {
  return request({
    method: 'GET',
    url: `/admin/userinfo?page=${page}&&pageSize=${pageSize}`
  })
}
