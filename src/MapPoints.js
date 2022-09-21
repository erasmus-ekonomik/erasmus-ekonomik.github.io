// -----------------------------------------------------------------------
// MapPoints.js
// Contributors:
//  - Piotr Wyszomirski
//  - Piotr Czyżewski

// -----------------------------------------------------------------------
// points of interest

// -----------------------------------------------------------------------
// arch
var pointArch = new PointOfInterest("arch");
pointArch.title = "Łuk Augusta";
pointArch.description = "Łuk, wyznaczający krańcowy punkt starożytnej drogi via Flaminia, został wzniesiony w 27 p.n.e. z polecenia Oktawiana Augusta. Jednoprzęsłowa konstrukcja ozdobiona jest frontonem wspartym na półkolumnach zwieńczonych korynckimi kapitelami. Obok kapiteli umieszczono medaliony z wizerunkami Jowisza, Neptuna, Apolla i Romy. W starożytności budowla zwieńczona była przypuszczalnie posągiem Augusta. Na szczycie łuku zachowała się inskrypcja o treści: <b> <br> „Senat i lud rzymski Imperatorowi Cezarowi Augustowi, synowi boskiego Juliusza, siedmiokrotnemu imperatorowi, siedmiokrotnemu konsulowi i konsulowi wyznaczonemu po raz ósmy, za to, że wybrukował via Flaminia i inne często uczęszczane drogi Italii, z własnej inicjatywy i na koszt własny.”";
pointArch.coordinates = [44.056966505162244, 12.571134912559819];
pointArch.addImage("img/arch (1).jpg");
pointArch.addImage("img/arch (2).jpg");
pointArch.addImage("img/arch (3).jpg");
pointArch.addImage("img/arch (4).jpg");
pointArch.addImage("img/arch (5).jpg");
pointArch.bind();

// -----------------------------------------------------------------------
// beach
var pointBeach = new PointOfInterest("beach");
pointBeach.title = "Plaża Rimini";
pointBeach.description = "Rimini we Włoszech to w zasadzie jedna, wielka i bardzo długa plaża. Bardzo łagodne zejście do morza i piaszczyste dno są odpowiednie dla wszystkich - zarówno najstarszych, jak i najmłodszych. Spokojne i ciepłe wody Adriatyku dostarczają przyjemnej ochłody nawet w najbardziej gorący dzień. Tu pływanie sprawia naprawdę ogrom radości! Nie zapominajmy też o pięknych wschodach słońca.";
pointBeach.coordinates = [44.068138, 12.585501];
pointBeach.addImage("img/beach (1).jpg");
pointBeach.addImage("img/beach (2).jpg");
pointBeach.addImage("img/beach (3).jpg");
pointBeach.bind();

// -----------------------------------------------------------------------
// malatestiano temple
var pointTemple = new PointOfInterest("temple");
pointTemple.title = "Świątynia Malatesty";
pointTemple.description = "Świątynia Malatesty to XIII wieczny kościół przebudowany w XV w. na mauzoleum władcy Rimini, Sigismonda Pandolfa Malatesty. Pierwotnie była to gotycka świątynia należąca do klasztoru franciszkanów. W połowie XV w. Malatesta zatrudnił architekta i rzeźbiarza Leona Battistę Albertiego do przebudowy kościoła zgodnie z duchem renesansu oraz uczynienia go swoim mauzoleum.";
pointTemple.coordinates = [44.05973280649547, 12.57015880016824];
pointTemple.addImage("img/temple (1).jpg");
pointTemple.addImage("img/temple (2).jpg");
pointTemple.bind();

