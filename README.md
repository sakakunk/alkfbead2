# Alkalmazások fejlesztése Ember.js beadandó

- [Leírás] (https://github.com/sakakunk/alkfbead2/#leírás)
- [Technológiák] (https://github.com/sakakunk/alkfbead2/#technológiák)

##Leírás
A project az ELTE Informatikai kar Alkalmazások fejlesztése tárgy beadandója során készült.
A project rövid leírása: egy labdarúgó mérkőzés eredményeit, illetve az egyes mérkőzésekhez tartozó játékos-események 
(például gól, sárgalap, stb) rögzítésére, módosítására, törlésére szolgáló weboldal. Egy focimeccsről eltároljuk a
2 csapat nevét és az eredményt. A meccsekhez tartozó játékos-eseményekről tároljuk a játékos nevét, az esemény tipusát, mely lehet gól, 
öngól, sárgalap, piroslap, becserélés és lecserélés, tároljuk továbbá az esemény időpontját, illetve hogy melyik csapathoz 
tartozik. 

##Technológiák
A feladat megoldása során Ember.js javascriptet használtam. A megjelenítésért a bootswatch felelős, melynek a "United" nevű 
témáját használom, valamint handlebars fájlokkal teszem dinamikussá a html oldalakat. Az adatbázisért egy express-t használó külön alkalmazás felel, melyben fortune DB-t használok.
A függősségek listája:
*ember.js
*jquery
*bower
*bootswatch
*bootstrap
