<template>
  <div class="not_found">
    <h3>404</h3>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
.not_found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 410px);

  h3 {
    font-size: 60px;
    color: #c9c9c9;
  }
}
</style>
