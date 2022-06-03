<template>
  <Layout>
    <div class="flex-top overview-infor">
      <!-- overview -->
      <div class="col-width-60 col-left">
        <div class="white-container">
          <div class="title-container">
            <h3 class="text-title">Tổng quan</h3>
          </div>
          <div class="content-container flex-top grid-custom">
            <b-container class="">
              <b-row>
                <Overview
                  v-for="(data, idx) in listOverview"
                  :key="idx"
                  :dataOverview="data"
                />
              </b-row>
            </b-container>
          </div>
        </div>
      </div>
      <!-- infor -->
      <div class="col-width-40 col-right">
        <div class="white-container">
          <div class="title-container">
            <h3 class="text-title">Công ty Cổ phần Công nghệ ABC</h3>
          </div>
          <div class="content-container">
            <div
              class="list-item-infor flex-left"
              v-for="(itemInfo, idx) in inforCompany"
              :key="idx"
            >
              <div class="keyname-item-infor">
                <span class="text-gray">{{ itemInfo.keyName }}</span>
              </div>
              <div class="value-item-infor">
                <span class="text-black">{{ itemInfo.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-top list-operator">
      <b-container class="">
        <b-row>
          <b-col cols="3" v-for="(item, idx) in dataOperator" :key="idx">
            <Operator :dataOperator="item" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/AppLayout.vue";
import Overview from "@/components/dashboard/DashboardOverview.vue";
import Operator from "@/components/dashboard/DashboardOperator.vue";
// @ is an alias to /src
import { ref } from "vue";

export default {
  components: {
    Layout,
    Overview,
    Operator,
  },
  setup() {
    const listOverview = ref([
      {
        title: "Số máy ngoại tuyến",
        quantity: 8,
      },
      {
        title: "Số máy trực tuyến",
        quantity: 12,
      },
      {
        title: "Thông thoại",
        quantity: 4,
      },
      {
        title: "Giữ cuộc gọi",
        quantity: 0,
      },
      {
        title: "Số máy gọi đi",
        quantity: 12,
      },
      {
        title: "Số máy gọi đến",
        quantity: 12,
      },
    ]);
    const inforCompany = ref([
      {
        keyName: "Gói dịch vụ:",
        value: "PREMIUM",
      },
      {
        keyName: "Trạng thái:",
        value: "Mở 2 chiều",
      },
      {
        keyName: "Dung lượng:",
        value: "16GB",
      },
      {
        keyName: "Còn trống:",
        value: "4GB",
      },
      {
        keyName: "Đã sử dụng:",
        value: "12GB",
      },
      {
        keyName: "Phần trăm sử dụng:",
        value: "80%",
      },
      {
        keyName: "IP address:",
        value: "113.22.154.36",
      },
    ]);
    const dataOperator = ref([
      {
        name: "Nguyễn Thị Kim Dung",
        phone: "0989888999",
        status: "ONLINE",
        typeNumber: "101",
      },
      {
        name: "Trần Mỹ Ngọc",
        phone: "0989888999",
        status: "ONLINE",
        typeNumber: "101",
      },
      {
        name: "Nguyễn Thị Kim Nga",
        phone: "0989888999",
        status: "OFFLINE",
        typeNumber: "101",
      },
      {
        name: "Lê Vũ Khánh My",
        phone: "0989888999",
        status: "OFFLINE",
        typeNumber: "101",
      },
      {
        name: "Huỳnh Ngọc Liên",
        phone: "0989888999",
        status: "OFFLINE",
        typeNumber: "101",
      },
      {
        name: "Huỳnh Thị Phương",
        phone: "0989888999",
        status: "OFFLINE",
        typeNumber: "101",
      },
      {
        name: "Lê Mỹ Kỳ",
        phone: "0989888999",
        status: "ONLINE",
        typeNumber: "101",
      },
      {
        name: "Hồ Mỹ Thuý",
        phone: "0989888999",
        status: "ONLINE",
        typeNumber: "101",
      },
      {
        name: "Nguyễn Hoài Thương",
        phone: "0989888999",
        status: "ONLINE",
        typeNumber: "101",
      },
      {
        name: "Võ Hồng Ngọc",
        phone: "0989888999",
        status: "ONLINE",
        typeNumber: "101",
      },
    ]);
    return {
      listOverview,
      inforCompany,
      dataOperator,
    };
  },
};
</script>

<style scoped>
.overview-infor {
  height: 326px;
}
.overview-infor > .col-left,
.col-right {
  height: 100%;
}
.white-container {
  height: 100%;
}
.grid-custom {
  padding-top: 8px;
}
.grid-custom > .container {
  padding: 0 !important;
}
.grid-custom > .container > .row > * {
  padding-right: 8px !important;
  padding-left: 8px !important;
  margin-bottom: 24px;
}
.list-item-infor {
  width: 100%;
  margin-bottom: 12px;
}
.list-item-infor:last-child {
  margin-bottom: 0;
}
.list-item-infor > .keyname-item-infor {
  min-width: 156px;
  margin-right: 8px;
}
.list-item-infor > .keyname-item-infor > span {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.list-item-infor > .value-item-infor > span {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.list-operator {
  margin-top: 40px;
}
.list-operator > .container {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.list-operator > .container > .row > * {
  padding-right: 8px !important;
  padding-left: 8px !important;
  margin-bottom: 24px;
}
@media only screen and (min-width: 1400px) {
  .list-operator > .container {
    max-width: 100% !important;
  }
}
</style>