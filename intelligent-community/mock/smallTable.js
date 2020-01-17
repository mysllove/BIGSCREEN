import Mock from 'mockjs'

const data = Mock.mock({
    'items|5': [{
        'name|1': [
            '录像机',
            '摄像头2号',
            '摄像头3号',
            '摄像头4号',
            '摄像头5号'
        ],
        'style|1': [
            '录像机',
            '摄像头'
        ],
        'mark': '@guid',
        display_time: '@datetime',
        'status|1': ['正常', '离线'],
        'time|1-48': 24

    }]
})

export default [{
    url: '/table/smallTable',
    type: 'get',
    response: config => {
        const items = data.items
        return {
            code: 20000,
            data: {
                total: items.length,
                items: items
            }
        }
    }
}]