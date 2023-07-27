

import {
	request
} from '../request.js'
 
//  登录
export const login = data => {
	return request({
		url: "/login",//对应mock中的接口
		method: 'post',//对应mock中的请求的type
		data
	})
}
//  退出
export const logout = data => {
	return request({
		url: "/logout",//对应mock中的接口
		method: 'post',//对应mock中的请求的type
		data
	})
}
