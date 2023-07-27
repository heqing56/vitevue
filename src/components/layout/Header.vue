<template>
  <div class="header">
    <div>
      <div>名字还没有想好</div>
    </div>
    <div class="right">
      <el-avatar :size="30" :src="headerImg" />
      <div  @click="myinfoFn" style="margin: 10px;">{{ name }}</div>
      <div  @click="logoutFn">退出</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import {logout} from '@/api/login'
import {clearStore} from '@/utils/store'
import {useStore} from 'vuex'
export default {
  setup(){
    const router=useRouter()
    const store=useStore()
    const state=reactive({
      name:store.state.login.userInfo.name,
      headerImg:store.state.login.userInfo.headerImg,
      logoutFn(){
        logout().then(res=>{
          if(res.code){
            clearStore()
            router.push('/login')
          }
        })
      },
      myinfoFn(){
        router.push('/system/user/myinfo')
      }
    })
    return{
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.header{
  padding:0 10px;
  box-sizing: border-box;
}
.right{
  display: flex;
  font-size: $font-size-base;
  text-align: right;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}

</style>