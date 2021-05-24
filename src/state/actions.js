import {ref} from 'vue';

const count = ref(33);

export default function useAction(){
    function incCount(){
        console.dir(this);
        count.value = count.value+1;
    }

    return {count,incCount};
}