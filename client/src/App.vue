<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> DCodeMania </v-list-item-title>
          <v-list-item-subtitle> MEVN Full Stack App </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list density="compact">
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" :to="item.link" link>
            <v-list-item-icon>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(null);
const items = ref([
  { title: 'Home', icon: 'mdi-home', link: '/' },
  { title: 'Add Post', icon: 'mdi-note-plus', link: '/add-post' },
  { title: 'About', icon: 'mdi-help-box', link: '/about' },
]);
</script>
