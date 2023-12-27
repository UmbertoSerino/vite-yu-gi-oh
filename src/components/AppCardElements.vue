<template>
    <div class="container d-flex flex-wrap p-5 bg-white">
        <div class="w-100 bg-dark p-3">
            <h2 class="text-white">Found {{ filteredCharacters.length }} cards</h2>
        </div>
        <article v-for="character in filteredCharacters" :key="character.id">
            <div class="card">
                <img :src="character.card_images[0].image_url" class="card-img-top" :alt="character.name" />
                <div class="card-body text-center">
                    <h5 class="card-title text-white fw-bold">{{ character.name }}</h5>
                    <p class="card-text fs-5">{{ character.archetype }}</p>
                </div>
            </div>
        </article>
    </div>
</template>
  
<script>
export default {
    name: 'AppCardElements',
    props: {
        filteredCharacters: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss">
@use '../style/partials/variables' as*;
@use '../style/partials/mixins' as*;

article {
    width: calc((100% / 5) - 1rem);
    background-color: $bgcolor-white;
    margin: 0 .5rem;
    margin-bottom: 2rem;

    div.card {
        height: 100%;
        background-color: $bgcolor-orange;
    }
}
</style>