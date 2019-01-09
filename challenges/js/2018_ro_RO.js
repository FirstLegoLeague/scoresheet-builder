{
    "title": "INTO ORBIT",
    "missions": [{
            "title": "M01 Călătoria în spațiu",
            "description": "*Lansați fiecare încărcătură, rulând în mod evident pe rampa de deplasare în spațiu. La fiecare lansare, căruciorul trebuie să fie independent în momentul în care ajunge la prima conexiune a căii de rulare.",
            "objectives": [{
                    "id": "M01_1",
                    "title": "Încărcătura cu vehicul a trecut de prima conexiune a căii de rulare",
                    "type": "yesno"
                },
                {
                    "id": "M01_2",
                    "title": "Încărcătura cu provizii a trecut de prima conexiune a căii de rulare",
                    "type": "yesno"
                },
                {
                    "id": "M01_3",
                    "title": "Încărcătura cu echipaj a trecut de prima conexiune a căii de rulare",
                    "type": "yesno"
                }
            ],
            "score": [function(M01_1, M01_2, M01_3) {
                if (M01_1 === 'no' && M01_2 === 'no' && M01_3 === 'no') {
                    return 0
                }
                if (M01_1 === 'no' && M01_2 === 'no' && M01_3 === 'yes') {
                    return 10
                }
                if (M01_1 === 'no' && M01_2 === 'yes' && M01_3 === 'no') {
                    return 14
                }
                if (M01_1 === 'no' && M01_2 === 'yes' && M01_3 === 'yes') {
                    return 24
                }
                if (M01_1 === 'yes' && M01_2 === 'no' && M01_3 === 'no') {
                    return 22
                }
                if (M01_1 === 'yes' && M01_2 === 'no' && M01_3 === 'yes') {
                    return 32
                }
                if (M01_1 === 'yes' && M01_2 === 'yes' && M01_3 === 'no') {
                    return 36
                }
                if (M01_1 === 'yes' && M01_2 === 'yes' && M01_3 === 'yes') {
                    return 46
                }
            }]
        },
        {
            "title": "M02 Rețeaua de panouri solare",
            "description": "Panourile solare trebuie să fie înclinate spre terenul vostru sau spre terenul celeilalte echipe.",
            "objectives": [{
                    "id": "M02_1",
                    "title": "Ambele panouri solare sunt înclinate spre același teren",
                    "type": "yesno"
                },
                {
                    "id": "M02_2",
                    "title": "Propriul panou solar este înclinat spre terenul celeilalte echipe",
                    "type": "yesno"
                }
            ],
            "score": [function(M02_1, M02_2) {
                if (M02_1 === 'no' && M02_2 === 'no') {
                    return 0
                }
                if (M02_1 === 'no' && M02_2 === 'yes') {
                    return 18
                }
                if (M02_1 === 'yes' && M02_2 === 'no') {
                    return 22
                }
                if (M02_1 === 'yes' && M02_2 === 'yes') {
                    return 40
                }
            }]
        },
        {
            "title": "M03 Tipărirea 3D",
            "description": "Obțineți cărămida 2x4 * prin plasarea mostrei de regolit în imprimanta 3D.",
            "objectives": [{
                    "id": "M03_1",
                    "title": "Cărămida 2x4 a fost scoasă (doar prin plasarea mostrei de regolit în imprimanta 3D)",
                    "type": "yesno"
                },
                {
                    "id": "M03_2",
                    "title": "Cărămida 2x4 este complet în zona țintă de pe planeta nord-estică",
                    "type": "yesno"
                }
            ],
            "score": [function(M03_1, M03_2) {
                if (M03_1 === 'no' && M03_2 === 'no') {
                    return 0
                }
                if (M03_1 === 'no' && M03_2 === 'yes') {
                    return 0
                }
                if (M03_1 === 'yes' && M03_2 === 'no') {
                    return 18
                }
                if (M03_1 === 'yes' && M03_2 === 'yes') {
                    return 22
                }
            }]
        },
        {
            "title": "M04 Traversarea craterului",
            "description": "Robotul sau echipamentul de traversare trimis de robot trebuie să treacă complet peste modelul craterului. Nu pe lângă crater. Nu aproape de crater.",
            "objectives": [{
                    "id": "M04_1",
                    "title": "Toate elementele de susținere a greutății echipamentului de traversare au trecut complet printre cele două turnuri",
                    "type": "yesno"
                },
                {
                    "id": "M04_2",
                    "title": "Tot echipamentului de traversare a trecut complet, de la est la vest, dincolo de poarta culcată",
                    "type": "yesno"
                }
            ],
            "score": [function(M04_1, M04_2) {
                if (M04_1 === 'no' && M04_2 === 'no') {
                    return 0
                }
                if (M04_1 === 'no' && M04_2 === 'yes') {
                    return 0
                }
                if (M04_1 === 'yes' && M04_2 === 'no') {
                    return 0
                }
                if (M04_1 === 'yes' && M04_2 === 'yes') {
                    return 20
                }
            }]
        },
        {
            "title": "M05 Extracția",
            "description": "Robotul trebuie să scoată toate cele patru mostre din modelul de susținere, apoi are mai multe opțiuni pentru a le utiliza, descrise aici și la misiunea M03.",
            "objectives": [{
                    "id": "M05_1",
                    "title": "Toate cele patru mostre nu mai ating axul care le-a ținut în modelul ”Extracția resurselor”",
                    "type": "yesno"
                },
                {
                    "id": "M05_2",
                    "title": "Mostra de gaz atinge planșa și este complet în zona țintă a modulului lunar",
                    "type": "yesno"
                },
                {
                    "id": "M05_3",
                    "title": "-SAU- Mostra de gaz este complet în bază",
                    "type": "yesno"
                },
                {
                    "id": "M05_4",
                    "title": "Mostra de apă este plasată astfel încât să fie susținută doar de modelul serei",
                    "type": "yesno"
                }
            ],
            "score": [function(M05_1, M05_2, M05_3, M05_4) {
                if (M05_1 === 'no' && M05_2 === 'no' && M05_3 === 'no' && M05_4 === 'no') {
                    return 0
                }
                if (M05_1 === 'no' && M05_2 === 'yes' && M05_3 === 'no' && M05_4 === 'no') {
                    return 12
                }
                if (M05_1 === 'no' && M05_2 === 'no' && M05_3 === 'yes' && M05_4 === 'no') {
                    return 10
                }
                if (M05_1 === 'no' && M05_2 === 'yes' && M05_3 === 'yes' && M05_4 === 'no') {
                    return new Error("Locația mostrei de gaz")
                }
                if (M05_1 === 'no' && M05_2 === 'no' && M05_3 === 'no' && M05_4 === 'yes') {
                    return 8
                }
                if (M05_1 === 'no' && M05_2 === 'yes' && M05_3 === 'no' && M05_4 === 'yes') {
                    return 20
                }
                if (M05_1 === 'no' && M05_2 === 'no' && M05_3 === 'yes' && M05_4 === 'yes') {
                    return 18
                }
                if (M05_1 === 'no' && M05_2 === 'yes' && M05_3 === 'yes' && M05_4 === 'yes') {
                    return new Error("Locația mostrei de gaz")
                }
                if (M05_1 === 'yes' && M05_2 === 'no' && M05_3 === 'no' && M05_4 === 'no') {
                    return 16
                }
                if (M05_1 === 'yes' && M05_2 === 'yes' && M05_3 === 'no' && M05_4 === 'no') {
                    return 28
                }
                if (M05_1 === 'yes' && M05_2 === 'no' && M05_3 === 'yes' && M05_4 === 'no') {
                    return 26
                }
                if (M05_1 === 'yes' && M05_2 === 'yes' && M05_3 === 'yes' && M05_4 === 'no') {
                    return new Error("Locația mostrei de gaz")
                }
                if (M05_1 === 'yes' && M05_2 === 'no' && M05_3 === 'no' && M05_4 === 'yes') {
                    return 24
                }
                if (M05_1 === 'yes' && M05_2 === 'yes' && M05_3 === 'no' && M05_4 === 'yes') {
                    return 36
                }
                if (M05_1 === 'yes' && M05_2 === 'no' && M05_3 === 'yes' && M05_4 === 'yes') {
                    return 34
                }
                if (M05_1 === 'yes' && M05_2 === 'yes' && M05_3 === 'yes' && M05_4 === 'yes') {
                    return new Error("Locația mostrei de gaz")
                }
            }]
        },
        {
            "title": "M06 Modulele stației spațiale",
            "description": "Robotul trebuie să scoată și să introducă module în porturile habitatului central. Modulele introduse nu trebuie să atingă decât habitatul central și nimic altceva.",
            "objectives": [{
                    "id": "M06_1",
                    "title": "Modulul conic este complet în bază",
                    "type": "yesno"
                },
                {
                    "id": "M06_2",
                    "title": "Modulul tubular este introdus în portul de pe partea vestică a habitatului central",
                    "type": "yesno"
                },
                {
                    "id": "M06_3",
                    "title": "Modulul de andocare este inserat în portul estic al habitatului central",
                    "type": "yesno"
                }
            ],
            "score": [function(M06_1, M06_2, M06_3) {
                if (M06_1 === 'no' && M06_2 === 'no' && M06_3 === 'no') {
                    return 0
                }
                if (M06_1 === 'no' && M06_2 === 'no' && M06_3 === 'yes') {
                    return 14
                }
                if (M06_1 === 'no' && M06_2 === 'yes' && M06_3 === 'no') {
                    return 16
                }
                if (M06_1 === 'no' && M06_2 === 'yes' && M06_3 === 'yes') {
                    return 30
                }
                if (M06_1 === 'yes' && M06_2 === 'no' && M06_3 === 'no') {
                    return 16
                }
                if (M06_1 === 'yes' && M06_2 === 'no' && M06_3 === 'yes') {
                    return 30
                }
                if (M06_1 === 'yes' && M06_2 === 'yes' && M06_3 === 'no') {
                    return 32
                }
                if (M06_1 === 'yes' && M06_2 === 'yes' && M06_3 === 'yes') {
                    return 46
                }
            }]
        },
        {
            "title": "M07 Urgență la ieșirea în spațiu",
            "description": "Robotul trebuie să introducă corpul lui Gerhard în camera de etanșare.",
            "objectives": [{
                "id": "M07",
                "title": "Astronautul “Gerhard” este în camera de etanșare:",
                "options": [{
                        "value": "none",
                        "title": "Nu"
                    },
                    {
                        "value": "partially",
                        "title": "Parțial"
                    },
                    {
                        "value": "completely",
                        "title": "Complet"
                    }
                ],
                "type": "enum"
            }],
            "score": [function(M07) {
                if (M07 === 'none') {
                    return 0
                }
                if (M07 === 'partially') {
                    return 18
                }
                if (M07 === 'completely') {
                    return 22
                }
            }]
        },
        {
            "title": "M08 Exercițiile aerobice",
            "description": "Robotul trebuie să miște în mod repetat unul sau ambele brațe de acționarea ale modelului de exerciții, pentru a face acul indicator să se miște de-a lungul cadranului. (Dacă acul indicator acoperă parțial una din marginile zonei gri sau portocalii, atunci alegeți culoarea respectivă.)",
            "objectives": [{
                "id": "M08",
                "title": "Acul indicator este deasupra zonei (doar datorită mișcării unuia sau ambelor brațe de acționare):",
                "options": [{
                        "value": "none",
                        "title": "Niciuna"
                    },
                    {
                        "value": "gray",
                        "title": "Gri"
                    },
                    {
                        "value": "white",
                        "title": "Albă"
                    },
                    {
                        "value": "orange",
                        "title": "Portocalie"
                    }
                ],
                "type": "enum"
            }],
            "score": [function(M08) {
                if (M08 === 'none') {
                    return 0
                }
                if (M08 === 'gray') {
                    return 18
                }
                if (M08 === 'white') {
                    return 20
                }
                if (M08 === 'orange') {
                    return 22
                }
            }]
        },
        {
            "title": "M09 Exercițiile de forță",
            "description": "Robotul trebuie să ridice bara de forță până la înălțimea de punctare.",
            "objectives": [{
                "id": "M09",
                "title": "Bara de forță este ridicată astfel încât a patra gaură a cremalierei este cel puțin parțial vizibilă.",
                "type": "yesno"
            }],
            "score": [function(M09) {
                if (M09 === 'no') {
                    return 0
                }
                if (M09 === 'yes') {
                    return 16
                }
            }]
        },
        {
            "title": "M10 Producția de mâncare",
            "description": "Împingeți bara cu viteza potrivită și pe distanța corectă pentru a ajunge în zona verde de punctare.",
            "objectives": [{
                "id": "M10",
                "title": "Greutatea gri este căzută după verde, dar înainte de maro (doar datorită acționarea barei de împingere.)",
                "type": "yesno"
            }],
            "score": [function(M10) {
                if (M10 === 'no') {
                    return 0
                }
                if (M10 === 'yes') {
                    return 16
                }
            }]
        },
        {
            "title": "M11 Viteza de evadare",
            "description": "Robotul trebuie să lovească rampa de lansare destul de tare pentru a face ca nava spațială să rămână sus.",
            "objectives": [{
                "id": "M11",
                "title": "Nava spațială a rămas sus (doar datorită apăsarii/lovirii rampei de lansare)",
                "type": "yesno"
            }],
            "score": [function(M11) {
                if (M11 === 'no') {
                    return 0
                }
                if (M11 === 'yes') {
                    return 24
                }
            }]
        },
        {
            "title": "M12 Orbitele sateliților",
            "description": "Robotul trebuie să mute unul sau mai mulți sateliți pe orbita exterioară.",
            "objectives": [{
                "id": "M12",
                "title": "Sateliți pe sau deasupra zonei dintre cele două linii ale orbitei exterioare:",
                "options": [{
                        "value": "0",
                        "title": "0"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    }
                ],
                "type": "enum"
            }],
            "score": [function(M12) {
                if (M12 === '0') {
                    return 0
                }
                if (M12 === '1') {
                    return 8
                }
                if (M12 === '2') {
                    return 16
                }
                if (M12 === '3') {
                    return 24
                }
            }]
        },
        {
            "title": "M13 Observatorul",
            "description": "Rotiți Observatorul până în poziția exactă. (Dacă acul indicator acoperă parțial una din marginile zonei gri sau portocalii, alegeți culoarea respectivă.)",
            "objectives": [{
                "id": "M13",
                "title": "Vârful acului indicator al Observatorului este în zona:",
                "options": [{
                        "value": "none",
                        "title": "Niciuna"
                    },
                    {
                        "value": "gray",
                        "title": "Gri"
                    },
                    {
                        "value": "white",
                        "title": "Albă"
                    },
                    {
                        "value": "orange",
                        "title": "Portocalie"
                    }
                ],
                "type": "enum"
            }],
            "score": [function(M13) {
                if (M13 === 'none') {
                    return 0
                }
                if (M13 === 'gray') {
                    return 16
                }
                if (M13 === 'white') {
                    return 18
                }
                if (M13 === 'orange') {
                    return 20
                }
            }]
        },
        {
            "title": "M14 Devierea meteoriților",
            "description": "De la vest de linia liberă, trimiteți în mod independent unul sau ambii meteoriți în capcana pentru meteoriți.",
            "objectives": [{
                    "id": "M14_1",
                    "title": "Meteoriți în zona de mijloc a capcanei și care ating planșa:",
                    "options": [{
                            "value": "0",
                            "title": "0"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        }
                    ],
                    "type": "enum"
                },
                {
                    "id": "M14_2",
                    "title": "Meteoriți în secțiunile laterale al capcanei și care ating planșa:",
                    "options": [{
                            "value": "0",
                            "title": "0"
                        },
                        {
                            "value": "1",
                            "title": "1"
                        },
                        {
                            "value": "2",
                            "title": "2"
                        }
                    ],
                    "type": "enum"
                }
            ],
            "score": [function(M14_1, M14_2) {
                if (M14_1 === '0' && M14_2 === '0') {
                    return 0
                }
                if (M14_1 === '0' && M14_2 === '1') {
                    return 8
                }
                if (M14_1 === '0' && M14_2 === '2') {
                    return 16
                }
                if (M14_1 === '1' && M14_2 === '0') {
                    return 12
                }
                if (M14_1 === '1' && M14_2 === '1') {
                    return 20
                }
                if (M14_1 === '1' && M14_2 === '2') {
                    return new Error("Combinație imposibilă. Prea mulți meteoriți")
                }
                if (M14_1 === '2' && M14_2 === '0') {
                    return 24
                }
                if (M14_1 === '2' && M14_2 === '1') {
                    return new Error("Combinație imposibilă. Prea mulți meteoriți")
                }
                if (M14_1 === '2' && M14_2 === '2') {
                    return new Error("Combinație imposibilă. Prea mulți meteoriți")
                }
            }]
        },
        {
            "title": "M15 Aselenizarea modulului lunar",
            "description": "Aduceți modulul lunar intact în una din zonele țintă sau măcar aduceți-l în bază.",
            "objectives": [{
                    "id": "M15_1",
                    "title": "Modulul lunar este intact și atinge planșa",
                    "type": "yesno"
                },
                {
                    "id": "M15_2",
                    "title": "Modulul lunar este complet în:",
                    "options": [{
                            "value": "no",
                            "title": "Niciuna"
                        },
                        {
                            "value": "base",
                            "title": "Bază"
                        },
                        {
                            "value": "planet",
                            "title": "Zona planetei nord-estice"
                        },
                        {
                            "value": "circle",
                            "title": "Zona țintă"
                        }
                    ],
                    "type": "enum"
                }
            ],
            "score": [function(M15_1, M15_2) {
                if (M15_1 === 'no' && M15_2 === 'no') {
                    return 0
                }
                if (M15_1 === 'no' && M15_2 === 'base') {
                    return 16
                }
                if (M15_1 === 'no' && M15_2 === 'circle') {
                    return 0
                }
                if (M15_1 === 'no' && M15_2 === 'planet') {
                    return 0
                }
                if (M15_1 === 'yes' && M15_2 === 'no') {
                    return 0
                }
                if (M15_1 === 'yes' && M15_2 === 'base') {
                    return 16
                }
                if (M15_1 === 'yes' && M15_2 === 'planet') {
                    return 20
                }
                if (M15_1 === 'yes' && M15_2 === 'circle') {
                    return 22
                }
            }]
        },
        {
            "title": "Penalizări",
            "description": "Aveți voie să luați robotul cu mâna și să-l aduceți în bază, dar această acțiune vă aduce o penaizare",
            "objectives": [{
                "id": "penalties",
                "title": "Numărul de penalizări primite pentru întreruperi:",
                "options": [{
                        "value": "0",
                        "title": "0"
                    },
                    {
                        "value": "1",
                        "title": "1"
                    },
                    {
                        "value": "2",
                        "title": "2"
                    },
                    {
                        "value": "3",
                        "title": "3"
                    },
                    {
                        "value": "4",
                        "title": "4"
                    },
                    {
                        "value": "5",
                        "title": "5"
                    },
                    {
                        "value": "6",
                        "title": "6"
                    }
                ],
                "type": "enum"
            }],
            "score": [function(penalties) {
                if (penalties === '0') {
                    return 0
                }
                if (penalties === '1') {
                    return -3
                }
                if (penalties === '2') {
                    return -6
                }
                if (penalties === '3') {
                    return -9
                }
                if (penalties === '4') {
                    return -12
                }
                if (penalties === '5') {
                    return -15
                }
                if (penalties === '6') {
                    return -18
                }
            }]
        }
    ],
    "strings": {
        "yes": "Da",
        "no": "Nu",
        "M01-name": "M01 Călătoria în spațiu",
        "M01-desc": "*Lansați fiecare încărcătură, rulând în mod evident pe rampa de deplasare în spațiu. La fiecare lansare, căruciorul trebuie să fie independent în momentul în care ajunge la prima conexiune a căii de rulare.",
        "M01-scoring1": "Încărcătura cu vehicul a trecut de prima conexiune a căii de rulare",
        "M01-scoring2": "Încărcătura cu provizii a trecut de prima conexiune a căii de rulare",
        "M01-scoring3": "Încărcătura cu echipaj a trecut de prima conexiune a căii de rulare",
        "M02-name": "M02 Rețeaua de panouri solare",
        "M02-desc": "Panourile solare trebuie să fie înclinate spre terenul vostru sau spre terenul celeilalte echipe.",
        "M02-scoring1": "Ambele panouri solare sunt înclinate spre același teren",
        "M02-scoring2": "Propriul panou solar este înclinat spre terenul celeilalte echipe",
        "M03-name": "M03 Tipărirea 3D",
        "M03-desc": "Obțineți cărămida 2x4 * prin plasarea mostrei de regolit în imprimanta 3D.",
        "M03-scoring1": "Cărămida 2x4 a fost scoasă (doar prin plasarea mostrei de regolit în imprimanta 3D)",
        "M03-scoring2": "Cărămida 2x4 este complet în zona țintă de pe planeta nord-estică",
        "M04-name": "M04 Traversarea craterului",
        "M04-desc": "Robotul sau echipamentul de traversare trimis de robot trebuie să treacă complet peste modelul craterului. Nu pe lângă crater. Nu aproape de crater.",
        "M04-scoring1": "Toate elementele de susținere a greutății echipamentului de traversare au trecut complet printre cele două turnuri",
        "M04-scoring2": "Tot echipamentului de traversare a trecut complet, de la est la vest, dincolo de poarta culcată",
        "M05-name": "M05 Extracția",
        "M05-desc": "Robotul trebuie să scoată toate cele patru mostre din modelul de susținere, apoi are mai multe opțiuni pentru a le utiliza, descrise aici și la misiunea M03.",
        "M05-scoring1": "Toate cele patru mostre nu mai ating axul care le-a ținut în modelul ”Extracția resurselor”",
        "M05-scoring2": "Mostra de gaz atinge planșa și este complet în zona țintă a modulului lunar",
        "M05-scoring3": "-SAU- Mostra de gaz este complet în bază",
        "M05-scoring4": "Mostra de apă este plasată astfel încât să fie susținută doar de modelul serei",
        "M05-error": "Locația mostrei de gaz",
        "M06-name": "M06 Modulele stației spațiale",
        "M06-desc": "Robotul trebuie să scoată și să introducă module în porturile habitatului central. Modulele introduse nu trebuie să atingă decât habitatul central și nimic altceva.",
        "M06-scoring1": "Modulul conic este complet în bază",
        "M06-scoring2": "Modulul tubular este introdus în portul de pe partea vestică a habitatului central",
        "M06-scoring3": "Modulul de andocare este inserat în portul estic al habitatului central",
        "M07-name": "M07 Urgență la ieșirea în spațiu",
        "M07-desc": "Robotul trebuie să introducă corpul lui Gerhard în camera de etanșare.",
        "M07-scoring": "Astronautul “Gerhard” este în camera de etanșare:",
        "M07-scoring1": "Nu",
        "M07-scoring2": "Parțial",
        "M07-scoring3": "Complet",
        "M08-name": "M08 Exercițiile aerobice",
        "M08-desc": "Robotul trebuie să miște în mod repetat unul sau ambele brațe de acționarea ale modelului de exerciții, pentru a face acul indicator să se miște de-a lungul cadranului. (Dacă acul indicator acoperă parțial una din marginile zonei gri sau portocalii, atunci alegeți culoarea respectivă.)",
        "M08-scoring": "Acul indicator este deasupra zonei (doar datorită mișcării unuia sau ambelor brațe de acționare):",
        "M08-scoring1": "Niciuna",
        "M08-scoring2": "Gri",
        "M08-scoring3": "Albă",
        "M08-scoring4": "Portocalie",
        "M09-name": "M09 Exercițiile de forță",
        "M09-desc": "Robotul trebuie să ridice bara de forță până la înălțimea de punctare.",
        "M09-scoring": "Bara de forță este ridicată astfel încât a patra gaură a cremalierei este cel puțin parțial vizibilă.",
        "M10-name": "M10 Producția de mâncare",
        "M10-desc": "Împingeți bara cu viteza potrivită și pe distanța corectă pentru a ajunge în zona verde de punctare.",
        "M10-scoring": "Greutatea gri este căzută după verde, dar înainte de maro (doar datorită acționarea barei de împingere.)",
        "M11-name": "M11 Viteza de evadare",
        "M11-desc": "Robotul trebuie să lovească rampa de lansare destul de tare pentru a face ca nava spațială să rămână sus.",
        "M11-scoring": "Nava spațială a rămas sus (doar datorită apăsarii/lovirii rampei de lansare)",
        "M12-name": "M12 Orbitele sateliților",
        "M12-desc": "Robotul trebuie să mute unul sau mai mulți sateliți pe orbita exterioară.",
        "M12-scoring": "Sateliți pe sau deasupra zonei dintre cele două linii ale orbitei exterioare:",
        "M13-name": "M13 Observatorul",
        "M13-desc": "Rotiți Observatorul până în poziția exactă. (Dacă acul indicator acoperă parțial una din marginile zonei gri sau portocalii, alegeți culoarea respectivă.)",
        "M13-scoring": "Vârful acului indicator al Observatorului este în zona:",
        "M13-scoring1": "Niciuna",
        "M13-scoring2": "Gri",
        "M13-scoring3": "Albă",
        "M13-scoring4": "Portocalie",
        "M14-name": "M14 Devierea meteoriților",
        "M14-desc": "De la vest de linia liberă, trimiteți în mod independent unul sau ambii meteoriți în capcana pentru meteoriți.",
        "M14-scoring1": "Meteoriți în zona de mijloc a capcanei și care ating planșa:",
        "M14-scoring2": "Meteoriți în secțiunile laterale al capcanei și care ating planșa:",
        "M14-error": "Combinație imposibilă. Prea mulți meteoriți",
        "M15-name": "M15 Aselenizarea modulului lunar",
        "M15-desc": "Aduceți modulul lunar intact în una din zonele țintă sau măcar aduceți-l în bază.",
        "M15-scoring1": "Modulul lunar este intact și atinge planșa",
        "M15-scoring2": "Modulul lunar este complet în:",
        "M15-scoring3": "Niciuna",
        "M15-scoring4": "Bază",
        "M15-scoring5": "Zona planetei nord-estice",
        "M15-scoring6": "Zona țintă",
        "penalties-name": "Penalizări",
        "penalties-desc": "Aveți voie să luați robotul cu mâna și să-l aduceți în bază, dar această acțiune vă aduce o penaizare",
        "penalties-scoring": "Numărul de penalizări primite pentru întreruperi:"
    },
    "rtl": false
}
