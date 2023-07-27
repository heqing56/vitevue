import Mock from "mockjs";

Mock.mock(/\/des/,'get',{
    code:1,
    message:'操作成功',
    'data|10':[
'@cparagraph(10,20)'
    ]
        
    
})
