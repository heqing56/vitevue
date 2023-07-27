<template>
  <div class="layout"> 
    <Header></Header>
    <Nav></Nav>
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
</template>
<style scoped lang="scss">

$header-height:55px; //header的高 
$nav-width:260px; //导航的宽
.layout{
    width: 100vw;
    padding-top:$header-height;
    position: relative;
}
.main{
    margin-left:$nav-width;
    width: calc(100vw - $nav-width ) ;
    height: calc(100vh - $header-height ) ;
    overflow: auto;
    padding: 10px;
    box-sizing: border-box;
  position: relative;

}
.header{
    position: absolute;
    top: 0px;
    width: 100vw;
    height: $header-height ;
    background: $bg-color-button;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav{
    position: absolute;
    left: 0;
    height: calc(100vh - $header-height);
    width: $nav-width;
    color: $text-color-inverse;
    overflow: auto;

}
// 滚动条的宽度
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
// 滚动条轨道
::-webkit-scrollbar-track {
  background-color:transparent;
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
// 滚动条滑块
::-webkit-scrollbar-thumb {
  background-color: rgb(147,147,153,0.5);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius:2em;
}
</style>