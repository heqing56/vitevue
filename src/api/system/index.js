

import {
	request
} from '../request.js'
 
//  登录
export const getAdminList = data => {
	return request({
		url: "/getAdminList",//对应mock中的接口
		method: 'get',//对应mock中的请求的type
		data
	})
}
