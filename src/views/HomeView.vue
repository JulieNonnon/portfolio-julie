<template>
  <h1>Hello World</h1>
  <h2>Moi c'est Julie</h2>
  <div class="presentation">
    <p>Ancienne conseillère commerciale bancaire, je suis en reconversion professionnelle en tant que développeuse web depuis septembre 2022.</p>
    <p>C'est ici que j'expérimente des technologies et des stacks à travers divers projets, je vous souhaite la bienvenue dans mon portfolio. </p>
  </div>

  <router-link to="/projects" class="nav-button" role="button"> Découvrir mes projets </router-link>
  
  <!-- <div class="skills">
     <section class="skills-section">
    <h2>Compétences</h2>
      stacks techniques à renseigner avec logos
    </section> 
  </div> -->


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped>

.presentation {
  margin: 20px 30%;
}
.nav-button {
  display: block; /* nécessaire pour centrer avec margin: auto */
  width: 20%;
  margin: 10px auto 50px;
  padding: 20px 5%;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  color: white;
  background-color: rgb(94, 97, 255);
  font-family: Calibri;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: rgb(73, 76, 204);
}

@media (max-width: 600px) {
  .presentation {
   margin: 5%;
  }
  .nav-button {
   width: 30%;
  }
}


</style>