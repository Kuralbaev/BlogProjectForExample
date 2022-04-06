<template>
  <div>
    <ul class="alert">
      <template v-for="_a in alert" :key="_a.id">
        <li class="error">{{ _a.text }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "alert",
  setup() {
    const store = useStore();

    let alert = computed(() => {
      return store.getters["alert/data"];
    });

    return { alert };
  },
};
</script>

<style scoped lang="scss">
.alert {
  position: fixed;
  top: 30px;
  right: 30px;

  li {
    width: 300px;
    border-radius: 10px;
    padding: 10px 25px;
    color: #c9c9c9;
    background: #142533;
    margin-bottom: 15px;
  }
}
</style>
