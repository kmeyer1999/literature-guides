/* ==============================================
   ABSALOM, ABSALOM! — CHAPTER BROWSER
   William Faulkner · 逐章展示 + 导读
   ============================================== */

// ─── CHARACTER COLOUR MAP (mirrors app.js) ───────────────────────────
const CHAR_META = {
  sutpen: { name: '托马斯·萨特潘', color: '#c9956a', initial: 'S' },
  henry: { name: '亨利·萨特潘', color: '#c9956a', initial: 'H' },
  judith: { name: '朱迪思·萨特潘', color: '#c9956a', initial: 'J' },
  bon: { name: '查尔斯·邦', color: '#7ec8c8', initial: 'B' },
  rosa: { name: '罗莎·科德菲尔德', color: '#9b87c0', initial: 'R' },
  ellen: { name: '埃伦·科德菲尔德', color: '#7b9e6a', initial: 'E' },
  quentin: { name: '昆丁·康普生', color: '#9b87c0', initial: 'Q' },
  shreve: { name: '施里夫·麦肯农', color: '#9b87c0', initial: 'Sh' },
  compson_father: { name: '格言·康普生', color: '#7b9e6a', initial: 'C' },
  clytie: { name: '克莱蒂', color: '#c9956a', initial: 'Cy' },
  bon_son: { name: '查尔斯·埃蒂恩', color: '#7ec8c8', initial: 'CE' },
};

