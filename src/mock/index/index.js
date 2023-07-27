import Mock from "mockjs";

// 登录
Mock.mock(/\/nav/,'get',{
    code:1,
    message:'操作成功',
    'data|2':[
        {
            title:'@cname',
            'src|1-13':0,
            'des':'@cparagraph(1,2)',
            'children|7':[
                {
                    title:'@cname',
                    'des':'@cparagraph(1,2)',
                    'id|+1':111
                }
            ],
            'id|+1':1
        }
    ]
})


