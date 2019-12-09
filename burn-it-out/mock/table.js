import Mock from 'mockjs'
const Random = Mock.Random
const data = Mock.mock({
    'items|30': [{
        id: '@id',
        'title|1': [
            '非报班培训测试',
            '新安全生产法培训学习班',
            'UMD'
        ],
        src: Random.image('#4A7BF7', 'Hello'),
        'pass|1': [
            '考试',
            '已考'
        ],
        display_StartTime: '@datetime',
        pageviews: '@integer(300, 5000)'
    }]
})

export default [{
    url: '/table/list',
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