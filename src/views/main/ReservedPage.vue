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
          <span>{{ message }}</span>
          <TimeDown @end="setMessage" v-if="visible"></TimeDown>
        </div>
      </a-col>
    </a-row>
    <div style="text-align: center; margin-top: 100px;">
      <a-button @click="parked" type="primary" size="large">我已到达</a-button>
    </div>
    <div style="text-align: center; margin-top: 20px;">
      <a-button @click="cancel" type="danger" size="large">取消预约</a-button>
    </div>
  </div>
</template>

<script>
import TimeDown from "@/components/TimeDown.vue";
import moment from "moment";
// import ParkinglotHead from "@/components/ParkinglotHead.vue";
export default {
  components: {
    TimeDown
  },
  data() {
    return {
      message: "倒计时: ",
      carport: this.$store.getters.getCarport,
      visible: true
    };
  },
  methods: {
    setMessage: function() {
      this.message = "时间到！";
      this.visible = false;
    },
    parked: function() {
      this.$store.commit("page", 3);
      this.$store.commit("park", moment());
    },
    cancel: function() {
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
