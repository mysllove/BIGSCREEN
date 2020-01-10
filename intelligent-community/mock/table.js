import Mock from 'mockjs'

const data = Mock.mock({
    'items|30': [{
        'integer': '@natural',
        'id|1': [
            '1单元',
            '2单元',
            '3单元',
            '3单元',
            '4单元',
            '5单元',
            '6单元',
            '7单元',
            '8单元'
        ],
        'buildingNo|1': [
            '1号楼',
            '2号楼',
            '3号楼',
            '4号楼'
        ],
        'familyRoom|1': [
            '101室',
            '102室',
            '103室',
            '104室',
            '201室',
            '202室',
            '301室',
            '401室'
        ],
        'city': '@city',
        'district': '@city(true)',
        'street': '浦兴街道',
        'committee': '银桥花苑居委',
        'area': '120m²',
        'plot': '银桥花苑',
        'useRoom|1': [
            '民宅',
            '公寓'
        ],
        'householdsNum': '1人',
        'nature': '住宅',
        'styleRoom|1': ['多层', '单层'],
        'nameRoom': '@cname',
        'name': '@cname()',
        'idCard': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        'sex|1': [
            '男',
            '女'
        ],
        'marriage|1': ['已婚', '未婚'],
        'culture|1': ['高中', '大专', '本科'],
        'ethnic|1': ['汉', '非汉'],
        'face|1': ['党员', '团员', '群众'],
        'registered|1': ['农村', '城市'],
        'address': '@county(true)',
        'phone': /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
        'check': '@datetime("yyyy-MM-dd A HH:mm:ss")',
        'buildTime': '@date("yyyy-MM-dd")',
        'regexp': /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        'real': '物业公司',
        'contact': /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
        'status|1': ['正常', '已注销'],
        display_time: '@datetime',
        'pageviews|1-5': 1
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