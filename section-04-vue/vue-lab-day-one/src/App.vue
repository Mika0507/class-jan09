<template>
    <header>
      <img src="./images/Ironhack_logo.png" alt="ironhack-logo">
      <img src="./images/Burger_menu.png" alt="menu-burguer">
    </header>
    <section class="position-vue">
      <img src="./images/Vue_logo.png" alt="vue-logo">
      <h1>Welcome to Vue.js</h1>
      <h3>Become a coding ninja with the fastest - <br> growing JavaScript framework</h3>
      <button>Awesome!</button>
    </section>
    <section class="sections-green">
      <article>
        <img src="./images/USP-1icono.png" alt="icon1">
        <h2>Performant</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reiciendis facilis distinctio?</p>
      </article>
      <article>
        <img src="./images/USP-2.png" alt="icon2">
        <h2>Approachable</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reiciendis facilis distinctio?</p>
      </article>
      <article>
        <img src="./images/USP-3.png" alt="icon3">
        <h2>Versatile</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reiciendis facilis distinctio?</p>
      </article>
    </section>
    
</template>

<script setup>

</script>

<style scoped>
header{
  display: flex;
  justify-content: space-around;
  gap: 40em;
  margin: 0.85em 0;
}
  .position-vue{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .position-vue h1{
    font-size: 60px;
    margin: 0;
  }
  h3{
    text-align: center;
  }
  button{
    background-color: rgb(69, 99, 69);
    width: 8em;
    height: 2em;
    border: none;
    border-radius: 14px;
    font-size: 20px;
    color: #fff;
  }
  .sections-green{
    background-color: green;
    width: 100vw;
    height: 22em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3em;
  }
  .sections-green article{
    width: 14em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  p{
    padding-left: 1em;
    text-align: center;
  }
</style>