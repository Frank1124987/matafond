<template >
    <div class="wrap-card-content-block">
        <div class="wrap-card-content-block-title">
            <h1 class="my-2 text-light fw-bold">
                {{ contentBlock.title }}
            </h1>
        </div>
        <div class="wrap-card-content-block-text">
            {{ contentBlock.description }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        contentBlock : {
            // require: true,
            type: Object
        }
    },
    setup(){

    }
}
</script>
<style lang="scss">
    
</style>