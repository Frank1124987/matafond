<template >
    <div class="wrap-card-content-block">
        <div class="wrap-card-content-block-title">
            <h1 class="my-2 text-light fw-bold">
                {{ contentBlock.title }}
            </h1>
        </div>
        <div v-html="contentBlock.description" class="wrap-card-content-block-text">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        contentBlock : {
            required: true,
            type: Object
        }
    },
    setup(){

    }
}
</script>
<style lang="scss">
a {
    color: black;
}
</style>