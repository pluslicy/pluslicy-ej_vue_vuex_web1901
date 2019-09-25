import {post} from '../http';

export default {
  namespaced:true,
  state:{
    name:"product",
    list:[]
  },
  getters:{

  },
  mutations:{
    resetList(state,list){
      state.list = list;
    }
  },
  actions:{
    // 分页查询
    query({commit},params){
      post("/product/query",params)
      .then((result)=>{
        commit("resetList",result.data);
      })
    }
  }
}