// ================= DATA =================
// locs: [name, scene type, x (0-100), y (0-100)]; ll = [longitude, latitude] for the USA map
const CITIES = {
    "Chicago": { ll: [-87.6, 41.9], locs: [["Navy Pier","water",86,30],["Union Station","station",40,50],["Loop Diner","neon",55,38],["Riverside Bar","neon",30,22],["Old Steel Mill","industrial",18,78],["Lakeview Pawn Shop","shop",75,12],["Wrigley Bleachers","lot",12,35],["Greektown Taverna","neon",68,65]] },
    "Los Angeles": { ll: [-118.2, 34.0], locs: [["Santa Monica Pier","water",10,55],["Hollywood Motel","hotel",45,15],["Sunset Studio Lot","culture",62,28],["Downtown Mission","shop",70,60],["Griffith Observatory","culture",30,10],["Venice Skate Park","lot",15,80],["Hollywood Cemetery","grave",85,20],["Long Beach Harbor","water",88,85]] },
    "Miami": { ll: [-80.2, 25.8], locs: [["South Beach Club","neon",88,50],["Little Havana Cafe","neon",35,45],["Harbor Docks","water",70,80],["Palm Grove Hotel","hotel",60,20],["Everglades Bait Shop","shop",12,70],["Ocean Drive Casino","neon",85,25],["Calle Ocho Pawn","shop",20,30],["Bayfront Park","lot",50,70]] },
    "Boston": { ll: [-71.1, 42.4], locs: [["Harbor Wharf","water",80,60],["Beacon Hill Pub","neon",40,30],["University Library","culture",15,45],["Fenway Parking Lot","lot",30,75],["North End Bakery","shop",65,20],["Old Cemetery","grave",55,85],["Navy Yard Foundry","industrial",90,25],["Back Bay Hotel","hotel",25,15]] },
    "New Orleans": { ll: [-90.1, 29.95], locs: [["Bourbon Street Bar","neon",50,40],["French Market","shop",70,30],["Garden District Mansion","hotel",20,65],["Riverboat Casino","neon",85,60],["Voodoo Shop","shop",35,20],["Bayou Dock","water",60,85],["St. Louis Cemetery","grave",10,35],["Jackson Square","culture",55,65]] }
};
CITIES["New York"] = { ll: [-74.0, 40.7], left: true, locs: [["Times Square Arcade","neon",50,30],["Grand Central","station",35,55],["Brooklyn Bridge Pier","water",80,70],["Harlem Jazz Club","neon",25,15],["Chinatown Noodle Shop","shop",60,80],["Central Park Boathouse","culture",70,10],["Hells Kitchen Garage","lot",12,45],["Wall Street Hotel","hotel",90,40]] };
CITIES["Seattle"] = { ll: [-122.3, 47.6], locs: [["Pike Place Market","shop",40,35],["Space Needle Plaza","culture",55,15],["Elliott Bay Ferry","water",15,50],["Capitol Hill Bar","neon",70,45],["Old Cannery","industrial",85,80],["Pioneer Square Hotel","hotel",30,75],["Troll Underpass","lot",60,65],["Lake Union Boathouse","water",90,30]] };
CITIES["Las Vegas"] = { ll: [-115.1, 36.2], locs: [["The Strip Casino","neon",50,25],["Desert Motel","hotel",15,70],["Fremont Chapel","shop",75,40],["Neon Boneyard","grave",85,75],["Dam Lookout","culture",20,20],["Old Town Pawn Shop","shop",55,80],["Fremont Street Bar","neon",80,15],["Wedding Chapel","shop",40,55]] };
const US_OUTLINE = [[-124.7,48.4],[-123.3,49],[-95.2,49],[-89.5,48],[-84.5,46.5],[-82.5,45.3],[-82.4,43],[-79,43.2],[-76.5,44],[-75,45],[-71.5,45],[-70.2,46.7],[-67.8,47.1],[-67,44.8],[-70,43.5],[-70.6,42.6],[-70,41.7],[-73.9,40.6],[-74,39.5],[-75.5,38.5],[-76,37],[-75.7,35.2],[-78,33.9],[-81,32],[-81.3,30.3],[-80,27],[-80.4,25.2],[-81.2,25.2],[-82.7,27.7],[-82.7,29.2],[-84,30],[-85.3,29.7],[-87,30.3],[-89,30.2],[-89.4,29],[-90.5,29.2],[-93.8,29.7],[-97,27.8],[-97.4,25.9],[-99.2,26.5],[-101,29.7],[-104.5,29.6],[-106.5,31.8],[-108.2,31.8],[-108.2,31.3],[-111,31.3],[-114.8,32.5],[-117.1,32.5],[-118.5,34],[-120.6,34.5],[-122.4,37.2],[-123.8,39.5],[-124.4,40.4],[-124.2,43],[-124.1,46.2]];

const FIRST = ["Tony","Linda","Marcus","Elena","Jack","Rosa","Victor","Nina","Carl","Dana","Oscar","Helen","Frank","Maya","Sofia","Dmitri","Aiden","Priya","Luis","Greta","Omar","Chloe","Ivan","Tessa","Miguel","Hana","Boris","Leah","Sam","Irene"];
const LAST = ["Miller","Davis","Reyes","Brooks","Novak","Carter","Hayes","Moreno","Ellis","Foster","Quinn","Ward","Price","Stone","Petrov","Okafor","Chen","Silva","Rossi","Kowalski","Haddad","Murphy","Tanaka","Jovanovic","Lopez","Weber","Singh","Duarte","Bianchi","Larsen"];
const SUSPECT_JOBS = ["Police officer","Bartender","CEO","Lawyer","Mechanic","Student","Pharmacist","Accountant","Bouncer","Journalist","Chef","Landlord","Nurse","Tattoo artist","Professor","Florist","Musician","Realtor","Dealer","Taxi dispatcher"];
const WITNESS_JOBS = ["Street vendor","Night janitor","Taxi driver","Barista","Dock worker","Newsstand clerk","Paramedic","Security guard","Hot dog vendor","Bus driver","Night nurse","Florist"];
const VICTIMS = ["Victor Hale","Samantha Cole","Raymond Pike","Julia Marsh","Eddie Lang"];
const MOTIVES = ["The victim owed me money, but I'd never hurt anyone.","Yes, we argued last week. Everybody argued with the victim.","I won't lie, I didn't like them. That's not a crime."];

const VEHICLES = [
    { file: "drives a red sedan", seen: "peel away in a red sedan" },
    { file: "drives a blue coupe", seen: "speed off in a blue coupe" },
    { file: "drives a black SUV", seen: "leave in a black SUV" },
    { file: "drives a white van", seen: "drive off in a white van" },
    { file: "rides a motorcycle", seen: "ride off on a motorcycle" },
    { file: "rides a bicycle", seen: "pedal away on a bicycle" },
    { file: "walks everywhere", seen: "run off on foot" },
    { file: "rides an electric scooter", seen: "glide away on an electric scooter" }
];
const CLOTHES = [
    { file: "a gray hoodie", seen: "wearing a gray hoodie", col: "#6b7280" },
    { file: "a long brown coat", seen: "wearing a long brown coat", col: "#6b4a2f" },
    { file: "a red cap", seen: "wearing a red cap", col: "#9b2c2c" },
    { file: "a yellow raincoat", seen: "wearing a yellow raincoat", col: "#c9a227" },
    { file: "a black leather jacket", seen: "wearing a black leather jacket", col: "#1f2430" },
    { file: "a green scarf", seen: "wearing a green scarf", col: "#2f6b4a" },
    { file: "a white linen suit", seen: "wearing a white linen suit", col: "#cfd2d6" },
    { file: "a navy beanie", seen: "wearing a navy beanie", col: "#223a66" }
];
const FEATURES = [
    { file: "walks with a limp", seen: "were limping" },
    { file: "has a neck tattoo", seen: "had a tattoo on the neck" },
    { file: "wears thick glasses", seen: "had thick glasses" },
    { file: "has a scar on the cheek", seen: "had a scar on the cheek" },
    { file: "is missing part of a finger", seen: "had a finger missing" },
    { file: "has a gold tooth", seen: "flashed a gold tooth" },
    { file: "carries a metal briefcase", seen: "carried a metal briefcase" }
];
const HABITS = [
    { file: "smokes cheap cigars", seen: "smoked cheap cigars" },
    { file: "chews mint gum constantly", seen: "kept chewing mint gum" },
    { file: "wears heavy cologne", seen: "wore heavy cologne" },
    { file: "carries a hip flask", seen: "carried a hip flask" },
    { file: "cracks their knuckles", seen: "kept cracking their knuckles" },
    { file: "hums old jazz tunes", seen: "was humming an old jazz tune" }
];
const OPENERS = ["Look, it happened fast, but ", "I didn't want to get involved, but ", "Okay, officer. ", "Honestly? ", "I keep seeing it when I close my eyes. ", "Fine, I'll tell you. "];
const ALIBI_TIMES = ["from 10 PM until about 1 AM", "from 9 PM until almost 2 AM", "from 11 PM until closing time", "since early evening, well past midnight", "from 10:30 PM until 3 AM", "the whole night"];
const NOCOVER = ["from 7 PM until 11 PM", "until about 10 PM, then I walked around alone", "from 8 PM until 11:30 PM"];
const MOODS = ["*fidgets nervously* ", "*lights a cigarette* ", "*shrugs* ", "*glances over their shoulder* ", "*sighs* ", "", "", "*crosses their arms* "];
const TR = ["vehicle", "clothing", "feature", "habit"];
const POOL = { vehicle: VEHICLES, clothing: CLOTHES, feature: FEATURES, habit: HABITS };

const DIFFICULTY = {
    easy:   { label: "Easy ★",      need: 0, assist: 2, suspects: 5,  decoys: 0, gated: false, cctv: true,  hedge: false },
    normal: { label: "Medium ★★",   need: 1, assist: 1, suspects: 6,  decoys: 1, gated: true,  cctv: true,  hedge: false },
    hard:   { label: "Hard ★★★",    need: 3, assist: 0, suspects: 8,  decoys: 2, gated: true,  cctv: false, hedge: true },
    expert: { label: "Expert ★★★★", need: 4, assist: 0, suspects: 10, decoys: 3, gated: true,  cctv: false, hedge: true }
};

let state = {};
let offers = {};

const rnd = n => Math.floor(Math.random() * n);
const pick = a => a[rnd(a.length)];
const shuffle = a => [...a].sort(() => Math.random() - 0.5);
const el = id => document.getElementById(id);
const hash = s => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

// ================= AUDIO (synthesized, no files needed) =================
const A = { ctx: null, music: true, sfx: true, voice: false, vol: 0.5, i: 0 };
const BASS = [110, 110, 130.8, 98, 110, 110, 164.8, 146.8];
const LEAD = [440, 523.3, 659.3, 392, 349.2, 587.3];

function tone(freq, dur, type, vol, dest, delay = 0) {
    const c = A.ctx, o = c.createOscillator(), g = c.createGain(), t = c.currentTime + delay;
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.05);
}

function audioInit() {
    if (A.ctx) { A.ctx.resume(); return; }
    try {
        A.ctx = new (window.AudioContext || window.webkitAudioContext)();
        A.master = A.ctx.createGain();
        A.master.gain.value = A.music ? A.vol : 0;
        A.master.connect(A.ctx.destination);
        setInterval(() => {
            if (!A.music) return;
            const i = A.i++;
            tone(BASS[i % 8] * 2, 0.8, "triangle", 0.3, A.master);
            if (i % 8 === 0) [220, 261.6, 329.6].forEach(f => tone(f, 5, "sine", 0.09, A.master));
            if (i % 4 === 2 || Math.random() < 0.25) tone(pick(LEAD), 1.4, "triangle", 0.16, A.master);
        }, 650);
    } catch (e) {}
}

function sfx(kind) {
    if (!A.ctx || !A.sfx) return;
    const d = A.ctx.destination, v = A.vol * 0.4;
    if (kind === "click") tone(700, 0.06, "square", v * 0.5, d);
    if (kind === "tick") tone(280 + Math.random() * 90, 0.03, "square", v * 0.12, d);
    if (kind === "lead") { tone(520, 0.2, "sine", v, d); tone(780, 0.3, "sine", v, d, 0.12); }
    if (kind === "bad") tone(110, 0.5, "sawtooth", v, d);
    if (kind === "win") [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.5, "triangle", v, d, i * 0.14));
}

