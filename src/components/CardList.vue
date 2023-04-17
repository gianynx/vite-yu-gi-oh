<template>
    <section class="container">
        <div class="row row-cols-5">
            <CardComponent v-for="card in store.cardList" :key="card.id" :card="card" />
        </div>
    </section>
</template>

<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>