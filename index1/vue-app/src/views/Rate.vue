<template>
	<div>
     <span>评分</span>
     <star v-model="mess.video"/>
     <star v-model="mess.video" readonly/>
   </div>
</template>

<script>
  import video from './video'
  
  export default {
    data () {
      return {
        video: 4.5
      }
    },
    components: {
      video
    }
  }
</script>
