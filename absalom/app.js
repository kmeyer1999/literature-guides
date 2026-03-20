/* ==============================================
   ABSALOM, ABSALOM! — CHARACTER MAP APP
   William Faulkner Interactive Relationship Map
   ============================================== */

// ─── DATA ────────────────────────────────────────────────────────────
const CHARACTERS = [
  {
    id: 'sutpen',
    name: '托马斯·萨特潘',
    eng: 'Thomas Sutpen',
    initial: 'S',
    family: 'sutpen',
    role: '核心人物 / 家族创始人',
    color: 'var(--fam-sutpen)',
    desc: '1807年生于西弗吉尼亚山区穷白人家庭。1833年在密西西比州建立百亩地庄园。曾于海地与尤拉莉亚·邦结婚（1827），发现其有黑人血统后切割关系；后娶埃伦·科德菲尔德（1838）。内战中任上校。1869年被沃许·琼斯以镰刀砍死于庄园，终其"设计"以失败告终。',
    x: 50, y: 50,
  },
  {
    id: 'henry',
    name: '亨利·萨特潘',
    eng: 'Henry Sutpen',
    initial: 'H',
    family: 'sutpen',
    role: '萨特潘之子',
    color: 'var(--fam-sutpen)',
    desc: '1839年生于百亩地，托马斯与埃伦之子。入密西西比大学时结识查尔斯·邦，结为挚友。内战结束（1865）时，在自家庄园门口亲手枪杀邦，阻止其与妹妹成婚。此后流亡数十年，1909年悄然回到故居等死，同年在克莱蒂放火时与之同焚。',
    x: 30, y: 70,
  },
  {
    id: 'judith',
    name: '朱迪思·萨特潘',
    eng: 'Judith Sutpen',
    initial: 'J',
    family: 'sutpen',
    role: '萨特潘之女',
    color: 'var(--fam-sutpen)',
    desc: '1841年生于百亩地，托马斯与埃伦之女。1860年与查尔斯·邦订婚。邦被亨利杀死后独自守候庄园，收养了邦的私生子查尔斯·埃蒂恩·邦。1884年去世于百亩地，与收养的孩子同年离世。以沉默的坚韧承受了家族的一切悲剧。',
    x: 52, y: 73,
  },
  {
    id: 'bon',
    name: '查尔斯·邦',
    eng: 'Charles Bon',
    initial: 'B',
    family: 'bon',
    role: '萨特潘私生子（海地）',
    color: 'var(--fam-bon)',
    desc: '托马斯·萨特潘与尤拉莉亚·邦所生之子。在新奥尔良长大，入密西西比大学结识亨利，随后与朱迪思订婚。内战中任中尉。渴望父亲认可，始终未能等到那句"他是我儿子"。1865年被亨利枪杀于百亩地庄园门口。',
    x: 72, y: 68,
  },
  {
    id: 'eulalia',
    name: '尤拉莉亚·邦',
    eng: 'Eulalia Bon',
    initial: 'Eu',
    family: 'bon',
    role: '邦家族 / 萨特潘第一任妻子',
    color: 'var(--fam-bon)',
    desc: '出生于海地，法国裔海地蔗糖种植园主之独生女。1827年与托马斯·萨特潘于海地结婚，1831年离婚。萨特潘发现她有黑人血统后以金钱补偿并切断关系。随后在新奥尔良独自抚养儿子查尔斯·邦，死亡日期不详。',
    x: 88, y: 62,
  },
  {
    id: 'goodhue',
    name: '古德休·科德菲尔德',
    eng: 'Goodhue Coldfield',
    initial: 'G',
    family: 'coldfield',
    role: '科德菲尔德家族之父',
    color: 'var(--fam-coldfield)',
    desc: '生于田纳西州，1828年迁往杰弗逊经营小杂货店。埃伦和罗莎的父亲。内战期间拒绝支持邦联，将自己锁在阁楼拒不出门，由年幼的罗莎从屋外递食物。1864年在自我幽禁中去世，留下罗莎孑然一身。',
    x: 14, y: 28,
  },
  {
    id: 'rosa',
    name: '罗莎·科德菲尔德',
    eng: 'Rosa Coldfield',
    initial: 'R',
    family: 'coldfield',
    role: '科德菲尔德家族 / 主要叙事者',
    color: 'var(--fam-coldfield)',
    desc: '1845年生于杰弗逊，古德休·科德菲尔德之女，埃伦之妹。父亲去世后移居百亩地，目睹家族悲剧。萨特潘向她提出"先生育男嗣再正式成婚"的条件被拒，此后独居四十三年。1909年召昆丁来倾诉，是全书最激愤的叙事者。1910年去世于杰弗逊。',
    x: 72, y: 38,
  },
  {
    id: 'ellen',
    name: '埃伦·科德菲尔德',
    eng: 'Ellen Coldfield',
    initial: 'E',
    family: 'coldfield',
    role: '科德菲尔德家族 / 萨特潘之妻',
    color: 'var(--fam-coldfield)',
    desc: '1817年生于田纳西州，古德休·科德菲尔德之长女，罗莎之姐。1838年嫁给托马斯·萨特潘，生下亨利与朱迪思。婚后沉溺虚荣的社交生活，为女儿与查尔斯·邦的婚约欣喜不已。1863年去世于百亩地，未能见证随后数年的家族惨剧。',
    x: 34, y: 40,
  },
  {
    id: 'quentin',
    name: '昆丁·康普生',
    eng: 'Quentin Compson',
    initial: 'Q',
    family: 'compson',
    role: '康普生家族 / 主要叙事者',
    color: 'var(--fam-compson)',
    desc: '1891年生于杰弗逊，萨特潘最早结交的朋友（将军·康普生）之孙。1909—1910年就读哈佛。赴哈佛前夕被罗莎召去倾听萨特潘的故事，并亲赴废弃庄园目睹了垂死的亨利。1910年去世于马萨诸塞州剑桥（《喧哗与骚动》亦记录其死亡）。',
    x: 75, y: 14,
  },
  {
    id: 'shreve',
    name: '施里夫·麦肯农',
    eng: 'Shreve McCannon',
    initial: 'Sh',
    family: 'narrator',
    role: '叙事者 / 昆丁的加拿大室友',
    color: 'var(--fam-narrator)',
    desc: '1890年生于加拿大艾伯塔省埃德蒙顿。1909—1914年就读哈佛，与昆丁同室。以局外人视角共同重构萨特潘的故事。一战期间在法国任加拿大远征军军医上尉，后成为外科医生。问出全书最著名的一句："你为什么恨南方？"',
    x: 88, y: 25,
  },
  {
    id: 'compson_father',
    name: '格言·康普生',
    eng: 'Mr. Compson',
    initial: 'C',
    family: 'compson',
    role: '康普生家族 / 昆丁之父',
    color: 'var(--fam-compson)',
    desc: '昆丁的父亲，萨特潘与将军·康普生友谊的继承者。向昆丁传递了许多关于萨特潘的记忆，叙述带有浓厚宿命论色彩，认为南方的没落已无可挽回。是连接老一辈亲历记忆与新一代叙述者的关键桥梁。',
    x: 58, y: 18,
  },
  {
    id: 'clytie',
    name: '克吕泰涅斯特拉（克莱蒂）',
    eng: 'Clytemnestra Sutpen',
    initial: 'Cy',
    family: 'sutpen',
    role: '萨特潘私生女（混血）/ 庄园守护者',
    color: 'var(--fam-sutpen)',
    desc: '1834年生于百亩地，托马斯·萨特潘与黑人女奴所生的私生女，全名克吕泰涅斯特拉·萨特潘。在庄园中担任管家数十年，忠诚守护至最后。1909年，当联邦官员前来带走亨利时，她点火烧毁整栋宅子，与亨利同焚于百亩地，以烈火终结了萨特潘家族的一切。',
    x: 22, y: 56,
  },
  {
    id: 'bon_son',
    name: '查尔斯·埃蒂恩·邦',
    eng: 'Charles Etienne de Saint Velery Bon',
    initial: 'CE',
    family: 'bon',
    role: '邦之子（混血）',
    color: 'var(--fam-bon)',
    desc: '1859年生于新奥尔良，查尔斯·邦与其八分之一黑人血统情妇所生之子，由朱迪思·萨特潘收养于百亩地。混血身份使他在黑白两个世界都无法立足，1879年娶了一位纯黑人血统女子，1882年生子吉姆·邦德。1884年去世于百亩地。',
    x: 80, y: 82,
  },
  {
    id: 'jim_bond',
    name: '吉姆·邦德',
    eng: 'Jim Bond',
    initial: 'Ji',
    family: 'bon',
    role: '邦家族 / 萨特潘血脉最后后裔',
    color: 'var(--fam-bon)',
    desc: '1882年生于百亩地，查尔斯·埃蒂恩与其黑人妻子之子，萨特潘血脉最后的后裔。是一个智识残缺的年轻黑人，留居庄园废墟。百亩地大火后，他的叫声在废墟周围徘徊。1910年从百亩地消失，去向不明——他是萨特潘"设计"最终、最悲凉的结局。',
    x: 90, y: 90,
  },
  {
    id: 'wash',
    name: '沃许·琼斯',
    eng: 'Wash Jones',
    initial: 'W',
    family: 'sutpen',
    role: '萨特潘的扈从 / 庄园帮工',
    color: 'var(--fam-sutpen)',
    desc: '出生地不详，擅自占居萨特潘庄园废弃鱼棚，甘当萨特潘之扈从。内战期间充当庄园帮工。孙女米利·琼斯与萨特潘生下一女（非男嗣）。当萨特潘轻蔑地抛弃米利母女时，沃许以镰刀砍死了萨特潘（1869），随后杀死米利和婴儿，最终在警察到来时自焚而死，成为终结萨特潘"设计"的那把刀。',
    x: 13, y: 75,
  },
];

