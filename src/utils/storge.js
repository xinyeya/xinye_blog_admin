const localStorage = window.localStorage
const USER_KEY = 'user_info'

// 获取缓存
export function getUser () {
  return JSON.parse(localStorage.getItem(USER_KEY))
}

// 保存缓存
export function saveUser (val) {
  localStorage.setItem(USER_KEY, JSON.stringify(val))
}

// 删除缓存
export function removeUser () {
  localStorage.removeItem(USER_KEY)
  return '删除成功'
}