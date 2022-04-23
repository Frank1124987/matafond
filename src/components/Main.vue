<template>
<div class="wrap-container position-relative">
    <div class="container-fluid p-4 p-sm-5 container-center-content" :style="{'background-image': 'url(' + require('../assets/bg-01.jpg') + ')' , 'filter': brightness }">
        <div class="row justify-content-center bg-primary container-content overflow-scroll">
            <div class="col-12 col-md-6 " >
                <div class="p-4 wrap-card-img">
                    <img src="@/assets/nft.gif" class="wrap-card-img-nft" alt="">
                    <img src="@/assets/title.jpeg" class="wrap-card-img-title" alt="">
                </div>
            </div>
            <div class="col-12 col-md-6 ">
                <div class=" wrap-card-content px-4 ">
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

                <div class="wrap-card-button d-grid pt-4 px-4 pb-3 bg-primary">
                    <button type="button" class="btn btn-strong fs-5 fw-bold text-white" @click="buttonClick">
                        {{ connectOrDonate }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div id="wrap-popup" v-show="popUp">
        <div id="donate-popup"  class="wrap-card-content-popup p-4" >
            <div class="wrap-card-content-popup-close" @click="closePopUp">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </div>
            <div class="h-100 overflow-scroll">
                <h1>
                    捐款
                </h1>
                <div class=" wrap-card-content px-4 ">

                    <div class="wrap-card-content-block">
                        <div class="wrap-card-content-block-title">
                            <h1 class="my-2 text-light fw-bold">
                                您的地址
                            </h1>
                        </div>
                        <div class="wrap-card-content-block-text ">
                                {{ currentAddress }}
                        </div>
                    </div>
                    <div class="wrap-card-content-block">
                        <div class="wrap-card-content-block-title">
                            <h1 class="my-2 text-light fw-bold">
                                目標金額
                            </h1>
                        </div>
                        <div class="wrap-card-content-block-text ">
                            2 ETH
                        </div>
                    </div>
                    <div class="wrap-card-content-block">
                        <div class="wrap-card-content-block-title">
                            <h1 class="my-2 text-light fw-bold">
                                捐款金額
                            </h1>
                        </div>
                        <div class="w-100 overflow-wrap ">
                            <form @submit.prevent="donate">
                                <label for="donation-amount">ETH:&emsp;&emsp;</label>
                                <input id="donation-amount" class="input-number" type="number" step="any" :class="{'input-valid': invalidInput}" v-model="donationAmount" required>
                                <div class="my-4">
                                    <button v-if="!loadingDonate" type="submit" class="btn btn-outline-strong custom-btn w-75">捐款</button>               
                                    <svg v-else class="spinner" width="35px" height="35px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                                        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
                                    </svg>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <Alert v-if="alertBox" :alertMessage="alertMessage" @closeAlertBox.once="closeAlertBox"/>
</div>
</template>
<script>
import { ref, watch, onMounted} from 'vue'
import Web3 from 'web3/dist/web3.min.js'
import {useRouter} from 'vue-router'
import ABI from '@/contract/contractABI.js'
import Alert from '@/components/Alert.vue'
// import VideoPlayer from '@/components/VideoPlayer.vue'

export default {
    components: {
        Alert,
        // VideoPlayer
    },
    setup(){
        const router = useRouter()

        const connectOrDonate = ref("按此連結Metamask")
        const connected = ref(false)
        const brightness = ref("brightness(1)")
        const popUp = ref(false)
        const currentAddress = ref("")
        const donationAmount = ref(0)
        const invalidInput = ref(false)
        const loadingDonate = ref(false)
        const alertBox = ref(false)
        const alertMessage = ref("")

        let web3
        let contract

        const buttonClickConnect = () => {
            if (typeof window.ethereum !== 'undefined'){
                web3.eth.requestAccounts().then( async () => {
                    const currentNet = await web3.eth.net.getNetworkType()
                    if (currentNet !== 'main'){
                        alertBox.value = true
                        alertMessage.value = "請換到主鏈"
                    }

                    const accounts = await web3.eth.getAccounts()
                    currentAddress.value = accounts[0]

                }).catch((error)=> {
                    console.log(error)
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

        const closePopUpWindow = (event) => {
            if (event.target.id === 'wrap-popup'){
                closePopUp()
            }
        }

        const closePopUp = () => {
            popUp.value = false
            brightness.value = "brightness(1)"
        }

        const closeAlertBox = () => {
            alertBox.value = false
        }

        const donate = async () => {
            const currentNet = await web3.eth.net.getNetworkType()


            if (donationAmount.value > 0 ){
                // !TODO : Formal edition
                if(currentNet !== '0x1'){
                    alertBox.value = true
                    alertMessage.value = "請換到主鏈"
                    return
                }

                loadingDonate.value = true
                invalidInput.value = false

                const wei = donationAmount.value * 1000000000000000000

                contract.methods.donate().send({
                    from: currentAddress.value,
                    value: wei
                }).then(() => {
                    loadingDonate.value = false

                    alertBox.value = true
                    alertMessage.value = "捐款成功"
                }).catch(() => {
                    loadingDonate.value = false
                    alertBox.value = true
                    alertMessage.value = "捐款失敗"
                })
            }else{
                loadingDonate.value = false
                invalidInput.value = true
            }
        }   


        onMounted(async() => {
            if (typeof window.ethereum !== 'undefined'){
                //  ISSUE: Why can't I access selectedAddress from here
                // console.log("1",window.ethereum )


                web3 = new Web3(Web3.givenProvider)
                contract = new web3.eth.Contract(ABI, '0xb3F3f2c42Ba77F42f7CaB788478E292AE3A9Df3B')

                const accounts = await web3.eth.getAccounts()
                if(accounts.length){
                    connected.value = true
                    currentAddress.value = accounts[0]   
                }else{
                    connected.value = false
                }

                ethereum.on('accountsChanged', async (newAccounts) => {
                    if (newAccounts.length){
                        connected.value = true

                        const accounts = await web3.eth.getAccounts()
                        currentAddress.value = accounts[0]   
                    }else{
                        connected.value = false
                    }
                })

                ethereum.on('chainChanged', (newChainId) => {
                    if(newChainId !== '0x1'){
                        alertBox.value = true
                        alertMessage.value = "請換到主鏈"
                    }
                })

                window.addEventListener('click', closePopUpWindow)

            }
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
            donationAmount,
            donate,
            invalidInput,
            loadingDonate,
            alertBox,
            alertMessage,
            closeAlertBox
        }
    }
}
</script>
<style lang="scss" scoped>
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
    }

    @media (min-width: 768px){
        padding: 1rem;
        > div{
            height: 100%;
            position: relative;
            overflow: scroll;
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

.wrap-card-img{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;

    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;

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
    overflow-wrap: break-word;
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

.wrap-card-content-popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 70vw;
    height: 70vh;
    @media (max-width: 576px){
        width: 90vw;
        height: 85vh;
    }

    background-color: white;

    z-index: 3;
    border-radius: 20px;

}

.wrap-card-content-popup-close{
    position: absolute;
    top: 1.8rem;
    right: 1.5rem;

    cursor: pointer;
}

.wrap-card-button{
    position: sticky;
    width: 100%;
    bottom: 0;
    z-index: 1;

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