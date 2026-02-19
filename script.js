// Данные
let categories = {};
let isAdmin = false;

// Исходные данные из листа Size (полностью)
const defaultData = {
    jar: {
        name: '📦 JAR Sizes',
        suffix: ' *.jar',
        items: [
            "2263", "5266", "6515", "6770", "6778", "7016", "7218", "7803", "7891", "9327",
            "10283", "10605", "10958", "11554", "16541", "17308", "17339", "18180", "18527", "18587",
            "18734", "19266", "20578", "20583", "20639", "20883", "21161", "21234", "21664", "22036",
            "22861", "26247", "27546", "27809", "28084", "28439", "29304", "29567", "30279", "31549",
            "31607", "34449", "34669", "35971", "35993", "38149", "39017", "39321", "40142", "42782",
            "47159", "48242", "50828", "51212", "52426", "54088", "59381", "62782", "65316", "65486",
            "65765", "66659", "67491", "68794", "69757", "72334", "74105", "80751", "88896", "95530",
            "98811", "100523", "100799", "101297", "101571", "101703", "102297", "102733", "103761", "104954",
            "105623", "105672", "112386", "120640", "138417", "143006", "143597", "143600", "147329", "147873",
            "151762", "153937", "156722", "156779", "166677", "169718", "173698", "183634", "183651", "192156",
            "202720", "257482", "263070", "267746", "274865", "300286", "334588", "343169", "350629", "409616",
            "410358", "517248", "519731", "532826", "539151", "556494", "597406", "636621", "640838", "878781",
            "925493", "1077149", "1165063", "1181556", "1444714", "1471429", "1569093", "1822841", "3113569", "3425801",
            "3541075", "3541138", "3642292", "3684385", "4642998", "5630483", "7052171", "7059952", "22258750", "25704986",
            "26179274", "26691896", "Nixploit"
        ]
    },
    weight: {
        name: '⚖️ Size by Weight',
        suffix: '',
        items: [
            "9951744", "24536064", "15438336", "6229504", "6573056", "7187456", "7969792", "1562249", "1672329", "1677449",
            "1680521", "147329", "138351", "202720", "7788032", "22885", "23810", "138351", "147329", "7988736",
            "3711166", "3697285", "3712014", "5641728", "4413440", "114974", "111866", "274865", "1820884", "5007380",
            "6944256", "5934592", "2545664", "2108662", "1961742", "3684385", "5143837", "4413440", "116689", "1968128",
            "8011776", "1883602", "5918208", "1897269", "31445308", "24390144", "25158656", "2023236", "16836288", "88065933",
            "197933122", "2258533", "2305645", "2372788", "18764384", "9400174", "2363704", "15445581", "2373676", "138351",
            "7788032", "22885", "23810", "7988736", "3711166", "3697285", "3712014", "5641728", "4413440", "111866",
            "1820884", "5007380", "6944256", "5934592", "2545664", "2108662", "1961742", "3684385", "5143837", "1968128",
            "8011776", "1883602", "6533121", "16629226", "28107997", "8249687", "5524900", "140200", "132133", "110439",
            "6244043", "6867367", "43883", "514855", "479296", "9530356", "355527744", "1819289", "1897269", "16855568",
            "16964112", "2023236", "5918208", "31445308", "24390144", "10657176", "460288", "19521024", "15076480", "7204864",
            "1613824", "1499136", "1488896", "9332326", "9400174", "10071288", "9400174", "10071288", ".dll", ".jar", ".txt", ".exe"
        ]
    },
    name: {
        name: '🏷️ Size by Name',
        suffix: '',
        items: [
            "impact", "wurst", "bleachhack", "aristois", "huzuni", "skillclient", "inertia", "ares", "sigma", "meteor",
            "liquidbounce", "nurik", "nursultan", "celestial", "calestial", "celka", "expensive", "neverhook", "excellent", "wexside",
            "wildclient", "minced", "deadcode", "akrien", "jigsaw", "future", "jessica", "dreampool", "norules", "konas",
            "richclient", "rusherhack", "thunderhack", "moonhack", "doomsday", "nightware", "ricardo", "extazyy", "troxill", "antileak",
            "arbuz", ".akr", ".wex", "dauntiblyat", "rename_me_please", "editme", "takker", "fuzeclient", "wisefolder", "flauncher",
            "vec.dll", "USBOblivion.exe", "Feather", "delta", "venus", "baritone", "spambot", "CleanCut", "spam_bot", "inventory_walk",
            "player_highlighter", "aimbot", "freecam", "bedrock_breaker_mode", "viaversion", "double_hotbar", "elytra_swap", "armor_hotswap", "smart_moving", "chest",
            "savesearcher", "topkautobuy", "topkaautobuy", "tweakeroo", "mob_hitbox", "librarian_trade_finder", "sacurachorusfind", "autoattack", "entity_outliner", "invmove",
            "viabackwards", "viarewind", "viafabric", "viaforge", "viaproxy", "vialoader", "viamcp", "hitbox", "elytrahack", "DiamondSim",
            "ForgeHax", "clientcommands", "Control-Tweaks", "SwingThroughGrass", "CutThrough", "Haruka", "NewLauncher", "Blade", "Hachclient", "Inertia",
            "Fluger", "Exloader", "CatLean"
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
            "12mb-25mb"
        ]
    },
    doomsday: {
        name: '💀 DoomsDay Client',
        suffix: '',
        items: [
            "21kb-10mb"
        ]
    },
    autoreconnect: {
        name: '🔄 Auto Reconnect',
        suffix: '',
        items: [
            "17kb"
        ]
    },
    viewmodel: {
        name: '👁️ View Model',
        suffix: '',
        items: [
            "65kb"
        ]
    },
    creativecore: {
        name: '🎨 CreativeCore',
        suffix: '',
        items: [
            "401kb"
        ]
    },
    perspective: {
        name: '🔄 Perspective Mod',
        suffix: '',
        items: [
            "93kb"
        ]
    },
    optifile: {
        name: '⚡ OptiFile',
        suffix: '',
        items: [
            "4959kb"
        ]
    },
    size11740: {
        name: '📁 11740kb',
        suffix: '',
        items: [
            "11740kb"
        ]
    },
    lwjgl: {
        name: '🔧 lwjgI32.dll',
        suffix: '',
        items: [
            "26087kb"
        ]
    },
    bgn: {
        name: '📄 bgn.class',
        suffix: '',
        items: [
            "bgn.class"
        ]
    },
    anapa: {
        name: '🌴 Anapa',
        suffix: '',
        items: [
            "Anapa"
        ]
    },
    cscheat: {
        name: '💉 cscheat.dll',
        suffix: '',
        items: [
            "1526kb"
        ]
    },
    sound: {
        name: '🎵 Sound.mp3',
        suffix: '',
        items: [
            "Sound.mp3"
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

categories = JSON.parse(JSON.stringify(defaultData));

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
    
    navigator.clipboard.writeText(text).then(() => {
        alert(`✅ скопировано ${cat.items.length} элементов`);
    });
};

// Добавление элемента (админ)
window.addItem = function(key) {
    const input = document.getElementById(`input-${key}`);
    let value = input.value.trim();
    if (!value) return;
    
    // Авто-добавление size: для цифр
    if ((key === 'jar' || key === 'weight') && /^\d+$/.test(value) && !value.startsWith('size:')) {
        value = 'size:' + value;
    }
    
    categories[key].items.push(value);
    render();
};

// Удаление элемента (админ)
window.deleteItem = function(key, index) {
    categories[key].items.splice(index, 1);
    render();
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
};

// Удаление категории (админ)
window.deleteCategory = function(key) {
    if (key === 'jar' || key === 'weight' || key === 'name' || key === 'vec' || key === 'doomsday' || key === 'exe') {
        alert('❌ базовые категории нельзя удалить');
        return;
    }
    if (confirm(`Удалить категорию "${categories[key].name}"?`)) {
        delete categories[key];
        render();
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
        alert('❌ неверный логин/пароль (admin/admin123)');
    }
};

window.logout = function() {
    isAdmin = false;
    document.getElementById('user-role').innerHTML = '👁️ читатель (без входа)';
    document.getElementById('admin-panel').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-input').value = '';
    document.getElementById('pass-input').value = '';
    render();
};

// Старт
window.onload = render;
