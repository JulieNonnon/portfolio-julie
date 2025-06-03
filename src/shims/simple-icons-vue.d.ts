/*
Fichier de déclaration .d.ts : fichier TypeScript qui déclare les types d’un module externe, surtout quand ce module:

- n’a pas été écrit en TypeScript à l’origine,
- ou n’inclut pas ses propres types
- ou quand tu veux ajouter des types personnalisés.

C'est rassurer TypeScript pour lui dire “ne t’inquiète pas, voici comment ce truc est censé se comporter”.
*/

declare module 'simple-icons-vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<any, any, any>;
  export const SimpleIcon: typeof component;
}

// declare module 'simple-icons/icons/*' {
//   const icon: {
//     title: string;
//     slug: string;
//     hex: string;
//     source: string;
//     svg: string;
//     path: string;
//     license: {
//       type: string;
//       url: string;
//     };
//   };
//   export default icon;
// }