// 隐藏路由
const hideRouter: any[] = [{
  appId: '7008754228723068930',
  path: '/business/MomPlanIssueAddForm2',
  name: 'momPlanIssueInfo',
  title: '计划下达新增',
  component: () => import('@/views/business/momPlanIssue/MomPlanIssueAddForm.vue')
}, {
  appId: '7008754228723068930',
  path: '/business/momPlanIssueInfoAdd2',
  name: 'momPlanIssueInfoAdd',
  title: 'MRP计划下达',
  component: () => import('@/views/Home.vue')
}]

export default hideRouter
