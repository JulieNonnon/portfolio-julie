<template>
  <footer class="footer">
    <nav :class="{ open: isMenuOpen }">
      <!-- menu -->
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link to="/projects" class="nav-link" >Projets</router-link>
    </nav>
    <p>Made with 💙 by Julie</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FooterComponent",
  setup() {
    const router = useRouter(); 
    const isMenuOpen = ref(false); 

    return {
      isMenuOpen,
    };
  }
});
</script>


<style scoped>
.footer {
  /* border: 5px red solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(237, 250, 255);
  padding: 1rem 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* overflow-x: hidden; */
}
nav {
  display: flex;
  gap: 1rem;
  padding-left: 2%;
}
.nav-link {
  margin-right: 1rem;
  text-decoration: none;
  color: rgb(94, 97, 255);
  font-family: Calibri;
}
.nav-link.router-link-exact-active {
  font-weight: bold;
}
p {
  margin: 0 5%;
}
</style>