<template>
  <div class="home h-100 position-relative">
    <Main :school="school"/>
   <footer class="wrap-footer"> <small>Copyright &copy; 2022 Matafond, All Rights Reserved</small> </footer> 

  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter} from 'vue-router'
export default {
  name: 'Home',
  components: {
    Main
  },
  setup(){
    const router = useRouter()
    const route = useRoute()

    if (!((route.params.school === 'nycu') || (route.params.school === 'nthu'))){
      router.replace('/NotFound')
    }

    const objectNycu = reactive({
      "id": 0,
      "backgroundImg": "nycu/bg-01.jpg",
      "profile": {
        "nftImg" : "nycu/nft.gif",
        "logo" : "nycu/title.jpeg",
        "audio" : "nycu/alice.wav",
        "osLink" : "",
        "svLink" : "https://streetvoice.com/xlohapprdx_/songs/686189/",
        "ytLink" : "https://youtu.be/t7Q8mPJmiNA",
        "target" : 7
      },
      "content": [
        {"title": "專案介紹", "description" : `我們想透過音樂表達許多事物，若你喜歡我們的歌，哪怕是一點點的支持都是能助長我們能前進的動力。我們想用不同的曲風與歌詞意境，給人帶來共鳴。我們還有一些想完成的歌:<怪胎>、<我用了一首不是饒舌歌的和弦寫歌>、<聽說妳的身高159>。(Demo請見${("Street voice").link("https://streetvoice.com/xlohapprdx_/songs/")} )`},
        {"title": "募資金額", "description" : "7ETH(約20萬台幣)，經完成上方3首歌後，將全數捐給下屆畢業歌製作團隊。"},
        {"title": "附屬活動", "description" : "前100名加密貨幣捐贈者，不論金額大小，皆可獲得2022年陽交大_交通校區畢業歌<愛麗絲的「理」想國度>NFT一枚。"}
      ]
    })

    const objectNthu = reactive({
      "id": 1,
      "backgroundImg": "nthu/nft.jpg",
      "profile": {
        "nftImg" : "nthu/nft.jpg",
        "logo" : "青空",
        "audio" : "nthu/audio.mp3",
        "osLink" : "",
        "svLink" : "https://streetvoice.com/sunlex_lin/songs/686958/",
        "ytLink" : "https://youtu.be/AJG2CoxqTkw",
        "target" : 7
      },
      "content": [
        {"title": "專案介紹", "description" : "本專案為畢業歌製作樂團-金桔士為籌備EP《點燈人》製作款項（歌曲包含《點燈人》、《在陽光下》、《青空》等錄音、混音及母帶製作）建立之加密貨幣募資項目。"},
        {"title": "募資金額", "description" : "7ETH（約20萬台幣），經樂團EP錄製後，使用完之餘額將全額捐贈給清大23級畢聯會。"}
      ]
    })

    return{
      school: computed(() => {
        if (route.params.school === 'nycu'){
          return objectNycu
        }else{
          return objectNthu
        }
      })
    }
  }
}
</script>

<style lang="scss">
.wrap-footer{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>