<template>
  <HeaderComponent />
</template>

<script>
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {

    }
  },
  methods: {
    getCard() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
        console.log(res.data.data);
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