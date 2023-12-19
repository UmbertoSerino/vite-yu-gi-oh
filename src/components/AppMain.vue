<template lang="">
    <main class=" container-fluid d-flex flex-wrap">
        <section class="container">
            <div class="">
                <select name="" id="selected-card">
                    <option value="All"></option>
                    <option value="Alien">Alien</option>
                </select>
            </div>
        </section>
        <AppCardElements />
    </main>
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

main {
    background-color: $bgcolor-orange;

    select#selected-card {
        background-color: $bgcolor-white;
        border: none;
        width: 100px;
        padding: .5rem;
        margin: 2rem 0;
    }
}
</style>