// -----------------------------------------------------------------------
// bridge
var pointBridge = new PointOfInterest("bridge");
pointBridge.title = "Most Tyberiusza";
pointBridge.description = "Starożytny rzymski most na rzece Marecchia we włoskim Rimini  w ciągu drogi via Aemilia. Budowę mostu rozpoczęto jeszcze za panowania cesarza Okrawiana Augusta w 14 roku n.e., a ukończono za panowania Tyberiusza około 21 r. n.e. Most należy do najstarszych tego typu obiektów i jednocześnie do najlepiej zachowanych antycznych mostów. Jako jeden z najpiękniejszych mostów z czasów rzymskich stał się wzorem dla szeregu mostów europejskich XVI i XVII w. (np. w Paryżu czy w Londynie).";
pointBridge.coordinates = [44.06359144159128, 12.563885112435287];
pointBridge.addImage("img/bridge (1).jpg");
pointBridge.addImage("img/bridge (2).jpg");
pointBridge.addImage("img/bridge (3).jpg");
pointBridge.addImage("img/bridge (4).jpg");
pointBridge.addImage("img/bridge (5).jpg");
pointBridge.addImage("img/bridge (6).jpg");
pointBridge.addImage("img/bridge (7).jpg");
pointBridge.addImage("img/bridge (8).jpg");
pointBridge.addImage("img/bridge (9).jpg");
pointBridge.addImage("img/bridge (10).jpg");
pointBridge.addImage("img/bridge (11).jpg");
pointBridge.bind();

// -----------------------------------------------------------------------
// fountain
var pointFoutain = new PointOfInterest("foutain");
pointFoutain.title = "Fontanna Della Pigna";
pointFoutain.description = 'Fontanna, znajdująca się na Piazza Cavour obok posągu Pawła V, została zbudowana w 1543 roku przez Giovanniego da Carrara z zachowaniem pierwotnego układu. Dużo starszy jest bowiem bęben podtrzymujący Pignę, pochodzący z czasów rzymskich i bogaty w płaskorzeźby. Piękno i kształt elementów wodnych oczarowały również Leonarda da Vinci, którego świadectwo wyryte jest na pomniku: „Zgódź się z różnymi wodospadami, jak widziałeś u źródła Rimini”.';
pointFoutain.coordinates = [44.0606561103105, 12.565921872306864];
pointFoutain.addImage("img/fountain.jpg");
pointFoutain.bind()

// -----------------------------------------------------------------------
// caesar
var pointCaesar = new PointOfInterest("caesar");
pointCaesar.title = "Pomnik Cezara";
pointCaesar.description = "Pomnik został ustawiony  na pamiątkę przekroczenia Rubikonu i wkroczenia Cezara do Italii. Został on przedstawiony jako imperator, ubrany w lorykę i paludamentum";
pointCaesar.coordinates = [44.05980020571286, 12.568036132464934];
pointCaesar.addImage("img/caesar.jpg");
pointCaesar.bind()

// -----------------------------------------------------------------------
// borgo
var pointBorgo = new PointOfInterest("borgo");
pointBorgo.title = "Borgo San Giuliano ";
pointBorgo.description = "Niewysokie kolorowe budynki zdobią artystyczne murale. Historia osady sięga XI wieku, była popularną dzielnicą składającą się z alejek i niskich domów, zamieszkanych przez marynarzy i rybaków. Federico Fellini, znany włoski reżyser, pochodził z Rimini i uwielbiał tę część miasta, dlatego dekoracje i malowidła ścienne przedstawiają najpiękniejsze  sceny z filmów i jego  życia. W obrębie murów wioski warto także coś zjeść, są tu niewielkie nastrojowe restauracje oferujące typowe smakowite potrawy";
pointBorgo.coordinates = [44.0649636,12.5657618];
pointBorgo.addImage("img/borgo (1).jpg");
pointBorgo.addImage("img/borgo (2).jpg");
pointBorgo.addImage("img/borgo (3).jpg");
pointBorgo.bind()

// -----------------------------------------------------------------------
// pope
var pointPope = new PointOfInterest("pope");
pointPope.title = "Pomnik Papieża";
pointPope.description = "Pomnik przedstawia Włoskiego duchownego, 233. papieża w okresie od 16 maja 1605r do 28 stycznia 1621r.";
pointPope.coordinates = [44.0605759188354, 12.565634552717823];
pointPope.addImage("img/pope.jpg");
pointPope.bind()

