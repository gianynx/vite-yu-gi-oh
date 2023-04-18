import { reactive } from 'vue';

export const store = reactive({
    cardList: [],
    // salvo il valore della select dentro store.js perché vogliamo che sia disponibile in tutta l'app!
    selected: ''
});