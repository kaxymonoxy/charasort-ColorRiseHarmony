dataSetVersion = "2025-03-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Stage",
    key: "stage",
    tooltip: "Check this to only include certain stages",
    checked: false,
    sub: [
      { name: "STAGE 1 [S1]", key: "s1" },
      { name: "STAGE 2 [S2]", key: "s2" },
      { name: "CREATORS STAGE [CS]", key: "cs" },
      { name: "STAGE 3 [S3]", key: "s3" }
    ]
  },
  {
    name: "Filter by Branches",
    key: "branch",
    tooltip: "Check this to only include certain branches. Collab performances with members from multiple branches, are included if at least one performer belongs to a branch that is checked",
    checked: false,
    sub: [
      { name: "JP", tooltip: "Japanese Branch", key: "jp" },
      { name: "EN", tooltip: "English Branch", key: "en" },
      { name: "ID", tooltip: "Indonesian Branch", key: "id" },
      { name: "DEV_IS", tooltip: "DEV_IS Branch", key: "dev" }
    ]
  },
  {
    name: "YT Freeview Only",
    key: "notfree",
    tooltip: "Check this to only include songs present in the free preview portions on YouTube",
	checked: false
  },
  {
    name: "Exclude Covers",
    key: "cover",
    tooltip: "Check this to exclude covers of non-Hololive songs",
	checked: false
  },
  {
    name: "Exclude Originals",
    key: "original",
    tooltip: "Check this to exclude original Hololive songs",
	checked: false
  },
  {
    name: "Exclude Collabs",
    key: "collab",
    tooltip: "Check this to exclude collab performances. FuwaMoco is NOT counted as a collab performance",
	checked: false
  },
  {
    name: "Exclude Solos",
    key: "solo",
    tooltip: "Check this to exclude solo performances. FuwaMoco IS counted as a solo performance",
	checked: false
  },
  {
    name: "Exclude Title Tracks",
    key: "title",
    tooltip: "Check this to exclude title track performances (Capture The Moment, Color Rise Harmony, Our Bright Parade)"
  },
  {
    name: "Exclude Duplicate Songs",
    key: "dupe",
    tooltip: "WARNING: DOES NOT WORK CORRECTLY WHEN FILTERING BY STAGES. Check this to only include one performance for songs that are performed more than once in the fes (Capture The Moment, Color Rise Harmony, III)."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "[S1] Suisei - Stellar Stellar",
    img: "i5dK6JV.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Capture The Moment (Holofes5 Title Track)",
    img: "GSg6LEG.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true,
	  dupe: true
    }
  },
  {
    name: "[S1] Koyori - Shiawase Koyorinium",
    img: "irTF9Wo.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Ollie - Children Record Re:Boot (Jin)",
    img: "aZKPJis.png",
    opts: {
      stage: ["s1"],
	  branch: ["id"],
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S1] Matsuri & Nene & La+ - Idol Life Starter Pack (iLIFE!)",
    img: "QjEo8ed.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1] La+ - Tokyo Teddy Bear (Neru)",
    img: "2Hv4q5I.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S1] Luna - Round and Round CircLuna -> Escort me! Lu-knight",
    img: "5s0YxCP.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] FuwaMoco - Born to be BAUDOL",
    img: "aT8qUQ7.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Flare & Noel - Daikangensai! Yume no Flare Channel! -> Wander",
    img: "yfT1oBX.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S1] Nerissa - Say My Name",
    img: "L925ibq.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] FuwaMoco - Backlit Wings (Elements Garden)",
    img: "OMzn9zt.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S1] Noel - Itazuranya!",
    img: "V6WBwCz.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Watame & IRyS - Los! Los! Los! (Aoi Yuuki)",
    img: "7W1w9co.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1] Flare - Funfair",
    img: "J7X765w.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Shiori - Kakusei (Superfly)",
    img: "LohZegt.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S1] Matsuri - Love Letter",
    img: "RtjdO9N.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Haato & Luna & Koyori - Hare Hare Yukai (Sumire Uesaka)",
    img: "kHYhYJ4.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1] Kaela - Brave Heart (Ayumi Miyazaki)",
    img: "s7ucUY2.png",
    opts: {
      stage: ["s1"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S1] Bijou - Prism no Mahou",
    img: "O89tKvt.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Nene - Im difficult, but love me",
    img: "P5LGhhT.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Hololive Advent - Rebellion",
    img: "CZReNuP.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S1] Haato - Who2",
    img: "w1Luh2D.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] IRyS - TwiLight",
    img: "2jWeizf.png",
    opts: {
      stage: ["s1"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Moona - Multiverse",
    img: "arJvrzn.png",
    opts: {
      stage: ["s1"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Moona & Ollie & Kaela - Be a Flower (Ryokuoushoku Shakai)",
    img: "zH9i5hd.png",
    opts: {
      stage: ["s1"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1] Watame - WataAme Pop",
    img: "dZJSJrX.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Towa - FACT -> My Abyss -> Raimei",
    img: "ETb9mVJ.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S1] Suisei & Towa - PLATONIC GIRL (MikitoP)",
    img: "WOQcfxe.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S1] Color Rise Harmony (Holofes6 Title Track)",
    img: "GSg6LEG.png",
    opts: {
      stage: ["s1"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true,
	  dupe: true
    }
  },
  {
    name: "[S2] Capture The Moment (Holofes5 Title Track)",
    img: "8lZhZvB.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en", "id", "dev"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[S2] Polka - Po",
    img: "XbmTnnU.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Baelz - Show (Ado)",
    img: "9dffO85.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2] Marine - How about Paipai Mask?",
    img: "Pb8m3so.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Hololive ReGLOSS - feelingradation",
    img: "LZ39noS.png",
    opts: {
      stage: ["s2"],
	  branch: ["dev"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S2] Iroha - Mahou Shoujo Magical GOZARU",
    img: "YoxZRzk.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Ririka - Kyou Mo Daitensai!",
    img: "OwKIHFG.png",
    opts: {
      stage: ["s2"],
	  branch: ["dev"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Reine - Yummy Yum Yummy",
    img: "tngmSxo.png",
    opts: {
      stage: ["s2"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Polka & Baelz - Mesmerizer (32ki)",
    img: "qqWI4MX.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2] Shion - Forgive Me Medicine",
    img: "aVbWCuV.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Ao - Club Blue Fire",
    img: "Ca8ftfv.png",
    opts: {
      stage: ["s2"],
	  branch: ["dev"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Otonose - Melt (ryo)",
    img: "TVfkcxA.png",
    opts: {
      stage: ["s2"],
	  branch: ["dev"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2] Risu & Reine & Kiara - ULTRA C (ReoL)",
    img: "ovAfKaP.png",
    opts: {
      stage: ["s2"],
	  branch: ["en", "id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2] Raden - KAMAKURA STYLE (Botchi Boromaru)",
    img: "apInXnE.png",
    opts: {
      stage: ["s2"],
	  branch: ["dev"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2] Hajime - Hai Yorokonde (Kocchi no Kento)",
    img: "5EkhIQB.png",
    opts: {
      stage: ["s2"],
	  branch: ["dev"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2] AZKi - Chaotic Inner World",
    img: "HerpmdH.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Kanata & Iroha - Noushou Sakuretsu Girl (rerulili)",
    img: "RL8XliR.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2] Risu - The Flameheart (Death Ohagi)",
    img: "OV7nLOY.png",
    opts: {
      stage: ["s2"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2] Kiara - MIRAGE",
    img: "t266jB6.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Kobo - Bear ~the bears first love, hes stumped~ (KOKIA)",
    img: "jIIMgBd.png",
    opts: {
      stage: ["s2"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S2] AZKi & Shion & Pekora - Hikarunara (Goose House)",
    img: "iLysQOM.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S2] Pekora - Saikyou Megami Usa Pekora",
    img: "WnpvN3G.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Lui - Evil Eye Wink",
    img: "WSFEvH2.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Mori & Lui - Excuse My Rudeness, But Could You Please RIP? -> Overd",
    img: "TDGTle7.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S2] Kanata - Fallen Wing",
    img: "KYSP80V.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Mori - Make Em Afraid -> FLASH BANG -> DONMAI",
    img: "eNAvZrA.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S2] Marine & Kobo - III",
    img: "ruJ4z2A.png",
    opts: {
      stage: ["s2"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  solo: true,
	  dupe: true
    }
  },
  {
    name: "[S2] Color Rise Harmony (Holofes6 Title Track)",
    img: "8lZhZvB.png",
    opts: {
      stage: ["s2"],
	  branch: ["jp", "en", "id", "dev"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[CS] Our Bright Parade (Holofes4 Title Track)",
    img: "C5kVcbB.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true
    }
  },
  {
    name: "[CS] Flare & Ollie & Pekora - Alibi Bunny",
    img: "P5KTFgf.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp", "id"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Marine & Koyori & Bijou & Zeta - Bishoujo Muzai Pirates",
    img: "cSFmqva.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Baelz - PLAY DICE!",
    img: "LYZOyps.png",
    opts: {
      stage: ["cs"],
	  branch: ["en"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Hololive 0th Generation - Bibbidiba",
    img: "y0W30Oo.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Lui - HoloHawk",
    img: "Mugdijs.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Nerissa & Mori - Go-Getters",
    img: "Hzncx3Q.png",
    opts: {
      stage: ["cs"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Marine - Im Your Treasure Box",
    img: "SCQ1JW6.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] FuwaMoco & Nene - Nenechis Giragira Fan Meeting",
    img: "OEXG0g1.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp", "en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Subaru & Noel - Gyu-Don Carnival!",
    img: "q6BgcmS.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Okayu - MOGU MOGU YUMMY!",
    img: "kcdzJ55.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Kiara & IRyS - SPARKS",
    img: "Xg9UJMn.png",
    opts: {
      stage: ["cs"],
	  branch: ["en"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Marine & Kobo - III",
    img: "8kpKWYJ.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp", "id"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Iofi & Moona - High Tide",
    img: "aCh8keH.png",
    opts: {
      stage: ["cs"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Towa - Palette",
    img: "oMMs6F6.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Mio & Ayame - Yakou Tsuushinn",
    img: "XsxeLlS.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[CS] Watame - My Song",
    img: "zS9ttHl.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Miko - DAI DAI DAI Fantasista",
    img: "PO5CneV.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Suisei - Soirée",
    img: "rZpMNMR.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[CS] Color Rise Harmony (Holofes6 Title Track)",
    img: "C5kVcbB.png",
    opts: {
      stage: ["cs"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true,
	  dupe: true
    }
  },
  {
    name: "[S3] Capture The Moment (Holofes5 Title Track)",
    img: "i8yZr7C.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp", "en", "id"],
	  original: true,
	  collab: true,
	  title: true,
	  dupe: true
    }
  },
  {
    name: "[S3] Lamy - Lamys Baribari Workout",
    img: "7YTajd8.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Subaru - Hoshi Kakeru Sora e",
    img: "BSndsBY.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Mio - Colorful Universe",
    img: "hQOYpF9.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Ayame & Fubuki & Mio - ONIKEMODANCE -> Blooming Blossoms Fill the Air",
    img: "vP8tuJE.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S3] Zeta - Break It Down",
    img: "6LsyYwE.png",
    opts: {
      stage: ["s3"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Iofi - Danna Sama to no Love Love Love Song (Rie Kugimiya)",
    img: "D7H9WWu.png",
    opts: {
      stage: ["s3"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3] Ayame - Yoi no Yo, Yoi! -> Kawayo -> YumeHanabi",
    img: "THic4Qr.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Iofi & Anya & Zeta - SUKI! CHO ver (Cho Tokimeki Sendenbu)",
    img: "S8NWs0c.png",
    opts: {
      stage: ["s3"],
	  branch: ["id"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3] Aki - Your Destiny Situation",
    img: "XSpdacu.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Anya - CHRONIC",
    img: "gJ3Vg3L.png",
    opts: {
      stage: ["s3"],
	  branch: ["id"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Choco - Choco Sensation",
    img: "UvO0vau.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Subaru & Sora & Miko - HOT DUCK! -> Star,star,start -> Kyun Kyun MIKO Kyun Kyun",
    img: "vXWHPyi.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S3] Kronii - Shukusei!! Loli Kami Requiem (Shigure Ui)",
    img: "dgPksch.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3] Korone - Mad POPCORN World!",
    img: "3WBKtqn.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Okayu - Kiss Dake de Ii Kara ne",
    img: "YffSbQu.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Ina & Gura & Kronii & Mumei - ID SMILE (toa)",
    img: "lnSO9Sp.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3] Roboco - ANIMA (ReoNa)",
    img: "HocAPyq.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3] Ina - Aishite Aishite Aishite (Kikuo)",
    img: "YxScoPb.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3] Gura - Dango Daikazoku (Chata)",
    img: "KQNJbuV.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3] Roboco & Aki & Choco - Hide and Seek",
    img: "R6UQvH5.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  collab: true
    }
  },
  {
    name: "[S3] Botan - Hikari",
    img: "8BB37G1.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Mumei - Semi-Transparent Boy (Yorushika)",
    img: "OnKbaQq.png",
    opts: {
      stage: ["s3"],
	  branch: ["en"],
	  notfree: true,
	  cover: true,
	  solo: true
    }
  },
  {
    name: "[S3] Lamy & Botan - GimmexGimme (HachiojiP & Giga)",
    img: "neMPgKM.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3] Sora - Lucky 7th Whistle",
    img: "tvgF8rZ.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Fubuki - SUPERNOVA",
    img: "cchXm1p.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Okayu & Korone - if... (DA PUMP)",
    img: "mYMKfDD.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  cover: true,
	  collab: true
    }
  },
  {
    name: "[S3] Miko - Flower Rhapsody",
    img: "mJMWYT9.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp"],
	  notfree: true,
	  original: true,
	  solo: true
    }
  },
  {
    name: "[S3] Color Rise Harmony (Holofes6 Title Track)",
    img: "i8yZr7C.png",
    opts: {
      stage: ["s3"],
	  branch: ["jp", "en", "id"],
	  notfree: true,
	  original: true,
	  collab: true,
	  title: true,
	  dupe: true
    }
  },
];
