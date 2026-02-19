// Данные
let categories = {};
let isAdmin = false;

// Исходные данные из листа Size (полностью)
const defaultData = {
    jar: {
        name: '📦 JAR Sizes',
        suffix: ' *.jar',
        items: [
            "size:2263", "size:5266", "size:6515", "size:6770", "size:6778", "size:7016", "size:7218", "size:7803", "size:7891", "size:9327", "size:10283", "size:10605", "size:10958", "size:11554", "size:16541", "size:17308", "size:17339", "size:18180", "size:18527", "size:18587", "size:18734", "size:19266", "size:20578", "size:20583", "size:20639", "size:20883", "size:21161", "size:21234", "size:21664", "size:22036", "size:22861", "size:26247", "size:27546", "size:27809", "size:28084", "size:28439", "size:29304", "size:29567", "size:30279", "size:31549", "size:31607", "size:34449", "size:34669", "size:35971", "size:35993", "size:38149", "size:39017", "size:39321", "size:40142", "size:42782", "size:47159", "size:48242", "size:50828", "size:51212", "size:52426", "size:54088", "size:59381", "size:62782", "size:65316", "size:65486", "size:65765", "size:66659", "size:67491", "size:68794", "size:69757", "size:72334", "size:74105", "size:80751", "size:88896", "size:95530", "size:98811", "size:100523", "size:100799", "size:101297", "size:101571", "size:101703", "size:102297", "size:102733", "size:103761", "size:104954", "size:105623", "size:105672", "size:112386", "size:120640", "size:138417", "size:143006", "size:143597", "size:143600", "size:147329", "size:147873", "size:151762", "size:153937", "size:156722", "size:156779", "size:166677", "size:169718", "size:173698", "size:183634", "size:183651", "size:192156", "size:202720", "size:257482", "size:263070", "size:267746", "size:274865", "size:300286", "size:334588", "size:343169", "size:350629", "size:409616", "size:410358", "size:517248", "size:519731", "size:532826", "size:539151", "size:556494", "size:597406", "size:636621", "size:640838", "size:878781", "size:925493", "size:1077149", "size:1165063", "size:1181556", "size:1444714", "size:1471429", "size:1569093", "size:1822841", "size:3113569", "size:3425801", "size:3541075", "size:3541138", "size:3642292", "size:3684385", "size:4642998", "size:5630483", "size:7052171", "size:7059952", "size:22258750", "size:25704986", "size:26179274", "size:26691896"
        ]
    },
    weight: {
        name: '⚖️ Size by Weight',
        suffix: '',
        items: [
            "size:9951744", "size:24536064", "size:15438336", "size:6229504", "size:6573056", "size:7187456", "size:7969792", "size:1562249", "size:1672329", "size:1677449", "size:1680521", "size:147329", "size:138351", "size:202720", "size:7788032", "size:22885", "size:23810", "size:138351", "size:147329", "size:7988736", "size:3711166", "size:3697285", "size:3712014", "size:5641728", "size:4413440", "size:114974", "size:111866", "size:274865", "size:1820884", "size:5007380", "size:6944256", "size:5934592", "size:2545664", "size:2108662", "size:1961742", "size:3684385", "size:5143837", "size:4413440", "size:116689", "size:1968128", "size:8011776", "size:1883602", "size:5918208", "size:1897269", "size:31445308", "size:24390144", "size:25158656", "size:2023236", "size:16836288", "size:88065933", "size:197933122", "size:2258533", "size:2305645", "size:2372788", "size:18764384", "size:9400174", "size:2363704", "size:15445581", "size:2373676", "size:138351", "size:7788032", "size:22885", "size:23810", "size:7988736", "size:3711166", "size:3697285", "size:3712014", "size:5641728", "size:4413440", "size:111866", "size:1820884", "size:5007380", "size:6944256", "size:5934592", "size:2545664", "size:2108662", "size:1961742", "size:3684385", "size:5143837", "size:1968128", "size:8011776", "size:1883602", "size:6533121", "size:16629226", "size:28107997", "size:8249687", "size:5524900", "size:140200", "size:132133", "size:110439", "size:6244043", "size:6867367", "size:43883", "size:514855", "size:479296", "size:9530356", "size:355527744", "size:1819289", "size:1897269", "size:16855568", "size:16964112", "size:2023236", "size:5918208", "size:31445308", "size:24390144", "size:10657176", "size:460288", "size:19521024", "size:15076480", "size:7204864", "size:1613824", "size:1499136", "size:1488896", "size:9332326", "size:9400174", "size:10071288", "size:9400174", "size:10071288", "Baritone", "Nursultan"
        ]
    },
    name: {
        name: '🏷️ Size by Name',
        suffix: '',
        items: [
            "impact", "wurst", "bleachhack", "aristois", "huzuni", "skillclient", "inertia", "ares", "sigma", "meteor", "liquidbounce", "nurik", "nursultan", "celestial", "calestial", "celka", "expensive", "neverhook", "excellent", "wexside", "wildclient", "minced", "deadcode", "akrien", "jigsaw", "future", "jessica", "dreampool", "norules", "konas", "richclient", "rusherhack", "thunderhack", "moonhack", "doomsday", "nightware", "ricardo", "extazyy", "troxill", "antileak", "arbuz", ".akr", ".wex", "dauntiblyat", "rename_me_please", "editme", "takker", "fuzeclient", "wisefolder", "flauncher", "vec.dll", "USBOblivion.exe", "Feather", "delta", "venus", "baritone", "spambot", "CleanCut", "spam_bot", "inventory_walk", "player_highlighter", "aimbot", "freecam", "bedrock_breaker_mode", "viaversion", "double_hotbar", "elytra_swap", "armor_hotswap", "smart_moving", "chest", "savesearcher", "topkautobuy", "topkaautobuy", "tweakeroo", "mob_hitbox", "librarian_trade_finder", "sacurachorusfind", "autoattack", "entity_outliner", "invmove", "viabackwards", "viarewind", "viafabric", "viaforge", "viaproxy", "vialoader", "viamcp", "hitbox", "elytrahack", "DiamondSim", "ForgeHax", "clientcommands", "Control-Tweaks", "SwingThroughGrass", "CutThrough", "Haruka", "NewLauncher", "Blade", "Hachclient", "Inertia", "Fluger", "Exloader", "CatLean"
        ]
    },
    vec: {
        name: '🧩 Size Vec.dll',
        suffix: '',
        items: [
            "size:30720 utf8content:net/minecraft/client/entity/player/ClientPlayerEntity|net/minecraft/util/math/AxisAlignedBB"
        ]
    },
    exe: {
        name: '⚙️ .exe sizes',
        suffix: '',
        items: [
            ".exe size:12mb-25mb"
        ]
    },
    doomsday: {
        name: '💀 DoomsDay Client',
        suffix: '',
        items: [
            'ext:jar size:21kb-10mb content:"l.png" content:"mcmod.info"'
        ]
    },
    autoreconnect: {
        name: '🔄 Auto Reconnect | 17 КБ | By JmcMODS',
        suffix: '',
        items: [
            ".jar utf8content:me/goodman/reconnect/addon.class"
        ]
    },
    viewmodel: {
        name: '👁️ View Model | 65 КБ | By JmcMODS',
        suffix: '',
        items: [
            ".jar utf8content:c3sss3"
        ]
    },
    creativecore: {
        name: '🎨 CreativeCore | 401 КБ | By JmcMODS',
        suffix: '',
        items: [
            ".jar utf8content:team/creative/creativecore/render/"
        ]
    },
    perspective: {
        name: '🔄 Perspective Mod | 93 КБ | By JmcMODS',
        suffix: '',
        items: [
            ".jar utf8content:pm/c7/pmr/attribute/attributeloader.class"
        ]
    },
    optifile: {
        name: '⚡ OptiFile | 4959 КБ | By JmcMODS',
        suffix: '',
        items: [
            "size:5077783 .jar utf8content:va!e[v="
        ]
    },
    size11740: {
        name: '📁 11740 КБ | By JmcMODS',
        suffix: '',
        items: [
            ".jar utf8content:kc_03u&jepa"
        ]
    },
    lwjgl: {
        name: '🔧 lwjgI32.dll | 26087 КБ | By JmcMODS',
        suffix: '',
        items: [
            "size:25mb-30mb utf8content:_#x_x"
        ]
    },
    bgn: {
        name: '📄 bgn.class | By JmcMODS',
        suffix: '',
        items: [
            ".class utf8content:(lbrx;lbmb;laqm;)lbga;"
        ]
    },
    anapa: {
        name: '🌴 Anapa | By JmcMODS',
        suffix: '',
        items: [
            "size:8mb-10mb utf8content:wlproj"
        ]
    },
    cscheat: {
        name: '💉 cscheat.dll | 1526 КБ | By JmcMODS',
        suffix: '',
        items: [
            "size:1500kb-1600kb utf8content:entityraytraceresult"
        ]
    },
    sound: {
        name: '🎵 Sound.mp3 | By JmcMODS',
        suffix: '',
        items: [
            "size:20mb-25mb utf8content:{5}#"
        ]
    },
    nixploit_dll: {
        name:'👻 Nixploit .dll | By JmcMODS',
        suffix: '',
        items: [
            '.dll size:10kb-35013kb utf8content:"hmm8_vfp>@f"'
        ]
    },
    nixploit_jar: {
        name:'👻 Nixploit .jar | By JmcMODS',
        suffix: '',
        items: [
            '.jar size:3kb-4kb utf8content:"s9==]"'
        ]
    },
    nixploit_txt: {
        name:'👻 Nixploit .txt | By JmcMODS',
        suffix: '',
        items: [
            '.txt size:3kb-100kb utf8content:"s.close()"'
        ]
    },
    nixploit_exe: {
        name:'👻 Nixploit .exe | By JmcMODS',
        suffix: '',
        items: [
            '.exe size:11kb-35013kb utf8content:"yaxpebd@z?"'
        ]
    },
    holyworld: {
        name: '🗒️ Size in HolyWorld',
        suffix: '',
        items: [
            'ext:.exe;.jar;.zip;.rar regex:(impact|wurst|bleach[-_]?hack|aristois|huzuni|skill[-_]?client|nodus|inertia|ares|sigma|meteor|BetterHitReg|atomic|zamorozka|liquid[-_]?bounce|nurik|nursultan|celestial|calestial|celka|expensive|neverhook|excellent|wexside|wild|minced|deadcode|akrien|future|dreampool|vape|infinity|squad|no[-_]?rules|konas|zeus[-_]?client|rich[-_]?client|ghost[-_]?client|rusher[-_]?hack|thunder[-_]?hack|moon[-_]?hack|winner|nova|exire|doomsday|nightware|ricardo|extazyy|troxill|arbuz|dauntiblyat|rename[-_]?me[-_]?please|edit[-_]?me|takker|faker|xameleon|fuze[-_]?client|wise[-_]?folder|net[-_]?limiter|feather|delta|eclipse|venus|jex|hakari|hush|hach|rogalik|catlavan|haruka|wissend|fluger|sperma|vortex|newcode|astra|britva|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|lowdurabilityswitcher|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|through|mob|auto|place|health|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass)'
        ]
    }
};

