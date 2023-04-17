<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        {{ card.name }}
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['card']
}
</script>

<style lang="scss" scoped></style>