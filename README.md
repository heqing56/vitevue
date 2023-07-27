# Vue 3 + Vite

## 开发环境版本说明
    1.作者开发版本
        node:16.20.0
        yarn:1.22.19
        npm:8.19.4

## 路由规则说明
    1.可根据pages目录下的文件自动生成路由，见'@/router/pages/index.js'
        自定义路由模版对象示例：
            {
                component: () => import("@/pages/about/index.vue"),
                id: "custom", //如含有后代路由，同级数组形式，非属性children的书写形式，自定义id 后代便于挂载
                meta: { 
                    order: 13, title: "引用关于我", icon: "House", requireAuth: true 
                    },
                name: "custom",
                parentId: 0, // 需要挂在在哪个路由下，将会加入到它的children中  0代表根节点,值为它对应的id
                path: "/custom",
                children: []
            }
        ①可对常量noRouter内添加文件名或文件夹名来忽略该文件自动生成路由
        ②可对常量customRoute内添加自定义路由，该方法为传统添加路由方法
        ③可在路由模版对象中meta属性添加order属性，对该路由排序，默认为10
        ④可忽略pages下任一文件，需在对应页面.vue页面中添加属性hide:true
        ⑤通过路由模版对象中parentId的值，可自定义挂着路由路由模版对象中id相同的目录,如果parentId为0,则挂着根目录
        
    2.pages下页面.vue参数：详细配置可见'@/pages/default/index.vue'
        示例：
            export default {
                name: "default", //文件name 也用于路由的name属性值
                title: "主页", //菜单名字
                icon: "House", //一级菜单icon
                order: 1, //用于菜单排序：规则默认为10，小于10向前排，相同序号按文件夹先后顺序
            }
        ①name:生成路由必填，既是文件name,又是路由name,不可与其它页面重复
        ②title:生成路由必填，会生成菜单名字
        ③icon:选填，一级路由菜单icon,默认为House
        ④order:选填，菜单排序，规则默认为10，小于10向前排，相同序号按文件夹先后顺序
        ⑤hide:选填,是否不自动生成路由，默认false,可设为true

## 自定义配置

 [Vite 快速配置参考](https://cn.vitejs.dev/config/).

### 依赖下载

```sh
yarn
```

### 运行

```sh
yarn dev
```

### 打包

```sh
yarn build
```


