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

- service `services/TweetService` 
  - ajouter une méthode `findById(id: number): Observable<Tweet>` faisant une requête GET sur `/tweets/:id`
- composant `components/TweetDetailsComponent` :
  - créer le composant
  - ts :
    - créer un attribut `tweet$` de type `Observable<Tweet>`
    - injecter dans le constructeur `TweetService` et `ActivatedRoute`
    - toujours dans le constructeur mettre dans l'attributs `tweet$` le résultat de l'appel à `activatedRoute.params.pipe(map(...), mergeMap(...))`
  - html: faite un truc moche
- dans `app-routing.module.ts`, associer la route `/tweets/:id` au composant `TweetDetailsComponent`
- dans le html de `components/TweetListComponent`, ajouter un lien pour chaque tweet


## Suppression des tweets

## Ajout

## modification