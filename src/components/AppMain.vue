<template lang="">
    <main class="container-fluid d-flex flex-wrap">
        <section class="container">
            <select v-model="selectedArchetype" name="selectedArchetype" id="selected-card">
                <option value="All">All</option>
                <option value="Alien">Alien</option>
                <option value="Infernoble Arms">Infernoble Arms</option>
                <option value="Noble Knight">Noble Knight</option>
            </select>
        </section>
        <AppCardElements :filteredCharacters="filteredCharacters" />
    </main>
</template>

<script>
import { store } from '../js/store';
import AppCardElements from './AppCardElements.vue';
import axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        AppCardElements,
    },
    data() {
        return {
            selectedArchetype: 'All',
        }
    },
    computed: {
        filteredCharacters() {
            if (this.selectedArchetype === 'All') {
                return store.charactersList;
            } else {
                return store.charactersList.filter(character => character.archetype === this.selectedArchetype);
            }
        },
    },
    created() {
        this.getCharacters();
    },
    methods: {
        getCharacters() {
            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((response) => {
                    store.charactersList = response.data.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                });
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
