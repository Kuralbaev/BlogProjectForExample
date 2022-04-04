<template>
  <div class="header">
    <div>
      <div class="_logo">
        <img src="../assets/images/logo.png" alt="Logo" />
      </div>
      <ul class="_nav">
        <li>
          <router-link to="">UI Design</router-link>
        </li>
        <li>
          <router-link to="">Front-end</router-link>
        </li>
        <li>
          <router-link to="">Back-end</router-link>
        </li>
      </ul>
    </div>
    <div>
      <input type="search" class="input" placeholder="Search" />
      <template v-if="User.isLogin">
        <div class="_user">
          <img src="../assets/images/auth.png" alt="Auth" />
        </div>
      </template>
      <template v-else>
        <button class="button" @click="authModel = true">SignIn</button>
      </template>
    </div>
    <Authorization :class="{ active: authModel }" @close="authModel = false" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Authorization from "@/components/model/authorization";

let User = useStore().state.user;
let authModel = ref(false);
</script>

<style scoped lang="scss">
.header {
  padding: 75px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  ._logo {
    img {
      height: 35px;
    }
  }

  ._nav {
    display: flex;
    margin-left: 60px;

    li {
      margin-left: 20px;
    }
  }

  .button {
    margin-left: 10px;
  }

  ._user {
    margin-left: 15px;
    width: 45px;
    height: 45px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: invert(1);
    }
  }
}
</style>
