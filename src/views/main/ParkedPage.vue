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
          <span>停车时间：{{ parktime }}</span>
        </div>
      </a-col>
    </a-row>
    <div style="text-align: center; margin-top: 100px;">
      <a-button @click="pay" type="primary" size="large">缴费</a-button>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      carport: this.$store.getters.getCarport,
      parktime: this.$store.getters.getParkedTime.format("HH:mm")
    };
  },
  methods: {
    pay: function() {
      this.$store.commit("page", 4);
      this.$store.commit("pay", moment());
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
