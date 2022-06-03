<template>
  <div class="table-custom-component">
    <table class="table-custom">
      <thead class="header-table-custom">
        <tr>
          <th
            class="title-header-col"
            v-for="(item, idx) in headerTable"
            :key="idx"
            :style="`min-width: ${item.width}px`"
          >
            <span class="text-black text-title-header">{{ item.title }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="row-content-table"
          v-for="(content, idx) in contentTable"
          :key="idx"
        >
          <td class="content-col">
            <span class="text-black text-body-table">{{ idx + 1 }}</span>
          </td>
          <td class="content-col">
            <span class="text-black text-body-table">
              {{ content.internalNumber }}
            </span>
          </td>
          <td class="content-col">
            <span class="text-black text-body-table">
              {{ content.displayName }}
            </span>
          </td>
          <td class="content-col">
            <span class="text-black text-body-table">{{ content.type }}</span>
          </td>
          <td class="content-col">
            <span class="text-black text-body-table">{{ content.status }}</span>
          </td>
          <td class="content-col">
            <div class="flex-center-left">
              <div class="icon-action-table flex-center">
                <img
                  src="@/assets/images/icons/icon-read.svg"
                  alt="icon read"
                />
              </div>
              <div class="icon-action-table flex-center">
                <img
                  src="@/assets/images/icons/icon-pen-gray.svg"
                  alt="icon edit"
                />
              </div>
              <div class="icon-action-table flex-center">
                <img
                  src="@/assets/images/icons/icon-trash.svg"
                  alt="icon delete"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- paginate -->
    <div class="paginate-table flex-between">
      <div class="info-paginate">
        <span class="text-gray text-info-paginate">
          Đang xem 20 - 40 của 457
        </span>
      </div>
      <!--  -->
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
      <!--  -->
      <SelectCustom
        :selected="selectedOption"
        :listSelect="listOption"
        @getChangeSelect="changeSelectOption"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SelectCustom from "@/components/configExtention/components/paginateSelectCustom.vue";
export default {
  components: {
    SelectCustom,
  },
  setup() {
    const selectedOption = ref({
      name: "20",
      id: 2,
      total: 20,
    });
    const listOption = ref([
      {
        name: "10",
        id: 1,
        total: 10,
      },
      {
        name: "20",
        id: 2,
        total: 20,
      },
      {
        name: "30",
        id: 3,
        total: 30,
      },
      {
        name: "40",
        id: 4,
        total: 40,
      },
      {
        name: "50",
        id: 5,
        total: 50,
      },
    ]);
    const headerTable = ref([
      {
        title: "#",
        key: "unit",
        width: 24,
      },
      {
        title: "Số nội bộ",
        key: "internalNumber",
        width: 180,
      },
      {
        title: "Tên hiển thị",
        key: "displayName",
        width: 272,
      },
      {
        title: "Loại",
        key: "type",
        width: 180,
      },
      {
        title: "Trạng thái",
        key: "status",
        width: 180,
      },
      {
        title: "Công cụ",
        key: "tool",
        width: 180,
      },
    ]);
    const contentTable = ref([
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
      {
        internalNumber: "101",
        displayName: "Phạm Phi Long",
        type: "App",
        status: "Kêt nối",
      },
    ]);

    const changeSelectOption = (value) => {
      selectedOption.value = value;
    };

    return {
      selectedOption,
      listOption,
      headerTable,
      contentTable,
      changeSelectOption,
    };
  },
};
</script>

<style scoped>
.table-custom {
  width: 100%;
  background: #fff;
}
</style>