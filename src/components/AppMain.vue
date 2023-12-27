<template>
    <main class="container-fluid d-flex flex-wrap">
        <section class="container">
            <select name="selectedArchetype" id="selected-card" v-model="selectedArchetype" @change="callArchetypeChange">
                <option value="All">All</option>
                <option v-for="(archetype, index) in store.archetypeList" :value="archetype.archetype_name" :key="index">{{ archetype.archetype_name }}</option>
            </select>
        </section>
        <AppCardElements :filteredCharacters="filteredCharacters" />
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
    created() {
        store.getArchetypes();
    },
    methods: {
        callArchetypeChange() {
            if (this.selectedArchetype === 'All') {
                store.getCharacters();
            } else {
                store.getCharacters(this.selectedArchetype);
            }
        },
    },
    computed: {
        filteredCharacters() {
            return store.charactersList;
        },
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
