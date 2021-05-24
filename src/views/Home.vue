<template>
  <div>
      Home
      <button @click="openPortal(nameWindow)">Open</button>
      <button @click="incCount">Inc</button>
      {{count}}
      <About />
  </div>
</template>

<script>

import useAction from '../state/actions';
import About from '../components/About';

export default {
    components:{
        About,
    },
    async setup() {
        const {count,incCount} = useAction();

        const nameWindow = 'About';
        function openPortal(nameWindow){
            let openWindow = window.open('/'+nameWindow,nameWindow,'width=300,height=300,top=300,left=300');
            console.log(openWindow,nameWindow);
            openWindow.parentThis = this;
        }

        return {nameWindow,openPortal,count,incCount};
    }

}
</script>

<style>

</style>