import { Action } from './types';

const data: Action[] = [
    {
        "id":0,
        "name":"Rano",
        "description": "Budzisz się. Głowa boli, żołądek jak kula rozgrzanego żelaza. Co robisz?",
        "decision": [
            {
                "id":[1],
                "probability": [1],
                "prompt": "Idź do łazienki"
            }
        ]
    },
    {
        "id":1,
        "name":"Łazienka",
        "description": "Szybkim, lecz lekko chwiejnym krokiem udajesz się w stronę toalety. Tam z nabożnością godną mnicha, klękasz porcelanowym bożkiem, nad którym masz nadzieję, że modły pomogą.",
        "decision": [
            {
                "id":[2],
                "probability": [1],
                "prompt": "Zakończ to wszystko"
            }
        ]
    },
    {
        "id":1,
        "name":"Koniec",
        "description": "",
        "decision": []
    }
];

export default data;