// ─── CHAPTER DATA ────────────────────────────────────────────────────
const CHAPTERS = [
  {
    num: 1,
    title: 'The Story Begins',
    titleCn: '故事开始',
    narrator: '罗莎（Rosa）',
    narratorNote: '罗莎向昆丁讲述',
    summary: [
      '1909年9月，杰弗逊小镇。年老的罗莎·科德菲尔德把年轻的昆丁·康普生召来家中，开始向他讲述托马斯·萨特潘的故事——那个在约四十年前凭空出现、建立起"百亩地"庄园的神秘男人。',
      '罗莎的叙述充满了激愤与怨恨。她描述萨特潘如何突然闯入平静的杰弗逊，带着一队海地黑奴，在荒野中建起宏伟却怪异的庄园，同时对全镇礼法不屑一顾。她对萨特潘的称呼始终是"那个恶魔"（demon）。',
      '这一章建立起小说的基本叙事框架：一个正在被讲述的故事，一个激愤的老女人，一个被动的年轻听众。读者和昆丁一样，此时尚不知道为什么罗莎如此执着于要让昆丁亲耳聆听这个故事。',
    ],
    guide: [
      '罗莎的叙述是**主观且充满偏见**的。她称萨特潘为"恶魔"，但书中并未给她这种仇恨一个直白的解释——原因要到第五章才揭晓。读者不应将罗莎的判断当作客观事实。',
      '昆丁是**被动的接收者**，他几乎没有任何反应，更像是一面镜子。注意这一章大部分是罗莎的独白，而不是对话。',
      '时间层次从第一章起便已复杂：罗莎回忆的是数十年前的往事，而昆丁现在所处的1909年本身也是叙事的"现在"。书中的时间并非线性展开。',
      '萨特潘"百亩地"（Sutpen\'s Hundred）的命名本身就暗示着权力与扩张的野心，但此时它已是废墟——小说在开篇就告诉你这个"设计"已经失败，悬念在于**为什么**。',
    ],
    characters: ['sutpen', 'rosa', 'quentin'],
    themes: ['记忆', '仇恨', '叙事框架', '南方神话'],
  },
  {
    num: 2,
    title: 'Sutpen Arrives',
    titleCn: '萨特潘的到来',
    narrator: '罗莎（Rosa）',
    narratorNote: '罗莎讲述 / 昆丁的父亲补充',
    summary: [
      '罗莎继续讲述。1833年，托马斯·萨特潘突然出现在杰弗逊，带来一批他称之为"野蛮"的海地黑奴，两人就此在荒地上开始建造庄园。镇上的人对他充满疑惑和不安——他从哪里来？这批黑奴是哪来的？他凭什么？',
      '通过罗莎父亲的视角，我们了解到当时杰弗逊对萨特潘的种种猜测和抵制。然而萨特潘无视一切非议，专注于他的"设计"：建立庄园、取得土地、建立家族——他把这一切称为一个需要完成的"设计"（Design）。',
      '章节末尾透露，萨特潘最终娶了科德菲尔德家的埃伦为妻，尽管大多数人认为这桩婚事来得突然且莫名其妙。婚礼场面混乱，部分镇民甚至扔起了泥土。',
    ],
    guide: [
      '"设计"（Design）是全书最核心的词汇之一。萨特潘所谓的"设计"不是浪漫的梦想，而是一套**近乎冷酷的目标清单**：土地、妻子、合法的白人继承人、家族名声。情感在他的"设计"里几乎缺席。',
      '本章信息来自**两个不同时代的叙事者**（罗莎 + 昆丁父亲），但叙述视角在文中切换得非常模糊，读者需要时刻注意"现在是谁在说话"。福克纳故意不作明确区分。',
      '萨特潘带来的黑奴被他形容为"野蛮人"，但书中暗示他本人也来自边缘社会，他对这些黑奴的态度折射出他**向上层社会靠拢的焦虑**，而非真正的种族优越感。',
      '婚礼的混乱场面（扔泥土）是杰弗逊社区对萨特潘异类身份的集体排斥，但萨特潘对此毫不在意——这一细节预示了他将如何对待所有妨碍"设计"的情感障碍。',
    ],
    characters: ['sutpen', 'ellen', 'rosa', 'quentin', 'compson_father'],
    themes: ['野心', '设计', '婚姻', '种族', '阶级'],
  },
  {
    num: 3,
    title: 'Mr. Compson Tells',
    titleCn: '康普生先生的讲述',
    narrator: '格言·康普生（Mr. Compson）',
    narratorNote: '昆丁的父亲向昆丁叙述',
    summary: [
      '视角转向昆丁的父亲格言·康普生。他曾从自己的父亲（即将军·康普生，萨特潘的老友）那里听到许多故事，现在向儿子转述。他描述了萨特潘与将军·康普生之间奇特的友谊——两人在某种程度上互相欣赏，尽管镇上其他人仍对萨特潘充满猜忌。',
      '康普生先生叙述了萨特潘的孩子们：亨利和朱迪思。亨利是个敏感而有原则的青年，朱迪思则沉默坚韧。萨特潘在孩子们的教育上几乎是粗野的——他让亨利亲眼观看黑奴们赤身肉搏，朱迪思也在旁观看，面不改色。',
      '这章还引入了查尔斯·邦：亨利在大学里结识的神秘友人，随后被带回"百亩地"，令朱迪思一见倾心，随即订婚。萨特潘对这门亲事的态度最初模糊不清。',
    ],
    guide: [
      '格言·康普生的视角是**二手转述**（他父亲告诉他，他再告诉昆丁），信息链极长，失真的可能性极高。书中许多"事实"是在这种层层转述中被建构出来的，并非直接目击。',
      '康普生先生有一种**宿命论的悲观气质**，他倾向于认为一切都已注定失败。这种世界观会染色他的叙述——他对萨特潘的描述带有某种文学化的同情，与罗莎的愤恨截然不同。',
      '亨利带查尔斯·邦回家这个情节极为关键。此时读者还不知道邦的真实身份，但**为什么萨特潘见到邦后立即反对这门婚事**，是书中最大的悬念之一——这个谜底要到小说后半段才会揭晓。',
      '萨特潘让孩子们观看黑奴肉搏这个细节，表面上是粗野的父亲教育，实则是书中关于**种族表演与暴力观看**的核心意象——朱迪思的冷静观看也令人不安，暗示家族对暴力的正常化。',
    ],
    characters: ['sutpen', 'henry', 'judith', 'bon', 'compson_father', 'quentin'],
    themes: ['父权', '友谊', '叙述链条', '种族暴力', '命运论'],
  },
  {
    num: 4,
    title: 'Charles Bon\'s Letter',
    titleCn: '查尔斯·邦的信',
    narrator: '格言·康普生（Mr. Compson）',
    narratorNote: '继续昆丁父亲的讲述',
    summary: [
      '内战时期。亨利在父亲的坚决反对下，依然选择站在查尔斯·邦一边，甚至与父亲决裂，放弃继承权，与邦一同参军。朱迪思则独自留守庄园，等待邦的归来。',
      '这章的核心是查尔斯·邦寄给朱迪思的一封信——语言奇特、几乎无法理解，既不像情书也不像战地报告，更像是一个人对存在本身的喃喃低语。格言·康普生将这封信展示给昆丁看。',
      '战争结束，亨利带着邦回到"百亩地"门口，却在那时开枪杀死了邦，阻断了邦与朱迪思的婚姻。原因，此时对读者而言仍是谜。',
    ],
    guide: [
      '查尔斯·邦的那封信是书中最著名的文本之一。**格言·康普生对这封信的解读是他自己的想象与投射**，而非邦的真实意图。读者不应将这封信视为"邦的内心表白"，而应注意：对信的解读本身就是叙事行为。',
      '**亨利为何杀死邦？** 格言·康普生在这章给出了他的推测（邦在新奥尔良有一个"章鱼"情妇和私生子，亨利认为这是重婚），但这个解释在后续章节会被推翻。这是书中设计的**叙事陷阱**：每个叙事者都给出了一个"合理"的解释，但都不是最终答案。',
      '朱迪思收到邦的信后，把它交给了一位黑人女仆保存。这个细节意味深长：**为什么把私密的情书托付给一个黑人女仆？**福克纳在暗示种族与关怀之间的复杂关系。',
      '内战在书中从来不是宏大叙事，而是**破坏"设计"的力量**。萨特潘参加南军，不是出于信念，而是因为南方的社会秩序是他"设计"的土壤——他对南方的认同是功利的。',
    ],
    characters: ['henry', 'bon', 'judith', 'sutpen', 'compson_father', 'quentin'],
    themes: ['战争', '背叛', '信件', '禁止的婚姻', '谎言与真相'],
  },
  {
    num: 5,
    title: 'Rosa\'s Rage',
    titleCn: '罗莎的愤怒',
    narrator: '罗莎（Rosa）',
    narratorNote: '罗莎直接独白',
    summary: [
      '这是全书最具诗意、也最晦涩的一章，完全由罗莎的独白构成。罗莎终于以第一人称讲述了她自己与萨特潘的直接交集——那不是一段爱情故事，而是一次羞辱。',
      '内战结束后，萨特潘回到破败的庄园，试图重建他的"设计"。他向罗莎（埃伦去世后无依无靠的小姑子）提出了求婚，但条件是：**先生育一个后代，证明是儿子，再成婚**。罗莎愤而拒绝，此后独自生活了四十三年。',
      '这一章充满了罗莎对萨特潘又恨又着迷的复杂情感，她用大量隐喻描述庄园的幽灵般存在。章节末尾，她提到庄园里还藏着某个活人——这是她召唤昆丁来的真正原因。',
    ],
    guide: [
      '终于明白了为什么罗莎恨萨特潘：**那不是失恋，而是被当作生育工具的羞辱**。但读者需要注意：即便是对这段经历的叙述，罗莎也是主观的，她的措辞充满了自我保护。她对自己当时的感情也可能存在美化或压抑。',
      '这章最难读懂之处在于罗莎的语言风格极度华丽迂回——**长达整段的复合句、时间颠倒的闪回、诗意的比喻**。这不是叙事混乱，而是罗莎心理状态的文学化呈现：她的痛苦太深，无法用直白的语言承载。',
      '"庄园里还有人"这个悬念是全书后半段的发动机。但注意：**罗莎知道什么、她为什么要等四十三年才带人去探访**，这些问题书中从未给出完全令人满意的答案，福克纳保留了这个模糊性。',
      '罗莎此前对萨特潘"爱"的成分有多少，书中暗示她曾对他有过少女的想象——但她**从未在叙述中承认这一点**。读者需要在她的愤恨之间读出被压抑的吸引力。',
    ],
    characters: ['rosa', 'sutpen', 'quentin', 'clytie'],
    themes: ['羞辱', '愤恨', '独身', '女性处境', '记忆与痛苦'],
  },
  {
    num: 6,
    title: 'Harvard Room',
    titleCn: '哈佛宿舍',
    narrator: '昆丁 + 施里夫（Quentin & Shreve）',
    narratorNote: '两人对话，共同重构',
    summary: [
      '时间跳转至同年冬天，昆丁已到哈佛，与加拿大室友施里夫在宿舍里聊起这些故事。施里夫作为局外人，充满好奇地追问昆丁关于萨特潘的一切。',
      '这章开始，叙事模式发生根本转变：不再是单一叙事者独白，而是两个年轻人**共同拼凑**、甚至争论萨特潘的故事。施里夫的问题迫使昆丁不得不整理自己模糊的记忆和二手信息。',
      '昆丁告诉施里夫，他和罗莎曾在那个秋夜真的去了庄园，亲眼看到了什么——但这里他没有讲完，读者要为这个谜等到最后几章。',
    ],
    guide: [
      '**施里夫的加入极大改变了叙事的可信度**。他是一个没有个人情感牵连的外省人，他的出现让叙事从"悲愤的南方记忆"变成了"两个年轻人的历史侦探游戏"——这种转变让读者开始意识到整个故事可能都是**被构建的**。',
      '注意昆丁和施里夫在讲述时**常常无缝切换为他们想象中的亨利和邦的声音**——叙事者和被叙述者之间的边界开始消融。福克纳没有用引号或提示语区分，读者需要主动辨认"谁在说话"。',
      '昆丁提到他和罗莎去了庄园，但**没有立即告诉施里夫（也没告诉读者）他看到了什么**。这是有意的叙事留白，表明昆丁**不愿意或无法直接面对他所目睹的事情**。',
      '施里夫最后问的"你为什么恨南方？"（Why do you hate it?）预示着本书真正的心理主题：**昆丁的南方认同危机**，而萨特潘的故事不过是这一危机的折射面。',
    ],
    characters: ['quentin', 'shreve', 'sutpen', 'henry', 'bon'],
    themes: ['叙事重构', '外来视角', '南方认同', '历史与想象'],
  },
  {
    num: 7,
    title: 'Sutpen\'s Origin',
    titleCn: '萨特潘的起源',
    narrator: '昆丁（转述其祖父）',
    narratorNote: '萨特潘亲口向将军·康普生讲述',
    summary: [
      '这是全书最重要的回溯章节。萨特潘在内战期间曾亲口向将军·康普生讲述过自己的出身——那个故事通过将军传给儿子，儿子传给昆丁，昆丁再转述给施里夫。',
      '萨特潘来自弗吉尼亚的穷白人家庭，少年时随父亲来到种植园打工，却被黑人管家拒之门外，不允许从正门进入种植园大宅。这次羞辱成为他一生"设计"的起点：他要建立自己的种植园，拥有同样的权势与地位。',
      '然而在此之前，萨特潘曾在海地种植园工作，在那里他娶了第一任妻子（克里奥尔混血妇女），并生下了儿子——后来他发现妻子有黑人血统，认为这一婚姻会破坏他的"设计"，遂将妻儿"补偿"后切割关系。这第一个儿子，就是查尔斯·邦。',
    ],
    guide: [
      '这章是**全书最关键的信息章**，补全了整个家族悲剧的起源。但请注意：这是萨特潘**自我讲述**的版本，经过了四次转手（萨特潘→将军·康普生→格言·康普生→昆丁→施里夫）。萨特潘是否美化了自己的动机？是否隐瞒了什么？读者无从验证。',
      '門前被拒（the door scene）是全书最经典的象征。少年萨特潘被黑人管家（而非白人主人）拒之门外，这个细节**打乱了简单的种族等级叙事**：是一个黑人代理了白人权力，羞辱了一个贫穷白人。萨特潘的种族主义由此有了更复杂的社会根源。',
      '萨特潘"补偿"并抛弃第一任妻儿的行为，他自己的解释是理性而道德中立的："我只是解除了一段契约，我给了她应得的一切。"这种冷酷的工具性语言是理解萨特潘**为何不可原谅**的关键——他不是邪恶的，他只是把人当成"设计"的零件。',
      '被抛弃的儿子查尔斯·邦追寻父亲认可的动机，在这里变得清晰：**他来杰弗逊，有可能不仅仅是爱情和友谊，而是在试探父亲是否愿意认他**。这个解读会改变你对前几章所有情节的理解。',
    ],
    characters: ['sutpen', 'bon', 'compson_father', 'quentin', 'shreve'],
    themes: ['起源', '门前被拒', '阶级羞辱', '种族与身份', '设计的代价'],
  },
  {
    num: 8,
    title: 'Henry and Bon',
    titleCn: '亨利与邦',
    narrator: '昆丁 + 施里夫（想象重构）',
    narratorNote: '两人共同想象亨利与邦的对话',
    summary: [
      '在施里夫和昆丁的共同想象中，亨利和邦之间的关系得到了最深度的重构。两人想象亨利和邦在战争期间漫长的行军中，反复讨论那门被父亲反对的婚事。',
      '这章揭示了（或者说，昆丁和施里夫"推断出"）萨特潘曾私下告知亨利：邦不仅是他的私生兄弟，而且拥有黑人血统。萨特潘的用意，是让亨利自己解决问题——因为他无法开口认邦，但也无法直接命令儿子杀人。',
      '亨利的内心独白（实为昆丁/施里夫的想象）呈现了他的悲剧：他曾经愿意原谅"同父异母的兄弟"这个事实，甚至愿意接受乱伦；但"黑人血统"是他无法逾越的界限。最终，他选择杀死邦，以南方白人的方式"解决"了这个问题。',
    ],
    guide: [
      '**这章是全书最具想象性的部分**，几乎所有对话都是昆丁和施里夫的"想象重构"，没有任何历史文献支撑。福克纳直白地写道：两人"成为"了亨利和邦——叙事者与被叙述者完全合并。读者必须接受：这里所有的"真相"都是文学建构。',
      '"黑人血统"（the black drop）才是亨利杀死邦的真实原因，而非此前格言·康普生推测的"重婚"。这是书中最重要的**叙事真相升级**——前几章给出的解释被推翻。但请注意：这个"真相"本身也是昆丁/施里夫的推断，并非事实。',
      '亨利曾愿意接受"乱伦"（兄妹成婚），但无法接受"黑人血统"——这个对比是福克纳对**南方道德体系荒诞性**的深刻批判：性禁忌竟然比种族禁忌更容易被原谅。',
      '邦在这章中似乎**明知道亨利会杀他，却仍然执意前行**。昆丁/施里夫推断，邦所追寻的不是朱迪思，而是父亲的那一句"他是我儿子"——至死都没有等到。这是全书最令人心碎的悲剧内核。',
    ],
    characters: ['henry', 'bon', 'sutpen', 'quentin', 'shreve', 'judith'],
    themes: ['乱伦', '种族禁忌', '父之认可', '想象与历史', '南方道德'],
  },
  {
    num: 9,
    title: 'The End and the Fire',
    titleCn: '结局与大火',
    narrator: '昆丁（现在时）',
    narratorNote: '带入昆丁亲眼所见',
    summary: [
      '故事回到那个秋夜，昆丁陪同罗莎驱车前往"百亩地"庄园废墟。昆丁在那里亲眼见到了一直藏在庄园里、奄奄一息的老者——那是亨利·萨特潘，他在流亡四十多年后悄悄回到了故居，等待死去。',
      '数周后，罗莎重返庄园，试图把亨利送进医院救治。然而就在这时，克莱蒂（萨特潘与黑奴所生的私生女，一直守护着庄园）放火烧掉了整栋宅子，与亨利同归于尽。家族的最后一点血脉就此熄灭。',
      '施里夫提出最后一个问题："你为什么恨南方？"昆丁激烈否认——"我不恨它。我不恨它。"但这否认听起来像是在说服自己。小说以昆丁在寒冷的哈佛宿舍里，双重的南方身份认同困境中，结束全书。',
    ],
    guide: [
      '**克莱蒂放火是主动选择，而非过激反应**。她在庄园里守护了几十年，最终以烈火终结这个家族的一切——这是一个被遗忘的私生女对整个家族故事的最终评判。她的沉默与行动构成了比任何叙述者都更有力的声音。',
      '**亨利回来等死这个事实**，是全书最阴暗的底色：他杀了邦，毁了朱迪思的生活，流亡大半生，最后回到废墟中等待终结。没有忏悔，没有救赎，只有等待。福克纳拒绝给出任何道德安慰。',
      '昆丁的结语"我不恨它（南方）"重复了两次，但读者需要对照全书：昆丁从始至终都无法逃脱对南方历史的迷恋与痛苦。**这句否认，本身就是最深刻的认同告白。**',
      '小说没有"解决"任何问题：萨特潘的"设计"失败了，但失败的原因在不同叙事者那里有不同版本；查尔斯·邦究竟是否知道自己的身世，也从未被证实；甚至于"百亩地"最终化为灰烬，也没有目击者的确认。**福克纳用模糊性作为历史书写的本质隐喻。**',
    ],
    characters: ['quentin', 'shreve', 'rosa', 'henry', 'clytie', 'bon_son'],
    themes: ['毁灭', '南方认同', '无法逃脱', '模糊的真相', '家族终结'],
  },
];

