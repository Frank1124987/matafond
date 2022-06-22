<template>
  <div class="home h-100">
    <Main :school="school"/>
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
        "target" : "2 ETH"
      },
      "content": [
        {"title": "專案介紹", "description" : "本專案為畢聯會為籌活動款項（2022 陽明交大畢業歌MV製作暨畢業季活動：畢聯盃校際球類大賽、畢業歌錄製、畢業歌MV等）建立之加密貨幣募資項目。"},
        {"title": "募資金額", "description" : "2ETH(約20萬台幣)，經本屆活動使用完之餘額將留與下屆使用"},
        {"title": "附屬活動", "description" : "凡前100名捐款者（不限金額），都能獲得一個畢業歌NFT（如圖）數位紀念品。"}
      ]
    })

    const objectNthu = reactive({
      "id": 1,
      "backgroundImg": "nthu/nft.jpg",
      "profile": {
        "nftImg" : "nthu/nft.jpg",
        "logo" : "nthu/logo.png",
        "audio" : "nthu/audio.mp3",
        "osLink" : "",
        "svLink" : "https://streetvoice.com/sunlex_lin/songs/686958/",
        "target" : ""
      },
      "content": [
        {"title": "附屬活動", "description" : "凡前100名捐款者（不限金額），都能獲得一個畢業歌NFT（如圖）數位紀念品。"}
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
