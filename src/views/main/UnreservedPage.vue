<template>
  <div>
    <a-row type="flex" justify="center" align="middle">
      <a-col :span="16">
        <div class="content-card">
          <span class="name-span">可用车位：</span>
          <span class="num-span">{{ available_num }}</span>
        </div>
      </a-col>
    </a-row>

    <a-row type="flex" justify="center" align="middle">
      <a-col :span="16">
        <div class="content-card">
          <span class="name-span">所有车位：</span>
          <span class="num-span">{{ total_num }}</span>
        </div>
      </a-col>
    </a-row>

    <div class="main-button">
      <div>
        <a-time-picker
          v-model="reservetime"
          format="HH:mm"
          inputReadOnly
          playceholder
          style="height: 100%; margin-bottom: 10px;"
        />
      </div>
      <a-button @click="reserve" type="primary" size="large" :loading="loading"
        >立即预约</a-button
      >
    </div>
    <a-modal
      title="请选择预约时间！"
      v-model="time_visible"
      @Ok="handleOk"
      style="text-align: center;"
    >
      <template slot="footer">
        <a-button key="submit" type="primary" @click="handleOk">OK</a-button>
      </template>
      <p>预约的是到达时间哦!</p>
    </a-modal>
    <a-modal
      title="预约成功！"
      v-model="reserve_visible"
      @Ok="handleReserveOk"
      style="text-align: center;"
    >
      <template slot="footer">
        <a-button key="submit" type="primary" @click="handleReserveOk"
          >OK</a-button
        >
      </template>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      available_num: 20,
      total_num: 100,
      reservetime: null,
      loading: false,
      time_visible: false,
      reserve_visible: false
    };
  },
  methods: {
    reserve() {
      if (this.reservetime == null) {
        this.time_visible = true;
      } else {
        this.loading = true;
        // let time = moment(this.reservetime).format("HH:mm");
        console.log(this.reservetime);
        this.$store.commit("reserve", this.reservetime);
        setTimeout(() => {
          this.reserve_visible = true;
          this.loading = false;
        }, 1000);
      }
    },
    handleOk() {
      this.time_visible = false;
    },
    handleReserveOk() {
      this.reserve_visible = false;
      this.$store.commit("page", 2);
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
.num-span {
  text-align: right;
  float: right;
}
.main-button {
  margin-top: 80px;
  text-align: center;
}
</style>
