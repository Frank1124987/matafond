<template>
<div class="wrap-container position-relative">
    <div class="container-fluid p-4 p-sm-5 container-center-content" :style="{'background-image': 'url(' + require('../assets/bg-01.jpg') + ')' , 'filter': brightness }">
        <div class="row justify-content-center bg-primary container-content">
            <div class="col-12 col-md-6 wrap-column " ref="wrapColumn" :style="{'align-items': centerOrStart}" >
                <div class="p-4 wrap-card-img" ref="wrapCardImg"> 
                    <img src="@/assets/nft.gif" class="wrap-card-img-nft" alt="">
                    <img src="@/assets/title.jpeg" class="wrap-card-img-title" alt="">
                    <AudioPlayer/>
                    <div class="wrap-card-img-social">
                        <div>
                            <a href="">
                                <!-- <svg width="35" height="35" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="#2081E2"/>
                                    <path d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z" fill="white"/>
                                    <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="white"/>
                                </svg> -->
                                <img src="@/assets/os_logo_square.png">
                            </a>
                        </div>
                        <div>
                            <a href="https://streetvoice.com/xlohapprdx_/songs/686189/">
                                <img src="@/assets/sv_logo_square.png" alt="" srcset="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 " ref="wrapCard" >
                    <div class=" wrap-card-content px-4 " >
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    專案介紹
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                本專案為畢聯會為籌活動款項（2022 陽明交大畢業歌MV製作暨畢業季活動：畢聯盃校際球類大賽、畢業歌錄製、畢業歌MV等）建立之加密貨幣募資項目。
                            </div>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    募資金額
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                2ETH(約20萬台幣)，經本屆活動使用完之餘額將留與下屆使用。
                            </div>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    附屬活動
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                    凡前100名捐款者（不限金額），都能獲得一個畢業歌NFT（如圖）數位紀念品。
                            </div>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    聯絡/負責單位
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                <a class="text-button" href="https://www.facebook.com/NYCUGrad.ChiaoTung">陽明交通大學交大校區畢聯會</a> 
                            </div>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    智能合約地址
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                <a href="https://etherscan.io/address/0xb3F3f2c42Ba77F42f7CaB788478E292AE3A9Df3B" class="text-button">0xb3F3f2c42Ba77F42f7CaB788478E292AE3A9Df3B</a>
                                <br>
                                （請勿直接使用此地址交易）
                            </div>
                        </div>

                    </div>
                    <div class="wrap-card-button d-grid bg-primary" ref="button">
                        <div v-show="scrollable" class="wrap-card-scrollable">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="p-1 bi bi-arrow-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                        </div>
                        <button type="button" class="btn btn-strong fs-5 fw-bold text-white" @click="buttonClick">
                            {{ connectOrDonate }}
                        </button>
                    </div>
            </div>
        </div>
    </div>
    <Donate v-show="popUp" :web3="web3" :contract="contract" :current-address="currentAddress" @button-click-close="closePopUp" @pop-alert-box="popAlertBox"/>
    <Alert v-if="alertBox" :alertMessage="alertMessage" @closeAlertBox.once="closeAlertBox"/>
</div>
</template>
<script>
import { ref, watch, onMounted} from 'vue'
import Web3 from 'web3/dist/web3.min.js'
import {useRouter} from 'vue-router'
import ABI from '@/contract/contractABI.js'
import Alert from '@/components/Alert.vue'
import Donate from '@/components/MainDonate.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'

