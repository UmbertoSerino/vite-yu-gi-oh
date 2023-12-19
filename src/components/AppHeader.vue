<template>
    <nav class="navbar container-fluid">
        <div class="container">
            <span class="navbar-brand fs-1">Yu-Gi-Oh Api</span>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
@use '../style/partials/mixins' as*;
@use '../style/partials/variables' as*;

nav {
    background-color: $bgcolor-white;
}
</style>