const RELATIONSHIPS = [
  // Marriages
  { from: 'sutpen', to: 'eulalia', type: 'marriage', label: '婚姻（第一任，海地，1827）' },
  { from: 'sutpen', to: 'ellen', type: 'marriage', label: '婚姻（第二任，1838）' },
  // Parent-child
  { from: 'sutpen', to: 'henry', type: 'parent', label: '父子' },
  { from: 'sutpen', to: 'judith', type: 'parent', label: '父女' },
  { from: 'sutpen', to: 'bon', type: 'parent', label: '父子（私生，拒认）' },
  { from: 'sutpen', to: 'clytie', type: 'parent', label: '父女（私生）' },
  { from: 'ellen', to: 'henry', type: 'parent', label: '母子' },
  { from: 'ellen', to: 'judith', type: 'parent', label: '母女' },
  { from: 'eulalia', to: 'bon', type: 'parent', label: '母子' },
  { from: 'goodhue', to: 'ellen', type: 'parent', label: '父女' },
  { from: 'goodhue', to: 'rosa', type: 'parent', label: '父女' },
  { from: 'bon', to: 'bon_son', type: 'parent', label: '父子' },
  { from: 'judith', to: 'bon_son', type: 'parent', label: '收养' },
  { from: 'bon_son', to: 'jim_bond', type: 'parent', label: '父子' },
  // Romance / engagement
  { from: 'bon', to: 'judith', type: 'romance', label: '订婚（1860）' },
  { from: 'sutpen', to: 'rosa', type: 'romance', label: '求婚（被拒）' },
  // Conflict
  { from: 'henry', to: 'bon', type: 'conflict', label: '枪杀（1865）' },
  { from: 'rosa', to: 'sutpen', type: 'conflict', label: '怨恨 / 执念' },
  { from: 'wash', to: 'sutpen', type: 'conflict', label: '以镰刀杀之（1869）' },
  // Friendship / narration
  { from: 'henry', to: 'bon', type: 'friendship', label: '挚友（大学）' },
  { from: 'quentin', to: 'shreve', type: 'friendship', label: '室友 / 共同叙述' },
  { from: 'rosa', to: 'quentin', type: 'friendship', label: '叙述者' },
  { from: 'compson_father', to: 'quentin', type: 'friendship', label: '父子 / 传递记忆' },
  { from: 'ellen', to: 'rosa', type: 'friendship', label: '姐妹' },
  { from: 'wash', to: 'sutpen', type: 'friendship', label: '扈从依附' },
];


