<script setup>
import { ref, onMounted } from 'vue';
import API from '../api';
import { useRoute } from 'vue-router';

const post = ref({});
const route = useRoute();

onMounted(async () => {
  const response = await API.getPostByID(route.params.id);
  post.value = response;
});
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <v-img :src="`/${post.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mb-2 mx-1">
              <v-col sm="2">
                <v-btn small variant="outlined" color="primary">{{ post.category }}</v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn
                  variant="tonal"
                  color="success"
                  :to="{ name: 'edit-post', params: { id: post._id } }"
                  >Edit</v-btn
                >
                <v-btn variant="tonal" color="red">Delete</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-subtitle class="text-h5">
            <h3>{{ post.title }}</h3>
          </v-card-subtitle>
          <v-card-text class="text-grey">
            <p class="mb-2">{{ post.content }}</p>
            <p>{{ post.created }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
