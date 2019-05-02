<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          size="large"
          type="text"
          v-decorator="[
            'userName',
            {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            }
          ]"
          placeholder="账户（即手机号）"
        >
          <a-icon
            slot="prefix"
            type="user"
            :style="{ color: 'rgba(0,0,0,.25)' }"
          />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          size="large"
          type="password"
          autocomplete="false"
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            }
          ]"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            :style="{ color: 'rgba(0,0,0,.25)' }"
          />
        </a-input>
      </a-form-item>

      <a-form-item style="margin-top:24px; text-align: center">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="state.loginBtn"
          :disabled="state.loginBtn"
          >确定</a-button
        >或者
        <a href="/user/register">现在注册</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// import { setTimeout } from "timers";
// import md5 from "md5";
// import { setCookie, getCookie } from "@/assets/js/cookie.js";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  // mounted() {
  //   /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
  //   if (getCookie("username")) {
  //     this.$router.push("/home");
  //   }
  // },
  data() {
    return {
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      // loginType: 0,
      // form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false
        // login type: 0 email, 1 username, 2 telephone
        // loginType: 0,
      }
    };
  },
  methods: {
    handleSubmit() {
      //this.$store.commit("userStatus", true);
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          // this.$store.reserve(values);
          this.$store.commit("userStatus", true);
          this.$router.push("/home");
        }
      });
      // ---------------------------------------------------------
      // let userinfo = {
      //   name: "admin",
      //   password: "admin",
      //   license: "渝D00001",
      //   parkinfo: {
      //     reservetime: null,
      //     leavetime: null,
      //     carport: "a01"
      //   },
      //   records: [
      //     { reservetime: null, leavetime: null, carport: "", price: 0 }
      //   ]
      // };

      // let a = null;
      // setTimeout(a => a, 10000);
      // a = this.getFieldsValue();
      // setTimeout(a => a, 10000);
      // console.log(a);
      // setTimeout(a => a, 10000);
      // e.preventDefault();
      // this.form.validateFields((err, values) => {
      //   if (!err) {
      //     console.log("Received values of form: ", values);
      //   }
      // });
    }
  }
};
</script>

<style scoped>
.login-button {
  width: 100%;
}
</style>
