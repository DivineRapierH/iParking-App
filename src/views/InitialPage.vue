<template>
  <div>
    <ParkinglotHead></ParkinglotHead>
    <UnreservedPage v-if="getPage === 1"></UnreservedPage>
    <ReservedPage v-if="getPage === 2"></ReservedPage>
    <ParkedPage v-if="getPage === 3"></ParkedPage>
    <ChargedPage v-if="getPage === 4"></ChargedPage>
  </div>
</template>

<script>
import ParkinglotHead from "@/components/ParkinglotHead.vue";
import UnreservedPage from "@/views/main/UnreservedPage.vue";
import ReservedPage from "@/views/main/ReservedPage.vue";
import ParkedPage from "@/views/main/ParkedPage.vue";
import ChargedPage from "@/views/main/ChargedPage.vue";

export default {
  components: {
    ParkinglotHead,
    UnreservedPage,
    ReservedPage,
    ParkedPage,
    ChargedPage
  },
  // data() {
  //   return {
  //     page_state: getPage
  //   };
  // },
  computed: {
    getPage: function() {
      return this.$store.getters.getPage;
    }
  }
};
</script>

<style scoped></style>
