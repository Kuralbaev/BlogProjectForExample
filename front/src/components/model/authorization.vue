<template>
  <div class="content">
    <div class="login">
      <h3>Authorization</h3>
      <input type="text" placeholder="E-mail" class="input" v-model="email" />
      <input
        type="password"
        placeholder="Password"
        class="input"
        v-model="password"
      />
      <button class="button" @click="submit">Click</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Authorization",
  setup(_, { emit }) {
    const store = useStore();
    let password = ref("");
    let email = ref("");

    async function submit() {
      await store.dispatch("user/authorization", {
        username: email.value,
        password: password.value,
      });
      emit("close", false);
    }

    return { submit, email, password };
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(55, 65, 81, 0.55);
  opacity: 0;
  z-index: -1;
  transition: all 0.3s;

  &.active {
    opacity: 1;
    z-index: 99;
  }
}

.login {
  width: 400px;
  background: #374151;
  padding: 30px;
  border-radius: 10px;

  h3 {
    text-align: center;
    color: #ffffff;
    font-size: 24px;
    margin-bottom: 15px;
  }

  .input {
    margin-bottom: 15px;
  }
}
</style>
