let routes = []; //导航树形结构路由
let routesArr = []; //导航一维数组结构和自定义路由结构
const obj = import.meta.globEager("@/pages/**/*.vue"); // 查找pages下的所有文件（无论层级）
Object.keys(obj).reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(
    /\/src\/pages\/(.*)\/(.*).vue/,
    "$1/$2"
  );
  const noRouter = ["/components", "/noRouter"]; //该数组中的目录或文件，不会自动加入到路由中
  for (const item of noRouter) {
    if (moduleName.includes(item)) return;
  }
  const value = obj[modulePath].default;
  if (value.hide) return; //在页面中添加hide属性表示该页面不自动配置路由
  const template = {
    //路由模板
    path: "/" + moduleName,
    name: value.name,
    meta: {
      order: value.order || 10,
      title: value.title,
      icon: value.icon || "House",
      requireAuth: true,
    },
    component: () => import(modulePath),
  };
  createNav(moduleName, template);
}, {});

//遍历文件路径 判断是用文件夹还是文件当路由名 创建一维数组的路由信息给routesArr
function createNav(moduleName, value) {
  const isChildren = moduleName.split("/");
  isChildren.forEach((item, index) => {
    if (isChildren.length - 1 == index) {
      routesArr.push({
        id: item == "index" ? isChildren[index - 1] : item,
        parentId:
          item == "index" ? isChildren[index - 2] || 0 : isChildren[index - 1],
        ...value,
      });
    }
  });
}

// 自定义添加路由
const customRoute = [
  {
    component: () => import("../../pages/about/index.vue"),
    id: "custom", //如含有后代路由，同级数组形式，非属性children的书写形式，自定义id 后代便于挂载
    meta: { order: 13, title: "引用关于我", icon: "House", requireAuth: true },
    name: "custom",
    parentId: 0, // 需要挂在在哪个目录下  0代表根节点
    path: "/custom",
    children: [
      {
        component: () => import("../../pages/about/index.vue"),
        meta: {
          order: 1,
          title: "自定义路由1",
          icon: "House",
          requireAuth: true,
        },
        name: "customone",
        parentId: 0,
        path: "/custom/one",
      },
    ],
  },
  {
    component: () => import("../../pages/about/index.vue"),
    meta: { order: 2, title: "自定义路由2", icon: "House", requireAuth: true },
    name: "customtwo",
    parentId: "custom", // 需要挂在在哪个目录下  0代表根节点
    path: "/custom/two",
  },
];
routesArr.push(...customRoute); //合并一维数组路由和自定义路由

// 调用方法， 原始数据, result为树形结构数据 赋值给routes
routes = generateOptions(routesArr);

// 开始递归方法 生成树形结构
function generateOptions(params) {
  let result = [];
  for (const param of params) {
    if (param.parentId === 0) {
      // 判断是否为顶层节点
      let parent = {
        id: param.id,
        ...param,
      };
      let children = getchilds(param.id, params); // 获取子节点
      parent.children = !!children.length ? getchilds(param.id, params) : null;
      if (param.children) {
        //判断原数据中是否喊含树形结构
        parent.children = parent.children || [];
        parent.children.push(...param.children);
        parent.children.sort(compare("order"));
      }
      result.push(parent);
    }
  }
  return result;
}
// 递归
function getchilds(id, array) {
  const childs = [];
  for (const arr of array) {
    // 循环获取子节点
    if (arr.parentId === id) {
      childs.push({
        id: arr.id,
        ...arr,
      });
    }
  }
  for (const child of childs) {
    // 获取子节点的子节点
    const childscopy = getchilds(child.id, array); // 递归获取子节点
    if (childscopy.length > 0) {
      child.children = childscopy;
    }
  }
  return childs.sort(compare("order"));
}

//排序规则
function compare(key) {
  return function (a, b) {
    let value1 = a.meta[key];
    let value2 = b.meta[key];
    return value1 - value2; //降序只需要  return value2- value1
  };
}
const routesSort = routes.sort(compare("order")); //根节点排序
export default routesSort;
