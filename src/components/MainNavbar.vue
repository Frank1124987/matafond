<template>
    <div id="navbar">
        <div class="wrap-navbar-option">
            <button type="button" class="btn border-4 fs-4" @click="switchSchoolT" :class="{'btn-selected' : school}">交通大學</button>
            <button type="button" class="btn border-4 fs-4" @click="switchSchoolF" :class="{'btn-selected' : !school}">清華大學</button>
        </div>
    </div>
</template>

<script>
import {onMounted, ref} from "vue"
import {useRoute, useRouter} from 'vue-router'
export default {
    props: {
        // school
    },
    emits: ['switchSchool'],
    setup(props, {emit}){
        const school = ref(false)
        const route = useRoute()
        const router = useRouter()

        onMounted(()=> {
            if (route.params.school === 'nycu'){
                school.value = true
            }else{
                school.value = false
            }
        })


        const switchSchoolT = () => {
            if (!school.value){
                // emit('switchSchool')
                router.push('/home/nycu')
            }
            school.value = true
        }
        const switchSchoolF = () => {
            if (school.value){
                // emit('switchSchool')
                router.push('/home/nthu')
            }
            school.value = false
        }


        return{
            switchSchoolT,
            switchSchoolF,
            school
        }
    }
}
</script>
<style lang="scss" scoped>
#navbar{
    height: 80px;
    padding-bottom: 0.5rem;

    *{
        height: 100%;
    }
}
.wrap-navbar-option{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;


    align-items: center;
    justify-content: center;   
}

.btn-selected{
    border-bottom: solid 1px ;
    border-radius: 0 !important;
    // margin-bottom: -0.2rem;
}
</style>