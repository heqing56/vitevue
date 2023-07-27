import {
    createStore
} from 'vuex'

const obj =
    import.meta.globEager("./modules/*.js"); // 查找文件
const modules = Object.keys(obj).reduce((modules, modulePath) => {
    console.log(obj,modulePath,11)
    const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
    modules[moduleName] = obj[modulePath].default;
    return modules;
}, {});

const store = createStore({
    modules: {
        ...modules
    }
})

export default store