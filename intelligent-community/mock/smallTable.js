import Mock from 'mockjs'

const data = Mock.mock({
    'items|5': [{
        'name': '@cname',
        'sex|1': [
            '男',
            '女'
        ],
        'idCard': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        'contact': /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
        display_time: '@datetime',
        'status|1': ['正常', '已注销']

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