// ─── STATE ───────────────────────────────────────────────────────────
let openChapters = new Set();

// ─── THEME ───────────────────────────────────────────────────────────
function initTheme() {
  try {
    const saved = localStorage.getItem('absalom-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) { }
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  try { localStorage.setItem('absalom-theme', next); } catch (e) { }
});

// ─── PROGRESS ────────────────────────────────────────────────────────
function updateProgress() {
  const total = CHAPTERS.length;
  const opened = openChapters.size;
  document.getElementById('progress-text').textContent =
    opened === 0 ? '点击章节卡片开始探索' : `已探索 ${opened} / ${total} 章`;
  document.getElementById('progress-fill').style.width = `${(opened / total) * 100}%`;
}

// ─── RENDER ──────────────────────────────────────────────────────────
function renderChapters() {
  const container = document.getElementById('chapters-list');
  container.innerHTML = '';

  CHAPTERS.forEach(ch => {
    const card = document.createElement('article');
    card.className = 'chapter-card';
    card.id = `chapter-${ch.num}`;

    // Character bubbles HTML
    const bubblesHTML = ch.characters.map(cid => {
      const meta = CHAR_META[cid];
      if (!meta) return '';
      return `<span class="char-bubble" data-cid="${cid}" style="border-color:${meta.color}; color:${meta.color}" title="${meta.name}">${meta.initial}</span>`;
    }).join('');

    // Theme tags HTML
    const tagsHTML = ch.themes.map(t => `<span class="theme-tag">${t}</span>`).join('');

    // Summary paragraphs
    const summaryHTML = ch.summary.map(p => `<p>${p}</p>`).join('');

    // Guide items
    const guideHTML = ch.guide.map((g, i) => {
      // Convert **bold** markdown to <strong>
      const formatted = g.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      return `<div class="guide-item"><span class="guide-num">${i + 1}</span><div class="guide-text">${formatted}</div></div>`;
    }).join('');

    card.innerHTML = `
      <div class="chapter-header" role="button" tabindex="0" aria-expanded="false">
        <div class="chapter-num-wrap">
          <span class="chapter-num">Chapter ${ch.num}</span>
          <span class="chapter-arrow">▸</span>
        </div>
        <div class="chapter-meta">
          <h2 class="chapter-title-cn">${ch.titleCn}</h2>
          <span class="chapter-title-en">${ch.title}</span>
        </div>
        <div class="narrator-badge">${ch.narratorNote}</div>
      </div>
      <div class="chapter-body" aria-hidden="true">
        <div class="chapter-body-inner">
          <section class="summary-section">
            <h3 class="section-label">故事梗概</h3>
            ${summaryHTML}
          </section>
          <section class="guide-section">
            <h3 class="section-label guide-label">
              <span class="guide-icon">◈</span> 导读 · 易错与误解
            </h3>
            <div class="guide-list">${guideHTML}</div>
          </section>
          <div class="chapter-footer">
            <div class="char-bubbles-row">
              <span class="footer-label">出场人物</span>
              ${bubblesHTML}
            </div>
            <div class="theme-tags-row">
              <span class="footer-label">核心主题</span>
              ${tagsHTML}
            </div>
          </div>
        </div>
      </div>
    `;

    // Toggle open/close
    const header = card.querySelector('.chapter-header');
    const body = card.querySelector('.chapter-body');

    function toggleChapter() {
      const isOpen = card.classList.contains('open');
      if (isOpen) {
        card.classList.remove('open');
        body.style.maxHeight = '0';
        header.setAttribute('aria-expanded', 'false');
        body.setAttribute('aria-hidden', 'true');
        openChapters.delete(ch.num);
      } else {
        card.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
        body.setAttribute('aria-hidden', 'false');
        openChapters.add(ch.num);
      }
      updateProgress();
    }

    header.addEventListener('click', toggleChapter);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleChapter(); }
    });

    container.appendChild(card);
  });

  updateProgress();
}

