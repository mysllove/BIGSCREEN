import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/table/list',
        method: 'get',
        params
    })
}

export function fetchComments() {
    return request({
        url: `/table/smallTable`,
        method: 'get'
    })
}