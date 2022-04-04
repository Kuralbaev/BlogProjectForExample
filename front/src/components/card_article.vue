<template>
  <div class="card_article">
    <div class="_img">
      <img :src="`${env.VUE_APP_MEDIA_URL}${data.image}`" alt="Article image" />
    </div>
    <div class="_info">
      <div class="_type">
        <span>{{ data.type.title }}</span>
        <span>-</span>
        <span>{{ data.create_at }}</span>
      </div>
      <router-link :to="{ name: 'view', params: { id: data.id } }">
        {{ data.title }}
      </router-link>
      <p>
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
defineProps({
  data: Object,
});
const env = process.env;
</script>

<style scoped lang="scss">
.card_article {
  ._img {
    width: 100%;
    height: 210px;
    margin-bottom: 15px;

    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  ._info {
    color: #c9c9c9;

    ._type {
      margin-bottom: 10px;
      display: flex;
      align-items: center;

      span {
        font-size: 12px;
        margin-right: 10px;
      }
    }

    a {
      display: block;
      margin-bottom: 10px;
      font-size: 22px;
      font-weight: bold;
    }

    p {
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
}
</style>
