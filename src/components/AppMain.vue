<template lang="">
    <h1>Main</h1>
</template>
<script>
import AppCardElements from './AppCardElements.vue';
export default {
    name: 'AppMain',
    components: {
        AppCardElements,
    }
}
</script>
<style lang="scss" scoped>
@use '../style/partials/mixins' as*;
@use '../style/partials/variables' as*;
</style>