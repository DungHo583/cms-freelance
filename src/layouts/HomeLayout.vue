<template>
  <div class="layout-home">
    <!-- header navigator -->
    <div class="navbar-header flex-between">
      <div class="logo-navbar-header">
        <img
          src="@/assets/images/logo-gocall.png"
          :width="166"
          :height="38"
          alt="log GoCall"
        />
      </div>
      <div class="navigator-header flex-center-right">
        <div class="navigator-list flex-center-left" v-if="checkMenu">
          <div
            class="navigator-item"
            v-for="(item, idx) in listMenu"
            :key="idx"
          >
            <span class="text-navigator-item">{{ item.name }}</span>
          </div>
        </div>
        <div class="login-action flex-center-right">
          <div class="button-action-signup">
            <span class="text-black text-signup">Đăng ký</span>
          </div>
          <div class="button-action-signin flex-center" @click="redirectSignIn">
            <img
              src="@/assets/images/icons/icon-signin.svg"
              alt="icon sign in"
            />
            <span class="text-white text-signin">Đăng nhập</span>
          </div>
        </div>
      </div>
    </div>
    <!-- content layout -->
    <div class="content-layout-home">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const checkMenu = ref(false);
    const listMenu = ref([
      {
        name: "Trang chủ",
        path: "/",
      },
      {
        name: "Bảng giá",
        path: "/",
      },
      {
        name: "Liên hệ",
        path: "/",
      },
      {
        name: "Tin tức",
        path: "/",
      },
    ]);
    const redirectSignIn = () => {
      router.push({
        path: "/sign-in",
      });
    };
    const redirectSignUp = () => {
      router.push({
        path: "/sign-up",
      });
    };

    return {
      listMenu,
      checkMenu,
      redirectSignIn,
      redirectSignUp,
    };
  },
};
</script>
<style scoped>
@import url(@/assets/css/main.css);
.layout-home {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.navbar-header {
  width: 100%;
  padding: 16px 44px;
  height: 82px;
  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(0, 28, 100, 0.06);
}
.button-action-signin > img {
  margin-right: 8px;
}
.button-action-signin {
  margin-left: 32px;
  background: linear-gradient(90deg, #0b53f5 0%, #6695ff 100%);
  box-shadow: 0px 16px 40px rgba(72, 128, 255, 0.24);
  border-radius: 40px;
  padding: 13px 32px;
}
.button-action-signin > .text-signin {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
}
.button-action-signup,
.button-action-signin {
  cursor: pointer;
}
.login-action {
  margin-left: 124px;
}
.navigator-item {
  margin-right: 32px;
  cursor: pointer;
}
.navigator-item:last-child {
  margin-right: 0;
}
.navigator-item > .text-navigator-item {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.content-layout-home {
  width: 100%;
  height: calc(100% - 82px);
  background: #f5f6f8;
}
</style>