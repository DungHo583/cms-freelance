<template>
  <div
    class="select-custom flex-basic"
    v-click-outside="onClickOutside"
    @click="changeSelect"
  >
    <div class="click-open-select flex-between">
      <span class="label-select text-black">{{ getLabelSelect() }}</span>
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
            >{{ item.name }}</span
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
  width: 172px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d9dbe7;
  border-radius: 40px;
  padding: 9px 24px;
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
.list-select-option {
  width: 217px;
  max-height: 336px;
  height: 336px;
  padding: 16px 0 16px 16px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  position: absolute;
  top: 39px;
  left: 0;
}
.list-select-option > .list-option {
  width: 100%;
  height: calc(336px - 32px);
  padding-right: 16px;
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
.select-active > .text-select-item {
  font-weight: 700 !important;
  letter-spacing: 1px;
}
.text-select-item {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>