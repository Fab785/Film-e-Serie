// src/data/movies.js
const movies = [
    {
      id: 1,
      title: "Ballerina",
      image: "https://image.tmdb.org/t/p/w1280/2VUmvqsHb6cEtdfscEA6fqqVzLg.jpg",
      note: "Non male anche se John Wick mi ha aveva un pò stufato (il 4 infatti lo avevo saltato). Questo però alla fine mi è sembrato un oò meglio dei successivi dal 1 della saga principale ",
      watched: true,
      rating: 4.5,
      watchedBy: ["christian"]
    },
    {
      id: 2,
      title: "Sinners",
      image: "https://image.tmdb.org/t/p/w1280/qTvFWCGeGXgBRaINLY1zqgTPSpn.jpg",
      note: "Bel film, bella ambientazione, da vedere ma è assolutamente vietato leggere prima la trama.",
      watched: true,
      rating: 4.5,
      watchedBy: ["christian"]
    },
    {
      id: 3,
      title: "The Conjuring - Il rito finale",
      image: "https://image.tmdb.org/t/p/w1280/byWgphT74ClOVa8EOGzYDkl8DVL.jpg",
      note: "Non si può non vedere in quanto capitolo finale della saga ma in fonda sai cosa aspettarti già prima di vederlo",
      watched: true,
      rating: 4.5,
      watchedBy: ["christian"]
    },
    {
      id: 4,
      title: "Il Club dei delitti del Giovedì",
      image: "https://image.tmdb.org/t/p/w1280/jbnazCHr8S2l2glyvjPTpa4NbEw.jpg",
      note: "Il film è meglio del libro anche se non è un capolavoro, forse un pochino troppo lungo e come giallo non mi ha tenuto sulle spine come speravo. Attori bravissimi",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    
    },
    {
      id: 5,
      title: "F1",
      image: "https://image.tmdb.org/t/p/w1280/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
      note: "Quello che ci si aspetterebbe da un film del genere.Abbastanza scontato ed altrettanto inverosimile nella storia. Dal punto di vista visivo però fatto molto bene con cameo di veri piloti e dirigenti della Formula 1",
      watched: true,
      rating: 4.5,
      watchedBy: ["christian"]
    },
    {
      id: 6,
      title: "I Fantastici 4 - Gli Inizi",
      image: "https://image.tmdb.org/t/p/w1280/abqOz6EL3yXyOOafCPZxjL1M5bQ.jpg",
      note: "Finalmente diverso dai soliti Marvel, lungo il giusto, estetica retrò da sballo. Da vedere",
      watched: true,
      rating: 4.5,
      watchedBy: ["christian"]
    },
    {
      id: 7,
      title: "Dangerous Animals",
      image: "https://image.tmdb.org/t/p/w1280/9tk3Si960hg4E49eMt81dS7Qe9Z.jpg",
      note: "Mi aspettavo qualcosa di più ma alla fine è più un thriller che un horror. Giusto la sufficienza",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 8,
      title: "No Exit",
      image: "https://image.tmdb.org/t/p/w1280/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
      note: "Non un capolavoro però mi ha piacevolmente intrattenuto con qualche colpo di scena",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 9,
      title: "Jurassic World - La Rinascita",
      image: "https://image.tmdb.org/t/p/w1280/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
      note: "Come puoi immaginare abbasta scontato. Se non altro almeno la storia è diversa del solito, non c'è più il parco di mezzo",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]

    },
    {
      id: 10,
      title: "Back in Action",
      image: "https://image.tmdb.org/t/p/w1280/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
      note: "Divertente soprattutto nella prima parte, seconda già più scontata",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 11,
      title: "Heretic",
      image: "https://image.tmdb.org/t/p/w1280/5HJqjCTcaE1TFwnNh3Dn21be2es.jpg",
      note: "Insomma, parte bene, troppo filosofico nella seconda parte, diventa un horror che si prende troppo sul serio",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 12,
      title: "Civil War",
      image: "https://image.tmdb.org/t/p/w1280/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
      note: "Bel film d'azione e di fantapolitica. Merita",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 13,
      title: "Il Ministero della Guerra Sporca",
      image: "https://image.tmdb.org/t/p/w1280/8aF0iAKH9MJMYAZdi0Slg77RYa2.jpg",
      note: "Divertente, molto gustoso",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 14,
      title: "The Lost City",
      image: "https://image.tmdb.org/t/p/w1280/rnheO8cFvCYcmZsDrBoabJbKLFE.jpg",
      note: "Film d'azione ed avventura molto spassoso se divertirti un paio d'ore",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 15,
      title: "Furiosa",
      image: "https://image.tmdb.org/t/p/w1280/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
      note: "Forse il più debole della serie Mad Max ma il 6 pieno se lo prende, sempre se ti piace il genere",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 16,
      title: "Spider-Man: Into the Spider-Verse ",
      image: "https://image.tmdb.org/t/p/w1280/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      note: "Non un semplice cartone animato per ragazzini, divertente e pieno di azione",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 17,
      title: "Spider-Man: Across the Spider-Verse",
      image: "https://image.tmdb.org/t/p/w1280/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      note: "Seconda parte, molto bello anche questo però mi è piaciuto un pochino meno",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 18,
      title: "Barbarian",
      image: "https://image.tmdb.org/t/p/w1280/idT5mnqPcJgSkvpDX7pJffBzdVH.jpg",
      note: "Niente di troppo innovativo ma un 6 abbondante se lo prende",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 19,
      title: "Longlegs",
      image: "https://image.tmdb.org/t/p/w1280/1EwNyiiNFd863H4e8nWEzutnZD7.jpg",
      note: "Originale, merita",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 20,
      title: "Companion",
      image: "https://image.tmdb.org/t/p/w1280/yBJAA1oAF7RB7qLycJtYo9FPsQ0.jpg",
      note: "Tutto sommato buon film, merita una visione",
      watched: true,
      rating: 4,
      watchedBy: ["christian", "fabrizio"]
    },
    {
      id: 21,
      title: "Fidanzata in affitto",
      image: "https://image.tmdb.org/t/p/w1280/gD72DhJ7NbfxvtxGiAzLaa0xaoj.jpg",
      note: "Commedia molto piacevole, meno scontata di quanto uno potrebbe pensare a prima vista",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 22,
      title: "Death of a Unicorn",
      image: "https://image.tmdb.org/t/p/w1280/xWlF2i51zUq7BUq4iJte1g9NyIM.jpg",
      note: "Non so quanto lo si possa prendere sul serio però è guardabile",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 23,
      title: "Natale a 8 bit",
      image: "https://image.tmdb.org/t/p/w1280/5YwaISdOwp8Zu6O7kwBeUn8a7Pu.jpg",
      note: "Carinissimo film natalizio",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 24,
      title: "Dear Santa",
      image: "https://image.tmdb.org/t/p/w1280/fRbDHbGBXg6kwQYr3CRYeKPJW5q.jpg",
      note: "Carino film natalizia fuori dai soliti schemi, con un grande Satan Jack Black",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 25,
      title: "Scappa - Get Out",
      image: "https://image.tmdb.org/t/p/w1280/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
      note: "Spet-Ta-Co-Lo, girato da paura ed originale quanto basta. Da non perdere",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio", "christian"]
    },
    {
      id: 26,
      title: "Alta Tensione",
      image: "https://image.tmdb.org/t/p/w1280/vKeFa7CqSxmWsQDjHP6SJXKoDbj.jpg",
      note: "Boh, colpo finale che a mio avviso non regge. Promosso fino al twist finale, poi rivedibile. Ricordo solo molta molta violenz xD",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio", "christian"]
    },
    {
      id: 27,
      title: "Yesterday",
      image: "https://image.tmdb.org/t/p/w1280/9fYka5CQt9nrb6LOtKicysUf9NA.jpg",
      note: "Commedia divertente soprattutto se ti piace la musica dei Beatles(e se sai chi sono)",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 28,
      title: "Bring her back",
      image: "https://image.tmdb.org/t/p/w1280/zgRBas7mfiodY9voUOYY26poAc1.jpg",
      note: "Horror diverso dai soliti ed è pure un buon film però che dire, l'ho trovato piuttosto sgradevole",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 29,
      title: "La Llorona",
      image: "https://image.tmdb.org/t/p/w1280/jhZlXSnFUpNiLAek9EkPrtLEWQI.jpg",
      note: "Classico filmetto horror, racconta giusto la storia della Llorona ma niente di originale",
      watched: true,
      rating: 4,
      watchedBy: ["fabrizio"]
    },
    {
      id: 30,
      title: "Borderlands",
      image: "https://image.tmdb.org/t/p/w1280/4JGoZu1ZKFpMJTWAP35PCfkMgu8.jpg",
      note: "Ne hanno parlato non granchè bene ma come film a sè stante mi ha strappato tante risate.In più non dura tanto",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 31,
      title: "Mickey 17",
      image: "https://image.tmdb.org/t/p/w1280/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
      note: "Provato a vedere per quanto ne avevano parlato bene. Tolto dopo un'ora per noia. Pensavo fosse serio invece l'ho trovato troppo grottesco per i miei gusti",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 32,
      title: "The Substance",
      image: "https://image.tmdb.org/t/p/w1280/evdF1vmLzuzH8EFblqAXBXWRGSi.jpg",
      note: "Bello fino a 3/4, poi pure questo vira troppp sul grottesco esagerando a mio avviso",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 33,
      title: "Black Bag",
      image: "https://image.tmdb.org/t/p/w1280/hHPovtU4b96LHcoeEwRkGHI5btw.jpg",
      note: "Buon film di spionaggio. Non tanta azione ma si salva",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 34,
      title: "The Alto Knight",
      image: "https://image.tmdb.org/t/p/w1280/12KDcPkKXshEuXu43rJQEux5W2d.jpg",
      note: "Buon film di Gangster con De Niro che fa 2 personaggi diversi. Non un capolavoro ma si lascia vedere",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 35,
      title: "Malignant",
      image: "https://image.tmdb.org/t/p/w1280/6Fbn1kUd2x3sHCLzTg2olVFA0eS.jpg",
      note: "Ottimo film horror. Te lo consiglio",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 36,
      title: "Misteri dal profondo - The Gorge",
      image: "https://image.tmdb.org/t/p/w1280/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg",
      note: "Parte bene, ti fa chiedere chissà che cosa succede dopo e poi va in vacca nella seconda parte",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 37,
      title: "The Holdovers",
      image: "https://image.tmdb.org/t/p/w1280/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
      note: "Ottimo, vermanete bello, sempre natalizio",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 38,
      title: "I tre moschettieri - D'Artagnan",
      image: "https://image.tmdb.org/t/p/w1280/hfExJPcbBtDeFDEb7I1By72Drlr.jpg",
      note: "Niente male, a differenza del seguito che non mi ha convinto per nulla",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 39,
      title: "September 5",
      image: "https://image.tmdb.org/t/p/w1280/3kcQOLwYKGPwyjiynFsvP8vHvRn.jpg",
      note: "Molto bello, tratto da una storia vera",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 40,
      title: "Nosferatu",
      image: "https://image.tmdb.org/t/p/w1280/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
      note: "Buon film, diverso dai soliti sui vampiri",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 41,
      title: "Il Gladiatore 2",
      image: "https://image.tmdb.org/t/p/w1280/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      note: "Insomma :(",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 42,
      title: "Beetlejuice Beetlejuice",
      image: "https://image.tmdb.org/t/p/w1280/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
      note: "Buon seguito, rispetta lo spirito dell'originale alla fine.",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },
    {
      id: 43,
      title: "Auguri per la tua morte",
      image: "https://image.tmdb.org/t/p/w1280/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",
      note: "Commedia horror abbastanza originale",
      watched: true,
      rating: 4,
      watchedBy: ["christian"]
    },

    
    // add 200+ safely here
  ]
  
  export default movies
  