// Загрузка из localStorage или использование дефолтных
function loadData() {
    const saved = localStorage.getItem('sizeCategories');
    if (saved) {
        try {
            categories = JSON.parse(saved);
        } catch (e) {
            categories = JSON.parse(JSON.stringify(defaultData));
        }
    } else {
        categories = JSON.parse(JSON.stringify(defaultData));
    }
}

// Сохранение в localStorage
function saveData() {
    localStorage.setItem('sizeCategories', JSON.stringify(categories));
}

// Загружаем данные при старте
loadData();

function render() {
    const container = document.getElementById('categories');
    container.innerHTML = '';
    
    for (let [key, cat] of Object.entries(categories)) {
        const block = document.createElement('div');
        block.className = 'block';
        block.id = `cat-${key}`;
        
        // Заголовок
        const header = document.createElement('div');
        header.className = 'block-header';
        header.innerHTML = `
            <h2>${cat.name}</h2>
            <button class="copy-btn" onclick="copyCategory('${key}')">📋 копировать</button>
        `;
        block.appendChild(header);
        
        // Контент с сайзами
        const content = document.createElement('div');
        content.className = 'content-box';
        
        let displayText = cat.items.join('|');
        if (cat.suffix) displayText += cat.suffix;
        
        if (isAdmin) {
            // Для админа показываем сайзы с кнопками удаления
            cat.items.forEach((item, idx) => {
                const span = document.createElement('span');
                span.className = 'size-item';
                span.innerHTML = `<span>${item}</span><button class="delete-size" onclick="deleteItem('${key}', ${idx})">✕</button>`;
                content.appendChild(span);
            });
        } else {
            content.textContent = displayText;
        }
        block.appendChild(content);
        
        // Админ-контролы (только для админа)
        if (isAdmin) {
            const adminDiv = document.createElement('div');
            adminDiv.className = 'admin-controls';
            adminDiv.innerHTML = `
                <input type="text" id="input-${key}" placeholder="новый сайз">
                <button onclick="addItem('${key}')">➕ добавить</button>
                <button class="delete-cat" onclick="deleteCategory('${key}')">🗑️ удалить категорию</button>
            `;
            block.appendChild(adminDiv);
        }
        
        container.appendChild(block);
    }
}

