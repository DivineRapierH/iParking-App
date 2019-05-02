<template>
  <h1 class="title">{{ parkinglot_title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      parkinglot_title: "西大停车场"
    };
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
}
</style>
