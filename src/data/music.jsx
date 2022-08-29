const v4 = () => {
  const head = Date.now().toString(36);
  const tail = Math.random().toString(36).substr(2);
  return head + tail;
};
function chillHop() {
  return [
    {
      name: "Making a Way",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/07/e435a424c2a637c19d2241dea2399a4813d984b3-1024x1024.jpg",
      artist: "The BREED",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41956",
      color: ["#C8BAA6", "#A93724"],
      id: v4(),
      active: false,
    },
    {
      name: "Flowers",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      artist: "The Field Tapes, Xander",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11249",
      color: ["#769C81", "#5A322A"],
      id: v4(),
      active: true,
    },
    {
      name: "Lunar Cycles",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10031",
      color: ["#0C819F", "#994E31"],
      id: v4(),
      active: false,
    },
    {
      name: "Woodnote",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aarigod, Imagiro",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
      color: ["#B18945", "#B1C56D"],
      id: v4(),
      active: false,
    },
    {
      name: "Waterfalls",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/4f968562d372586b08590bf29066c638ee8fda64-1024x1024.jpg",
      artist: "G Mills, Molly McPhaul",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16195",
      color: ["#D74F49", "#4FB7AC"],
      id: v4(),
      active: false,
    },
    {
      name: "Cruising",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      artist: "Evil Needle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      color: ["#EB4B4B", "#91736C"],
      id: v4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: v4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: v4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: v4(),
      active: false,
    },
    {
      name: "Sonar",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/05/16bcbe48680098798af04f176daae3693839238d-1024x1024.jpg",
      artist: "Invention",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8288",
      color: ["#45598E", "#F59AAC"],
      id: v4(),
      active: false,
    },
    {
      name: "Desire",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      artist: "Psalm Trees, Guillaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10554",
      color: ["#D1E2DC", "#030204"],
      id: v4(),
      active: false,
    },
    {
      name: "Stay",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
      artist: "Swum",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7998",
      color: ["#393C60", "#0A3332"],
      id: v4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: v4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: v4(),
      active: false,
    },
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: v4(),
      active: false,
    },
    /*{
      name: "Hell Of A Night",
      cover:
        "https://ecsmedia.pl/c/oxymoron-deluxe-edition-w-iext110030814.jpg",
      artist: "ScHoolboy Q",
      audio:
        "https://cdn01.ytapi.download/dl?hash=ad468Q%2BgC7fRos%2Fw3AgSaffPbdS5V%2F7UwTgJev7veMnp1uhISc63RS5ceoomGaJO6qKygvvhaVI8ibBLrysvbgufXP%2BBhCSMSQDfxG%2F%2B2dn0XOqMh071GDLZtb6d7aXQswD8pMVL6vmlqdAyQgkZijFeUSIEiohlwDfFjizN2TFATpB6dhEdjBVbzy0zwpmCbZ8ClC9Crse3P8eQ6Xg6Ig%3D%3D",
      color: ["#404040", "#000000"],
      id: v4(),
      active: false,
    },
    {
      name: "Man Of The Year",
      cover:
        "https://ecsmedia.pl/c/oxymoron-deluxe-edition-w-iext110030814.jpg",
      artist: "ScHoolboy Q",
      audio:
        "https://cdn01.ytapi.download/dl?hash=VNMLKadQF45JGwoZRFUTnF3exBZK5QFOJ8eqMPikweohN3HynNIH210OtxTAE84HedeMXTpKmGMN4Pie42FCxAqTsk97e5Ov0SyNTURqAHMZYlZL%2BqoI6TBHu%2BRgapj05Xc26LWM8bfxR91U7%2BZtTrGnkgCKfWkvciq4XqR1JU2US7D4vJEwJD%2F8177A5JI8EBFcRNZCaz8m6GZAnhn6Ig%3D%3D",
      color: ["#404040", "#000000"],
      id: v4(),
      active: false,
    },*/
  ];
}

export default chillHop;
