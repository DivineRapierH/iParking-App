<template>
  <span>{{ time }}</span>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      time: "",
      flag: false
    };
  },
  computed: {
    getEnd: function() {
      return this.$store.getters.getReserveTime;
    }
  },
  mounted() {
    let time = setInterval(() => {
      if (this.flag == true) {
        clearInterval(time);
      }
      this.timeDown();
    }, 500);
  },
  methods: {
    timeDown() {
      // const endTime = new Date(this.endTime);
      const endTime = this.getEnd;
      const nowTime = moment();
      let endh = endTime;
      let endm = endTime;
      let ends = endTime;
      let nowh = nowTime;
      let nowm = nowTime;
      let nows = nowTime;
      let end =
        (parseInt(moment(endh).format("H")) * 60 +
          parseInt(moment(endm).format("m"))) *
          60 +
        parseInt(moment(ends).format("s"));
      let now =
        (parseInt(moment(nowh).format("H")) * 60 +
          parseInt(moment(nowm).format("m"))) *
          60 +
        parseInt(moment(nows).format("s"));
      let leftTime = end - now;
      let h = this.formate(parseInt((leftTime / (60 * 60)) % 24));
      let m = this.formate(parseInt((leftTime / 60) % 60));
      let s = this.formate(leftTime % 60);
      if (leftTime <= 0) {
        this.flag = true;
        this.$emit("end");
      }
      this.time = `${h}小时${m}分${s}秒`;
    },
    formate(time) {
      if (time >= 10) {
        return time;
      } else {
        return `0${time}`;
      }
    }
  }
};
</script>
