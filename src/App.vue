<template>
<router-view/>
</template>

<style>
* {
    --orangelight: #ffa364;
    --pomegranate: #eb3e1b;
    --orangelighting: #fb6d10;
    --darkorange: #fc7643;
    --orange: #af4f41;
    --navblue: #273248;
    --blue: #2e2e41;
    --cream: #ffebd2;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  min-height: 100vh;
  min-width: 100vh;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  background-color: var(--orangelight);
}


footer{
    background-color: var(--navblue);
}

footer #copyright{
    color: white;
}

hr{
    color: white;
}

</style>
