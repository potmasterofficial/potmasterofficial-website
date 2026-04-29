/* =============================================
   PotMaster 煲仔宗师 — JavaScript
   ============================================= */

const i18n = {
  zh: {
    // ── Nav ──
    nav_home:    '首页',
    nav_menu:     '菜单',
    nav_about:    '品牌故事',
    nav_stores:   '门店信息',
    nav_contact:  '联系我们',
    // ── Hero ──
    hero_tag:     '见自己 · 见天地 · 见众生',
    hero_title:   '<span>煲仔宗师</span><br><span class="hero-title-sub">PotMaster</span>',
    hero_subtitle:'高品质年轻化的连锁煲仔饭品牌',
    hero_subtitle_en:'',
    hero_cta1:    '探索菜单',
    hero_cta2:    '品牌故事',
    footer_tagline:'高品质年轻化的连锁煲仔饭品牌',
    footer_copy:'© 2026 PotMaster 煲仔宗师. 保留所有权利.',
    // ── CTA ──
    cta_title: '品味匠心本源',
    cta_sub: '不只是味蕾的享受，更是百炼成钢的烹饪哲学。深入了解"宗师"背后的故事，读懂这一口焦香的温度。',
    cta_btn: '联系我们',
    cta_stores_btn: '门店信息',
    // ── Three Realms ──
    phil_badge: '品牌哲学',
    phil_title: '以"功夫三境"<br>构建品牌内核',
    phil_title_en: 'Establishing the brand core value<br>with the "Kung Fu Three Realms"',
    realms_badge: '品牌哲学',
    realms_title: '功夫三境',
    realms_sub:   'The Kung Fu Three Realms',
    realm1_tag:   '见自己', realm1_title:'见自己',
    realm1_desc:  '了解自己的口味偏好，找到属于自己的那一煲。每一碗煲仔饭，都是与自我的对话。',
    realm2_tag:   '见天地', realm2_title:'见天地',
    realm2_desc:  '从中国出发，走向世界。让每一碗煲仔饭，成为连接不同文化的桥梁。',
    realm3_tag:   '见众生', realm3_title:'见众生',
    realm3_desc:  '以匠人之心，让每一位食客感受到用心烹制的温暖。',
    // ── Realms Detail (rd1/rd2/rd3) ──
    rd1_title: '见自己',
    rd1_en: 'See Oneself — The First Realm',
    rd1_sub: '品牌的内功修炼 · Cultivation of a brand\'s internal strength',
    rd1_desc: '见自己是起点，是内观。是品牌对自身手艺的极致苛求与深刻理解，是品牌产品力的根源。功夫其实就是时间，对于煲仔宗师而言，自己就是那一碗煲仔饭的本身。专注当下，修炼自己。',
    rd1_tag1: '顶级茉莉香米', rd1_tag2: '专利AI煲仔炉', rd1_tag3: '宗师秘制三酱', rd1_tag4: '高密度陶土砂锅',
    rd2_title: '见天地',
    rd2_en: 'See the World — The Second Realm',
    rd2_sub: '品牌的格局与融合 · The World & The Fusion',
    rd2_desc: '见天地是突破，是外览。是品牌在确立自我后，对外部世界的认知、接纳与融合。煲仔宗师不拘泥于传统广式煲仔饭，而是海纳百川，用煲仔的形式演绎天下风味。过了山，眼界就开阔了。',
    rd2_tag1: '澳门风味', rd2_tag2: '阳江风味', rd2_tag3: '海南风味', rd2_tag4: '日式创新', rd2_tag5: '欧式创新',
    rd3_title: '见众生',
    rd3_en: 'See All Beings — The Third Realm',
    rd3_sub: '品牌的使命与连接 · Brand Mission & Human Connection',
    rd3_desc: '见众生是升华，是普惠。是品牌超越自我之后，与世界的连接与共鸣。一碗煲仔饭，不仅是食物，更是连接人与人的桥梁——将中国饮食文化的温度，传递给全球每一位食客。',
    rd3_tag1: '全球300+门店目标', rd3_tag2: '亚太战略', rd3_tag3: '欧美布局',
    // ── Strengths ──
    str1_title:   '现代美学空间',
    str1_en:      'MODERN AESTHETIC SPACE',
    str1_desc:    '采用通透的空间布局，将传统艺术与时尚潮流结合，打造舒适优雅的用餐氛围，重塑粤式煲仔饭的视觉审美。',
    str2_title:   '创新板前现煲体验',
    str2_en:      'Innovative Counter-side Cooking Experience',
    str2_desc:    '开启"板前"式烹饪艺术，主理人在您面前现场煲制，近距离感受烟火气与现点现做的感官盛宴。',
    str3_title:   '匠心秘制出品',
    str3_en:      'Craftsmanship & Signature Flavors',
    str3_desc:    '精选优质食材，注入秘制灵魂配方，以宗师标准严苛对待每一道工序，确保每一锅煲仔饭都能品味到传承与创新的深度。',
    str4_title:   '专利AI智能煲仔炉',
    str4_en:      'Patented AI Smart Stove',
    str4_desc:    '微晶板AI环绕控温，锅巴成型率达98%以上，烹饪时间从12分钟缩短至8分钟。',
    // ── Vision ──
    vis_badge: '品牌愿景',
    vis_title: '成为全球连锁煲仔饭品类头部品牌',
    vis_sub: 'To become the world\'s leading global chain for authentic clay pot rice',
    vis_map_label: '300+ 全球门店目标',
    // ── Core Strengths ──
    str_badge: '品牌竞争力',
    str_title: '四大核心竞争力',
    str_sub: 'Four Core Competitive Advantages',
    sig_badge: '招牌出品',
    sig_title: '人气招牌煲仔饭',
    sig_sub: 'Signature Clay Pot Rice Selections',
    dish_popular: '人气',
    dish1_name: '腊味四喜煲仔饭',
    dish1_name_en: 'Four Happiness Preserved Meat Clay Pot Rice',
    dish1_desc: '四喜腊味：腊肉、腊肠、腊鸭蛋、腊排骨，经典广式风味，口口浓郁。',
    dish2_name: '腊肠滑鸡煲仔饭',
    dish2_name_en: 'Sausage & Tender Chicken Clay Pot Rice',
    dish2_desc: '自制广式腊肠与滑嫩走地鸡，腊味甘香、鸡肉鲜甜，酱汁拌饭回味悠长。',
    dish3_name: '窝蛋牛肉煲仔饭',
    dish3_name_en: 'Egg & Beef Clay Pot Rice',
    dish3_desc: '嫩滑牛肉片铺在米饭上，现打窝蛋在饭面，划开蛋液裹住米饭与肉片，滑嫩升级。',
    dish4_name: '芝士安格斯牛肉煲仔饭',
    dish4_name_en: 'Angus Beef & Mozzarella Clay Pot Rice',
    dish4_desc: '安格斯牛肉鲜嫩爆汁，盖上满满一层拉丝的马苏里拉芝士，锅巴吸饱肉汁与奶香。',
    sig_more: '查看完整菜单',
    // ── Menu ──
    menu_badge:   'Menu · 菜单',
    menu_hero_sub: '海纳百川，以煲仔演绎天下风味',
    menu_title:   '精选菜品',
    menu_sub:     'Our Signature Selections',
    tab_popular:  '人气系列',
    tab_popular_title: '人气产品系列',
    tab_classic:  '经典系列',
    tab_classic_title: '经典产品系列',
    badge_classic: '经典',
    badge_hot: '热销',
    badge_flavor: '风味',
    tab_flavor:   '风味系列',
    tab_flavor_title: '风味产品系列',
    tab_innovate: '创新系列',
    tab_innovate_title: '创新产品系列',
    badge_innovate: '创新',
    tab_dimsum: '点心系列',
    tab_dimsum_title: '点心产品系列',
    tab_dimsum_sub: 'Dim Sum Series',
    tab_soup: '靓汤系列',
    tab_soup_title: '靓汤产品系列',
    tab_soup_sub: 'Soup Series',
    tab_drink: '饮品系列',
    tab_drink_title: '饮品产品系列',
    tab_drink_sub: 'Beverage Series',
    // ── 人气系列 ──
    m_p1_name: '腊味四喜煲仔饭',
    m_p1_desc: '广式古法纯手工腊味：腊肉、腊肠；上等排骨、鸡肉，自然风干，香味浓郁，醇厚独特。',
    m_p2_name: '腊肠滑鸡煲仔饭',
    m_p2_desc: '优选37比例古法手工腊肠，外皮脆嫩，肉质紧实；专供基地180天清远走地鸡，入口弹嫩，鸡味十足。',
    // ── 经典系列 ──
    m_c1_name: '经典腊味煲仔饭',
    m_c1_desc: '腊味滋滋渗米香，煲出焦香锅巴，一口暖到心尖。',
    m_c2_name: '香菇滑鸡煲仔饭',
    m_c2_desc: '干香菇吸满鲜鸡汤，鸡腿肉滑嫩，米饭裹香锅巴脆。',
    m_c3_name: '蒜香排骨煲仔饭',
    m_c3_desc: '排骨裹满蒜香焖至鲜嫩多汁，米香锅巴脆，每口都够鲜够味。',
    m_c4_name: '窝蛋牛肉煲仔饭',
    m_c4_desc: '生态鸡蛋窝进热煲里，牛肉嫩、蛋流心，拌饭香到停不下。',
    m_c5_name: '蒜香茄子煲仔饭',
    m_c5_desc: '素食者福音！蒜末和茄子被热油激出冲天香气，锅巴滋滋作响，每一口都超满足。',
    m_c6_name: '马蹄鱿鱼肉饼煲仔饭',
    m_c6_desc: '爽脆马蹄遇上鲜Q鱿鱼，肉饼厚实多汁，焦香锅巴尽显地道粤味。',
    m_c7_name: '经典三拼煲仔饭',
    m_c7_desc: '广式三宝齐聚，腊味醇厚、排骨鲜嫩、滑鸡多汁，口口皆是经典。',
    m_c8_name: '凤爪排骨煲仔饭',
    m_c8_desc: '软糯凤爪搭配鲜嫩排骨，浓郁酱汁渗入焦脆米饭，双重滋味倍过瘾。',
    // ── 风味系列 ──
    m_f1_name: '澳门虾酱花肉煲仔饭',
    m_f1_desc: '澳门虾酱拌三层花肉，肉香渗饭超咸鲜，锅巴脆不腻。',
    m_f2_name: '阳江豆豉排骨煲仔饭',
    m_f2_desc: '阳江豆豉入煲，排骨软嫩脱骨，米饭吸香超回甘。',
    m_f3_name: '海南黑胡椒牛肉煲仔饭',
    m_f3_desc: '海南黑胡椒爆香，鲜切牛肉嫩弹，煲饭辛香超够劲。',
    m_f4_name: '三门坡沙姜嫩鸡煲仔饭',
    m_f4_desc: '选用三门坡沙姜，辛香四溢，鸡肉嫩滑多汁，锅气十足。',
    // ── 创新系列 ──
    m_i2_name: '日式轻奢鳗鱼煲仔饭',
    m_i2_desc: '精选厚切鳗鱼，肉质肥美，搭配秘制蒲烧酱与焦香锅巴，口感饱满。',
    m_i3_name: '芝士安格斯牛肉煲仔饭',
    m_i3_desc: '安格斯牛肉鲜嫩爆汁，盖上满满一层拉丝的马苏里拉芝士，锅巴吸饱肉汁与奶香。',
    // ── 点心系列 ──
    m_d1_name: '招牌虾饺皇',
    m_d1_desc: '透明皮里裹着呼之欲出的整颗虾仁，爽滑鲜甜。',
    m_d2_name: '百合酱蒸凤爪',
    m_d2_desc: '经典的广式早茶味，凤爪酥软红亮，酱汁浓稠，老少皆宜。',
    m_d3_name: '豉汁蒸排骨',
    m_d3_desc: '豆豉醇香入髓，排骨嫩而不韧，色泽洁白，尽显纯正粤味。',
    m_d4_name: '鲜虾蟹籽烧卖',
    m_d4_desc: '黄薄皮包裹丰盈肉馅，顶缀饱满蟹籽，鲜爽弹牙，层次丰富。',
    m_d5_name: '瑞士汁鸡翼',
    m_d5_desc: '浓稠豉油调配出经典瑞士汁，鸡翅色泽鲜亮，软糯香甜，小朋友的最爱。',
    m_s1_name: '西洋菜南北杏陈肾汤',
    m_s1_desc: '西洋菜清香，陈肾咸鲜适口，加入南北杏，温润止咳且回甘。',
    m_s2_name: '鲜人参煲老鸡汤',
    m_s2_desc: '鲜参之甘，叠加老鸡之鲜，温润不燥，尽享自然本味。',
    m_dr1_name: '鸭屎香柠檬茶',
    m_dr1_desc: '潮汕名丛碰撞香水柠檬，兰香悠长，茶韵与酸爽神级融合。',
    m_dr2_name: '茉莉香柠柠檬茶',
    m_dr2_desc: '茉莉花香轻盈入喉，与青柠酸爽浪漫邂逅，清雅解暑不甜腻。',
    m_dr3_name: '爆柠葡萄柠檬茶',
    m_dr3_desc: '饱满多肉葡萄果肉，撞上暴力手打柠檬，紫色冰爽，满口鲜甜。',
    m_dr4_name: '芭乐柠檬茶',
    m_dr4_desc: '粉嫩芭乐自带奶油香气，融合鲜柠爽感，酸甜柔和，细腻清爽。',
    m_dr5_name: '鲜萃Lemonade',
    m_dr5_desc: '纯粹柠檬原汁鲜萃，冰爽比例恰到好处，最简单的极致解渴。',
    m_f5_name: '四川烧椒牛肉煲仔饭',
    m_f5_desc: '选用特制烧椒鲜辣劲爽，牛肉片片滑嫩，川粤风味在锅巴间完美融合。',
    m_f6_name: '潮汕豆酱银鳕鱼煲仔饭',
    m_f6_desc: '普宁豆酱激发出银鳕鱼的丰腴，肉质如奶油般丝滑，鲜咸地道。',
    m_i1_name: '芝士黑松露煲仔饭',
    m_i1_desc: '浓醇芝士裹挟顶级黑松露香气，融入米饭化作咸鲜奶香，与菌菇奢华交织回味。',
    m_i4_name: '手打安格斯牛肉饼煲仔饭',
    m_i4_desc: '精选安格斯牛肉，手打Q弹劲道，肉饼鲜美爆汁，米香肉香交织入魂。',
    m_i5_name: '吊龙牛肉鲜鱿煲仔饭',
    m_i5_desc: '鲜甜吊龙肉质软糯，搭配爽弹鲜鱿，油润鲜香渗入焦脆锅巴，满口生鲜。',
    m_i6_name: '五福临门鲍鱼煲仔饭',
    m_i6_desc: '鲍鱼Q弹、腊味醇厚、鸡肉排骨滑嫩，五味合一，口口皆是富贵满足。',
    menu_note:    '* 图片仅供参考，请以实物为准',
    // ── About ──
    about_tag:    'See Yourself · 见自己',
    about_hero_title: '品牌故事',
    about_hero_sub: '以一代宗师的核心理念，构建煲仔宗师的品牌哲学',
    about_title:  '品牌故事',
    about_sub:    'Our Story',
    about_intro:  '煲仔宗师，源自对煲仔饭的深厚热爱与传承。我们相信，一碗好的煲仔饭，不仅是食物，更是一种生活态度。',
    about_hero_tag: '功夫即哲学 · Kung Fu as Philosophy',
    about_ph_title: '功夫即哲学',
    about_badge1: '品牌哲学',
    about_ph_p1: '以《一代宗师》的核心理念，构建煲仔宗师的品牌哲学融合体系。以武学智慧塑造品牌灵魂，实现品牌文化深度与消费体验的共生。',
    about_quote: '功夫其实就是时间——念念不忘，必有回响。唯有先成就一碗完美的饭，才有资格谈论哲学。',
    // ── About Us ──
    about_us_badge: '关于我们',
    about_us_title: '煲仔宗师 PotMaster',
    about_us_intro: '煲仔宗师 (PotMaster) 是由广东同熙餐饮品牌管理有限公司倾力打造的高品质年轻化连锁煲仔饭品牌。',
    about_us_philosophy: '秉持"只要够用心，人人皆宗师"的品牌理念，在传承古法与现代创新之间寻得完美平衡。依托现代美学空间、创新板前现煲体验、匠心秘制出品以及专利AI智能煲仔炉的四大核心竞争力，我们正以前瞻性的视野重新定义中式快餐的品质高度。',
    about_vision_text: '未来品牌将扎根中国，走向世界，致力于成为全球连锁煲仔饭品类的头部品牌。',
    // ── About PSD ──
    psd_badge: '品牌产品力',
    psd_title: '工欲善其事，必先利其器',
    psd_sub: 'To do the work well, one must first sharpen the tools',
    psd_patent: '专利设备',
    psd_patent2: 'PATENT PENDING',
    psd1_title: '北纬11–13°茉莉香米2号',
    psd1_en: 'Jasmine Rice No.2 from 11°–13°N Latitude',
    psd1_desc: '产自柬埔寨洞里萨湖周边，2012–2024年间六次荣获"世界最好大米"称号。采用无农药、无化肥、无转基因的纯天然种植方式，颗粒长度7.2mm，煮熟后散发独特茉莉花香。',
    psd2_title: '微晶板AI智能环绕控温煲仔炉',
    psd2_en: 'Microcrystalline AI Smart Temperature Control Stove',
    psd2_desc: '独家研发专利设备，实现一键控温，锅巴成型率达98%以上，解决锅巴技术壁垒。烹饪时间从12分钟缩短至8分钟。猛火攻、文火焖、烈火收——将宗师烹饪智慧数字化。',
    psd3_title: '宗师秘制三酱',
    psd3_en: "Master's Secret Triple Sauce",
    psd3_desc: '使用李锦记特供煲仔饭酱油，十八味天然原料，九道核心工艺。专属基汁以古法酿造酱油为底，72小时文火慢熬；头道超酿酱油发酵酱香浓郁；辣酱精选三种辣度辣椒手工剁制，辣而不燥，香而不腻。',
    psd4_title: '宗师定制高密度陶土砂锅',
    psd4_en: 'Custom High-Density Clay Pot',
    psd4_desc: '砂煲内部布满微细气孔，高温自然排出水汽，受热均匀，热力绵长。能让大米和食材充分融合，米饭干爽粒粒分明，锅巴金黄酥脆，口感层次分明。',
    // ── Contact ──
    contact_hero_tag: 'See the World · 见天地',
    contact_hero_title: '联系我们',
    contact_hero_sub: 'Contact Us · 更多资讯请联系我们',
    // Store
    stores_badge: '门店信息',
    stores_hero_title: '门店信息',
    stores_hero_sub: '探索我们的门店 — Discover Our Locations',
    stores_title: '我们的门店',
    stores_sub:   '',
    stores_cta_badge: '更多咨询',
    stores_cta_title: '了解更多',
    stores_cta_desc: '如需了解更多门店信息或有任何疑问，欢迎联系我们。',
    stores_cta_btn: '联系我们',
    store1_badge: '中国·广州', store1_name: '宗师前传南站喜街店', store1_address: '门店地址：中国广州市番禺区南站喜街A6栋二楼', store1_date: '营业时间：10:00-22:00',
    store2_badge: '中国·广州', store2_name: '煲仔宗师番禺天河城店', store2_address: '门店地址：中国广州市番禺天河城B区三层333-334铺', store2_date: '营业时间：10:00-22:00',
    store3_badge: '中国·广州', store3_name: '煲仔宗师番禺K11店', store3_address: '门店地址：中国广州市番禺K11负一层B138号铺', store3_date: '营业时间：10:00-22:00',
    // Contact Info
    ci_badge: '联系我们', ci_title: '联系我们', ci_sub: '',
    ci_phone_title: '服务热线', ci_email_title: '电子邮箱', ci_wechat_title: '微信公众号', ci_wechat_desc: '搜索关注',
    ci_weibo_title: '官方小红书', ci_weibo_desc: '煲仔宗师官方账号',
    // ── Footer ──
    footer_rights: '© 2026 煲仔宗师 PotMaster. 保留所有权利.',
    footer_copy: '© 2026 PotMaster 煲仔宗师. 保留所有权利.',
    nav_privacy: '隐私政策',
    // ── Privacy Policy ──
    priv_hero_tag: '见众生 · Serve All',
    priv_hero_title: '隐私政策',
    priv_hero_sub: '您的隐私权益，我们的庄严承诺',
    priv_nav1: '信息收集',
    priv_nav1_desc: '我们收集的信息类型',
    priv_nav2: 'Cookie政策',
    priv_nav2_desc: 'Cookie使用与选择',
    priv_nav3: '联系我们',
    priv_nav3_desc: '隐私问题咨询通道',
    // Section 1
    priv_s1_title: '信息收集',
    priv_s1_h1: '我们收集哪些信息？',
    priv_s1_p1: '当您访问煲仔宗师网站或使用我们的服务时，我们可能会收集以下类型的信息：',
    priv_s1_li1: '个人基本信息：包括姓名、电话号码、电子邮箱地址等，当您通过表单提交咨询或加盟申请时。',
    priv_s1_li1_strong: '个人基本信息',
    priv_s1_li2: '位置信息：您访问网站时的大致地理位置，用于优化服务体验。',
    priv_s1_li2_strong: '位置信息',
    priv_s1_li3: '设备信息：浏览器类型、操作系统、访问时间等，用于分析网站使用情况。',
    priv_s1_li3_strong: '设备信息',
    priv_s1_li4: 'Cookies数据：用于记住您的偏好设置和提供个性化体验。',
    priv_s1_li4_strong: 'Cookies数据',
    priv_s1_h2: '信息收集方式',
    priv_s1_p2: '我们通过以下方式收集信息：',
    priv_s1_li5: '您主动提供的信息（如填写表单、订阅Newsletter）',
    priv_s1_li6: '自动化技术收集的信息（如Cookies、服务器日志）',
    priv_s1_li7: '第三方服务提供商共享的信息（如地图服务）',
    // Section 2
    priv_s2_title: '信息使用',
    priv_s2_h1: '我们如何使用您的信息',
    priv_s2_p1: '我们收集的信息将用于以下目的：',
    priv_s2_li1: '提供服务：处理您的咨询请求、加盟申请等业务需求',
    priv_s2_li2: '服务改进：分析网站使用数据，优化用户体验和服务质量',
    priv_s2_li3: '营销沟通：在您同意的情况下，发送品牌动态、优惠活动等信息',
    priv_s2_li4: '安全保障：保护网站安全，防范欺诈和恶意行为',
    priv_s2_li5: '法律合规：遵守相关法律法规的要求',
    priv_s2_h2: '信息使用原则',
    priv_s2_p2: '我们承诺：',
    priv_s2_li6: '仅在必要范围内收集个人信息',
    priv_s2_li7: '仅将信息用于明确告知的目的',
    priv_s2_li8: '采取合理措施保护信息安全',
    // Section 3
    priv_s3_title: 'Cookie政策',
    priv_s3_h1: '什么是Cookie？',
    priv_s3_p1: 'Cookie是您访问网站时，网站存储在您设备上的小型文本文件。它们帮助网站记住您的偏好设置、提供个性化体验，并帮助我们了解网站的使用情况。',
    priv_s3_h2: '我们使用的Cookie类型',
    priv_s3_li1: '必要Cookie：网站运行所必需的Cookie，如语言偏好设置',
    priv_s3_li1_strong: '必要Cookie',
    priv_s3_li2: '分析Cookie：帮助我们了解访客如何与网站互动的Cookie',
    priv_s3_li2_strong: '分析Cookie',
    priv_s3_li3: '功能Cookie：记住您的偏好设置，提供个性化体验',
    priv_s3_li3_strong: '功能Cookie',
    priv_s3_h3: '管理您的Cookie选择',
    priv_s3_p3: '您可以通过浏览器设置管理Cookie偏好。但请注意，禁用某些Cookie可能会影响网站的某些功能。',
    // Section 4
    priv_s4_title: '信息共享',
    priv_s4_h1: '我们如何共享信息',
    priv_s4_p1: '我们不会出售您的个人信息。我们仅在以下情况下共享您的信息：',
    priv_s4_li1: '服务提供商：与我们合作的第三方服务商，如云存储、支付处理等，仅用于提供服务的目的',
    priv_s4_li2: '法律要求：当法律或政府要求披露信息时',
    priv_s4_li3: '保护权利：为保护我们的合法权益或公共安全',
    priv_s4_li4: '业务转让：在公司合并、收购或资产转让情况下',
    priv_s4_h2: '第三方链接',
    priv_s4_p2: '我们的网站可能包含指向第三方网站的链接。我们不对第三方网站的隐私实践负责，建议您查看其隐私政策。',
    // Section 5
    priv_s5_title: '用户权利',
    priv_s5_h1: '您的隐私权利',
    priv_s5_p1: '根据适用法律，您享有以下权利：',
    priv_s5_li1: '知情权：了解我们如何收集和使用您的个人信息',
    priv_s5_li2: '访问权：请求获取我们持有的关于您的个人信息',
    priv_s5_li3: '更正权：请求更正不准确或不完整的个人信息',
    priv_s5_li4: '删除权：在特定情况下请求删除您的个人信息',
    priv_s5_li5: '限制处理权：请求限制我们对您信息的处理',
    priv_s5_li6: '数据可携权：请求以结构化、常用格式获取您的信息',
    priv_s5_li7: '拒绝权：拒绝我们处理您的信息',
    priv_s5_h2: '如何行使权利',
    priv_s5_p2: '如需行使上述任何权利，请通过页面底部的联系方式与我们联系。我们将在法律规定的时限内响应您的请求。',
    // Section 6
    priv_s6_title: '数据安全',
    priv_s6_h1: '我们如何保护您的信息',
    priv_s6_p1: '我们采取多种安全措施保护您的个人信息：',
    priv_s6_li1: '加密传输：使用HTTPS加密技术保护数据传输安全',
    priv_s6_li2: '访问控制：严格限制员工访问个人信息的权限',
    priv_s6_li3: '定期审计：定期评估和更新安全措施',
    priv_s6_li4: '安全协议：制定并执行数据安全管理制度',
    priv_s6_h2: '数据泄露应对',
    priv_s6_p2: '如发生数据泄露，我们将按照法律法规要求，及时通知受影响用户并采取补救措施。',
    // Section 7
    priv_s7_title: '联系我们',
    priv_s7_h1: '隐私问题咨询通道',
    priv_s7_p1: '如您对本隐私政策有任何疑问，或希望行使您的隐私权利，请通过以下方式联系我们：',
    priv_s7_phone: '服务热线',
    priv_s7_email: '电子邮箱',
    priv_s7_hours: '服务时间',
    priv_s7_hours_detail: '周一至周五 09:00-18:00（节假日除外）',
    priv_s7_h2: '响应时限',
    priv_s7_p2: '我们将在收到您的请求后尽快处理，一般情况下会在15个工作日内回复。如需延长时间，我们将提前通知您。',
    // Section 8
    priv_s8_title: '政策更新',
    priv_s8_h1: '政策更新说明',
    priv_s8_p1: '我们可能会不时更新本隐私政策，以反映法律法规的变化或服务功能的调整。任何重大变更，我们都将通过网站公告或电子邮件通知您。',
    priv_s8_h2: '更新历史',
    priv_s8_li1: '2026年4月29日：首次发布隐私政策',
    priv_s8_h3: '建议',
    priv_s8_p3: '建议您定期查看本页面，以了解最新的隐私政策内容。',
    // Legal
    priv_legal_text: '本隐私政策遵循《通用数据保护条例》(GDPR) 及《中华人民共和国个人信息保护法》(PIPL) 的相关规定。我们致力于保护您的个人信息隐私权益。',
    priv_last_updated: '最后更新日期：2026年4月29日',
    // CTA
    priv_cta_title: '还有其他问题？',
    priv_cta_sub: '我们的团队随时为您解答关于隐私保护的任何疑问。',
    priv_cta_btn: '联系我们',
  },
  en: {
    nav_home:    'Home',
    nav_menu:     'Menu',
    nav_about:    'Our Story',
    nav_stores:   'Locations',
    nav_contact:  'Contact',
    hero_tag:     'Know Yourself · See the World · Serve All',
    hero_title:   '<span>PotMaster</span>',
    hero_subtitle:'Premium Young Chain Clay Pot Rice Brand',
    hero_subtitle_en:'',
    hero_cta1:    'Explore Menu',
    hero_cta2:    'Our Story',
    footer_tagline:'Premium Young Chain Clay Pot Rice Brand',
    // ── CTA ──
    cta_title: 'Taste the Origin of Craftsmanship',
    cta_sub: 'Beyond the palate — it\'s a philosophy forged through countless hours. Discover the story behind "The Master" and understand the warmth in every crispy bite.',
    cta_btn: 'Contact Us',
    cta_stores_btn: 'Store Locations',
    phil_badge: 'Brand Philosophy',
    phil_title: 'Building the Brand Core<br>with the "Kung Fu Three Realms"',
    phil_title_en: 'Establishing the brand core value<br>with the "Kung Fu Three Realms"',
    realms_title: 'Three Realms of Kung Fu',
    realms_sub:   '',
    realm1_tag:   'Know Yourself', realm1_title:'Know Yourself',
    realm1_desc:  'Understand your own palate, find your perfect bowl. Every clay pot rice is a conversation with yourself.',
    realm2_tag:   'See the World', realm2_title:'See the World',
    realm2_desc:  'From China to the world. Let every bowl of clay pot rice become a bridge connecting different cultures.',
    realm3_tag:   'Serve All', realm3_title:'Serve All',
    realm3_desc:  'With a craftsman\'s heart, let every guest feel the warmth of heartfelt cooking.',
    // ── Realms Detail (rd1/rd2/rd3) ──
    rd1_title: 'See Oneself',
    rd1_en: 'See Oneself — The First Realm',
    rd1_sub: 'Cultivation of a brand\'s internal strength',
    rd1_desc: 'To See Oneself is the starting point — to look inward. It represents the brand\'s relentless pursuit of craftsmanship and deep self-understanding, the foundation of product strength. Kung Fu is time. For PotMaster, the self is the clay pot rice itself. Focus on the present. Cultivate oneself.',
    rd1_tag1: 'Premium Jasmine Rice', rd1_tag2: 'Patented AI Clay Pot Stove', rd1_tag3: 'Master\'s Secret Triple Sauce', rd1_tag4: 'High-Density Clay Pot',
    rd2_title: 'See the World',
    rd2_en: 'See the World — The Second Realm',
    rd2_sub: 'The World & The Fusion',
    rd2_desc: 'To See the World is a breakthrough — to look outward. After establishing its identity, the brand embraces and fuses with the external world. PotMaster transcends traditional Cantonese clay pot rice to encompass global flavors in the clay pot form. Once you cross the mountain, your vision expands.',
    rd2_tag1: 'Macau Style', rd2_tag2: 'Yangjiang Style', rd2_tag3: 'Hainan Style', rd2_tag4: 'Japanese Innovation', rd2_tag5: 'European Innovation',
    rd3_title: 'See All Beings',
    rd3_en: 'See All Beings — The Third Realm',
    rd3_sub: 'Brand Mission & Human Connection',
    rd3_desc: 'To See All Beings is transcendence — to universalize. After surpassing the self, the brand connects and resonates with the world. A bowl of clay pot rice is not just food — it is a bridge between people, carrying the warmth of Chinese food culture to every diner around the globe.',
    rd3_tag1: '300+ Global Stores Target', rd3_tag2: 'Asia-Pacific Strategy', rd3_tag3: 'Europe & Americas Expansion',
    // ── Strengths ──
    str1_title:   'Modern Aesthetic Space',
    str1_en:      'MODERN AESTHETIC SPACE',
    str1_desc:    'Transparent spatial layout blending traditional art with contemporary trends, creating a comfortable and elegant dining atmosphere.',
    str2_title:   'Innovative Counter-side Cooking Experience',
    str2_en:      'Innovative Counter-side Cooking Experience',
    str2_desc:    'Experience the art of "Counter-side" cooking as our head chef prepares your meal before your eyes, immersing you in the sensory feast of fresh cooking.',
    str3_title:   'Craftsmanship & Signature Flavors',
    str3_en:      'Craftsmanship & Signature Flavors',
    str3_desc:    'Premium ingredients with secret recipes, crafted with master standards to ensure every clay pot rice delivers the depth of tradition and innovation.',
    str4_title:   'Patented AI Smart Stove',
    str4_en:      'Patented AI Smart Stove',
    str4_desc:    'Microcrystal AI temperature control, 98%+ crust formation rate, cooking time reduced from 12 to 8 minutes.',
    // ── Vision ──
    vis_badge: 'Our Vision',
    vis_title: 'To become the world\'s leading brand in authentic clay pot rice',
    vis_sub: 'To become the world\'s leading global chain for authentic clay pot rice',
    vis_map_label: '300+ Global Store Target',
    // ── Core Strengths ──
    str_badge: 'Core Competitiveness',
    str_title: 'Four Core Competitive Advantages',
    str_sub: 'Four Core Competitive Advantages',
    sig_badge: 'Signature',
    sig_title: 'Signature Clay Pot Rice',
    sig_sub: '',
    dish_popular: 'Popular',
    dish1_name: 'Four Treasures Preserved Meat Clay Pot Rice',
    dish1_name_en: 'Four Happiness Preserved Meat Clay Pot Rice',
    dish1_desc: 'Cantonese four treasures — preserved pork, sausage, preserved duck egg, spare ribs, pure classic Cantonese flavor in every bite.',
    dish2_name: 'Sausage & Tender Chicken Clay Pot Rice',
    dish2_name_en: 'Sausage & Tender Chicken Clay Pot Rice',
    dish2_desc: 'House-made Cantonese sausage with tender free-range chicken — savory preserved meat, sweet tender chicken, lingering aftertaste.',
    dish3_name: 'Egg & Beef Clay Pot Rice',
    dish3_name_en: 'Egg & Beef Clay Pot Rice',
    dish3_desc: 'Tender beef over rice, topped with a fresh cracked egg — egg yolk envelops the rice and beef for ultimate silky richness.',
    dish4_name: 'Cheese Angus Beef Clay Pot Rice',
    dish4_name_en: 'Angus Beef & Mozzarella Clay Pot Rice',
    dish4_desc: 'Juicy Angus beef blanketed in stretchy mozzarella — the crispy rice absorbs every drop of meat juice and milky richness.',
    sig_more: 'View Full Menu',
    // ── Menu ──   'Menu',
    menu_hero_sub: 'Embracing the World, One Clay Pot at a Time',
    menu_title:   'Signature Selections',
    menu_sub:     '',
    tab_popular:  'Popular',
    tab_popular_title: 'Popular Picks',
    tab_classic:  'Classic',
    tab_classic_title: 'Classic Series',
    badge_classic: 'Classic',
    badge_hot: 'Popular',
    badge_flavor: 'Flavor',
    tab_flavor:   'Flavor',
    tab_flavor_title: 'Flavor Series',
    tab_innovate: 'Innovation',
    tab_innovate_title: 'Innovation Series',
    badge_innovate: 'Innovation',
    tab_dimsum: 'Dim Sum',
    tab_dimsum_title: 'Dim Sum Series',
    tab_dimsum_sub: 'Traditional Cantonese Dim Sum',
    tab_soup: 'Soup',
    tab_soup_title: 'Soup Series',
    tab_soup_sub: 'Nourishing Cantonese Soups',
    tab_drink: 'Beverage',
    tab_drink_title: 'Beverage Series',
    tab_drink_sub: 'Refreshing Drinks',
    // ── Popular Series ──
    m_p1_name: 'Four Happiness Preserved Meat Clay Pot Rice',
    m_p1_desc: 'Cantonese handcrafted preserved meats — cured pork & sausage, naturally air-dried for rich, layered fragrance.',
    m_p2_name: 'Sausage & Silky Chicken Clay Pot Rice',
    m_p2_desc: '3:7 ratio handcrafted sausage with crisp casing & firm meat, paired with 180-day free-range Qingyuan chicken.',
    // ── Classic Series ──
    m_c1_name: 'Classic Preserved Meat Clay Pot Rice',
    m_c1_desc: 'The sizzling aroma of preserved meat seeps into every grain, crowned with a perfectly golden crust.',
    m_c2_name: 'Mushroom & Silky Chicken Clay Pot Rice',
    m_c2_desc: 'Dried mushrooms soaked in fresh chicken stock, silky thigh meat over aromatic rice with crispy crust.',
    m_c3_name: 'Garlic Spare Ribs Clay Pot Rice',
    m_c3_desc: 'Garlic-marinated spare ribs braised tender and juicy, over fragrant rice with a golden crispy crust.',
    m_c4_name: 'Egg & Beef Clay Pot Rice',
    m_c4_desc: 'Farm egg nestled in the hot pot, tender beef, runny yolk — stir it all together for an irresistible meal.',
    m_c5_name: 'Garlic Eggplant Clay Pot Rice',
    m_c5_desc: 'A vegetarian gem — garlic and eggplant sizzling in hot oil, aromatic beyond words with a crackling crust.',
    m_c6_name: 'Water Chestnut Squid Pork Cake Clay Pot Rice',
    m_c6_desc: 'Crispy water chestnuts meet fresh squid — a thick, juicy pork cake with golden crispy crust, pure Cantonese essence.',
    m_c7_name: 'Classic Three Treasures Clay Pot Rice',
    m_c7_desc: 'Cantonese three treasures together — savory preserved meat, tender spare ribs, juicy chicken, every bite a classic.',
    m_c8_name: 'Phoenix Claw & Spare Rib Clay Pot Rice',
    m_c8_desc: 'Tender phoenix claw meets juicy spare ribs — rich sauce soaking into crispy rice, double the delight in every bite.',
    // ── Flavor Series ──
    m_f1_name: 'Macau Shrimp Paste Pork Belly Clay Pot Rice',
    m_f1_desc: 'Macau-style shrimp paste with layered pork belly — deeply umami, savory rice with a non-greasy crispy crust.',
    m_f2_name: 'Yangjiang Black Bean Spareribs Clay Pot Rice',
    m_f2_desc: 'Yangjiang fermented black beans with fall-off-the-bone spareribs, rice deeply infused with umami sweetness.',
    m_f3_name: 'Hainan Black Pepper Beef Clay Pot Rice',
    m_f3_desc: 'Hainan black pepper sizzling with fresh-cut tender beef — bold, spicy, and full of character.',
    m_f4_name: 'Sanmenpo Sand Ginger Chicken Clay Pot Rice',
    m_f4_desc: 'Featuring Sanmenpo sand ginger — aromatic and vibrant, tender juicy chicken with rich wok hei in every bite.',
    // ── Innovation Series ──
    m_i2_name: 'Japanese Premium Eel Clay Pot Rice',
    m_i2_desc: 'Thick-cut premium eel glazed with secret teriyaki sauce over crispy, caramelized rice — full-bodied and satisfying.',
    m_i3_name: 'Angus Beef & Mozzarella Clay Pot Rice',
    m_i3_desc: 'Juicy Angus beef blanketed in stretchy mozzarella — the crispy rice absorbs every drop of meat juice and milky richness.',
    // ── Dim Sum Series ──
    m_d1_name: 'Signature Shrimp Dumplings',
    m_d1_desc: 'Crystal skin wrapped around whole shrimp, smooth, refreshing and sweet.',
    m_d2_name: 'Steamed Chicken Feet with Bean Sauce',
    m_d2_desc: 'Classic Cantonese dim sum, tender chicken feet with glossy sauce, perfect for all ages.',
    m_d3_name: 'Steamed Ribs with Black Bean Sauce',
    m_d3_desc: 'Savory fermented black beans, tender and fresh ribs, pure Cantonese flavor.',
    m_d4_name: 'Shrimp & Crab Roe Siu Mai',
    m_d4_desc: 'Yellow skin with rich filling, topped with crab roe, fresh, springy and layered.',
    m_d5_name: 'Swiss Sauce Chicken Wings',
    m_d5_desc: "Rich soy sauce creates classic Swiss sauce, glossy chicken wings, sweet and tender, kids' favorite.",
    m_s1_name: 'Watercress & Apricot Kernel Soup',
    m_s1_desc: 'Fragrant watercress, savory dried pork kidney, with apricot kernels for a soothing and sweet finish.',
    m_s2_name: 'Fresh Ginseng & Old Chicken Soup',
    m_s2_desc: "Sweetness of fresh ginseng meets the richness of old chicken, nourishing yet not drying, pure natural flavors.",
    m_dr1_name: 'Yashi Xiang Lemon Tea',
    m_dr1_desc: 'Famous Chaoshan tea meets fragrant lemon, orchid aroma, perfect fusion of tea and citrus.',
    m_dr2_name: 'Jasmine Lemon Tea',
    m_dr2_desc: 'Light jasmine aroma, romantic encounter with lime, refreshing and not too sweet.',
    m_dr3_name: 'Grape Lemon Tea',
    m_dr3_desc: 'Juicy grape flesh, smashed lemon, purple and refreshing, sweet in every sip.',
    m_dr4_name: 'Guava Lemon Tea',
    m_dr4_desc: 'Pink guava with creamy aroma, blended with fresh lemon, sweet and refreshing.',
    m_dr5_name: 'Fresh Squeezed Lemonade',
    m_dr5_desc: 'Pure fresh lemon juice, perfectly chilled, simple yet ultimate refreshment.',
    m_f5_name: 'Sichuan Roasted Chili Beef Clay Pot Rice',
    m_f5_desc: 'House-made roasted chilies bring bold heat, while paper-thin beef melts on your tongue — Sichuan and Cantonese souls united in crispy rice.',
    m_f6_name: 'Chaoshan Soy Bean Silver Cod Clay Pot Rice',
    m_f6_desc: 'Puning fermented soybean enhances the richness of silver cod — buttery smooth texture, authentically savory and fresh.',
    m_i1_name: 'Cheese Black Truffle Clay Pot Rice',
    m_i1_desc: 'Rich cheese enveloping premium black truffle aroma — a luxurious fusion of umami depth and creamy indulgence.',
    m_i4_name: 'Hand-Pressed Angus Beef Patty Clay Pot Rice',
    m_i4_desc: 'Premium Angus beef, hand-pressed to perfection — bouncy, juicy patties where rice and meat aromas intertwine into pure soul food.',
    m_i5_name: 'Diao Long Beef & Fresh Squid Clay Pot Rice',
    m_i5_desc: 'Tender diao long beef paired with springy fresh squid — savory juices soak into crispy rice for pure ocean-fresh delight.',
    m_i6_name: 'Five Blessings Abalone Clay Pot Rice',
    m_i6_desc: 'Bouncy abalone, savory preserved meat, tender chicken and ribs — five flavors in perfect harmony, every bite a taste of luxury.',
    m_c6_name: 'Water Chestnut Squid Pork Cake Clay Pot Rice',
    m_c6_desc: 'Crispy water chestnuts meet fresh squid — a thick, juicy pork cake with golden crispy crust, pure Cantonese essence.',
    m_c7_name: 'Classic Three Treasures Clay Pot Rice',
    m_c7_desc: 'Cantonese three treasures together — savory preserved meat, tender spare ribs, juicy chicken, every bite a classic.',
    m_c8_name: 'Phoenix Claw & Spare Rib Clay Pot Rice',
    m_c8_desc: 'Tender phoenix claw meets juicy spare ribs — rich sauce soaking into crispy rice, double the delight in every bite.',
    menu_note:    '* Photos are for reference only.',
    about_tag:    'See Yourself · Know Yourself',
    about_hero_title: 'Our Story',
    about_hero_sub: 'Building the brand philosophy of PotMaster with the core philosophy of a true master',
    about_title:  'Our Story',
    about_sub:    '',
    about_intro:  'PotMaster, born from deep love and heritage for clay pot rice. We believe a great bowl of clay pot rice is not just food — it\'s a way of life.',
    about_hero_tag: 'Kung Fu as Philosophy',
    about_ph_title: 'Kung Fu as Philosophy',
    about_badge1: 'Brand Philosophy',
    about_ph_p1: 'Drawing from the core philosophy of "The Grandmaster," PotMaster creates an integrated brand philosophy. Through the wisdom of martial arts, we shape the soul of the brand, achieving harmony between deep cultural meaning and exceptional dining experience.',
    about_quote: 'Kung fu is time — with unwavering focus, echoes will return. Only by perfecting a bowl of rice can one speak of philosophy.',
    // ── About Us ──
    about_us_badge: 'About Us',
    about_us_title: 'PotMaster',
    about_us_intro: 'PotMaster is a premium young chain clay pot rice brand, created by Guangdong Tongxi Food & Beverage Brand Management Co., Ltd.',
    about_us_philosophy: 'Adhering to the brand philosophy "If you put your heart into it, everyone can be a master," we seek perfect balance between traditional craftsmanship and modern innovation. With four core competitive strengths — modern aesthetic space, innovative counter-side clay pot cooking experience, artisanal signature dishes, and patented AI smart clay pot stove — we are redefining the quality standard of Chinese fast food with forward-looking vision.',
    about_vision_text: 'Rooted in China, reaching the world, committed to becoming the leading global chain brand for clay pot rice.',
    // ── About PSD ──
    psd_badge: 'Product Strength',
    psd_title: 'To Do the Work Well, One Must First Sharpen the Tools',
    psd_sub: 'The tools that make the master',
    psd_patent: 'Patent Device',
    psd_patent2: 'PATENT PENDING',
    psd1_title: 'Jasmine Rice No.2 from 11°–13°N Latitude',
    psd1_en: 'Jasmine Rice No.2 from 11°–13°N Latitude',
    psd1_desc: 'Grown near Tonle Sap Lake, Cambodia, winning "World\'s Best Rice" six times between 2012 and 2024. Grown using pesticide-free, fertilizer-free, non-GMO methods, with grains 7.2mm in length that release a unique jasmine fragrance when cooked.',
    psd2_title: 'Microcrystalline AI Smart Temperature Control Clay Pot Stove',
    psd2_en: 'Microcrystalline AI Smart Temperature Control Stove',
    psd2_desc: 'Exclusively developed patent equipment, one-touch temperature control, 98%+ crust formation rate, solving the technical barrier of perfect crust. Cooking time reduced from 12 to 8 minutes. High heat sear, low heat simmer, fierce heat finish — digitizing the master\'s cooking wisdom.',
    psd3_title: "Master's Secret Triple Sauce",
    psd3_en: "Master's Secret Triple Sauce",
    psd3_desc: 'Using Lee Kum Kee exclusive clay pot rice soy sauce, eighteen natural ingredients, nine core processes. Special base sauce starts with traditionally brewed soy sauce, simmered on low heat for 72 hours; premium brewed soy sauce with rich fermented aroma; chili sauce made with hand-chopped peppers of three spice levels, spicy but not dry, fragrant but not greasy.',
    psd4_title: 'Custom High-Density Clay Pot',
    psd4_en: 'Custom High-Density Clay Pot',
    psd4_desc: 'The clay pot interior is covered with tiny pores, naturally venting steam at high temperatures, even heat distribution, lasting warmth. Allows rice and ingredients to fully integrate, rice dry and fluffy, golden crispy crust, layered textures.',

    contact_hero_tag: 'See the World',
    contact_hero_title: 'Contact Us',
    contact_hero_sub: 'Get in Touch With Us',
    stores_badge: 'Store Info',
    stores_hero_title: 'Store Locations',
    stores_hero_sub: 'Explore Our Locations',
    stores_title: 'Our Locations',
    stores_sub:   '',
    stores_cta_badge: 'Learn More',
    stores_cta_title: 'Get in Touch',
    stores_cta_desc: 'For more store information or any questions, feel free to contact us.',
    stores_cta_btn: 'Contact Us',
    store1_badge: 'China · Guangzhou', store1_name: 'MASTER PREQUEL @GUANGZHOU SOUTH STATION HEYBLOCK', store1_address: 'Store Address: Building A6, 2/F, Guangzhou South Station HeyBlock, Panyu, Guangzhou, China', store1_date: 'Business Hours: 10:00-22:00',
    store2_badge: 'China · Guangzhou', store2_name: 'POTMASTER @PANYU TEEMALL', store2_address: 'Store Address: Zone B, 3/F, Shop 333-334, Panyu Teemall, Guangzhou, China', store2_date: 'Business Hours: 10:00-22:00',
    store3_badge: 'China · Guangzhou', store3_name: 'POTMASTER @PANYU K11', store3_address: 'Store Address: Shop B138, B1/F, Panyu K11, Guangzhou, China', store3_date: 'Business Hours: 10:00-22:00',
    ci_badge: 'Contact Us', ci_title: 'Get in Touch', ci_sub: '',
    ci_phone_title: 'Hotline', ci_email_title: 'Email', ci_wechat_title: 'WeChat', ci_wechat_desc: 'Follow us',
    ci_weibo_title: 'Official Xiaohongshu', ci_weibo_desc: 'PotMaster Official Account',
    footer_rights: '© 2026 PotMaster. All rights reserved.',
    footer_copy: '© 2026 PotMaster. All rights reserved.',
    nav_privacy: 'Privacy Policy',
    // ── Privacy Policy ──
    priv_hero_tag: 'Serve All · Serve All Beings',
    priv_hero_title: 'Privacy Policy',
    priv_hero_sub: 'Your privacy rights, our solemn commitment',
    priv_nav1: 'Information Collection',
    priv_nav1_desc: 'Types of information we collect',
    priv_nav2: 'Cookie Policy',
    priv_nav2_desc: 'Cookie usage and choices',
    priv_nav3: 'Contact Us',
    priv_nav3_desc: 'Privacy inquiry channel',
    // Section 1
    priv_s1_title: 'Information Collection',
    priv_s1_h1: 'What information do we collect?',
    priv_s1_p1: 'When you visit the PotMaster website or use our services, we may collect the following types of information:',
    priv_s1_li1: 'Personal basic information: Including name, phone number, email address, etc., when you submit inquiries or franchise applications.',
    priv_s1_li1_strong: 'Personal Basic Information',
    priv_s1_li2: 'Location information: Your approximate location when visiting the website, used to optimize service experience.',
    priv_s1_li2_strong: 'Location Information',
    priv_s1_li3: 'Device information: Browser type, operating system, access time, etc., used to analyze website usage.',
    priv_s1_li3_strong: 'Device Information',
    priv_s1_li4: 'Cookies data: Used to remember your preferences and provide personalized experience.',
    priv_s1_li4_strong: 'Cookies Data',
    priv_s1_h2: 'How we collect information',
    priv_s1_p2: 'We collect information through the following methods:',
    priv_s1_li5: 'Information you actively provide (such as filling out forms, subscribing to Newsletter)',
    priv_s1_li6: 'Information collected through automated technologies (such as Cookies, server logs)',
    priv_s1_li7: 'Information shared by third-party service providers (such as map services)',
    // Section 2
    priv_s2_title: 'How We Use Your Information',
    priv_s2_h1: 'How we use your information',
    priv_s2_p1: 'The information we collect will be used for the following purposes:',
    priv_s2_li1: 'Provide services: Process your inquiry requests, franchise applications, etc.',
    priv_s2_li2: 'Service improvement: Analyze website usage data, optimize user experience and service quality',
    priv_s2_li3: 'Marketing communication: With your consent, send brand updates, promotional activities, etc.',
    priv_s2_li4: 'Security: Protect website security, prevent fraud and malicious behavior',
    priv_s2_li5: 'Legal compliance: Comply with relevant laws and regulations',
    priv_s2_h2: 'Information usage principles',
    priv_s2_p2: 'We commit to:',
    priv_s2_li6: 'Only collecting personal information within necessary scope',
    priv_s2_li7: 'Only using information for clearly stated purposes',
    priv_s2_li8: 'Taking reasonable measures to protect information security',
    // Section 3
    priv_s3_title: 'Cookie Policy',
    priv_s3_h1: 'What are Cookies?',
    priv_s3_p1: 'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, provide personalized experience, and help us understand how you use the website.',
    priv_s3_h2: 'Types of Cookies we use',
    priv_s3_li1: 'Essential Cookies: Cookies necessary for website operation, such as language preference settings',
    priv_s3_li1_strong: 'Essential Cookies',
    priv_s3_li2: 'Analytics Cookies: Cookies that help us understand how visitors interact with the website',
    priv_s3_li2_strong: 'Analytics Cookies',
    priv_s3_li3: 'Functionality Cookies: Remember your preferences, provide personalized experience',
    priv_s3_li3_strong: 'Functionality Cookies',
    priv_s3_h3: 'Managing your Cookie choices',
    priv_s3_p3: 'You can manage Cookie preferences through your browser settings. Please note that disabling certain Cookies may affect some features of the website.',
    // Section 4
    priv_s4_title: 'Information Sharing',
    priv_s4_h1: 'How we share information',
    priv_s4_p1: 'We do not sell your personal information. We only share your information under the following circumstances:',
    priv_s4_li1: 'Service providers: Third-party service partners we collaborate with, such as cloud storage, payment processing, etc., only for the purpose of providing services',
    priv_s4_li2: 'Legal requirements: When laws or government require disclosure of information',
    priv_s4_li3: 'Protect rights: To protect our legitimate interests or public safety',
    priv_s4_li4: 'Business transfer: In case of company merger, acquisition, or asset transfer',
    priv_s4_h2: 'Third-party links',
    priv_s4_p2: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of third-party websites. We recommend reviewing their privacy policies.',
    // Section 5
    priv_s5_title: 'Your Rights',
    priv_s5_h1: 'Your privacy rights',
    priv_s5_p1: 'According to applicable laws, you have the following rights:',
    priv_s5_li1: 'Right to know: Understand how we collect and use your personal information',
    priv_s5_li2: 'Right to access: Request to obtain personal information we hold about you',
    priv_s5_li3: 'Right to rectification: Request to correct inaccurate or incomplete personal information',
    priv_s5_li4: 'Right to erasure: Request to delete your personal information under specific circumstances',
    priv_s5_li5: 'Right to restrict processing: Request to restrict our processing of your information',
    priv_s5_li6: 'Right to data portability: Request to obtain your information in a structured, commonly used format',
    priv_s5_li7: 'Right to object: Object to our processing of your information',
    priv_s5_h2: 'How to exercise your rights',
    priv_s5_p2: 'To exercise any of the above rights, please contact us through the contact information at the bottom of the page. We will respond to your requests within the time limits stipulated by law.',
    // Section 6
    priv_s6_title: 'Data Security',
    priv_s6_h1: 'How we protect your information',
    priv_s6_p1: 'We take multiple security measures to protect your personal information:',
    priv_s6_li1: 'Encrypted transmission: Use HTTPS encryption technology to protect data transmission security',
    priv_s6_li2: 'Access control: Strictly limit employee access to personal information',
    priv_s6_li3: 'Regular audits: Regularly evaluate and update security measures',
    priv_s6_li4: 'Security protocols: Develop and enforce data security management systems',
    priv_s6_h2: 'Data breach response',
    priv_s6_p2: 'In case of a data breach, we will promptly notify affected users and take remedial measures in accordance with laws and regulations.',
    // Section 7
    priv_s7_title: 'Contact Us',
    priv_s7_h1: 'Privacy inquiry channel',
    priv_s7_p1: 'If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us through the following:',
    priv_s7_phone: 'Hotline',
    priv_s7_email: 'Email',
    priv_s7_hours: 'Service Hours',
    priv_s7_hours_detail: 'Monday to Friday 09:00-18:00 (excluding holidays)',
    priv_s7_h2: 'Response time',
    priv_s7_p2: 'We will process your request as soon as possible after receiving it, generally within 15 working days. If additional time is needed, we will notify you in advance.',
    // Section 8
    priv_s8_title: 'Policy Updates',
    priv_s8_h1: 'Policy update notice',
    priv_s8_p1: 'We may update this Privacy Policy from time to time to reflect changes in laws and regulations or adjustments to service features. For any significant changes, we will notify you through website announcements or email.',
    priv_s8_h2: 'Update history',
    priv_s8_li1: 'April 29, 2026: First publication of Privacy Policy',
    priv_s8_h3: 'Recommendation',
    priv_s8_p3: 'We recommend that you review this page regularly to stay informed of the latest Privacy Policy content.',
    // Legal
    priv_legal_text: 'This Privacy Policy complies with the General Data Protection Regulation (GDPR) and the Personal Information Protection Law of the People\'s Republic of China (PIPL). We are committed to protecting your personal information privacy rights.',
    priv_last_updated: 'Last updated: April 29, 2026',
    // CTA
    priv_cta_title: 'Have more questions?',
    priv_cta_sub: 'Our team is ready to answer any questions about privacy protection.',
    priv_cta_btn: 'Contact Us',
  },
  zh_tw: {
    // ── Nav ──
    nav_home:    '首頁',
    nav_menu:     '菜單',
    nav_about:    '品牌故事',
    nav_stores:   '門市資訊',
    nav_contact:  '聯繫我們',
    // ── Hero ──
    hero_tag:     '見自己 · 見天地 · 見眾生',
    hero_title:   '<span>煲仔宗師</span><br><span class="hero-title-sub">PotMaster</span>',
    hero_subtitle:'高品質年輕化的連鎖煲仔飯品牌',
    hero_subtitle_en:'',
    hero_cta1:    '探索菜單',
    hero_cta2:    '品牌故事',
    footer_tagline:'高品質年輕化的連鎖煲仔飯品牌',
    // ── CTA ──
    cta_title: '品味匠心本源',
    cta_sub: '不只是味蕾的享受，更是百煉成鋼的烹飪哲學。深入了解「宗師」背后的故事，讀懂這一口焦香的溫度。',
    cta_btn: '聯繫我們',
    cta_stores_btn: '門市資訊',
    // ── Three Realms ──
    phil_badge: '品牌哲學',
    phil_title: '以「功夫三境」<br>構建品牌內核',
    phil_title_en: 'Establishing the brand core value<br>with the "Kung Fu Three Realms"',
    realms_title: '功夫三境',
    realms_sub:   'The Kung Fu Three Realms',
    realm1_tag:   '見自己', realm1_title:'見自己',
    realm1_desc:  '了解自己的口味偏好，找到屬於自己的那一煲。每一碗煲仔飯，都是與自我的對話。',
    realm2_tag:   '見天地', realm2_title:'見天地',
    realm2_desc:  '從中國出發，走向世界。讓每一碗煲仔飯，成為連接不同文化的橋樑。',
    realm3_tag:   '見眾生', realm3_title:'見眾生',
    realm3_desc:  '以匠人之心，讓每一位食客感受到用心烹製的溫暖。',
    // ── Realms Detail (rd1/rd2/rd3) ──
    rd1_title: '見自己',
    rd1_en: 'See Oneself — The First Realm',
    rd1_sub: '品牌的內功修煉 · Cultivation of a brand\'s internal strength',
    rd1_desc: '見自己是起點，是內觀。是品牌對自身手藝的極致苛求與深刻理解，是品牌產品力的根源。功夫其實就是時間，對於煲仔宗師而言，自己就是那一碗煲仔飯的本身。專注當下，修煉自己。',
    rd1_tag1: '頂級茉莉香米', rd1_tag2: '專利AI煲仔爐', rd1_tag3: '宗師秘製三醬', rd1_tag4: '高密度陶土砂鍋',
    rd2_title: '見天地',
    rd2_en: 'See the World — The Second Realm',
    rd2_sub: '品牌的格局與融合 · The World & The Fusion',
    rd2_desc: '見天地是突破，是外覽。是品牌在確立自我後，對外部世界的認知、接納與融合。煲仔宗師不拘泥於傳統廣式煲仔飯，而是海納百川，用煲仔的形式演繹天下風味。過了山，眼界就開闊了。',
    rd2_tag1: '澳門風味', rd2_tag2: '陽江風味', rd2_tag3: '海南風味', rd2_tag4: '日式創新', rd2_tag5: '歐式創新',
    rd3_title: '見眾生',
    rd3_en: 'See All Beings — The Third Realm',
    rd3_sub: '品牌的使命與連接 · Brand Mission & Human Connection',
    rd3_desc: '見眾生是昇華，是普惠。是品牌超越自我之後，與世界的連接與共鳴。一碗煲仔飯，不僅是食物，更是連接人與人的橋樑——將中國飲食文化的溫度，傳遞給全球每一位食客。',
    rd3_tag1: '全球300+門店目標', rd3_tag2: '亞太戰略', rd3_tag3: '歐美佈局',
    // ── Strengths ──
    str1_title:   '現代美學空間',
    str1_en:      'MODERN AESTHETIC SPACE',
    str1_desc:    '採用通透的空間佈局，將傳統藝術與時尚潮流結合，打造舒適優雅的用餐氛圍，重塑粵式煲仔飯的視覺審美。',
    str2_title:   '創新版前現煲體驗',
    str2_en:      'Innovative Counter-side Cooking Experience',
    str2_desc:    '開啟「板前」式烹飪藝術，主理人在您面前現場煲製，近距離感受煙火氣與現點現做的感官盛宴。',
    str3_title:   '匠心秘製出品',
    str3_en:      'Craftsmanship & Signature Flavors',
    str3_desc:    '精選優質食材，注入秘製靈魂配方，以宗師標準嚴苛對待每一道工序，確保每一鍋煲仔飯都能品味到傳承與創新的深度。',
    str4_title:   '專利AI智能煲仔爐',
    str4_en:      'Patented AI Smart Stove',
    str4_desc:    '微晶板AI環繞控溫，鍋巴成型率達98%以上，烹飪時間從12分鐘縮短至8分鐘。',
    // ── Vision ──
    vis_badge: '品牌願景',
    vis_title: '成為全球連鎖煲仔飯品類頭部品牌',
    vis_sub: 'To become the world\'s leading global chain for authentic clay pot rice',
    vis_map_label: '300+ 全球門店目標',
    // ── Core Strengths ──
    str_badge: '品牌競爭力',
    str_title: '四大核心競爭力',
    str_sub: 'Four Core Competitive Advantages',
    sig_badge: '招牌出品',
    sig_title: '人氣招牌煲仔飯',
    sig_sub: 'Signature Clay Pot Rice Selections',
    dish_popular: '人氣',
    dish1_name: '臘味四喜煲仔飯',
    dish1_name_en: 'Four Happiness Preserved Meat Clay Pot Rice',
    dish1_desc: '四喜臘味：臘肉、臘腸、臘鴨蛋、臘排骨，經典廣式風味，口口濃郁。',
    dish2_name: '臘腸滑雞煲仔飯',
    dish2_name_en: 'Sausage & Tender Chicken Clay Pot Rice',
    dish2_desc: '自製廣式臘腸與滑嫩走地雞，臘味甘香、雞肉鮮甜，醬汁拌飯回味悠長。',
    dish3_name: '窩蛋牛肉煲仔飯',
    dish3_name_en: 'Egg & Beef Clay Pot Rice',
    dish3_desc: '嫩滑牛肉片鋪在米飯上，現打窩蛋在飯面，劃開蛋液裹住米飯與肉片，滑嫩升級。',
    dish4_name: '芝士安格斯牛肉煲仔飯',
    dish4_name_en: 'Angus Beef & Mozzarella Clay Pot Rice',
    dish4_desc: '安格斯牛肉鮮嫩爆汁，蓋上滿滿一層拉絲的馬蘇里拉芝士，鍋巴吸飽肉汁與奶香。',
    sig_more: '查看完整菜單',
    // ── Menu ──
    menu_badge:   'Menu · 菜單',
    menu_hero_tag: '見天地 · See the World',
    menu_hero_title: '菜單 Menu',
    menu_hero_sub: '海納百川，以煲仔演繹天下風味',
    menu_title:   '精選菜品',
    menu_sub:     'Our Signature Selections',
    tab_popular:  '人氣系列',
    tab_popular_title: '人氣產品系列',
    tab_classic:  '經典系列',
    tab_classic_title: '經典產品系列',
    badge_classic: '經典',
    badge_hot: '熱銷',
    badge_flavor: '風味',
    tab_flavor:   '風味系列',
    tab_flavor_title: '風味產品系列',
    tab_innovate: '創新系列',
    tab_innovate_title: '創新產品系列',
    badge_innovate: '創新',
    tab_dimsum: '點心系列',
    tab_dimsum_title: '點心產品系列',
    tab_dimsum_sub: 'Dim Sum Series',
    tab_soup: '靚湯系列',
    tab_soup_title: '靚湯產品系列',
    tab_soup_sub: 'Soup Series',
    tab_drink: '飲品系列',
    tab_drink_title: '飲品產品系列',
    tab_drink_sub: 'Beverage Series',
    // ── 人氣系列 ──
    m_p1_name: '臘味四喜煲仔飯',
    m_p1_desc: '廣式古法純手工臘味：臘肉、臘腸；上等排骨、雞肉，自然風乾，香味濃郁，醇厚獨特。',
    m_p2_name: '臘腸滑雞煲仔飯',
    m_p2_desc: '優選37比例古法手工臘腸，外皮脆嫩，肉質緊實；專供基地180天清遠走地雞，入口彈嫩，雞味十足。',
    // ── 經典系列 ──
    m_c1_name: '經典臘味煲仔飯',
    m_c1_desc: '臘味滋滋滲米香，煲出焦香鍋巴，一口暖到心尖。',
    m_c2_name: '香菇滑雞煲仔飯',
    m_c2_desc: '乾香菇吸滿鮮雞湯，雞腿肉滑嫩，米飯裹香鍋巴脆。',
    m_c3_name: '蒜香排骨煲仔飯',
    m_c3_desc: '排骨裹滿蒜香燜至鮮嫩多汁，米香鍋巴脆，每口都夠鮮夠味。',
    m_c4_name: '窩蛋牛肉煲仔飯',
    m_c4_desc: '生態雞蛋窩進熱煲裡，牛肉嫩、蛋流心，拌飯香到停不下。',
    m_c5_name: '蒜香茄子煲仔飯',
    m_c5_desc: '素食者福音！蒜末和茄子被熱油激出沖天香氣，鍋巴滋滋作響，每一口都超滿足。',
    m_c6_name: '馬蹄魷魚肉餅煲仔飯',
    m_c6_desc: '爽脆馬蹄遇上鮮Q魷魚，肉餅厚實多汁，焦香鍋巴盡顯地道粵味。',
    m_c7_name: '經典三拼煲仔飯',
    m_c7_desc: '廣式三寶齊聚，臘味醇厚、排骨鮮嫩、滑雞多汁，口口皆是經典。',
    m_c8_name: '鳳爪排骨煲仔飯',
    m_c8_desc: '軟糯鳳爪搭配鮮嫩排骨，濃郁醬汁滲入焦脆米飯，雙重滋味倍過癮。',
    // ── 風味系列 ──
    m_f1_name: '澳門蝦醬花肉煲仔飯',
    m_f1_desc: '澳門蝦醬拌三層花肉，肉香滲飯超鹹鮮，鍋巴脆不膩。',
    m_f2_name: '陽江豆豉排骨煲仔飯',
    m_f2_desc: '陽江豆豉入煲，排骨軟嫩脫骨，米飯吸香超回甘。',
    m_f3_name: '海南黑胡椒牛肉煲仔飯',
    m_f3_desc: '海南黑胡椒爆香，鮮切牛肉嫩彈，煲飯辛香超夠勁。',
    m_f4_name: '三門坡沙薑嫩雞煲仔飯',
    m_f4_desc: '選用三門坡沙薑，辛香四溢，雞肉嫩滑多汁，鍋氣十足。',
    m_f5_name: '四川燒椒牛肉煲仔飯',
    m_f5_desc: '選用特製燒椒鮮辣勁爽，牛肉片片滑嫩，川粵風味在鍋巴間完美融合。',
    m_f6_name: '潮汕豆醬銀鱈魚煲仔飯',
    m_f6_desc: '普寧豆醬激發出銀鱈魚的豐腴，肉質如奶油般絲滑，鮮鹹地道。',
    // ── 創新系列 ──
    m_i1_name: '芝士黑松露煲仔飯',
    m_i1_desc: '濃醇芝士裹挾頂級黑松露香氣，融入米飯化作咸鮮奶香，與菌菇奢華交織回味。',
    m_i2_name: '日式輕奢鰻魚煲仔飯',
    m_i2_desc: '精選厚切鰻魚，肉質肥美，搭配秘製蒲燒醬與焦香鍋巴，口感飽滿。',
    m_i3_name: '芝士安格斯牛肉煲仔飯',
    m_i3_desc: '安格斯牛肉鮮嫩爆汁，蓋上滿滿一層拉絲的馬蘇里拉芝士，鍋巴吸飽肉汁與奶香。',
    m_i4_name: '手打安格斯牛肉餅煲仔飯',
    m_i4_desc: '精選安格斯牛肉，手打Q彈勁道，肉餅鮮美爆汁，米香肉香交織入魂。',
    m_i5_name: '吊龍牛肉鮮魷煲仔飯',
    m_i5_desc: '鮮甜吊龍肉質軟糯，搭配爽彈鮮魷，油潤鮮香滲入焦脆鍋巴，滿口生鮮。',
    m_i6_name: '五福臨門鮑魚煲仔飯',
    m_i6_desc: '鮑魚Q彈、臘味醇厚、雞肉排骨滑嫩，五味合一，口口皆是富貴滿足。',
    // ── 點心系列 ──
    m_d1_name: '招牌蝦餃皇',
    m_d1_desc: '透明皮裡裹著呼之欲出的整顆蝦仁，爽滑鮮甜。',
    m_d2_name: '百合醬蒸鳳爪',
    m_d2_desc: '經典的廣式早茶味，鳳爪酥軟紅亮，醬汁濃稠，老少皆宜。',
    m_d3_name: '豉汁蒸排骨',
    m_d3_desc: '豆豉醇香入髓，排骨嫩而不韌，色澤潔白，盡顯純正粵味。',
    m_d4_name: '鮮蝦蟹籽燒賣',
    m_d4_desc: '黃薄皮包裹豐盈肉餡，頂綴飽滿蟹籽，鮮爽彈牙，層次豐富。',
    m_d5_name: '瑞士汁雞翼',
    m_d5_desc: '濃稠豉油調配出經典瑞士汁，雞翅色澤鮮亮，軟糯香甜，小朋友的最愛。',
    m_s1_name: '西洋菜南北杏陳腎湯',
    m_s1_desc: '西洋菜清香，陳腎鹹鮮適口，加入南北杏，溫潤止咳且回甘。',
    m_s2_name: '鮮人參煲老雞湯',
    m_s2_desc: '鮮參之甘，疊加老雞之鮮，溫潤不燥，盡享自然本味。',
    m_dr1_name: '鴨屎香檸檬茶',
    m_dr1_desc: '潮汕名叢碰撞香水檸檬，蘭香悠長，茶韻與酸爽神級融合。',
    m_dr2_name: '茉莉香檸檸檬茶',
    m_dr2_desc: '茉莉花香輕盈入喉，與青檸酸爽浪漫邂逅，清雅解暑不甜膩。',
    m_dr3_name: '爆檸葡萄檸檬茶',
    m_dr3_desc: '飽滿多肉葡萄果肉，撞上暴力手打檸檬，紫色冰爽，滿口鮮甜。',
    m_dr4_name: '芭樂檸檬茶',
    m_dr4_desc: '粉嫩芭樂自帶奶油香氣，融合鮮檸爽感，酸甜柔和，細膩清爽。',
    m_dr5_name: '鮮萃Lemonade',
    m_dr5_desc: '純粹檸檬原汁鮮萃，冰爽比例恰到好處，最簡單的極致解渴。',
    menu_note:    '* 圖片僅供參考，請以實物為準',
    // ── About ──
    about_tag:    'See Yourself · 見自己',
    about_hero_title: '品牌故事',
    about_hero_sub: '以一代宗師的核心理唸為指導，構建煲仔宗師的品牌哲學',
    about_title:  '品牌故事',
    about_sub:    'Our Story',
    about_intro:  '煲仔宗師，源自對煲仔飯的深厚熱愛與傳承。我們相信，一碗好的煲仔飯，不僅是食物，更是一種生活態度。',
    about_hero_tag: '功夫即哲學 · Kung Fu as Philosophy',
    about_ph_title: '功夫即哲學',
    about_badge1: '品牌哲學',
    about_ph_p1: '以《一代宗師》的核心理念，構建煲仔宗師的品牌哲學融合體系。以武學智慧塑造品牌靈魂，實現品牌文化深度與消費體驗的共生。',
    about_quote: '功夫其實就是時間——念念不忘，必有回響。唯有先成就一碗完美的飯，才有資格談論哲學。',
    // ── About Us ──
    about_us_badge: '關於我們',
    about_us_title: '煲仔宗師 PotMaster',
    about_us_intro: '煲仔宗師 (PotMaster) 是由廣東同熙餐飲品牌管理有限公司傾力打造的高品質年輕化連鎖煲仔飯品牌。',
    about_us_philosophy: '秉持「只要夠用心，人人皆宗師」的品牌理唸，在傳承古法與現代創新之間尋得完美平衡。依託現代美學空間、創新版前現煲體驗、匠心秘製出品以及專利AI智能煲仔爐的四大核心競爭力，我們正以前瞻性的視野重新定義中式快餐的品質高度。',
    about_vision_text: '未來品牌將紮根中國，走向世界，致力於成為全球連鎖煲仔飯品類的頭部品牌。',
    // ── About PSD ──
    psd_badge: '品牌產品力',
    psd_title: '工欲善其事，必先利其器',
    psd_sub: 'To do the work well, one must first sharpen the tools',
    psd_patent: '專利設備',
    psd_patent2: 'PATENT PENDING',
    psd1_title: '北緯11–13°茉莉香米2號',
    psd1_en: 'Jasmine Rice No.2 from 11°–13°N Latitude',
    psd1_desc: '產自柬埔寨洞里薩湖周邊，2012–2024年間六次榮獲「世界最好大米」稱號。採用無農藥、無化肥、無轉基因的純天然種植方式，顆粒長度7.2mm，煮熟後散發獨特茉莉花香。',
    psd2_title: '微晶板AI智能環繞控溫煲仔爐',
    psd2_en: 'Microcrystalline AI Smart Temperature Control Stove',
    psd2_desc: '獨家研發專利設備，實現一鍵控溫，鍋巴成型率達98%以上，解決鍋巴技術壁壘。烹飪時間從12分鐘縮短至8分鐘。猛火攻、文火燜、烈火收——將宗師烹飪智慧數字化。',
    psd3_title: '宗師秘製三醬',
    psd3_en: "Master's Secret Triple Sauce",
    psd3_desc: '使用李錦記特供煲仔飯醬油，十八味天然原料，九道核心工藝。專屬基汁以古法釀造醬油為底，72小時文火慢熬；頭道超釀醬油發酵醬香濃郁；辣醬精選三種辣度辣椒手工剁制，辣而不燥，香而不膩。',
    psd4_title: '宗師定制高密度陶土砂鍋',
    psd4_en: 'Custom High-Density Clay Pot',
    psd4_desc: '砂煲內部佈滿微細氣孔，高溫自然排出水汽，受熱均勻，熱力綿長。能讓大米和食材充分融合，米飯乾爽粒粒分明，鍋巴金黃酥脆，口感層次分明。',
    // ── Contact ──
    contact_hero_tag: 'See the World · 見天地',
    contact_hero_title: '聯繫我們',
    contact_hero_sub: 'Contact Us · 更多資訊請聯繫我們',
    // Store
    stores_badge: '門市資訊',
    stores_hero_title: '門市資訊',
    stores_hero_sub: '探索我們的門市 — Discover Our Locations',
    stores_title: '我們的門市',
    stores_sub:   '',
    stores_cta_badge: '更多咨詢',
    stores_cta_title: '了解更多',
    stores_cta_desc: '如需了解更多門市資訊或有任何疑問，歡迎聯繫我們。',
    stores_cta_btn: '聯繫我們',
    store1_badge: '中國·廣州', store1_name: '宗師前傳南站喜街店', store1_address: '門店地址：中國廣州市番禺區南站喜街A6棟二樓', store1_date: '營業時間：10:00-22:00',
    store2_badge: '中國·廣州', store2_name: '煲仔宗師番禺天河城店', store2_address: '門店地址：中國廣州市番禺天河城B區三層333-334鋪', store2_date: '營業時間：10:00-22:00',
    store3_badge: '中國·廣州', store3_name: '煲仔宗師番禺K11店', store3_address: '門店地址：中國廣州市番禺K11負一層B138號鋪', store3_date: '營業時間：10:00-22:00',
    // Contact Info
    ci_badge: '聯繫我們', ci_title: '聯繫我們', ci_sub: '',
    ci_phone_title: '服務熱線', ci_email_title: '電子郵箱', ci_wechat_title: '微信公眾號', ci_wechat_desc: '搜索關注',
    ci_weibo_title: '官方小紅書', ci_weibo_desc: '煲仔宗師官方帳號',
    // ── Footer ──
    footer_rights: '© 2026 煲仔宗師 PotMaster. 保留所有權利.',
    footer_copy: '© 2026 煲仔宗師 PotMaster. 保留所有權利.',
    nav_privacy: '隱私政策',
    // ── Privacy Policy ──
    priv_hero_tag: '見眾生 · Serve All',
    priv_hero_title: '隱私政策',
    priv_hero_sub: '您的隱私權益，我們的莊嚴承諾',
    priv_nav1: '資訊收集',
    priv_nav1_desc: '我們收集的資訊類型',
    priv_nav2: 'Cookie政策',
    priv_nav2_desc: 'Cookie使用與選擇',
    priv_nav3: '聯繫我們',
    priv_nav3_desc: '隱私問題諮詢通道',
    // Section 1
    priv_s1_title: '資訊收集',
    priv_s1_h1: '我們收集哪些資訊？',
    priv_s1_p1: '當您訪問煲仔宗師網站或使用我們的服務時，我們可能會收集以下類型的資訊：',
    priv_s1_li1: '個人基本資訊：包括姓名、電話號碼、電子郵箱地址等，當您通過表單提交諮詢或加盟申請時。',
    priv_s1_li1_strong: '個人基本資訊',
    priv_s1_li2: '位置資訊：您訪問網站時的大致地理位置，用於優化服務體驗。',
    priv_s1_li2_strong: '位置資訊',
    priv_s1_li3: '設備資訊：瀏覽器類型、操作系統、訪問時間等，用於分析網站使用情況。',
    priv_s1_li3_strong: '設備資訊',
    priv_s1_li4: 'Cookies資料：用於記住您的偏好設置和提供個人化體驗。',
    priv_s1_li4_strong: 'Cookies資料',
    priv_s1_h2: '資訊收集方式',
    priv_s1_p2: '我們通過以下方式收集資訊：',
    priv_s1_li5: '您主動提供的資訊（如填寫表單、訂閱電子報）',
    priv_s1_li6: '自動化技術收集的資訊（如Cookies、伺服器日誌）',
    priv_s1_li7: '第三方服務提供商共享的資訊（如地圖服務）',
    // Section 2
    priv_s2_title: '資訊使用',
    priv_s2_h1: '我們如何使用您的資訊',
    priv_s2_p1: '我們收集的資訊將用於以下目的：',
    priv_s2_li1: '提供服務：處理您的諮詢請求、加盟申請等業務需求',
    priv_s2_li2: '服務改進：分析網站使用資料，優化用戶體驗和服務質量',
    priv_s2_li3: '行銷溝通：在您同意的情況下，發送品牌動態、優惠活動等資訊',
    priv_s2_li4: '安全保障：保護網站安全，防範欺詐和惡意行為',
    priv_s2_li5: '法律合規：遵守相關法律法規的要求',
    priv_s2_h2: '資訊使用原則',
    priv_s2_p2: '我們承諾：',
    priv_s2_li6: '僅在必要範圍內收集個人資訊',
    priv_s2_li7: '僅將資訊用於明確告知的目的',
    priv_s2_li8: '採取合理措施保護資訊安全',
    // Section 3
    priv_s3_title: 'Cookie政策',
    priv_s3_h1: '什麼是Cookie？',
    priv_s3_p1: 'Cookie是您訪問網站時，網站存儲在您設備上的小型文字檔案。它們幫助網站記住您的偏好設置、提供個人化體驗，並幫助我們了解網站的使用情況。',
    priv_s3_h2: '我們使用的Cookie類型',
    priv_s3_li1: '必要Cookie：網站運行所必需的Cookie，如語言偏好設置',
    priv_s3_li1_strong: '必要Cookie',
    priv_s3_li2: '分析Cookie：幫助我們了解訪客如何與網站互動的Cookie',
    priv_s3_li2_strong: '分析Cookie',
    priv_s3_li3: '功能Cookie：記住您的偏好設置，提供個人化體驗',
    priv_s3_li3_strong: '功能Cookie',
    priv_s3_h3: '管理您的Cookie選擇',
    priv_s3_p3: '您可以通過瀏覽器設置管理Cookie偏好。但請注意，停用某些Cookie可能會影響網站的某些功能。',
    // Section 4
    priv_s4_title: '資訊共享',
    priv_s4_h1: '我們如何共享資訊',
    priv_s4_p1: '我們不會出售您的個人資訊。我們僅在以下情況下共享您的資訊：',
    priv_s4_li1: '服務提供商：與我們合作的第三方服務商，如雲存儲、支付處理等，僅用於提供服務的目的',
    priv_s4_li2: '法律要求：當法律或政府要求披露資訊時',
    priv_s4_li3: '保護權利：為保護我們的合法權益或公共安全',
    priv_s4_li4: '業務轉讓：在公司合併、收購或資產轉讓情況下',
    priv_s4_h2: '第三方連結',
    priv_s4_p2: '我們的網站可能包含指向第三方網站的連結。我們不對第三方網站的隱私實踐負責，建議您查看其隱私政策。',
    // Section 5
    priv_s5_title: '用戶權利',
    priv_s5_h1: '您的隱私權利',
    priv_s5_p1: '根據適用法律，您享有以下權利：',
    priv_s5_li1: '知情權：了解我們如何收集和使用您的個人資訊',
    priv_s5_li2: '訪問權：請求獲取我們持有的關於您的個人資訊',
    priv_s5_li3: '更正權：請求更正不準確或不完整的個人資訊',
    priv_s5_li4: '刪除權：在特定情況下請求刪除您的個人資訊',
    priv_s5_li5: '限制處理權：請求限制我們對您資訊的處理',
    priv_s5_li6: '資料可攜權：請求以結構化、常用格式獲取您的資訊',
    priv_s5_li7: '拒絕權：拒絕我們處理您的資訊',
    priv_s5_h2: '如何行使權利',
    priv_s5_p2: '如需行使上述任何權利，請通過頁面底部的聯繫方式與我們聯繫。我們將在法律規定的時限內響應您的請求。',
    // Section 6
    priv_s6_title: '資料安全',
    priv_s6_h1: '我們如何保護您的資訊',
    priv_s6_p1: '我們採取多種安全措施保護您的個人資訊：',
    priv_s6_li1: '加密傳輸：使用HTTPS加密技術保護資料傳輸安全',
    priv_s6_li2: '存取控制：嚴格限制員工存取個人資訊的權限',
    priv_s6_li3: '定期審計：定期評估和更新安全措施',
    priv_s6_li4: '安全協議：制定並執行資料安全管理系統',
    priv_s6_h2: '資料泄露應對',
    priv_s6_p2: '如發生資料泄露，我們將按照法律法規要求，及時通知受影響用戶並採取補救措施。',
    // Section 7
    priv_s7_title: '聯繫我們',
    priv_s7_h1: '隱私問題諮詢通道',
    priv_s7_p1: '如您對本隱私政策有任何疑問，或希望行使您的隱私權利，請通過以下方式與我們聯繫：',
    priv_s7_phone: '服務熱線',
    priv_s7_email: '電子郵箱',
    priv_s7_hours: '服務時間',
    priv_s7_hours_detail: '週一至週五 09:00-18:00（國定假日除外）',
    priv_s7_h2: '響應時限',
    priv_s7_p2: '我們將在收到您的請求後尽快處理，一般情況下會在15個工作日內回覆。如需延長時間，我們將提前通知您。',
    // Section 8
    priv_s8_title: '政策更新',
    priv_s8_h1: '政策更新說明',
    priv_s8_p1: '我們可能會不時更新本隱私政策，以反映法律法規的變化或服務功能的調整。任何重大變更，我們都將通過網站公告或電子郵件通知您。',
    priv_s8_h2: '更新歷史',
    priv_s8_li1: '2026年4月29日：首次發布隱私政策',
    priv_s8_h3: '建議',
    priv_s8_p3: '建議您定期查看本頁面，以了解最新的隱私政策內容。',
    // Legal
    priv_legal_text: '本隱私政策遵循《通用資料保護條例》(GDPR) 及《中華人民共和國個人資訊保護法》(PIPL) 的相關規定。我們致力於保護您的個人資訊隱私權益。',
    priv_last_updated: '最後更新日期：2026年4月29日',
    // CTA
    priv_cta_title: '還有其他問題？',
    priv_cta_sub: '我們的團隊隨時為您解答關於隱私保護的任何疑問。',
    priv_cta_btn: '聯繫我們',
  }
};

