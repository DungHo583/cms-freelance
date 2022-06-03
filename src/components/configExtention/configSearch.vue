<template>
  <div class="input-search-custom flex-basic">
    <img
      src="@/assets/images/icons/icon-search.svg"
      :width="13.42"
      :height="13.33"
      alt="icon-search"
    />
    <input type="text" class="input-search" placeholder="Tìm kiếm" />
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.input-search-custom {
  width: 444px;
  height: 40px;
  padding: 0 17.33px;
  border: 1px solid #d9dbe7;
  border-radius: 50px;
  background: #fff;
}
.input-search-custom > .input-search {
  outline: none;
  width: 100%;
  height: 100%;
  padding: 8px 9.25px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: #fff;
  border: none;
  color: #131935;
}
.input-search-custom > .input-search::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #bbbece;
}
</style>