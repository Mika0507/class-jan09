

<template>

  <div>
    
    <h1 v-bind:id="bindingId">Ejercicio 1</h1>

    <h2 :class="bindingClass && 'isTrue'">Ejercicio 2</h2>
    <h2 :class="!bindingClass && 'isFalse'">Ejercicio 2</h2>

    <h3 v-bind:style="{
          textDecoration: 'line-through',
          color: textColor,
          fontSize: textSize + 'em',
        }"
      >Ejercicio 3</h3>

    <h4 :class="[optionTrue && 'oneStyle', optionFalse && 'otherStyle']">Ejercicio 4</h4>

  </div>
    

</template>

<script setup>

  import { ref, reactive } from "vue";

  const bindingId = ref("binding-styles-h1");

  const bindingClass = ref(true);

  const textColor = ref("#ff8000");
  const textSize = ref(3);

  const optionTrue = ref(true);
  const optionFalse = ref(false);
</script>

<style scoped>

#binding-styles-h1{
  color: blueviolet;
  font-size: 60px;
  text-decoration: underline;
}
.isTrue{
  color: green;
}
.isFalse{
  display: none;
}
.line-through{
  text-decoration: line-through;
}
.oneStyle{
  color:cornflowerblue;
  font-size: 18px;
  text-decoration: underline;
}
.otherStyle{
  color:rgb(147, 7, 155);
  font-size: 12px;
  text-decoration: line-through;
}
</style>
