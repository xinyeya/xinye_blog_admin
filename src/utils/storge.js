const localStorage = window.localStorage
const USER_KEY = 'user_info'

// 获取缓存
export function getStorage () {
  return JSON.parse(localStorage.getItem(USER_KEY))
}

// 保存缓存
export function saveStorage (val) {
  localStorage.setItem(USER_KEY, JSON.stringify(val))
}

// 删除缓存
export function removeStorage () {
  localStorage.removeItem(USER_KEY)
}
