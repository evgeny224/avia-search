const SET_TRAVELS = "SET_TRAVELS";
const SET_PRICE_FROM = "SET_PRICE_FROM";
const SET_PRICE_UP = "SET_PRICE_UP";


    let initialState = {
        flights :
            [
               {
                  hasExtendedFare : false,
                  flight :
                     {
                        carrier :
                           {
                              uid : "AF",
                              caption : "Air France",
                              airlineCode : "AF"
                           },
                        price :
                           {
                              total :
                                 {
                                    "amount" : "105368",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              totalFeeAndTaxes :
                                 {
                                    "amount" : "11663.00",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              rates :
                                 {
                                    totalUsd :
                                       {
                                          "amount" : "1308.92",
                                          "currencyCode" : "EUR"
                                       },
                                    "totalEur" :
                                       {
                                          "amount" : "1484.06",
                                          "currencyCode" : "USD"
                                       }
                                 },
                              "passengerPrices" :
                                 [
                                    {
                                       "total" :
                                          {
                                             "amount" : "105368.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerType" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          },
                                       "singlePassengerTotal" :
                                          {
                                             "amount" : "105368.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerCount" : 1,
                                       "tariff" :
                                          {
                                             "amount" : "93705.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "feeAndTaxes" :
                                          {
                                             "amount" : "11663.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          }
                                    }
                                 ]
                           },
                        "servicesStatuses" :
                           {
                              "baggage" :
                                 {
                                    "uid" : "FREE",
                                    "caption" : "Бесплатно"
                                 },
                              "exchange" :
                                 {
                                    "uid" : "FREE",
                                    "caption" : "Бесплатно"
                                 },
                              "refund" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 }
                           },
                        "legs" :
                           [
                              {
                                 "duration" : 735,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "I",
                                          "classOfService" :
                                             {
                                                "uid" : "BUSINESS",
                                                "caption" : "Бизнес"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "321",
                                                "caption" : "АЭРОБУС321"
                                             },
                                          "travelDuration" : 245,
                                          "arrivalCity" :
                                             {
                                                "uid" : "PAR",
                                                "caption" : "ПАРИЖ"
                                             },
                                          "arrivalDate" : "2020-08-18T09:15:00",
                                          "flightNumber" : "1655",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-18T06:10:00",
                                          "stops" : 1,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "BUSINESS FLEX",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "IS50AENB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 2,
                                                            "nil" : false,
                                                            "unit" : "шт"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "AF",
                                                "caption" : "Air France",
                                                "airlineCode" : "AF"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "CDG",
                                                "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "I",
                                          "classOfService" :
                                             {
                                                "uid" : "BUSINESS",
                                                "caption" : "Бизнес"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "CDG",
                                                "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "PAR",
                                                "caption" : "ПАРИЖ"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "320",
                                                "caption" : "А320"
                                             },
                                          "travelDuration" : 85,
                                          "arrivalCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "arrivalDate" : "2020-08-18T16:25:00",
                                          "flightNumber" : "1280",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-18T16:00:00",
                                          "stops" : 1,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "BUSINESS FLEX",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "IS50AENB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 2,
                                                            "nil" : false,
                                                            "unit" : "шт"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "AF",
                                                "caption" : "Air France",
                                                "airlineCode" : "AF"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             }
                                       }
                                    ]
                              },
                              {
                                 "duration" : 1400,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "I",
                                          "classOfService" :
                                             {
                                                "uid" : "BUSINESS",
                                                "caption" : "Бизнес"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "319",
                                                "caption" : "AirbusA319"
                                             },
                                          "travelDuration" : 80,
                                          "arrivalCity" :
                                             {
                                                "uid" : "PAR",
                                                "caption" : "ПАРИЖ"
                                             },
                                          "arrivalDate" : "2020-08-19T19:55:00",
                                          "flightNumber" : "1281",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T17:35:00",
                                          "stops" : 1,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "BUSINESS FLEX",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "IS50AENB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 2,
                                                            "nil" : false,
                                                            "unit" : "шт"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "AF",
                                                "caption" : "Air France",
                                                "airlineCode" : "AF"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "CDG",
                                                "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "I",
                                          "classOfService" :
                                             {
                                                "uid" : "BUSINESS",
                                                "caption" : "Бизнес"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "CDG",
                                                "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "PAR",
                                                "caption" : "ПАРИЖ"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "321",
                                                "caption" : "АЭРОБУС321"
                                             },
                                          "travelDuration" : 240,
                                          "arrivalCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "arrivalDate" : "2020-08-20T18:55:00",
                                          "flightNumber" : "4898",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-20T13:55:00",
                                          "stops" : 1,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "BUSINESS FLEX",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "IS50AENB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 2,
                                                            "nil" : false,
                                                            "unit" : "шт"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "AF",
                                                "caption" : "Air France",
                                                "airlineCode" : "AF"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             },
                                          "operatingAirline" :
                                             {
                                                "uid" : "SU1",
                                                "caption" : "Аэрофлот - российские авиалинии",
                                                "airlineCode" : "SU"
                                             }
                                       }
                                    ]
                              }
                           ],
                        "exchange" :
                           {
                              "ADULT" :
                                 {
                                    "exchangeableBeforeDeparture" : true,
                                    "exchangeAfterDeparture" :
                                       {
                                          "amount" : "0",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeBeforeDeparture" :
                                       {
                                          "amount" : "0",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeableAfterDeparture" : true
                                 }
                           },
                        "isTripartiteContractDiscountApplied" : false,
                        "international" : false,
                        "seats" :
                           [
                              {
                                 "count" : 1,
                                 "type" :
                                    {
                                       "uid" : "ADULT",
                                       "caption" : "Взрослый"
                                    }
                              }
                           ],
                        "refund" :
                           {
                              "ADULT" :
                                 {
                                    "refundableBeforeDeparture" : false,
                                    "refundableAfterDeparture" : false
                                 }
                           }
                     },
                },
                {
                    "hasExtendedFare" : false,
                    "flight" :
                       {
                          "carrier" :
                             {
                                "uid" : "KL",
                                "caption" : "KLM",
                                "airlineCode" : "KL"
                             },
                          "price" :
                             {
                                "total" :
                                   {
                                      "amount" : "36491",
                                      "currency" : "руб.",
                                      "currencyCode" : "RUB"
                                   },
                                "totalFeeAndTaxes" :
                                   {
                                      "amount" : "10326.00",
                                      "currency" : "руб.",
                                      "currencyCode" : "RUB"
                                   },
                                "rates" :
                                   {
                                      "totalUsd" :
                                         {
                                            "amount" : "453.30",
                                            "currencyCode" : "EUR"
                                         },
                                      "totalEur" :
                                         {
                                            "amount" : "513.96",
                                            "currencyCode" : "USD"
                                         }
                                   },
                                "passengerPrices" :
                                   [
                                      {
                                         "total" :
                                            {
                                               "amount" : "36491.00",
                                               "currency" : "руб.",
                                               "currencyCode" : "RUB"
                                            },
                                         "passengerType" :
                                            {
                                               "uid" : "ADULT",
                                               "caption" : "Взрослый"
                                            },
                                         "singlePassengerTotal" :
                                            {
                                               "amount" : "36491.00",
                                               "currency" : "руб.",
                                               "currencyCode" : "RUB"
                                            },
                                         "passengerCount" : 1,
                                         "tariff" :
                                            {
                                               "amount" : "26165.00",
                                               "currency" : "руб.",
                                               "currencyCode" : "RUB"
                                            },
                                         "feeAndTaxes" :
                                            {
                                               "amount" : "10326.00",
                                               "currency" : "руб.",
                                               "currencyCode" : "RUB"
                                            }
                                      }
                                   ]
                             },
                          "servicesStatuses" :
                             {
                                "baggage" :
                                   {
                                      "uid" : "OFF",
                                      "caption" : "Недоступно"
                                   },
                                "exchange" :
                                   {
                                      "uid" : "FREE",
                                      "caption" : "Бесплатно"
                                   },
                                "refund" :
                                   {
                                      "uid" : "OFF",
                                      "caption" : "Недоступно"
                                   }
                             },
                          "legs" :
                             [
                                {
                                   "duration" : 355,
                                   "segments" :
                                      [
                                         {
                                            "classOfServiceCode" : "T",
                                            "classOfService" :
                                               {
                                                  "uid" : "ECONOMY",
                                                  "caption" : "Эконом"
                                               },
                                            "departureAirport" :
                                               {
                                                  "uid" : "SVO",
                                                  "caption" : "ШЕРЕМЕТЬЕВО"
                                               },
                                            "departureCity" :
                                               {
                                                  "uid" : "MOW",
                                                  "caption" : "Москва"
                                               },
                                            "aircraft" :
                                               {
                                                  "uid" : "73В",
                                                  "caption" : "Боинг 737-700 (винглетс) Пассажирский/BBJ1"
                                               },
                                            "travelDuration" : 210,
                                            "arrivalCity" :
                                               {
                                                  "uid" : "AMS",
                                                  "caption" : "АМСТЕРДАМ"
                                               },
                                            "arrivalDate" : "2020-08-18T19:30:00",
                                            "flightNumber" : "904",
                                            "techStopInfos" :
                                               [
                                               ],
                                            "departureDate" : "2020-08-18T17:00:00",
                                            "stops" : 1,
                                            "servicesDetails" :
                                               {
                                                  "freeCabinLuggage" :
                                                     {
                                                     },
                                                  "paidCabinLuggage" :
                                                     {
                                                     },
                                                  "tariffName" : "ECONOMY LIGHT2",
                                                  "fareBasis" :
                                                     {
                                                        "ADULT" : "TS55ABLG"
                                                     },
                                                  "freeLuggage" :
                                                     {
                                                        "ADULT" :
                                                           {
                                                              "nil" : true
                                                           }
                                                     },
                                                  "paidLuggage" :
                                                     {
                                                     }
                                               },
                                            "airline" :
                                               {
                                                  "uid" : "KL",
                                                  "caption" : "KLM",
                                                  "airlineCode" : "KL"
                                               },
                                            "starting" : true,
                                            "arrivalAirport" :
                                               {
                                                  "uid" : "AMS",
                                                  "caption" : "Схипхол"
                                               }
                                         },
                                         {
                                            "classOfServiceCode" : "T",
                                            "classOfService" :
                                               {
                                                  "uid" : "ECONOMY",
                                                  "caption" : "Эконом"
                                               },
                                            "departureAirport" :
                                               {
                                                  "uid" : "AMS",
                                                  "caption" : "Схипхол"
                                               },
                                            "departureCity" :
                                               {
                                                  "uid" : "AMS",
                                                  "caption" : "АМСТЕРДАМ"
                                               },
                                            "aircraft" :
                                               {
                                                  "uid" : "73Х",
                                                  "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                               },
                                            "travelDuration" : 85,
                                            "arrivalCity" :
                                               {
                                                  "uid" : "LON",
                                                  "caption" : "ЛОНДОН"
                                               },
                                            "arrivalDate" : "2020-08-18T20:55:00",
                                            "flightNumber" : "1033",
                                            "techStopInfos" :
                                               [
                                               ],
                                            "departureDate" : "2020-08-18T20:30:00",
                                            "stops" : 0,
                                            "servicesDetails" :
                                               {
                                                  "freeCabinLuggage" :
                                                     {
                                                     },
                                                  "paidCabinLuggage" :
                                                     {
                                                     },
                                                  "tariffName" : "ECONOMY LIGHT2",
                                                  "fareBasis" :
                                                     {
                                                        "ADULT" : "TS55ABLG"
                                                     },
                                                  "freeLuggage" :
                                                     {
                                                        "ADULT" :
                                                           {
                                                              "nil" : true
                                                           }
                                                     },
                                                  "paidLuggage" :
                                                     {
                                                     }
                                               },
                                            "airline" :
                                               {
                                                  "uid" : "KL",
                                                  "caption" : "KLM",
                                                  "airlineCode" : "KL"
                                               },
                                            "starting" : false,
                                            "arrivalAirport" :
                                               {
                                                  "uid" : "LHR",
                                                  "caption" : "Лондон, Хитроу"
                                               }
                                         }
                                      ]
                                },
                                {
                                   "duration" : 1195,
                                   "segments" :
                                      [
                                         {
                                            "classOfServiceCode" : "L",
                                            "classOfService" :
                                               {
                                                  "uid" : "ECONOMY",
                                                  "caption" : "Эконом"
                                               },
                                            "departureAirport" :
                                               {
                                                  "uid" : "LHR",
                                                  "caption" : "Лондон, Хитроу"
                                               },
                                            "departureCity" :
                                               {
                                                  "uid" : "LON",
                                                  "caption" : "ЛОНДОН"
                                               },
                                            "aircraft" :
                                               {
                                                  "uid" : "319",
                                                  "caption" : "AirbusA319"
                                               },
                                            "travelDuration" : 75,
                                            "arrivalCity" :
                                               {
                                                  "uid" : "PAR",
                                                  "caption" : "ПАРИЖ"
                                               },
                                            "arrivalDate" : "2020-08-19T08:35:00",
                                            "flightNumber" : "1081",
                                            "techStopInfos" :
                                               [
                                               ],
                                            "departureDate" : "2020-08-19T06:20:00",
                                            "stops" : 0,
                                            "servicesDetails" :
                                               {
                                                  "freeCabinLuggage" :
                                                     {
                                                     },
                                                  "paidCabinLuggage" :
                                                     {
                                                     },
                                                  "tariffName" : "ECONOMY LIGHT2",
                                                  "fareBasis" :
                                                     {
                                                        "ADULT" : "LS50ABLG"
                                                     },
                                                  "freeLuggage" :
                                                     {
                                                        "ADULT" :
                                                           {
                                                              "nil" : true
                                                           }
                                                     },
                                                  "paidLuggage" :
                                                     {
                                                     }
                                               },
                                            "airline" :
                                               {
                                                  "uid" : "AF",
                                                  "caption" : "Air France",
                                                  "airlineCode" : "AF"
                                               },
                                            "starting" : true,
                                            "arrivalAirport" :
                                               {
                                                  "uid" : "CDG",
                                                  "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                               }
                                         },
                                         {
                                            "classOfServiceCode" : "L",
                                            "classOfService" :
                                               {
                                                  "uid" : "ECONOMY",
                                                  "caption" : "Эконом"
                                               },
                                            "departureAirport" :
                                               {
                                                  "uid" : "CDG",
                                                  "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                               },
                                            "departureCity" :
                                               {
                                                  "uid" : "PAR",
                                                  "caption" : "ПАРИЖ"
                                               },
                                            "aircraft" :
                                               {
                                                  "uid" : "321",
                                                  "caption" : "АЭРОБУС321"
                                               },
                                            "travelDuration" : 220,
                                            "arrivalCity" :
                                               {
                                                  "uid" : "MOW",
                                                  "caption" : "Москва"
                                               },
                                            "arrivalDate" : "2020-08-20T04:15:00",
                                            "flightNumber" : "4860",
                                            "techStopInfos" :
                                               [
                                               ],
                                            "departureDate" : "2020-08-19T23:35:00",
                                            "stops" : 0,
                                            "servicesDetails" :
                                               {
                                                  "freeCabinLuggage" :
                                                     {
                                                     },
                                                  "paidCabinLuggage" :
                                                     {
                                                     },
                                                  "tariffName" : "ECONOMY LIGHT2",
                                                  "fareBasis" :
                                                     {
                                                        "ADULT" : "LS50ABLG"
                                                     },
                                                  "freeLuggage" :
                                                     {
                                                        "ADULT" :
                                                           {
                                                              "nil" : true
                                                           }
                                                     },
                                                  "paidLuggage" :
                                                     {
                                                     }
                                               },
                                            "airline" :
                                               {
                                                  "uid" : "AF",
                                                  "caption" : "Air France",
                                                  "airlineCode" : "AF"
                                               },
                                            "starting" : false,
                                            "arrivalAirport" :
                                               {
                                                  "uid" : "SVO",
                                                  "caption" : "ШЕРЕМЕТЬЕВО"
                                               },
                                            "operatingAirline" :
                                               {
                                                  "uid" : "SU1",
                                                  "caption" : "Аэрофлот - российские авиалинии",
                                                  "airlineCode" : "SU"
                                               }
                                         }
                                      ]
                                }
                             ],
                          "exchange" :
                             {
                                "ADULT" :
                                   {
                                      "exchangeableBeforeDeparture" : true,
                                      "exchangeAfterDeparture" :
                                         {
                                            "amount" : "0",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "exchangeBeforeDeparture" :
                                         {
                                            "amount" : "0",
                                            "currency" : "руб.",
                                            "currencyCode" : "RUB"
                                         },
                                      "exchangeableAfterDeparture" : true
                                   }
                             },
                          "isTripartiteContractDiscountApplied" : false,
                          "international" : false,
                          "seats" :
                             [
                                {
                                   "count" : 1,
                                   "type" :
                                      {
                                         "uid" : "ADULT",
                                         "caption" : "Взрослый"
                                      }
                                }
                             ],
                          "refund" :
                             {
                                "ADULT" :
                                   {
                                      "refundableBeforeDeparture" : false,
                                      "refundableAfterDeparture" : false
                                   }
                             }
                       },
                    },
                    {
                        "hasExtendedFare" : false,
                        "flight" :
                           {
                              "carrier" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "price" :
                                 {
                                    "total" :
                                       {
                                          "amount" : "104598",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "totalFeeAndTaxes" :
                                       {
                                          "amount" : "10893.00",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "rates" :
                                       {
                                          "totalUsd" :
                                             {
                                                "amount" : "1299.35",
                                                "currencyCode" : "EUR"
                                             },
                                          "totalEur" :
                                             {
                                                "amount" : "1473.21",
                                                "currencyCode" : "USD"
                                             }
                                       },
                                    "passengerPrices" :
                                       [
                                          {
                                             "total" :
                                                {
                                                   "amount" : "104598.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "passengerType" :
                                                {
                                                   "uid" : "ADULT",
                                                   "caption" : "Взрослый"
                                                },
                                             "singlePassengerTotal" :
                                                {
                                                   "amount" : "104598.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "passengerCount" : 1,
                                             "tariff" :
                                                {
                                                   "amount" : "93705.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "feeAndTaxes" :
                                                {
                                                   "amount" : "10893.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                }
                                          }
                                       ]
                                 },
                              "servicesStatuses" :
                                 {
                                    "baggage" :
                                       {
                                          "uid" : "FREE",
                                          "caption" : "Бесплатно"
                                       },
                                    "exchange" :
                                       {
                                          "uid" : "FREE",
                                          "caption" : "Бесплатно"
                                       },
                                    "refund" :
                                       {
                                          "uid" : "OFF",
                                          "caption" : "Недоступно"
                                       }
                                 },
                              "legs" :
                                 [
                                    {
                                       "duration" : 895,
                                       "segments" :
                                          [
                                             {
                                                "classOfServiceCode" : "I",
                                                "classOfService" :
                                                   {
                                                      "uid" : "BUSINESS",
                                                      "caption" : "Бизнес"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "SVO",
                                                      "caption" : "ШЕРЕМЕТЬЕВО"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "MOW",
                                                      "caption" : "Москва"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "320",
                                                      "caption" : "А320"
                                                   },
                                                "travelDuration" : 240,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "PAR",
                                                      "caption" : "ПАРИЖ"
                                                   },
                                                "arrivalDate" : "2020-08-18T22:00:00",
                                                "flightNumber" : "1455",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-18T19:00:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "BUSINESS FLEX",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "IS50AENB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "pieces" : 2,
                                                                  "nil" : false,
                                                                  "unit" : "шт"
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "AF",
                                                      "caption" : "Air France",
                                                      "airlineCode" : "AF"
                                                   },
                                                "starting" : true,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "CDG",
                                                      "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                                   }
                                             },
                                             {
                                                "classOfServiceCode" : "I",
                                                "classOfService" :
                                                   {
                                                      "uid" : "BUSINESS",
                                                      "caption" : "Бизнес"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "CDG",
                                                      "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "PAR",
                                                      "caption" : "ПАРИЖ"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "320",
                                                      "caption" : "А320"
                                                   },
                                                "travelDuration" : 85,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "LON",
                                                      "caption" : "ЛОНДОН"
                                                   },
                                                "arrivalDate" : "2020-08-19T07:55:00",
                                                "flightNumber" : "1680",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-19T07:30:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "BUSINESS FLEX",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "IS50AENB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "pieces" : 2,
                                                                  "nil" : false,
                                                                  "unit" : "шт"
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "AF",
                                                      "caption" : "Air France",
                                                      "airlineCode" : "AF"
                                                   },
                                                "starting" : false,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "LHR",
                                                      "caption" : "Лондон, Хитроу"
                                                   }
                                             }
                                          ]
                                    },
                                    {
                                       "duration" : 520,
                                       "segments" :
                                          [
                                             {
                                                "classOfServiceCode" : "I",
                                                "classOfService" :
                                                   {
                                                      "uid" : "BUSINESS",
                                                      "caption" : "Бизнес"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "LHR",
                                                      "caption" : "Лондон, Хитроу"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "LON",
                                                      "caption" : "ЛОНДОН"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "319",
                                                      "caption" : "AirbusA319"
                                                   },
                                                "travelDuration" : 80,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "PAR",
                                                      "caption" : "ПАРИЖ"
                                                   },
                                                "arrivalDate" : "2020-08-19T19:55:00",
                                                "flightNumber" : "1281",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-19T17:35:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "BUSINESS FLEX",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "IS50AENB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "pieces" : 2,
                                                                  "nil" : false,
                                                                  "unit" : "шт"
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "AF",
                                                      "caption" : "Air France",
                                                      "airlineCode" : "AF"
                                                   },
                                                "starting" : true,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "CDG",
                                                      "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                                   }
                                             },
                                             {
                                                "classOfServiceCode" : "I",
                                                "classOfService" :
                                                   {
                                                      "uid" : "BUSINESS",
                                                      "caption" : "Бизнес"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "CDG",
                                                      "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "PAR",
                                                      "caption" : "ПАРИЖ"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "321",
                                                      "caption" : "АЭРОБУС321"
                                                   },
                                                "travelDuration" : 220,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "MOW",
                                                      "caption" : "Москва"
                                                   },
                                                "arrivalDate" : "2020-08-20T04:15:00",
                                                "flightNumber" : "4860",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-19T23:35:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "BUSINESS FLEX",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "IS50AENB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "pieces" : 2,
                                                                  "nil" : false,
                                                                  "unit" : "шт"
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "AF",
                                                      "caption" : "Air France",
                                                      "airlineCode" : "AF"
                                                   },
                                                "starting" : false,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "SVO",
                                                      "caption" : "ШЕРЕМЕТЬЕВО"
                                                   },
                                                "operatingAirline" :
                                                   {
                                                      "uid" : "SU1",
                                                      "caption" : "Аэрофлот - российские авиалинии",
                                                      "airlineCode" : "SU"
                                                   }
                                             }
                                          ]
                                    }
                                 ],
                              "exchange" :
                                 {
                                    "ADULT" :
                                       {
                                          "exchangeableBeforeDeparture" : true,
                                          "exchangeAfterDeparture" :
                                             {
                                                "amount" : "0",
                                                "currency" : "руб.",
                                                "currencyCode" : "RUB"
                                             },
                                          "exchangeBeforeDeparture" :
                                             {
                                                "amount" : "0",
                                                "currency" : "руб.",
                                                "currencyCode" : "RUB"
                                             },
                                          "exchangeableAfterDeparture" : true
                                       }
                                 },
                              "isTripartiteContractDiscountApplied" : false,
                              "international" : false,
                              "seats" :
                                 [
                                    {
                                       "count" : 1,
                                       "type" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          }
                                    }
                                 ],
                              "refund" :
                                 {
                                    "ADULT" :
                                       {
                                          "refundableBeforeDeparture" : false,
                                          "refundableAfterDeparture" : false
                                       }
                                 }
                           },
                    },
                    {
                        "hasExtendedFare" : false,
                        "flight" :
                           {
                              "carrier" :
                                 {
                                    "uid" : "SU1",
                                    "caption" : "Аэрофлот - российские авиалинии",
                                    "airlineCode" : "SU"
                                 },
                              "price" :
                                 {
                                    "total" :
                                       {
                                          "amount" : "33560",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "totalFeeAndTaxes" :
                                       {
                                          "amount" : "15850.00",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "rates" :
                                       {
                                          "totalUsd" :
                                             {
                                                "amount" : "416.89",
                                                "currencyCode" : "EUR"
                                             },
                                          "totalEur" :
                                             {
                                                "amount" : "472.68",
                                                "currencyCode" : "USD"
                                             }
                                       },
                                    "passengerPrices" :
                                       [
                                          {
                                             "total" :
                                                {
                                                   "amount" : "33560.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "passengerType" :
                                                {
                                                   "uid" : "ADULT",
                                                   "caption" : "Взрослый"
                                                },
                                             "singlePassengerTotal" :
                                                {
                                                   "amount" : "33560.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "passengerCount" : 1,
                                             "tariff" :
                                                {
                                                   "amount" : "17710.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "feeAndTaxes" :
                                                {
                                                   "amount" : "15850.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                }
                                          }
                                       ]
                                 },
                              "servicesStatuses" :
                                 {
                                    "baggage" :
                                       {
                                          "uid" : "OFF",
                                          "caption" : "Недоступно"
                                       },
                                    "exchange" :
                                       {
                                          "uid" : "PAID",
                                          "caption" : "Платно"
                                       },
                                    "refund" :
                                       {
                                          "uid" : "OFF",
                                          "caption" : "Недоступно"
                                       }
                                 },
                              "legs" :
                                 [
                                    {
                                       "duration" : 570,
                                       "segments" :
                                          [
                                             {
                                                "classOfServiceCode" : "L",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "VKO",
                                                      "caption" : "ВНУКОВО"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "MOW",
                                                      "caption" : "Москва"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "320",
                                                      "caption" : "А320"
                                                   },
                                                "travelDuration" : 80,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "САНКТ-ПЕТЕРБУРГ"
                                                   },
                                                "arrivalDate" : "2020-08-18T09:50:00",
                                                "flightNumber" : "6010",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-18T08:30:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LITE",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "LNB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "SU1",
                                                      "caption" : "Аэрофлот - российские авиалинии",
                                                      "airlineCode" : "SU"
                                                   },
                                                "starting" : true,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "ПУЛКОВО"
                                                   },
                                                "operatingAirline" :
                                                   {
                                                      "uid" : "FV",
                                                      "caption" : "ГТК Россия",
                                                      "airlineCode" : "FV"
                                                   }
                                             },
                                             {
                                                "classOfServiceCode" : "L",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "ПУЛКОВО"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "САНКТ-ПЕТЕРБУРГ"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "319",
                                                      "caption" : "AirbusA319"
                                                   },
                                                "travelDuration" : 210,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "LON",
                                                      "caption" : "ЛОНДОН"
                                                   },
                                                "arrivalDate" : "2020-08-18T16:00:00",
                                                "flightNumber" : "6619",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-18T14:30:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LITE",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "LNB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "SU1",
                                                      "caption" : "Аэрофлот - российские авиалинии",
                                                      "airlineCode" : "SU"
                                                   },
                                                "starting" : false,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "LGW",
                                                      "caption" : "Лондон, Гатвик"
                                                   },
                                                "operatingAirline" :
                                                   {
                                                      "uid" : "FV",
                                                      "caption" : "ГТК Россия",
                                                      "airlineCode" : "FV"
                                                   }
                                             }
                                          ]
                                    },
                                    {
                                       "duration" : 360,
                                       "segments" :
                                          [
                                             {
                                                "classOfServiceCode" : "L",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "LGW",
                                                      "caption" : "Лондон, Гатвик"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "LON",
                                                      "caption" : "ЛОНДОН"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "319",
                                                      "caption" : "AirbusA319"
                                                   },
                                                "travelDuration" : 195,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "САНКТ-ПЕТЕРБУРГ"
                                                   },
                                                "arrivalDate" : "2020-08-19T22:25:00",
                                                "flightNumber" : "6620",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-19T17:10:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LITE",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "LNB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "SU1",
                                                      "caption" : "Аэрофлот - российские авиалинии",
                                                      "airlineCode" : "SU"
                                                   },
                                                "starting" : true,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "ПУЛКОВО"
                                                   },
                                                "operatingAirline" :
                                                   {
                                                      "uid" : "FV",
                                                      "caption" : "ГТК Россия",
                                                      "airlineCode" : "FV"
                                                   }
                                             },
                                             {
                                                "classOfServiceCode" : "L",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "ПУЛКОВО"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "LED",
                                                      "caption" : "САНКТ-ПЕТЕРБУРГ"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "320",
                                                      "caption" : "А320"
                                                   },
                                                "travelDuration" : 80,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "MOW",
                                                      "caption" : "Москва"
                                                   },
                                                "arrivalDate" : "2020-08-20T01:10:00",
                                                "flightNumber" : "45",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-19T23:50:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LITE",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "LNB"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "SU1",
                                                      "caption" : "Аэрофлот - российские авиалинии",
                                                      "airlineCode" : "SU"
                                                   },
                                                "starting" : false,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "SVO",
                                                      "caption" : "ШЕРЕМЕТЬЕВО"
                                                   }
                                             }
                                          ]
                                    }
                                 ],
                              "airlineAlliance" :
                                 {
                                    "uid" : "*S",
                                    "caption" : "Skyteam"
                                 },
                              "exchange" :
                                 {
                                    "ADULT" :
                                       {
                                          "exchangeableBeforeDeparture" : true,
                                          "exchangeAfterDeparture" :
                                             {
                                                "amount" : "2978",
                                                "currency" : "руб.",
                                                "currencyCode" : "RUB"
                                             },
                                          "exchangeBeforeDeparture" :
                                             {
                                                "amount" : "2978",
                                                "currency" : "руб.",
                                                "currencyCode" : "RUB"
                                             },
                                          "exchangeableAfterDeparture" : true
                                       }
                                 },
                              "isTripartiteContractDiscountApplied" : false,
                              "international" : false,
                              "seats" :
                                 [
                                    {
                                       "count" : 1,
                                       "type" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          }
                                    }
                                 ],
                              "refund" :
                                 {
                                    "ADULT" :
                                       {
                                          "refundableBeforeDeparture" : false,
                                          "refundableAfterDeparture" : false
                                       }
                                 }
                           },
                    },
                    {
                        "hasExtendedFare" : false,
                        "flight" :
                           {
                              "carrier" :
                                 {
                                    "uid" : "AF",
                                    "caption" : "Air France",
                                    "airlineCode" : "AF"
                                 },
                              "price" :
                                 {
                                    "total" :
                                       {
                                          "amount" : "35224",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "totalFeeAndTaxes" :
                                       {
                                          "amount" : "8899.00",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "rates" :
                                       {
                                          "totalUsd" :
                                             {
                                                "amount" : "437.57",
                                                "currencyCode" : "EUR"
                                             },
                                          "totalEur" :
                                             {
                                                "amount" : "496.11",
                                                "currencyCode" : "USD"
                                             }
                                       },
                                    "passengerPrices" :
                                       [
                                          {
                                             "total" :
                                                {
                                                   "amount" : "35224.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "passengerType" :
                                                {
                                                   "uid" : "ADULT",
                                                   "caption" : "Взрослый"
                                                },
                                             "singlePassengerTotal" :
                                                {
                                                   "amount" : "35224.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "passengerCount" : 1,
                                             "tariff" :
                                                {
                                                   "amount" : "26325.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                },
                                             "feeAndTaxes" :
                                                {
                                                   "amount" : "8899.00",
                                                   "currency" : "руб.",
                                                   "currencyCode" : "RUB"
                                                }
                                          }
                                       ]
                                 },
                              "servicesStatuses" :
                                 {
                                    "baggage" :
                                       {
                                          "uid" : "OFF",
                                          "caption" : "Недоступно"
                                       },
                                    "exchange" :
                                       {
                                          "uid" : "FREE",
                                          "caption" : "Бесплатно"
                                       },
                                    "refund" :
                                       {
                                          "uid" : "OFF",
                                          "caption" : "Недоступно"
                                       }
                                 },
                              "legs" :
                                 [
                                    {
                                       "duration" : 735,
                                       "segments" :
                                          [
                                             {
                                                "classOfServiceCode" : "T",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "SVO",
                                                      "caption" : "ШЕРЕМЕТЬЕВО"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "MOW",
                                                      "caption" : "Москва"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "321",
                                                      "caption" : "АЭРОБУС321"
                                                   },
                                                "travelDuration" : 245,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "PAR",
                                                      "caption" : "ПАРИЖ"
                                                   },
                                                "arrivalDate" : "2020-08-18T09:15:00",
                                                "flightNumber" : "1655",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-18T06:10:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LIGHT2",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "TS50ABLG"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "AF",
                                                      "caption" : "Air France",
                                                      "airlineCode" : "AF"
                                                   },
                                                "starting" : true,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "CDG",
                                                      "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                                   }
                                             },
                                             {
                                                "classOfServiceCode" : "T",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "CDG",
                                                      "caption" : "ПАРИЖ, ШАРЛЬ ДЕ ГОЛЛЬ"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "PAR",
                                                      "caption" : "ПАРИЖ"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "320",
                                                      "caption" : "А320"
                                                   },
                                                "travelDuration" : 85,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "LON",
                                                      "caption" : "ЛОНДОН"
                                                   },
                                                "arrivalDate" : "2020-08-18T16:25:00",
                                                "flightNumber" : "1280",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-18T16:00:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LIGHT2",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "TS50ABLG"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "AF",
                                                      "caption" : "Air France",
                                                      "airlineCode" : "AF"
                                                   },
                                                "starting" : false,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "LHR",
                                                      "caption" : "Лондон, Хитроу"
                                                   }
                                             }
                                          ]
                                    },
                                    {
                                       "duration" : 555,
                                       "segments" :
                                          [
                                             {
                                                "classOfServiceCode" : "T",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "LHR",
                                                      "caption" : "Лондон, Хитроу"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "LON",
                                                      "caption" : "ЛОНДОН"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "73Х",
                                                      "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                                   },
                                                "travelDuration" : 85,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "AMS",
                                                      "caption" : "АМСТЕРДАМ"
                                                   },
                                                "arrivalDate" : "2020-08-19T19:35:00",
                                                "flightNumber" : "1022",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-19T17:10:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LIGHT2",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "TS55ABLG"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "KL",
                                                      "caption" : "KLM",
                                                      "airlineCode" : "KL"
                                                   },
                                                "starting" : true,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "AMS",
                                                      "caption" : "Схипхол"
                                                   }
                                             },
                                             {
                                                "classOfServiceCode" : "T",
                                                "classOfService" :
                                                   {
                                                      "uid" : "ECONOMY",
                                                      "caption" : "Эконом"
                                                   },
                                                "departureAirport" :
                                                   {
                                                      "uid" : "AMS",
                                                      "caption" : "Схипхол"
                                                   },
                                                "departureCity" :
                                                   {
                                                      "uid" : "AMS",
                                                      "caption" : "АМСТЕРДАМ"
                                                   },
                                                "aircraft" :
                                                   {
                                                      "uid" : "32Б",
                                                      "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                                   },
                                                "travelDuration" : 195,
                                                "arrivalCity" :
                                                   {
                                                      "uid" : "MOW",
                                                      "caption" : "Москва"
                                                   },
                                                "arrivalDate" : "2020-08-20T04:25:00",
                                                "flightNumber" : "3183",
                                                "techStopInfos" :
                                                   [
                                                   ],
                                                "departureDate" : "2020-08-20T00:10:00",
                                                "stops" : 0,
                                                "servicesDetails" :
                                                   {
                                                      "freeCabinLuggage" :
                                                         {
                                                         },
                                                      "paidCabinLuggage" :
                                                         {
                                                         },
                                                      "tariffName" : "ECONOMY LIGHT2",
                                                      "fareBasis" :
                                                         {
                                                            "ADULT" : "TS55ABLG"
                                                         },
                                                      "freeLuggage" :
                                                         {
                                                            "ADULT" :
                                                               {
                                                                  "nil" : true
                                                               }
                                                         },
                                                      "paidLuggage" :
                                                         {
                                                         }
                                                   },
                                                "airline" :
                                                   {
                                                      "uid" : "KL",
                                                      "caption" : "KLM",
                                                      "airlineCode" : "KL"
                                                   },
                                                "starting" : false,
                                                "arrivalAirport" :
                                                   {
                                                      "uid" : "SVO",
                                                      "caption" : "ШЕРЕМЕТЬЕВО"
                                                   },
                                                "operatingAirline" :
                                                   {
                                                      "uid" : "SU1",
                                                      "caption" : "Аэрофлот - российские авиалинии",
                                                      "airlineCode" : "SU"
                                                   }
                                             }
                                          ]
                                    }
                                 ],
                              "exchange" :
                                 {
                                    "ADULT" :
                                       {
                                          "exchangeableBeforeDeparture" : true,
                                          "exchangeAfterDeparture" :
                                             {
                                                "amount" : "0",
                                                "currency" : "руб.",
                                                "currencyCode" : "RUB"
                                             },
                                          "exchangeBeforeDeparture" :
                                             {
                                                "amount" : "0",
                                                "currency" : "руб.",
                                                "currencyCode" : "RUB"
                                             },
                                          "exchangeableAfterDeparture" : true
                                       }
                                 },
                              "isTripartiteContractDiscountApplied" : false,
                              "international" : false,
                              "seats" :
                                 [
                                    {
                                       "count" : 1,
                                       "type" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          }
                                    }
                                 ],
                              "refund" :
                                 {
                                    "ADULT" :
                                       {
                                          "refundableBeforeDeparture" : false,
                                          "refundableAfterDeparture" : false
                                       }
                                 }
                           },
                },
                {
                  "hasExtendedFare" : false,
                  "flight" :
                     {
                        "carrier" :
                           {
                              "uid" : "LO",
                              "caption" : "LOT Polish Airlines",
                              "airlineCode" : "LO"
                           },
                        "price" :
                           {
                              "total" :
                                 {
                                    "amount" : "21049",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "totalFeeAndTaxes" :
                                 {
                                    "amount" : "10259.00",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "rates" :
                                 {
                                    "totalUsd" :
                                       {
                                          "amount" : "261.48",
                                          "currencyCode" : "EUR"
                                       },
                                    "totalEur" :
                                       {
                                          "amount" : "296.47",
                                          "currencyCode" : "USD"
                                       }
                                 },
                              "passengerPrices" :
                                 [
                                    {
                                       "total" :
                                          {
                                             "amount" : "21049.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerType" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          },
                                       "singlePassengerTotal" :
                                          {
                                             "amount" : "21049.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerCount" : 1,
                                       "tariff" :
                                          {
                                             "amount" : "10790.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "feeAndTaxes" :
                                          {
                                             "amount" : "10259.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          }
                                    }
                                 ]
                           },
                        "servicesStatuses" :
                           {
                              "baggage" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 },
                              "exchange" :
                                 {
                                    "uid" : "PAID",
                                    "caption" : "Платно"
                                 },
                              "refund" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 }
                           },
                        "legs" :
                           [
                              {
                                 "duration" : 885,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е75",
                                                "caption" : "ЭМБРАЕР 175"
                                             },
                                          "travelDuration" : 135,
                                          "arrivalCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "arrivalDate" : "2020-08-18T21:55:00",
                                          "flightNumber" : "678",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-18T20:40:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY SAVER",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSAVP0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е95",
                                                "caption" : "ЭМБРАЕР 195"
                                             },
                                          "travelDuration" : 175,
                                          "arrivalCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "arrivalDate" : "2020-08-19T09:25:00",
                                          "flightNumber" : "281",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T07:30:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY SAVER",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSAVP0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             }
                                       }
                                    ]
                              },
                              {
                                 "duration" : 1415,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е95",
                                                "caption" : "ЭМБРАЕР 195"
                                             },
                                          "travelDuration" : 155,
                                          "arrivalCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "arrivalDate" : "2020-08-19T21:45:00",
                                          "flightNumber" : "280",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T18:10:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY SAVER",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSAVP0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е75",
                                                "caption" : "ЭМБРАЕР 175"
                                             },
                                          "travelDuration" : 130,
                                          "arrivalCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "arrivalDate" : "2020-08-20T19:45:00",
                                          "flightNumber" : "677",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-20T16:35:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY SAVER",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSAVP0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             }
                                       }
                                    ]
                              }
                           ],
                        "exchange" :
                           {
                              "ADULT" :
                                 {
                                    "exchangeableBeforeDeparture" : true,
                                    "exchangeAfterDeparture" :
                                       {
                                          "amount" : "5635",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeBeforeDeparture" :
                                       {
                                          "amount" : "5635",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeableAfterDeparture" : true
                                 }
                           },
                        "isTripartiteContractDiscountApplied" : false,
                        "international" : false,
                        "seats" :
                           [
                              {
                                 "count" : 1,
                                 "type" :
                                    {
                                       "uid" : "ADULT",
                                       "caption" : "Взрослый"
                                    }
                              }
                           ],
                        "refund" :
                           {
                              "ADULT" :
                                 {
                                    "refundableBeforeDeparture" : false,
                                    "refundableAfterDeparture" : false
                                 }
                           }
                     },
                },
                {
                  "hasExtendedFare" : false,
                  "flight" :
                     {
                        "carrier" :
                           {
                              "uid" : "SU1",
                              "caption" : "Аэрофлот - российские авиалинии",
                              "airlineCode" : "SU"
                           },
                        "price" :
                           {
                              "total" :
                                 {
                                    "amount" : "33697",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "totalFeeAndTaxes" :
                                 {
                                    "amount" : "15987.00",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "rates" :
                                 {
                                    "totalUsd" :
                                       {
                                          "amount" : "418.60",
                                          "currencyCode" : "EUR"
                                       },
                                    "totalEur" :
                                       {
                                          "amount" : "474.61",
                                          "currencyCode" : "USD"
                                       }
                                 },
                              "passengerPrices" :
                                 [
                                    {
                                       "total" :
                                          {
                                             "amount" : "33697.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerType" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          },
                                       "singlePassengerTotal" :
                                          {
                                             "amount" : "33697.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerCount" : 1,
                                       "tariff" :
                                          {
                                             "amount" : "17710.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "feeAndTaxes" :
                                          {
                                             "amount" : "15987.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          }
                                    }
                                 ]
                           },
                        "servicesStatuses" :
                           {
                              "baggage" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 },
                              "exchange" :
                                 {
                                    "uid" : "PAID",
                                    "caption" : "Платно"
                                 },
                              "refund" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 }
                           },
                        "legs" :
                           [
                              {
                                 "duration" : 255,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "L",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "321",
                                                "caption" : "АЭРОБУС321"
                                             },
                                          "travelDuration" : 255,
                                          "arrivalCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "arrivalDate" : "2020-08-18T21:25:00",
                                          "flightNumber" : "2584",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-18T19:10:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY LITE",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "LNB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "SU1",
                                                "caption" : "Аэрофлот - российские авиалинии",
                                                "airlineCode" : "SU"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             }
                                       }
                                    ]
                              },
                              {
                                 "duration" : 235,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "L",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "321",
                                                "caption" : "АЭРОБУС321"
                                             },
                                          "travelDuration" : 235,
                                          "arrivalCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "arrivalDate" : "2020-08-19T16:35:00",
                                          "flightNumber" : "2581",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T10:40:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY LITE",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "LNB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "SU1",
                                                "caption" : "Аэрофлот - российские авиалинии",
                                                "airlineCode" : "SU"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             }
                                       }
                                    ]
                              }
                           ],
                        "airlineAlliance" :
                           {
                              "uid" : "*S",
                              "caption" : "Skyteam"
                           },
                        "exchange" :
                           {
                              "ADULT" :
                                 {
                                    "exchangeableBeforeDeparture" : true,
                                    "exchangeAfterDeparture" :
                                       {
                                          "amount" : "2978",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeBeforeDeparture" :
                                       {
                                          "amount" : "2978",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeableAfterDeparture" : true
                                 }
                           },
                        "isTripartiteContractDiscountApplied" : false,
                        "international" : false,
                        "seats" :
                           [
                              {
                                 "count" : 1,
                                 "type" :
                                    {
                                       "uid" : "ADULT",
                                       "caption" : "Взрослый"
                                    }
                              }
                           ],
                        "refund" :
                           {
                              "ADULT" :
                                 {
                                    "refundableBeforeDeparture" : false,
                                    "refundableAfterDeparture" : false
                                 }
                           }
                     },
                },
                {
                  "hasExtendedFare" : false,
                  "flight" :
                     {
                        "carrier" :
                           {
                              "uid" : "LO",
                              "caption" : "LOT Polish Airlines",
                              "airlineCode" : "LO"
                           },
                        "price" :
                           {
                              "total" :
                                 {
                                    "amount" : "33621",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "totalFeeAndTaxes" :
                                 {
                                    "amount" : "9951.00",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "rates" :
                                 {
                                    "totalUsd" :
                                       {
                                          "amount" : "417.65",
                                          "currencyCode" : "EUR"
                                       },
                                    "totalEur" :
                                       {
                                          "amount" : "473.54",
                                          "currencyCode" : "USD"
                                       }
                                 },
                              "passengerPrices" :
                                 [
                                    {
                                       "total" :
                                          {
                                             "amount" : "33621.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerType" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          },
                                       "singlePassengerTotal" :
                                          {
                                             "amount" : "33621.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerCount" : 1,
                                       "tariff" :
                                          {
                                             "amount" : "23670.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "feeAndTaxes" :
                                          {
                                             "amount" : "9951.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          }
                                    }
                                 ]
                           },
                        "servicesStatuses" :
                           {
                              "baggage" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 },
                              "exchange" :
                                 {
                                    "uid" : "PAID",
                                    "caption" : "Платно"
                                 },
                              "refund" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 }
                           },
                        "legs" :
                           [
                              {
                                 "duration" : 1485,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "SU9",
                                                "caption" : "SSJ100-95"
                                             },
                                          "travelDuration" : 130,
                                          "arrivalCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "arrivalDate" : "2020-08-18T11:50:00",
                                          "flightNumber" : "5678",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-18T10:40:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY STANDARD",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSTDPOF0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 1,
                                                            "nil" : false,
                                                            "unit" : "шт"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "operatingAirline" :
                                             {
                                                "uid" : "SU1",
                                                "caption" : "Аэрофлот - российские авиалинии",
                                                "airlineCode" : "SU"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е95",
                                                "caption" : "ЭМБРАЕР 195"
                                             },
                                          "travelDuration" : 175,
                                          "arrivalCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "arrivalDate" : "2020-08-19T09:25:00",
                                          "flightNumber" : "281",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T07:30:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY STANDARD",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSTDPOF0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 1,
                                                            "nil" : false,
                                                            "unit" : "шт"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             }
                                       }
                                    ]
                              },
                              {
                                 "duration" : 1415,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е95",
                                                "caption" : "ЭМБРАЕР 195"
                                             },
                                          "travelDuration" : 155,
                                          "arrivalCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "arrivalDate" : "2020-08-19T21:45:00",
                                          "flightNumber" : "280",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T18:10:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY SAVER",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSAVP0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "WAW",
                                                "caption" : "ВАРШАВА (ФРЕДЕРИК ШОПЕН)"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "Е75",
                                                "caption" : "ЭМБРАЕР 175"
                                             },
                                          "travelDuration" : 130,
                                          "arrivalCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "arrivalDate" : "2020-08-20T19:45:00",
                                          "flightNumber" : "677",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-20T16:35:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "tariffName" : "ECONOMY SAVER",
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VSAVP0"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "nil" : true
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "LO",
                                                "caption" : "LOT Polish Airlines",
                                                "airlineCode" : "LO"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "SVO",
                                                "caption" : "ШЕРЕМЕТЬЕВО"
                                             }
                                       }
                                    ]
                              }
                           ],
                        "exchange" :
                           {
                              "ADULT" :
                                 {
                                    "exchangeableBeforeDeparture" : true,
                                    "exchangeAfterDeparture" :
                                       {
                                          "amount" : "5635",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeBeforeDeparture" :
                                       {
                                          "amount" : "5635",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeableAfterDeparture" : true
                                 }
                           },
                        "isTripartiteContractDiscountApplied" : false,
                        "international" : false,
                        "seats" :
                           [
                              {
                                 "count" : 1,
                                 "type" :
                                    {
                                       "uid" : "ADULT",
                                       "caption" : "Взрослый"
                                    }
                              }
                           ],
                        "refund" :
                           {
                              "ADULT" :
                                 {
                                    "refundableBeforeDeparture" : false,
                                    "refundableAfterDeparture" : false
                                 }
                           }
                     },
                },
                {
                  "hasExtendedFare" : false,
                  "flight" :
                     {
                        "carrier" :
                           {
                              "uid" : "TK",
                              "caption" : "TURK HAVA YOLLARI A.O.",
                              "airlineCode" : "TK"
                           },
                        "price" :
                           {
                              "total" :
                                 {
                                    "amount" : "31778",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "totalFeeAndTaxes" :
                                 {
                                    "amount" : "19703.00",
                                    "currency" : "руб.",
                                    "currencyCode" : "RUB"
                                 },
                              "rates" :
                                 {
                                    "totalUsd" :
                                       {
                                          "amount" : "394.76",
                                          "currencyCode" : "EUR"
                                       },
                                    "totalEur" :
                                       {
                                          "amount" : "447.58",
                                          "currencyCode" : "USD"
                                       }
                                 },
                              "passengerPrices" :
                                 [
                                    {
                                       "total" :
                                          {
                                             "amount" : "31778.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerType" :
                                          {
                                             "uid" : "ADULT",
                                             "caption" : "Взрослый"
                                          },
                                       "singlePassengerTotal" :
                                          {
                                             "amount" : "31778.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "passengerCount" : 1,
                                       "tariff" :
                                          {
                                             "amount" : "12075.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          },
                                       "feeAndTaxes" :
                                          {
                                             "amount" : "19703.00",
                                             "currency" : "руб.",
                                             "currencyCode" : "RUB"
                                          }
                                    }
                                 ]
                           },
                        "servicesStatuses" :
                           {
                              "baggage" :
                                 {
                                    "uid" : "FREE",
                                    "caption" : "Бесплатно"
                                 },
                              "exchange" :
                                 {
                                    "uid" : "FREE",
                                    "caption" : "Бесплатно"
                                 },
                              "refund" :
                                 {
                                    "uid" : "OFF",
                                    "caption" : "Недоступно"
                                 }
                           },
                        "legs" :
                           [
                              {
                                 "duration" : 900,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "Q",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "VKO",
                                                "caption" : "ВНУКОВО"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "32Б",
                                                "caption" : "Аэробус А321 Пассажирский (шарклетс)"
                                             },
                                          "travelDuration" : 185,
                                          "arrivalCity" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             },
                                          "arrivalDate" : "2020-08-18T23:25:00",
                                          "flightNumber" : "416",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-18T20:20:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "QN2PX"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 30,
                                                            "nil" : false,
                                                            "unit" : "кг"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "TK",
                                                "caption" : "TURK HAVA YOLLARI A.O.",
                                                "airlineCode" : "TK"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "Q",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "77В",
                                                "caption" : "Боинг 777-300ЕР"
                                             },
                                          "travelDuration" : 240,
                                          "arrivalCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "arrivalDate" : "2020-08-19T09:20:00",
                                          "flightNumber" : "1979",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T07:20:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "QN2PX"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 30,
                                                            "nil" : false,
                                                            "unit" : "кг"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "TK",
                                                "caption" : "TURK HAVA YOLLARI A.O.",
                                                "airlineCode" : "TK"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "LHR",
                                                "caption" : "Лондон, Хитроу"
                                             }
                                       }
                                    ]
                              },
                              {
                                 "duration" : 1025,
                                 "segments" :
                                    [
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "STN",
                                                "caption" : "Лондон, Станстед"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "LON",
                                                "caption" : "ЛОНДОН"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "73Х",
                                                "caption" : "Боинг 737-800 (винглетс) Пассажирский/BBJ2"
                                             },
                                          "travelDuration" : 230,
                                          "arrivalCity" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             },
                                          "arrivalDate" : "2020-08-19T20:40:00",
                                          "flightNumber" : "7821",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-19T14:50:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VN2XPB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 30,
                                                            "nil" : false,
                                                            "unit" : "кг"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "TK",
                                                "caption" : "TURK HAVA YOLLARI A.O.",
                                                "airlineCode" : "TK"
                                             },
                                          "starting" : true,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "SAW",
                                                "caption" : "САБИХА ГОКЦЕН"
                                             }
                                       },
                                       {
                                          "classOfServiceCode" : "V",
                                          "classOfService" :
                                             {
                                                "uid" : "ECONOMY",
                                                "caption" : "Эконом"
                                             },
                                          "departureAirport" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             },
                                          "departureCity" :
                                             {
                                                "uid" : "IST",
                                                "caption" : "СТАМБУЛ"
                                             },
                                          "aircraft" :
                                             {
                                                "uid" : "333",
                                                "caption" : "А330-300"
                                             },
                                          "travelDuration" : 165,
                                          "arrivalCity" :
                                             {
                                                "uid" : "MOW",
                                                "caption" : "Москва"
                                             },
                                          "arrivalDate" : "2020-08-20T09:55:00",
                                          "flightNumber" : "413",
                                          "techStopInfos" :
                                             [
                                             ],
                                          "departureDate" : "2020-08-20T07:10:00",
                                          "stops" : 0,
                                          "servicesDetails" :
                                             {
                                                "freeCabinLuggage" :
                                                   {
                                                   },
                                                "paidCabinLuggage" :
                                                   {
                                                   },
                                                "fareBasis" :
                                                   {
                                                      "ADULT" : "VN2XPB"
                                                   },
                                                "freeLuggage" :
                                                   {
                                                      "ADULT" :
                                                         {
                                                            "pieces" : 30,
                                                            "nil" : false,
                                                            "unit" : "кг"
                                                         }
                                                   },
                                                "paidLuggage" :
                                                   {
                                                   }
                                             },
                                          "airline" :
                                             {
                                                "uid" : "TK",
                                                "caption" : "TURK HAVA YOLLARI A.O.",
                                                "airlineCode" : "TK"
                                             },
                                          "starting" : false,
                                          "arrivalAirport" :
                                             {
                                                "uid" : "VKO",
                                                "caption" : "ВНУКОВО"
                                             }
                                       }
                                    ]
                              }
                           ],
                        "exchange" :
                           {
                              "ADULT" :
                                 {
                                    "exchangeableBeforeDeparture" : true,
                                    "exchangeAfterDeparture" :
                                       {
                                          "amount" : "0",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeBeforeDeparture" :
                                       {
                                          "amount" : "0",
                                          "currency" : "руб.",
                                          "currencyCode" : "RUB"
                                       },
                                    "exchangeableAfterDeparture" : true
                                 }
                           },
                        "isTripartiteContractDiscountApplied" : false,
                        "international" : false,
                        "seats" :
                           [
                              {
                                 "count" : 1,
                                 "type" :
                                    {
                                       "uid" : "ADULT",
                                       "caption" : "Взрослый"
                                    }
                              }
                           ],
                        "refund" :
                           {
                              "ADULT" :
                                 {
                                    "refundableBeforeDeparture" : false,
                                    "refundableAfterDeparture" : false
                                 }
                           }
                     },
                },
            ],

            priceFrom: 0,
            priceUp: null,
    };





    let searchPageReducer = (state = initialState, action) => {
        switch(action.type){
            case SET_TRAVELS:
                return {state}
            default:
                return state;
        }
    }

      export const searchPageReducerAC = () => ({type: SET_TRAVELS});

      export const setPriceFromAC = () => ({type: SET_PRICE_FROM});

      export const setPriceUpAC = () => ({type: SET_PRICE_UP})

      

    export default searchPageReducer;