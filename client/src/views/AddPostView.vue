<!-- <script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import API from '../api';

const router = useRouter();

const rules = ref([(value) => !!value || 'This field is required!']);

const post = reactive({
  title: '',
  category: '',
  content: '',
  image: '',
});
const image = ref('');
const form = ref(null);

const selectFile = (file) => {
  image.value = file[0];
};

const submitForm = async () => {
  const formData = new FormData();
  formData.append('image', image.value);
  formData.append('title', post.title);
  formData.append('category', post.category);
  formData.append('content', post.content);
  console.log(image.value);
  if (form.value.validate()) {
    const response = await API.addPost(formData);
    router.push({ name: 'home', params: { message: response.message } });
  }
};
</script> -->

<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Add New Post</v-card-title>
          <v-divider></v-divider>
          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              label="Title"
              v-model="post.title"
              prepend-icon="mdi-note"
              :rules="rules"
            ></v-text-field>
            <v-text-field
              label="Category"
              v-model="post.category"
              prepend-icon="mdi-view-list"
              :rules="rules"
            ></v-text-field>
            <v-textarea
              label="Content"
              v-model="post.content"
              prepend-icon="mdi-note-plus"
              :rules="rules"
            ></v-textarea>
            <v-file-input
              @change="selectFile"
              :rules="rules"
              show-size
              counter
              multiple
              label="Select Image"
            ></v-file-input>
            <v-btn type="submit" class="mt-3" color="primary">Add Post</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../api';

export default {
  data() {
    return {
      rules: [(value) => !!value || 'This field is required!'],
      post: {
        title: '',
        category: '',
        content: '',
        image: '',
      },
      image: '',
    };
  },
  methods: {
    selectFile(file) {
      this.image = file[0];
      console.log(this.image);
      console.log(file[0]);
    },
    async submitForm() {
      console.log(this.image);
      const formData = new FormData();
      formData.append('image', this.image);
      formData.append('title', this.post.title);
      formData.append('category', this.post.category);
      formData.append('content', this.post.content);
      console.log(this.image);
      if (this.$refs.form.validate()) {
        const response = await API.addPost(formData);
        this.$router.push({ name: 'home', params: { message: response.message } });
      }
    },
  },
};
</script>