// ─── CHARACTER BUBBLE TOOLTIP ────────────────────────────────────────
// Short descriptions for each character (used in hover tooltip)
const CHAR_DESC = {
  sutpen: '核心人物。出身贫寒的白人，在密西西比建立"百亩地"庄园，一生追求财富、地位与合法继承人，将其称为"设计"（Design）。其道德与种族问题埋下家族悲剧的种子。',
  henry: '托马斯与埃伦之子。与查尔斯·邦结成挚友，却在得知邦有黑人血统后，于战争结束时亲手杀死邦，阻止其与妹妹朱迪思成婚。此后流亡，垂死时回归故居。',
  judith: '托马斯与埃伦之女。与查尔斯·邦订婚，却在他被亨利杀死后独自生活，照料邦的混血私生子，最终因伤寒去世。以沉默的坚韧承受了家族的一切悲剧。',
  bon: '托马斯·萨特潘与其克里奥尔第一任妻子所生的私生子。才华横溢，渴望父亲认可，与亨利结为挚友，与朱迪思订婚，最终被亨利枪杀于庄园门口。',
  rosa: '埃伦的小妹，主要叙事者之一。萨特潘曾提出"先生育再成婚"的无礼求婚，她愤而拒绝，此后独自生活四十三年，对萨特潘的故事念念不忘。',
  ellen: '科德菲尔德长女，嫁给托马斯·萨特潘，是亨利和朱迪思的母亲。沉溺于虚荣的社交生活，在家族悲剧前夕去世，未能见证结局。',
  quentin: '主要叙事者，年轻的南方白人，即将入读哈佛。他与父亲、室友施里夫共同拼凑萨特潘的故事，对南方历史与命运有复杂的认同与逃避感。',
  shreve: '昆丁在哈佛的加拿大室友，以局外人视角参与重构萨特潘的故事。他的客观与昆丁的情感纠葛形成对照，最终问出全书最著名的一句："你为什么恨南方？"',
  compson_father: '昆丁的父亲，向昆丁传递了许多关于萨特潘的记忆。叙述带有宿命论色彩，认为南方的没落是不可避免的，是连接老一辈记忆与新一代叙述者的桥梁。',
  clytie: '萨特潘与黑人女奴所生的私生女，在庄园中担任管家，忠诚而神秘。她照料流亡归来的亨利，最终在联邦官员到来时放火烧毁庄园，与亨利同归于尽。',
  bon_son: '查尔斯·邦与其章鱼情妇所生之子，被朱迪思收养。混血身份使他在黑白两个世界都难以立足，最终娶了一位黑人妇女，在苦难中死去。',
};