function refreshAudioUI() {
    el("musicBtn").dataset.en = "🎵 Music: " + (A.music ? "ON" : "OFF");
    el("sfxBtn").dataset.en = "🔊 Sound effects: " + (A.sfx ? "ON" : "OFF");
    el("voiceBtn").dataset.en = "🗣 Voice: " + (A.voice ? "ON" : "OFF");
    applyLang();
}
function toggleVoice() { A.voice = !A.voice; if (!A.voice && window.speechSynthesis) speechSynthesis.cancel(); refreshAudioUI(); }
function speak(text, p) {
    if (!A.voice || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/\*[^*]*\*/g, ""));
    const h = hash(p.id);
    u.lang = "en-US"; u.pitch = 0.6 + (h % 10) / 10 * 1.2; u.rate = 0.9 + (h % 5) / 20; u.volume = A.vol;
    speechSynthesis.speak(u);
}
function toggleMusic() { audioInit(); A.music = !A.music; if (A.master) A.master.gain.value = A.music ? A.vol : 0; refreshAudioUI(); }
function toggleSfx() { audioInit(); A.sfx = !A.sfx; refreshAudioUI(); sfx("click"); }
function setVol(v) { A.vol = v; if (A.master && A.music) A.master.gain.value = v; }
document.addEventListener("click", e => { if (e.target.closest && e.target.closest(".button")) sfx("click"); });

// ================= NOIR ART (generated SVG) =================
function scene(type, name, seed, crime) {
    let s = seed * 7919 + 13;
    const r = () => (s = (s * 9301 + 49297) % 233280) / 233280;
    let b = "";
    for (let i = 0; i < 16; i++) {
        const w = 40 + r() * 40, h = 60 + r() * 110, x = i * 52 - 10;
        b += `<rect x="${x}" y="${240 - h}" width="${w}" height="${h}" fill="#0a0c13"/>`;
        for (let k = 0; k < 4; k++) if (r() < 0.35) b += `<rect x="${x + 6 + r() * (w - 16)}" y="${240 - h + 8 + r() * (h - 20)}" width="5" height="7" class="w" style="animation-delay:${(r() * 5).toFixed(1)}s" fill="#e8c36a" opacity=".6"/>`;
    }
    const neon = pick(["#ff3e8a", "#00f0ff", "#ffb347"]);
    const txt = (y, size, col, t) => `<text x="400" y="${y}" text-anchor="middle" font-family="Courier New" font-size="${size}" font-weight="bold" fill="${col}" filter="url(#gl)">${t.toUpperCase()}</text>`;
    const T = {
        water: `<rect y="165" width="800" height="75" fill="#08111d"/>` + [...Array(9)].map((_, i) => `<rect x="${60 + i * 85}" y="140" width="8" height="70" fill="#05070c"/>`).join("") + `<circle cx="650" cy="120" r="9" fill="#ffd98a" filter="url(#gl)"/><path d="M630 170h40M620 185h60M635 200h30" stroke="#ffd98a" opacity=".35"/>`,
        station: `<path d="M180 240V130Q400 20 620 130V240Z" fill="#06070b"/><circle cx="400" cy="95" r="26" fill="#10131c" stroke="#d8dde8" stroke-width="3"/><path d="M400 95V77M400 95l13 7" stroke="#d8dde8" stroke-width="3"/><rect x="230" y="160" width="40" height="80" fill="#e8c36a" opacity=".5"/><rect x="530" y="160" width="40" height="80" fill="#e8c36a" opacity=".5"/>`,
        neon: `<rect x="200" y="70" width="400" height="170" fill="#07080d"/><rect x="240" y="150" width="120" height="70" fill="#e8c36a" opacity=".5"/><rect x="440" y="150" width="120" height="70" fill="#e8c36a" opacity=".25"/>` + txt(118, 24, neon, name),
        industrial: `<rect x="150" y="60" width="40" height="180" fill="#05060a"/><rect x="230" y="90" width="34" height="150" fill="#05060a"/><rect x="420" y="130" width="230" height="110" fill="#07080d"/><ellipse cx="175" cy="45" rx="50" ry="18" fill="#3a3f4b" opacity=".5"/><ellipse cx="260" cy="70" rx="40" ry="14" fill="#3a3f4b" opacity=".4"/><rect x="450" y="170" width="30" height="30" fill="#e8c36a" opacity=".45"/>`,
        shop: `<rect x="230" y="90" width="340" height="150" fill="#07080d"/>` + [...Array(8)].map((_, i) => `<rect x="${230 + i * 42.5}" y="110" width="42.5" height="26" fill="${i % 2 ? "#7a1f1f" : "#2a2f3a"}"/>`).join("") + `<rect x="260" y="150" width="130" height="70" fill="#e8c36a" opacity=".45"/>` + txt(100, 18, "#ffd98a", name),
        hotel: `<rect x="300" y="30" width="200" height="210" fill="#07080d"/>` + [...Array(30)].map((_, i) => `<rect x="${316 + (i % 5) * 36}" y="${60 + Math.floor(i / 5) * 28}" width="16" height="16" fill="#e8c36a" opacity="${r() < 0.4 ? 0.6 : 0.08}"/>`).join("") + txt(50, 22, neon, "HOTEL"),
        culture: `<path d="M240 120L400 60L560 120Z" fill="#07080d"/>` + [...Array(6)].map((_, i) => `<rect x="${260 + i * 52}" y="120" width="18" height="100" fill="#10131c"/>`).join("") + `<rect x="230" y="220" width="340" height="20" fill="#07080d"/>`,
        grave: [...Array(10)].map((_, i) => `<path d="M${40 + i * 78} 215v-${25 + r() * 25}h-12h24h-12" stroke="#05060a" stroke-width="7"/>`).join("") + `<path d="M690 240V110M690 150l-50-40M690 130l40-30" stroke="#05060a" stroke-width="9"/>`,
        lot: `<rect y="195" width="800" height="45" fill="#05070c"/>` + [100, 400, 700].map(x => `<rect x="${x}" y="80" width="5" height="120" fill="#05060a"/><circle cx="${x + 2}" cy="80" r="8" fill="#ffd98a" filter="url(#gl)"/>`).join("") + [180, 520].map(x => `<rect x="${x}" y="178" width="100" height="28" rx="10" fill="#07080d"/>`).join("")
    };
    const rain = [...Array(45)].map(() => { const x = r() * 800, y = r() * 240; return `<line x1="${x}" y1="${y}" x2="${x - 6}" y2="${y + 22}" stroke="#9fb2cc" opacity="${0.12 + r() * 0.2}"/>`; }).join("");
    const tape = crime ? `<line x1="0" y1="205" x2="800" y2="175" stroke="#e6c200" stroke-width="7" stroke-dasharray="16 10"/>` : "";
    return `<svg viewBox="0 0 800 240" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05060a"/><stop offset="1" stop-color="#1c2230"/></linearGradient><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8aa" stop-opacity="0"/><stop offset="1" stop-color="#8aa" stop-opacity=".25"/></linearGradient><filter id="gl"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect width="800" height="240" fill="url(#sk)"/><circle cx="${100 + r() * 600}" cy="40" r="20" fill="#d8dde8" opacity=".75" filter="url(#gl)"/>${b}${T[type]}<rect y="140" width="800" height="100" fill="url(#fg)"/>${tape}<g class="rain">${rain}</g></svg>`;
}

function portrait(p, met) {
    const bg = `<defs><linearGradient id="pb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c2230"/><stop offset="1" stop-color="#05060a"/></linearGradient></defs><rect width="100" height="100" fill="url(#pb)"/>`;
    if (!met) return `<svg viewBox="0 0 100 100">${bg}<path d="M10 100Q15 68 50 66Q85 68 90 100Z" fill="#2a2f3a"/><ellipse cx="50" cy="42" rx="17" ry="21" fill="#2a2f3a"/><text x="50" y="52" text-anchor="middle" font-size="26" fill="#6b7280" font-family="Courier New">?</text></svg>`;
    const t = p.traits, h = hash(p.id + p.name), col = CLOTHES[t.clothing].col;
    const hair = ["#111", "#3a2a1c", "#777", "#2a1a10"][h % 4];
    let f = `<path d="M10 100Q15 68 50 66Q85 68 90 100Z" fill="${col}"/><rect x="43" y="56" width="14" height="14" fill="#7a6a5a"/><ellipse cx="50" cy="42" rx="17" ry="21" fill="#8a7a6a"/>`;
    f += t.clothing === 2 ? `<path d="M31 38Q50 14 69 38Z" fill="${col}"/><rect x="28" y="36" width="30" height="4" fill="${col}"/>` :
         t.clothing === 7 ? `<path d="M31 36Q50 10 69 36Z" fill="${col}"/>` :
         h % 3 === 0 ? `<path d="M32 36Q50 12 68 36Q50 26 32 36Z" fill="${hair}"/>` : `<path d="M32 40Q33 16 50 18Q67 16 68 40Q60 28 50 28Q40 28 32 40Z" fill="${hair}"/>`;
    if (t.clothing === 5) f += `<rect x="36" y="62" width="28" height="9" rx="4" fill="${col}"/>`;
    if (t.feature === 2) f += `<circle cx="43" cy="41" r="5" fill="none" stroke="#111" stroke-width="1.6"/><circle cx="57" cy="41" r="5" fill="none" stroke="#111" stroke-width="1.6"/><path d="M48 41h4" stroke="#111"/>`;
    if (t.feature === 3) f += `<path d="M58 40l-5 12" stroke="#4a2a2a" stroke-width="1.6"/>`;
    if (t.feature === 1) f += `<path d="M44 62l3 5M50 62l3 5M55 62l-2 4" stroke="#1a3a4a" stroke-width="1.6"/>`;
    if (t.feature === 5) f += `<rect x="49" y="52" width="3" height="3" fill="#e0b020"/>`;
    if (t.feature === 6) f += `<rect x="62" y="82" width="26" height="16" fill="#5a5f6a" stroke="#111"/>`;
    f += `<ellipse class="eye" cx="43" cy="42" rx="2.2" ry="1.6" fill="#111"/><ellipse class="eye" cx="57" cy="42" rx="2.2" ry="1.6" fill="#111"/><path d="M44 52Q50 55 56 52" stroke="#2a1a1a" fill="none" stroke-width="1.4"/><rect width="50" height="100" fill="#000" opacity=".35"/>`;
    return `<svg viewBox="0 0 100 100">${bg}${f}</svg>`;
}

// ================= PROFILE, RANKS, TUTORIAL =================
const RANKS = [["Rookie", 0], ["Officer", 2], ["Detective", 4], ["Senior Detective", 7], ["Inspector", 11], ["Chief", 16]];
let profile = { solved: 0, tutorialDone: false, cash: 0, items: {}, theme: "" };
const awakeLimit = () => 16 + (profile.items.thermos ? 4 : 0);
try { Object.assign(profile, JSON.parse(localStorage.getItem("caseClosedProfile") || "{}")); } catch (e) {}
const saveProfile = () => { try { localStorage.setItem("caseClosedProfile", JSON.stringify(profile)); } catch (e) {} };
const rankIndex = () => RANKS.reduce((r, x, i) => profile.solved >= x[1] ? i : r, 0);
function updateMenuRank() {
    const i = rankIndex();
    el("rankLine").innerText = `${tr("Rank")}: ${RANKS[i][0]} | ${tr("Cases solved")}: ${profile.solved} | ${tr("Cash")}: $${profile.cash}`;
    el("tutBtn").dataset.en = profile.tutorialDone ? "🎓 REPLAY TUTORIAL" : "🎓 TUTORIAL (RECOMMENDED)";
    el("tutBtn").classList.toggle("glow", !profile.tutorialDone);
    applyLang();
}
function lockedMsg() { alert(dyn("Locked. Solve more cases to rank up.")); }
function startTutorial() { startNewCase("Chicago", "easy", true); }

