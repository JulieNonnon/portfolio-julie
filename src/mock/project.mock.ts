export interface Project {
  id: number;
  image: string;
  title: string;
  techno: string,
  description: string;
  projectlink: string;
  githublink: string;
}

export const projects: Project[] = [
    {
        id: 1,
        image: require("@/assets/images/angular-denonciator.png"),
        title: "Denonciator",
        techno: "Angular",
        description: "Projet Formation: Exercice tirage au sort de nom d'étudiant avec prise en compte des absents.",
        projectlink: "https://julienonnon.github.io/denonciator_julie/",
        githublink: "https://github.com/JulieNonnon/denonciator_julie",
    },
    {
        id: 2,
        image: require("@/assets/images/angular-todolist.png"),
        title: "Todo List",
        techno: "Angular",
        description: "Projet Formation: réalisation d'une todolist avec création, modification, consultation et historique des tâches.",
        projectlink: "https://julienonnon.github.io/todolist-v2_julie/",
        githublink: "https://github.com/JulieNonnon/todolist-v2_julie",
    },
    {
        id: 3,
        image: require("@/assets/images/angular-coeurdetomate.png"),
        title: "Coeur de Tomate",
        techno: "Angular / Node.js / PostgreSQL",
        description: "Projet Chef d'Oeuvre: Réalisation d'un site de vente en ligne de graines de tomates, frontend, backend et base de données.",
        projectlink: "https://github.com/JulieNonnon/Coeur_De_Tomate_app",
        githublink: "https://github.com/JulieNonnon/Coeur_De_Tomate_back",
    },
    {
        id: 4,
        image: require("@/assets/images/three-tntcrate.png"),
        title: "Ecran de veille TNT",
        techno: "Three.js",
        description: "Projet Personnel: Découverte de Three.js avec la création d'un cube en 3D avec texture qui tourne sur lui même.",
        projectlink: "https://julienonnon.github.io/Floating_TNT_Crate_ThreeJS/",
        githublink: "https://github.com/JulieNonnon/Floating_TNT_Crate_ThreeJS",
    },
    {
        id: 5,
        image: require("@/assets/images/three-rubberduck.png"),
        title: "Canard en plastique",
        techno: "Three.js",
        description: "Projet Personnel: Import d'un modèle 3D de canard en plastique dans une skybox, maintenir le clic pour une interaction avec un contrôle orbital.",
        projectlink: "https://julienonnon.github.io/rubberduck_3d_threejs/",
        githublink: "https://github.com/JulieNonnon/rubberduck_3d_threejs",
    },
    {
        id: 6,
        image: require("@/assets/images/vue-postalcardcollection.png"),
        title: "Collection de cartes postales",
        techno: "Vue.js / Jest",
        description: "Projet Personnel: Blog répertoriant les cartes postales obtenues via l'application de marche à pied Pikmin Bloom, pour découvrir Vue.js et sa prise en main",
        projectlink: "https://julienonnon.github.io/postal-card-collection/",
        githublink: "https://github.com/JulieNonnon/postal-card-collection",
    },
    {
        id: 7,
        image: require("@/assets/images/blender-donuts.png"),
        title: "Donuts Blender",
        techno: "Blender / Three.js",
        description: "Projet Personnel : Découverte de Blender pour à l'avenir créer mes propres models 3D utilisables dans des applications Three.js",
        projectlink: "https://julienonnon.github.io/donuts-blender/",
        githublink: "https://github.com/JulieNonnon/donuts-blender",
    },
]