// -----------------------------------------------------------------------
// theatre
var pointTheatre = new PointOfInterest("theatre");
pointTheatre.title = "Teatr Amintore Galli";
pointTheatre.description = "Teatr Amintore Galli został otwarty w 1857 roku, jest głównym teatrem w mieście. Pierwotnie nazwany Teatrem Miejskim Vittorio Emanuele II, został przemianwoany na kompozytora Amintore Galli. Budowę rozpoczęto w 1843 roku, według neoklascytycznego projektu Luigiego Polettiego. W 1943 rok, kiedy alianckie bombardowanie podczas II wojny światowej nie pozostawiły nic poza fasadą i częścią foyer, budynek został odrestaurowany i ponownie otwarty w 2019roku.";
pointTheatre.coordinates = [44.06033200601222, 12.565118940708874];
pointTheatre.addImage("img/amphitheatre (2).jpg");
pointTheatre.bind()

// -----------------------------------------------------------------------
// castle
var pointCastle = new PointOfInterest("castle");
pointCastle.title = "Zamek Zygmunta";
pointCastle.description = "Zamek zbudowany w pierwszej połowie XV w. na polecenie władcy Rimini, Sigismondo Pandolfo Malatesty, używany obecnie przez miasto do celów wystawienniczych u kulturalnych. Jest to renesansowa warownia miejska z budynkami mieszkalnymi stojącymi na wysokich podmurówkach oraz wzmocnioną bramą prowadzącą na dziedziniec. W przeszłości zamek otoczony był fosą, którą zasypano w XIX w.";
pointCastle.coordinates = [44.05978454306618, 12.563581849177568];
pointCastle.addImage("img/castle (1).jpg");
pointCastle.addImage("img/castle (2).jpg");
pointCastle.addImage("img/castle (3).jpg");
pointCastle.bind()

// -----------------------------------------------------------------------
// doctor's house
var pointDoctor = new PointOfInterest("doctor");
pointDoctor.title = "Dom Lekarza";
pointDoctor.description = "Domus chirurga (z II w.n.e) to klinika medyczna, perfekcyjnie zachowana.  Z powodu pożaru w trakcie najazdu barbarzyńców ściany kliniki zawaliły się. Każdy szczegół został odrestaurowany i zachowany, zwłaszcza najbardziej kompleksowy na świecie zbiór narzędzi  do zabiegów chirurgicznych, od amputacji do plomby zębowe. Obok znajduje się najlepsza lodziarnia w mieście czyli „La Romania”";
pointDoctor.coordinates = [44.06216087140467, 12.5676153460221];
pointDoctor.addImage("img/doctor (1).jpg");
pointDoctor.addImage("img/doctor (2).jpg");
pointDoctor.addImage("img/doctor (3).jpg");
pointDoctor.addImage("img/doctor (4).jpg");
pointDoctor.bind()

// -----------------------------------------------------------------------
// clock tower
var pointClock = new PointOfInterest("clock");
pointClock.title = "Wieża zegarowa";
pointClock.description = "Wieża z zegarem została zbudowana w 1547r., zegar dobudowany w 1562r, restaurowany i kilkakrotnie przebudowywany. Tarcza zegara zawiera fazy zodiaku i księżyca. Na fasadzie wieży znajduje się duża tablica <b> Chwała poległym za wolność";
pointClock.coordinates = [44.0596053476635, 12.568534702455064];
pointClock.addImage("img/clock (1).jpg");
pointClock.addImage("img/clock (2).jpg");
pointClock.bind()

// -----------------------------------------------------------------------
// saint antonio's temple
var pointSantAntonio = new PointOfInterest("SantAntonio");
pointSantAntonio.title = "Świątynia Sant Antonio";
pointSantAntonio.description = "Tempietto di Sant'Antonio to mała, ośmioboczna świątynia lub kaplica poświęcona św. Antoniemu z Padwy. Początkowo zbudowano tu w 1518 r. Na zlecenie Pietro Ricciardelli. Kaplica została odbudowana w stylu barokowym po trzęsieniu ziemi w 1672 roku. Legenda głosi, że konstrukcja została zbudowana w celu uczczenia cudu eucharystycznego w tym miejscu. ";
pointSantAntonio.coordinates = [44.05908422031786, 12.56893763160018];
pointSantAntonio.addImage("img/santantonio.jpg");
pointSantAntonio.bind()


