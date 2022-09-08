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
        "src/img/makingaway.webp",
      artist: "The BREED",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=41956",
      color: ["#C8BAA6", "#A93724"],
      id: v4(),
      active: false,
    },
    {
      name: "Flowers",
      cover:
        "src/img/Flowers.webp",
      artist: "The Field Tapes, Xander",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11249",
      color: ["#769C81", "#5A322A"],
      id: v4(),
      active: true,
    },
    {
      name: "Lunar Cycles",
      cover:
        "src/img/Lunar Cycles.webp",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10031",
      color: ["#0C819F", "#994E31"],
      id: v4(),
      active: false,
    },
    {
      name: "Woodnote",
      cover:
        "src/img/Woodnote.webp",
      artist: "Aarigod, Imagiro",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
      color: ["#B18945", "#B1C56D"],
      id: v4(),
      active: false,
    },
    {
      name: "Waterfalls",
      cover:
        "src/img/Waterfalls.webp",
      artist: "G Mills, Molly McPhaul",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16195",
      color: ["#D74F49", "#4FB7AC"],
      id: v4(),
      active: false,
    },
    {
      name: "Cruising",
      cover:
        "src/img/Cruising.webp",
      artist: "Evil Needle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      color: ["#EB4B4B", "#91736C"],
      id: v4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "src/img/Keep Going.webp",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: v4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "src/img/Under the City Stars.webp",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: v4(),
      active: false,
    },
    {
      name: "Daylight",
      cover:
        "src/img/Daylight.webp",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: v4(),
      active: false,
    },
    {
      name: "Sonar",
      cover:
        "src/img/Sonar.webp",
      artist: "Invention",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8288",
      color: ["#45598E", "#F59AAC"],
      id: v4(),
      active: false,
    },
    {
      name: "Desire",
      cover:
        "src/img/Desire.webp",
      artist: "Psalm Trees, Guillaume Muschalle",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10554",
      color: ["#D1E2DC", "#030204"],
      id: v4(),
      active: false,
    },
    {
      name: "Stay",
      cover:
        "src/img/Stay.webp",
      artist: "Swum",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7998",
      color: ["#393C60", "#0A3332"],
      id: v4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "src/img/Nightfall.webp",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: v4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "src/img/Reflection.webp",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: v4(),
      active: false,
    },
    {
      name: "Beaver Creek",
      cover:
        "src/img/Beaver Creek.webp",
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
