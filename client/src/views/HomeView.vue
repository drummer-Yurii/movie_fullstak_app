<script setup>
import { onMounted, ref } from 'vue';
import API from '../api';

const posts = ref([]);

onMounted(async () => {
  posts.value = await API.getAllPost();
});
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1">
          <v-img height="250" :src="`/${post.image}`"></v-img>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ post.content.substring(0, 100) + '...' }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
