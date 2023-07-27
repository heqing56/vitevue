import Mock from "mockjs";
import headerImg from '@/assets/imgs/headerimg.jpg'
// 登录
Mock.mock(/\/login/,'post',{
    code:1,
    message:'登录成功',
    data:{
        
        token:'123456',
        userInfo:{
            name:'汉三',
            age:18,
            id:'001',
            sex:'男',
            headerImg,
            addrName: "@province()-@city()-@county()",
            date: '@datetime("yyyy-MM-dd")',
            desc:'@cparagraph(1,3)'
        }
    }
})
// 退出
Mock.mock(/\/logout/,'post',{
    code:1,
    message:'退出成功',
    data:{
       
    }
})

