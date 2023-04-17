<template>
  <HeaderComponent />
</template>

<script>
import { store } from './data/store'
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
        // console.log(res.data.data);
        store.cardList = res.data.results;
      });
    }
  },
  mounted() {
    this.getCard();
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Kanit', sans-serif;
}
</style>