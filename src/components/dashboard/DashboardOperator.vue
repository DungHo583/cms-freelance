<template>
  <div
    class="operator-item"
    :class="dataOperator.status == 'ONLINE' ? 'operator-item-active' : ''"
  >
    <div class="header-operator-item flex-between">
      <div class="flex-center-left">
        <img
          :src="getIconPhone(dataOperator.status)"
          :width="14.26"
          :height="14.25"
          alt="icon phone"
        />
        <h3
          class="text-title-operator"
          :class="dataOperator.status == 'ONLINE' ? 'text-white' : 'text-black'"
        >
          {{ dataOperator.typeNumber }}
        </h3>
      </div>
      <div class="">
        <img
          :src="getIconDot(dataOperator.status)"
          :width="8"
          :height="8"
          alt="icon dotcom"
        />
        <span
          :class="
            dataOperator.status == 'ONLINE' ? 'text-white' : 'text-gray-light'
          "
          >{{
            dataOperator.status == "ONLINE" ? "Trực tuyến" : "Ngoại tuyến"
          }}</span
        >
      </div>
    </div>
    <div class="content-operator-item">
      <p
        class="text-content-operator"
        :class="dataOperator.status == 'ONLINE' ? 'text-white' : 'text-black'"
      >
        {{ dataOperator.name }}
      </p>
      <p
        class="text-phone-operator"
        :class="dataOperator.status == 'ONLINE' ? 'text-white' : 'text-gray'"
      >
        Đầu số: {{ dataOperator.phone }}
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    dataOperator: Object,
  },
  setup(props) {
    const getIconPhone = (status) => {
      const svg = ref("");
      if (status == "ONLINE") {
        svg.value = "icon-phone-online";
      } else {
        svg.value = "icon-phone-offline";
      }
      const imgUrl = new URL(
        `../../assets/images/icons/${svg.value}.svg`,
        import.meta.url
      ).href;
      return imgUrl;
    };

    const getIconDot = (status) => {
      const svg = ref("");
      if (status == "ONLINE") {
        svg.value = "icon-online";
      } else {
        svg.value = "icon-offline";
      }
      const imgUrl = new URL(
        `../../assets/images/icons/${svg.value}.svg`,
        import.meta.url
      ).href;
      return imgUrl;
    };

    return {
      props,
      getIconPhone,
      getIconDot,
    };
  },
};
</script>

<style scoped>
.operator-item {
  min-width: 270px;
  height: 112px;
  width: 100%;
  box-shadow: 0px 2px 40px rgba(0, 28, 100, 0.06);
  border-radius: 16px;
  padding: 12px 20px;
  background: #ffffff;
}
.operator-item-active {
  background: linear-gradient(107.18deg, #1f8b30 0%, #89d764 100%) !important;
}
.text-title-operator {
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin: 0 !important;
}
.header-operator-item {
  margin-bottom: 8px;
}
.header-operator-item > div > img {
  margin-right: 10.24px;
}
.text-content-operator {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 2px !important;
}
.text-phone-operator {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>