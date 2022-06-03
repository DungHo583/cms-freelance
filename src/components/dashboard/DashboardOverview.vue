<template>
  <b-col cols="4">
    <div class="overview-item">
      <div class="title-overview-item">
        <h3 class="text-white text-title-overview">{{ dataOverview.title }}</h3>
      </div>
      <div class="content-overview-item">
        <span class="text-white text-content-overview">{{
          dataOverview.quantity
        }}</span>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: {
    dataOverview: Object,
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>
.overview-item {
  min-width: 207.12px;
  width: 100%;
  height: 88px;
  border-radius: 16px;
  overflow: hidden;
  padding: 14px 20px;
  background-image: url(@/assets/images/bg-overview.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 3px 30px rgba(37, 93, 220, 0.24));
  /* margin-right: 16px; */
  /* margin-bottom: 24px; */
}
.title-overview-item {
  width: 100%;
  margin-bottom: 8px;
}
.title-overview-item > .text-title-overview {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 0 !important;
}
.content-overview-item > .text-content-overview {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
}
</style>