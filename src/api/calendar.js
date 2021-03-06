import request from '@/utils/request'

export function calendarSave (data) {
  // 新建日程
  return request({
    url: '/api/calendar/save',
    method: 'post',
    data: data
  })
}

export function calendarList (data) {
  // 日程列表
  return request({
    url: '/api/calendar/index',
    method: 'get',
    params: data
  })
}
export function getDays (time) {
  // 当月有日程日期数组集合
  return request({
    url: '/api/calendar/getCalendarDays?month=' + time,
    method: 'get'
  })
}
export function calendarType () {
  // 日程列表类型
  return request({
    url: '/api/calendar/getType',
    method: 'get'
  })
}

export function calendarRead (data) {
  // 日程详情
  return request({
    url: '/api/calendar/read',
    method: 'get',
    params: data
  })
}

export function calendarUpdate (data) {
  // 编辑日程
  return request({
    url: '/api/calendar/update',
    method: 'post',
    data: data
  })
}

export function calendarDelete (data) {
  // 删除日程
  return request({
    url: '/api/calendar/delete',
    method: 'post',
    data: data
  })
}

export function employsetUpdate (data) {
  // 更新欢迎语设置
  return request({
    url: '/api/employset/update',
    method: 'post',
    data: data
  })
}

export function employsetRead (data) {
  // 读取欢迎语设置
  return request({
    url: '/api/employset/read',
    method: 'get',
    params: data
  })
}

export function employsetDelete (data) {
  // 欢迎语设置标签删除
  return request({
    url: '/api/EmploySet/delete',
    method: 'post',
    data: data
  })
}