// ─── MOBILE SUPPORT ──────────────────────────────────────────────────
function isMobile() {
  return window.matchMedia('(max-width: 768px)').matches;
}

const MOBILE_VIRTUAL_H = 1100;

// Mobile-optimized coordinates — manually spaced to avoid overlap on narrow screens
const MOBILE_COORDS = {
  quentin:        { x: 72, y: 8  },
  shreve:         { x: 92, y: 16 },
  compson_father: { x: 50, y: 12 },
  goodhue:        { x: 10, y: 24 },
  ellen:          { x: 32, y: 34 },
  rosa:           { x: 72, y: 30 },
  sutpen:         { x: 50, y: 45 },
  clytie:         { x: 18, y: 52 },
  eulalia:        { x: 88, y: 55 },
  bon:            { x: 72, y: 62 },
  henry:          { x: 28, y: 66 },
  judith:         { x: 50, y: 72 },
  wash:           { x: 8,  y: 78 },
  bon_son:        { x: 76, y: 84 },
  jim_bond:       { x: 92, y: 92 },
};

// Colour map for relationship types
const REL_COLORS = {
  marriage: 'var(--col-marriage)',
  parent: 'var(--col-parent)',
  romance: 'var(--col-romance)',
  conflict: 'var(--col-conflict)',
  friendship: 'var(--col-friendship)',
};

