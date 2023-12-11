import { Action } from './types';

const data: Action[] = [
  {
    id: 0,
    name: "Rano",
    description:
      "Budzisz się. Głowa boli, żołądek jak kula rozgrzanego żelaza. Co robisz?",
    decision: [
      {
        id: [1, 2],
        probability: [0.7, 0.3],
        prompt: "Idź do łazienki"
      },
      {
        id: [3],
        probability: [1],
        prompt: "Znajdź coś do zjedzenia"
      }
    ]
  },
  {
    id: 1,
    name: "Łazienka",
    description:
      "Szybkim, lecz lekko chwiejnym krokiem udajesz się w stronę toalety. Tam z nabożnością godną mnicha, klękasz porcelanowym bożkiem, nad którym masz nadzieję, że modły pomogą.",
    decision: [
      {
        id: [5],
        probability: [0.8],
        prompt: "Umój twarz"
      }
    ]
  },
  {
    id: 2,
    name: "Kuchnia",
    description:
      "Wędrujesz do kuchni, poszukując czegoś, co mogłoby złagodzić ból głowy i sprostać wymaganiom twego pustego żołądka.",
    decision: [
      {
        id: [6],
        probability: [0.9],
        prompt: "Znajdź herbatę"
      },
      {
        id: [7],
        probability: [0.7],
        prompt: "Przygotuj kawę"
      },
      {
        id: [50],
        probability: [0.7],
        prompt: "Zjedz jajecznicę"
      }
    ]
  },
  {
    id: 3,
    name: "Spacer",
    description:
      "Decydujesz się na krótki spacer na świeżym powietrzu, myśląc, że może to poprawić twój nastrój.",
    decision: [
      {
        id: [8],
        probability: [0.6],
        prompt: "Podążaj w kierunku parku"
      },
      {
        id: [9],
        probability: [0.8],
        prompt: "Idź w stronę sklepu spożywczego"
      }
    ]
  },
  {
    id: 4,
    name: "Koniec",
    description: "To już koniec twojej opowieści.",
    decision: []
  },
  {
    id: 5,
    name: "Łazienka - Umycie twarzy",
    description: "Osiągasz umywalkę i chlustasz twarz zimną wodą.",
    decision: [
      {
        id: [10],
        probability: [0.7],
        prompt: "Wróć do sypialni"
      },
      {
        id: [11],
        probability: [0.9],
        prompt: "Idź do kuchni"
      }
    ]
  },
  {
    id: 6,
    name: "Herbata",
    description:
      "Znajdujesz ulubioną herbatę i delektujesz się jej aromatem, czując, jak rozgrzewa twój organizm.",
    decision: [
      {
        id: [11],
        probability: [0.8],
        prompt: "Idź do kuchni"
      },
      {
        id: [10],
        probability: [0.6],
        prompt: "Wróć do sypialni"
      }
    ]
  },
  {
    id: 7,
    name: "Kawa",
    description:
      "Przygotowujesz kawę o intensywnym aromacie, który przerywa senność. Pijesz ją w ciszy, zastanawiając się nad dniem, który przed tobą.",
    decision: [
      {
        id: [8],
        probability: [0.7],
        prompt: "Podążaj w kierunku parku"
      },
      {
        id: [9],
        probability: [0.9],
        prompt: "Idź w stronę sklepu spożywczego"
      }
    ]
  },
  {
    id: 8,
    name: "Park",
    description:
      "Docierasz do parku, gdzie śpiew ptaków i zielona trawa sprawiają, że zapominasz o bólu głowy. Masz teraz kilka opcji przed sobą.",
    decision: [
      {
        id: [12],
        probability: [0.8],
        prompt: "Usiądź na ławce i odpocznij"
      },
      {
        id: [13],
        probability: [0.7],
        prompt: "Podążaj ścieżką wzdłuż stawu"
      }
    ]
  },
  {
    id: 9,
    name: "Sklep spożywczy",
    description:
      "Znajdujesz się przed sklepem spożywczym, zastanawiając się, co kupić na śniadanie.",
    decision: [
      {
        id: [14],
        probability: [0.9],
        prompt: "Kup jogurt i owoce"
      },
      {
        id: [15],
        probability: [0.8],
        prompt: "Kup bułki i dżem"
      }
    ]
  },
  {
    id: 10,
    name: "Sypialnia",
    description: "Wróciłeś do swojej sypialni.",
    decision: [
      {
        id: [4],
        probability: [1],
        prompt: "Zakończ to wszystko"
      },
      {
        id: [1],
        probability: [0.9],
        prompt: "Idź do łazienki"
      }
    ]
  },
  {
    id: 12,
    name: "Park - Odpoczynek na ławce",
    description:
      "Usiądasz na ławce, oddychając świeżym powietrzem i delektując się spokojem parku. Nagle zauważasz coś niezwykłego.",
    decision: [
      {
        id: [16],
        probability: [0.7],
        prompt: "Zbliż się do tajemniczego obiektu"
      },
      {
        id: [17],
        probability: [0.8],
        prompt: "Podążaj dalej ścieżką"
      }
    ]
  },
  {
    id: 13,
    name: "Park - Ścieżka wzdłuż stawu",
    description:
      "Podążasz ścieżką wzdłuż malowniczego stawu, obserwując kaczki i zanurzone w wodzie lilie. Niespodziewanie napotykasz na skrzyżowanie dróg.",
    decision: [
      {
        id: [18],
        probability: [0.7],
        prompt: "Skręć w lewo"
      },
      {
        id: [19],
        probability: [0.8],
        prompt: "Skręć w prawo"
      }
    ]
  },
  {
    id: 14,
    name: "Sklep spożywczy - Kup jogurt i owoce",
    description:
      "W sklepie spożywczym wybierasz jogurt i świeże owoce. To zdrowe i pożywne śniadanie. Znajdujesz miejsce na ławce w pobliskim parku i zaczynasz jeść.",
    decision: [
      {
        id: [20],
        probability: [0.9],
        prompt: "Podziwiaj otoczenie"
      },
      {
        id: [21],
        probability: [0.8],
        prompt: "Rozmawiaj z przechodniem"
      }
    ]
  },
  {
    id: 15,
    name: "Sklep spożywczy - Kup bułki i dżem",
    description:
      "W sklepie spożywczym wybierasz świeże bułki i pyszny dżem. Zdecydowałeś się na słodkie śniadanie. Czas znaleźć spokojne miejsce na zjedzenie posiłku.",
    decision: [
      {
        id: [20],
        probability: [0.9],
        prompt: "Podziwiaj otoczenie"
      },
      {
        id: [21],
        probability: [0.8],
        prompt: "Rozmawiaj z przechodniem"
      }
    ]
  },
  {
    id: 16,
    name: "Tajemniczy obiekt",
    description:
      "Zbliżasz się do tajemniczego obiektu, który okazuje się być magicznym lustrzanym portalem. Przechodzisz przez niego i znajdujesz się w zupełnie innym miejscu.",
    decision: [
      {
        id: [22],
        probability: [1],
        prompt: "Odkrywaj nowy świat"
      }
    ]
  },
  {
    id: 17,
    name: "Park - Kontynuuj ścieżkę",
    description:
      "Podążasz dalej ścieżką, aż dochodzisz do ukrytego ogrodu pełnego kolorowych kwiatów i egzotycznych roślin. Spotykasz tajemniczą postać.",
    decision: [
      {
        id: [23],
        probability: [0.7],
        prompt: "Zapytaj o sens życia"
      },
      {
        id: [24],
        probability: [0.8],
        prompt: "Proś o wskazówki dotyczące powrotu"
      }
    ]
  },
  {
    id: 18,
    name: "Skręć w lewo",
    description:
      "Podążasz ścieżką w lewo, odkrywając magiczny las pełen elfów i jednorożców. W oddali widzisz tajemnicze światło.",
    decision: [
      {
        id: [25],
        probability: [0.7],
        prompt: "Podążaj w kierunku światła"
      },
      {
        id: [26],
        probability: [0.8],
        prompt: "Wróć na główną ścieżkę"
      }
    ]
  },
  {
    id: 19,
    name: "Skręć w prawo",
    description:
      "Decydujesz się skręcić w prawo, a ścieżka prowadzi cię do urokliwej polany, gdzie spotykasz grupę przyjaznych wróżek.",
    decision: [
      {
        id: [27],
        probability: [0.7],
        prompt: "Poproś wróżki o błogosławieństwo"
      },
      {
        id: [28],
        probability: [0.8],
        prompt: "Zapytaj wróżki o radę życiową"
      }
    ]
  },
  {
    id: 20,
    name: "Podziwiaj otoczenie",
    description:
      "Podziwiasz piękno otaczającego cię miejsca, czując się zrelaksowanym i pełnym energii. Czas na nowe wyzwania!",
    decision: [
      {
        id: [29],
        probability: [1],
        prompt: "Rozpocznij nową przygodę"
      }
    ]
  },
  {
    id: 21,
    name: "Rozmawiaj z przechodniem",
    description:
      "Zaczynasz rozmowę z przechodniem, który okazuje się być mędrcem. Udziela ci mądrej rady i życzy powodzenia w dalszych losach.",
    decision: [
      {
        id: [29],
        probability: [1],
        prompt: "Rozpocznij nową przygodę"
      }
    ]
  },
  {
    id: 22,
    name: "Nowy świat",
    description:
      "Odkrywasz niezwykły świat pełen magii, przygód i niesamowitych istot. Stajesz się bohaterem tej fantastycznej krainy, zdolnym do pokonywania wszelkich trudności.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 23,
    name: "Tajemnicza postać",
    description:
      "Tajemnicza postać przedstawia się jako strażnik magicznego ogrodu. Otwiera przed tobą drzwi do innej rzeczywistości, gdzie czekają na ciebie nowe wyzwania.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 24,
    name: "Proś o wskazówki dotyczące powrotu",
    description:
      "Tajemnicza postać udziela ci wskazówek, jak powrócić do swojego świata. Zanim opuścisz magiczny ogród, obiecuje, że zawsze będziesz mieć dostęp do tego miejsca w razie potrzeby.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 25,
    name: "Podążaj w kierunku światła",
    description:
      "Podążasz w kierunku tajemniczego światła, które okazuje się być magicznym źródłem mocy. Zyskujesz nowe umiejętności i stajesz się niezwyciężonym bohaterem.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 26,
    name: "Wróć na główną ścieżkę",
    description:
      "Decydujesz się wrócić na główną ścieżkę lasu. Spotykasz grupę podróżników, którzy dzielą się z tobą swoimi historiami i zapraszają do wspólnego odkrywania magicznego świata.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 27,
    name: "Poproś wróżki o błogosławieństwo",
    description:
      "Wróżki błogosławią cię magiczną mocą, która będzie ci towarzyszyć w każdej sytuacji. Czujesz się chroniony i gotowy na nowe wyzwania.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 28,
    name: "Zapytaj wróżki o radę życiową",
    description:
      "Wróżki dzielą się z tobą mądrością życiową. Ich rady pomagają ci znaleźć równowagę i spełnienie w codziennym życiu.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 29,
    name: "Rozpocznij nową przygodę",
    description:
      "Zdecydowałeś się na kontynuację podróży. Nieskończone możliwości rozpościerają się przed tobą. Twoja przygoda w magicznym świecie trwa.",
    decision: [
      {
        id: [30],
        probability: [1],
        prompt: "Podążaj ścieżką przygód"
      }
    ]
  },
  {
    id: 30,
    name: "Epilog",
    description:
      "Twoja podróż w magicznym świecie trwała przez wiele miesięcy. Zdobyłeś nowe doświadczenia, przyjaźnie i wiedzę. Pewnego dnia, z tęsknotą w sercu, postanawiasz wrócić do swojego świata. Magiczny portret znów otwiera się przed tobą, i z uśmiechem na twarzy przekraczasz jego progi, wiedząc, że zawsze możesz wrócić do tego niezwykłego miejsca.",
    decision: []
  }
];

export default data;
