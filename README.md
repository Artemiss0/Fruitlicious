# Inleverdocument voor "Fruitlicious"
Final School Assigment CMTTHE01-4

## Speelbare game
Het spel is hier terug te vinden:
https://stud.hosted.hr.nl/0947037/fruitlicious

## Checklist
- [x] De game heeft een startscherm
- [x] De game heeft een eindscherm
- [x] Er zijn geen bugs.

#### Toelichting OOP
Licht toe waar en waarom je deze OOP principes hebt toegepast

- [x] Classes
in het klassendiagram is terug te vinden waar ik alle klasses heb toegepast.

- [x] Encapsulation

Ik heb gebruik gemaakt van zowel private,public als protected in mijn project. Waar ik encapsulation heb toegepast is o.a. terug te vinden in het klassendiagram. 

In de class Startscreen maak ik gebruik van private en public.
- private: Zorgt ervoor dat de waarde van het object niet buiten de klas aangepast kan worden 
- public: De method: "removeButton" kan buiten de klas StartScreen worden aangesproken/veranderd omdat deze public is.
- protected: Alleen klassen die overerven van de klas waarin het object word gemaakt kunnen het object aanspreken of aanpassen.

```
/// <reference path="gameObject.ts" />
class StartScreen extends GameObject{
    private game:Game
    constructor(game:Game){
        super()
        this.game = game
    }
    public removeButton(){
        this.element.remove()
    }
}
```
- [x] Composition
```
Give the example
```
- [x] Inheritance
```
Give the example
```


## Klassendiagram
<img src="https://github.com/Artemiss0/Fruitlicious/blob/master/documents/UML-Diagram.png?raw=true" width="350"/>

## Peer review
Ik heb een peerpitch afgenomen bij Lotte: https://github.com/0942533/PRG04/issues/1

## Extra uitdaging
Als extra uitdaging heb ik ervoor gezorgd dat de game er verzorgd uitziet dankzij goed uitgewerkte UI design en artwork. Ik heb de frames eerst uitgewerkt in Adobe Illustrater en ze vervolgens in de game geplaatst. 
### Start Screen:
<img src="https://github.com/Artemiss0/Fruitlicious/blob/master/documents/scherm1.PNG?raw=true" width="350"/>

### Play Screen:
<img src="https://github.com/Artemiss0/Fruitlicious/blob/master/documents/scherm2.PNG?raw=true" width="350"/>

### Game Over Screen
<img src="https://github.com/Artemiss0/Fruitlicious/blob/master/documents/scherm3.PNG?raw=true" width="350"/>
