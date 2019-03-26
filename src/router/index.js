import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame/Frame'
import HelloWorld from '@/components/HelloWorld'
import TestTable from '@/components/TestTable'
import { getIFramePath, getIFrameUrl } from '@/utils/iframe'
import store from '@/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '首页',
    component: Frame,
    children: [
      {
        path: '/TestTable',
        name: 'TestTable',
        component: TestTable,
        meta: {
          icon: 'fa fa-home fa-lg',
          index: 0
        }
      },
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          icon: 'fa fa-home fa-lg',
          index: 0
        }
      },
    ]
  }
]

const MenuData = [
  {
    "id":1,
    "parentId":0,
    "name":"系统管理",
    "url":null,
    "perms":null,
    "type":0,
    "icon":"el-icon-setting",
    "level":0,
    "children":[
      {
        "id":9,
        "parentId":1,
        "name":"table",
        "url":'TestTable',
        "perms":"",
        "type":2,
        "icon":null,
        "level":1,
        "children":[]
      },
      {
        "id":10,
        "parentId":1,
        "name":"新增",
        "url":'HelloWorld',
        "perms":"",
        "type":2,
        "icon":null,
        "level":1,
        "children":[]
      },
    ]
  }
]

store.commit('setNavTree',MenuData)

const router = new Router({routes: routes})

export default router

