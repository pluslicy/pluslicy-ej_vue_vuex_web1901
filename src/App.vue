<template>
  <div id="app">
    <el-container class="container">
      <el-header height="56px" class="header">
        <div class="title">
          {{title}}
        </div>
      </el-header>
      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="200px" class="left-aside">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @select="selectHandler">
            <el-menu-item index="1">
              <i class="el-icon-s-home"></i>
              <span slot="title">dashboard</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-user-solid"></i>
              <span slot="title">顾客管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">栏目设置</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-s-finance"></i>
              <span slot="title">产品管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-message-solid"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- / 左侧导航 -->
        <!-- 右侧内容 -->
        <el-main>
          <!-- <Product/> -->
          <!-- 面包屑导航 -->
          <div class="breadcrumb">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
              <el-breadcrumb-item>{{currentViewName}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <!-- 动态组件 -->
          <component v-bind:is="currentView"></component>
        </el-main>
        <!-- 右侧内容 -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Customer from './views/Customer'
import Category from './views/Category'
import Product from './views/Product'

export default {
  name: 'app',
  data(){
    return {
      title:"E洁家政服务平台",
      currentView:"Customer",
      currentViewName:"顾客管理"
    }
  },
  components: {
    Customer,
    Category,
    Product
  },
  methods:{
    selectHandler(index){
      switch(index){
        case "1":
          break;
        case "2":
          this.currentView = "Customer"
          this.currentViewName = "顾客管理"
          break;
        case "3":
          this.currentView = "Category"
          this.currentViewName="栏目管理"
          break;
        case "4":
          this.currentView = "Product"
          this.currentViewName="产品管理"
          break;
        case "5":
          break;
        default:

      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.container {
  position: absolute;
  width:100%;
  top:0;bottom: 0;
}
.container > .header {
  background: #30619e;
  color: #ffffff;
  line-height: 56px;
}
.header > .title {
  font-size: 18px;
  font-weight: bold;
}
.container .left-aside {
  border-right: 1px solid #e6e6e6;
}
.breadcrumb {
  margin-bottom: 1em;
}
</style>
