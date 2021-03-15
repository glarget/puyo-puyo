# Winamax test

## Pour tester

- [URL DE TEST] - https://puyo-puyo.herokuapp.com/
- [CODE SOURCE] - https://github.com/glarget/puyo-puyo
- [REPOSITORY GIT]

  -- git@github.com:glarget/puyo-puyo.git

  -- https://github.com/glarget/puyo-puyo.git

## Installation du projet

- Récupérer le code avec la commande `git clone https://github.com/glarget/puyo-puyo.git`
- Aller dans le dossier `/puyo-puyo` et s'assurer que c'est bien la branche master (par défaut c'est le cas)
- Lancer la commande `npm -i` pour installer les dépendances du projet
- Lancer un `npm run dev` pour lancer le jeu

## Principaux outils utilisés

- React + Next JS avec create-next-app
- Surcouche `Typescript`
- CSS-IN-JS: `Styled-components` avec un `ThemeProvider` (le thème n'est pas bcp exploité pour ce test mais il est présent)
- Styled props: `Styled-system`
- Les `hooks`
- Tests unitaires: JEST + React Testing Library
- Package `ReactAudioPlayer` pour afficher la balise audio sur le header
- Prettier + `.editorConfig`
- EsLint basé sur `AirBnB`
- `babel-plugin-inline-react-svg` pour intégrer les SVG en inline
- CI: `HEROKU`

## Principale balise HTML utilisée pour le jeu

- `<canvas>`: permet de dessiner la grille de `500px x 600px` et d'assembler le set initial de deux puyos.

## Architecture

### > Basée sur le `atomic design`: https://www.usabilis.com/atomic-design/

- `src/atoms`: plus petit élément UI
- `src/molecules`: se compose d'atômes (non utilisé dans ce test)
- `src/organisms`: se compose de molécules (non utilisé dans ce test)

### > Dossier /views

- regroupe les principales vues utilisateurs

  -- `Header`

  -- `Game`

  -- `Footer`

  -- `RulesModal`

## > Environnement de travail

- version NPM utilisée: `7.5.6`
- version Node utilisée: `v.15.3.0`

## Features demandées traitées

- [ ] Mode solo
- [x] Contrôle de la pièce
- [x] Aperçu de la pièce suivante
- [x] Matching des chaines
- [x] Combos
- [x] Score
- [x] Niveau

## Features ajoutées en plus

- [x] Intégration d'un composant de bienvenue `Starter`

  - saisi du nom
  - choix de personnages
  - choix du niveau

- [x] Création d'une UI personnelle

- [x] Ajout d'une modale affichant les règles du jeu

- [x] Ajout d'une balise Audio dans le Header

- [x] Ajout de tests unitaires pour les composants `Starter` / `Header` / `Footer`

## Pas eu le temps de faire

- Mieux typer les composants => utilisation d'une config pour bypasser la CI heroku qui fail car je n'ai pas eu le temps de tout typer.

  L'idée a été de vous fournir tout de même une url de test.

- Mieux documenter le code avec utilisation de JSDOC
- Intégrer plus de tests utilitaires en plus de ceux de `Starter` / `Header` / `Footer`
- [BUG] Gérer le problème de disparition des pions après qu'il y ait un combo
- Intégrer une base de données de type FIREBASE

## Mon avis sur le test

J'ai trouvé le test challengeant. Beaucoup de choses à faire afin de réaliser ce que vous souhaitiez.
Difficile de tout réaliser car je travaille en parallèle dans ma société.

J'ai tenté cependant de répondre aux trois demandes initiales :

- Travailler sur l'architecture du code avec le choix du atomic design system + documenter un maximum tout ce que je fais.
- Travailler sur un minimum d'intéraction avec le jeu
- Travailler sur une UI personnelle