const TIPS = {
    intro: ["STEP 1/12. Welcome to your first day. Read the case story: it tells you the city, the victim and where the body was found. You have 168 hours (7 days). Now click START INVESTIGATION.", "KORAK 1/12. Dobro došao na prvi radni dan. Pročitaj priču o slučaju: kaže ti grad, žrtvu i gde je pronađeno telo. Imaš 168 sati (7 dana). Sada klikni ZAPOČNI ISTRAGU.", "#introScreen .button"],
    map: ["STEP 2. This is the city map. Each dot is a place you can visit and the small number is the travel time in hours. The top bar shows the time left, how long you have been awake and the clock. The red ✖ is the crime scene. Click it.", "KORAK 2. Ovo je mapa grada. Svaka tačka je mesto koje možeš da posetiš, a mali broj je vreme putovanja u satima. Gornja traka pokazuje preostalo vreme, koliko si budan i sat. Crveno ✖ je mesto zločina. Klikni na njega.", ".pin.crime"],
    crime: ["STEP 3. You are at the crime scene. The big picture is the location. The buttons on top are your actions: each costs hours and works only once per place. People who are here stand at the bottom. First click 🧤 Search scene to look for physical evidence.", "KORAK 3. Na mestu si zločina. Velika slika je lokacija. Dugmad gore su tvoje akcije: svaka troši sate i radi samo jednom po mestu. Ljudi koji su ovde stoje dole. Prvo klikni 🧤 Pretraži mesto zločina da potražiš dokaze.", "#searchBtn"],
    search: ["STEP 4. You found evidence about the killer. Everything you learn is saved in your NOTEBOOK. Next click 📹 CCTV to review the camera.", "KORAK 4. Našao si dokaz o ubici. Sve što saznaš čuva se u tvojoj BELEŽNICI. Sledeće klikni 📹 Kamere da pregledaš snimak.", "#cctvBtn"],
    cctv: ["STEP 5. The camera showed what the killer wore: another clue. Now click a person at the bottom to question them.", "KORAK 5. Kamera je pokazala šta je ubica nosio: još jedan trag. Sada klikni na osobu dole da je ispitaš.", ".sprite"],
    empty: ["STEP 5. Nobody is here, and the camera saw nothing useful. That is normal: not every place has clues. We have no clue here, so we must look around. Click 🗺 Map and visit another place.", "KORAK 5. Ovde nema nikoga, a kamera nije snimila ništa korisno. To je normalno: nema tragova na svakom mestu. Ovde nemamo nikakav trag, pa moramo da tražimo drugde. Klikni 🗺 Mapa i poseti drugo mesto.", "#mapBtn"],
    nocctv: ["The camera here saw nothing. Not every place has clues. Talk to the people here, or click 🗺 Map to look somewhere else.", "Kamera ovde nije videla ništa. Nema tragova na svakom mestu. Razgovaraj sa ljudima ovde ili klikni 🗺 Mapa da tražiš drugde.", ".sprite, #mapBtn"],
    talk: ["STEP 6. Read what the person says. Witnesses describe the killer (vehicle, clothes, looks, habits). Suspects tell you where they claim to have been and when. The murder happened at midnight: an alibi that covers midnight and checks out clears that person. Now open your NOTEBOOK.", "KORAK 6. Pročitaj šta osoba kaže. Svedoci opisuju ubicu (prevoz, odeću, izgled, navike). Osumnjičeni kažu gde tvrde da su bili i kada. Ubistvo se desilo u ponoć: alibi koji pokriva ponoć i potvrđen je skida sumnju sa te osobe. Sada otvori BELEŽNICU.", "#nbToggle"],
    notebook: ["STEP 7. This is your notebook. NOTES lists everything you heard. PEOPLE holds a file on everyone you found. CASE sums up what you know about the killer. COMPARE lines the clues up against people. POLICE gives you help. Click PEOPLE.", "KORAK 7. Ovo je tvoja beležnica. BELEŠKE sadrže sve što si čuo. LJUDI čuvaju dosije svakog pronađenog. SLUČAJ sažima šta znaš o ubici. UPOREDI poredi tragove sa ljudima. POLICIJA ti pomaže. Klikni LJUDI.", "#tab-people"],
    tabpeople: ["STEP 8. Each card shows a portrait, job, where to find the person, looks and alibi. 'Reported at' means you only heard of them: go there to meet them. Now click CASE.", "KORAK 8. Svaka kartica ima portret, posao, gde se osoba nalazi, izgled i alibi. 'Prijavljen na lokaciji' znači da si samo čuo za nju: idi tamo da je upoznaš. Sada klikni SLUČAJ.", "#tab-case"],
    tabcase: ["STEP 9. CASE lists the clues about the killer and who gave them. (?) means the source was unsure. Collect clues in all four categories. Now click COMPARE.", "KORAK 9. SLUČAJ navodi tragove o ubici i ko ih je dao. (?) znači da izvor nije bio siguran. Skupi tragove u sve četiri kategorije. Sada klikni UPOREDI.", "#tab-compare"],
    compare: ["STEP 10. The CLUES row on top is what you know about the killer. Below are the people you met. Green cells match a clue. The person who matches every clue is the killer, so keep investigating until exactly one person fits. Now click POLICE.", "KORAK 10. Red TRAGOVI gore je ono što znaš o ubici. Ispod su ljudi koje si upoznao. Zelene ćelije se poklapaju sa tragom. Osoba koja se poklapa sa svim tragovima je ubica, zato istražuj dok ne ostane tačno jedna osoba. Sada klikni POLICIJA.", "#tab-police"],
    tabpolice: ["STEP 11. Police can tail a person for 12 hours (2 times per case). When time is almost out you can request a roadblock for +24 hours. When you are sure who it is, press ARREST at the bottom of the notebook. Now click CLOSE.", "KORAK 11. Policija može da prati osobu 12 sati (2 puta po slučaju). Kad vreme skoro istekne, možeš da zatražiš blokadu za +24 sata. Kad si siguran ko je, pritisni UHAPSI na dnu beležnice. Sada klikni ZATVORI.", "#nbClose"],
    closed: ["STEP 12. Carry on: click 🗺 Map, visit other places, talk to everyone and use 🔎 Alibis to check who really was where. In this tutorial a wrong arrest only warns you, in real cases it ends the case.", "KORAK 12. Nastavi: klikni 🗺 Mapa, poseti druga mesta, razgovaraj sa svima i koristi 🔎 Alibiji da proveriš ko je stvarno bio gde. U ovom tutorijalu pogrešno hapšenje samo upozorava, u pravim slučajevima završava slučaj.", "#mapBtn"],
    loc2: ["Tip: 🔎 Alibis shows who really was at this place that night and reveals new people. Click it.", "Savet: 🔎 Alibiji pokazuju ko je zaista bio na ovom mestu te noći i otkrivaju nove ljude. Klikni na to.", "#alibiBtn"]
};
function tip(k) {
    if (!state.tutorial || state.tipsSeen[k]) return;
    state.tipsSeen[k] = 1;
    document.querySelectorAll(".glow").forEach(e => e.classList.remove("glow"));
    const [en, sr, target] = TIPS[k], b = el("tipBox");
    b.innerText = (lang === "sr" ? "👮 ŠEF: " + sr : "👮 CHIEF: " + en);
    b.classList.remove("hidden");
    setTimeout(() => document.querySelectorAll(target).forEach(e => e.classList.add("glow")), 50);
}
function toggleNotebook() {
    const open = document.querySelector(".notebook-panel").classList.toggle("open");
    el("nbToggle").classList.remove("pulse");
    if (open) tip("notebook");
}
function closeNotebook() {
    const nb = document.querySelector(".notebook-panel"), was = nb.classList.contains("open");
    nb.classList.remove("open");
    if (was) tip("closed");
}
let typer;
function typeText(t) {
    t = dyn(t);
    clearInterval(typer);
    const box = el("dialogueText"), av = el("personAvatar");
    let i = 0;
    box.innerText = "";
    av.classList.add("talking");
    typer = setInterval(() => {
        box.innerText = t.slice(0, ++i);
        if (i % 3 === 0) sfx("tick");
        if (i >= t.length) { clearInterval(typer); av.classList.remove("talking"); }
    }, 18);
}

// ================= SCREENS =================
function switchScreen(id) {
    ["menuScreen","settingsScreen","quitScreen","usaScreen","officeScreen","introScreen","mapScreen","locationScreen","endScreen"].forEach(s => el(s).classList.add("hidden"));
    el(id).classList.remove("hidden");
    if (id === "menuScreen") updateMenuRank();
    const menu = ["menuScreen","settingsScreen","quitScreen","usaScreen","officeScreen"].includes(id);
    el("menuView").classList.toggle("hidden", !menu);
    el("gameView").classList.toggle("hidden", menu);
    const arrest = ["mapScreen","locationScreen"].includes(id);
    el("nbToggle").classList.toggle("hidden", !arrest);
    el("leaveBtn").classList.toggle("hidden", !arrest);
    if (!arrest) closeNotebook();
    el("arrestSection").classList.toggle("hidden", !arrest);
    if (!arrest) el("arrestDiv").classList.add("hidden");
}

function showSettings() { audioInit(); refreshAudioUI(); renderThemes(); switchScreen("settingsScreen"); }
function quitGame() { switchScreen("quitScreen"); try { window.close(); } catch (e) {} }

function showUSA() {
    audioInit();
    const levels = shuffle(["easy","easy","easy","normal","normal","hard","hard","expert"]);
    Object.keys(CITIES).forEach((c, i) => offers[c] = levels[i]);
    const px = ll => [30 + (ll[0] + 125) * 13.2, 20 + (50 - ll[1]) * 17.5];
    const path = US_OUTLINE.map((p, i) => (i ? "L" : "M") + px(p).join(" ")).join("") + "Z";
    let g = `<path d="${path}" fill="#10141d" stroke="#2d3748" stroke-width="2"/>`;
    for (let i = 1; i < 9; i++) g += `<path d="M${i * 100} 0V520" stroke="#141a26"/>`;
    Object.entries(CITIES).forEach(([c, d]) => {
        const [x, y] = px(d.ll), lv = offers[c], open = rankIndex() >= DIFFICULTY[lv].need;
        const col = !open ? "#555b66" : { easy: "#00ff66", normal: "#f6c453", hard: "#ff3e3e", expert: "#c084fc" }[lv];
        const tx = d.left ? x - 18 : x + 18, an = d.left ? "end" : "start";
        g += `<g class="pin" onclick="${open ? `startNewCase('${c}','${lv}')` : "lockedMsg()"}"><circle cx="${x}" cy="${y}" r="11" fill="${col}" opacity=".85"><animate attributeName="r" values="9;14;9" dur="2s" repeatCount="indefinite"/></circle><text x="${tx}" y="${y - 2}" text-anchor="${an}" font-size="17" font-weight="bold">${c}</text><text x="${tx}" y="${y + 15}" text-anchor="${an}" font-size="13" fill="${col}">${open ? "" : "🔒 "}${DIFFICULTY[lv].label}</text></g>`;
    });
    el("usaMap").innerHTML = `<svg viewBox="0 0 900 520">${g}</svg>`;
    switchScreen("usaScreen");
}

// ================= CASE GENERATION =================
function startNewCase(city, diff, tutorial) {
    audioInit();
    const d = DIFFICULTY[diff];
    state = { tutorial: !!tutorial, tipsSeen: {}, done: {}, clues: {}, tails: 2, pending: [], warned: false, roadblock: false, city, diff, time: 168, awake: 0, notes: [], currentLocation: null, unlocked: {}, known: {},
              victim: pick(VICTIMS), people: [], cctvText: "",
              locations: shuffle(CITIES[city].locs).slice(0, 6).map(([name, type, x, y]) => ({ name, type, x, y })) };
    state.crimeIdx = rnd(state.locations.length);
    const crime = state.locations[state.crimeIdx];
    state.notes = [`Case opened: ${state.victim} was found dead near ${crime.name} at midnight.`];
    buildPeople(d);
    if (!tutorial && profile.items.informant) { const q = pick(state.people); discover(q, "tipped by your informant, found at"); }

    el("cityTitle").innerText = city;
    el("diffTag").innerText = d.label;
    el("introBanner").innerHTML = scene(crime.type, crime.name, hash(city + crime.name), true);
    el("introText").innerText = `A murder has been reported in ${city}! The body of ${state.victim} was found last night at midnight near ${crime.name}. You have exactly one week (168 hours) to search the city, check cameras, find and question people, and verify alibis. Travel and every action cost time, and you need sleep. You have no suspect list: find them yourself. Good luck, Detective.`;
    if (tutorial) el("introText").innerText = "FIRST DAY ON THE JOB. " + el("introText").innerText;
    el("tipBox").classList.add("hidden");
    updateHeader(); updateNotebook(); updatePeople(); showTab("notes");
    switchScreen("introScreen");
    tip("intro");
}

