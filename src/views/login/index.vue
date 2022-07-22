<template>
  <a-layout class="container">
    <a-layout class="opt-area">
      <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="Username"
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
          <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </a-layout>
  </a-layout>
</template>

<script>
import {login} from '@/api/login'

export default {
  data(){
    return {
      formState: {
        username: '',
        password: '',
        remember: false
      }
    }
  },
  methods: {
    onFinish(){
      let self = this;
      login(
        self.formState, 
        (result)=>{
          console.log('==> login success');
          console.log(JSON.stringify(result));
          self.$router.replace({path:'/', query:{}}); //replace 方法替换当前路由，不能返回
        }, 
        null);
    },
    onFinishFailed(){

    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: space-around; /* Safari 6.1+ */
  display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
  .opt-area{
    width: auto;
    height: 270px; max-height: 270px;
    padding: 50px 60px 20px 50px;
    border-radius: 20px;
    background-color: white;
    display: -webkit-flex; /* Safari */
    -webkit-justify-content: space-around; /* Safari 6.1+ */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>