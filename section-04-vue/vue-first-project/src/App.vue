<script setup>
import StylesBinding from './components/StylesBinding.vue'
import MegaButton from './components/MegaButtoon.vue'
import PizzaQuestion from './components/PizzaQuestion.vue'
import ParentComponent from './components/EmitComponent/ParentComponent.vue'
</script>

<template>
  <!-- <header>    -->

    <!-- <div>
      <StylesBinding />
    </div>
  </header>
  <MegaButton>Hola a Todos!</MegaButton> -->
  <!-- <div>
    <PizzaQuestion />
  </div>
   -->
   <div>
    <ParentComponent />
   </div>
  
</template>