function buildPeople(d) {
    const used = new Set(), L = state.locations.length;
    const nm = () => { let n; do { n = pick(FIRST) + " " + pick(LAST); } while (used.has(n)); used.add(n); return n; };
    const otherThan = (t, v) => { let x; do { x = rnd(POOL[t].length); } while (x === v); return x; };
    const kt = { vehicle: rnd(VEHICLES.length), clothing: rnd(CLOTHES.length), feature: rnd(FEATURES.length), habit: rnd(HABITS.length) };
    state.kt = kt;
    const nS = d.suspects, kIdx = rnd(nS);
    let liar; do { liar = rnd(nS); } while (liar === kIdx);
    let inn = 0;
    // every non-killer shares exactly ONE trait with the killer, so one clue never solves the case
    const mk = killer => {
        if (killer) return { ...kt };
        const sh = TR[inn++ % TR.length], t = {};
        TR.forEach(x => t[x] = x === sh ? kt[x] : otherThan(x, kt[x]));
        return t;
    };
    const jobs = shuffle(SUSPECT_JOBS), wj = shuffle(WITNESS_JOBS);

    for (let i = 0; i < nS; i++) {
        let alibiLoc = null, truthful = true;
        if (i === kIdx) { do { alibiLoc = rnd(L); } while (alibiLoc === state.crimeIdx); truthful = false; }
        else if (i === liar) { alibiLoc = rnd(L); truthful = false; }
        else if (Math.random() < 0.7) alibiLoc = rnd(L);
        state.people.push({ id: "s" + i, role: "suspect", name: nm(), job: jobs[i % jobs.length], traits: mk(i === kIdx),
            loc: rnd(L), alibiLoc, alibiTime: pick(i === kIdx ? ALIBI_TIMES : [...ALIBI_TIMES, ...NOCOVER]), truthful, motive: Math.random() < 0.5 ? pick(MOTIVES) : "" });
    }
    state.killer = state.people[kIdx];

    const l1 = rnd(L); let l2; do { l2 = rnd(L); } while (l2 === l1);
    state.people.push({ id: "w1", role: "witness", name: nm(), job: wj[0], traits: mk(false), loc: l1, trait: "vehicle", gate: null, next: d.gated ? "w2" : null });
    state.people.push({ id: "w2", role: "witness", name: nm(), job: wj[1], traits: mk(false), loc: l2, trait: "feature", gate: d.gated ? "w1" : null, next: null });
    for (let k = 0; k < d.decoys; k++) {
        const trait = pick(TR);
        state.people.push({ id: "d" + k, role: "witness", name: nm(), job: wj[2 + k], traits: mk(false), loc: rnd(L), trait, decoy: true, falseVal: otherThan(trait, kt[trait]) });
    }
    state.cctvText = d.cctv
        ? `[CCTV FOOTAGE] Blurry video from midnight. The figure is ${CLOTHES[kt.clothing].seen}. Face not visible.`
        : "[CCTV FOOTAGE] The camera was knocked out. Only static from midnight.";
}

// ================= TIME =================
function updateHeader() {
    el("timeHours").innerText = Math.max(0, state.time);
    el("daysLeft").innerText = Math.max(0, Math.ceil(state.time / 24));
    el("awakeHours").innerText = state.awake;
    el("awakeMax").innerText = awakeLimit();
    const gone = 168 - state.time, hh = ((gone % 24) + 24) % 24;
    el("clock").innerText = `Day ${Math.max(1, Math.min(7, Math.floor(gone / 24) + 1))}, ${String(hh).padStart(2, "0")}:00`;
    el("timeHours").classList.toggle("urgent", state.time <= 24);
}

function spend(h) {
    state.time -= h; state.awake += h;
    if (state.awake >= awakeLimit()) { state.time -= 8; state.awake = 0; addNote("You collapsed from exhaustion and lost 8 hours."); toast("😴 You have been awake too long. You must sleep: 8 hours pass."); sfx("bad"); }
    updateHeader();
    assistantTick();
    if (state.time <= 0) { endGame(false, `Time ran out! The killer escaped the jurisdiction of ${state.city}.`); return false; }
    return true;
}

function sleep() {
    state.time -= 8; state.awake = 0; updateHeader(); assistantTick(); addNote("You slept for 8 hours."); toast("😴 You slept for 8 hours. Fatigue reset.");
    if (state.time <= 0) return endGame(false, `Time ran out! The killer escaped the jurisdiction of ${state.city}.`);
    showMap();
}

function travelCost(i) {
    if (state.currentLocation === null) return 1;
    const a = state.locations[state.currentLocation], b = state.locations[i];
    return Math.max(1, 1 + Math.round(Math.hypot(a.x - b.x, a.y - b.y) / 10 * 0.6) - (profile.items.car ? 1 : 0));
}

// ================= MAP & LOCATIONS =================
function showMap() {
    let g = `<path d="M0 360Q300 290 520 360T1000 320" stroke="#0e2238" stroke-width="46" fill="none"/>`;
    for (let i = 1; i < 10; i++) g += `<path d="M${i * 100} 0V500M0 ${i * 50}H1000" stroke="#161d2b"/>`;
    state.locations.forEach((l, i) => {
        const here = state.currentLocation === i, crime = i === state.crimeIdx;
        const col = here ? "#00ff66" : crime ? "#ff3e3e" : "#00f0ff";
        const cost = here ? "you are here" : travelCost(i) + "h";
        g += `<g class="pin${crime ? " crime" : ""}" onclick="enterLocation(${i})"><circle cx="${l.x * 10}" cy="${l.y * 5}" r="14" fill="${col}" opacity=".8"/>${crime ? `<text x="${l.x * 10}" y="${l.y * 5 + 5}" text-anchor="middle" font-size="14" fill="#000">✖</text>` : ""}<text x="${l.x * 10}" y="${l.y * 5 + 34}" text-anchor="middle" font-size="15" font-weight="bold">${l.name}</text><text x="${l.x * 10}" y="${l.y * 5 + 50}" text-anchor="middle" font-size="13" fill="${col}">${cost}</text></g>`;
    });
    el("cityMap").innerHTML = `<svg viewBox="0 0 1000 500">${g}</svg>`;
    switchScreen("mapScreen");
    tip("map");
}

function enterLocation(i) {
    if (state.currentLocation !== i) {
        const c = travelCost(i);
        state.currentLocation = i;
        if (!spend(c)) return;
    }
    const loc = state.locations[i];
    el("currentLocationName").innerText = loc.name.toUpperCase();
    el("locationBanner").innerHTML = scene(loc.type, loc.name, hash(state.city + loc.name), i === state.crimeIdx);
    el("reportBox").innerText = "";
    el("searchBtn").classList.toggle("hidden", i !== state.crimeIdx);
    el("dialogueContainer").classList.add("hidden");
    renderPeople();
    switchScreen("locationScreen");
    if (i === state.crimeIdx) tip("crime");
    else tip(state.people.some(p => p.loc === i) ? "loc2" : "empty");
    if (!state.tutorial && Math.random() < 0.15) {
        const u = state.people.filter(q => !state.known[q.id]);
        if (u.length) { const q = pick(u); discover(q, "named in an anonymous tip, found at"); toast("📻 Dispatch: an anonymous tip names " + q.name + "."); }
    }
}

function renderPeople() {
    const box = el("peopleList");
    box.innerHTML = "";
    const here = state.people.filter(p => p.loc === state.currentLocation);
    if (!here.length) box.innerText = "Nobody around.";
    here.forEach(p => {
        const b = document.createElement("button"), met = state.known[p.id] && state.known[p.id].met;
        b.className = "sprite";
        b.innerHTML = `<div class="spr">${portrait(p, met)}</div><span>${met ? p.name : "Stranger"}<br><small>${p.job}</small></span>`;
        b.onclick = () => talkTo(p);
        box.appendChild(b);
    });
}

// ================= INVESTIGATION =================
function discover(p, how) {
    if (!state.known[p.id]) {
        state.known[p.id] = { met: false, claim: "" };
        addNote(`New lead: ${p.name} (${p.job}), ${how} ${state.locations[p.loc].name}.`);
        sfx("lead"); updatePeople(); el("nbToggle").classList.add("pulse");
    }
}

function checkCamera() {
    const key = "cctv" + state.currentLocation;
    if (state.done[key]) { el("reportBox").innerText = "You already reviewed this footage. Check your NOTEBOOK (Notes)."; return; }
    state.done[key] = 1;
    if (!spend(2)) return;
    const here = state.people.some(p => p.loc === state.currentLocation);
    tip(state.currentLocation === state.crimeIdx ? (here ? "cctv" : "empty") : "nocctv");
    let r;
    if (state.currentLocation === state.crimeIdx) {
        r = state.cctvText;
        if (DIFFICULTY[state.diff].cctv) addClue("clothing", state.kt.clothing, "CCTV", false);
        addNote(DIFFICULTY[state.diff].cctv ? `CCTV at the crime scene: figure ${CLOTHES[state.kt.clothing].seen}.` : "CCTV at the crime scene was knocked out.");
    } else r = "[CCTV FOOTAGE] Nothing suspicious around midnight at this location.";
    el("reportBox").innerText = r;
}

function searchScene() {
    if (state.done.scene) { el("reportBox").innerText = "You already searched the scene. Check your NOTEBOOK (Notes)."; return; }
    state.done.scene = 1;
    if (!spend(3)) return;
    addClue("habit", state.kt.habit, "Crime scene", false);
    addNote(`Scene evidence: the killer ${HABITS[state.kt.habit].file}.`);
    el("reportBox").innerText = `You find traces at the scene: whoever did this ${HABITS[state.kt.habit].file}.`;
    sfx("lead");
    tip("search");
}

function assistantTick() {
    policeTick();
    if (rankIndex() < 3 || state.tutorial) return;
    const day = Math.floor((168 - state.time) / 24);
    if (day <= (state.asstDay || 0)) return;
    state.asstDay = day;
    const u = state.people.filter(q => !state.known[q.id]);
    if (u.length) {
        const q = pick(u);
        discover(q, "found by your assistant, usually at");
        addNote(`📞 Assistant report (day ${day}): found ${q.name}.`);
        toast(`📞 Your assistant found a new lead: ${q.name}.`);
        return;
    }
    const x = state.people.find(p => p.role === "suspect" && p.alibiLoc !== null && state.known[p.id].met && !state.known[p.id].verdict);
    if (x) {
        state.known[x.id].verdict = x.truthful ? "ok" : "bad";
        addNote(`📞 Assistant checked the alibi of ${x.name}: ${x.truthful ? "it holds up" : "it does NOT hold up"}.`);
        toast("📞 Your assistant verified an alibi. See your notebook.");
        updatePeople();
    }
}

function updatePolice() {
    if (!state.people) return;
    let h = `<p>Police favors left: <b>${state.tails}</b>. A tail follows one person for 12 hours and reports back. Liars are more likely to act suspiciously, but innocent people sometimes do too.</p>`;
    Object.keys(state.known).forEach(id => {
        const p = state.people.find(x => x.id === id), busy = state.pending.some(q => q.id === id);
        h += `<button class="button" ${busy || state.tails <= 0 ? "disabled" : ""} onclick="tail('${id}')">🕵 Tail ${p.name}${busy ? " (in progress)" : ""}</button>`;
    });
    h += `<hr><p>🚔 Roadblock: police delay the killer from leaving town (+24 hours, once). ${state.warned ? "Dispatch warned that the killer may flee." : "Not needed yet. Dispatch will warn you when time is running out."}</p><button class="button" ${state.warned && !state.roadblock ? "" : "disabled"} onclick="roadblock()">🚔 Request roadblock</button>`;
    el("policeFile").innerHTML = h;
}

function tail(id) {
    if (state.tails <= 0) return;
    state.tails--;
    state.pending.push({ id, due: state.time - 12 });
    const p = state.people.find(x => x.id === id);
    addNote(`🚔 Police are tailing ${p.name}. Report in 12 hours.`);
    toast(`🚔 Police will report on ${p.name} in 12 hours.`);
    updatePolice();
}

