<template>
    <main class="container-fluid d-flex flex-wrap">
        <section class="container">
            <select name="selectedArchetype" id="selected-card" v-model="selectedArchetype">
                <option value="All">All</option>
                <option v-for="(archetype, index) in store.archetypeList" :value="archetype" :key="index">{{ archetype }}</option>
            </select>
        </section>
        <AppCardElements />
    </main>
</template>

<script>
import { store } from '../js/store';
import AppCardElements from './AppCardElements.vue';

export default {
    name: 'AppMain',
    components: {
        AppCardElements,
    },
    data() {
        return {
            store,
            selectedArchetype: 'All',
        };
    },
};
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
