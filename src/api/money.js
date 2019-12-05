import request from '@/utils/request.js'

// 查询表格数据
export const getMoneyList = (page = 1, pageSize = 10) => {
  return request({
    method: 'GET',
    url: `/admin/money?page=${page}&&pageSize=${pageSize}`
  })
}

// 添加数据
export const addMoneyUser = ({ username, income, expend, incomeType, accountCash }) => {
  return request({
    method: 'POST',
    url: '/admin/money',
    data: {
      username,
      income,
      expend,
      incomeType,
      accountCash
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