console.log('[script] loaded, i18n keys:', Object.keys(i18n).length);

// ── Language ───────────────────────────────────────
let currentLang = localStorage.getItem('potmaster-lang') || 'zh';

function applyLang(lang) {
  console.log('[i18n] applyLang:', lang, '| elements:', document.querySelectorAll('[data-i18n]').length);
  currentLang = lang;
  localStorage.setItem('potmaster-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = (i18n[lang] || i18n.zh)[key];
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = (i18n[lang] || i18n.zh)[key];
    if (val !== undefined) el.placeholder = val;
  });

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.querySelector('.lang-cn').classList.toggle('active-lang', lang === 'zh');
    toggle.querySelector('.lang-en').classList.toggle('active-lang', lang === 'en');
    toggle.querySelector('.lang-tw').classList.toggle('active-lang', lang === 'zh_tw');
  }

  // 同步更新移动端侧边栏的语言高亮
  document.querySelectorAll('.mobile-lang .lang-cn').forEach(el => el.classList.toggle('active-lang', lang === 'zh'));
  document.querySelectorAll('.mobile-lang .lang-tw').forEach(el => el.classList.toggle('active-lang', lang === 'zh_tw'));
  document.querySelectorAll('.mobile-lang .lang-en').forEach(el => el.classList.toggle('active-lang', lang === 'en'));

  document.documentElement.lang = lang;

  // 中文模式下隐藏功夫三境的英文副标题
  document.querySelectorAll('.realm-en').forEach(el => {
    el.style.display = lang === 'zh' ? 'none' : '';
  });
}

