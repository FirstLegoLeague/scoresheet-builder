{
    "title": "INTO ORBIT",
    "missions": [{
            "title": "اﻟﺴﻔﺮ ﻓﻲ اﻟﻔﻀﺎء M01",
            "description": "ابدا بدحرجة كل حمولة بشكل واضح على منحدر السفر في الفضاء. من أجل كل حمولة يجب ان تكون العربة مستقلة في الوقت الذي تصل فيه الى المسار الأول",
            "objectives": [{
                    "id": "M01_1",
                    "title": "تدحرجت حمولة العربةالى ما بعد اتصال المسار الأول",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M01_2",
                    "title": "تدحرجت حمولة المؤونة الى ما بعد اتصال المسار الأول",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M01_3",
                    "title": "تدحرجت حمولة الطاقم الى ما بعد اتصال المسارالأول",
                    "type": "yesno",
                    "default": "no"
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
            "title": "ﻣﺼﻔﻮﻓﺔ اﻷﻟﻮاح اﻟﺸﻤﺴﯿﺔ M02",
            "description": "يجب أن يتم توجيه الألواح الشمسية إما باتجاهك أو بعيدا عنك",
            "objectives": [{
                    "id": "M02_1",
                    "title": "كلا اللوحتين الشمسيتين موجهتان نحو الحقل نفسه",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M02_2",
                    "title": "لوحتك الشمسية موجهة نحو حقل الفريق الآخر",
                    "type": "yesno",
                    "default": "no"
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
            "title": "اﻟﻄﺒﺎﻋﺔ ﺛﻼﺛﯿﺔ اﻷﺑﻌﺎد M03",
            "description": "قم بإخراج الحجر ذي القياس 4*2 *من خلال وضع عينة حجر أرضي في الطابعة ثلاثية الأبعاد",
            "objectives": [{
                    "id": "M03_1",
                    "title": "الحجر ذي القياس 4*2 خارج الطابعة ثلاثية الأبعاد (فقط من خلال وضع عينة حجر أرضي في الطابعة ثلاثية الأبعاد )",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M03_2",
                    "title": "الحجر ذي القياس 4*2 موجود بشكل كامل في منطقة الشمال الشرقي للكوكب",
                    "type": "yesno",
                    "default": "no"
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
            "title": "ﻋﺒﻮر اﻟﺤﻔﺮ اﻟﺒﺮﻛﺎﻧﯿﺔ M04",
            "description": "الروبوت أو أية آلة وكيله يرسلها الروبوت يجب أن تعبر نموذج الحفر البركانية بشكل كلي، من خلال القيادة خلالها بشكل مباشر. ليس بالقرب منها وليس حولها",
            "objectives": [{
                    "id": "M04_1",
                    "title": "على جميع ميزات حمل الوزن الخاصة بمعدات العبور أن تعبر كليا بين البرجين",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M04_2",
                    "title": "على جميع معدات العبور ان تعبر من الشرق الى الغرب وبشكل كلي عبر البوابة الملساء",
                    "type": "yesno",
                    "default": "no"
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
            "title": "الاستخراج M05",
            "description": "على الروبوت جلب جميع العينات المركزية من نموذج الموقع الأساسي، ثم يكون لديه خيارات لما يقوم به لاحقا كما هو موصوف هنا أو في المهمة الثالثة",
            "objectives": [{
                    "id": "M05_1",
                    "title": "جميع العينات الأساسية الأربع لم تعد ملامسة للمحور الذي كان يثبتها في نموذج الموقع الأساسي",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M05_2",
                    "title": "عينة الغاز الأساسية ملامسة لأرضية الملعب وموجودة بالكاملة في المنطقة المستهدفة",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M05_3",
                    "title": "أو  عينة الغاز الأساسية موجودة بشكل كلي في القاعدة",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M05_4",
                    "title": "عينة الماء الأساسية مدعومة فقط بحجرة نمو الغذاء",
                    "type": "yesno",
                    "default": "no"
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
                    return new Error("موقع عينة الغاز الأساسية")
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
                    return new Error("موقع عينة الغاز الأساسية")
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
                    return new Error("موقع عينة الغاز الأساسية")
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
                    return new Error("موقع عينة الغاز الأساسية")
                }
            }]
        },
        {
            "title": "وﺣﺪات اﻟﻤﺤﻄﺎت اﻟﻔﻀﺎﺋﯿﺔ M06",
            "description": "يجب على الروبوت إزالة وإضافة الوحدات في ثقوب منفذ محطة محور السكن. الوحدات المدخلة يجب أن لا تلامس أي شيئا عدا محور السكن",
            "objectives": [{
                    "id": "M06_1",
                    "title": "وحدة القمع موجودة كليا في القاعدة",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M06_2",
                    "title": "وحدة الأنبوب موجودة في الجانب الغربي من محطة محور السكن",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M06_3",
                    "title": "وحدة منصة القيادة موجودة في الجانب الشرقي من محطة محور السكن",
                    "type": "yesno",
                    "default": "no"
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
            "title": "طﻮارئ اﻟﺴﯿﺮ ﻓﻲ اﻟﻔﻀﺎء M07",
            "description": "يجب على الروبوت ان يقوم بايصال جسم غيرهارد الى مقصورة معادلة الضغط",
            "objectives": [{
                "id": "M07",
                "title": "رائد الفضاء غيرهارد موجود في محطة محور السكن في مقصورة معادلة الضغط",
                "options": [{
                        "value": "none",
                        "title": "لا"
                    },
                    {
                        "value": "partially",
                        "title": "جزئيا"
                    },
                    {
                        "value": "completely",
                        "title": "كليا"
                    }
                ],
                "type": "enum",
                "default": "none"
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
            "title": "ﺗﺪرﯾﺒﺎت رﯾﺎﺿﯿﺔ M08",
            "description": "يجب على الروبوت أن يحرك باستمرار أحد أو كلتي مقابض آلة التدريب لجعل المؤشر يتقدم. اذا كان المؤشر يغطي بشكل جزئي نهاية حدود اللون البرتقالي او الرمادي فأختر ذلك اللون",
            "objectives": [{
                "id": "M08",
                "title": "مؤشر آلة التدريب موجود في : (فقط من خلال تحريك أحد المقابض او كليهما )",
                "options": [{
                        "value": "none",
                        "title": "لاشيء"
                    },
                    {
                        "value": "gray",
                        "title": "رمادي"
                    },
                    {
                        "value": "white",
                        "title": "أبيض"
                    },
                    {
                        "value": "orange",
                        "title": "برتقالي"
                    }
                ],
                "type": "enum",
                "default": "none"
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
            "title": "ﺗﻤﺮﯾﻦ اﻟﻘﻮة M09",
            "description": "يجب على الروبوت أن يرفع محور آلة تمرين القوة الى الارتفاع المطلوب للحصول على النقاط",
            "objectives": [{
                "id": "M09",
                "title": "محور آلة تمرين القوة مرفوع بحيث يظهر الثقب الرابع للمحور العمودي على الأقل بشكل جزئي",
                "type": "yesno",
                "default": "no"
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
            "title": "إﻧﺘﺎج اﻟﻐﺬاء M10",
            "description": "حرك مقبض الدفع المسافة المناسبة بالسرعة المناسبة لتدخل الى المجال الأخضر المطلوب لاحتساب النقاط",
            "objectives": [{
                "id": "M10",
                "title": "يتم اسقاط الوزن الرمادي بعد اللون الأخضر، ولكن قبل الأسمر (من خلال تحريك مقبض الدفع فقط )",
                "type": "yesno",
                "default": "no"
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
            "title": "ﺳﺮﻋﺔ اﻟﮭﺮوب M11",
            "description": "يجب على الروبوت إصابة لوحة الإطلاق بقوة كافية لمنع المركبة الفضائية من السقوط للأسفل",
            "objectives": [{
                "id": "M11",
                "title": "المركبة الفضائية في القمة (من خلال الضغط أو النقر على لوحة الإطلاق)",
                "type": "yesno",
                "default": "no"
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
            "title": "ﻣﺪارات اﻟﻘﻤﺮ اﻟﺼﻨﺎﻋﻲ M12",
            "description": "يجب أن يحرك الروبوت قمرا صناعيا أو أكثر الى المدار الخارجي",
            "objectives": [{
                "id": "M12",
                "title": "القمر الصناعي على أو فوق المنطقة بين خطي المدار الخارجي",
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
            "title": "اﻟﻤﺮﺻﺪ M13",
            "description": "قم بتدوير المرصد الى الاتجاه الدقيق. اذا كان المؤشر يغطي بشكل جزئي نهاية حدود اللون الرمادي أو البرتقالي فقم باختيار ذلك اللون",
            "objectives": [{
                "id": "M13",
                "title": "مؤشر المرصد موجود في",
                "options": [{
                        "value": "none",
                        "title": "لا شيء"
                    },
                    {
                        "value": "gray",
                        "title": "رمادي"
                    },
                    {
                        "value": "white",
                        "title": "أبيض"
                    },
                    {
                        "value": "orange",
                        "title": "برتقالي"
                    }
                ],
                "type": "enum",
                "default": "none"
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
            "title": "اﻧﺤﺮف ﻣﺴﺎر اﻟﻨﯿﺎزك M14",
            "description": "من غرب الخط الحر قم بإرسال أحد النيزكين أو كلاهما بشكل مستقل الى الماسك النيزكي",
            "objectives": [{
                    "id": "M14_1",
                    "title": "النيازك تلامس أرضية الملعب وموجودة في القطاع المركزي",
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
                    "title": "النيازك تلامس أرضية الملعب وموجودة في أحد القطاعات الجانبية",
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
                    return new Error("تركيبة مستحيلة ، الكثير من النيازك")
                }
                if (M14_1 === '2' && M14_2 === '0') {
                    return 24
                }
                if (M14_1 === '2' && M14_2 === '1') {
                    return new Error("تركيبة مستحيلة ، الكثير من النيازك")
                }
                if (M14_1 === '2' && M14_2 === '2') {
                    return new Error("تركيبة مستحيلة ، الكثير من النيازك")
                }
            }]
        },
        {
            "title": "هبوط المسبار M15",
            "description": "قم بجلب المسبار الى أحد اهدافه بشكل سليم أو على الأقل قم بجلبه الى القاعدة",
            "objectives": [{
                    "id": "M15_1",
                    "title": "المسبار سليم وملامس لأرضية الملعب",
                    "type": "yesno",
                    "default": "no"
                },
                {
                    "id": "M15_2",
                    "title": "المسبار كليا في :",
                    "options": [{
                            "value": "no",
                            "title": "لاشيء"
                        },
                        {
                            "value": "base",
                            "title": "القاعدة"
                        },
                        {
                            "value": "planet",
                            "title": "منطقة الشمال الشرقي للكوكب"
                        },
                        {
                            "value": "circle",
                            "title": "الدائرة المستهدفة للمسبار"
                        }
                    ],
                    "type": "enum",
                    "default": "no"
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
            "title": "العقوبات",
            "description": "يسمح لك بإنقاذ رجلك الآلي بيدك لكن هذا يتسبب لك بهذه العقوبة",
            "objectives": [{
                "id": "penalties",
                "title": "عدد اقراص العقوبات الموجودة في الزاوية الجنوبية الشرقية",
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
        "yes": "نعم",
        "no": "لا",
        "M01-name": "اﻟﺴﻔﺮ ﻓﻲ اﻟﻔﻀﺎء M01",
        "M01-desc": "ابدا بدحرجة كل حمولة بشكل واضح على منحدر السفر في الفضاء. من أجل كل حمولة يجب ان تكون العربة مستقلة في الوقت الذي تصل فيه الى المسار الأول",
        "M01-scoring1": "تدحرجت حمولة العربةالى ما بعد اتصال المسار الأول",
        "M01-scoring2": "تدحرجت حمولة المؤونة الى ما بعد اتصال المسار الأول",
        "M01-scoring3": "تدحرجت حمولة الطاقم الى ما بعد اتصال المسارالأول",
        "M02-name": "ﻣﺼﻔﻮﻓﺔ اﻷﻟﻮاح اﻟﺸﻤﺴﯿﺔ M02",
        "M02-desc": "يجب أن يتم توجيه الألواح الشمسية إما باتجاهك أو بعيدا عنك",
        "M02-scoring1": "كلا اللوحتين الشمسيتين موجهتان نحو الحقل نفسه",
        "M02-scoring2": "لوحتك الشمسية موجهة نحو حقل الفريق الآخر",
        "M03-name": "اﻟﻄﺒﺎﻋﺔ ﺛﻼﺛﯿﺔ اﻷﺑﻌﺎد M03",
        "M03-desc": "قم بإخراج الحجر ذي القياس 4*2 *من خلال وضع عينة حجر أرضي في الطابعة ثلاثية الأبعاد",
        "M03-scoring1": "الحجر ذي القياس 4*2 خارج الطابعة ثلاثية الأبعاد (فقط من خلال وضع عينة حجر أرضي في الطابعة ثلاثية الأبعاد )",
        "M03-scoring2": "الحجر ذي القياس 4*2 موجود بشكل كامل في منطقة الشمال الشرقي للكوكب",
        "M04-name": "ﻋﺒﻮر اﻟﺤﻔﺮ اﻟﺒﺮﻛﺎﻧﯿﺔ M04",
        "M04-desc": "الروبوت أو أية آلة وكيله يرسلها الروبوت يجب أن تعبر نموذج الحفر البركانية بشكل كلي، من خلال القيادة خلالها بشكل مباشر. ليس بالقرب منها وليس حولها",
        "M04-scoring1": "على جميع ميزات حمل الوزن الخاصة بمعدات العبور أن تعبر كليا بين البرجين",
        "M04-scoring2": "على جميع معدات العبور ان تعبر من الشرق الى الغرب وبشكل كلي عبر البوابة الملساء",
        "M05-name": "الاستخراج M05",
        "M05-desc": "على الروبوت جلب جميع العينات المركزية من نموذج الموقع الأساسي، ثم يكون لديه خيارات لما يقوم به لاحقا كما هو موصوف هنا أو في المهمة الثالثة",
        "M05-scoring1": "جميع العينات الأساسية الأربع لم تعد ملامسة للمحور الذي كان يثبتها في نموذج الموقع الأساسي",
        "M05-scoring2": "عينة الغاز الأساسية ملامسة لأرضية الملعب وموجودة بالكاملة في المنطقة المستهدفة",
        "M05-scoring3": "أو  عينة الغاز الأساسية موجودة بشكل كلي في القاعدة",
        "M05-scoring4": "عينة الماء الأساسية مدعومة فقط بحجرة نمو الغذاء",
        "M05-error": "موقع عينة الغاز الأساسية",
        "M06-name": "وﺣﺪات اﻟﻤﺤﻄﺎت اﻟﻔﻀﺎﺋﯿﺔ M06",
        "M06-desc": "يجب على الروبوت إزالة وإضافة الوحدات في ثقوب منفذ محطة محور السكن. الوحدات المدخلة يجب أن لا تلامس أي شيئا عدا محور السكن",
        "M06-scoring1": "وحدة القمع موجودة كليا في القاعدة",
        "M06-scoring2": "وحدة الأنبوب موجودة في الجانب الغربي من محطة محور السكن",
        "M06-scoring3": "وحدة منصة القيادة موجودة في الجانب الشرقي من محطة محور السكن",
        "M07-name": "طﻮارئ اﻟﺴﯿﺮ ﻓﻲ اﻟﻔﻀﺎء M07",
        "M07-desc": "يجب على الروبوت ان يقوم بايصال جسم غيرهارد الى مقصورة معادلة الضغط",
        "M07-scoring": "رائد الفضاء غيرهارد موجود في محطة محور السكن في مقصورة معادلة الضغط",
        "M07-scoring1": "لا",
        "M07-scoring2": "جزئيا",
        "M07-scoring3": "كليا",
        "M08-name": "ﺗﺪرﯾﺒﺎت رﯾﺎﺿﯿﺔ M08",
        "M08-desc": "يجب على الروبوت أن يحرك باستمرار أحد أو كلتي مقابض آلة التدريب لجعل المؤشر يتقدم. اذا كان المؤشر يغطي بشكل جزئي نهاية حدود اللون البرتقالي او الرمادي فأختر ذلك اللون",
        "M08-scoring": "مؤشر آلة التدريب موجود في : (فقط من خلال تحريك أحد المقابض او كليهما )",
        "M08-scoring1": "لاشيء",
        "M08-scoring2": "رمادي",
        "M08-scoring3": "أبيض",
        "M08-scoring4": "برتقالي",
        "M09-name": "ﺗﻤﺮﯾﻦ اﻟﻘﻮة M09",
        "M09-desc": "يجب على الروبوت أن يرفع محور آلة تمرين القوة الى الارتفاع المطلوب للحصول على النقاط",
        "M09-scoring": "محور آلة تمرين القوة مرفوع بحيث يظهر الثقب الرابع للمحور العمودي على الأقل بشكل جزئي",
        "M10-name": "إﻧﺘﺎج اﻟﻐﺬاء M10",
        "M10-desc": "حرك مقبض الدفع المسافة المناسبة بالسرعة المناسبة لتدخل الى المجال الأخضر المطلوب لاحتساب النقاط",
        "M10-scoring": "يتم اسقاط الوزن الرمادي بعد اللون الأخضر، ولكن قبل الأسمر (من خلال تحريك مقبض الدفع فقط )",
        "M11-name": "ﺳﺮﻋﺔ اﻟﮭﺮوب M11",
        "M11-desc": "يجب على الروبوت إصابة لوحة الإطلاق بقوة كافية لمنع المركبة الفضائية من السقوط للأسفل",
        "M11-scoring": "المركبة الفضائية في القمة (من خلال الضغط أو النقر على لوحة الإطلاق)",
        "M12-name": "ﻣﺪارات اﻟﻘﻤﺮ اﻟﺼﻨﺎﻋﻲ M12",
        "M12-desc": "يجب أن يحرك الروبوت قمرا صناعيا أو أكثر الى المدار الخارجي",
        "M12-scoring": "القمر الصناعي على أو فوق المنطقة بين خطي المدار الخارجي",
        "M13-name": "اﻟﻤﺮﺻﺪ M13",
        "M13-desc": "قم بتدوير المرصد الى الاتجاه الدقيق. اذا كان المؤشر يغطي بشكل جزئي نهاية حدود اللون الرمادي أو البرتقالي فقم باختيار ذلك اللون",
        "M13-scoring": "مؤشر المرصد موجود في",
        "M13-scoring1": "لا شيء",
        "M13-scoring2": "رمادي",
        "M13-scoring3": "أبيض",
        "M13-scoring4": "برتقالي",
        "M14-name": "اﻧﺤﺮف ﻣﺴﺎر اﻟﻨﯿﺎزك M14",
        "M14-desc": "من غرب الخط الحر قم بإرسال أحد النيزكين أو كلاهما بشكل مستقل الى الماسك النيزكي",
        "M14-scoring1": "النيازك تلامس أرضية الملعب وموجودة في القطاع المركزي",
        "M14-scoring2": "النيازك تلامس أرضية الملعب وموجودة في أحد القطاعات الجانبية",
        "M14-error": "تركيبة مستحيلة ، الكثير من النيازك",
        "M15-name": "هبوط المسبار M15",
        "M15-desc": "قم بجلب المسبار الى أحد اهدافه بشكل سليم أو على الأقل قم بجلبه الى القاعدة",
        "M15-scoring1": "المسبار سليم وملامس لأرضية الملعب",
        "M15-scoring2": "المسبار كليا في :",
        "M15-scoring3": "لاشيء",
        "M15-scoring4": "القاعدة",
        "M15-scoring5": "منطقة الشمال الشرقي للكوكب",
        "M15-scoring6": "الدائرة المستهدفة للمسبار",
        "penalties-name": "العقوبات",
        "penalties-desc": "يسمح لك بإنقاذ رجلك الآلي بيدك لكن هذا يتسبب لك بهذه العقوبة",
        "penalties-scoring": "عدد اقراص العقوبات الموجودة في الزاوية الجنوبية الشرقية"
    },
    "rtl": true
}
