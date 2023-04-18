<template>
    <select class="form-select">
        <option :value="archetype" v-for="archetype in store.selectedCard" :key="archetype.id"></option>
    </select>
</template>

<script>
import { store } from '../data/store';
export default {
    name: 'SelectCard',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.form-select {
    width: 20%;
    margin-left: 39rem;
    margin-bottom: 3rem;
}
</style>