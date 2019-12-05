import request from '@/utils/request.js'

export const getMoneyList = (page = 1, pageSize = 10) => {
  return request({
    method: 'GET',
    url: `/admin/money?page=${page}&&pageSize=${pageSize}`
  })
}

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
