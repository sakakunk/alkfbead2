# Alkalmazások fejlesztése Ember.js beadandó

- [Leírás] (https://github.com/sakakunk/alkfbead2/#leírás)
- [Terv](https://github.com/sakakunk/alkfbead2/#terv)
- [Technológiák] (https://github.com/sakakunk/alkfbead2/#technológiák)
- [Modellek](https://github.com/sakakunk/alkfbead2/#modellek)
- [Folyamatábra](https://github.com/sakakunk/alkfbead2/#folyamatábra)
- [Végpontok](https://github.com/sakakunk/alkfbead2/#végpontok)
- [Funkciók](https://github.com/sakakunk/alkfbead2/#funkciók)
- [Fejlesztés és felhasználás](https://github.com/sakakunk/alkfbead2/#fejlesztés-és-felhasználás)

##Leírás
A project az ELTE Informatikai kar Alkalmazások fejlesztése tárgy beadandója során készült.
A project rövid leírása: egy labdarúgó mérkőzés eredményeit, illetve az egyes mérkőzésekhez tartozó játékos-események 
(például gól, sárgalap, stb) rögzítésére, módosítására, törlésére szolgáló weboldal. Egy focimeccsről eltároljuk a
2 csapat nevét és az eredményt. A meccsekhez tartozó játékos-eseményekről tároljuk a játékos nevét, az esemény tipusát, mely lehet
gól, öngól, sárgalap, piroslap, becserélés és lecserélés, tároljuk továbbá az esemény időpontját, illetve hogy melyik csapathoz 
tartozik. 

##Terv
![Terv](https://github.com/sakakunk/alkfbead2/blob/master/gyak9/img/alkfejl2-2.png)

A képen egy listázó oldal megjelenítási terve látható. A felső rész a navigációért felelős: itt érjük el a főoldalt, és a listákat.
Középen egy táblázatban listázzuk a kívánt elemeket, megfelelő funkciókkal ellátva. Lent az egyéb funkciógombok találhatók, például új
adat bevitele.

##Technológiák
A feladat megoldása során Ember.js javascriptet használtam. A megjelenítésért a bootswatch felelős, melynek a "United" nevű 
témáját használom, valamint handlebars fájlokkal teszem dinamikussá a html oldalakat. Az adatbázisért egy express-t használó külön 
alkalmazás felel, melyben fortune DB-t használok.
A függősségek listája:

 - ember.js
 - jquery
 - bower
 - bootswatch
 - bootstrap

##Modellek
![Adatbázis modell](https://github.com/sakakunk/alkfbead2/blob/master/gyak9/img/alkfejl2.png)

A footballmatch típus reprezentál egy focimeccset, melyről tároljuk a hazai csapat nevét (home), a vendég csapat nevét(away), valamint
a mérkőzés végeredményét(result).

A matchevent típus tárol egy adott mérkőzéshez tartozó eseményt. Az eseményről tároljuk a játékos nevét (playername), az esemény
típusát, pl Sárgalap, Gól, stb (eventtype), és azt, hogy hányadik percben történt az esemény(time).

A két típus között egy-sok kapcsolat van: egy mérkőzéshez tetszőleges számó esemény rendelhető.

##Folyamatábra
![folyamatábra](https://github.com/sakakunk/alkfbead2/blob/master/gyak9/img/alkfejl2-3.png)

A fenti brán látható, hogy a (gazdag) felhasználók hogyan érik el a honlap egyes funkcióit, végpontjait.

##Végpontok
A végpontok listája:
 - '/' : főoldal
 - '/footballmatches/list' : az összes focimeccs kilistázása
 - '/footballmatches/new' : új mérkőzés felvétele
 - '/footballmatches/:footballmatch_id' : egy kiválasztott mérkőzés megtekintése
 - '/footballmatches/edit/:footballmatch_id' : egy kiválasztott mérkőzés szerkesztése
 - '/footballmatches/:footballmatch_id/newevent' : egy kiválasztott mérkőzéshez egy új esemény felvitele
 - '/footballmatches/listevents' : mérkőzéshez tartozó események listázása
 - '/footballmatches/editevent/:event_id' : egy esemény szerkesztése

##Funkciók
 - Mérkőzések csapatainak, és a mérkőzések eredményeinek adatbázisban történő tárolása
 - Mérkőzésekhez kapcsolódó események adatbázisban való tárolása: egy mérkőzéshez sok esemény
 - Új mérkőzés bevitele űrlap segítségével, mely a bevitt adatok helyességét is ellenőrzi
 - Egy adott mérkőzésekhez tartozó új esemény bevitele űrlap segítségével, szintén ellenőrzött adatokkal
 - Mérkőzések listázása
 - Események listázása
 - Esemény részletes megtekintése
 - Mérkőzés módosítása, törlése
 - Esemény módosítása, törlése

##Fejlesztés és felhasználás
A beadandót a cloud9 webes IDE-ben készítettem el, Windowson, Google Chrome böngészőből. A project folytatható, szerkeszthető.


##Fejlesztési lehetőség
 - Csak regisztráció és belépés után elérhető funkciók
 - Listázza csak egy mérkőzéshez tartozó eseményeket
