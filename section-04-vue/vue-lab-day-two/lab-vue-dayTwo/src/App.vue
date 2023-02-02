<template>

  <div>
      <pre>{{ JSON.stringify(personalInfo, null, 1) }}</pre>
  </div>

  <div id="my-form">

    <form @submit.prevent="submitAllInfo">

      <div id="form-name">
        <label for="name">What is your name?</label>
        <input type="text" id="name" v-model="personalInfo.formName">
      </div>

      <div id="form-age">
        <label for="age">How old are you?</label>
        <input type="number" id="age" v-model="personalInfo.formAge">
      </div>

      <div id="form-dob">
        <label for="dob">What is your birth date?</label>
        <input type="date" id="dob" v-model="personalInfo.formDob">
      </div>

      <div id="submit-all-info">
        <input type="submit" value="Submit Form Data" />
      </div>

    </form>

  </div>
  
</template>

<script setup>
  import {ref, reactive} from "vue";

const personalInfo = reactive({
  
  formName: "",
  formAge: "",
  formDob: "",

});

const submitAllInfo = () => {
  console.log(personalInfo.formName);

  alert(`
  SUCCESS!!
  We already recive your info. In few minutes you will recive a answer at your email account! Congratulations!! ^o^
  `);
};


</script>

<style scoped>
  .my-form{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form{
    background-color: cadetblue;
    width: 20em;
    height: 24em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1em;
    padding-left: 0.85em;
  }
  form div{
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  label{
    line-height: 1.5em;
    font-size: 20px;   
  }
  input{
    background-color: aliceblue;
    width: 10em;
    height: 2em;
    border: none;
    outline: none;
    border-radius: 6px;
  }
  #submit-all-info input{
    width: 12em;
  }
</style>