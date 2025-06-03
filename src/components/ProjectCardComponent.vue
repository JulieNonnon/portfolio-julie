<template>
  <div class="project-card">
  <!-- <div class="project-card" @click="goToDetail"> -->
    <img :src="item.image" :alt="item.title" />
    <h2>{{ item.title }}</h2>
    <p>{{ item.techno }}</p>
    <p class="descriptionP">{{ item.description }}</p>
    <a :href="item.projectlink" target="_blank" rel="noopener noreferrer">
      <button class="link-button">
        <AppWindow class="icon" />
        Voir l'application
      </button>
    </a>
    <a :href="item.githublink" target="_blank" rel="noopener noreferrer">
      <button class="github-button">
        <Github class="icon" />
        Consulter le GitHub
      </button>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Github, AppWindow } from 'lucide-vue-next'; //import icon de Lucide
import { Project } from "@/mock/project.mock"

export default defineComponent({
  name: "ProjectCardComponent",
  components: { Github, AppWindow }, //icons de Lucide
  props: {
    item: {
      type: Object as () => Project,
      required: true,
    },
  },
});

</script>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 5px;
  max-width: 30%;
  padding: 0;
  margin: 1rem 0;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.project-card:hover {
  background-color: #f0f8ff;
}
h2, p {
  margin: 5%;
}
.descriptionP {
  text-align: justify;
}
img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.link-button, .github-button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2d89ef;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.link-button {
  background-color: #2d89ef;
}
.github-button {
  background-color: #404040;
}
.link-button:hover {
  background-color: #1b66c9;
}
.github-button:hover {
  background-color: #1b1f23;
}
.icon {
  width: 1rem;
  height: 1rem;
}
</style>