function policeTick() {
    if (!state.pending) return;
    state.pending = state.pending.filter(q => {
        if (state.time > q.due) return true;
        const p = state.people.find(x => x.id === q.id), killer = p.id === state.killer.id;
        const sus = Math.random() < (killer ? 0.8 : p.truthful === false ? 0.7 : 0.15);
        addNote(`🚔 Police report on ${p.name}: ` + (sus
            ? pick(["burned something in a metal barrel at night.", "handed a bag to a stranger behind a gas station.", "checked bus timetables out of town.", "wiped down their car at 4 AM."])
            : pick(["followed a normal routine, nothing unusual.", "went to work, then straight home.", "spent the evening with friends."])));
        toast(`🚔 Police report on ${p.name} is in. See your notebook.`);
        return false;
    });
    if (!state.tutorial && !state.warned && state.time <= 48) {
        state.warned = true;
        addNote("📻 Dispatch: informants say the killer plans to leave town. You can request a roadblock (POLICE tab).");
        toast("📻 Dispatch: the killer may flee soon! Request a roadblock in the POLICE tab.");
        el("nbToggle").classList.add("pulse");
    }
    updatePolice();
}

function roadblock() {
    if (!state.warned || state.roadblock) return;
    state.roadblock = true;
    state.time += 24;
    updateHeader();
    addNote("🚔 Roadblock set up: the killer is delayed. +24 hours.");
    toast("🚔 Roadblock! You gain 24 hours.");
    updatePolice();
}

function abandonCase() {
    if (!confirm(dyn("Abandon this case? The killer gets away and you get no reward."))) return;
    el("tipBox").classList.add("hidden");
    switchScreen("menuScreen");
}

function setTheme(t) { document.body.dataset.theme = t; profile.theme = t; saveProfile(); }
function renderThemes() {
    const T = [["", "Noir"], ["sepia", "Sepia"], ["neon", "Neon"], ["blood", "Blood"]];
    el("themeList").innerHTML = T.filter(([k]) => !k || profile.items["theme_" + k])
        .map(([k, n]) => `<button class="button" onclick="setTheme('${k}'); renderThemes()">${n}${(profile.theme || "") === k ? " ✔" : ""}</button>`).join("");
}

function checkAlibis() {
    const idx = state.currentLocation, name = state.locations[idx].name, key = "alibi" + idx;
    if (state.done[key]) { el("reportBox").innerText = "You already verified the alibis here. Check your NOTEBOOK (Notes or Compare)."; return; }
    state.done[key] = 1;
    if (!spend(2)) return;
    const claims = state.people.filter(p => p.role === "suspect" && p.alibiLoc === idx);
    if (!claims.length) { el("reportBox").innerText = `Staff at ${name}: "Nobody I know was here that night."`; return; }
    const lines = claims.map(s => {
        discover(s, "usually found at");
        state.known[s.id].verdict = s.truthful ? "ok" : "bad";
        return s.truthful ? `${s.name} (${s.job}) was here that night. Staff confirm it. Usually found at ${state.locations[s.loc].name}.`
                          : `Nobody remembers seeing ${s.name} (${s.job}) here that night. Usually found at ${state.locations[s.loc].name}.`;
    });
    lines.forEach(l => addNote(`[${name}] ${l}`));
    el("reportBox").innerText = lines.join("\n");
}

function describe(trait, v) {
    if (trait === "vehicle") return pick([`I saw them ${v.seen}.`, `Whoever it was, I watched them ${v.seen}.`]);
    if (trait === "clothing") return pick([`I noticed they were ${v.seen}.`, `They were ${v.seen}, I remember that much.`]);
    if (trait === "habit") return pick([`I noticed they ${v.seen}.`, `The smell gave it away: they ${v.seen}.`]);
    return pick([`I noticed they ${v.seen}.`, `One thing stuck with me: they ${v.seen}.`]);
}

function talkTo(p) {
    const kn = state.known[p.id];
    if (kn && kn.done) {
        el("personAvatar").innerHTML = portrait(p, true);
        el("dialogueName").innerText = `${p.name} - ${p.job}`;
        typeText(kn.last + "  (Already questioned. See your NOTEBOOK.)");
        el("dialogueContainer").classList.remove("hidden");
        return;
    }
    if (!spend(1)) return;
    const d = DIFFICULTY[state.diff];
    if (!state.known[p.id]) state.known[p.id] = { met: true, claim: "" };
    const first = !state.known[p.id].met;
    state.known[p.id].met = true;
    if (first) { sfx("lead"); addNote(`You met ${p.name} (${p.job}), location: ${state.locations[p.loc].name}.`); }
    let text = "";

    if (p.role === "suspect") {
        if (p.alibiLoc === null) { text = `"${pick(["I was home alone. Nobody can vouch for me.", "Stayed in all night, just me and the TV.", "Home. Alone. I know how that sounds."])}"`; state.known[p.id].claim = "Home alone."; }
        else { const pl = state.locations[p.alibiLoc].name; text = `"${pick([`I was at ${pl} ${p.alibiTime}.`, `Ask anyone at ${pl}. I was there ${p.alibiTime}.`, `${pl}, ${p.alibiTime}. Ask the staff.`])}"`; state.known[p.id].claim = "Was at " + pl + " (" + p.alibiTime + ")."; }
        addNote(`${p.name} claims: ${state.known[p.id].claim}`);
        if (p.motive) text += ` "${p.motive}"`;
        const unknown = state.people.filter(q => q.id !== p.id && !state.known[q.id]);
        if (unknown.length && Math.random() < 0.7) {
            const q = pick(unknown);
            text += ` "Ask ${q.name}, the ${q.job.toLowerCase()}. Usually at ${state.locations[q.loc].name}."`;
            discover(q, "usually found at");
        }
    } else if (p.decoy) {
        const claim = describe(p.trait, POOL[p.trait][p.falseVal]);
        text = `"Honestly, I'd had a few, but ${claim}"`;
        addClue(p.trait, p.falseVal, p.name, true);
        addNote(`${p.name} (${p.job}) says: ${claim} (unsure)`);
    } else if (p.gate && !state.unlocked[p.gate]) {
        text = `"I didn't see anything, officer."`;
    } else {
        const claim = describe(p.trait, POOL[p.trait][state.kt[p.trait]]);
        text = `"${pick(OPENERS)}${d.hedge ? "I think " : ""}${claim}"`;
        addNote(`${p.name} (${p.job}) says: ${claim}${d.hedge ? " (not 100% sure)" : ""}`);
        addClue(p.trait, state.kt[p.trait], p.name, d.hedge);
        state.unlocked[p.id] = true;
        if (p.next) {
            const w = state.people.find(x => x.id === p.next);
            text += ` "I only saw part of it. ${w.name} was next to me. Try ${state.locations[w.loc].name}."`;
            discover(w, "may know more, at");
        }
    }
    text = MOODS[hash(p.id) % MOODS.length] + text;
    const blocked = p.role === "witness" && !p.decoy && p.gate && !state.unlocked[p.gate];
    state.known[p.id].last = text;
    state.known[p.id].done = !blocked;
    updatePeople();
    renderPeople();
    el("personAvatar").innerHTML = portrait(p, true);
    el("dialogueName").innerText = `${p.name} - ${p.job}`;
    typeText(text);
    speak(text, p);
    tip("talk");
    el("dialogueContainer").classList.remove("hidden");
}

// ================= NOTEBOOK =================
function addNote(t) { if (!state.notes.includes(t)) { state.notes.push(t); updateNotebook(); } }

function addClue(trait, v, src, unsure) {
    const l = state.clues[trait] = state.clues[trait] || [];
    if (!l.some(c => c.v === v && c.src === src)) { l.push({ v, src, unsure }); updateCase(); updateCompare(); }
}

const NOTE_ICON = t => /^CCTV/.test(t) ? "📹" : /says:/.test(t) ? "🗣" : /claims/.test(t) ? "🕵" : /^New lead|^Tip/.test(t) ? "🔗" : /^\[/.test(t) ? "🔎" : /^You /.test(t) ? "🚶" : "📌";

function updateNotebook() {
    el("notebookList").innerHTML = state.notes.map(n => `<li>${NOTE_ICON(n)} ${n}</li>`).join("");
    updateCase();
}

function showTab(t) {
    ["notes", "people", "case", "compare", "police"].forEach(x => {
        el("tab-" + x).classList.toggle("active", x === t);
        el("pane-" + x).classList.toggle("hidden", x !== t);
    });
    const tk = { people: "tabpeople", case: "tabcase", compare: "compare", police: "tabpolice" }[t];
    if (tk) tip(tk);
    if (t === "police") updatePolice();
}

const TRAITS = [["Transport", "vehicle"], ["Clothing", "clothing"], ["Feature", "feature"], ["Habit", "habit"]];

function updateCase() {
    const c = state.locations[state.crimeIdx];
    let h = `<h3>Case file: ${state.victim}, ${state.city}</h3><p>Body found at midnight near <b>${c.name}</b>.</p><p>Time left: ${Math.max(0, state.time)}h | People found: ${Object.keys(state.known).length}</p><h4>What we know about the killer</h4><table class="cmp">`;
    TRAITS.forEach(([n, t]) => {
        const l = state.clues[t] || [];
        h += `<tr><td>${n}</td><td>${l.length ? l.map(x => `${POOL[t][x.v].file}${x.unsure ? " (?)" : ""} <small>source: ${x.src}</small>`).join("<br>") : "<i>unknown</i>"}</td></tr>`;
    });
    el("caseFile").innerHTML = h + "</table><p class='hint'>(?) means the source was not sure.</p>";
}

function updatePeople() {
    const ids = Object.keys(state.known);
    el("peopleCount").innerText = `(${ids.length})`;
    let h = ids.length ? "" : `<p class="hint">Nobody yet. Explore the city and talk to people.</p>`;
    ids.forEach(id => {
        const p = state.people.find(x => x.id === id), k = state.known[id];
        const traits = k.met ? `<p>${VEHICLES[p.traits.vehicle].file}; often in ${CLOTHES[p.traits.clothing].file}; ${FEATURES[p.traits.feature].file}; ${HABITS[p.traits.habit].file}.</p>` : `<p>Not met yet. Appearance unknown.</p>`;
        const v = k.verdict === "ok" ? "✔ Alibi confirmed" : k.verdict === "bad" ? "✖ Not seen at the alibi location" : "";
        h += `<div class="person-card"><div class="pic">${portrait(p, k.met)}</div><div><h4>${p.name}</h4><p>${p.job}</p><p class="where">📍 ${k.met ? "Found at" : "Reported at"}: ${state.locations[p.loc].name}</p>${traits}${k.claim ? `<p class="claim">Alibi: ${k.claim} ${v}</p>` : ""}</div></div>`;
    });
    el("peopleFile").innerHTML = h;
    updateCompare();
}

function updateCompare() {
    const as = state.tutorial ? 2 : DIFFICULTY[state.diff].assist;
    const ids = Object.keys(state.known).filter(id => state.known[id].met);
    let h = `<table class="cmp"><tr><th>Person</th>${TRAITS.map(t => `<th>${t[0]}</th>`).join("")}<th>Alibi</th>${as >= 2 ? "<th>Matches</th>" : ""}</tr>`;
    h += `<tr class="cluerow"><td>CLUES</td>${TRAITS.map(([n, t]) => `<td>${(state.clues[t] || []).map(c => POOL[t][c.v].file + (c.unsure ? " (?)" : "")).join("<br>") || "?"}</td>`).join("")}<td></td>${as >= 2 ? "<td></td>" : ""}</tr>`;
    ids.forEach(id => {
        const p = state.people.find(x => x.id === id), k = state.known[id];
        let n = 0;
        const cells = TRAITS.map(([nm, t]) => {
            const hit = as >= 1 && (state.clues[t] || []).some(c => c.v === p.traits[t]);
            if (hit) n++;
            return `<td class="${hit ? "hit" : ""}">${POOL[t][p.traits[t]].file}</td>`;
        }).join("");
        const al = k.verdict === "ok" ? `<td class="${as >= 1 ? "hit" : ""}">✔ confirmed</td>` : k.verdict === "bad" ? `<td class="${as >= 1 ? "bad" : ""}">✖ not seen there</td>` : `<td>${k.claim || "unknown"}</td>`;
        h += `<tr><td><b>${p.name}</b><br><small>${p.job}</small></td>${cells}${al}${as >= 2 ? `<td>${n}/${TRAITS.length}</td>` : ""}</tr>`;
    });
    el("compareFile").innerHTML = h + "</table>" + (ids.length ? "" : `<p class="hint">Meet people to compare them with your clues.</p>`) + (as === 0 ? `<p class="hint">No automatic highlights on this difficulty. Compare carefully.</p>` : "");
}

// ================= ARREST & END =================
function openArrestMenu() {
    el("arrestDiv").classList.remove("hidden");
    const box = el("arrestOptions");
    box.innerHTML = "";
    const ids = Object.keys(state.known);
    if (!ids.length) box.innerText = "You haven't found anyone to arrest yet.";
    ids.forEach(id => {
        const p = state.people.find(x => x.id === id), b = document.createElement("button");
        b.className = "button danger-btn arrest-opt";
        b.innerHTML = `<div class="pic">${portrait(p, state.known[id].met)}</div>${p.name}`;
        b.onclick = () => makeArrest(p);
        box.appendChild(b);
    });
}

function makeArrest(p) {
    const k = state.killer;
    if (p.id === k.id) endGame(true, `CONGRATULATIONS! You arrested the right person. ${k.name} confessed. Evidence: ${VEHICLES[k.traits.vehicle].file}, ${CLOTHES[k.traits.clothing].file}, ${FEATURES[k.traits.feature].file}. ${k.alibiLoc !== null ? "The alibi at " + state.locations[k.alibiLoc].name + " never held up. " : ""}Time left: ${state.time}h.`);
    else if (state.tutorial) { toast("❌ Wrong person! In a real case this ends the investigation. Compare the clues again."); el("arrestDiv").classList.add("hidden"); }
    else endGame(false, `WRONG ARREST! You locked up an innocent person (${p.name}). The real killer, ${k.name}, used the confusion to cross the border!`);
}

function endGame(win, msg) {
    sfx(win ? "win" : "bad");
    el("tipBox").classList.add("hidden");
    if (state.tutorial && win) { profile.tutorialDone = true; profile.cash += 50; msg += " Tutorial complete! Reward: $50."; }
    else if (state.tutorial) msg += " Tutorial failed. You will try it again.";
    if (win && !state.tutorial) {
        const before = rankIndex();
        profile.solved++;
        const reward = 100 + Math.max(0, state.time) * 2 + DIFFICULTY[state.diff].need * 100;
        profile.cash += reward; msg += ` Reward: $${reward}.`;
        if (rankIndex() > before) msg += ` ⭐ PROMOTED to ${RANKS[rankIndex()][0]}! New cases unlocked.`;
    }
    saveProfile();
    switchScreen("endScreen");
    el("endTitle").innerText = win ? "🎉 CASE SOLVED!" : "💀 CASE FAILED!";
    el("endText").innerText = msg;
}

document.addEventListener("click", () => document.querySelectorAll(".glow").forEach(e => e.classList.remove("glow")), true);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeNotebook(); });
let toastT;
function toast(m) {
    const t = el("toast");
    t.innerText = m; t.classList.remove("hidden");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.add("hidden"), 4500);
}

