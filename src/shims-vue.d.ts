/* 
Un shim est un morceau de code qui comble une lacune : ici, le manque de types.
C’est un type "d'ajustement" qui sert à faire fonctionner TypeScript avec des choses qu’il ne comprend pas nativement.
Indique à Typescript : “Chaque fois que tu vois un import d’un fichier .vue, ne t’inquiète pas. C’est un composant Vue. Voici à quoi ça ressemble.”
*/

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
