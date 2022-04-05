<template>
    <div class="wrap-alert">
        <div class="alert-box">
            <div class="alert-box-close" @click="$emit('closeAlertBox')">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                    <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                </svg>
            </div>
            <div class="alert-text">
                <h1>
                    {{alertMessage}}!
                </h1>
            </div>
            <div class="progress">
                <div ref="progressBar" class="progress-bar bg-strong" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            
        </div>
    </div>
</template>
<script>
import {toRefs, ref, onMounted} from 'vue'
export default {
    props: {
        alertMessage: {
            required: true,
            type: String
        }
    },
    emits: ['closeAlertBox'],
    setup(props, eventEmit){
        const {alertMessage} = toRefs(props)
        const progressBar = ref(null)
        
        onMounted(() => {
            progressBar.value.animate([{
                    width: "100%"
                }],{
                    duration: 3000,
                }
            )

            setTimeout(() => {
                eventEmit.emit('closeAlertBox')
            }, 3000)
        })

        
        return {
            alertMessage,
            progressBar,
        }
    }
}
</script>
<style lang="scss">
.wrap-alert{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    z-index: 4;
}
.alert-box{
    position: absolute;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    width: 300px;
    height: 200px;
    background-color: white;
    line-height: 200px;
    border-radius: 20px;

    // display: -webkit-box;
    // display: -webkit-flex;
    // display: -ms-flexbox;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    box-shadow: 0px 3px 8px rgba(0 0 0 / 24%);
    -moz-box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
    -webkit-box-shadow: 0px 3px 8px rgba(0 0 0 / 24%);
    -o-box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
    -ms-box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);

    .progress{
        position: absolute;
        bottom: 0;
        width: 100%;
        border-radius: 0 0 20px 20px;

        .progress-bar{
            border-radius: 0 0 0 20px;

        }
    }
}

.alert-text{
    line-height: initial;
    display: inline-block;
    vertical-align: middle;
}

.alert-box-close{
    position: absolute;
    top: 15px;
    right: 15px;
    line-height: initial;

    cursor: pointer;
}
</style>