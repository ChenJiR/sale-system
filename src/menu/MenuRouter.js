import HelloWorld from '@/components/HelloWorld'
import TestTable from '@/components/TestTable'
import IFrame from '@/components/IFrame/Iframe'

export default [
    {
        path: '',
        name: '首页',
        component: HelloWorld,
        meta: {
            icon: 'fa fa-home fa-lg',
            index: 0
        }
    },
    {
        path: 'TestTable',
        name: 'TestTable',
        component: TestTable,
        meta: {
            icon: 'fa fa-home fa-lg',
            index: 0
        }
    },
    {
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            icon: 'fa fa-home fa-lg',
            index: 0
        }
    },
    {
        path: 'baidu.com',
        name: 'baidu',
        component: IFrame,
        meta: {
            icon: 'fa fa-home fa-lg',
            index: 0
        }
    },
]