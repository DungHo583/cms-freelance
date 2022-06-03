<template>
  <div class="layout-main flex-top">
    <!-- navbar side -->
    <div class="navbar-layout">
      <div class="logo-navbar flex-center">
        <img
          src="@/assets/images/logo-gocall.png"
          :width="166"
          :height="38"
          alt="Logo GoCall"
        />
      </div>
      <div class="navbar-list">
        <div
          class="navbar-item flex-left"
          v-for="(itemNav, idx) in listMenu"
          :key="idx"
          :class="itemNav.path == checkPath ? 'navbar-item-active' : ''"
          @click="redirectView(itemNav.path)"
        >
          <div class="icon-navbar">
            <img
              :src="
                itemNav.path == checkPath
                  ? getIcon(itemNav.icon + '-blue')
                  : getIcon(itemNav.icon)
              "
              :alt="itemNav.icon"
            />
          </div>
          <div class="text-navbar">
            <span
              :class="
                itemNav.path == checkPath ? 'text-blue' : 'text-gray-light'
              "
              >{{ itemNav.name }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- content side -->
    <div class="content-layout">
      <!-- header content side -->
      <div class="header-layout flex-basic">
        <div class="title-layout">
          <!-- <slot name="name-view" /> -->
          <h2 class="text-title text-title-layout">{{ titlePage }}</h2>
        </div>
        <div class="user-session flex-basic">
          <div class="avatar-user flex-center">
            <img
              v-if="nameUser.avatar"
              src=""
              :width="32"
              :height="32"
              alt="avatar user"
            />
            <span v-else>{{ getAvatar(nameUser) }}</span>
          </div>
          <div class="name-user flex-center">
            <div class="text-black name-user-session">{{ nameUser }}</div>
            <div class="icon-dropdown flex-center">
              <img
                src="@/assets/images/icons/icon-dropdown-account.svg"
                alt="icon dropdown"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- view content side -->
      <div class="container-layout">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  props: {
    nameView: String,
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const titlePage = route.name;
    const listMenu = ref([
      {
        name: "Dashboard",
        icon: "icon-home",
        path: "/home",
      },
      {
        name: "Cấu hình máy nhánh",
        icon: "icon-cate",
        path: "/config-extention",
      },
      {
        name: "Nhóm nội bộ",
        icon: "icon-setting",
        path: "/group",
      },
      {
        name: "Định tuyến cuộc gọi",
        icon: "icon-cate",
        path: "/router",
      },
      {
        name: "Thông tin tổng đài",
        icon: "icon-link",
        path: "/infor",
      },
      {
        name: "Tính năng mở rộng",
        icon: "icon-setting",
        path: "/more",
      },
    ]);
    const checkPath = ref("");

    const nameUser = "Hiền Sunny";

    const getPath = () => {
      checkPath.value = window.location.pathname;
    };
    getPath();

    const getIcon = (icon) => {
      const imgUrl = new URL(
        `../assets/images/icons/${icon}.svg`,
        import.meta.url
      ).href;
      return imgUrl;
    };

    const redirectView = (path) => {
      router.push({
        path: path,
      });
    };

    const getAvatar = (avatar) => {
      if (avatar.url) {
        return avatar.url;
      } else {
        return convertAvtName(avatar);
      }
    };

    const convertAvtName = (name) => {
      if (name) {
        let arr = name.split(" ");
        let first = arr[0];
        let last = arr[arr.length - 1];
        return first.charAt(0) + last.charAt(0);
      }
    };

    return {
      props,
      listMenu,
      checkPath,
      nameUser,
      titlePage,
      getIcon,
      redirectView,
      convertAvtName,
      getAvatar,
      // getNameView
    };
  },
};
</script>

<style>
@import url(@/assets/css/main.css);

* {
  box-sizing: border-box;
}

.layout-main {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
}

.text-title-layout {
  font-size: 20px !important;
  line-height: 28px !important;
}

.navbar-layout {
  width: 248px;
  height: 100%;
  padding: 16px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 28, 100, 0.08);
}

.logo-navbar {
  width: 216px;
  height: 70px;
  margin-bottom: 16px;
}

.navbar-list {
  width: 100%;
  height: max-content;
  overflow-x: auto;
}

.navbar-item {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
}

.navbar-item-active {
  background: #f0f5ff;
}

.navbar-item:hover {
  background: #f0f5ff;
}

.navbar-item > .icon-navbar {
  margin-right: 17.5px;
}

.content-layout {
  width: 100%;
  height: 100%;
}

.header-layout {
  justify-content: space-between;
  padding: 10px 32px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 28, 100, 0.08);
  width: 100%;
  height: 53px;
}

.avatar-user {
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background: #f9b144;
  margin-right: 12px;
}

.avatar-user > span {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
}

.icon-dropdown {
  margin-left: 13.56px;
}

.name-user-session {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
}

.container-layout {
  width: 100%;
  height: calc(100% - 53px);
  overflow-x: auto;
  padding: 32px;
  background: #f5f6f8;
}
</style>