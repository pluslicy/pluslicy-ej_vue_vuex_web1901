<template>
  <div id="customer">
    <!-- 按钮 -->
    <div class="btns">
      <el-button size="small" type="primary" @click="handleToAdd">添加</el-button>
      <el-button size="small" type="danger">批量删除</el-button>
    </div>
    <!-- / 按钮 -->
    <!-- 表格 -->
    <el-table :data="list" v-loading="loading">
      <el-table-column prop="realname" label="姓名"/>
      <el-table-column prop="telephone" label="手机号"/>
      <el-table-column prop="status" label="状态"/>
      <el-table-column label="操作" >
        <template v-slot="slot">
          <a href="" @click.prevent="handleToDel(slot.row.id)">删除</a>
          <a href="" @click.prevent="handleToEdit(slot.row)">修改</a>
        </template>
      </el-table-column>
    </el-table>
    <!-- / 表格 -->
    <!-- 模态框 -->
    <el-dialog :title="title" :visible="visible" @close="handleClose">
      <el-form :model="customer" label-width="80px" labelPosition="left">
        <el-form-item label="姓名">
          <el-input v-model="customer.realname"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="customer.password"/>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="customer.telephone"/>
        </el-form-item>

      </el-form>
      <div slot="footer">
        <el-button size="small" @click="handleClose">取消</el-button>
        <el-button size="small" type="primary" @click="handleSubmit">提交</el-button>
      </div>
    </el-dialog>
    <!-- / 模态框 -->
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      title :"添加顾客信息",
      customer:{}
    }
  },
  created(){
    this.findAllCustomer();
  },
  computed:{
    ...mapState("customer",["list","visible","loading","message"])
  },
  methods:{
    ...mapActions("customer",["openModal","closeModal"]),
    ...mapActions("customer",{
      findAllCustomer:"findAll",
      saveOrUpdateCustomer:"saveOrUpdate",
      deleteCustomerById:"deleteById"
    }),
    handleToDel(id){
      this.deleteCustomerById(id)
      .then(()=>{
        this.$notify({ title:"成功", type:"success", message:this.message })
      });
    },
    handleToAdd(){
      this.title = "添加顾客信息";
      this.customer = {};
      this.openModal();
    },
    handleToEdit(row){
      this.title="修改顾客信息";
      this.customer = row;
      this.openModal();
    },
    handleClose(){
      this.closeModal();
    },
    handleSubmit(){
      this.saveOrUpdateCustomer(this.customer)
      .then((result)=>{
        this.$notify({
          title:"成功", type:"success", message:this.$store.state.customer.message })
      })
    }
  }
}
</script>
<style scoped>

</style>