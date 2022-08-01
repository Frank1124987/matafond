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
import { computed } from '@vue/runtime-core'
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
      "id": 113,
      "backgroundImg": "nycu/bg-01.jpg",
      "profile": {
        "nftImg" : "nycu/nft.gif",
        "logo" : "nycu/title.jpeg",
        "audio" : "nycu/alice.mp3",
        "osLink" : "https://opensea.io/assets/ethereum/0x3094a90b792d6448ad845c60f0ca137edd4706ab/113",
        "svLink" : "https://streetvoice.com/xlohapprdx_/songs/686189/",
        "ytLink" : "https://youtu.be/t7Q8mPJmiNA",
        "target" : 7
      },
      "content": [
        {"title": "專案介紹", "description" : `我們想透過音樂表達許多事物，若你喜歡我們的歌，哪怕是一點點的支持都是能助長我們能前進的動力。我們想用不同的曲風與歌詞意境，給人帶來共鳴。我們還有一些想完成的歌:<怪胎>、<我用了一首不是饒舌歌的和弦寫歌>、<聽說妳的身高159>。(Demo請見${("Street voice").link("https://streetvoice.com/xlohapprdx_/songs/")} )，募得資金扣除成本，依比例分配給畢業歌製作團隊與元募及回饋學校`},
        {"title": "附屬活動", "description" : "前111名加密貨幣捐贈者，不論金額大小，皆可獲得2022年陽交大_交通校區畢業歌<愛麗絲的「理」想國度>NFT一枚。"},
        {"title": "活動發行", "description" : "由交大畢業歌團隊與元募（清交學生新創團隊）聯合發行"}
      ]
    })

    const objectNthu = reactive({
      "id": 114,
      "backgroundImg": "nthu/nft.jpg",
      "profile": {
        "nftImg" : "nthu/nft.jpg",
        "logo" : "青空",
        "audio" : "nthu/audio.mp3",
        "osLink" : "https://opensea.io/assets/ethereum/0x3094a90b792d6448ad845c60f0ca137edd4706ab/114",
        "svLink" : "https://streetvoice.com/sunlex_lin/songs/686958/",
        "ytLink" : "https://youtu.be/AJG2CoxqTkw",
        "target" : 7
      },
      "content": [
        {"title": "專案介紹", "description" : "本專案為畢業歌製作樂團-金桔士為籌備EP《點燈人》製作款項（歌曲包含《點燈人》、《在陽光下》、《青空》等錄音、混音及母帶製作）建立之加密貨幣募資項目。，募得資金扣除成本，依比例分配給畢業歌製作團隊與元募及回饋學校"},
        {"title": "歌曲介紹", "description" : "每個人心中都有自己的一片天空，而青空可以是那些青春的回憶，也可以是自己最想完成的夢想。身為清華人，我們在清華的天空下生活了四年，或許這四年面臨過許多悲傷挫折的事、又或許未來有很多不確定性，但我們終究會成長，成長會清空我們心中的種種，而我們也將成為彼此心中的青空。"},
        {"title": "附屬活動", "description" : "前111名加密貨幣捐贈者，不論金額大小，皆可獲得2022年清華大學畢業歌<青空>NFT一枚。"},
        {"title": "活動發行", "description" : "由金桔士樂團（清大畢業歌團隊）與元募（清交學生新創團隊）聯合發行"}
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
  width: 100%;
}
</style>