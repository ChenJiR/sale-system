import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import HelloWorld from '@/components/HelloWorld'
import TestTable from '@/components/TestTable'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/TestTable',
    component: TestTable
  },
  {
    path: '/',
    component: Frame,
    name: '导航一',
    iconCls: 'el-icon-message',//图标样式class
    children: [
      { path: '/TestTable', component: TestTable, name: 'TestTable', hidden: true },
      // { path: '/table', component: Table, name: 'Table' },
      // { path: '/form', component: Form, name: 'Form' },
      // { path: '/user', component: user, name: '列表' },
    ]
  },
]

export default new Router({routes})
