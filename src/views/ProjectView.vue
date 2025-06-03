<template>
  <h1>Projets</h1>
  <p>Voici quelques projets réalisés pour le plaisir de découvrir de nouvelles stacks, ou pour simplement monter en compétences sur des stacks qui me sont familières.</p>
  <div class="projects-section">
    <!-- TransitionGroup permet des animations -->
    <!-- tag="div" permet à Vue de générer un div pour que ton layout reste identique. -->
    <TransitionGroup name="fade" tag="div" class="projects-container">
      <ProjectCardComponent
        v-for="project in sortedProjects"
        :key="project.id"
        :item="project"
      />
    </TransitionGroup>
  </div>

  <router-link to="/" class="nav-button" role="button"> Retour à l'accueil </router-link>

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import ProjectCardComponent from '@/components/ProjectCardComponent.vue';
import { projects } from '@/mock/project.mock';

export default defineComponent({
  name: 'ProjectView',
  components: {
    ProjectCardComponent,
  },
  setup() {
    const sortedProjects = computed(() =>
      [...projects].sort((a, b) => b.id - a.id) // plus récent d'abord
    );

    return {
      sortedProjects,
    };
  },
});
</script>

<style scoped>
p {
   margin: 2%;
}
.projects-section{
  margin: 0 5%;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
/* Animation de fade + slide */
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
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
  p {
   margin: 5%;
  }
  .projects-section{
    margin: 0 auto; /* ✅ centré proprement */
    max-width: 100%;
  }
  .projects-container {
    flex-direction: column;
    align-items: center;
  }
  .project-card {
    max-width: 90%;
  }
  .nav-button {
   width: 30%;
  }
}
</style>
