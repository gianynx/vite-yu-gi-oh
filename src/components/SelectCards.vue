<template>
    <select class="form-select" v-model="store.selected" @change="$emit('SelectCards')">
        <option :value="archetype.id" v-for="archetype in archetypes" :key="archetype.id">{{
            archetype.archetype_name }}
        </option>
    </select>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
export default {
    name: 'SelectCard',
    data() {
        return {
            store,
            archetypes: []
        }
    },
    // la chiamata API viene eseguita quando il componente viene caricato
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {
            // console.log(res);
            this.archetypes = res.data;
        });
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