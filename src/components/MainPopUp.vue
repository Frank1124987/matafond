<template>
<div id="wrap-popup">
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
</template>
<script>
import { computed, onMounted } from '@vue/runtime-core'
// import Web3 from 'web3/dist/web3.min.js'
import {ref, watch} from 'vue'

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
        }
    },
    setup(props, {emit}){
        const loadingDonate = ref(false)
        const invalidInput = ref(false)
        const donationAmount = ref(0)

        const closePopUpWindow = (event) => {
            if (event.target.id === 'wrap-popup'){
                closePopUp()
            }
        }

        const closePopUp = () => {
           emit('buttonClickClose')
        }

        const donate = async () => {
            // console.log(props.currentAddress)
            const currentNet = await props.web3.eth.net.getNetworkType()


            if (donationAmount.value > 0 ){
                // !TODO : Formal edition
                if(currentNet !== '0x1'){
                    emit('popAlertBox', "請換到主鏈")
                    // return
                }

                loadingDonate.value = true
                invalidInput.value = false

                const wei = donationAmount.value * 1000000000000000000

                props.contract.methods.donate().send({
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
        })


        return{
            closePopUp,
            donate,
            donationAmount,
            invalidInput,
            loadingDonate,
            currentAddress: computed(() => props.currentAddress)
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
    right: 1.5rem;

    cursor: pointer;
}


</style>