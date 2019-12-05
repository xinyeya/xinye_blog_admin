import request from '@/utils/request.js'

// 查询表格数据
export const getMoneyList = (page = 1, pageSize = 10) => {
  return request({
    method: 'GET',
    url: `/admin/money?page=${page}&&pageSize=${pageSize}`
  })
}

// 添加数据
export const addMoneyUser = ({ username, income, expend, incomeType, accountCash, remark }) => {
  return request({
    method: 'POST',
    url: '/admin/money',
    data: {
      username,
      income,
      expend,
      incomeType,
      accountCash,
      remark
    }
  })
}

// 删除数据
export const delUserList = id => {
  return request({
    method: 'DELETE',
    url: '/admin/money',
    data: {
      id
    }
  })
}

// 获取要修改的数据
export const getEditUserList = id => {
  return request({
    method: 'GET',
    url: `/admin/money/read?id=${id}`
  })
}

// 修改数据
export const editUserList = (id,
  {
    username,
    income,
    expend,
    incomeType,
    accountCash,
    remark
  }) => {
  return request({
    method: 'PUT',
    url: `/admin/money?id=${id}`,
    data: {
      username,
      income,
      expend,
      incomeType,
      accountCash,
      remark
    }
  })
}

// 用户名搜索用户
export const searchUserList = username => {
  return request({
    method: 'GET',
    url: `/admin/money/search?username=${username}`
  })
}
