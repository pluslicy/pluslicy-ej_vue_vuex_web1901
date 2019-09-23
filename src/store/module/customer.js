import http from '../http'

export default {
  namespaced:true,
  state:{
    name:"customer",
    list:[]
  },
  getters:{

  },
  mutations:{
    // 重置list
    resetList(state,list){
      state.list = list;
    }
  },
  actions:{
    saveOrUpdate(context,customer){
      http
      .post("/customer/saveOrUpdate",customer)
      .then((result)=>{
        console.log(result);
        context.dispatch("findAll");
      })
    } ,
    findAll(context){
      http
      .get("/customer/findAll")
      .then((result)=>{
        // 将查询到的数据通过mutations设置到state中
        context.commit("resetList",result.data);
      });
    }
  }
}