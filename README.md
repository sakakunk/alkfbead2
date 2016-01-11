# Alkalmazások fejlesztése Ember.js beadandó

- [Leírás] (https://github.com/sakakunk/alkfbead2/#leírás)
- [Technológiák] (https://github.com/sakakunk/alkfbead2/#technológiák)
- [Modellek](https://github.com/sakakunk/alkfbead2/#modellek)
- [Végpontok](https://github.com/sakakunk/alkfbead2/#végpontok)

##Leírás
A project az ELTE Informatikai kar Alkalmazások fejlesztése tárgy beadandója során készült.
A project rövid leírása: egy labdarúgó mérkőzés eredményeit, illetve az egyes mérkőzésekhez tartozó játékos-események 
(például gól, sárgalap, stb) rögzítésére, módosítására, törlésére szolgáló weboldal. Egy focimeccsről eltároljuk a
2 csapat nevét és az eredményt. A meccsekhez tartozó játékos-eseményekről tároljuk a játékos nevét, az esemény tipusát, mely lehet gól, 
öngól, sárgalap, piroslap, becserélés és lecserélés, tároljuk továbbá az esemény időpontját, illetve hogy melyik csapathoz 
tartozik. 

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