const SHOP = [
    ["theme_sepia", "🎞 Sepia theme", "Warm vintage colors for the whole game.", 150],
    ["theme_neon", "🌃 Neon theme", "Cyberpunk blue and pink.", 150],
    ["theme_blood", "🩸 Blood theme", "Dark crimson colors.", 200],
    ["thermos", "☕ Thermos", "Stay awake 20 hours instead of 16.", 300],
    ["car", "🚗 Fast car", "All travel is 1 hour faster (minimum 1h).", 400],
    ["informant", "🕶 Informant", "Start every case with one known lead.", 250]
];
function showOffice() {
    el("officeCash").innerText = `${tr("Cash")}: $${profile.cash}`;
    setTimeout(applyLang, 0);
    el("officeList").innerHTML = SHOP.map(([k, n, d, c]) => profile.items[k]
        ? `<p>${n}: owned ✔<br><small>${d}</small></p>`
        : `<p>${n} ($${c})<br><small>${d}</small><br><button class="button" onclick="buy('${k}', ${c})">BUY</button></p>`).join("")
        + (rankIndex() >= 3 ? `<p>👤 Assistant: hired. Reports a new lead every 24 hours.</p>` : `<p>👤 Assistant: unlocks at rank Senior Detective.</p>`);
    switchScreen("officeScreen");
}
function buy(k, c) {
    if (profile.cash < c) return toast("Not enough cash.");
    profile.cash -= c; profile.items[k] = 1; saveProfile(); showOffice();
}

const I18N = {
    sr: { "▶ START": "▶ ZAPOČNI", "🎓 TUTORIAL (RECOMMENDED)": "🎓 TUTORIJAL (PREPORUČENO)", "🎓 REPLAY TUTORIAL": "🎓 PONOVI TUTORIJAL", "🏢 OFFICE": "🏢 KANCELARIJA", "⚙ SETTINGS": "⚙ PODEŠAVANJA", "✖ QUIT": "✖ IZLAZ", "⬅ BACK": "⬅ NAZAD", "⬅ BACK TO MENU": "⬅ NA MENI", "SELECT A CASE": "IZABERI SLUČAJ", "Volume": "Jačina zvuka", "🌐 Language": "🌐 Jezik", "🎵 Music: ON": "🎵 Muzika: UKLJ.", "🎵 Music: OFF": "🎵 Muzika: ISKLJ.", "🔊 Sound effects: ON": "🔊 Zvučni efekti: UKLJ.", "🔊 Sound effects: OFF": "🔊 Zvučni efekti: ISKLJ.", "🗣 Voice: ON": "🗣 Glas: UKLJ.", "🗣 Voice: OFF": "🗣 Glas: ISKLJ.", "📹 CCTV (2h)": "📹 Kamere (2h)", "🔎 Alibis (2h)": "🔎 Alibiji (2h)", "🧤 Search scene (3h)": "🧤 Pretraži mesto zločina (3h)", "😴 Sleep (8h)": "😴 Spavaj (8h)", "😴 SLEEP (8h)": "😴 SPAVAJ (8h)", "🗺 Map": "🗺 Mapa", "📝 NOTEBOOK": "📝 BELEŽNICA", "✖ CLOSE": "✖ ZATVORI", "NOTES": "BELEŠKE", "CASE": "SLUČAJ", "COMPARE": "UPOREDI", "🚨 ARREST SUSPECT": "🚨 UHAPSI OSUMNJIČENOG", "NEW CASE": "NOVI SLUČAJ", "MAIN MENU": "GLAVNI MENI", "START INVESTIGATION": "ZAPOČNI ISTRAGU", "🚨 NEW CRIME REPORTED!": "🚨 PRIJAVLJEN NOVI ZLOČIN!", "Rank": "Čin", "Cases solved": "Rešeni slučajevi", "Cash": "Novac" },
    es: { "▶ START": "▶ JUGAR", "🎓 TUTORIAL (RECOMMENDED)": "🎓 TUTORIAL (RECOMENDADO)", "🎓 REPLAY TUTORIAL": "🎓 REPETIR TUTORIAL", "🏢 OFFICE": "🏢 OFICINA", "⚙ SETTINGS": "⚙ AJUSTES", "✖ QUIT": "✖ SALIR", "⬅ BACK": "⬅ ATRÁS", "⬅ BACK TO MENU": "⬅ AL MENÚ", "SELECT A CASE": "ELIGE UN CASO", "Volume": "Volumen", "🌐 Language": "🌐 Idioma", "🎵 Music: ON": "🎵 Música: SÍ", "🎵 Music: OFF": "🎵 Música: NO", "🔊 Sound effects: ON": "🔊 Efectos: SÍ", "🔊 Sound effects: OFF": "🔊 Efectos: NO", "🗣 Voice: ON": "🗣 Voz: SÍ", "🗣 Voice: OFF": "🗣 Voz: NO", "📹 CCTV (2h)": "📹 Cámaras (2h)", "🔎 Alibis (2h)": "🔎 Coartadas (2h)", "🧤 Search scene (3h)": "🧤 Registrar escena (3h)", "😴 Sleep (8h)": "😴 Dormir (8h)", "😴 SLEEP (8h)": "😴 DORMIR (8h)", "🗺 Map": "🗺 Mapa", "📝 NOTEBOOK": "📝 LIBRETA", "✖ CLOSE": "✖ CERRAR", "NOTES": "NOTAS", "CASE": "CASO", "COMPARE": "COMPARAR", "🚨 ARREST SUSPECT": "🚨 ARRESTAR", "NEW CASE": "NUEVO CASO", "MAIN MENU": "MENÚ PRINCIPAL", "START INVESTIGATION": "INICIAR INVESTIGACIÓN", "🚨 NEW CRIME REPORTED!": "🚨 ¡NUEVO CRIMEN!", "Rank": "Rango", "Cases solved": "Casos resueltos", "Cash": "Dinero" },
    it: { "▶ START": "▶ GIOCA", "🎓 TUTORIAL (RECOMMENDED)": "🎓 TUTORIAL (CONSIGLIATO)", "🎓 REPLAY TUTORIAL": "🎓 RIFAI IL TUTORIAL", "🏢 OFFICE": "🏢 UFFICIO", "⚙ SETTINGS": "⚙ IMPOSTAZIONI", "✖ QUIT": "✖ ESCI", "⬅ BACK": "⬅ INDIETRO", "⬅ BACK TO MENU": "⬅ AL MENU", "SELECT A CASE": "SCEGLI UN CASO", "Volume": "Volume", "🌐 Language": "🌐 Lingua", "🎵 Music: ON": "🎵 Musica: SÌ", "🎵 Music: OFF": "🎵 Musica: NO", "🔊 Sound effects: ON": "🔊 Effetti: SÌ", "🔊 Sound effects: OFF": "🔊 Effetti: NO", "🗣 Voice: ON": "🗣 Voce: SÌ", "🗣 Voice: OFF": "🗣 Voce: NO", "📹 CCTV (2h)": "📹 Telecamere (2h)", "🔎 Alibis (2h)": "🔎 Alibi (2h)", "🧤 Search scene (3h)": "🧤 Perquisisci (3h)", "😴 Sleep (8h)": "😴 Dormi (8h)", "😴 SLEEP (8h)": "😴 DORMI (8h)", "🗺 Map": "🗺 Mappa", "📝 NOTEBOOK": "📝 TACCUINO", "✖ CLOSE": "✖ CHIUDI", "NOTES": "NOTE", "CASE": "CASO", "COMPARE": "CONFRONTA", "🚨 ARREST SUSPECT": "🚨 ARRESTA", "NEW CASE": "NUOVO CASO", "MAIN MENU": "MENU PRINCIPALE", "START INVESTIGATION": "INIZIA L'INDAGINE", "🚨 NEW CRIME REPORTED!": "🚨 NUOVO CRIMINE!", "Rank": "Grado", "Cases solved": "Casi risolti", "Cash": "Contanti" }
};
Object.assign(I18N.sr, { "PEOPLE": "LJUDI", "POLICE": "POLICIJA", "🏳 LEAVE CASE": "🏳 NAPUSTI SLUČAJ", "📝 DETECTIVE'S NOTEBOOK": "📝 DETEKTIVOVA BELEŽNICA", "🎨 Theme": "🎨 Tema", "BUY": "KUPI", "📍 CITY MAP: click a location to travel there": "📍 MAPA GRADA: klikni na lokaciju da otputuješ" });
Object.assign(I18N.es, { "PEOPLE": "PERSONAS", "POLICE": "POLICÍA", "🏳 LEAVE CASE": "🏳 ABANDONAR CASO", "📝 DETECTIVE'S NOTEBOOK": "📝 LIBRETA DEL DETECTIVE", "🎨 Theme": "🎨 Tema", "BUY": "COMPRAR", "📍 CITY MAP: click a location to travel there": "📍 MAPA: haz clic en un lugar para viajar" });
Object.assign(I18N.it, { "PEOPLE": "PERSONE", "POLICE": "POLIZIA", "🏳 LEAVE CASE": "🏳 ABBANDONA CASO", "📝 DETECTIVE'S NOTEBOOK": "📝 TACCUINO DEL DETECTIVE", "🎨 Theme": "🎨 Tema", "BUY": "COMPRA", "📍 CITY MAP: click a location to travel there": "📍 MAPPA: clicca un luogo per viaggiare" });
let lang = "en";
try { lang = localStorage.getItem("cc_lang") || "en"; } catch (e) {}
const tr = k => (I18N[lang] && I18N[lang][k]) || k;
function applyLang() {
    document.querySelectorAll(".button, h1, h2, h3, h4, .subtitle, .hint, .tabname, #settingsScreen p").forEach(e => {
        if (e.children.length) return;
        if (!e.dataset.en) e.dataset.en = e.innerText.trim();
        e.innerText = tr(e.dataset.en);
    });
}
function setLang(l) { lang = l; try { localStorage.setItem("cc_lang", l); } catch (e) {} updateMenuRank(); buildDyn(); translateAll(true); }


