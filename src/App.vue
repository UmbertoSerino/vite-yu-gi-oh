<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppCardElements from './components/AppCardElements.vue';
import { store } from '../src/js/store';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppCardElements
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.getCharacters();
  },
  methods: {
    getCharacters() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((response) => {
          this.store.charactersList = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
        });
    }
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <AppCardElements />
  </main>
</template>

<style lang="scss">
@use './style/general.scss' as*;
</style>
