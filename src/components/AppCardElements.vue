<template>
    <article v-for="character in store.charactersList" :key="character.id">
        <div>
            <img v-for="imgUrl in imgList" :src="imgUrl[0]" alt="character.name">
        </div>
        <h2>{{ character.name }}</h2>
    </article>
</template>
  
<script>
import { store } from '../js/store';
export default {
    name: 'AppCardElements',
    data() {
        return {
            store,
            imgList: [
                "https://images.ygoprodeck.com/images/cards/34541863.jpg",
                "https://images.ygoprodeck.com/images/cards/64163367.jpg",
                "https://images.ygoprodeck.com/images/cards/91231901.jpg",
                "https://images.ygoprodeck.com/images/cards/73262676.jpg",
                "https://images.ygoprodeck.com/images/cards/98319530.jpg",
                "https://images.ygoprodeck.com/images/cards/37478723.jpg",
                "https://images.ygoprodeck.com/images/cards/64867422.jpg",
                "https://images.ygoprodeck.com/images/cards/90861137.jpg",
                "https://images.ygoprodeck.com/images/cards/44256816.jpg",
                "https://images.ygoprodeck.com/images/cards/86988864.jpg",
                "https://images.ygoprodeck.com/images/cards/11714098.jpg",
                "https://images.ygoprodeck.com/images/cards/83994646.jpg",
                "https://images.ygoprodeck.com/images/cards/67048711.jpg",
                "https://images.ygoprodeck.com/images/cards/23771716.jpg",
                "https://images.ygoprodeck.com/images/cards/86198326.jpg",
                "https://images.ygoprodeck.com/images/cards/14261867.jpg",
                "https://images.ygoprodeck.com/images/cards/24140059.jpg",
                "https://images.ygoprodeck.com/images/cards/6850209.jpg",
                "https://images.ygoprodeck.com/images/cards/49140998.jpg",
                "https://images.ygoprodeck.com/images/cards/68170903.jpg",

            ]
        }
    },
};

</script>
  
<style lang="scss">
@use '../style/partials/variables' as*;
@use '../style/partials/mixins' as*;
</style>
  