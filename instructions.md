# Twitter

## Liste des tweets

- service `services/TweetService` 
  - créer le service (`ng g s ...`)
  - injecter le `HttpClient` dans le constructeur
  - ajouter une méthode `findAll(): Observable<Tweet[]>` faisant une requête GET sur `/tweets`
- composant `components/TweetListComponent` :
  - ts :
    - créer un attribut `tweets` de type `Tweet[] | undefined`
    - injecter `TweetService` dans le constructeur
    - ajouter la méthode `ngOnInit` qui appelle la méthode `findAll` du service et mettre le résultat (subscribe) dans l'attribut `tweets`
  - html: faite un truc moche

## Page de détail

## Suppression des tweets

## Ajout

## modification