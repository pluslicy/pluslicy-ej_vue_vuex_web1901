<template>
  <div id="product">
    <!-- {{productList}} -->
    <!-- 搜索栏 -->
    {{params}}
    <el-form :inline="true">
      <el-form-item label="姓名">
        <el-input size="small" v-model="params.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="handleQuery">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="productList.list" >
      <el-table-column type="selection" width="55px"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="单价" prop="price"></el-table-column>
      <el-table-column label="状态" prop="status"></el-table-column>
      <el-table-column label="所属分类" prop="categoryId"></el-table-column>
      <el-table-column label="操作" width="150px" align="center">
        <template v-slot="slot">
          <a href="">删除</a> &nbsp;
          <a href="">修改</a> &nbsp;
          <a href="">详情</a> &nbsp;
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      @current-change="handlePageChange"
      :page-size="params.pageSize"
      :current-page="params.page+1"
      :total="productList.total">
    </el-pagination>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      name:"产品管理",
      params:{
        page:0,
        pageSize:5
      }
    }
  },
  created(){
    this.queryProduct(this.params);
  },
  computed:{
    ...mapState("product",{
      productList:"list"
    })
  },
  methods:{
    ...mapActions("product",{
      queryProduct:"query"
    }),
    handleQuery(){
      this.queryProduct(this.params)
    },
    handlePageChange(page){
      this.params.page = page-1;
      this.queryProduct(this.params)
    }
  }
}
</script>
<style scoped>

</style>