const REL_DASH = {
  marriage: [],
  parent: [6, 3],
  romance: [3, 3],
  conflict: [8, 4],
  friendship: [4, 4],
};

// ─── LAYOUT ──────────────────────────────────────────────────────────
function getNodePositions() {
  const mobile = isMobile();
  const headerEl = document.querySelector('.site-header');
  const headerH = headerEl ? headerEl.getBoundingClientRect().height + 8 : 104;

  if (mobile) {
    const W = window.innerWidth;
    const topPad = 10;
    return CHARACTERS.map(c => {
      const mc = MOBILE_COORDS[c.id] || { x: c.x, y: c.y };
      return {
        id: c.id,
        x: (mc.x / 100) * W,
        y: topPad + (mc.y / 100) * MOBILE_VIRTUAL_H,
      };
    });
  }

  const W = window.innerWidth;
  const H = window.innerHeight;
  const usableH = H - headerH;
  return CHARACTERS.map(c => ({
    id: c.id,
    x: (c.x / 100) * W,
    y: headerH + (c.y / 100) * usableH,
  }));
}

// ─── STATE ───────────────────────────────────────────────────────────
let activeFilter = 'all';
let selectedId = null;
let positions = [];

// ─── CANVAS DRAWING ──────────────────────────────────────────────────
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  if (isMobile()) {
    canvas.width = window.innerWidth;
    canvas.height = MOBILE_VIRTUAL_H + 40;
  } else {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

// Resolve a CSS variable to an rgba() string for canvas drawing.
// Reads computed styles so it automatically adapts to light/dark theme.
function hexToRgb(cssVar, alpha = 1) {
  // Extract the variable name from 'var(--foo)'
  const match = cssVar.match(/^var\(([^)]+)\)$/);
  if (!match) return `rgba(200,200,200,${alpha})`;
  const resolved = getComputedStyle(document.documentElement)
    .getPropertyValue(match[1]).trim();
  // Parse #rrggbb
  const hex = resolved.replace('#', '');
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgba(200,200,200,${alpha})`;
}

function drawLines(highlightedId) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const pos = Object.fromEntries(positions.map(p => [p.id, p]));

  // Collect visible IDs
  const visibleIds = new Set(
    CHARACTERS
      .filter(c => activeFilter === 'all' || c.family === activeFilter)
      .map(c => c.id)
  );

  // Deduplicate (show each pair once)
  const drawn = new Set();

  RELATIONSHIPS.forEach(rel => {
    const key = [rel.from, rel.to].sort().join('|');
    if (drawn.has(key)) return;
    if (!visibleIds.has(rel.from) || !visibleIds.has(rel.to)) return;
    drawn.add(key);

    const a = pos[rel.from];
    const b = pos[rel.to];
    if (!a || !b) return;

    const isHighlighted = highlightedId &&
      (rel.from === highlightedId || rel.to === highlightedId);
    const isDimmed = highlightedId && !isHighlighted;

    const color = REL_COLORS[rel.type];
    const alpha = isDimmed ? 0.08 : isHighlighted ? 0.9 : 0.35;
    const width = isHighlighted ? 2.5 : 1.5;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = hexToRgb(color, alpha);
    ctx.lineWidth = width;
    ctx.setLineDash(REL_DASH[rel.type]);
    if (isHighlighted) {
      ctx.shadowColor = hexToRgb(color, 0.7);
      ctx.shadowBlur = 12;
    }
    ctx.stroke();
    ctx.restore();
  });
}

// ─── MOBILE LAYOUT HELPERS ───────────────────────────────────────────
function updateMapDimensions() {
  if (isMobile()) {
    map.style.width = window.innerWidth + 'px';
    map.style.height = (MOBILE_VIRTUAL_H + 40) + 'px';
  } else {
    map.style.width = '';
    map.style.height = '';
  }
}

function positionMobileLegend() {
  const legend = document.querySelector('.legend');
  if (!legend) return;
  if (isMobile()) {
    const headerEl = document.querySelector('.site-header');
    const headerH = headerEl ? headerEl.getBoundingClientRect().height : 80;
    legend.style.top = headerH + 'px';
    legend.style.position = 'fixed';
  } else {
    legend.style.top = '';
    legend.style.position = '';
  }
}

// ─── RENDER NODES ────────────────────────────────────────────────────
const map = document.getElementById('map');

function renderNodes() {
  map.innerHTML = '';
  updateMapDimensions();
  positionMobileLegend();
  positions = getNodePositions();
  const posMap = Object.fromEntries(positions.map(p => [p.id, p]));

  const visibleIds = new Set(
    CHARACTERS
      .filter(c => activeFilter === 'all' || c.family === activeFilter)
      .map(c => c.id)
  );

  CHARACTERS.forEach(char => {
    const pos = posMap[char.id];
    const node = document.createElement('div');
    node.className = 'char-node';
    node.id = `node-${char.id}`;
    node.style.left = `${pos.x}px`;
    node.style.top = `${pos.y}px`;
    node.style.transform = 'translate(-50%, -50%)';

    if (!visibleIds.has(char.id)) {
      node.classList.add('dimmed');
    }

    node.innerHTML = `
      <div class="node-ring" style="color:${char.color}; border-color:${char.color}">
        ${char.initial}
      </div>
      <div class="node-label">${char.name}</div>
      <div class="node-role">${char.role}</div>
    `;

    node.addEventListener('click', () => handleNodeClick(char.id));
    map.appendChild(node);
  });

  drawLines(selectedId);
}

// ─── INTERACTION ─────────────────────────────────────────────────────
function handleNodeClick(id) {
  if (selectedId === id) {
    // Deselect
    selectedId = null;
    closePanel();
    clearHighlight();
  } else {
    selectedId = id;
    highlightNode(id);
    openPanel(id);
  }
  drawLines(selectedId);
}

function highlightNode(id) {
  document.querySelectorAll('.char-node').forEach(n => {
    n.classList.remove('highlighted', 'dimmed');
  });

  // Find connected node IDs
  const connected = new Set([id]);
  RELATIONSHIPS.forEach(r => {
    if (r.from === id) connected.add(r.to);
    if (r.to === id) connected.add(r.from);
  });

  document.querySelectorAll('.char-node').forEach(n => {
    const nodeId = n.id.replace('node-', '');
    if (nodeId === id) {
      n.classList.add('highlighted');
    } else if (!connected.has(nodeId)) {
      n.classList.add('dimmed');
    }
  });
}

function clearHighlight() {
  document.querySelectorAll('.char-node').forEach(n => {
    n.classList.remove('highlighted', 'dimmed');
  });
}

function openPanel(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;

  const related = RELATIONSHIPS.filter(r => r.from === id || r.to === id);
  const otherIds = [...new Set(related.map(r => r.from === id ? r.to : r.from))];
  const otherChars = otherIds.map(oid => CHARACTERS.find(c => c.id === oid)).filter(Boolean);

  const relHTML = related.map(r => {
    const otherId = r.from === id ? r.to : r.from;
    const other = CHARACTERS.find(c => c.id === otherId);
    if (!other) return '';
    const colVar = REL_COLORS[r.type];
    const hexMap = {
      'var(--col-marriage)': '#c9956a',
      'var(--col-parent)': '#7ec8c8',
      'var(--col-romance)': '#d4789a',
      'var(--col-conflict)': '#c94c4c',
      'var(--col-friendship)': '#7b9e6a',
    };
    const col = hexMap[colVar] || '#888';
    return `<div class="detail-relation-item">
      <span class="rel-dot" style="background:${col}"></span>
      <span class="rel-target">${other.name}</span>
      <span class="rel-type">${r.label}</span>
    </div>`;
  }).join('');

  const famLabel = {
    sutpen: '萨特潘家族', compson: '康普生家族', coldfield: '科德菲尔德家族', bon: '邦家族', narrator: '叙事者'
  };

  // Map CSS var to hex for avatar border
  const hexColorMap = {
    'var(--fam-sutpen)': '#c9956a',
    'var(--fam-compson)': '#7b9e6a',
    'var(--fam-coldfield)': '#b07a60',
    'var(--fam-bon)': '#7ec8c8',
    'var(--fam-narrator)': '#9b87c0',
  };
  const hexColor = hexColorMap[char.color] || '#888';

  document.getElementById('detail-content').innerHTML = `
    <div class="detail-avatar" style="color:${hexColor}; border-color:${hexColor}">${char.initial}</div>
    <div class="detail-name" style="color:${hexColor}">${char.name}</div>
    <div class="detail-eng">${char.eng}</div>
    <div class="detail-tag" style="color:${hexColor}">${famLabel[char.family] || char.family}</div>
    <div class="detail-desc">${char.desc}</div>
    ${relHTML ? `<div class="detail-relations-title">人物关系</div>${relHTML}` : ''}
  `;
  document.getElementById('detail-panel').classList.add('open');
}

function closePanel() {
  document.getElementById('detail-panel').classList.remove('open');
  selectedId = null;
}

// ─── FILTER BUTTONS ──────────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    selectedId = null;
    closePanel();
    renderNodes();
  });
});

document.getElementById('detail-close').addEventListener('click', () => {
  closePanel();
  clearHighlight();
  drawLines(null);
});

// ─── CANVAS TOOLTIP on hover ─────────────────────────────────────────
const tooltip = document.getElementById('tooltip');

canvas.style.pointerEvents = 'all'; // re-enable for tooltip

// Shared helper: find relationship line near a point (canvas coordinates)
function findRelAtPoint(cx, cy, threshold) {
  const pos = Object.fromEntries(positions.map(p => [p.id, p]));
  const visibleIds = new Set(
    CHARACTERS.filter(c => activeFilter === 'all' || c.family === activeFilter).map(c => c.id)
  );
  const drawn = new Set();

  for (const rel of RELATIONSHIPS) {
    const key = [rel.from, rel.to].sort().join('|');
    if (drawn.has(key)) continue;
    if (!visibleIds.has(rel.from) || !visibleIds.has(rel.to)) continue;
    drawn.add(key);

    const a = pos[rel.from];
    const b = pos[rel.to];
    if (!a || !b) continue;

    const dist = pointToSegmentDist(cx, cy, a.x, a.y, b.x, b.y);
    if (dist < threshold) {
      const fromChar = CHARACTERS.find(c => c.id === rel.from);
      const toChar = CHARACTERS.find(c => c.id === rel.to);
      return `${fromChar?.name} ↔ ${toChar?.name}\n${rel.label}`;
    }
  }
  return null;
}

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  const cx = e.clientX - rect.left;
  const cy = e.clientY - rect.top;
  const found = findRelAtPoint(cx, cy, 10);

  if (found) {
    tooltip.textContent = found;
    tooltip.classList.add('visible');
    tooltip.style.left = `${e.clientX + 14}px`;
    tooltip.style.top = `${e.clientY - 10}px`;
    canvas.style.cursor = 'pointer';
  } else {
    tooltip.classList.remove('visible');
    canvas.style.cursor = 'default';
  }
});

canvas.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));

// ─── TOUCH TOOLTIP SUPPORT ──────────────────────────────────────────
canvas.addEventListener('touchstart', handleTooltipTouch, { passive: false });
canvas.addEventListener('touchmove', handleTooltipTouch, { passive: false });
canvas.addEventListener('touchend', () => {
  tooltip.classList.remove('visible');
});

function handleTooltipTouch(e) {
  const touch = e.touches[0];
  if (!touch) return;

  const rect = canvas.getBoundingClientRect();
  const cx = touch.clientX - rect.left;
  const cy = touch.clientY - rect.top;
  const found = findRelAtPoint(cx, cy, 18);

  if (found) {
    e.preventDefault();
    tooltip.textContent = found;
    tooltip.classList.add('visible');
    tooltip.style.left = `${touch.clientX + 14}px`;
    tooltip.style.top = `${touch.clientY - 40}px`;
  } else {
    tooltip.classList.remove('visible');
  }
}

// ─── MOBILE: tap outside to close detail panel ──────────────────────
document.addEventListener('click', (e) => {
  if (!isMobile()) return;
  const panel = document.getElementById('detail-panel');
  if (!panel.classList.contains('open')) return;
  if (!panel.contains(e.target) && !e.target.closest('.char-node')) {
    closePanel();
    clearHighlight();
    drawLines(null);
  }
});

function pointToSegmentDist(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  if (dx === 0 && dy === 0) return Math.hypot(px - ax, py - ay);
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

// ─── RESIZE ──────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  resizeCanvas();
  renderNodes();
});

// ─── THEME TOGGLE ─────────────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  try { localStorage.setItem('absalom-theme', next); } catch (e) { }
  // Redraw canvas lines with new theme colours
  drawLines(selectedId);
});

// ─── INIT ────────────────────────────────────────────────────────────
// Restore saved theme preference
try {
  const saved = localStorage.getItem('absalom-theme');
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.setAttribute('data-theme', saved);
  }
} catch (e) { }

resizeCanvas();
renderNodes();
