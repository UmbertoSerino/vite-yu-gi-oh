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
            })
            .catch((error) => {
                console.error('Error fetching characters:', error);
            });
    },
    getArchetypes() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then((response) => {
                this.archetypeList = response.data;
                console.log('call archetypes', response)
            }).catch((error) => {
                console.error('Error fetching characters:', error);
            });

    }
});
