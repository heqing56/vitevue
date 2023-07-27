<template>
  <div class="default">
    <div>
      <div class="title">WELCOME!欢迎来到主页</div>
      <div class="desc">最新消息:该项目尚未开发完,请用户们敬请期待吧!</div>
    </div>
    <div class="imgs">
      <img style="transform: scale(0.8)" src="../../assets/imgs/headerimg.jpg" alt="" />
      <img
        style="transform: scale(0.9)"
        src="../../assets/imgs/headerimg.jpg"
        alt=""
      />
      <img
       
        src="../../assets/imgs/headerimg.jpg"
        alt=""
      />
      <img
        style="transform: scale(0.9)"
        src="../../assets/imgs/headerimg.jpg"
        alt=""
      />
      <img  style="transform: scale(0.8)" src="../../assets/imgs/headerimg.jpg" alt="" />
    </div>
    <div class="time">
      <div>
        <div>当前日期</div>
        <div>2023-07-20</div>
      </div>
      <div>
        <div>时间</div>
        <div>15:04</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "default", //文件name 也用于路由的name属性值
  title: "主页", //菜单名字
  icon: "House", //一级菜单icon
  order: 1, //用于菜单排序：规则默认为10，小于10向前排，相同序号按文件夹先后顺序
};
</script>

<style scoped lang="scss">
.default {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title {
  font-weight: bolder;
  font-size: 28px;
  letter-spacing: 1px;
}
.desc {
  font-size: 14px;
}
.imgs {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 40px 0;
  transform-style: preserve-3d;
}
.imgs > img {
  width: calc(100% / 5);
  height: auto;
  display: inline-block;
}
.time {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-align: left;
}
.time > div {
  margin: 0 8px;
}
</style>