document.addEventListener('click', e => {
  // 语言切换（桌面端和移动端通用）
  if (e.target.classList.contains('lang-cn')) {
    applyLang('zh');
  } else if (e.target.classList.contains('lang-tw')) {
    applyLang('zh_tw');
  } else if (e.target.classList.contains('lang-en')) {
    applyLang('en');
  }
});

// ── Mobile nav ─────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function closeMobileNav() {
  if (navLinks) navLinks.classList.remove('open');
  if (navOverlay) navOverlay.classList.remove('active');
  if (hamburger) hamburger.classList.remove('open');
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    if (navOverlay) navOverlay.classList.toggle('active');
  });

  // 点击导航链接后关闭菜单
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      closeMobileNav();
    }
  });

  // 点击遮罩层关闭菜单
  if (navOverlay) {
    navOverlay.addEventListener('click', () => {
      closeMobileNav();
    });
  }

  // ESC 键关闭菜单
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileNav();
  });
}

// ── Scroll header ──────────────────────────────────
const header = document.querySelector('#navbar');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      header && header.classList.toggle('scrolled', window.scrollY > 60);
      ticking = false;
    });
    ticking = true;
  }
});

// ── Menu tabs ──────────────────────────────────────
function showMenuTab(id) {
  document.querySelectorAll('.tab-btn').forEach(t => {
    t.classList.remove('active');
    if (t.dataset.tab === id) t.classList.add('active');
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.remove('active');
    if (c.id === 'tab-' + id) c.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => showMenuTab(tab.dataset.tab));
  });
});

// ── Franchise form ─────────────────────────────────
const form = document.getElementById('franchiseForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    console.log('[form] submitted:', data);
    form.querySelector('.form-success') &&
      (form.querySelector('.form-success').style.display = 'block');
    form.reset();
  });
}

// ── Scroll animations ───────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.realm-card, .strength-item, .dish-card, .vstep, .why-card, .menu-item, .psd-item, .realm-detail-item, .vt-item, .contact-card'
  );
  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
    observer.observe(el);
  });
  applyLang(currentLang);
});
