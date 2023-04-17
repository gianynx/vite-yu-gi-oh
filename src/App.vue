<template>
  <h1>CIAO</h1>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    getCard() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
        console.log(res.data.results);
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