import request from '@/utils/request'

/**
 * 用户管理
 */
export const userlist = (page, pageSize) => {
  return request({
    method: 'GET',
    url: `/admin/userlist?page=${page}&&pageSize=${pageSize}`
  })
}

/**
 * 个人信息
 */
export const getinfo = (id) => {
  return request({
    method: 'GET',
    url: `/admin/userinfo?id=${id}`
  })
}

/**
 * 修改个人
 */
export const editUserinfo = (id, { nickname, email, mobile, invetYear }) => {
  return request({
    method: 'POST',
    url: `/admin/edit_userinfo?id=${id}`,
    data: {
      nickname,
      email,
      mobile,
      invetYear
    }
  })
}
