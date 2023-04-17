<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg">
        <div class="single_card text-center">
            <img :src="card.card_images[0].image_url">
            <h4 class="text-uppercase text-white fw-bold small pt-3">{{ card.name }}</h4>
            <div class="fw-bold small">{{ card.archetype }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['card']
}
</script>

<style lang="scss" scoped>
img {
    width: 200px;
    height: 300px;
}

.single_card {
    height: 400px;
}
</style>