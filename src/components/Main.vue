<template>
<div class="wrap-container position-relative">
    <div class="container-fluid p-4 p-sm-5 container-center-content" :style="{'background-image': 'url(' + require(`@/assets/${school.backgroundImg}`) + ')' , 'filter': brightness }">
        <div class="row justify-content-center bg-primary container-content">
            <div class="col-12">
                <Navbar/>
            </div>
            <div class="col-12 col-md-6 wrap-content wrap-column " ref="wrapColumn" :style="{'align-items': centerOrStart}" >
                <div class="p-4 wrap-card-img" ref="wrapCardImg"> 
                    <img :src="require(`@/assets/${school.profile.nftImg}`)" class="wrap-card-img-nft" alt="">
                    <img v-if="school.id == 113" :src="require(`@/assets/${school.profile.logo}`)" class="wrap-card-img-title" alt="">
                    <h1 v-else class="wrap-card-img-logo">{{ school.profile.logo }}</h1>
                    <AudioPlayer :audio="school.profile.audio"/>
                    <div class="wrap-card-img-social">
                        <div>
                            <a :href="school.profile.osLink">
                                <img src="@/assets/share/os_logo_square.png">
                            </a>
                        </div>
                        <div>
                            <a :href="school.profile.svLink">
                                <img src="@/assets/share/sv_logo_square.png" alt="" srcset="">
                            </a>
                        </div>
                        <div>
                            <a :href="school.profile.ytLink" style="color: #dc3545 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 wrap-content " ref="wrapCard" >
                    <div class=" wrap-card-content px-4 " >
                        <div v-for="(block, id) in school.content" :key="id">
                            <ContentBlock :contentBlock="block"/>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    活動截止
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                (符合以下任一條件)
                                <br>
                                1、 即日起至8/31。(不論NFT是否發完，是否募到目標金額皆結束一切募款及發放行為)
                                <br>
                                2、 募滿目標金額(7以太幣)且111枚NFT亦發放完畢。
                            </div>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    智能合約地址
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                <a :href="'https://etherscan.io/address/'+contractAddress" class="text-button">{{contractAddress}}</a>
                                <br>
                                （請勿直接使用此地址交易）
                            </div>
                        </div>
                        <div class="wrap-card-content-block">
                            <div class="wrap-card-content-block-title">
                                <h1 class="my-2 text-light fw-bold">
                                    備註
                                </h1>
                            </div>
                            <div class="wrap-card-content-block-text">
                                <a href="@/assets/share/proposal.docx" download>
                                    企劃書連結
                                </a>
                            </div>
                            <div class="wrap-card-content-block-text">
                                捐款金額會以比例方式負擔NFT上鏈費用
                            </div>
                            <div class="wrap-card-content-block-text">
                                若有任何問題請聯絡：matafond2022@gmail.com
                                （請勿聯絡各校畢聯會）
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
    <Donate v-if="popUp" :web3="web3" :contract="contract" :current-address="currentAddress" :id="school.id" :donateBalance="donateBalance" :nftStock="nftStock" :target="school.profile.target" @button-click-close="closePopUp" @pop-alert-box="popAlertBox"/>
    <Alert v-if="alertBox" :alertMessage="alertMessage" @closeAlertBox.once="closeAlertBox"/>
</div>
</template>
<script>
import { ref, watch, onMounted, onUpdated} from 'vue'
import Web3 from 'web3/dist/web3.min.js'
import ABI from '@/contract/contractABI.js'
// import ABI from '@/contract/contractABI_test.js'
import Alert from '@/components/Alert.vue'
import Donate from '@/components/MainDonate.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import Navbar from '@/components/MainNavbar.vue'
import ContentBlock from '@/components/MainContentBlock.vue'

export default {
    components: {
        Alert,
        Donate,
        AudioPlayer,
        Navbar,
        ContentBlock
    },
    props: {
        school: {
            required: true,
            type: Object
        }
    },
    setup(props){
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

        const donateBalance = ref()
        const nftStock = ref()
        
        const contractAddress = ref("0x3094A90B792d6448AD845C60f0ca137EdD4706ab")

        // !TODO: temporary
        // const school = ref()
        // const switchSchool = () => {
        //     school.value = !school.value
        //     console.log(school.value)
        // }

        const buttonClickConnect = () => {
            if (typeof window.ethereum !== 'undefined'){
                // !TODO: Maybe change all to await?
                web3.value.eth.requestAccounts().then( async () => {
                    let currentNet
                    try{
                        currentNet = await web3.value.eth.net.getNetworkType()
                    }catch(e){
                        popAlertBox("取得Metamask網路類別錯誤")
                    }

                    if (currentNet !== 'main'){
                        popAlertBox("請換到主鏈(切換之後請重新整理)")
                    }
                    
                    let accounts
                    try{
                        accounts = await web3.value.eth.getAccounts()
                    }catch(e){
                        popAlertBox("取得Metamask地址錯誤")
                    }

                    currentAddress.value = accounts[0]

                }).catch((error)=> {
                    popAlertBox("無法連接帳號(請確認Metamask是否已登入)")
                })
            }else{
                window.open("https://metamask.io/download/")
            }
        }

        const buttonClickDonate = async () => {
            let currentNet = await web3.value.eth.net.getNetworkType()

            if (currentNet !== 'main'){
                popAlertBox("請換到主鏈(切換之後請重新整理)")
            }

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
                contract.value = new web3.value.eth.Contract(ABI, contractAddress.value)

                contract.value.methods.getBalance(props.school.id).call({
                    from: "0x959D3dBDEc126ee0A28aA2086991AA94Fe7Dcc73"
                }).then((result) => {
                    donateBalance.value = result
                })
                
                contract.value.methods.getStock(props.school.id).call({
                    from: "0x959D3dBDEc126ee0A28aA2086991AA94Fe7Dcc73"
                }).then((result) => {
                    nftStock.value = result
                })

                const accounts = await web3.value.eth.getAccounts()
                if(accounts.length){
                    connected.value = true
                    currentAddress.value = accounts[0]   
                }else{
                    connected.value = false
                }

                ethereum.on('accountsChanged', async (newAccounts) => {
                    if (newAccounts.length){
                        // console.log("change")
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
                        popAlertBox("請換到主鏈(切換之後請重新整理)")
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
            centerOrStart,
            donateBalance,
            nftStock,
            contractAddress
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

    }
}

.wrap-content{
    @media (min-width: 768px){
        height: calc(100% - 80px - 1rem);
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

    .wrap-card-img-logo{
        margin: 1.5rem 0;
        height: 35px;
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
    bottom: 0px;
    z-index: 1;
    
    padding: 1.5rem !important;
    padding-bottom: calc(1.5rem + 1px);

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