const DYN = { sr: {
 "Rookie": "Početnik", "Officer": "Policajac", "Senior Detective": "Viši detektiv", "Detective": "Detektiv", "Inspector": "Inspektor", "Chief": "Načelnik",
 "Easy ★": "Lako ★", "Medium ★★": "Srednje ★★", "Hard ★★★": "Teško ★★★", "Expert ★★★★": "Stručno ★★★★",
 "AWAKE: ": "BUDAN: ", "TIME REMAINING: ": "PREOSTALO VREME: ", " hours (": " sati (", " Days)": " dana)", "CASE: ": "SLUČAJ: ", "Day ": "Dan ",
 "One murder. Seven days. One chance to arrest the right person.": "Jedno ubistvo. Sedam dana. Jedna šansa da uhapsiš pravu osobu.",
 "YOUR JOB": "TVOJ POSAO", "You are a homicide detective. On every case you must:": "Ti si detektiv za ubistva. U svakom slučaju moraš da:",
 "1. Travel the city and search the crime scene.": "1. Putuješ gradom i pretražuješ mesto zločina.",
 "2. Find and question people. Witnesses help, suspects may lie.": "2. Pronalaziš i ispituješ ljude. Svedoci pomažu, osumnjičeni mogu da lažu.",
 "3. Check CCTV and verify alibis.": "3. Proveravaš kamere i alibije.",
 "4. Watch the clock: 168 hours, and you need sleep.": "4. Pratiš vreme: 168 sati, a moraš i da spavaš.",
 "5. Arrest the killer. A wrong arrest ends the case.": "5. Hapsiš ubicu. Pogrešno hapšenje završava slučaj.",
 "Solve cases to rank up from Rookie to Chief. Higher ranks unlock harder cases.": "Rešavaj slučajeve da napreduješ od početnika do načelnika. Viši činovi otključavaju teže slučajeve.",
 "Each city has an open file. Harder cases have more suspects and less reliable evidence.": "Svaki grad ima otvoren slučaj. Teži slučajevi imaju više osumnjičenih i manje pouzdane dokaze.",
 "Thanks for playing, Detective.": "Hvala što igraš, detektive.", "You can close this tab now.": "Možeš da zatvoriš ovaj tab.",
 "Locked. Solve more cases to rank up.": "Zaključano. Reši još slučajeva da napreduješ.", "Not enough cash.": "Nemaš dovoljno novca.",
 "A murder has been reported in ": "Prijavljeno je ubistvo u gradu: ", "! The body of ": "! Telo: ", " was found last night at midnight near ": " pronađeno je sinoć u ponoć kod lokacije: ",
 ". You have exactly one week (168 hours) to search the city, check cameras, find and question people, and verify alibis.": ". Imaš tačno nedelju dana (168 sati) da pretražiš grad, pregledaš kamere, pronađeš i ispitaš ljude i proveriš alibije.",
 " Travel and every action cost time, and you need sleep.": " Putovanje i svaka akcija troše vreme, a moraš i da spavaš.",
 " You have no suspect list: find them yourself. Good luck, Detective.": " Nemaš listu osumnjičenih: pronađi ih sam. Srećno, detektive.", "FIRST DAY ON THE JOB. ": "PRVI RADNI DAN. ",
 "Case opened: ": "Slučaj otvoren: ", " was found dead near ": " je pronađen/a mrtav/a kod lokacije: ", " at midnight.": " u ponoć.",
 "New lead: ": "Nov trag: ", "usually found at": "obično se viđa na lokaciji:", "may know more, at": "možda zna više, na lokaciji:",
 "named in an anonymous tip, found at": "pominje ga anonimna dojava, nalazi se na lokaciji:", "tipped by your informant, found at": "dojavio tvoj doušnik, nalazi se na lokaciji:", "found by your assistant, usually at": "pronašao tvoj pomoćnik, obično na lokaciji:",
 "You met ": "Upoznao si osobu: ", ", location: ": ", lokacija: ",
 " claims: ": " tvrdi: ", " says: ": " kaže: ", "(unsure)": "(nije siguran/na)", "(not 100% sure)": "(nije 100% siguran/na)",
 "Nobody around.": "Nikoga nema.", "Stranger": "Stranac", "you are here": "ovde si",
 "[CCTV FOOTAGE] Blurry video from midnight. The figure is ": "[SNIMAK KAMERE] Mutan snimak iz ponoći. Lik nosi ", ". Face not visible.": ". Lice se ne vidi.",
 "[CCTV FOOTAGE] The camera was knocked out. Only static from midnight.": "[SNIMAK KAMERE] Kamera je uništena. Samo šum iz ponoći.",
 "[CCTV FOOTAGE] Nothing suspicious around midnight at this location.": "[SNIMAK KAMERE] Ništa sumnjivo oko ponoći na ovoj lokaciji.",
 "CCTV at the crime scene: figure ": "Kamera na mestu zločina: lik nosi ", "CCTV at the crime scene was knocked out.": "Kamera na mestu zločina je bila uništena.",
 "You already reviewed this footage. Check your NOTEBOOK (Notes).": "Već si pregledao ovaj snimak. Pogledaj BELEŽNICU (Beleške).",
 "You already verified the alibis here. Check your NOTEBOOK (Notes or Compare).": "Već si proverio alibije ovde. Pogledaj BELEŽNICU (Beleške ili Uporedi).",
 "You already searched the scene. Check your NOTEBOOK (Notes).": "Već si pretražio mesto zločina. Pogledaj BELEŽNICU (Beleške).",
 "Scene evidence: the killer ": "Dokaz sa mesta zločina: ubica ", "You find traces at the scene: whoever did this ": "Pronalaziš tragove na mestu zločina: ko god je ovo uradio, ",
 "Staff at ": "Osoblje, lokacija ", "Nobody I know was here that night.": "Niko koga poznajem nije bio ovde te noći.",
 " was here that night. Staff confirm it. Usually found at ": " je te noći bio/la ovde. Osoblje to potvrđuje. Obično se viđa na lokaciji: ",
 "Nobody remembers seeing ": "Niko se ne seća da je video: ", " here that night. Usually found at ": " ovde te noći. Obično se viđa na lokaciji: ",
 "I didn't see anything, officer.": "Nisam ništa video, policajče.", "I only saw part of it. ": "Video sam samo deo. ", " was next to me. Try ": " je stajao/la pored mene. Probajte lokaciju: ",
 "Ask ": "Pitajte ", ", the ": ", ", ". Usually at ": ". Obično na lokaciji: ", "(Already questioned. See your NOTEBOOK.)": "(Već ispitano. Pogledaj BELEŽNICU.)",
 "I was home alone. Nobody can vouch for me.": "Bio/la sam sam/a kod kuće. Niko ne može da potvrdi.", "Stayed in all night, just me and the TV.": "Cele noći sam ostao/la kod kuće, samo ja i televizor.", "Home. Alone. I know how that sounds.": "Kod kuće. Sam/a. Znam kako to zvuči.",
 "I was at ": "Bio/la sam na lokaciji: ", "Ask anyone at ": "Pitajte bilo koga na lokaciji: ", ". I was there ": ". Bio/la sam tamo ", ". Ask the staff.": ". Pitajte osoblje.",
 "Home alone.": "Sam/a kod kuće.", "Was at ": "Bio/la na lokaciji: ",
 "from 10 PM until about 1 AM": "od 22h do oko 1 posle ponoći", "from 9 PM until almost 2 AM": "od 21h do skoro 2 posle ponoći", "from 11 PM until closing time": "od 23h do zatvaranja", "since early evening, well past midnight": "od ranog večera, dugo posle ponoći", "from 10:30 PM until 3 AM": "od 22:30 do 3 ujutru", "the whole night": "cele noći",
 "from 7 PM until 11 PM": "od 19h do 23h", "until about 10 PM, then I walked around alone": "do oko 22h, posle sam šetao/la sam/a", "from 8 PM until 11:30 PM": "od 20h do 23:30",
 "The victim owed me money, but I'd never hurt anyone.": "Žrtva mi je dugovala novac, ali nikada nikome ne bih naudio/la.", "Yes, we argued last week. Everybody argued with the victim.": "Da, posvađali smo se prošle nedelje. Svi su se svađali sa žrtvom.", "I won't lie, I didn't like them. That's not a crime.": "Neću lagati, nisam ga/je podnosio/la. To nije zločin.",
 "Look, it happened fast, but ": "Gledajte, sve se desilo brzo, ali: ", "I didn't want to get involved, but ": "Nisam hteo/la da se mešam, ali: ", "Okay, officer. ": "Dobro, policajče. ", "Honestly? ": "Iskreno? ", "I keep seeing it when I close my eyes. ": "Stalno to vidim kad zatvorim oči. ", "Fine, I'll tell you. ": "U redu, reći ću vam. ",
 "Honestly, I'd had a few, but ": "Iskreno, popio/la sam koju čašicu, ali: ", "I think ": "Mislim da ",
 "*fidgets nervously* ": "*nervozno se vrpolji* ", "*lights a cigarette* ": "*pali cigaretu* ", "*shrugs* ": "*sleže ramenima* ", "*glances over their shoulder* ": "*baci pogled preko ramena* ", "*sighs* ": "*uzdahne* ", "*crosses their arms* ": "*prekrsti ruke* ",
 "Whoever it was, I watched them ": "Ko god da je bio, gledao sam kako ta osoba ", "I saw them ": "Video sam kako ta osoba ", "I noticed they were ": "Primetio sam da ta osoba nosi ", "They were ": "Na sebi: ", ", I remember that much.": ", to pamtim.",
 "I noticed they ": "Primetio sam da ta osoba ", "One thing stuck with me: they ": "Jedno mi je ostalo u sećanju: ta osoba ", "The smell gave it away: they ": "Miris ga je odao: ta osoba ",
 "I think I saw them ": "Mislim da sam video kako ta osoba ", "I think I noticed they were ": "Mislim da sam primetio da ta osoba nosi ", "I think I noticed they ": "Mislim da sam primetio da ta osoba ",
 "drives a red sedan": "vozi crveni sedan", "drives a blue coupe": "vozi plavi kupe", "drives a black SUV": "vozi crni SUV", "drives a white van": "vozi beli kombi", "rides a motorcycle": "vozi motor", "rides a bicycle": "vozi bicikl", "walks everywhere": "svuda ide peške", "rides an electric scooter": "vozi električni skuter",
 "peel away in a red sedan": "odlazi velikom brzinom u crvenom sedanu", "speed off in a blue coupe": "beži u plavom kupeu", "leave in a black SUV": "odlazi u crnom SUV-u", "drive off in a white van": "odlazi u belom kombiju", "ride off on a motorcycle": "odlazi na motoru", "pedal away on a bicycle": "odlazi na biciklu", "run off on foot": "beži peške", "glide away on an electric scooter": "odlazi na električnom skuteru",
 "wearing a gray hoodie": "sivi duks", "wearing a long brown coat": "dugačak braon kaput", "wearing a red cap": "crvenu kapu", "wearing a yellow raincoat": "žutu kabanicu", "wearing a black leather jacket": "crnu kožnu jaknu", "wearing a green scarf": "zeleni šal", "wearing a white linen suit": "belo laneno odelo", "wearing a navy beanie": "teget kapu",
 "a gray hoodie": "sivi duks", "a long brown coat": "dugačak braon kaput", "a red cap": "crvenu kapu", "a yellow raincoat": "žutu kabanicu", "a black leather jacket": "crnu kožnu jaknu", "a green scarf": "zeleni šal", "a white linen suit": "belo laneno odelo", "a navy beanie": "teget kapu",
 "walks with a limp": "šepa", "has a neck tattoo": "ima tetovažu na vratu", "wears thick glasses": "nosi debele naočare", "has a scar on the cheek": "ima ožiljak na obrazu", "is missing part of a finger": "nema deo prsta", "has a gold tooth": "ima zlatan zub", "carries a metal briefcase": "nosi metalnu aktovku",
 "were limping": "šepa", "had a tattoo on the neck": "ima tetovažu na vratu", "had thick glasses": "nosi debele naočare", "had a scar on the cheek": "ima ožiljak na obrazu", "had a finger missing": "nema deo prsta", "flashed a gold tooth": "ima zlatan zub", "carried a metal briefcase": "nosi metalnu aktovku",
 "smokes cheap cigars": "puši jeftine cigare", "chews mint gum constantly": "stalno žvaće žvaku od mente", "wears heavy cologne": "nosi jak parfem", "carries a hip flask": "nosi pljosku", "cracks their knuckles": "pucka prstima", "hums old jazz tunes": "pevuši stare džez melodije",
 "smoked cheap cigars": "puši jeftine cigare", "kept chewing mint gum": "stalno žvaće žvaku od mente", "wore heavy cologne": "nosi jak parfem", "carried a hip flask": "nosi pljosku", "kept cracking their knuckles": "pucka prstima", "was humming an old jazz tune": "pevuši staru džez melodiju",
 "often in ": "često nosi ", "Found at: ": "Pronađen na lokaciji: ", "Reported at: ": "Prijavljen na lokaciji: ", "Not met yet. Appearance unknown.": "Još nisi upoznao. Izgled nepoznat.", "Nobody yet. Explore the city and talk to people.": "Još nikoga. Istraži grad i razgovaraj sa ljudima.",
 "✔ Alibi confirmed": "✔ Alibi potvrđen", "✖ Not seen at the alibi location": "✖ Nije viđen na lokaciji alibija",
 "Case file: ": "Dosije slučaja: ", "Body found at midnight near ": "Telo pronađeno u ponoć kod lokacije: ", "Time left: ": "Preostalo vreme: ", " | People found: ": " | Pronađenih ljudi: ", "What we know about the killer": "Šta znamo o ubici",
 "source: ": "izvor: ", "Crime scene": "Mesto zločina", "(?) means the source was not sure.": "(?) znači da izvor nije bio siguran.", "unknown": "nepoznato",
 "Transport": "Prevoz", "Clothing": "Odeća", "Feature": "Obeležje", "Habit": "Navika", "Person": "Osoba", "Matches": "Poklapanja", "CLUES": "TRAGOVI", "✔ confirmed": "✔ potvrđen", "✖ not seen there": "✖ niko ga nije video tamo",
 "Meet people to compare them with your clues.": "Upoznaj ljude da bi ih uporedio sa tragovima.", "No automatic highlights on this difficulty. Compare carefully.": "Na ovoj težini nema automatskog isticanja. Uporedi pažljivo.",
 "Who is the killer? (only people you have found)": "Ko je ubica? (samo ljudi koje si pronašao)", "You haven't found anyone to arrest yet.": "Još nisi pronašao nikoga za hapšenje.",
 "❌ Wrong person! In a real case this ends the investigation. Compare the clues again.": "❌ Pogrešna osoba! U pravom slučaju ovo bi završilo istragu. Uporedi tragove ponovo.",
 "🎉 CASE SOLVED!": "🎉 SLUČAJ REŠEN!", "💀 CASE FAILED!": "💀 SLUČAJ NEUSPEŠAN!", "CONGRATULATIONS! You arrested the right person. ": "ČESTITAMO! Uhapsio si pravu osobu. ", " confessed. Evidence: ": " je priznao/la. Dokazi: ",
 "The alibi at ": "Alibi na lokaciji: ", " never held up. ": " nije izdržao proveru. ", " Tutorial complete! Reward: $50.": " Tutorijal završen! Nagrada: $50.", " Tutorial failed. You will try it again.": " Tutorijal nije uspeo. Probaćeš ponovo.",
 " Reward: $": " Nagrada: $", " ⭐ PROMOTED to ": " ⭐ UNAPREĐEN u čin: ", "! New cases unlocked.": "! Otključani su novi slučajevi.",
 "WRONG ARREST! You locked up an innocent person (": "POGREŠNO HAPŠENJE! Zatvorio si nevinu osobu (", "). The real killer, ": "). Pravi ubica, ", ", used the confusion to cross the border!": ", iskoristio je zbrku i prešao granicu!",
 "Time ran out! The killer escaped the jurisdiction of ": "Vreme je isteklo! Ubica je pobegao iz nadležnosti grada ",
 "You collapsed from exhaustion and lost 8 hours.": "Srušio si se od iscrpljenosti i izgubio 8 sati.", "😴 You have been awake too long. You must sleep: 8 hours pass.": "😴 Predugo si budan. Moraš da spavaš: prolazi 8 sati.",
 "😴 You slept for 8 hours. Fatigue reset.": "😴 Spavao si 8 sati. Umor je nestao.", "You slept for 8 hours.": "Spavao si 8 sati.",
 "📻 Dispatch: an anonymous tip names ": "📻 Dispečer: anonimna dojava pominje osobu: ", "📞 Assistant report (day ": "📞 Izveštaj pomoćnika (dan ", "): found ": "): pronašao je osobu: ",
 "📞 Your assistant found a new lead: ": "📞 Tvoj pomoćnik je našao novi trag: ", "📞 Assistant checked the alibi of ": "📞 Pomoćnik je proverio alibi osobe: ", "it holds up": "alibi je čvrst", "it does NOT hold up": "alibi NE stoji",
 "📞 Your assistant verified an alibi. See your notebook.": "📞 Tvoj pomoćnik je proverio alibi. Pogledaj beležnicu.",
 "Police favors left: ": "Preostalih usluga policije: ", ". A tail follows one person for 12 hours and reports back. Liars are more likely to act suspiciously, but innocent people sometimes do too.": ". Praćenje: policija prati osobu 12 sati i javlja se. Lažovi se češće ponašaju sumnjivo, ali ponekad i nevini.",
 "🕵 Tail ": "🕵 Prati: ", " (in progress)": " (u toku)", "🚔 Roadblock: police delay the killer from leaving town (+24 hours, once). ": "🚔 Blokada puteva: policija zadržava ubicu da ne napusti grad (+24 sata, jednom). ",
 "Dispatch warned that the killer may flee.": "Dispečer upozorava da ubica može da pobegne.", "Not needed yet. Dispatch will warn you when time is running out.": "Još nije potrebno. Dispečer će te upozoriti kad vreme ističe.", "🚔 Request roadblock": "🚔 Zatraži blokadu",
 "🚔 Police are tailing ": "🚔 Policija prati osobu: ", ". Report in 12 hours.": ". Izveštaj za 12 sati.", "🚔 Police will report on ": "🚔 Policija će izvestiti o osobi: ", " in 12 hours.": " za 12 sati.",
 "🚔 Police report on ": "🚔 Izveštaj policije o osobi ", " is in. See your notebook.": " je stigao. Pogledaj beležnicu.",
 "burned something in a metal barrel at night.": "noću je nešto spaljivao u metalnoj burenici.", "handed a bag to a stranger behind a gas station.": "predao je torbu strancu iza pumpe.", "checked bus timetables out of town.": "proveravao je red vožnje autobusa iz grada.", "wiped down their car at 4 AM.": "u 4 ujutru je brisao svoj auto.",
 "followed a normal routine, nothing unusual.": "držao se uobičajene rutine, ništa neobično.", "went to work, then straight home.": "otišao je na posao, pa pravo kući.", "spent the evening with friends.": "proveo je veče sa prijateljima.",
 "📻 Dispatch: informants say the killer plans to leave town. You can request a roadblock (POLICE tab).": "📻 Dispečer: doušnici kažu da ubica planira da napusti grad. Možeš da zatražiš blokadu (tab POLICIJA).",
 "📻 Dispatch: the killer may flee soon! Request a roadblock in the POLICE tab.": "📻 Dispečer: ubica uskoro može da pobegne! Zatraži blokadu u tabu POLICIJA.",
 "🚔 Roadblock set up: the killer is delayed. +24 hours.": "🚔 Blokada postavljena: ubica je zadržan. +24 sata.", "🚔 Roadblock! You gain 24 hours.": "🚔 Blokada! Dobijaš 24 sata.",
 "Abandon this case? The killer gets away and you get no reward.": "Napustiti slučaj? Ubica beži i nema nagrade.",
 "owned ✔": "u vlasništvu ✔", "☕ Thermos": "☕ Termos", "Stay awake 20 hours instead of 16.": "Ostani budan 20 sati umesto 16.", "🚗 Fast car": "🚗 Brz auto", "All travel is 1 hour faster (minimum 1h).": "Sva putovanja su 1 sat kraća (minimum 1h).",
 "🕶 Informant": "🕶 Doušnik", "Start every case with one known lead.": "Svaki slučaj počinješ sa jednim poznatim tragom.", "🎞 Sepia theme": "🎞 Sepija tema", "Warm vintage colors for the whole game.": "Tople vintidž boje za celu igru.",
 "🌃 Neon theme": "🌃 Neon tema", "Cyberpunk blue and pink.": "Sajberpank plava i roze.", "🩸 Blood theme": "🩸 Tema krvi", "Dark crimson colors.": "Tamne grimizne boje.",
 "👤 Assistant: hired. Reports a new lead every 24 hours.": "👤 Pomoćnik: angažovan. Svaka 24 sata javlja novi trag.", "👤 Assistant: unlocks at rank Senior Detective.": "👤 Pomoćnik: otključava se na činu Viši detektiv.",
 "Police officer": "Policajac", "Bartender": "Konobar", "CEO": "Direktor", "Lawyer": "Advokat", "Mechanic": "Mehaničar", "Student": "Student", "Pharmacist": "Farmaceut", "Accountant": "Računovođa", "Bouncer": "Izbacivač", "Journalist": "Novinar", "Chef": "Kuvar", "Landlord": "Stanodavac",
 "Nurse": "Medicinar", "Tattoo artist": "Tatu majstor", "Professor": "Profesor", "Florist": "Cvećar", "Musician": "Muzičar", "Realtor": "Agent za nekretnine", "Dealer": "Diler", "Taxi dispatcher": "Taksi dispečer",
 "Street vendor": "Ulični prodavac", "Night janitor": "Noćni domar", "Taxi driver": "Taksista", "Barista": "Barista", "Dock worker": "Lučki radnik", "Newsstand clerk": "Prodavac na kiosku", "Paramedic": "Bolničar", "Security guard": "Čuvar", "Hot dog vendor": "Prodavac viršli", "Bus driver": "Vozač autobusa", "Night nurse": "Noćna sestra"
} };
let dynList = [];
function buildDyn() {
    dynList = [];
    const d = DYN[lang];
    if (!d) return;
    const all = { ...d };
    [...SUSPECT_JOBS, ...WITNESS_JOBS].forEach(j => { if (d[j]) all[j.toLowerCase()] = d[j].toLowerCase(); });
    dynList = Object.entries(all).sort((a, b) => b[0].length - a[0].length);
}
function dyn(t) {
    if (!dynList.length || !t) return t;
    for (const [k, v] of dynList) if (t.includes(k)) t = t.split(k).join(v);
    return t;
}
const TR_REC = new WeakMap();
let trQueued = false;
function translateAll(force) {
    if (typeof document.createTreeWalker !== "function") return;
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
        const rec = TR_REC.get(n), same = rec && n.nodeValue === rec.out;
        if (same && !force) continue;
        const en = same ? rec.en : n.nodeValue, out = dyn(en);
        TR_REC.set(n, { en, out });
        if (out !== n.nodeValue) n.nodeValue = out;
    }
}
function queueTranslate() { if (trQueued) return; trQueued = true; requestAnimationFrame(() => { trQueued = false; translateAll(false); }); }
if (typeof MutationObserver !== "undefined") new MutationObserver(queueTranslate).observe(document.body, { childList: true, subtree: true, characterData: true });

// ================= INIT =================
document.body.dataset.theme = profile.theme || "";
el("menuArt").innerHTML = scene("neon", "CASE CLOSED", 11, false);
buildDyn();
applyLang();
switchScreen("menuScreen");
translateAll(true);