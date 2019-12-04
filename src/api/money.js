import request from '@/utils/request.js'

export const getMoneyList = () => {
  return request({
    method: 'GET',
    url: '/admin/money'
  })
}
