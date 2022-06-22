<template>
    <div class="wrap-audioplayer">
        <!-- <AudioPlayer :option="playerOptions"/> -->
        <AudioPlayer 
          :audio-list="audioList.map((elm) => elm.url)"
          :show-prev-button = "false"
          :show-next-button = "false"
          :show-volume-button = "false"
          :show-playback-rate = "false"
          :isLoop = "false"
          theme-color = "#357aa1"
        />
    </div>
</template>


<script>
import {ref, onMounted, reactive} from 'vue'
import AudioPlayer from "@liripeng/vue-audio-player";

export default {
  components: {
    AudioPlayer
  },
  setup(){

    const audioList = ref([{
      name : "",
      url : require("@/assets/alice.wav")
      // url: "https://drive.google.com/file/d/1S5Zqqn5ZFt_izxFILfbUcSlRS_TN-bT2/view?usp=sharing"
    }])


    return{
      audioList
    }
  }
}
</script>
<style lang="scss" >

.wrap-audioplayer{
  width: 280px
}

</style>