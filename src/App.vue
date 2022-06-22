<template>
  <router-view/>
</template>

<style lang="scss">
@import '@/style/bootstrapCustom.scss';
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@700&display=swap');

:root{
  body {
    margin: 0;
    padding: 0;
    
    @media (min-width: 768px){
        height: 100vh;
    }

  }
}

#app {
  font-family: 'PT Sans Narrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    @media (min-width: 768px){
        height: 100vh;
    }
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
