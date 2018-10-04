import Vue from 'vue'
import Router from 'vue-router'

import AccountSignin from '@/components/account/signin.vue'
import AccountSignup from '@/components/account/signup.vue'
import AccountUserPage from '@/components/account/userpage.vue'
import AccountNotif from '@/components/account/notif.vue'
import AccountOAuth from '@/components/account/oauth.vue'
import AccountOAuthCheck from '@/components/account/oauth_check.vue'
import AccountActivation from '@/components/account/activation.vue'
import AccountPasswordReset from '@/components/account/password_reset.vue'
import AccountPasswordResetRequest from '@/components/account/password_reset_req.vue'
import AccountFiles from '@/components/account/files.vue'

import Setting from '@/components/settings/setting.vue'
import SettingUserinfoMe from '@/components/settings/userinfo/me.vue'
import SettingUserinfoUpload from '@/components/settings/userinfo/upload.vue'
import SettingUserinfoPrivacy from '@/components/settings/userinfo/privacy.vue'
import SettingSecurityPassword from '@/components/settings/security/password.vue'
import SettingSecurityOAuth from '@/components/settings/security/oauth.vue'

// import ForumBoards from '@/components/forum/boards.vue'
import ForumMain from '@/components/forum/recent.vue'
import ForumTopic from '@/components/forum/topic.vue'

import NotFoundComponent from '@/components/404.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // 主页面
        {
            path: '/',
            name: 'index',
            component: ForumMain
        },

        // 用户 - 登录
        {
            path: '/account/signin',
            name: 'account_signin',
            component: AccountSignin
        },
        // 用户 - 注册
        {
            path: '/account/signup',
            name: 'account_signup',
            component: AccountSignup
        },
        // 用户 - 激活
        {
            path: '/account/activation',
            name: 'account_activation',
            component: AccountActivation
        },
        // 用户 - 申请重置密码
        {
            path: '/account/lost_password',
            name: 'account_password_reset_request',
            component: AccountPasswordResetRequest
        },
        // 用户 - 重置密码
        {
            path: '/account/password_reset',
            name: 'account_password_reset',
            component: AccountPasswordReset
        },

        // 用户 - 个人主页
        {
            path: '/user/:id(\\S+)',
            name: 'account_userpage',
            component: AccountUserPage
        },

        // 用户 - 个人文件
        {
            path: '/account/files',
            name: 'account_files',
            component: AccountFiles
        },

        // 用户 - 个人提醒
        {
            path: '/notifications',
            name: 'account_notif',
            component: AccountNotif
        },

        // 论坛 - 主页面
        {
            path: '/forum',
            name: 'forum',
            redirect: { name: 'forum_main', params: { page: 1 } }
        },
        // 论坛 - 板块列表
        // {
        //     path: '/forum/boards',
        //     name: 'forum_boards',
        //     component: ForumBoards
        // },
        // 论坛 - 主面板
        {
            path: '/r/:page(\\d+)',
            name: 'forum_main',
            component: ForumMain
        },
        // 论坛 - 主面板 - 板块页面
        {
            path: '/b/:id([a-fA-F0-9]+)/:page(\\d+)?/:name(.+)?',
            name: 'forum_board',
            component: ForumMain
        },
        // 论坛 - 主题新建
        {
            path: '/topic/new',
            name: 'forum_topic_new',
            component: () => import(/* webpackChunkName: "topic-edit" */ './components/forum/topic-edit.vue')
        },
        // 论坛 - 主题编辑
        {
            path: '/topic/edit/:id(\\S+)',
            name: 'forum_topic_edit',
            component: () => import(/* webpackChunkName: "topic-edit" */ './components/forum/topic-edit.vue')
        },
        // 论坛 - 文章页面
        {
            path: '/topic/:id([a-fA-F0-9]+)',
            name: 'forum_topic',
            component: ForumTopic
        },

        // 设置
        {
            path: '/setting',
            name: 'setting',
            redirect: { name: 'setting_user_me' },
            component: Setting
        },
        // 设置 - 用户 - 个人信息
        {
            path: '/setting/user/me',
            name: 'setting_user_me',
            component: SettingUserinfoMe
        },
        // 设置 - 用户 - 我的上传
        {
            path: '/setting/user/upload',
            name: 'setting_user_upload',
            component: SettingUserinfoUpload
        },
        // 设置 - 用户 - 隐私设置
        {
            path: '/setting/user/privacy',
            name: 'setting_user_privacy',
            component: SettingUserinfoPrivacy
        },
        // 设置 - 安全 - 修改密码
        {
            path: '/setting/security/password',
            name: 'setting_security_password',
            component: SettingSecurityPassword
        },
        // 设置 - 安全 - 绑定账号（第三方登录）
        {
            path: '/setting/security/oauth',
            name: 'setting_security_oauth',
            component: SettingSecurityOAuth
        },

        // 管理
        {
            path: '/admin',
            name: 'admin',
            component: () => import(/* webpackChunkName: "admin" */ './components/admin/admin.vue')
        },
        // 管理 - 社区 - 板块
        {
            path: '/admin/forum/board',
            name: 'admin_forum_board',
            component: () => import(/* webpackChunkName: "admin" */ './components/admin/forum/board.vue')
        },
        // 管理 - 社区 - 文章
        {
            path: '/admin/forum/topic/:page(\\d+)?/:name(.+)?',
            name: 'admin_forum_topic',
            component: () => import(/* webpackChunkName: "admin" */ './components/admin/forum/topic.vue')
        },

        // 管理 - 综合 - 用户
        {
            path: '/admin/common/user/:page(\\d+)?/:name(.+)?',
            name: 'admin_common_user',
            component: () => import(/* webpackChunkName: "admin" */ './components/admin/common/user.vue')
        },
        // 管理 - 综合 - 评论
        {
            path: '/admin/common/comment/:page(\\d+)?/:name(.+)?',
            name: 'admin_common_comment',
            component: () => import(/* webpackChunkName: "admin" */ './components/admin/common/comment.vue')
        },
        // 管理 - 综合 - 管理日志
        {
            path: '/admin/common/log/manage/:page(\\d+)?/:name(.+)?',
            name: 'admin_common_manage_log',
            component: () => import(/* webpackChunkName: "admin" */ './components/admin/common/manage-log.vue')
        },

        {
            path: '*',
            component: NotFoundComponent
        },

        // 关于
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './components/about.vue')
        },

        // OAuth
        {
            path: '/account/oauth',
            name: 'account_oauth',
            component: AccountOAuth
        },

        // OAuth Registe Check
        {
            path: '/account/oauth_check',
            name: 'account_oauth_check',
            component: AccountOAuthCheck
        }
    ]
})