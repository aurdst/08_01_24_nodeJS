# Documentation du Projet NodeJS Aviation

Bienvenue dans la documentation du projet NodeJS Aviation. Cette application expose des données liées à l'aviation française via des API RESTful.

## Configuration du Projet

Assurez-vous d'installer les dépendances nécessaires en exécutant la commande suivante :

```bash
npm install
```

Routes Disponibles
1. /api/data
Description
Cette route renvoie des données sur un avion de chasse français.

Utilisation

curl http://localhost:3000/api/data
2. /api/airbase
Description
Cette route renvoie des données sur une base aérienne française.

Utilisation

curl http://localhost:3000/api/airbase
3. /api/aircraftCarrier
Description
Cette route renvoie des données sur un porte-avions français.

Utilisation

curl http://localhost:3000/api/aircraftCarrier
4. /api/aggregator
Description
Cette route agrège les données des routes /api/data, /api/airbase, et /api/aircraftCarrier.

Utilisation

curl http://localhost:3000/api/aggregator
Exemples d'utilisation
Obtenir des données sur un avion de chasse :

curl http://localhost:3000/api/data
Obtenir des données sur une base aérienne :

curl http://localhost:3000/api/airbase
Obtenir des données sur un porte-avions :

curl http://localhost:3000/api/aircraftCarrier
Obtenir des données agrégées :

curl http://localhost:3000/api/aggregator

Merci d'utiliser notre API ! Si vous avez des questions ou des problèmes, n'hésitez pas à créer une issue sur GitHub.
