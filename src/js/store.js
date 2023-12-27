import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    charactersList: [],
    archetypeList: [],

    getCharacters() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
            .then((response) => {
                this.charactersList = response.data.data;
                console.log('call charactersList', response);
                this.archetypeList = this.charactersList.map(character => character.archetype);
                console.log('call archetypeList', this.archetypeList);
            })
            .catch((error) => {
                console.error('Error fetching characters:', error);
            });
    },
});
