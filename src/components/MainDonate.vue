<template>
<div id="wrap-popup">
    <div id="donate-popup"  class="wrap-card-content-popup p-4" >
        <div class="wrap-card-content-popup-close" @click="closePopUp">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
            </svg>
        </div>
        <div class="h-100 overflow-custom">
            <h1>
                捐款
            </h1>
            <div class=" wrap-card-content px-4 ">
                <div class="wrap-card-content-block">
                    <div class="wrap-card-content-block-title">
                        <h1 class="my-2 text-light fw-bold">
                            您的目前連線地址
                        </h1>
                    </div>
                    <div class="wrap-card-content-block-text ">
                            {{ currentAddress }}
                    </div>
                </div>
                <div class="wrap-card-content-block">
                    <div class="wrap-card-content-block-title">
                        <h1 class="my-2 text-light fw-bold">
                            已募金額/目標金額
                        </h1>
                    </div>
                    <div class="wrap-card-content-block-text ">
                        {{ (donateBalance / 1000000000000000000).toFixed(5) }}&emsp;/&emsp;{{ target }}&emsp;ETH
                    </div>
                    <div class="wrap-card-content-block-progress progress w-50 ">
                        <div class="progress-bar bg-button" role="progressbar" :style="{'width': progressWidth}" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div class="wrap-card-content-block">
                    <div class="wrap-card-content-block-title">
                        <h1 class="my-2 text-light fw-bold">
                            NFT剩餘數量
                        </h1>
                    </div>
                    <div>
                        <div class="wrap-card-content-block-text bg-red ">
                            {{nftStock}}
                        </div>
                        <h5 class="pt-4">
                            (不限金額都會獲得NFT)
                        </h5>
                        <h5 class="pt-1">
                            （每個地址限領一個）
                        </h5>
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
                            <label for="donation-amount-eth">ETH:&emsp;&emsp;</label>
                            <input id="donation-amount-eth" class="input-number" type="number" step="any" :class="{'input-valid': invalidInput}" v-model="donationAmountEth" required>
                            <label class="px-2">= GWEI: {{donationAmountGwei}} </label>
                            <br>
                            <br>
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
</template>
<script>
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
// import Web3 from 'web3/dist/web3.min.js'
import {ref} from 'vue'

export default {
    emits: ['buttonClickClose', 'popAlertBox'],
    props: {
        web3: {
            required: true
        },
        contract: {
            required: true
        },
        currentAddress: {
            required: true
        },
        target: {
            required: true
        },
        id: {
            required: true
        },
        donateBalance: {
            required: true
        },
        nftStock: {
            required: true
        }
    },
    setup(props, {emit}){
        const loadingDonate = ref(false)
        const invalidInput = ref(false)
        const donationAmountEth = ref(0)
        const donationAmountGwei = computed(() => donationAmountEth.value * 1000000000)
        
        const closePopUpWindow = (event) => {
            if (event.target.id === 'wrap-popup'){
                closePopUp()
            }
        }

        const closePopUp = () => {
           emit('buttonClickClose')
        }
        
        const donate = async () => {
            let currentNet
            try{
                currentNet = await props.web3.eth.net.getNetworkType()
            }catch(e){
                emit("popAlertBox", "取得Metamask網路類別錯誤")
            }

            if (typeof donationAmountEth.value !== 'number'){
                invalidInput.value = true
                return
            }

            if (donationAmountEth.value > 0 ){
                if(currentNet !== 'main'){
                    emit('popAlertBox', "請換到主鏈")
                    console.log(currentNet)
                    return 
                }

                loadingDonate.value = true
                invalidInput.value = false

                const wei = donationAmountEth.value * 1000000000000000000

                // !TODO: try
                props.contract.methods.donate(props.id).send({
                    from: props.currentAddress,
                    value: wei
                }).then(() => {
                    loadingDonate.value = false
                    emit('popAlertBox', "捐款成功")

                }).catch((e) => {
                    console.log(e)
                    loadingDonate.value = false
                    emit('popAlertBox', "捐款失敗")
                })

            }else{
                loadingDonate.value = false
                invalidInput.value = true
            }
        }   

        onMounted(() =>{
            window.addEventListener('click', closePopUpWindow)

            if (props.nftStock === '0'){
                emit("popAlertBox", "NFT已全數送出")
            }
        })

        onUnmounted(() => {
            window.removeEventListener('click', closePopUpWindow)
        })

        return{
            closePopUp,
            donate,
            donationAmountEth,
            donationAmountGwei,
            invalidInput,
            loadingDonate,
            progressWidth: computed(() => parseFloat((props.donateBalance/1000000000000000000)/props.target).toFixed(2)+'%' )
        }
    }
}
</script>
<style lang="scss" scoped>
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
    right: 2.2rem;

    cursor: pointer;
}

.wrap-card-content-block-progress{
    margin: 1rem auto ;
    max-width: 50%;
    min-width: 200px;
}

.overflow-custom{
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

.hide-scrollbar{
    -ms-overflow-style: none; 
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
}
</style>