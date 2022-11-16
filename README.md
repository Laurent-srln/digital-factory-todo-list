# DFTodoListAngular

Ce dépôt contient une application réalisée avec Angular dans le cadre d'un test technique pour la Digital Factory de Sogeti.

**L'application est live et testable** :point_right: [ici](https://laurent-srln.github.io/digital-factory-todo-list/) :point_left: !

L'objectif du test était de réaliser une application permettant de gérer une Todo list en mettant en place les user stories suivantes :


- **1-List my TODOs**. As a user I would like to list my current todos.
- **2-Change a TODO state**. As a user I would like to change a todo state by checking a "box".
- **3-Detail a TODO**. As a user I would like to display one of my todo in a separate or dedicated view.This todo will contain its title and a description (which is a new information not shown in the previous view).
- **4-Add a new TODO**. As a user I would like to add a new todo in my list


## Travail restant à effectuer

- ~~Ajouter des contrôles sur le formulaire d'ajout~~
- Compléter les tests unitaires
- Simuler un backend
- Ajouter la possibilité d'éditer le formulaire

## Commentaires par User Story

1. List my TODOs

Pour la mise en place et la démonstration de cette fonctionnalité, j'ai ajouté des données brutes dans le fichier src/app/data.json.
Chaque tâche est affichée sous la forme d'une carte avec son intitulé, son id et son statut (To do / Done).
Pour l'interface, j'ai utilisé les bibliothèques Angular Material et Bootstrap.

2. Change a TODO state

Depuis la liste, j'ai ajouté la possibilité de changer le status d'une tâche via une case à cocher directement sur la carte. Si une tâche est indiquée réalisée via cette checkbox, son intitulé est barré et elle se place automatiquement en bas de la liste.
Si ultérieurement la case est décochée pour indiquer que la tâche n'est finalement pas complétée, elle se replace en haut de la liste et son intitulé est de nouveau affiché non barré.

3. Detail a TODO

Depuis les cartes de la liste, j'ai ajouté la possibilité d'afficher le détail d'une tâche via le clic sur un bouton "DETAILS".
On accède alors à une page séparé via l'url /tasks/:taskId (*exemple* : "https://laurent-srln.github.io/digital-factory-todo-list/tasks/2").
En prévision de l'ajout d'une fonctionnalité pour éditer les tâches, j'affiche les données au sein d'un formulaire. Pour l'instant il n'est pas possible d'enregistrer les modifications.
On peut revenir à l'affichage de la liste via le bouton "home" en haut à gauche de la page, via le bouton "RETOUR TODO" situé en bas de page ou via le bouton retour du navigateur.

4. Add a new TODO

Toujours depuis la liste de tâches, j'ai ajouté un formulaire permettant d'ajouter une nouvelle tâche.
À la soumission, un id est généré et la tâche est ajoutée avec un status "false" par défaut.
Au niveau de l'affichage, la tâche vient se placer en haut de la liste.

## Commentaire général

J'ai pris beaucoup de plaisir à réaliser ce test qui m'a permis de faire mes premiers pas avec Angular et Typescript !

Pour la partie test unitaires, il faut que je creuse le sujet pour pouvoir mettre en place une couverture complète.

Concernant le backend simulé, j'ai pour l'instant simplement utilisé un json couplé à un tasks.service pour fournir et interagir avec la data. Je n'ai donc pas réalisé d'appels Http ni géré d'Observables dans le projet.
J'ai identifié 2 pistes pour mettre cela en place ultérieurement :
- L'utilisation de la lib In-memory Web API
- L'utilisation des Interceptors

