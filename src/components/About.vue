<template>
    <div>
        <span>About: </span>
        <button @click="incCount">Inc</button>
        {{count}}
    </div>
</template>

<script>

import useAction from '../state/actions';

export default {
    async setup() {        
        if(window.name==='About'){
            console.dir(useAction);
            console.dir(window.parentThis.count);
            const {count,incCount} = window.parentThis;
            console.dir(incCount);
            return {count,incCount};
        }else{
            const {count,incCount} = useAction();
            return {count,incCount};
        }
    }

}
</script>

<style>

</style>