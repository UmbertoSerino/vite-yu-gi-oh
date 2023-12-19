<template>
    <article class="d-flex" v-for="character in store.charactersList" :key="character.id" :character="character">
        <div>
            <h2>{{ character.name }}</h2>
            <div>
                <img :src="character.card_images[0].image_url_small" alt="character.name">
            </div>
        </div>
    </article>
</template>
  
<script>
import { store } from '../js/store';
export default {
    name: 'AppCardElements',
    data() {
        return {
            store,

        }
    },
    components: {
    }
};

</script>
  
<style lang="scss">
@use '../style/partials/variables' as*;
@use '../style/partials/mixins' as*;

article {}
</style>
  