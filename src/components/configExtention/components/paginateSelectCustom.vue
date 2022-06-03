<template>
  <div
    class="select-custom flex-basic"
    v-click-outside="onClickOutside"
    @click="changeSelect"
  >
    <div class="click-open-select flex-between">
      <span class="label-select text-gray">{{ getLabelSelect() }} / trang</span>
      <img
        src="@/assets/images/icons/icon-dropdown-account.svg"
        alt="icon dropdown"
      />
    </div>
    <div class="list-select-option" v-if="showOption">
      <div class="list-option">
        <div
          class="item-select-option"
          v-for="item in listSelect"
          :key="item.id"
          @click="selectOption(item)"
          :class="item.id == selected.id ? 'select-active' : ''"
        >
          <span
            class="text-select-item"
            :class="item.id == selected.id ? 'text-white' : 'text-black'"
            >{{ item.name }} / trang</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
import { ref } from "vue";
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  props: {
    selected: Object,
    listSelect: Array,
  },
  setup(props, context) {
    const showOption = ref(false);
    const onClickOutside = () => {
      showOption.value = false;
    };
    const changeSelect = () => {
      showOption.value = !showOption.value;
    };
    const selectOption = (item) => {
      context.emit("getChangeSelect", item);
    };
    const getLabelSelect = () => {
      if (props.selected.name) {
        return props.selected.name;
      }
      return "Tất cả trạng thái";
    };
    return {
      props,
      showOption,
      onClickOutside,
      changeSelect,
      selectOption,
      getLabelSelect,
    };
  },
};
</script>

<style scoped>
.select-custom {
  width: max-content;
  height: max-content;
  background: #ffffff;
  position: relative;
  cursor: pointer;
}
.click-open-select {
  width: 100%;
}
.click-open-select > .label-select {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
.click-open-select > img {
  margin-left: 13.56px;
}
.list-select-option {
  width: max-content;
  max-height: 336px;
  height: max-content;
  /* padding: 0 0 0 16px; */
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 16px;
  overflow: hidden;
  position: absolute;
  bottom: 100%;
  left: 0;
}
.list-select-option > .list-option {
  width: 100%;
  height: max-content;
  /* padding-right: 16px; */
  overflow-x: auto;
}
.item-select-option {
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 8px 16px;
}
.item-select-option:hover {
  background: #f5f6f8;
}
.select-active {
  background: #4880ff !important;
}
/* .select-active > .text-select-item {
  font-weight: 700 !important;
  letter-spacing: 1px;
} */
.text-select-item {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>