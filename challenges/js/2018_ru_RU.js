({
    "title": "INTO ORBIT",
    "missions": [{
            "title": "M01 Космическое Путешествие",
            "description": "*Груз считается доставленным, когда он явно скатился по рампе Космической Станции. Во время каждого спуска тележка должна * быть Независима до момента первой стыковки.",
            "objectives": [{
                    "id": "M01_1",
                    "title": "Груз с Машиной произвёл стыковку",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M01_2",
                    "title": "Груз с Продуктами произвёл стыковку",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M01_3",
                    "title": "Груз с Экипажем произвёл стыковку",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M01_1, M01_2, M01_3) {
                M01_1 = String(M01_1);
                M01_2 = String(M01_2);
                M01_3 = String(M01_3);
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
            "title": "M02 Панель Солнечных Батарей",
            "description": "Солнечные панели должны быть Направлены к вам или от вас.",
            "objectives": [{
                    "id": "M02_1",
                    "title": "Обе Солнечные Панели направлены на одно и то же поле.",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M02_2",
                    "title": "Ваша Солнечная Панель направлена на поле другой команды.",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M02_1, M02_2) {
                M02_1 = String(M02_1);
                M02_2 = String(M02_2);
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
            "title": "M03 3D печать",
            "description": "Извлеките Кирпичик 2x4 * загрузив в него Образец сердечника реголита в 3D принтер.",
            "objectives": [{
                    "id": "M03_1",
                    "title": "Кирпичик 2x4 извлечён (только Образец сердечника реголита загружен в 3D Принтер)",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M03_2",
                    "title": "Кирпичик 2x4 извлечён и доставлен в Северо-восточную часть планеты",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M03_1, M03_2) {
                M03_1 = String(M03_1);
                M03_2 = String(M03_2);
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
            "title": "M04 Пересечение Кратера",
            "description": "Робот или любой корабль-агент, которого он отправляет должен полностью пересечь Кратер, проезжая прямо над ним. Не рядом с ним. Не вокруг него.",
            "objectives": [{
                    "id": "M04_1",
                    "title": "Все несущие детали пересекающего оборудования проходят четко между башнями",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M04_2",
                    "title": "Всё пересекающее оборудование передвигается с востока на запад, полностью проезжая через кратер",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M04_1, M04_2) {
                M04_1 = String(M04_1);
                M04_2 = String(M04_2);
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
            "title": "M05 Извлечение",
            "description": "Робот должен достать все образцы сердечников из зоны их хранения, дальше существует несколько вариантов выполнения этого задания, описанных далее и в Миссии M03.",
            "objectives": [{
                    "id": "M05_1",
                    "title": "Все четыре образца сердечника не касаются балки зоны хранения",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M05_2",
                    "title": "Образец газового сердечника касается поля и полностью находится в Целевом круге Спускаемого Аппарата",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M05_3",
                    "title": "-ИЛИ- Образец газового сердечника находится полностью на Базе",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M05_4",
                    "title": "Образец водного сердечника поддерживается только Продовольственной палаткой",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M05_1, M05_2, M05_3, M05_4) {
                M05_1 = String(M05_1);
                M05_2 = String(M05_2);
                M05_3 = String(M05_3);
                M05_4 = String(M05_4);
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
                    return new Error("Расположение Образца газового сердечника")
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
                    return new Error("Расположение Образца газового сердечника")
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
                    return new Error("Расположение Образца газового сердечника")
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
                    return new Error("Расположение Образца газового сердечника")
                }
            }]
        },
        {
            "title": "M06 Модули космической станции",
            "description": "Робот должен извлечь и вставить Модули в специальные отверстия Жилого блока. Вставленные модули не должны ничего касаться, кроме Жилого блока.",
            "objectives": [{
                    "id": "M06_1",
                    "title": "Конический модуль находится полностью на Базе",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M06_2",
                    "title": "Модуль с трубой вставлен в западное отверстие Жилого блока",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M06_3",
                    "title": "Док-модуль вставлен в восточное отверстие Жилого блока",
                    "type": "yesno",
                    "default": "no"
                }
            ],
            "score": [function(M06_1, M06_2, M06_3) {
                M06_1 = String(M06_1);
                M06_2 = String(M06_2);
                M06_3 = String(M06_3);
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
            "title": "M07 Экстренная ситуация в открытом космосе",
            "description": "Робот должен доставить тело космонавта Герхарда в Воздушную камеру.",
            "objectives": [{
                "id": "M07",
                "title": "Космонавт Герхард находится в Воздушной камере Жилого блока:",
                "options": [{
                        "value": "none",
                        "title": "Никак"
                    },
                    {
                        "value": "partially",
                        "title": "Частично"
                    },
                    {
                        "value": "completely",
                        "title": "Полностью"
                    }
                ],
                "type": "enum",
                "default": "none"
            }],
            "score": [function(M07) {
                M07 = String(M07);
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
            "title": "M08 Аэробные упражнения",
            "description": "Робот должен многократно перемещать рычаги тренажера для передвижения указателя по циферблату. (Если Указатель частично покрывает либо серую, либо оранжевую границу, выберите данный цвет.)",
            "objectives": [{
                "id": "M08",
                "title": "Стрелка указателя находится (из-за перемещения одного или двух рычагов тренажера):",
                "options": [{
                        "value": "none",
                        "title": "Нигде"
                    },
                    {
                        "value": "gray",
                        "title": "В серой зоне"
                    },
                    {
                        "value": "white",
                        "title": "Белой зоне"
                    },
                    {
                        "value": "orange",
                        "title": "Оранжевой зоне"
                    }
                ],
                "type": "enum",
                "default": "none"
            }],
            "score": [function(M08) {
                M08 = String(M08);
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
            "title": "M09 Силовые упражнения",
            "description": "Робот должен поднять силовую балку на высоту, с которой начинается подсчёт.",
            "objectives": [{
                "id": "M09",
                "title": "Силовая балка должна быть поднята на высоту так, чтобы хотя бы 4 отверстия выступали над отметкой.",
                "type": "yesno",
                "default": "no"
            }],
            "score": [function(M09) {
                M09 = String(M09);
                if (M09 === 'no') {
                    return 0
                }
                if (M09 === 'yes') {
                    return 16
                }
            }]
        },
        {
            "title": "M10 Производство продуктов питания",
            "description": "Переместите пусковую балку на правильное расстояние и с правильной скоростью, чтобы попасть в зеленый диапазон.",
            "objectives": [{
                "id": "M10",
                "title": "Серый выпал после зеленого, но до коричневого (только при перемещении пусковой балки.)",
                "type": "yesno",
                "default": "no"
            }],
            "score": [function(M10) {
                M10 = String(M10);
                if (M10 === 'no') {
                    return 0
                }
                if (M10 === 'yes') {
                    return 16
                }
            }]
        },
        {
            "title": "M11 Вторая космическая скорость",
            "description": "Робот должен достаточно сильно воздействовать на ударную подушку, чтобы не допустить падения космического корабля.",
            "objectives": [{
                "id": "M11",
                "title": "Космический корабль остаётся наверху (из-за нажатия/удара по ударной подушке)",
                "type": "yesno",
                "default": "no"
            }],
            "score": [function(M11) {
                M11 = String(M11);
                if (M11 === 'no') {
                    return 0
                }
                if (M11 === 'yes') {
                    return 24
                }
            }]
        },
        {
            "title": "M12 Орбиты спутников",
            "description": "Робот должен переместить один или более Спутников на внешнюю орбиту.",
            "objectives": [{
                "id": "M12",
                "title": "Спутники находятся на зоне между двумя линиями внешней орбиты или за этой зоной:",
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
                "type": "enum",
                "default": "0"
            }],
            "score": [function(M12) {
                M12 = String(M12);
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
            "title": "M13 Обсерватория",
            "description": "Поверните Обсерваторию на определённый угол. (Если указатель попадает на границы или в зону между серым и оранжевым цветом, выберите данный цвет.)",
            "objectives": [{
                "id": "M13",
                "title": "Указатель Обсерватории указывает на:",
                "options": [{
                        "value": "none",
                        "title": "Никакую зону"
                    },
                    {
                        "value": "gray",
                        "title": "Серую зону"
                    },
                    {
                        "value": "white",
                        "title": "Белую зону"
                    },
                    {
                        "value": "orange",
                        "title": "Оранжевую зону"
                    }
                ],
                "type": "enum",
                "default": "none"
            }],
            "score": [function(M13) {
                M13 = String(M13);
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
            "title": "M14 Отражение метеоритов",
            "description": "С западной части Free-line отправьте один или оба метеорита, чтобы они независимо от робота попали в ловушку для Метеоритов.",
            "objectives": [{
                    "id": "M14_1",
                    "title": "Метеориты касаются поля и находятся в Центральной секции ловушки для Метеоритов",
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
                    "type": "enum",
                    "default": "0"
                },
                {
                    "id": "M14_2",
                    "title": "Метеориты касаются поля и находятся в одной из Боковых секций:",
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
                    "type": "enum",
                    "default": "0"
                }
            ],
            "score": [function(M14_1, M14_2) {
                M14_1 = String(M14_1);
                M14_2 = String(M14_2);
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
                    return new Error("Невозможная комбинация.  Слишком много Метеоритов")
                }
                if (M14_1 === '2' && M14_2 === '0') {
                    return 24
                }
                if (M14_1 === '2' && M14_2 === '1') {
                    return new Error("Невозможная комбинация.  Слишком много Метеоритов")
                }
                if (M14_1 === '2' && M14_2 === '2') {
                    return new Error("Невозможная комбинация.  Слишком много Метеоритов")
                }
            }]
        },
        {
            "title": "M15 Посадка Спускаемого аппарата",
            "description": "Доставьте спускаемый аппарат неповрежденным в одну из целей, или по крайней мере на Базу.",
            "objectives": [{
                    "id": "M15_1",
                    "title": "Спускаемый аппарат не поврежден и касается поля.",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M15_2",
                    "title": "Спускаемый аппарат полностью находится:",
                    "options": [{
                            "value": "no",
                            "title": "Нигде"
                        },
                        {
                            "value": "base",
                            "title": "На базе"
                        },
                        {
                            "value": "planet",
                            "title": "Северо-восточная область планеты"
                        },
                        {
                            "value": "circle",
                            "title": "В Целевом круге"
                        }
                    ],
                    "type": "enum",
                    "default": "no"
                }
            ],
            "score": [function(M15_1, M15_2) {
                M15_1 = String(M15_1);
                M15_2 = String(M15_2);
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
            "title": "Штрафы",
            "description": "Нельзя мешать работе Робота, за это вы получаете данный Штраф.",
            "objectives": [{
                "id": "penalties",
                "title": "Количество штрафных карточек в юго-восточном треугольнике:",
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
                "type": "enum",
                "default": "0"
            }],
            "score": [function(penalties) {
                penalties = String(penalties);
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
        "yes": "Да",
        "no": "Нет",
        "M01-name": "M01 Космическое Путешествие",
        "M01-desc": "*Груз считается доставленным, когда он явно скатился по рампе Космической Станции. Во время каждого спуска тележка должна * быть Независима до момента первой стыковки.",
        "M01-scoring1": "Груз с Машиной произвёл стыковку",
        "M01-scoring2": "Груз с Продуктами произвёл стыковку",
        "M01-scoring3": "Груз с Экипажем произвёл стыковку",
        "M02-name": "M02 Панель Солнечных Батарей",
        "M02-desc": "Солнечные панели должны быть Направлены к вам или от вас.",
        "M02-scoring1": "Обе Солнечные Панели направлены на одно и то же поле.",
        "M02-scoring2": "Ваша Солнечная Панель направлена на поле другой команды.",
        "M03-name": "M03 3D печать",
        "M03-desc": "Извлеките Кирпичик 2x4 * загрузив в него Образец сердечника реголита в 3D принтер.",
        "M03-scoring1": "Кирпичик 2x4 извлечён (только Образец сердечника реголита загружен в 3D Принтер)",
        "M03-scoring2": "Кирпичик 2x4 извлечён и доставлен в Северо-восточную часть планеты",
        "M04-name": "M04 Пересечение Кратера",
        "M04-desc": "Робот или любой корабль-агент, которого он отправляет должен полностью пересечь Кратер, проезжая прямо над ним. Не рядом с ним. Не вокруг него.",
        "M04-scoring1": "Все несущие детали пересекающего оборудования проходят четко между башнями",
        "M04-scoring2": "Всё пересекающее оборудование передвигается с востока на запад, полностью проезжая через кратер",
        "M05-name": "M05 Извлечение",
        "M05-desc": "Робот должен достать все образцы сердечников из зоны их хранения, дальше существует несколько вариантов выполнения этого задания, описанных далее и в Миссии M03.",
        "M05-scoring1": "Все четыре образца сердечника не касаются балки зоны хранения",
        "M05-scoring2": "Образец газового сердечника касается поля и полностью находится в Целевом круге Спускаемого Аппарата",
        "M05-scoring3": "-ИЛИ- Образец газового сердечника находится полностью на Базе",
        "M05-scoring4": "Образец водного сердечника поддерживается только Продовольственной палаткой",
        "M05-error": "Расположение Образца газового сердечника",
        "M06-name": "M06 Модули космической станции",
        "M06-desc": "Робот должен извлечь и вставить Модули в специальные отверстия Жилого блока. Вставленные модули не должны ничего касаться, кроме Жилого блока.",
        "M06-scoring1": "Конический модуль находится полностью на Базе",
        "M06-scoring2": "Модуль с трубой вставлен в западное отверстие Жилого блока",
        "M06-scoring3": "Док-модуль вставлен в восточное отверстие Жилого блока",
        "M07-name": "M07 Экстренная ситуация в открытом космосе",
        "M07-desc": "Робот должен доставить тело космонавта Герхарда в Воздушную камеру.",
        "M07-scoring": "Космонавт Герхард находится в Воздушной камере Жилого блока:",
        "M07-scoring1": "Никак",
        "M07-scoring2": "Частично",
        "M07-scoring3": "Полностью",
        "M08-name": "M08 Аэробные упражнения",
        "M08-desc": "Робот должен многократно перемещать рычаги тренажера для передвижения указателя по циферблату. (Если Указатель частично покрывает либо серую, либо оранжевую границу, выберите данный цвет.)",
        "M08-scoring": "Стрелка указателя находится (из-за перемещения одного или двух рычагов тренажера):",
        "M08-scoring1": "Нигде",
        "M08-scoring2": "В серой зоне",
        "M08-scoring3": "Белой зоне",
        "M08-scoring4": "Оранжевой зоне",
        "M09-name": "M09 Силовые упражнения",
        "M09-desc": "Робот должен поднять силовую балку на высоту, с которой начинается подсчёт.",
        "M09-scoring": "Силовая балка должна быть поднята на высоту так, чтобы хотя бы 4 отверстия выступали над отметкой.",
        "M10-name": "M10 Производство продуктов питания",
        "M10-desc": "Переместите пусковую балку на правильное расстояние и с правильной скоростью, чтобы попасть в зеленый диапазон.",
        "M10-scoring": "Серый выпал после зеленого, но до коричневого (только при перемещении пусковой балки.)",
        "M11-name": "M11 Вторая космическая скорость",
        "M11-desc": "Робот должен достаточно сильно воздействовать на ударную подушку, чтобы не допустить падения космического корабля.",
        "M11-scoring": "Космический корабль остаётся наверху (из-за нажатия/удара по ударной подушке)",
        "M12-name": "M12 Орбиты спутников",
        "M12-desc": "Робот должен переместить один или более Спутников на внешнюю орбиту.",
        "M12-scoring": "Спутники находятся на зоне между двумя линиями внешней орбиты или за этой зоной:",
        "M13-name": "M13 Обсерватория",
        "M13-desc": "Поверните Обсерваторию на определённый угол. (Если указатель попадает на границы или в зону между серым и оранжевым цветом, выберите данный цвет.)",
        "M13-scoring": "Указатель Обсерватории указывает на:",
        "M13-scoring1": "Никакую зону",
        "M13-scoring2": "Серую зону",
        "M13-scoring3": "Белую зону",
        "M13-scoring4": "Оранжевую зону",
        "M14-name": "M14 Отражение метеоритов",
        "M14-desc": "С западной части Free-line отправьте один или оба метеорита, чтобы они независимо от робота попали в ловушку для Метеоритов.",
        "M14-scoring1": "Метеориты касаются поля и находятся в Центральной секции ловушки для Метеоритов",
        "M14-scoring2": "Метеориты касаются поля и находятся в одной из Боковых секций:",
        "M14-error": "Невозможная комбинация.  Слишком много Метеоритов",
        "M15-name": "M15 Посадка Спускаемого аппарата",
        "M15-desc": "Доставьте спускаемый аппарат неповрежденным в одну из целей, или по крайней мере на Базу.",
        "M15-scoring1": "Спускаемый аппарат не поврежден и касается поля.",
        "M15-scoring2": "Спускаемый аппарат полностью находится:",
        "M15-scoring3": "Нигде",
        "M15-scoring4": "На базе",
        "M15-scoring5": "Северо-восточная область планеты",
        "M15-scoring6": "В Целевом круге",
        "penalties-name": "Штрафы",
        "penalties-desc": "Нельзя мешать работе Робота, за это вы получаете данный Штраф.",
        "penalties-scoring": "Количество штрафных карточек в юго-восточном треугольнике:"
    },
    "rtl": false
})
