<template>
  <div>
    <template v-if="data">
      <div class="_head">
        <div class="_type">
          <span>{{ data?.type.title }}</span>
          <span>-</span>
          <span>{{ data?.create_at }}</span>
        </div>
        <h1 class="_title">{{ data?.title }}</h1>
        <div class="_author">
          <div class="_img__user">
            <img src="../assets/images/auth.png" alt="Author" />
          </div>
          <div>
            <p>{{ data.author.name }}</p>
            <span>{{ data.type.title }}</span>
          </div>
        </div>
      </div>

      <div class="_body">
        <div class="_img">
          <img :src="env.VUE_APP_MEDIA_URL + data?.image" alt="Article image" />
        </div>
        <p>{{ data?.description }}</p>
      </div>
      <div class="_comments">
        <h3>Comments</h3>

        <template v-if="comments">
          <ul>
            <template v-for="_comment in comments" :key="_comment.id">
              <li>
                <p class="_text">{{ _comment.description }}</p>
                <div class="_author">
                  <div class="_img__user">
                    <img src="../assets/images/auth.png" alt="Author" />
                  </div>
                  <div>
                    <p>{{ _comment.author.name }}</p>
                    <span>{{ _comment.create_at }}</span>
                  </div>
                </div>
              </li>
            </template>
          </ul>
          <template v-if="isLogin">
            <div class="_form">
              <textarea
                name="comment"
                v-model="comment_value"
                class="textarea"
                placeholder="Comment"
              ></textarea>
              <button class="button" @click="sendComment">Send</button>
            </div>
          </template>
          <tenplate v-else> log in to write comments </tenplate>
        </template>
        <template v-else> Not comments </template>
      </div>
    </template>
    <template> Loading ... </template>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";

export default {
  async mounted(): Promise<void> {
    const store = useStore();
    const id = useRoute().params.id;
    await store.dispatch("article/getById", { id });
    await store.dispatch("article/getArticleComment", { id });
  },
  setup(): any {
    const store = useStore();
    const env = process.env;

    let comment_value = ref("");

    let data = computed(() => {
      return store.getters["article/detail"];
    });

    let isLogin = computed(() => {
      return store.getters["user/isLogin"];
    });

    let comments = computed(() => {
      return store.getters["article/comments"];
    });

    function sendComment() {
      store.dispatch("article/sendArticleComment", {
        article_id: data.value.id,
        author_id: data.value.author.id,
        comment: comment_value.value,
      });
    }

    return { env, data, comments, comment_value, sendComment, isLogin };
  },
};
</script>

<style scoped lang="scss">
._head {
  text-align: center;
  color: #c9c9c9;

  ._type {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 14px;
      margin-right: 10px;
    }
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
  }
}

._author {
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 15px;
  align-items: center;
  justify-content: center;
  width: 200px;
  text-align: left;
  margin: auto auto 40px;

  ._img__user {
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      filter: invert(1);
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

._body {
  ._img {
    width: 100%;
    height: 500px;
    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }

  p {
    font-size: 18px;
    color: #c9c9c9;

    max-width: 900px;
    margin: auto;

    span {
      display: block;
      margin-bottom: 20px;
    }
  }
}

._comments {
  max-width: 900px;
  margin: auto;
  color: #c9c9c9;
  padding-top: 60px;

  h3 {
    margin-bottom: 20px;
  }

  ._author {
    width: 100%;
    margin: 0;
  }

  ul {
    li {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #c9c9c9;

      &:last-child {
        border: 0;
      }

      ._text {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
