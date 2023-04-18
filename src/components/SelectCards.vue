<template>
    <select class="form-select">
        <option :value="archetype.id" v-for="archetype in archetypes" :key="archetype.id">{{ archetype.archetype_name }}
        </option>
    </select>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SelectCard',
    data() {
        return {
            archetypes: []
        }
    },
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {
            console.log(res);
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