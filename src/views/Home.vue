<template>
  <div class="home h-100">
    <Main/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import { reactive } from '@vue/reactivity'

export default {
  name: 'Home',
  components: {
    Main
  },
  setup(){
    const objectNycu = reactive({
      id: 0,
      profile: {
        nftImg : "@assets/nycu/nft.gif",
        logo : "@/assets/nycu/title.jpeg",
        music : "",

      },
      content:{}
    })

    const objectNchu = reactive({
      id: 1,
      profile: {},
      content: {}

    })


  }
}
</script>
