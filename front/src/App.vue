<template>
  <div class="container">
    <Alert />
    <Header />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Alert from "@/components/alert.vue";
</script>

<style scoped lang="scss">
.container {
  max-width: 1150px;
  width: 95%;
  margin: auto;
}
</style>
