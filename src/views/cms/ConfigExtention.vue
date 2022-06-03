<template>
  <Layout>
    <div class="header-config-extention flex-between">
      <div class="header-left flex-center-left">
        <div class="item-search">
          <SearchInput />
        </div>
        <div class="item-select-status">
          <SelectInput
            :selected="selectedOption"
            :listSelect="listOptionStatus"
            @getChangeSelect="changeSelectOption"
          />
        </div>
      </div>
      <div class="header-right flex-center-right">
        <div class="button-custom-white flex-center">
          <img
            src="@/assets/images/icons/icon-plus.svg"
            :width="15"
            :height="15"
            alt="icon plus"
          />
          <span class="text-label text-black">Thêm số</span>
        </div>
        <div class="button-custom-blue flex-center">
          <img
            src="@/assets/images/icons/icon-pen-white.svg"
            :width="15"
            :height="15"
            alt="icon pencil"
          />
          <span class="text-label text-white">Tạo tự động</span>
        </div>
      </div>
    </div>
    <div class="table-config-extention white-container">
      <TableCustom />
    </div>
  </Layout>
</template>

<script>
import SelectInput from "@/components/configExtention/configSelect.vue";
import SearchInput from "@/components/configExtention/configSearch.vue";
import TableCustom from "@/components/configExtention/configTableCustom.vue";
import Layout from "@/layouts/AppLayout.vue";
import { ref } from "vue";
export default {
  components: {
    Layout,
    SearchInput,
    SelectInput,
    TableCustom,
  },
  setup() {
    const selectedOption = ref({
      // name: "Lời chào",
      // id: 3,
    });
    const listOptionStatus = ref([
      {
        name: "Ngắt cuộc gọi",
        id: 1,
      },
      {
        name: "Thông báo",
        id: 2,
      },
      {
        name: "Lời chào",
        id: 3,
      },
      {
        name: "Số nội bộ",
        id: 4,
      },
      {
        name: "Nhóm nội bộ",
        id: 5,
      },
      {
        name: "Khung thời gian",
        id: 6,
      },
      {
        name: "Chuyển tiếp",
        id: 7,
      },
      {
        name: "Bỏ qua",
        id: 8,
      },
    ]);
    const totalRowData = ref(0);
    const changeSelectOption = (value) => {
      selectedOption.value = value;
    };
    return {
      selectedOption,
      listOptionStatus,
      totalRowData,
      changeSelectOption,
    };
  },
};
</script>

<style scoped>
.header-config-extention {
  margin-bottom: 16px;
}
.item-search {
  margin-right: 8px;
}
.button-custom-white > img {
  margin-right: 9.42px;
}
.button-custom-blue {
  margin-left: 8px;
}
.button-custom-blue > img {
  margin-right: 9.44px;
}
.table-config-extention {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
</style>