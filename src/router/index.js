import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/index',
      meta: { title: 'AI天眼' }
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/home/main'),
      children: [{
        path: 'index',
        name: 'index',
        meta: { title: 'AI天眼' },
        component: () => import('@/views/home/index')
      }, {
        path: 'message',
        name: 'message',
        meta: { title: '消息' },
        component: () => import('@/views/home/message')
      }, {
        path: 'news',
        name: 'news',
        meta: { title: '动态圈' },
        component: () => import('@/views/home/news')
      }, {
        path: 'contact',
        name: 'contact',
        meta: { title: '通讯录' },
        component: () => import('@/views/home/contact')
      }, {
        path: 'self',
        name: 'self',
        meta: { title: 'AI天眼' },
        component: () => import('@/views/home/self')
      }]
    },
    {
      path: '/seeCard',
      name: 'seeCard',
      meta: { title: '查看名片' },
      component: () => import('@/views/homeList/seeCard')
    },
    {
      path: '/seeWebsite',
      name: 'seeWebsite',
      meta: { title: '查看网站' },
      component: () => import('@/views/homeList/seeWebsite')
    },
    {
      path: '/callPhone',
      name: 'callPhone',
      meta: { title: '行为详情' },
      component: () => import('@/views/homeList/callPhone')
    },
    {
      path: '/messageManage',
      name: 'messageManage',
      meta: { title: '销售管家' },
      component: () => import('@/views/messageManage/index')
    },
    {
      path: '/messageDetail',
      name: 'messageDetail',
      meta: { title: '日程详情' },
      component: () => import('@/views/messageManage/detail')
    },
    {
      path: '/messageIM',
      name: 'messageIM',
      meta: { title: '聊天室' },
      component: () => import('@/views/messageManage/IM')
    },
    {
      path: '/insertTag',
      name: 'insertTag',
      meta: { title: '添加标签' },
      component: () => import('@/views/contacts/insertTag')
    },
    {
      path: '/updateTag',
      name: 'updateTag',
      meta: { title: '编辑标签' },
      component: () => import('@/views/contacts/updateTag')
    },
    {
      path: '/newsPublish',
      name: 'newsPublish',
      meta: { title: '发布动态' },
      component: () => import('@/views/news/publish')
    },
    {
      path: '/newsSelf',
      name: 'newsSelf',
      meta: { title: '我的动态' },
      component: () => import('@/views/news/self')
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      meta: { title: '动态详情' },
      component: () => import('@/views/news/detail')
    },
    {
      path: '/companyDetails',
      name: 'companyDetails',
      meta: { title: '公司详情' },
      component: () => import('@/views/news/companyDetails')
    },
    {
      path: '/calendar',
      name: 'calendar',
      meta: { title: '销售日历' },
      component: () => import('@/views/self/calendar')
    },
    {
      path: '/insertCalendar',
      name: 'insertCalendar',
      meta: { title: '添加日程' },
      component: () => import('@/views/self/insertCalendar')
    },
    {
      path: '/updateCalendar',
      name: 'updateCalendar',
      meta: { title: '编辑日程' },
      component: () => import('@/views/self/updateCalendar')
    },
    {
      path: '/calendarDetail',
      name: 'calendarDetail',
      meta: { title: '日程详情' },
      component: () => import('@/views/self/calendarDetail')
    },
    {
      path: '/talkManage',
      name: 'talkManage',
      meta: { title: '管理话术' },
      component: () => import('@/views/self/talkManage')
    },
    {
      path: '/talkInsert',
      name: 'talkInsert',
      meta: { title: '新增话术' },
      component: () => import('@/views/self/talkInsert')
    },
    {
      path: '/talkUpdate',
      name: 'talkUpdate',
      meta: { title: '编辑话术' },
      component: () => import('@/views/self/talkUpdate')
    },
    {
      path: '/talkDetail',
      name: 'talkDetail',
      meta: { title: '话术详情' },
      component: () => import('@/views/self/talkDetail')
    },
    {
      path: '/reportChart',
      name: 'reportChart',
      meta: { title: '我的报表' },
      component: () => import('@/views/self/reportChart')
    },
    {
      path: '/setting',
      name: 'setting',
      meta: { title: '设置' },
      component: () => import('@/views/self/setting')
    },
    {
      path: '/chatwindow',
      name: 'chatwindow',
      meta: { title: '互动窗口' },
      component: () => import('@/views/self/chatwindow')
    },
    {
      path: '/sayHi',
      name: 'sayHi',
      meta: { title: '欢迎语设置' },
      component: () => import('@/views/self/sayHi')
    },
    {
      path: '/saySetting',
      name: 'saySetting',
      meta: { title: '欢迎语设置' },
      component: () => import('@/views/self/saySetting')
    },
    {
      path: '/client',
      name: 'client',
      meta: { title: '客户详情' },
      component: () => import('@/views/client/index')
    },
    {
      path: '/clientFollow',
      name: 'clientFollow',
      meta: { title: '客户跟进' },
      component: () => import('@/views/client/follow')
    },
    {
      path: '/clientInfor',
      name: 'clientInfor',
      meta: { title: '资料详情' },
      component: () => import('@/views/client/infor')
    },
    {
      path: '/clientTag',
      name: 'clientTag',
      meta: { title: '标签' },
      component: () => import('@/views/client/tag')
    },
    {
      path: '/selfCard',
      name: 'selfCard',
      meta: { title: '名片海报' },
      component: () => import('@/views/card/selfCard')
    },
    {
      path: '/editCard',
      name: 'editCard',
      meta: { title: '编辑名片' },
      component: () => import('@/views/card/editCard')
    },
    {
      path: '/produce',
      name: 'produce',
      meta: { title: '产品列表' },
      component: () => import('@/views/card/produce')
    },
    {
      path: '/case',
      name: 'case',
      meta: { title: '案例列表' },
      component: () => import('@/views/card/case')
    },
    {
      path: '/boss',
      name: 'boss',
      meta: { title: 'BOSS天眼' },
      component: () => import('@/views/boss/index')
    },
    {
      path: '/bossCard',
      name: 'bossCard',
      meta: { title: 'BOSS天眼' },
      component: () => import('@/views/boss/card')
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      meta: { title: '我的名片' },
      component: () => import('@/views/self/qrcode')
    },
    {
      path: '/error',
      name: 'error',
      meta: { title: 'error' },
      component: () => import('@/error')
    },
    {
      path: '/warning',
      name: 'warning',
      meta: { title: '温馨提示' },
      component: () => import('@/warning')
    }
  ]
})
