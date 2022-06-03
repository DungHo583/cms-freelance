<template>
  <LayoutHome>
    <div class="container-signin">
      <div class="flex-center form-signin-view">
        <div class="content-left-form">
          <img
            src="@/assets/images/image-form-signin.png"
            :width="442"
            :height="571"
            alt="Welcome to GoCall"
          />
        </div>
        <div class="content-right-form flex-center">
          <div class="form-signin">
            <div class="title-signin">
              <span class="text-black">Đăng nhập</span>
            </div>
            <div class="input-form">
              <label class="text-gray" for="">Tên đăng nhập</label>
              <input
                type="text"
                class="input-type-text text-black"
                placeholder="Nhập tên đăng nhập"
                v-model="account"
                @keyup.enter="signIn"
                :class="validateAccout ? 'validate-input-form' : ''"
              />
              <p v-if="validateAccout" class="validate-form">
                *Tên đăng nhập không được để trống
              </p>
            </div>
            <div class="input-form">
              <label class="text-gray" for="">Mật khẩu</label>
              <div
                class="input-type-pass flex-basic"
                :class="validatePassword ? 'validate-input-form' : ''"
              >
                <input
                  :type="showPass ? 'text' : 'password'"
                  class="input-password text-black"
                  placeholder="Nhập mật khẩu"
                  v-model="password"
                  @keyup.enter="signIn"
                />
                <img
                  @click="changeShowPass"
                  class="icon-show-pass"
                  src="@/assets/images/icons/icon-read.svg"
                  alt=""
                />
              </div>
              <p v-if="validatePassword" class="validate-form">
                *Mật khẩu không được để trống
              </p>
            </div>
            <div class="btn-signin flex-center">
              <div class="button-action-signin">
                <span class="text-button text-white">Đăng nhập</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutHome>
</template>

<script>
import { ref } from "vue";
import LayoutHome from "@/layouts/HomeLayout.vue";
export default {
  components: {
    LayoutHome,
  },
  setup() {
    const showPass = ref(false);
    const account = ref("");
    const validateAccout = ref(false);
    const password = ref("");
    const validatePassword = ref(false);
    const changeShowPass = () => {
      showPass.value = !showPass.value;
    };
    const validateSignIn = () => {
      if (account.value === "") {
        validateAccout.value = true;
        setTimeout(() => {
          validateAccout.value = false;
        }, 3000);
        return false;
      } else if (password.value === "") {
        validatePassword.value = true;
        setTimeout(() => {
          validatePassword.value = false;
        }, 3000);
        return false;
      } else {
        return true;
      }
    };
    const signIn = () => {
      const check = validateSignIn();
      if (check) {
        console.log("Đăng nhập thành công");
      } else {
        console.log("Đăng nhập thất bại");
      }
      // router.push("/home");
    };
    return {
      showPass,
      account,
      password,
      validateAccout,
      validatePassword,
      changeShowPass,
      signIn,
    };
  },
};
</script>

<style scoped>
.container-signin {
  margin: 0 auto;
  padding-top: 54px;
  width: 986px;
  min-width: 986px;
}
.form-signin-view {
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 40px rgba(0, 28, 100, 0.06);
  border-radius: 16px;
  background: #fff;
  overflow: hidden;
}
.content-right-form {
  width: 544px;
}
.content-right-form > .form-signin {
  width: 432px;
}
.form-signin > .title-signin {
  margin-bottom: 32px;
  width: 100%;
  text-align: center;
}
.form-signin > .title-signin > span {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
}
.form-signin > .input-form {
  margin-bottom: 20px;
  width: 100%;
  position: relative;
}
.form-signin > .input-form > label {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
}
.form-signin > .input-form > .input-type-text {
  width: 100%;
  border: 1px solid #d9dbe7;
  border-radius: 40px;
  background: #ffffff;
  padding: 10px 24px;
  outline: none;
}
.form-signin > .input-form > .input-type-text::placeholder {
  color: #bbbece;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.form-signin > .input-form > .input-type-pass {
  width: 100%;
  border: 1px solid #d9dbe7;
  border-radius: 40px;
  background: #ffffff;
  padding: 0px 18.43px 0 24px;
  overflow: hidden;
  outline: none;
}
.form-signin > .input-form > .input-type-pass:focus {
  border: none;
}
.form-signin > .input-form > .input-type-pass > .input-password {
  width: 100%;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 0;
}
.form-signin > .input-form > .input-type-pass > .input-password::placeholder {
  color: #bbbece;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
.form-signin > .btn-signin {
  width: 100%;
  margin-top: 56px;
}
.button-action-signin {
  background: linear-gradient(90deg, #0b53f5 0%, #6695ff 100%);
  box-shadow: 0px 16px 40px rgba(72, 128, 255, 0.24);
  border-radius: 40px;
  cursor: pointer;
  padding: 13px 66.5px;
  width: 212px;
  height: 50px;
}
.button-action-signin > .text-button {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}
.icon-show-pass {
  cursor: pointer;
}
.validate-form {
  position: absolute;
  top: 80px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #e75151;
  margin: 0 !important;
}
.validate-input-form {
  border: 2px solid #e75151 !important;
}
</style>