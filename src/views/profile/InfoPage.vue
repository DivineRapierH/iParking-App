<template>
  <div>
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      style="height:100px;"
    >
      <a-col :span="8" style="height:100px; text-align: center;">
        <a-icon type="smile" theme="twoTone" style="font-size: 60px;" />
      </a-col>
      <a-col :span="12" :offset="2" style="height:100px;">
        <div>
          <a-icon
            type="mobile"
            theme="twoTone"
            style="font-size: 25px; margin-bottom: 10px; text-align: center;"
          />
          {{ phonenum }}
        </div>
        <div>
          <a-icon
            type="car"
            theme="twoTone"
            style="font-size: 25px; text-align: center;"
          />
          {{ license }}
        </div>
      </a-col>
    </a-row>
    <div style="text-align: center; margin-bottom: 30px; margin-top: 90px;">
      <a-button type="primary" @click="changeInfo">修改信息</a-button>
    </div>
    <div style="text-align: center; margin-bottom: 30px;">
      <a-button type="primary" @click="changePassword">修改密码</a-button>
    </div>
    <div style="text-align: center; margin-bottom: 30px;">
      <a-button type="primary" @click="backHome">回到主页</a-button>
    </div>
    <div style="text-align: center;">
      <a-button type="danger" @click="logout">退出登录</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phonenum: "13012344321",
      license: "渝D00001"
    };
  },
  methods: {
    backHome() {
      this.$router.push({ path: "/home" });
    },
    logout() {
      this.$store.commit("userStatus", false);
      this.$router.push({ path: "/user/login" });
    },
    changeInfo() {
      this.$router.push({ path: "/profile/modifyinfo" });
    },
    changePassword() {
      this.$router.push({ path: "/profile/changepassword" });
    }
  }
};
</script>

<style></style>
