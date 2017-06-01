# resCom-light  

    Regrouper des ressources dans un commentaire de script.  
    Pour les séparer du code javascrip

### Projet  
Utiliser les ligne de commentaire pour y placer des ressources texte formatées ou non.  
Elles  seront repérées par les déclencheurs //!- , /\*!- ou \*/!-  

Actuellement en version `Alpha`  
La dernière version fonctionnelle est ici : [lib/resCom-light.js](lib/resCom-light.js)  
Sous licence BSD 2 modifiée avec 3 ajouts:
```
* 1) Pour toute modification de ce projet, vous devez respecter la compatibilité
  ascendante avec ses dernières spécifications officielles à la date de sa
  première utilisation dans votre projet ou demander une autorisation écrite
  préalable spécifique.

* Dans vos sources : 
  - 2) Vous devez conserver le nom de la fonction principale "resCom-light".
    Mais vous pouvez créer un alias.
  - 3) Vous devez conserver la ligne de commentaire précédant la déclaration de la
    fonction principale "resCom-light".
```
C'est une partie `libre` de  [**comCode**](), plus complet.  

## light?
Un code source en version light est très court.  
Il a pour vocation à être copié et utilisé tel-quel dans un autre code source.  
Il représente souvent une version simplifiée d'un autre projet.  

### nom resCom?
Tout simplement le début de ressources et commentaires
L'abréviation du nom complet est **rscl**  

### notes  
Pour exemple vous trouverez une utilisation de resCom-light dans le projet [DOMid2js](<https://github.com/Prismalide/DOMid2js>)  

### use  
Bientôt: Pour plus d'infos et démos récupérer le projet (zip) et exécuter `resCom-light-use.html` dans le répertoire `use`   
```javascript
function resources (){/*
//!-html:test
<div> mélanger ' """"' " ' ne pause" aucun problème,
pas besoin de caractère d'échapement ex:\n \r \t \\ visible! </div>  
//!-txt:test2
    texte ici tabulation comprise
    tabulation demo \t
        avec tabulation et retour à la ligne géré
//!-txt:test3

remarque: premier et dernier \n (si ils existent)
sont supprimés d'ou l'obligation de doubler les retour à la ligne 
si l'on souhaite en avoir un
 
//!-end:
*/}
var myResources = {}
resComlight ( { html:true, txt:true }, resources, myResources )
console.log ( '\\_/', myResources.test,' | ', myResources.test2,' | ', myResources.test3,'/*\\' ) 
// ou 
resComlight ( { html:true, txt:true }, resources )
console.log ( '\\_/', resources.test,' | ', resources.test2,' | ', resources.test3,'/*\\' ) 
```
