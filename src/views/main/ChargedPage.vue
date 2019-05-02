<template>
  <div>
    <a-row type="flex" justify="center" align="middle">
      <a-col :span="18">
        <div class="content-card">
          <span class="name-span">车位：</span>
          <span class="num-span">{{ carport }}</span>
        </div>
      </a-col>
    </a-row>

    <a-row type="flex" justify="center" align="middle">
      <a-col :span="18">
        <div class="content-card">
          <span>缴费时间：{{ paytime }}</span>
        </div>
      </a-col>
    </a-row>
    <div style="text-align: center; margin-top: 100px;">
      <a-button @click="back" type="primary" size="large">回到主页</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carport: this.$store.getters.getCarport,
      paytime: this.$store.getters.getChargedTime.format("HH:mm")
    };
  },
  methods: {
    back: function() {
      this.$store.commit("page", 1);
    }
  }
};
</script>

<style scoped>
.content-card {
  inline-size: auto;
  font-size: 20px;
  flex: auto;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}
</style>
