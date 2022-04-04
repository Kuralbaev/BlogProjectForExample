<template>
  <div class="home">
    <div v-if="data">
      <div class="article">
        <div class="_img">
          <img
            :src="`${env.VUE_APP_MEDIA_URL}${data[0].image}`"
            alt="Article image"
          />
        </div>
        <div class="_info">
          <div class="_type">
            <span>{{ data[0].type.title }}</span>
            <span>-</span>
            <span>{{ data[0].create_at }}</span>
          </div>
          <router-link :to="{ name: 'view', params: { id: data[0].id } }">
            {{ data[0].title }}
          </router-link>
          <p>
            {{ data[0].description }}
          </p>
        </div>
      </div>

      <div class="articles">
        <template v-for="_d in data.slice(1)" :key="_d.id">
          <card_article :data="_d" />
        </template>
      </div>
    </div>
    <div v-else>
      <h3>Loading ...</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import card_article from "@/components/card_article.vue";
import { computed } from "vue";

export default {
  components: { card_article },
  async mounted(): Promise<void> {
    await useStore().dispatch("article/get");
  },
  setup(): any {
    const store = useStore();
    const env = process.env;

    let data = computed(() => {
      return store.getters["article/data"];
    });

    return { env, data };
  },
};
</script>
<style lang="scss" scoped>
.article {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  margin-bottom: 60px;

  ._img {
    height: 390px;
    width: 100%;

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
        font-size: 14px;
        margin-right: 10px;
      }
    }

    a {
      display: block;
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: bold;
    }

    p {
      margin-bottom: 20px;
      font-size: 16px;
    }

    ._author {
      display: grid;
      grid-template-columns: 50px 1fr;
      grid-gap: 15px;
      align-items: center;
      justify-content: center;
      width: 100%;

      ._img__user {
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
      }

      p {
        font-size: 16px;
        margin: 0;
      }

      span {
        font-size: 14px;
      }
    }
  }
}

.articles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px 20px;
}
</style>
