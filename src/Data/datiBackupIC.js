const datiBackupIC = [
  {
    id: 1,
    name: "Acciughina time: schiera un attaccante a scelta sulla fascia",
  },
  {
    id: 2,
    name: "Camelito feels: usa il modulo a piramide in ricordo di Ochoa",
  },
  {
    id: 3,
    name: "Lanterna verde > Deadpool: Ryan Reynolds ti obbliga a schierare il peggiore della rosa e lasciare in panchina il migliore",
  },
  {
    id: 4,
    name: 'Neapolitan Medicine: Ti hanno iniettato il dialetto napoletano tramite una siringa. Devi comprare un giocatore di origini campane. Se riesci a segnare con suddetto giocatore devi urlare "Forza Napoli".',
  },
  {
    id: 5,
    name: "L'opportunità che stavi aspettando! Fai scendere in campo l'attaccante più debole e se segna sarà titolare per tutto l'episodio!",
  },
  {
    id: 6,
    name: "I fan di deadpool invadono il centro sportivo per avere un autografo dal presidente, impedendo lo svolgimento dell'allenamento settimanale",
  },
  {
    id: 7,
    name: "Momento Thakkar! Ingaggia un attaccante indiano dagli svincolati e fallo giocare per il resto dell'episodio titolare.",
  },
  {
    id: 8,
    name: "SGABELLO: il miglior difensore litiga con Allegri per un cavallo, una partita in tribuna sullo sgabello",
  },
  {
    id: 9,
    name: "ALLEGRI-MANIA: Per tutto l'episodio, schiera una formazione con un modulo diverso ad ogni partita.",
  },
  {
    id: 10,
    name: 'Imprevisto "Independence Day": i 3 giocatori di nazionalità Gallese più forti della squadra scioperano contro le politiche del governo di Londra, mettili fuori rosa per 2 partite.',
  },
  {
    id: 11,
    name: "Il nipote di Gareth Bale: l'ex campione raccomanda il suo nipotino per un posto in squadra. Acquista un giocatore gallese sotto i 19 anni e fagli fare almeno 10 presenze.",
  },
  {
    id: 12,
    name: "CASSANATA: Un giocatore viene trovato di notte nell'infermeria del centro sportivo con una o più donnine allegre come Cassano a Trigoria. Fuori per 3 partite.",
  },
  {
    id: 13,
    name: "L' acciuga confusa: Massimiliano non ricorda bene destra e sinistra; le ali (in alternativa i terzini) sono schierate all'opposto di come preventivato",
  },
  {
    id: 14,
    name: 'Principe di Galles": il giocatore uscito viene considerato un beniamino dai tifosi che,grazie alle pressioni sulla società, ti obbligano a schierarlo dal primo minuto. In alternativa, sempre con il nome "Principe di Galles" potresti mettere il seguente imprevisto: "i tifosi esigono un\'importante rappresentanza di gallesi in squadra che li rappresenti, compra subito un giocatore gallese',
  },
  {
    id: 15,
    name: "L'erede di De Sciglio. Schiera titolare un TS italiano per tutto l'episodio, prendendolo dal vivaio o dagli svincolati se non in rosa (allargare la ricerca ad altri ruoli se non ci sono terzini svincolati)",
  },
  {
    id: 16,
    name: "Siamo in un classico weekend inglese in uno dei peggior pub operai di Wrexham e alcuni giocatori hanno deciso di fare mattina presto tra fiumi di birra e scazzottate.  Due giocatori saltano il turno!",
  },
  {
    id: 17,
    name: "Allegriball! Metti il tuo capocannoniere come difensore centrale nel prossimo match",
  },
  {
    id: 18,
    name: "ALLEGRATA: usa un giocatore in una posizione più arretrata rispetto alla sua posizione generale (attaccanti->cc->difensori) in caso di difensore ->mediano",
  },
  {
    id: 19,
    name: "Momento Deadpool:  Ryan Reynolds usa 4 dei tuoi giocatori titolari come controfigure per le sue uccisioni nel film. I 4 giocatori saltano la prossima partita!",
  },
  {
    id: 20,
    name: "Il Galles esce dal Regno Unito, per celebrare la conquista acquista un giocatore del Gallese e schieralo titolare per una partita",
  },
  {
    id: 21,
    name: 'IMPREVISTO "MANDZUKIC": l\'attacante con il valore di resistenza più alto viene schierato come ADA o ASA',
  },
  {
    id: 22,
    name: "il peggiore giocatore della formazione, va in vacanza per una settimana, perchè si è fissato con il film sette anni in Tibet, quindi bisogna portare un giocatore del Nepal o del Bhutan",
  },
  {
    id: 23,
    name: "Cambiare ruolo a un giocatore e meterlo terzino idea alla allegri",
  },
  {
    id: 24,
    name: "Cambia tra il primo e il secondo tempo 3 giocatori per un'intossicazione alimentare dovuta alla cena del giorno prima. (Tranne il portiere, con estrazione numerica 1-10)",
  },
  {
    id: 25,
    name: "Allegrata! Il miglior attaccante attualmente titolare gioca come terzino",
  },
  {
    id: 26,
    name: "Uuuuuh magicuuuuu!!!!! eh sì 4 anni sono passati dal nostro eroe indù; compra il peggior svincolato indiano e tienilo per una stagione titolare in coppa.",
  },
  {
    id: 27,
    name: "Un tuo giocatore scappa perché crede di essere inseguito da cani Corgi assassini. Passa 1 turno in infermeria, chiama la suora e dille di portarlo via",
  },
  {
    id: 28,
    name: "Provedl: schiera negli ultimi 10 minuti il portiere come centravanti",
  },
  {
    id: 29,
    name: "Risveglia il terzo portiere addormentato in panchina e premialo con la titolarità.",
  },
  {
    id: 30,
    name: "Il Galles condivide l'animale simbolo con un grande Stato, la Cina. Compra un giocatore cinese e schieralo alla prossima partita",
  },
  {
    id: 31,
    name: "Uscita in gruppo con amici, tornato ubriaco all'allenamento senza aver dormito fuori 2 partite come punizione",
  },
  {
    id: 32,
    name: "Hollywood!!! Ryan decide di portare acciughina e i 3 migliori in rosa ad un after party di una premiere, allegri si da al gioco d’azzardo mentre gli altri tre all’alcol. Tornati in Inghilterra si sentono tutti male, per tutto l’episodio i 3 migliori sono in post sbornia e quindi non convocabili, così come acciughina che si farà sostituire da Landucci. Per tutto l’episodio cambierà anche lo stile di gioco che senza allegri sarà Tiki Taka",
  },
  {
    id: 33,
    name: "COZZE PAZZE: Mimmo o'scafista, allenatore dei portieri di acciughina, fa arrivare dalla Sicilia cozze e frutti di mare ed invita a casa sua i tutti i portieri per cena. Dopo l'abbuffata tutti i portieri iniziano a soffrire di attacchi fulminanti di dissenteria. Per tutto l'episodio i portieri dovranno restare in tribuna, compresi eventuali portierini della primavera. Anche il DS era invitato alla cena e causa infezione intestinale non può assoldare nessun svincolato.",
  },
  {
    id: 34,
    name: "Nessun portiere: gioca una partita con un giocatore di movimento tra i pali",
  },
  {
    id: 35,
    name: "Allegri docet: schiera le tue punte come terzini",
  },
  {
    id: 36,
    name: 'Imprevisto "aziendalista": è uscito un nuovo film (il giorno del match) in cui è presente Ryan Reynolds,Allegri da sempre definito aziendalista salta la partita per vedere la prima del proprio capo. Partita da simulare da calendario.',
  },
  {
    id: 37,
    name: "ORDINE 66! Lord Acciughina vuole sovvertire l'ordine societario del suo nuovo club, bramando l'Autocrazia assoluta. Per realizzare il suo scopo ha infatti segretamente impiantato un bio-chip inibitore nei giocatori peggiori della rosa dopo la prima sessione di tattica, approfittando della confusione mentale causata dal loro estremo sforzo psichico. Attiva il chip con il Protocollo 66, lascia che i reietti eliminino i senatori della tua squadra, i tuoi migliori 11 generali lasceranno spazio ai pionieri corrotti del nuovo ordine costituito durante l'arco di tutti i prossimi 90 minuti di battaglia. HAIL EMPEROR ACCIUGHINA!",
  },
  {
    id: 38,
    name: "Tattica Allegriana: schiera un difensore in attacco e viceversa",
  },
  {
    id: 39,
    name: 'ATTACCO DI EMORROIDI: il giocatore è stato assalito improvvisamente da un attacco di emorroidi "a grappolo" e aimé non riuscirà a partecipare alla partita.',
  },
  {
    id: 40,
    name: "Mirdha Mania: nella prossima finestra di mercato ingaggia un calciatore indiano con un nome improbabile",
  },
  {
    id: 41,
    name: "Estremamente Allegri. Durante la prossima partita si è obbligati a giocare in assetto ultra difensivo per tutta la durata della partita.",
  },
  {
    id: 42,
    name: "Metti due terzini al posto delle ali per un assetto ancora più difensivo.",
  },
  {
    id: 43,
    name: 'Il più giovane titolare ha speso 60 euro per comprare "The Lord of the Rings: Gollum" ed ora è perculato dai compagni di squadra. Fugge a casa dalla madre piangendo e ci resta per le prossime due partite.',
  },
  {
    id: 44,
    name: "Esasperato dalle critiche di Adani, Allegri schiera un 3-4-2-1 con impostazione tattica ultra offensiva per la prossima partita.",
  },
  {
    id: 45,
    name: "WrexHAM: un giocatore tra i primi diciotto ha sfruttato la prima paga per del prosciutto importato, purtroppo scaduto. Fuori una partita per intossicazione",
  },
  {
    id: 46,
    name: "Dopo aver scoperto, grazie alle ipnotiche recensioni di un noto streamer, che la Moldavia sia patria di straordinari talenti, Allegri decide i scoprire il suo personale Calarasi. Ingaggia un giovane moldavo e mettilo titolare per tutto l'episodio.",
  },
  {
    id: 47,
    name: "Guarda mamma come Pogba: il migliore in campo della partita precedente salta tutto il resto dell' episodio  per positività al doping",
  },
  {
    id: 48,
    name: "Schiera il minor numero di giocatori del UK tranne del Galles",
  },
  {
    id: 49,
    name: "Durante il terzo tempo post partita al The Turf due titolari sono coinvolti in una rissa contro alcuni tifosi del Chester di passaggio. La società, per quanto orgogliosa che i tifosi rivali siano all’ospedale, e’ costretta a sospendere i 2 per un turno",
  },
  {
    id: 50,
    name: "SQUADRA APPESANTITA - La mamma di Forde - che vive a Roma - porta al figlio una quantità spropositata di bucatini all’amatriciana e il ragazzo fa abbuffare tutta la squadra prima della partita: gioca il prossimo incontro con le slide di accelerazione e velocità scatto abbassate a 39",
  },
  {
    id: 51,
    name: "Schiera la difesa a 3 con un terzino come braccetto in stile Alex Sandro",
  },
  {
    id: 52,
    name: "Americanizzato: acquista dagli svincolati qualsiasi americano",
  },
  {
    id: 53,
    name: "Il nuovo Neymar? Cerca nella lista svincolati con filtro brasile ragazzi da 18-20 anni. Comprane uno e schieralo titolare tutti i 90 Min (ma nelle partite a tuo piacimento )finché non fa almeno +5 di overall",
  },
  {
    id: 54,
    name: "Imprevisto magia inglese: acquista dagli svincolati un portiere indiano e un attaccante inglese e falli debuttare subito per 90min",
  },
  {
    id: 55,
    name: "Imprevisto the scaduto: i giocatori della tua rosa di nazionalità inglese saltano 2 partite nell'episodio in corso",
  },
  {
    id: 56,
    name: "2006: hai comprato il portiere avversario per la prossima partita. Abbassa di 30 pt le caratteristiche del portiere della CPU.",
  },
  {
    id: 57,
    name: "2006 bis: il tuo portiere è stato comprato dalla squadra avversaria. Abbassa di -20pt le sue caratteristiche.",
  },
  {
    id: 58,
    name: "Run Forrest, run: aumenta per una partita a tua scelta di 10pt i parametri della velocità dei tuoi giocatori",
  },
  {
    id: 59,
    name: "MESSI PARTE LO STESSO: le prossime 3 punizioni le tiri, non passi al giocatore, la provi da qualsiasi parte del campo",
  },
  {
    id: 60,
    name: "Landucci: cambia schema e assetto tattico per una partita perché essendo mr Allegri stato squalificato Landucci ha preso potere",
  },
  {
    id: 61,
    name: "“basta te caccio!!!”, rescindi il contratto del peggiore in rosa",
  },
  {
    id: 62,
    name: "Terzinite: Porta un giocatore del tuo attacco a fare il terzino. Se non usi terzini farà il DC.",
  },
  {
    id: 63,
    name: "Se, fino alla fine dell'episodio e non importa come, riesci a far segnare un DC avrai a disposizione la scelta di rifiutarti di fare l'imprevisto successivo al mio.",
  },
  {
    id: 64,
    name: "Imprevisto Allegriano: scegli un centrocampista a tua scelta da schierare terzino per la prossima partita!",
  },
  {
    id: 65,
    name: "HORTO MUSO: se fai 1 goal in più degli avversari assumi tattiche e posizionamento squadra estremamente difensivista per tutta la partita. Anche se ti recuperano.",
  },
  {
    id: 66,
    name: "Momento Higuain: se nelle tue possibilità economiche, compra l'attaccante della squadra prima in campionato/con cui ti stai giocando il campionato.",
  },
  {
    id: 67,
    name: "Imprevisto Pogba: un giocatore tra titolari e panchinari viene risultato positivo ad un test anti-doping. Per sicurezza salterà la prossima settimana (quindi 7 giorni) per ulteriori controlli. Alla fine per fortuna la positività si rivelerà un errore.",
  },
  {
    id: 68,
    name: "Staff medico Allegriano: i giocatori numero 2,4,8,10 out per una partita.",
  },
  {
    id: 69,
    name: "HORTOMUSO: vinci la prossima partita 1-0. Se ti pareggiano, chiunque faccia i goal successivi al primo sarà messo sul mercato e venduto.",
  },
  {
    id: 70,
    name: "Imprevisto: Ué sei forte eh!    Ea FC24 deve aver confuso gli scan face! Parla come il mitico ragazzo della via Gluck per tutto il match",
  },
  {
    id: 71,
    name: "I tuoi giocatori hanno deciso di andare a giocare a boowling. Uno di loro prende male la rincorsa durante il tiro e cade sbattendo la testa saltando la prossima partita. Pesca anche un altro giocatore che invece resterà fuori tutto l’episodio, reo di aver organizzato la serata.",
  },
  {
    id: 72,
    name: "Torneo di golf: Bale chiama, i gallesi rispondono: il torneo di golf non si può saltare, nemmeno se c'è una partita. Tutti i gallesi indisponibili per un match.",
  },
  {
    id: 73,
    name: "LI CONSACRO: il tuo miglior attaccante, come Griffith, sacrifica tutti gli altri del si reparto che verranno messi in vendita. Non per forza devono essere venduti, ma a fronte di un prezzo congruo non potrai rifiutare",
  },
  {
    id: 74,
    name: "Come Osimhen: Fletcher, l'attaccante di punta, si è offeso per un tiktok del social media manager del Wrexham e cancella tutte le foto con la squadra su Instagram. Ci vorrà tutto un episodio per convincerlo a non sporgere denuncia e a reintegrarlo in squadra.",
  },
  {
    id: 75,
    name: "Scegli altri 2 imprevisti e decidi quale tra i 2 fare e quale eliminare dagli imprevisti",
  },
  {
    id: 76,
    name: "Fai giocare un tempo per tutto il mese il giocatore più scarso in rosa, facendogli indossare la fascia di capitano",
  },
  {
    id: 77,
    name: "Mandare al prato: turno di riposo per il tuo DC migliore",
  },
  {
    id: 78,
    name: "La moglie di uno dei titolari tradisce il marito con un suo compagno di squadra, titolare anche lui. Un giornale scandalistico scopre tutto e li sbatte in prima pagina. Rissa furibonda nello spogliatoio, fuori entrambi per tutto l' episodio.",
  },
  {
    id: 79,
    name: "Per fare gruppo la squadra decide di andare a cena fuori. Tutti ordinano Conwy Mussels. Le cozze, però, non sono buone e generano un' intossicazione a ben tre calciatori. Questi resteranno fuori per tutto l' episodio.",
  },
  {
    id: 80,
    name: "È il compleanno del peggior portiere in rosa. Acciughina, allora, decide di fargli un regalo: lo schiera titolare per l' intero episodio. Tanti Auguri, Campione! 😂",
  },
  {
    id: 81,
    name: "Notte brava in quel di Wrexham. Approfittando del giorno di riposo, due titolari trascorrono la sera a bere gin in un pub. Ubriachi, rapiscono una mucca capellona e vagano con questa per tutta la città. Vengono però filmati ed il video diventa virale in poco tempo. Multa ed esclusione per tutto l' episodio.",
  },
  {
    id: 82,
    name: "La squadra è piena di risorse, addirittura la punta può tranquillamente fare il portiere. Provare per credere: schiera il centravanti tra i pali.",
  },
  {
    id: 83,
    name: "Pioggia copiosa in quel di Wrexham, il miglior giocatore in rosa non riesce ad arrivare in tempo al centro sportivo per salire sul pullman con la squadra. Guarderà la partita da casa. Tocca alla sua riserva, crediamo in lui!",
  },
  {
    id: 84,
    name: "Sacrilegio! Uno dei titolari critica De Sciglio. Allegri, che ha ascoltato tutto, è infuriato. Fuori il giocatore per due partite.",
  },
  {
    id: 85,
    name: "Allegri, folgorato dalla famosa tris Soldatino,King e D'Artagnan decide di schierare titolari, per tutto l' episodio, i tre peggiori della rosa. VAI CON LA TRIS DI GABRIELLA!",
  },
  {
    id: 86,
    name: "Momento primavera: promuovi un giovane e schieralo per due partite fuori ruolo",
  },
  {
    id: 87,
    name: "Bollywood time: Thakkar ti ha segnalato un attore di Bollywood dai piedi buoni, prelevalo dagli svincolati e schieralo titolare per un mese, il presidente vuole girare una docu-serie su di lui!",
  },
  {
    id: 88,
    name: "Per difendere meglio, prova la difesa avanzata anzichè quella tattica. Ho provato io stesso e ho visto su molti video che quest’anno funziona meglio per questa edizione",
  },
  {
    id: 89,
    name: "Paul mullin non sa mettersi la pettorina del riscaldamento ( stile Balotelli)e si lussa una spalla , out 2 settimane",
  },
  {
    id: 90,
    name: "Veterani in campo: si prendono i giocatori più vecchi e in calo della rosa e si schierano insieme (almeno 1 per reparto portiere compreso)",
  },
  {
    id: 91,
    name: "IRISH PUB: sorteggia i tre ubriaconi (tra tutta la squadra, non solo i titolari) che la sera prima hanno bevuto una birra di troppo e lasciali in tribuna per la prossima partita",
  },
  {
    id: 92,
    name: "Imprevisto sala attrezzi: il primo e secondo portiere si prendono a colpi di manubri. Fuori per 2 partite e dentro il terzo (se non si ha si prende dalla lista svincolati o vivaio)",
  },
  {
    id: 93,
    name: "MAGIA: da Leyton torna un vecchio amico a fare due saluti, in suo onore il presidente ti obbliga a schierare, per tutta la partita, il tuo peggiore attaccante",
  },
  {
    id: 94,
    name: "Il giocatore della primavera piu scarso deve giocare nel suo ruolo naturale per un mese di gioco (30 giorni)",
  },
  {
    id: 95,
    name: "Falco uccide l'universo Wrexam - Vendi i tre più vecchi e compra due canadesi",
  },
  {
    id: 96,
    name: "Il numero 10  dice di essere a Parigi per problemi familiari , disperso non risponde al telefono per 5 giorni sarà trovato in un noto locale in buona compagnia",
  },
];

export default datiBackupIC