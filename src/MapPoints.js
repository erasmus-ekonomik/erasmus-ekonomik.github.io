// -----------------------------------------------------------------------
// MapPoints.js
// Contributors:
//  - Piotr Wyszomirski
//  - Piotr Czyżewski

// -----------------------------------------------------------------------
// points of interest

// -----------------------------------------------------------------------
// arch
//var pointArch = new PointOfInterest("arch");
//pointArch.title = "Łuk Augusta";
//pointArch.description = "Łuk, wyznaczający krańcowy punkt starożytnej drogi via Flaminia, został wzniesiony w 27 p.n.e. z polecenia Oktawiana Augusta. Jednoprzęsłowa konstrukcja ozdobiona jest frontonem wspartym na półkolumnach zwieńczonych korynckimi kapitelami. Obok kapiteli umieszczono medaliony z wizerunkami Jowisza, Neptuna, Apolla i Romy. W starożytności budowla zwieńczona była przypuszczalnie posągiem Augusta. Na szczycie łuku zachowała się inskrypcja o treści: <b> <br> „Senat i lud rzymski Imperatorowi Cezarowi Augustowi, synowi boskiego Juliusza, siedmiokrotnemu imperatorowi, siedmiokrotnemu konsulowi i konsulowi wyznaczonemu po raz ósmy, za to, że wybrukował via Flaminia i inne często uczęszczane drogi Italii, z własnej inicjatywy i na koszt własny.”";
//pointArch.coordinates = [44.056966505162244, 12.571134912559819];
//pointArch.addImage("img/arch (1).jpg");
//pointArch.addImage("img/arch (2).jpg");
//pointArch.addImage("img/arch (3).jpg");
//pointArch.addImage("img/arch (4).jpg");
//pointArch.addImage("img/arch (5).jpg");
//pointArch.bind();

var pointPalace = new PointOfInterest("palace");
pointPalace.title = "Palace Duques de Bragança";
pointPalace.description = "Pałac";
pointPalace.coordinates = [41.446584637897686, -8.291293842727809];
pointPalace.addImage("img/arch (5).jpg");
pointPalace.bind();

var pointCastle = new PointOfInterest("castle");
pointCastle.title = "Castelo de Guimaraesa";
pointCastle.description = "Zamek Guimarães to fortyfikacja wojskowa zbudowana w X wieku na fundamentach starożytnej rzymskiej budowli. Jest bezpośrednio związany z niepodległością Portugalii i uważany za miejsce narodzin narodowości tego kraju. Według tradycji urodził się tu pierwszy król Portugalii D. Afonso Henriques (1109 - 1185).";
pointCastle.coordinates = [41.44792511998326, -8.29030888408886];
pointCastle.addImage("img/arch (5).jpg");
pointCastle.bind();

var pointTemple = new PointOfInterest("temple");
pointTemple.title = "Igreja Nossa Senhora do Carmo";
pointTemple.description = "Został zbudowany w drugiej połowie XVIII wieku w stylu barokowo-rokokowym. Przyłączony do kościoła Karmelitów, od strony zachodniej, przekazany Zakonowi w 1752 roku. Budowa dwóch kościołów razem była wówczas zabroniona, dlatego wybudowano między nimi dom tzw. Casa Escondida do Porto, który oddziela dwa kościoły i ma nieco ponad 1,5 metra szerokości.";
pointTemple.coordinates = [41.4459378663381, -8.292455009259674];
pointTemple.addImage("img/arch (5).jpg");
pointTemple.bind();

var pointCathedral = new PointOfInterest("cathedral");
pointCathedral.title = "Braga Cathedral";
pointCathedral.description = "Katedra Braga jest najstarszą katedrą w Portugalii. Znajduje się w historycznym centrum Bragi, jest siedzibą archidiecezji Braga. Arcybiskup Bragi jest prymasem całej Portugalii.Świątynia ta ma piękny zestaw stylów architektonicznych, wśród których można podziwiać romański w strukturze; manuelińskie w jej pokryciu, czy barokowy w ich wspaniałych zdobieniach.";
pointCathedral.coordinates = [41.55030835647579, -8.426865574301342];
pointCathedral.addImage("img/arch (5).jpg");
pointCathedral.bind();

// var pointStairs = new PointOfInterest("schody");
// pointStairs.title = "Bom Jesus Staircases";
// pointStairs.description = "Świątynia";
// pointStairs.coordinates = [41.554593556888804, -8.378757012940845];
// pointStairs.addImage("img/arch (5).jpg");
// pointStairs.bind();

var pointBragaChurch = new PointOfInterest("kosciolBraga");
pointBragaChurch.title = "Bom Jesus do monte";
pointBragaChurch.description = "Sanktuarium Bom Jesus w Bradze to nawiązanie do portugalskiej sztuki neoklasycznej i najbardziej znane sanktuarium w Portugalii po Sanktuarium Matki Bożej Różańcowej w Fatimie. Od dawna jest miejscem pielgrzymek.  Schody prowadzące na szczyt składają się z 17 poziomów ozdobionych symbolicznymi fontannami, alegorycznymi posągami i innymi barokowymi dekoracjami poświęconymi różnym tematom.  Ludzi wierzących  zachęca się do wejścia na kolanach do bazyliki znajdującej się na szczycie wzgórza, doświadczając tym samym bólu Chrystusa drodze na śmierć.";
pointBragaChurch.coordinates = [41.55469794500868, -8.376364491341201];
pointBragaChurch.addImage("img/arch (5).jpg");
pointBragaChurch.bind();

var pointCentre = new PointOfInterest("centrumGumaires");
pointCentre.title = "Centro de Gumairese";
pointCentre.description = "Historyczne miasto Guimarães jest związane z kształtowaniem się portugalskiej tożsamości narodowej w XII wieku. Niezwykle dobrze zachowany i autentyczny przykład transformacji średniowiecznego miasta w nowoczesne. Mający bogatą typologię budynków, która świadczy o specyficznej ewolucji Portugalii, nadal wykorzystującej materiały i tradycyjne techniki budowlane. Jest pierwszą stolicą Portugalii z XII wieku.";
pointCentre.coordinates = [41.44278536234879, -8.292722820333019];
pointCentre.addImage("img/arch (5).jpg");
pointCentre.bind();

var pointDworzec = new PointOfInterest("dworzecPKP");
pointDworzec.title = "Porto-São Bento";
pointDworzec.description = "Świątynia";
pointDworzec.coordinates = [41.14566631499273, -8.610533049447204];
pointDworzec.addImage("img/arch (5).jpg");
pointDworzec.bind();

var pointPortoChurch = new PointOfInterest("kosciolPorto");
pointPortoChurch.title = "Kościół św. Ildefonsa w Porto";
pointPortoChurch.description = "Świątynia";
pointPortoChurch.coordinates = [41.14617272417474, -8.606673885626677];
pointPortoChurch.addImage("img/arch (5).jpg");
pointPortoChurch.bind();


