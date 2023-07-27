

import {
	request
} from '../request.js'
 
//  菜单导航
export const nav = data => {
	return request({
		url: "/nav",//对应mock中的接口
		method: 'get',//对应mock中的请求的type
		data
	})
}