// Копирование
window.copyCategory = function(key) {
    const cat = categories[key];
    let text = cat.items.join('|');
    if (cat.suffix) text += cat.suffix;
    
    navigator.clipboard.writeText(text);
};

// Добавление элемента (админ)
window.addItem = function(key) {
    const input = document.getElementById(`input-${key}`);
    let value = input.value.trim();
    if (!value) return;
    
    categories[key].items.push(value);
    render();
    saveData();
};

// Удаление элемента (админ)
window.deleteItem = function(key, index) {
    categories[key].items.splice(index, 1);
    render();
    saveData();
};

// Новая категория (админ)
window.newCategory = function() {
    const name = prompt('Название новой категории (например: "📁 Мои размеры"):');
    if (!name) return;
    
    const id = 'cat_' + Date.now();
    categories[id] = {
        name: name,
        suffix: '',
        items: []
    };
    render();
    saveData();
};

// Удаление категории (админ)
window.deleteCategory = function(key) {
    const baseCategories = ['jar', 'weight', 'name', 'vec', 'exe', 'doomsday', 'autoreconnect', 'viewmodel', 'creativecore', 'perspective', 'optifile', 'size11740', 'lwjgl', 'bgn', 'anapa', 'cscheat', 'sound', 'nixploit_dll', 'nixploit_jar', 'nixploit_txt', 'nixploit_exe', 'holyworld'];
    
    if (baseCategories.includes(key)) {
        alert('❌ базовые категории нельзя удалить');
        return;
    }
    if (confirm(`Удалить категорию "${categories[key].name}"?`)) {
        delete categories[key];
        render();
        saveData();
    }
};

// Авторизация
window.login = function() {
    const login = document.getElementById('login-input').value;
    const pass = document.getElementById('pass-input').value;
    
    if (login === 'CodeV0rtex' && pass === '21emanoN74859474()') {
        isAdmin = true;
        document.getElementById('user-role').innerHTML = '👑 Admin';
        document.getElementById('admin-panel').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'inline-block';
        render();
    } else {
        alert('❌ Неверный логин/пароль');
    }
};

window.logout = function() {
    isAdmin = false;
    document.getElementById('user-role').innerHTML = '👁️ Читатель';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-input').value = '';
    document.getElementById('pass-input').value = '';
    render();
};

// Старт
window.onload = function() {
    loadData();
    render();
};
