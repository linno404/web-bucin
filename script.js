// =====================
// DATA
// =====================
const memories = [
    {
        id: 1,
       image: "https://i.ibb.co/TxfkV1sQ/20251217-070336.jpg",
        description: "Ini waktu kita hari ke 2 ketemu , haha kamu berani banget langsung nyiumin tnganku , karna itu alasanku kenapa aku se jatuh cinta ini samaa kmuu."
    },
    {
        id: 2,
        image: "https://i.ibb.co/Q32PpNFf/20251217-070746.jpg",
        description: "ini kamu inget ngga wktu kmu habis kecelakaan aku puanik se panik paniknya ga tega liat keadaanmu kayak gitu aku spam in kamu terus hehe sampe jadi ganggu kamu."
    },
    {
        id: 3,
        image: "https://i.ibb.co/DD8kcsYk/20251217-071016.jpg",
        description: "aku... gak akannn pernah bisa ngelupain moment dimana aku & kamu sama sama saling mengikat."
    }
];

// =====================
// PUISI (TYPING PER HURUF)
// =====================
const longPoem = `ndutt , aku ga tahu ndut caraku mencntai indut itu udah bener apa salah tapi jauh di lubuk hatiku aku se tulus dan se besar itu cintaku ke kmu yangg, kamu jngan pernah mikir klo aku akan mendua atau aku bermain belakang di belakangmu ndutt , enyo janji gabakal indut ngrasain itu karna enyo udah mati rasa sama semua perempuan yang ada di dunia ini prasaanku cuma ada di kamu yangg, kamu datang di sela sela kerapuhan ku kmu datang di sela sela dunia ku menjadi gelap dan ketika kmu datang dunia ku berubah berwarna , makasiii ya yangg kmu udah mau berubah buat aku makasii juga kmu udah ngasih semua cinta mu ke aku yangg, aku gatau aku harus gimanaa , sumpah aku terharu banget yangg dengerin isi hatimu kemarin malem , maaf jga ya pdahal aku dulu janji ga akan bkin kmu nangis tapi tanpa sengaja setiap kata yang ku ucapkan ke kmu itu ngebuat hatimu kegores maafin enyoo yaa ndutt, aku gtauu yang caraku mencintaimu itu udah bener apa belum , aku gtauu kmu lebih nyaman kayaa gimanaa , barangkali ada sesuatu dariku yang perlu di ubah bilang ke aku yaa sayangg.... cuma kamu yang ku kasih cinta se besar ini yangg , cuma kmu wanita yang berhasil meneteskan air mataku, only u yangg, 

aku sayang bangett ma kmuu
❤️  
enyo  
17.12.2025
`;

// =====================
// STATE
// =====================
class AppState {
    constructor() {
        this.currentScene = 1;
        this.isPlaying = false;
        this.isMuted = false;
        this.currentMemoryIndex = 0;
    }

    reset() {
        this.currentScene = 1;
        this.isPlaying = false;
        this.isMuted = false;
        this.currentMemoryIndex = 0;
    }
}

const state = new AppState();

// =====================
// ELEMENTS
// =====================
const elements = {
    audioPlayer: null,
    scene1: null,
    scene2: null,
    scene3: null,
    scene4: null,
    scene5: null,
    startBtn: null,
    scene2NextBtn: null,
    scene3NextBtn: null,
    wordsContainer: null,
    typingText: null,
    memoryContent: null,
    showMemoryBtn: null,
    restartBtn: null
};

// =====================
// INIT ELEMENTS
// =====================
function initializeElements() {
    elements.audioPlayer = document.getElementById("audioPlayer");

    elements.scene1 = document.getElementById("scene1");
    elements.scene2 = document.getElementById("scene2");
    elements.scene3 = document.getElementById("scene3");
    elements.scene4 = document.getElementById("scene4");
    elements.scene5 = document.getElementById("scene5");

    elements.startBtn = document.getElementById("startBtn");
    elements.scene2NextBtn = document.getElementById("scene2NextBtn");
    elements.scene3NextBtn = document.getElementById("scene3NextBtn");

    elements.wordsContainer = document.querySelector(".words-container");
    elements.typingText = document.getElementById("typingText");

    elements.memoryContent = document.getElementById("memoryContent");
    elements.showMemoryBtn = document.getElementById("showMemoryBtn");

    elements.restartBtn = document.getElementById("restartBtn");
}

// =====================
// SCENE CONTROL
// =====================
function showScene(num) {
    [elements.scene1, elements.scene2, elements.scene3, elements.scene4, elements.scene5]
        .forEach(s => s && s.classList.remove("active"));

    const target = elements[`scene${num}`];
    if (target) target.classList.add("active");

    state.currentScene = num;
}

// =====================
// TYPING EFFECT (SCENE 3)
// =====================
function startTypingScene3() {
    if (!elements.typingText) return;

    elements.typingText.innerHTML = "";
    elements.scene3NextBtn.classList.add("hidden");

    let index = 0;
    const speed = 40;

    function type() {
        if (index < longPoem.length) {
            elements.typingText.innerHTML +=
                longPoem[index] === "\n" ? "<br>" : longPoem[index];
            index++;
            setTimeout(type, speed);
        } else {
            elements.scene3NextBtn.classList.remove("hidden");
        }
    }

    type();
}

// =====================
// MEMORY
// =====================
function showMemory() {
    const memory = memories[state.currentMemoryIndex];

    elements.memoryContent.innerHTML = `
        <img src="${memory.image}" class="memory-image">
        <p class="memory-description">${memory.description}</p>
        <button class="btn-primary" onclick="showNextMemory()">Lanjutkan</button>
    `;
}

function showNextMemory() {
    if (state.currentMemoryIndex < memories.length - 1) {
        state.currentMemoryIndex++;
        elements.memoryContent.innerHTML = `
            <button id="showMemoryBtn" class="btn-primary">jangan lupa klikk ini ndutt</button>
        `;
        elements.showMemoryBtn = document.getElementById("showMemoryBtn");
        elements.showMemoryBtn.addEventListener("click", showMemory);
    } else {
        showScene(5);
    }
}

// =====================
// EVENTS
// =====================
document.addEventListener("DOMContentLoaded", () => {
    initializeElements();

    elements.startBtn.addEventListener("click", async () => {
        await elements.audioPlayer.play();
        showScene(2);
    });

    elements.scene2NextBtn.addEventListener("click", () => {
        showScene(3);
        startTypingScene3();
    });

    elements.scene3NextBtn.addEventListener("click", () => {
        showScene(4);
    });

    elements.showMemoryBtn.addEventListener("click", showMemory);

    elements.restartBtn.addEventListener("click", () => {
        state.reset();
        elements.audioPlayer.pause();
        elements.audioPlayer.currentTime = 0;
        showScene(1);
    });

    showScene(1);
});

// expose
window.showNextMemory = showNextMemory;