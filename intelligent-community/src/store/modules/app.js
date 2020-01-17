/*
 * @Author: your name
 * @Date: 2020-01-11 13:33:35
 * @LastEditTime: 2020-01-12 17:30:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \intelligent-community\src\store\modules\app.js
 */
import Cookies from 'js-cookie'

const state = {
    sidebar: {
        opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
        withoutAnimation: false
    },
    device: 'desktop'
}

const mutations = {
    TOGGLE_SIDEBAR: state => {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', 1)
        } else {
            Cookies.set('sidebarStatus', 0)
        }
    },
    SET_DIALOG_TITLE: (state, type) => {
        if (type === 'add') {
            state.addFundDialog.title = '新增资金信息'
            state.addFundDialog.type = 'add'
        } else {
            state.addFundDialog.title = '编辑资金信息'
            state.addFundDialog.type = 'edit'
        }
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        Cookies.set('sidebarStatus', 0)
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
    }
}

const actions = {
    toggleSideBar({ commit }) {
        commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}