export default {
    components: {
        Alert,
        Donate,
        AudioPlayer
    },
    setup(){
        const connectOrDonate = ref("按此連結Metamask")
        const connected = ref(false)
        const popUp = ref(false)
        const brightness = ref("brightness(1)")
        const currentAddress = ref("")
        const alertBox = ref(false)
        const alertMessage = ref("")

        const web3 = ref(null)
        const contract = ref(null)

        const button = ref()
        const wrapCard = ref()
        const scrollable = ref()

        const wrapColumn = ref()
        const centerOrStart = ref("center")
        const wrapCardImg = ref()

        const buttonClickConnect = () => {
            if (typeof window.ethereum !== 'undefined'){
                // !TODO: Maybe change all to await?
                web3.value.eth.requestAccounts().then( async () => {
                    try{
                        const currentNet = await props.web3.eth.net.getNetworkType()
                    }catch(e){
                        emit("popAlertBox", "取得Metamask網路類別錯誤")
                    }

                    if (currentNet !== 'main'){
                        alertBox.value = true
                        alertMessage.value = "請換到主鏈"
                    }
                    
                    try{
                        const accounts = await web3.value.eth.getAccounts()
                    }catch(e){
                        emit("popAlertBox", "取得Metamask地址錯誤")
                    }

                    currentAddress.value = accounts[0]

                }).catch((error)=> {
                    // console.log(error)
                    popAlertBox("無法連接帳號(請確認Metamask是否已登入)")
                })
            }else{
                window.open("https://metamask.io/download/")
            }
        }

        const buttonClickDonate = () => {
            popUp.value = true
            brightness.value = "brightness(0.5)"            
        }

        const buttonClick = () => {
            if (connected.value){
                buttonClickDonate()
            }else{
                buttonClickConnect()
            }
        }

        const closePopUp = () => {
            popUp.value = false
            brightness.value = "brightness(1)"
        }

        const closeAlertBox = () => {
            alertBox.value = false
        }

        const popAlertBox = (message) => {
            alertBox.value = true
            alertMessage.value = message
        }

        onMounted(async() => {
            if (typeof window.ethereum !== 'undefined'){
                //  !ISSUE: Why can't I access selectedAddress from here
                // console.log("1",window.ethereum )


                web3.value = new Web3(Web3.givenProvider)
                contract.value = new web3.value.eth.Contract(ABI, '0xb3F3f2c42Ba77F42f7CaB788478E292AE3A9Df3B')

                const accounts = await web3.value.eth.getAccounts()
                if(accounts.length){
                    connected.value = true
                    currentAddress.value = accounts[0]   
                }else{
                    connected.value = false
                }

                ethereum.on('accountsChanged', async (newAccounts) => {
                    console.log("account changed")
                    if (newAccounts.length){
                        connected.value = true
                        const accounts = await web3.value.eth.getAccounts()
                        currentAddress.value = accounts[0]   
                    }else{
                        closePopUp()
                        connected.value = false
                        currentAddress.value = ""
                    }
                })

                ethereum.on('chainChanged', (newChainId) => {
                    if(newChainId !== '0x1'){
                        popAlertBox("請換到主鏈")
                    }
                })

            }

            // scrollable observer
            // !ISSUE: it will generate a 1px movement
            // const intersectOptionsContent = {
            //     root : wrapCard.value,
            //     rootMargin : "0px 0px 0px 0px",
            //     threshold : 1.0
            // }
            // const intersectCallbackContent = (entries) => {
            //     entries.forEach( (entry) => {
            //         if (!entry.isIntersecting){
            //             scrollable.value = true
            //         }else{
            //             scrollable.value = false
            //         }
            //     })
            // }
            // const observerContent = new IntersectionObserver( intersectCallbackContent, intersectOptionsContent)
            // observerContent.observe(button.value)


            const intersectOptionsImage = {
                root : wrapColumn.value,
                rootMargin : "0px 0px 0px 0px",
                threshold : 1.0
            }

            const intersectCallbackImage = (entries) => {
                entries.forEach( (entry) => {
                    if (entry.isIntersecting){
                        centerOrStart.value = "center"
                    }else{
                        centerOrStart.value = "start"
                    }
                })
            }

            const observerImage = new IntersectionObserver( intersectCallbackImage, intersectOptionsImage)
            observerImage.observe(wrapCardImg.value)
        })
        
        watch(connected, (newValue) => {
            if (newValue){
                connectOrDonate.value = "我要捐款"
            }else{
                connectOrDonate.value = "按此連結Metamask"
            }
        }, {immediate: true})


        return{
            buttonClick,
            connectOrDonate,
            popUp,
            brightness,
            closePopUp,
            currentAddress,
            alertBox,
            alertMessage,
            closeAlertBox,
            web3,
            contract,
            popAlertBox,
            button,
            scrollable,
            wrapCard,
            wrapColumn,
            wrapCardImg,
            centerOrStart
        }
    }
}
</script>
<style lang="scss">
.wrap-container{
    z-index: auto;
    @media (min-width: 768px){
        height: 100%;
    }
}


