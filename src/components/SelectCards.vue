<template>
    <select class="form-select" v-model="selected">
        <option :value="archetype.id" v-for="archetype in archetypes" :key="archetype.id">{{ archetype.name }}</option>
    </select>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SelectCard',
    data() {
        return {
            archetypes: [],
            selected: null
        }
    },
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                this.archetypes = response.data;
            })
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