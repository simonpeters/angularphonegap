var server = require('json-server');

server.low.db = {
    "events": [
        {
            "id": 0,
            "name": "Tomorrowland",
            "date": "2014-04-26 17:31:31",
            "created_on": "2014-05-24 11:23:55"
        },
        {
            "id": 1,
            "name": "Dour",
            "date": "2014-04-06 05:25:05",
            "created_on": "2014-05-17 15:17:07"
        },
        {
            "id": 2,
            "name": "Extrema Outdoor",
            "date": "2014-04-10 15:53:44",
            "created_on": "2014-03-11 11:38:22"
        },
        {
            "id": 3,
            "name": "10 days off",
            "date": "2014-03-31 21:56:50",
            "created_on": "2014-06-03 22:26:00"
        },
        {
            "id": 4,
            "name": "Bosrock",
            "date": "2014-05-26 18:41:55",
            "created_on": "2014-04-03 11:52:15"
        },
        {
            "id": 5,
            "name": "Couleur cafe",
            "date": "2014-01-26 21:29:33",
            "created_on": "2014-04-08 21:17:54"
        },
        {
            "id": 6,
            "name": "Rock Geel",
            "date": "2014-01-14 05:03:14",
            "created_on": "2014-03-10 12:00:10"
        },
        {
            "id": 7,
            "name": "Werchter",
            "date": "2014-03-08 17:09:53",
            "created_on": "2014-02-14 08:22:41"
        }
    ],
    "artists": [
        {
            "id": 0,
            "name": "Armin van Buuren",
            "created_on": "2014-01-28 05:38:00"
        },
        {
            "id": 1,
            "name": "Dada Life",
            "created_on": "2014-04-26 13:10:55"
        },
        {
            "id": 2,
            "name": "Adam Beyer",
            "created_on": "2014-03-23 14:15:05"
        },
        {
            "id": 3,
            "name": "Borgore",
            "created_on": "2014-04-01 13:59:11"
        },
        {
            "id": 4,
            "name": "Coone",
            "created_on": "2014-06-02 20:14:38"
        },
        {
            "id": 5,
            "name": "Skrillix",
            "created_on": "2014-03-24 09:12:18"
        },
        {
            "id": 6,
            "name": "DJ Snake",
            "created_on": "2014-05-02 16:43:32"
        },
        {
            "id": 7,
            "name": "DJ Shadow",
            "created_on": "2014-01-11 01:55:58"
        },
        {
            "id": 8,
            "name": "Zeds Death",
            "created_on": "2014-05-27 14:46:56"
        },
        {
            "id": 9,
            "name": "Makasi",
            "created_on": "2014-04-24 20:52:58"
        }
    ],
    "bookings": [
        {
            "id": 0,
            "stage": "dolor",
            "day": "2014-04-19 21:29:52",
            "event_id": 2,
            "artist_id": 5
        },
        {
            "id": 1,
            "stage": "dolore",
            "day": "2014-01-24 03:57:03",
            "event_id": 1,
            "artist_id": 3
        },
        {
            "id": 2,
            "stage": "officia",
            "day": "2014-05-01 22:59:05",
            "event_id": 0,
            "artist_id": 1
        },
        {
            "id": 3,
            "stage": "id",
            "day": "2014-02-23 08:53:33",
            "event_id": 2,
            "artist_id": 7
        },
        {
            "id": 4,
            "stage": "incididunt",
            "day": "2014-01-11 19:39:41",
            "event_id": 1,
            "artist_id": 7
        },
        {
            "id": 5,
            "stage": "aute",
            "day": "2014-05-19 17:50:22",
            "event_id": 1,
            "artist_id": 2
        },
        {
            "id": 6,
            "stage": "ipsum",
            "day": "2014-05-19 03:04:15",
            "event_id": 4,
            "artist_id": 9
        },
        {
            "id": 7,
            "stage": "id",
            "day": "2014-03-01 20:06:23",
            "event_id": 6,
            "artist_id": 4
        },
        {
            "id": 8,
            "stage": "laborum",
            "day": "2014-02-17 16:57:11",
            "event_id": 0,
            "artist_id": 4
        },
        {
            "id": 9,
            "stage": "qui",
            "day": "2014-04-21 21:46:53",
            "event_id": 6,
            "artist_id": 4
        },
        {
            "id": 10,
            "stage": "magna",
            "day": "2014-01-23 03:22:34",
            "event_id": 2,
            "artist_id": 5
        },
        {
            "id": 11,
            "stage": "quis",
            "day": "2014-01-29 15:09:38",
            "event_id": 5,
            "artist_id": 1
        },
        {
            "id": 12,
            "stage": "cillum",
            "day": "2014-04-22 23:52:48",
            "event_id": 0,
            "artist_id": 4
        },
        {
            "id": 13,
            "stage": "amet",
            "day": "2014-04-22 09:11:50",
            "event_id": 7,
            "artist_id": 4
        },
        {
            "id": 14,
            "stage": "in",
            "day": "2014-01-07 18:10:49",
            "event_id": 5,
            "artist_id": 0
        },
        {
            "id": 15,
            "stage": "cupidatat",
            "day": "2014-02-18 05:09:21",
            "event_id": 7,
            "artist_id": 9
        },
        {
            "id": 16,
            "stage": "et",
            "day": "2014-04-22 02:44:37",
            "event_id": 1,
            "artist_id": 9
        },
        {
            "id": 17,
            "stage": "quis",
            "day": "2014-01-05 04:58:33",
            "event_id": 7,
            "artist_id": 6
        },
        {
            "id": 18,
            "stage": "laborum",
            "day": "2014-05-29 07:06:41",
            "event_id": 7,
            "artist_id": 5
        },
        {
            "id": 19,
            "stage": "ex",
            "day": "2014-02-04 00:24:42",
            "event_id": 1,
            "artist_id": 4
        },
        {
            "id": 20,
            "stage": "ut",
            "day": "2014-04-04 11:06:26",
            "event_id": 1,
            "artist_id": 6
        },
        {
            "id": 21,
            "stage": "consectetur",
            "day": "2014-02-02 12:23:17",
            "event_id": 6,
            "artist_id": 7
        },
        {
            "id": 22,
            "stage": "reprehenderit",
            "day": "2014-04-27 03:05:55",
            "event_id": 1,
            "artist_id": 5
        },
        {
            "id": 23,
            "stage": "nisi",
            "day": "2014-04-03 05:49:42",
            "event_id": 6,
            "artist_id": 6
        },
        {
            "id": 24,
            "stage": "anim",
            "day": "2014-05-14 12:34:37",
            "event_id": 2,
            "artist_id": 5
        },
        {
            "id": 25,
            "stage": "do",
            "day": "2014-05-04 20:23:55",
            "event_id": 1,
            "artist_id": 8
        },
        {
            "id": 26,
            "stage": "deserunt",
            "day": "2014-03-22 18:30:25",
            "event_id": 5,
            "artist_id": 3
        },
        {
            "id": 27,
            "stage": "eiusmod",
            "day": "2014-04-14 16:38:00",
            "event_id": 0,
            "artist_id": 2
        },
        {
            "id": 28,
            "stage": "velit",
            "day": "2014-03-24 07:48:02",
            "event_id": 3,
            "artist_id": 4
        },
        {
            "id": 29,
            "stage": "nulla",
            "day": "2014-03-10 17:29:51",
            "event_id": 2,
            "artist_id": 5
        },
        {
            "id": 30,
            "stage": "id",
            "day": "2014-05-24 23:36:16",
            "event_id": 6,
            "artist_id": 2
        },
        {
            "id": 31,
            "stage": "adipisicing",
            "day": "2014-01-11 09:35:21",
            "event_id": 3,
            "artist_id": 5
        },
        {
            "id": 32,
            "stage": "culpa",
            "day": "2014-01-30 18:58:36",
            "event_id": 2,
            "artist_id": 1
        },
        {
            "id": 33,
            "stage": "reprehenderit",
            "day": "2014-03-01 14:30:58",
            "event_id": 2,
            "artist_id": 6
        },
        {
            "id": 34,
            "stage": "ipsum",
            "day": "2014-04-08 04:45:33",
            "event_id": 5,
            "artist_id": 3
        },
        {
            "id": 35,
            "stage": "dolore",
            "day": "2014-02-09 18:03:45",
            "event_id": 1,
            "artist_id": 1
        },
        {
            "id": 36,
            "stage": "in",
            "day": "2014-01-15 02:27:17",
            "event_id": 3,
            "artist_id": 9
        },
        {
            "id": 37,
            "stage": "labore",
            "day": "2014-04-29 09:13:23",
            "event_id": 1,
            "artist_id": 2
        },
        {
            "id": 38,
            "stage": "labore",
            "day": "2014-04-22 02:19:30",
            "event_id": 4,
            "artist_id": 8
        },
        {
            "id": 39,
            "stage": "consectetur",
            "day": "2014-03-24 18:30:19",
            "event_id": 4,
            "artist_id": 1
        },
        {
            "id": 40,
            "stage": "ex",
            "day": "2014-02-11 13:45:39",
            "event_id": 7,
            "artist_id": 0
        },
        {
            "id": 41,
            "stage": "laboris",
            "day": "2014-04-15 08:14:12",
            "event_id": 0,
            "artist_id": 0
        },
        {
            "id": 42,
            "stage": "eu",
            "day": "2014-02-25 04:55:22",
            "event_id": 5,
            "artist_id": 7
        },
        {
            "id": 43,
            "stage": "quis",
            "day": "2014-01-15 08:21:32",
            "event_id": 4,
            "artist_id": 7
        },
        {
            "id": 44,
            "stage": "ea",
            "day": "2014-02-02 07:25:53",
            "event_id": 5,
            "artist_id": 5
        },
        {
            "id": 45,
            "stage": "consectetur",
            "day": "2014-03-11 12:46:11",
            "event_id": 6,
            "artist_id": 1
        },
        {
            "id": 46,
            "stage": "dolore",
            "day": "2014-02-05 22:50:18",
            "event_id": 4,
            "artist_id": 4
        },
        {
            "id": 47,
            "stage": "incididunt",
            "day": "2014-01-17 09:38:46",
            "event_id": 0,
            "artist_id": 7
        },
        {
            "id": 48,
            "stage": "duis",
            "day": "2014-04-11 15:55:24",
            "event_id": 5,
            "artist_id": 7
        },
        {
            "id": 49,
            "stage": "exercitation",
            "day": "2014-03-08 07:01:14",
            "event_id": 6,
            "artist_id": 9
        },
        {
            "id": 50,
            "stage": "proident",
            "day": "2014-04-13 02:23:20",
            "event_id": 2,
            "artist_id": 0
        },
        {
            "id": 51,
            "stage": "velit",
            "day": "2014-02-03 09:10:31",
            "event_id": 2,
            "artist_id": 2
        },
        {
            "id": 52,
            "stage": "in",
            "day": "2014-05-18 19:37:22",
            "event_id": 7,
            "artist_id": 7
        },
        {
            "id": 53,
            "stage": "ad",
            "day": "2014-05-14 05:55:51",
            "event_id": 2,
            "artist_id": 8
        },
        {
            "id": 54,
            "stage": "occaecat",
            "day": "2014-03-17 01:01:28",
            "event_id": 5,
            "artist_id": 5
        },
        {
            "id": 55,
            "stage": "mollit",
            "day": "2014-03-01 16:42:47",
            "event_id": 0,
            "artist_id": 1
        },
        {
            "id": 56,
            "stage": "fugiat",
            "day": "2014-03-04 06:44:11",
            "event_id": 0,
            "artist_id": 2
        },
        {
            "id": 57,
            "stage": "occaecat",
            "day": "2014-03-14 06:37:53",
            "event_id": 0,
            "artist_id": 0
        },
        {
            "id": 58,
            "stage": "culpa",
            "day": "2014-04-23 12:11:57",
            "event_id": 5,
            "artist_id": 8
        },
        {
            "id": 59,
            "stage": "consequat",
            "day": "2014-03-11 09:32:44",
            "event_id": 0,
            "artist_id": 4
        },
        {
            "id": 60,
            "stage": "sit",
            "day": "2014-02-23 13:24:41",
            "event_id": 6,
            "artist_id": 9
        },
        {
            "id": 61,
            "stage": "reprehenderit",
            "day": "2014-03-15 05:55:55",
            "event_id": 6,
            "artist_id": 0
        },
        {
            "id": 62,
            "stage": "mollit",
            "day": "2014-06-01 05:48:03",
            "event_id": 5,
            "artist_id": 8
        },
        {
            "id": 63,
            "stage": "laborum",
            "day": "2014-01-09 02:35:22",
            "event_id": 0,
            "artist_id": 9
        },
        {
            "id": 64,
            "stage": "occaecat",
            "day": "2014-04-02 20:19:38",
            "event_id": 1,
            "artist_id": 3
        },
        {
            "id": 65,
            "stage": "tempor",
            "day": "2014-04-12 21:31:25",
            "event_id": 2,
            "artist_id": 8
        },
        {
            "id": 66,
            "stage": "sit",
            "day": "2014-01-27 10:47:04",
            "event_id": 0,
            "artist_id": 5
        },
        {
            "id": 67,
            "stage": "nulla",
            "day": "2014-03-27 02:35:24",
            "event_id": 3,
            "artist_id": 0
        },
        {
            "id": 68,
            "stage": "quis",
            "day": "2014-05-04 01:27:26",
            "event_id": 2,
            "artist_id": 0
        },
        {
            "id": 69,
            "stage": "laborum",
            "day": "2014-05-07 18:36:38",
            "event_id": 7,
            "artist_id": 4
        },
        {
            "id": 70,
            "stage": "irure",
            "day": "2014-03-25 07:01:11",
            "event_id": 1,
            "artist_id": 9
        },
        {
            "id": 71,
            "stage": "minim",
            "day": "2014-01-27 13:12:05",
            "event_id": 7,
            "artist_id": 9
        },
        {
            "id": 72,
            "stage": "eu",
            "day": "2014-04-21 05:03:01",
            "event_id": 3,
            "artist_id": 8
        },
        {
            "id": 73,
            "stage": "nulla",
            "day": "2014-05-23 03:48:57",
            "event_id": 4,
            "artist_id": 7
        },
        {
            "id": 74,
            "stage": "et",
            "day": "2014-02-03 23:53:56",
            "event_id": 5,
            "artist_id": 2
        },
        {
            "id": 75,
            "stage": "anim",
            "day": "2014-03-21 16:44:32",
            "event_id": 6,
            "artist_id": 9
        },
        {
            "id": 76,
            "stage": "laboris",
            "day": "2014-03-13 10:36:13",
            "event_id": 3,
            "artist_id": 4
        },
        {
            "id": 77,
            "stage": "quis",
            "day": "2014-02-13 00:46:01",
            "event_id": 2,
            "artist_id": 0
        },
        {
            "id": 78,
            "stage": "qui",
            "day": "2014-05-15 23:14:08",
            "event_id": 7,
            "artist_id": 9
        },
        {
            "id": 79,
            "stage": "ea",
            "day": "2014-03-09 02:17:42",
            "event_id": 2,
            "artist_id": 7
        },
        {
            "id": 80,
            "stage": "et",
            "day": "2014-05-05 18:32:34",
            "event_id": 2,
            "artist_id": 0
        },
        {
            "id": 81,
            "stage": "nulla",
            "day": "2014-04-29 19:31:37",
            "event_id": 1,
            "artist_id": 4
        },
        {
            "id": 82,
            "stage": "aute",
            "day": "2014-01-11 16:45:16",
            "event_id": 4,
            "artist_id": 3
        },
        {
            "id": 83,
            "stage": "reprehenderit",
            "day": "2014-02-15 05:30:51",
            "event_id": 5,
            "artist_id": 5
        },
        {
            "id": 84,
            "stage": "ea",
            "day": "2014-01-01 02:47:04",
            "event_id": 6,
            "artist_id": 8
        },
        {
            "id": 85,
            "stage": "cillum",
            "day": "2014-04-02 05:07:25",
            "event_id": 3,
            "artist_id": 8
        },
        {
            "id": 86,
            "stage": "eiusmod",
            "day": "2014-03-21 19:11:15",
            "event_id": 6,
            "artist_id": 5
        },
        {
            "id": 87,
            "stage": "dolore",
            "day": "2014-02-25 09:41:54",
            "event_id": 2,
            "artist_id": 6
        },
        {
            "id": 88,
            "stage": "magna",
            "day": "2014-01-25 04:15:02",
            "event_id": 5,
            "artist_id": 5
        },
        {
            "id": 89,
            "stage": "eu",
            "day": "2014-02-11 00:56:14",
            "event_id": 7,
            "artist_id": 2
        },
        {
            "id": 90,
            "stage": "enim",
            "day": "2014-03-14 21:10:19",
            "event_id": 3,
            "artist_id": 2
        },
        {
            "id": 91,
            "stage": "nostrud",
            "day": "2014-02-22 17:55:19",
            "event_id": 7,
            "artist_id": 0
        },
        {
            "id": 92,
            "stage": "voluptate",
            "day": "2014-04-08 17:08:48",
            "event_id": 4,
            "artist_id": 6
        },
        {
            "id": 93,
            "stage": "est",
            "day": "2014-01-22 08:18:01",
            "event_id": 5,
            "artist_id": 2
        },
        {
            "id": 94,
            "stage": "ipsum",
            "day": "2014-05-22 00:08:14",
            "event_id": 3,
            "artist_id": 1
        },
        {
            "id": 95,
            "stage": "est",
            "day": "2014-04-24 17:01:10",
            "event_id": 2,
            "artist_id": 5
        },
        {
            "id": 96,
            "stage": "aute",
            "day": "2014-03-13 12:29:30",
            "event_id": 6,
            "artist_id": 2
        },
        {
            "id": 97,
            "stage": "duis",
            "day": "2014-03-22 23:26:37",
            "event_id": 7,
            "artist_id": 2
        },
        {
            "id": 98,
            "stage": "ipsum",
            "day": "2014-01-13 20:54:41",
            "event_id": 1,
            "artist_id": 2
        },
        {
            "id": 99,
            "stage": "velit",
            "day": "2014-03-13 17:48:59",
            "event_id": 1,
            "artist_id": 1
        }
    ]
};

server.listen(3001);