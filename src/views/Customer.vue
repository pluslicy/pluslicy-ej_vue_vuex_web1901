<template>
  <div id="customer">
    <!-- 按钮 -->
    <div class="btns">
      <el-button size="small" type="primary" @click="handleToAdd">添加</el-button>
      <el-button size="small" type="danger">批量删除</el-button>
    </div>
    <!-- / 按钮 -->
    <!-- 表格 -->
    <el-table :data="list">
      <el-table-column prop="realname" label="姓名"/>
      <el-table-column prop="telephone" label="手机号"/>
      <el-table-column prop="status" label="状态"/>
      <el-table-column label="操作" >
        <template v-slot="record">
          <a href="">删除</a>
          <a href="">修改</a>
        </template>
      </el-table-column>
    </el-table>
    <!-- / 表格 -->
    <!-- 模态框 -->
    <el-dialog :title="title" :visible="visible" @close="handleClose">

      <div slot="footer">
        <el-button size="small">取消</el-button>
        <el-button size="small" type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
    <!-- / 模态框 -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:"顾客管理",
      title :"添加顾客信息",
      visible:false
    }
  },
  created(){
    this.$store.dispatch("customer/findAll");
  },
  computed:{
    list(){
      return this.$store.state.customer.list;
    }
  },
  methods:{
    handleToAdd(){
      this.visible = true;
    },
    handleClose(){
      this.visible = false;
    },
    handleSubmit(){
      let customer = {
        realname:"test001",
        telephone:"18812344321",
        password:"123321"
      }
      this.$store.dispatch("customer/saveOrUpdate",customer)
    }
  }
}
</script>
<style scoped>

</style>