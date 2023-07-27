import {
	request
} from '../request.js'
 
//  文章
export const des = data => {
	return request({
		url: "/des",//对应mock中的接口
		method: 'get',//对应mock中的请求的type
		data
	})
}