const charTooltip = document.getElementById('char-tooltip');
let tooltipTimer = null;

document.addEventListener('mouseover', e => {
  const bubble = e.target.closest('.char-bubble[data-cid]');
  if (!bubble) return;
  const cid = bubble.dataset.cid;
  const meta = CHAR_META[cid];
  if (!meta) return;
  clearTimeout(tooltipTimer);
  charTooltip.innerHTML =
    `<div class="ct-name" style="color:${meta.color}">${meta.name}</div>` +
    `<div class="ct-desc">${CHAR_DESC[cid] || ''}</div>`;
  charTooltip.classList.add('visible');
  positionTooltip(bubble);
});

document.addEventListener('mousemove', e => {
  if (e.target.closest('.char-bubble[data-cid]')) positionTooltip(e.target.closest('.char-bubble[data-cid]'));
});

document.addEventListener('mouseout', e => {
  if (e.target.closest('.char-bubble[data-cid]')) {
    tooltipTimer = setTimeout(() => charTooltip.classList.remove('visible'), 120);
  }
});

// Position tooltip above bubble, clamped to viewport
function positionTooltip(el) {
  const r = el.getBoundingClientRect();
  charTooltip.style.visibility = 'hidden';
  charTooltip.style.display = 'block';
  const tw = charTooltip.offsetWidth;
  const th = charTooltip.offsetHeight;
  charTooltip.style.visibility = '';
  charTooltip.style.display = '';
  let left = r.left + r.width / 2 - tw / 2;
  let top = r.top - th - 10 + window.scrollY;
  left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));
  if (r.top - th - 10 < 0) top = r.bottom + 10 + window.scrollY;
  charTooltip.style.left = left + 'px';
  charTooltip.style.top = top + 'px';
}

// ─── INIT ────────────────────────────────────────────────────────────
initTheme();
renderChapters();