.container-center-content{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    align-items: center;
    justify-content: center;   
    background-size: 100% 100%;

    @media (min-width: 768px){
        height: 100%;
    }
}

.container-content{
    max-width: 1080px;
    border-radius: 20px;
    position: relative;
    height: 100%;

    @media (max-width: 768px){
        padding: 0 1rem;
        overflow: auto;
        -ms-overflow-style: none; 
        scrollbar-width: none;
        &::-webkit-scrollbar{
            display: none;
        }  
    }

    @media (min-width: 768px){
        padding: 1rem;
        > div{
            height: 100%;
            position: relative;
            overflow-y: scroll;
            overflow-x: hidden;
            
            &::-webkit-scrollbar-track{
                background: white;
            }
            &::-webkit-scrollbar-thumb{
                background: #909090;
                border-radius: 5px;
            }
            &::-webkit-scrollbar{
                width: 5px;
                height: 8px;
            }
            
            scrollbar-width: thin;
            scrollbar-color: #909090 white;
        }
    }
}

.wrap-card-content{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    justify-content: center;
    flex-direction: column;
}

.wrap-column{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
}

.wrap-card-img{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    // height: 100%;    

    .wrap-card-img-nft{
        border-radius: 20px;
        width: 330px;
        height: 330px;

        @media (max-width: 576px){
            width: 300px;
            height: 300px;
        }
    }

    .wrap-card-img-title{
        width: 275px;
        margin: 1.5rem 0;
    }
}

.wrap-card-img-social{
    padding: 1.5rem;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;

    // height: 50%;
    img{
        width: 35px;
        border-radius: 35px;
    }

    > div{
        padding: 0 10px 0 10px;
    }
}

.wrap-card-content-block-title{
    height: 100px;
    line-height: 100px;
    // margin: 1em 0;
    h1{
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
    }
}

.wrap-card-content-block-text{
    overflow-wrap: anywhere;
    font-size: 1.2rem;
}

#wrap-popup{
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 2;
}


.wrap-card-button{
    position: sticky;
    width: 100%;
    // bottom: -1px;
    bottom: 0px;
    z-index: 1;
    
    padding: 1.5rem !important;
    padding-bottom: calc(1.5rem + 1px);
    // box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    button{
        border-radius: 10px;
        width: 100%;
    }
}

.custom-btn:hover{
    background-color: #4e76da;
    color: white;
}

.input-number{
    line-height: 1.2;
    border: 1px solid #2c3e50;
    border-radius: 4px;
}

.input-valid{
    outline: 2px solid red;
    border: none;
}

.wrap-card-scrollable {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: -25%;

    background: white;
    border-radius: 25px;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}



// Loading animation
$offset: 187;
$duration: 1.4s;

.spinner {
  animation: rotator $duration linear infinite;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    dash $duration ease-in-out infinite, 
    colors ($duration*4) ease-in-out infinite;
}

@keyframes colors {
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
}

@keyframes dash {
 0% { stroke-dashoffset: $offset; }
 50% {
   stroke-dashoffset: calc($offset/4);
   transform:rotate(135deg);
 }
 100% {
   stroke-dashoffset: $offset;
   transform:rotate(450deg);
 }
}

</style>