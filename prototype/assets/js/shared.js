
  function showScreen(id){
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById('screen-'+id).classList.add('active');
    document.querySelectorAll('#nav-splash,#nav-login,#nav-pref1,#nav-pref2,#nav-pref3,#nav-legal-list,#nav-home,#nav-party,#nav-moments,#nav-chat,#nav-profile,#nav-tasks,#nav-channel,#nav-post-moment,#nav-party-setup,#nav-party-room,#nav-player-profile,#nav-avatar,#nav-quick-order,#nav-squad,#nav-wallet,#nav-guild,#nav-level-rank,#nav-nobility,#nav-public-note,#nav-activity').forEach(b=>b.classList.remove('active'));
    var navBtn = document.getElementById('nav-'+id);
    if(navBtn) navBtn.classList.add('active');
  }

  var PREF_DATA = {
    pref1: {max:10, items:["御姐","大叔","奶萌小哥","马来西亚","中文","英文","大姨妈","堡xxxx","xxx","xxxx","xxxx","xxxx","xxx","xxxx","xxxx"]},
    pref2: {max:3, items:["交新朋友","打发时间","找游戏玩家","赚钱","娱乐","心灵成长","第二空间","尝鲜","新体验","寻找另一半","曝光率","xxx","xxxxx","xxxx","xxxx"]},
    pref3: {max:10, items:["绝地求生","和平精英","我要活下去","香肠派对","APEX","永劫无间","吸血鬼之避世一血猎","堡垒之夜","使命召唤","特战英豪","反恐精英2","斗阵特攻2","最终决战","劫薪日3","求生之路2","喋血复仇","第五人格","黎明杀机","逃生实验","恐鬼症","致命公司"]}
  };
  var prefSelected = {pref1:new Set(), pref2:new Set(), pref3:new Set()};

  function renderChips(key){
    var cfg = PREF_DATA[key];
    var grid = document.getElementById('chips-'+key);
    grid.innerHTML = '';
    cfg.items.forEach(function(label, idx){
      var chip = document.createElement('div');
      chip.className = 'chip';
      chip.textContent = label;
      chip.onclick = function(){ toggleChip(key, idx, chip); };
      grid.appendChild(chip);
    });
  }
  function toggleChip(key, idx, el){
    var cfg = PREF_DATA[key];
    var set = prefSelected[key];
    if(set.has(idx)){
      set.delete(idx);
      el.classList.remove('selected');
    } else {
      if(set.size >= cfg.max){
        var toast = document.getElementById('toast-'+key);
        toast.classList.add('show');
        setTimeout(function(){ toast.classList.remove('show'); }, 1400);
        return;
      }
      set.add(idx);
      el.classList.add('selected');
    }
    document.getElementById('count-'+key).textContent = '已选 '+set.size+'/'+cfg.max;
  }
  Object.keys(PREF_DATA).forEach(renderChips);

  /* ============================================================
     LEGAL / POLICY SCREENS — START
     Screens: screen-legal-list, screen-legal-doc (prototype/index.html)
     Styles: "LEGAL / POLICY SCREENS" section in shared.css
     Data: LEGAL_DOCS
     Functions: renderLegalList(), openLegalDoc(id)
     Entry points:
       - toolbar #nav-legal-list -> showScreen('legal-list')
       - screen-login ToS/Privacy links call openLegalDoc('tos'/'privacy')
         directly — do not rename openLegalDoc without checking index.html
     Note: renderLegalList() below runs immediately at script load (not
       on demand). Keep this call in this position so #legal-list-body
       already exists in the DOM when it runs.
     ============================================================ */
  var LEGAL_DOCS = [
    {id:'privacy', title:'Privacy Policy', sections:[
      {h:'Information We Collect', p:'Describes the account, profile, and usage data collected when players and service providers use FIND PLAYPAL.'},
      {h:'How We Use Your Information', p:'Explains how collected data is used to match players with service providers, process payments, and improve the platform.'},
      {h:'Data Sharing & Third Parties', p:'Covers when data may be shared with payment processors, analytics providers, or as required by law.'},
      {h:'Your Rights & Choices', p:'Outlines how users can access, correct, or request deletion of their personal data.'}
    ]},
    {id:'tos', title:'Terms of Service', sections:[
      {h:'Acceptance of Terms', p:'By creating an account, users agree to these Terms and any policies referenced within them.'},
      {h:'Eligibility & Accounts', p:'Sets out who may register, account accuracy requirements, and account security responsibilities.'},
      {h:'User Conduct', p:'Describes acceptable use of the platform and behavior expected of players and service providers.'},
      {h:'Termination', p:'Explains the conditions under which FIND PLAYPAL may suspend or terminate an account.'}
    ]},
    {id:'cookie', title:'Cookie Policy', sections:[
      {h:'What Are Cookies', p:'A short explanation of cookies and similar tracking technologies used on the platform.'},
      {h:'Types of Cookies We Use', p:'Covers essential, analytics, and preference cookies used across the site and app.'},
      {h:'Managing Your Cookie Preferences', p:'Explains how users can control or disable cookies through browser or in-app settings.'}
    ]},
    {id:'refund', title:'Refund, Cancellation & No-Show Policy', sections:[
      {h:'Cancellation Windows', p:'Defines the timeframes within which a booking can be cancelled without penalty.'},
      {h:'Refund Eligibility', p:'Explains which situations qualify for a full, partial, or no refund.'},
      {h:'No-Show Handling', p:'Describes how credits, fees, or ratings are affected when a player or service provider does not show up.'}
    ]},
    {id:'community', title:'Community & Safety Guidelines', sections:[
      {h:'Respectful Conduct', p:'Sets expectations for respectful, friendly interaction between players and service providers.'},
      {h:'Prohibited Behavior', p:'Lists behavior that is not tolerated on the platform, including harassment and fraud.'},
      {h:'Reporting & Moderation', p:'Explains how users can report issues and how the platform reviews and acts on reports.'}
    ]},
    {id:'provider', title:'Playpal Service Provider Agreement', sections:[
      {h:'Provider Eligibility', p:'Outlines the requirements to register and remain active as a FIND PLAYPAL service provider.'},
      {h:'Service Standards', p:'Describes expected quality, availability, and conduct standards for service providers.'},
      {h:'Earnings & Commission', p:'Explains how earnings are calculated and the platform commission structure.'},
      {h:'Agreement Termination', p:'Covers how either party may end this agreement and what happens to pending bookings.'}
    ]},
    {id:'payments', title:'Payments, Wallet, Credits & Payout Policy', sections:[
      {h:'Wallet & Credits', p:'Explains how in-app credits are purchased, stored, and used for bookings.'},
      {h:'Payment Methods', p:'Lists supported payment methods and how transactions are processed securely.'},
      {h:'Payout Schedule & Fees', p:'Describes how and when service providers receive payouts, and any applicable fees.'}
    ]},
    {id:'agesafety', title:'Age & Minor Safety Policy', sections:[
      {h:'Minimum Age Requirement', p:'States the minimum age required to create an account and use the platform.'},
      {h:'Verification', p:'Describes steps taken to verify user age during registration.'},
      {h:'Minor Safety Protections', p:'Outlines additional protections and reporting channels related to minor safety.'}
    ]}
  ];

  function renderLegalList(){
    var body = document.getElementById('legal-list-body');
    body.innerHTML = '';
    LEGAL_DOCS.forEach(function(doc){
      var row = document.createElement('div');
      row.className = 'legal-row';
      row.innerHTML = '<span>'+doc.title+'</span><span class="chev">›</span>';
      row.onclick = function(){ openLegalDoc(doc.id); };
      body.appendChild(row);
    });
  }
  function openLegalDoc(id){
    var doc = LEGAL_DOCS.find(function(d){ return d.id === id; });
    if(!doc) return;
    document.getElementById('legal-doc-title').textContent = doc.title;
    var body = document.getElementById('legal-doc-body');
    var html = '<div class="legal-updated">Last updated: September 2026</div>';
    html += '<div class="legal-note">页面结构与排版预览 — 正文为占位文字，最终法律条文需由你方（建议咨询法律顾问）确认后替换。</div>';
    doc.sections.forEach(function(s){
      html += '<div class="legal-section"><h4>'+s.h+'</h4><p>'+s.p+'</p></div>';
    });
    body.innerHTML = html;
    showScreen('legal-doc');
  }
  renderLegalList();
  /* LEGAL / POLICY SCREENS — END */

  /* ---------- app shell: icons ---------- */
  var ICONS = {
    search:'<svg viewBox="0 0 20 20" width="18" height="18"><circle cx="9" cy="9" r="6" stroke="#9C9484" stroke-width="1.6" fill="none"/><line x1="14" y1="14" x2="18" y2="18" stroke="#9C9484" stroke-width="1.6" stroke-linecap="round"/></svg>',
    trophy:'<svg viewBox="0 0 20 20" width="18" height="18"><path d="M6 4h8v4a4 4 0 01-8 0V4z" fill="#F2B33D"/><path d="M6 5H3a3 3 0 003 3M14 5h3a3 3 0 01-3 3" stroke="#F2B33D" stroke-width="1.4" fill="none"/><rect x="8.5" y="12" width="3" height="3" fill="#F2B33D"/><rect x="6" y="15" width="8" height="2" rx="1" fill="#F2B33D"/></svg>',
    bolt:'<svg viewBox="0 0 20 20" width="13" height="13"><path d="M11 2L4 12h5l-1 6 8-11h-5l0-5z" fill="#fff"/></svg>',
    plus:'<svg viewBox="0 0 20 20" width="16" height="16"><line x1="10" y1="4" x2="10" y2="16" stroke="#fff" stroke-width="2" stroke-linecap="round"/><line x1="4" y1="10" x2="16" y2="10" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
    gear:'<svg viewBox="0 0 20 20" width="18" height="18"><circle cx="10" cy="10" r="2.6" stroke="#5B5347" stroke-width="1.4" fill="none"/><path d="M10 3v2M10 15v2M3 10h2M15 10h2M5 5l1.4 1.4M13.6 13.6L15 15M15 5l-1.4 1.4M6.4 13.6L5 15" stroke="#5B5347" stroke-width="1.4" stroke-linecap="round"/></svg>',
    crest:'<svg viewBox="0 0 20 20" width="18" height="18"><rect x="4" y="2" width="12" height="16" rx="2" fill="#3B3078"/><path d="M7 6h6M7 10h6M7 14h3" stroke="#F2B33D" stroke-width="1.2"/></svg>',
    copy:'<svg viewBox="0 0 16 16" width="13" height="13" style="margin-left:2px;"><rect x="5" y="5" width="8" height="8" rx="1.5" stroke="#B4AFA6" stroke-width="1.3" fill="none"/><rect x="3" y="3" width="8" height="8" rx="1.5" fill="#fff" stroke="#B4AFA6" stroke-width="1.3"/></svg>',
    refresh:'<svg viewBox="0 0 16 16" width="13" height="13"><path d="M3 8a5 5 0 019-3M13 8a5 5 0 01-9 3" stroke="#7B5EC7" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M11 3v2h-2M5 13v-2h2" stroke="#7B5EC7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>',
    chevronR:'<svg viewBox="0 0 16 16" width="14" height="14"><path d="M6 3l5 5-5 5" stroke="#B4AFA6" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart:'<svg viewBox="0 0 20 20" width="18" height="18"><path d="M10 17s-6.5-4-6.5-8.5A3.8 3.8 0 0110 6a3.8 3.8 0 016.5 2.5C16.5 13 10 17 10 17z" stroke="#8A8477" stroke-width="1.4" fill="none"/></svg>',
    bubble:'<svg viewBox="0 0 20 20" width="18" height="18"><path d="M3 9a6 6 0 016-6h2a6 6 0 016 6 6 6 0 01-6 6H8l-4 3v-3.6A6 6 0 013 9z" stroke="#8A8477" stroke-width="1.4" fill="none"/></svg>',
    fire:'<svg viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;"><path d="M8 1s3 3 3 6a3 3 0 11-6 0c0-1 .5-2 1-2.5C6.3 6 6 7 6.6 7.6 6 6.5 6.5 4 8 1z" fill="#E85B4E"/></svg>',
    people:'<svg viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;"><circle cx="6" cy="6" r="2.4" fill="#B4AFA6"/><circle cx="11" cy="6.5" r="2" fill="#D6D1C6"/><path d="M2 14c0-2.4 1.8-4 4-4s4 1.6 4 4" stroke="#B4AFA6" stroke-width="1.2" fill="none"/></svg>',
    diamond:'<svg viewBox="0 0 20 20" width="20" height="20"><path d="M4 8l6-5 6 5-6 9-6-9z" fill="#4A90D9"/></svg>',
    coin:'<svg viewBox="0 0 20 20" width="20" height="20"><circle cx="10" cy="10" r="8" fill="#F0B84C"/><circle cx="10" cy="10" r="5.4" fill="none" stroke="#C98B2E" stroke-width="1.2"/></svg>'
  };
  var NAV_ICONS = {
    home:'<svg viewBox="0 0 22 22" fill="none"><path d="M4 10l7-6 7 6v8a1 1 0 01-1 1h-4v-5H9v5H5a1 1 0 01-1-1v-8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    party:'<svg viewBox="0 0 22 22" fill="none"><rect x="2" y="7" width="18" height="9" rx="4" stroke="currentColor" stroke-width="1.6"/><line x1="7" y1="9.5" x2="7" y2="13.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><line x1="5" y1="11.5" x2="9" y2="11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="15" cy="10" r="1" fill="currentColor"/><circle cx="17.3" cy="12.3" r="1" fill="currentColor"/></svg>',
    moments:'<svg viewBox="0 0 22 22" fill="none"><rect x="2.5" y="4" width="17" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="7.5" cy="9" r="1.6" stroke="currentColor" stroke-width="1.4"/><path d="M3 15l5-4 4 3 3-3 4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/></svg>',
    chat:'<svg viewBox="0 0 22 22" fill="none"><path d="M3 10a7 7 0 017-7h2a7 7 0 010 14H8l-5 3v-3.8A7 7 0 013 10z" stroke="currentColor" stroke-width="1.6"/></svg>',
    profile:'<svg viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7.5" r="3.5" stroke="currentColor" stroke-width="1.6"/><path d="M4 19c0-3.6 3-6 7-6s7 2.4 7 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  };
  function renderBottomNav(elId, active){
    var items = [
      {k:'home',l:'首页'},{k:'party',l:'娱乐'},{k:'moments',l:'动态'},{k:'chat',l:'聊天'},{k:'profile',l:'我的'}
    ];
    document.getElementById(elId).innerHTML = items.map(function(it){
      return '<div class="bn-item'+(it.k===active?' on':'')+'" onclick="showScreen(\''+it.k+'\')">'+NAV_ICONS[it.k]+'<span>'+it.l+'</span></div>';
    }).join('');
  }

  function renderHome(){
    document.getElementById('ic-search-home').innerHTML = ICONS.search;
    document.getElementById('ic-trophy-home').innerHTML = ICONS.trophy;
    document.getElementById('ic-bolt-home').innerHTML = ICONS.bolt + '<span>快速下单</span>';
    var tiles = ['语音聊天','挂睡','英雄联盟','传说对决','激斗峡谷'];
    var tileBg = ['#4A90D9','#E85B6C','#2EBFB0','#9B6FE0','#F2A65A'];
    var rooms = [['说今天打......',false],['打ARAM-热血开战',true],['单排上分中',false]];
    var html = ''
      + '<div style="position:relative;height:150px;border-radius:16px;background:linear-gradient(135deg,#F2A65A,#E8834A);margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;color:#fff;font-size:13px;">'
      + '<span style="opacity:.85;">‹</span><span style="opacity:.7;">Banner 图片待补充</span><span style="opacity:.85;">›</span></div>'
      + '<div class="h-scroll" style="margin-bottom:16px;">'
      + '<div style="flex:none;width:230px;background:#4A90D9;border-radius:10px;padding:10px;color:#fff;display:flex;align-items:center;gap:8px;"><span style="background:rgba(255,255,255,.25);font-size:10px;padding:2px 6px;border-radius:4px;">公告</span><div class="avatar-round" style="width:24px;height:24px;background:#fff;color:#4A90D9;font-size:11px;">V</div><span style="font-size:12px;flex:1;">Vic Tan 完成 虚拟恋人订单</span><div style="width:26px;height:20px;background:rgba(255,255,255,.3);border-radius:4px;"></div></div>'
      + '<div style="flex:none;width:230px;background:#E85B8F;border-radius:10px;padding:10px;color:#fff;display:flex;align-items:center;gap:8px;"><span style="background:rgba(255,255,255,.25);font-size:10px;padding:2px 6px;border-radius:4px;">公告</span><div class="avatar-round" style="width:24px;height:24px;background:#fff;color:#E85B8F;font-size:14px;">🐼</div><span style="font-size:12px;flex:1;">胖达送礼 心动信号 x1111</span><div style="width:26px;height:20px;background:rgba(255,255,255,.3);border-radius:4px;"></div></div>'
      + '<div style="flex:none;width:230px;background:#7B5EC7;border-radius:10px;padding:10px;color:#fff;display:flex;align-items:center;gap:8px;"><span style="background:rgba(255,255,255,.25);font-size:10px;padding:2px 6px;border-radius:4px;">公告</span><div class="avatar-round" style="width:24px;height:24px;background:#fff;color:#7B5EC7;font-size:11px;">S</div><span style="font-size:12px;flex:1;">Sana 开启了新房间</span><div style="width:26px;height:20px;background:rgba(255,255,255,.3);border-radius:4px;"></div></div>'
      + '</div>'
      + '<div class="sec-title"><h5>大家都在玩</h5><span class="more">更多 ›</span></div>'
      + '<div class="h-scroll" style="margin-bottom:16px;">'
      + tiles.map(function(t,i){ return '<div style="flex:none;width:64px;text-align:center;"><div style="width:56px;height:56px;border-radius:16px;background:'+tileBg[i]+';margin:0 auto 6px;"></div><span style="font-size:11px;color:#5B5347;">'+t+'</span></div>'; }).join('')
      + '</div>'
      + '<div style="display:flex;gap:10px;margin-bottom:16px;">'
      + '<div style="flex:1;background:#E8544A;border-radius:12px;padding:14px;color:#fff;cursor:pointer;" onclick="openQuickOrder()"><div style="font-size:15px;font-weight:800;">Play</div><div style="font-size:12px;">快速下单</div></div>'
      + '<div style="flex:1;background:#E85B8F;border-radius:12px;padding:14px;color:#fff;"><div style="font-size:15px;font-weight:800;">Chat</div><div style="font-size:12px;">多人聊天</div></div>'
      + '</div>'
      + '<div class="sec-title"><h5>现在热播（房间直播）</h5><span class="more">更多 ›</span></div>'
      + '<div class="h-scroll">'
      + rooms.map(function(r){
          var tag = r[1] ? '<span style="position:absolute;top:6px;left:6px;background:#E8544A;color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;">热门推荐</span>' : '';
          return '<div style="flex:none;width:150px;"><div class="ph-block" style="position:relative;height:90px;border-radius:10px;">🎮'+tag+'</div><div style="font-size:12px;color:#5B5347;margin-top:6px;">'+r[0]+'</div></div>';
        }).join('')
      + '</div>';
    document.getElementById('home-scroll').innerHTML = html;
    renderBottomNav('home-bottomnav','home');
  }

  function renderParty(){
    document.getElementById('ic-search-party').innerHTML = ICONS.search;
    document.getElementById('ic-trophy-party').innerHTML = ICONS.trophy;
    document.getElementById('ic-bolt-party').innerHTML = ICONS.bolt + '<span>快速下單</span>';
    var featured = [['官方','官方派對'],['Official','Officail Party']];
    var rooms = [
      {title:'天使在身邊',tag:'情感相親',bg:'#F2A65A',extra:'🇺🇸',people:'99',fire:'211.9K'},
      {title:'戀愛培訓中心',tag:'趣味互動',bg:'#2EBFB0',extra:'🔒 私密派對',fire:'1'},
      {title:'高能量',tag:'遊戲陪玩',bg:'#9B6FE0',extra:'🏁',people:'1',fire:'123'},
      {title:'戀愛培訓中心',tag:'趣味互動',bg:'#2EBFB0',extra:'🔒 私密派對',fire:'1'},
      {title:'天使在身邊',tag:'情感相親',bg:'#F2A65A',extra:'🇺🇸',people:'99',fire:'211.9K'},
      {title:'高能量',tag:'遊戲陪玩',bg:'#9B6FE0',extra:'🏁',people:'1',fire:'123'}
    ];
    var html = ''
      + '<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;">'
      + '<span style="width:8px;height:8px;border-radius:50%;background:#4A90D9;flex:none;"></span>'
      + '<span style="font-size:12px;font-weight:700;color:#1B1330;">ON AIR 關注的朋友</span>'
      + '<div style="display:flex;margin-left:auto;">' + [1,2,3,4,5].map(function(){ return '<div class="avatar-round" style="width:26px;height:26px;margin-left:-8px;border:2px solid #F7F6F3;background:#DCE7D5;font-size:12px;">🐼</div>'; }).join('') + '</div>'
      + '<span style="font-size:11px;color:#8A8477;">+999</span>' + ICONS.chevronR
      + '</div>'
      + '<div style="display:flex;gap:10px;margin-bottom:14px;">'
      + featured.map(function(c){
          return '<div style="flex:1;border-radius:12px;overflow:hidden;background:#fff;cursor:pointer;" onclick="openPartyRoom(\''+c[1]+'\',\'官方\')">'
            + '<div class="ph-block" style="height:100px;position:relative;background:#BFD9A8;">🐼'
            + '<span style="position:absolute;top:6px;left:6px;background:#E8544A;color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;">'+c[0]+'</span>'
            + '<span style="position:absolute;top:6px;right:6px;">📢</span></div>'
            + '<div style="padding:8px;"><div style="font-size:13px;font-weight:700;color:#1B1330;margin-bottom:4px;">'+c[1]+'</div>'
            + '<div style="display:flex;align-items:center;gap:6px;font-size:11px;color:#8A8477;"><span style="background:#F1EEE9;padding:1px 5px;border-radius:4px;">🔊15"</span><span>+999</span><span style="margin-left:auto;">'+ICONS.fire+' 191.1K</span></div></div></div>';
        }).join('')
      + '</div>'
      + '<div style="height:90px;border-radius:12px;background:#F7D3C9;margin-bottom:16px;"></div>'
      + rooms.map(function(r){
          return '<div style="display:flex;gap:10px;background:#fff;border-radius:12px;padding:10px;margin-bottom:10px;cursor:pointer;" onclick="openPartyRoom(\''+r.title+'\',\''+r.tag+'\')">'
            + '<div class="ph-block" style="width:56px;height:56px;border-radius:10px;background:#BFD9A8;font-size:22px;">🐼</div>'
            + '<div style="flex:1;min-width:0;"><div style="font-size:13px;font-weight:700;color:#1B1330;margin-bottom:4px;">'+r.title+'</div>'
            + '<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;"><span style="background:'+r.bg+';color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;">'+r.tag+'</span><span style="font-size:11px;color:#8A8477;">'+r.extra+'</span><span style="background:#F1EEE9;font-size:10px;padding:1px 5px;border-radius:4px;color:#5B5347;">🔊15"</span></div></div>'
            + '<div style="text-align:right;flex:none;"><span style="background:#E8544A;color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;">公告</span>'
            + '<div style="font-size:11px;color:#8A8477;margin-top:6px;">'+(r.people ? ICONS.people+' '+r.people : '')+'</div>'
            + '<div style="font-size:11px;color:#8A8477;margin-top:2px;">'+ICONS.fire+' '+r.fire+'</div></div></div>';
        }).join('');
    document.getElementById('party-scroll').innerHTML = html;
    renderBottomNav('party-bottomnav','party');
  }

  function renderMoments(){
    document.getElementById('ic-search-moments').innerHTML = ICONS.search;
    document.getElementById('ic-trophy-moments').innerHTML = ICONS.trophy;
    document.getElementById('ic-plus-moments').innerHTML = ICONS.plus;
    var posts = [
      {name:'🌻米雪🌻', date:'20 Aug 2024', text:'字體xxxxxxxxxxxxxxxxx', full:true},
      {name:'Emico🍷🍸', date:'30 Jun', text:'I want to find a good boyfriend!!!', full:false}
    ];
    var html = posts.map(function(p, idx){
      var extra;
      if(p.full){
        extra = '<div style="height:170px;background:#EDEBE6;border-radius:10px;margin:10px 0;"></div>'
          + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:6px;">' + ICONS.heart + ICONS.bubble
          + '<span style="margin-left:auto;color:#E85B8F;font-size:12px;font-weight:600;">語言聊天 100/半小時</span></div>'
          + '<div style="font-size:11.5px;color:#B4AFA6;margin-bottom:10px;">誰誰誰... 共8人喜歡</div>'
          + '<div style="background:#F7F6F3;border-radius:10px;padding:10px;">'
          + '<div style="display:flex;align-items:center;gap:8px;"><div class="avatar-round" style="width:22px;height:22px;background:#F3D9A0;font-size:11px;">🌻</div><span style="font-size:12px;font-weight:700;color:#1B1330;">🌻米雪🌻</span><span style="margin-left:auto;font-size:11px;color:#8A8477;">♡ 12</span></div>'
          + '<div style="font-size:12px;color:#5B5347;margin:6px 0 4px;">字體xxxxxxxxxxxxxxxxx</div>'
          + '<div style="font-size:11.5px;color:#E85B8F;">查看全部8則回覆</div></div>';
      } else {
        extra = '<div style="height:120px;background:#EDEBE6;border-radius:10px;margin:10px 0;"></div>';
      }
      return '<div style="padding-bottom:18px;'+(idx>0?'border-top:8px solid #F7F6F3;padding-top:16px;':'')+'">'
        + '<div style="display:flex;align-items:center;gap:8px;">'
        + '<div class="avatar-round" style="width:36px;height:36px;background:#F3D9A0;font-size:16px;cursor:pointer;" onclick="openPlayerProfile(\''+p.name+'\')">🌻</div>'
        + '<div style="flex:1;cursor:pointer;" onclick="openPlayerProfile(\''+p.name+'\')"><div style="font-size:13px;font-weight:700;color:#1B1330;">'+p.name+'</div><div style="font-size:11px;color:#B4AFA6;">'+p.date+'</div></div>'
        + '<div style="border:1.3px solid #E85B8F;color:#E85B8F;font-size:11px;font-weight:700;padding:4px 12px;border-radius:14px;">關注</div>'
        + '<span style="color:#B4AFA6;padding:0 2px;">⋯</span></div>'
        + '<div style="font-size:13px;color:#5B5347;margin-top:8px;">'+p.text+'</div>' + extra + '</div>';
    }).join('');
    document.getElementById('moments-scroll').innerHTML = html;
    renderBottomNav('moments-bottomnav','moments');
  }

  function renderChat(){
    document.getElementById('ic-search-chat').innerHTML = ICONS.search;
    var cats = [{l:'官方公告',bg:'#F6D9C9',ic:'🎁',ch:'news'},{l:'活动讯息',bg:'#F5E3A8',ic:'📅',ch:'events'},{l:'抢单助理',bg:'#C7E8C0',ic:'⚡',ch:'grab'},{l:'訊息通知',bg:'#C9DCF2',ic:'🔔',ch:'notify'},{l:'誰偷窺我',bg:'#E4D6EC',ic:'👀',ch:'peek'}];
    var chats = [
      {av:'😊',bg:'#F3D9A0',name:'Emico🍷🍸',player:'Emico🍷🍸',date:'30 Jun',msg:'I want to find a good boyfriend!!!',unread:1},
      {av:'📅',bg:'#F5E3A8',name:'活動訊息',badge:true,ch:'events',date:'30 Jun',msg:'I want to find a good boyfriend!!!',unread:1},
      {av:'🔔',bg:'#C9DCF2',name:'訊息通知',badge:true,ch:'notify',date:'30 Jun',msg:'I want to find a good boyfriend!!!',unread:1},
      {av:'🌻',bg:'#F3D9A0',name:'🌻米雪🌻',player:'🌻米雪🌻',date:'20 Aug 2024',msg:'人家想要玩遊戲，約嗎？'},
      {av:'😊',bg:'#F3D9A0',name:'Emico🍷🍸',player:'Emico🍷🍸',date:'30 Jun',msg:'I want to find a good boyfriend!!!',unread:1,tag:'正在派對中'},
      {av:'🎁',bg:'#F6D9C9',name:'官方公告',badge:true,ch:'news',date:'30 Jun',msg:'I want to find a good boyfriend!!!',unread:1}
    ];
    var html = '<div style="display:flex;justify-content:space-between;margin-bottom:16px;">'
      + cats.map(function(c){ return '<div style="text-align:center;flex:1;cursor:pointer;" onclick="openChannel(\''+c.ch+'\')"><div style="width:44px;height:44px;border-radius:50%;background:'+c.bg+';display:flex;align-items:center;justify-content:center;font-size:18px;margin:0 auto 6px;">'+c.ic+'</div><span style="font-size:11px;color:#5B5347;">'+c.l+'</span></div>'; }).join('')
      + '</div>'
      + chats.map(function(c){
          var clickAttr = c.ch ? ' onclick="openChannel(\''+c.ch+'\')"' : (c.player ? ' onclick="openPlayerProfile(\''+c.player+'\')"' : '');
          var cursorStyle = (c.ch || c.player) ? 'cursor:pointer;' : '';
          var intimacyBadge = c.player ? '<span style="color:#E8544A;font-size:10.5px;margin-left:6px;">❤ '+PLAYER_INTIMACY[c.player]+'</span>' : '';
          return '<div'+clickAttr+' style="display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid #F1EEE9;'+cursorStyle+'">'
            + '<div class="avatar-round" style="width:42px;height:42px;background:'+c.bg+';font-size:18px;">'+c.av+'</div>'
            + '<div style="flex:1;min-width:0;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:13px;font-weight:700;color:#1B1330;">'+c.name+'</span>'
            + (c.badge ? '<span style="background:#E8544A;color:#fff;font-size:9px;padding:1px 5px;border-radius:3px;">官方</span>' : '')
            + intimacyBadge
            + '<span style="margin-left:auto;font-size:11px;color:#B4AFA6;">'+c.date+'</span></div>'
            + '<div style="font-size:12px;color:#8A8477;margin-top:3px;">'+c.msg+'</div>'
            + (c.tag ? '<span style="display:inline-block;margin-top:4px;background:#4A90D9;color:#fff;font-size:10px;padding:2px 8px;border-radius:10px;">'+c.tag+'</span>' : '')
            + '</div>'
            + (c.unread ? '<span style="background:#E8544A;color:#fff;font-size:10px;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px;">'+c.unread+'</span>' : '')
            + '</div>';
        }).join('');
    document.getElementById('chat-scroll').innerHTML = html;
    renderBottomNav('chat-bottomnav','chat');
  }

  function renderProfile(){
    document.getElementById('ic-crest-profile').innerHTML = ICONS.crest;
    document.getElementById('ic-gear-profile').innerHTML = ICONS.gear;
    var quick = [['💰','我的钱包'],['📋','订单中心'],['🏷️','折价券'],['🔳','邀请码']];
    var center = [['🖼️','我的相簿'],['🎭','装扮中心'],['📝','我的任务'],['🛋️','开房间'],['👥','小队'],['🛡️','公会'],['⭐','收藏展示'],['📊','直播数据']];
    var safety = [['🔔','通知设定'],['🎚️','隐私设定'],['🎧','客服中心'],['🎮','成为陪玩师']];
    var html = ''
      + '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">'
      + '<div style="position:relative;"><div class="avatar-round" style="width:56px;height:56px;background:#D9534F;font-size:22px;">🧑</div><div style="position:absolute;left:-4px;bottom:-4px;background:#fff;border-radius:50%;padding:2px;">'+ICONS.refresh+'</div></div>'
      + '<div style="flex:1;"><div style="display:flex;align-items:center;gap:6px;"><span style="font-size:16px;font-weight:800;color:#1B1330;">Caleb Ting</span><span style="background:#4A90D9;color:#fff;font-size:10px;padding:1px 6px;border-radius:8px;">♂20</span></div>'
      + '<div style="display:flex;align-items:center;gap:2px;font-size:11.5px;color:#8A8477;margin-top:3px;"><span>ID dktingcaleb</span>'+ICONS.copy+'</div></div>'
      + ICONS.chevronR + '</div>'
      + '<div style="display:flex;justify-content:space-between;text-align:center;margin-bottom:16px;">'
      + '<div style="flex:1;cursor:pointer;" onclick="openLevelRank(\'level\')"><div style="font-size:11px;color:#8A8477;">我的等级</div><div style="font-size:13px;font-weight:700;color:#1B1330;margin-top:2px;">—</div></div>'
      + '<div style="flex:1;cursor:pointer;" onclick="openLevelRank(\'rank\')"><div style="font-size:11px;color:#8A8477;">我的段位 ⓘ</div><div style="font-size:13px;font-weight:700;color:#1B1330;margin-top:2px;">—</div></div>'
      + '<div style="flex:1;"><div style="font-size:11px;color:#8A8477;">我的粉丝</div><div style="font-size:13px;font-weight:700;color:#E8544A;margin-top:2px;">999,123</div></div>'
      + '<div style="flex:1;"><div style="font-size:11px;color:#8A8477;">我的关注</div><div style="font-size:13px;font-weight:700;color:#1B1330;margin-top:2px;">11,321</div></div>'
      + '<div style="flex:1;"><div style="font-size:11px;color:#8A8477;">最近来访</div><div style="font-size:13px;font-weight:700;color:#1B1330;margin-top:2px;">1,331</div></div>'
      + '</div>'
      + '<div style="background:linear-gradient(90deg,#2E2A5C,#4B3F8C);border-radius:12px;padding:12px 14px;display:flex;align-items:center;color:#F2C879;margin-bottom:14px;cursor:pointer;" onclick="openNobility()">'
      + '<span style="font-size:12.5px;font-weight:700;flex:1;">FindPlayPal贵族享专属特权</span><span style="font-size:11px;color:#D8CFF0;margin-right:4px;">未获得</span>'+ICONS.chevronR+'</div>'
      + '<div style="display:flex;gap:10px;margin-bottom:16px;">'
      + '<div style="flex:1;background:#E9F1FB;border-radius:12px;padding:12px;display:flex;align-items:center;gap:8px;cursor:pointer;" onclick="openWallet()">'+ICONS.diamond+'<div style="flex:1;"><div style="font-size:11px;color:#5B7DA6;">蓝钻余额</div><div style="font-size:14px;font-weight:800;color:#1B1330;">1,369</div></div>'+ICONS.chevronR+'</div>'
      + '<div style="flex:1;background:#FBF0DE;border-radius:12px;padding:12px;display:flex;align-items:center;gap:8px;">'+ICONS.coin+'<div style="flex:1;"><div style="font-size:11px;color:#A6803E;">金币余额</div><div style="font-size:14px;font-weight:800;color:#1B1330;">123,456,789</div></div>'+ICONS.chevronR+'</div>'
      + '</div>'
      + '<div style="display:flex;justify-content:space-between;margin-bottom:18px;">'
      + quick.map(function(g){ var oc = g[1]==='我的钱包' ? ' onclick="openWallet()"' : ''; var cur = g[1]==='我的钱包' ? 'cursor:pointer;' : ''; return '<div'+oc+' style="text-align:center;flex:1;'+cur+'"><div style="font-size:22px;">'+g[0]+'</div><div style="font-size:11px;color:#5B5347;margin-top:4px;">'+g[1]+'</div></div>'; }).join('')
      + '</div>'
      + '<div class="sec-title" style="margin-top:4px;"><h5>个人中心</h5></div>'
      + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px 0;margin-bottom:10px;">'
      + center.map(function(g){ var target = g[1]==='我的任务' ? "showScreen('tasks')" : (g[1]==='开房间' ? 'openPartySetup()' : (g[1]==='我的相簿' ? "openAlbum('own')" : (g[1]==='装扮中心' ? 'openAvatarScreen()' : (g[1]==='小队' ? 'openSquadList()' : (g[1]==='公会' ? 'openGuildList()' : ''))))); var oc = target ? ' onclick="'+target+'"' : ''; var cur = target ? 'cursor:pointer;' : ''; return '<div'+oc+' style="text-align:center;'+cur+'"><div style="font-size:22px;">'+g[0]+'</div><div style="font-size:11px;color:#5B5347;margin-top:4px;">'+g[1]+'</div></div>'; }).join('')
      + '</div>'
      + '<div class="sec-title"><h5>服务与安全</h5></div>'
      + '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px 0;">'
      + safety.map(function(g){ return '<div style="text-align:center;"><div style="font-size:22px;">'+g[0]+'</div><div style="font-size:11px;color:#5B5347;margin-top:4px;">'+g[1]+'</div></div>'; }).join('')
      + '</div>';
    document.getElementById('profile-scroll').innerHTML = html;
    renderBottomNav('profile-bottomnav','profile');
  }

  var TIERS = [
    {min:0, label:'陌生人'},
    {min:3000, label:'遊戲隊友'},
    {min:6000, label:'貼心夥伴'},
    {min:9000, label:'親密知己'},
    {min:10000, label:'心動伴侶'}
  ];
  var ALBUM_THRESH = [0, 3000, 6000, 10000];
  var PLAYER_INTIMACY = { '🌻米雪🌻': 6000, 'Emico🍷🍸': 1500 };
  var PLAYERS = {
    '🌻米雪🌻': { avatar:'🌻', avatarBg:'#F3D9A0', following:true, blocked:false, inParty:{name:'Caleb Ting'} },
    'Emico🍷🍸': { avatar:'😊', avatarBg:'#F3D9A0', following:false, blocked:false, inParty:null }
  };
  function tierInfo(v){
    var t = TIERS[0];
    for(var i=0;i<TIERS.length;i++){ if(v >= TIERS[i].min) t = TIERS[i]; }
    return t;
  }
  function heartsHtml(v){
    var filled = Math.min(10, Math.floor(v/1000));
    var out = '';
    for(var i=0;i<10;i++){ out += '<span style="color:'+(i<filled?'#E8544A':'#E3DFD3')+';font-size:14px;">❤</span>'; }
    return out;
  }

  renderHome();
  renderParty();
  renderMoments();
  renderChat();
  renderProfile();

  /* ---------- tasks ---------- */
  var CHEST_SVG = '<svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M3 10a9 6 0 0118 0" fill="#5A93D6"/><rect x="3" y="10" width="18" height="9" rx="2" fill="#9C6A3A"/><rect x="3" y="10" width="18" height="4" fill="#7A4E28"/><rect x="10" y="9" width="4" height="5" rx="1" fill="#F2C879"/></svg>';

  var DAILY_TASKS = [
    {title:'每日登录', desc:'每日登入 Find Play Pal 1次', pts:10, done:false},
    {title:'小队聊天', desc:'在小队聊天中聊天1次', pts:10, done:false},
    {title:'获得小队经验值', desc:'从小队中获得300经验值', pts:25, done:false},
    {title:'使用任意技能', desc:'使用任意技能1次', pts:10, done:false},
    {title:'使用攻击技能', desc:'对任意玩家使用攻击技能1次', pts:20, done:false},
    {title:'使用表情技能', desc:'对任意玩家使用表情技能1次', pts:20, done:false}
  ];
  var activeVal = 15;
  var CHEST_POS = [8,36,64,92];
  var CHEST_LBL = [10,40,70,100];

  var ACHV_TASKS = [
    {title:'登入第1天', desc:'登入 Find Play Pal 第1天', reward:'宝箱 x1', prog:null, state:'chest'},
    {title:'登入365天', desc:'累计登入 Find Play Pal 365天', reward:'宝箱 x1', prog:[120,365], state:'todo'},
    {title:'攻击10次', desc:'对任意玩家使用攻击技能10次', reward:'宝箱 x1', prog:[5,10], state:'todo'},
    {title:'辅助10次', desc:'对任意玩家使用辅助技能10次', reward:'宝箱 x1', prog:[5,10], state:'todo'},
    {title:'增益10次', desc:'对任意玩家使用增益技能10次', reward:'宝箱 x1', prog:[5,10], state:'todo'},
    {title:'全副武装', desc:'装备齐全（从头到脚）', reward:'宝箱 x1', prog:null, state:'todo'},
    {title:'等级到达5级', desc:'玩家等级到达5级', reward:'宝箱 x1', prog:[5,10], state:'todo'}
  ];
  var achvCount = 1;

  function setTaskTab(tab){
    document.getElementById('ttab-daily').classList.toggle('on', tab==='daily');
    document.getElementById('ttab-achv').classList.toggle('on', tab==='achv');
    document.getElementById('panel-daily').classList.toggle('on', tab==='daily');
    document.getElementById('panel-achv').classList.toggle('on', tab==='achv');
  }

  function renderDailyBar(){
    document.getElementById('active-val').textContent = activeVal;
    var pct = Math.min(100, (activeVal/200)*100);
    document.getElementById('daily-fill').style.width = pct+'%';
    document.getElementById('daily-knob').style.left = pct+'%';
    var track = document.getElementById('daily-track');
    var markers = CHEST_POS.map(function(pos, i){
      var lit = pct >= pos ? ' lit' : '';
      return '<div class="chest-marker'+lit+'" style="left:'+pos+'%;"><div class="cicon" style="width:22px;height:22px;margin:0 auto;">'+CHEST_SVG+'</div><span class="lbl">'+CHEST_LBL[i]+'</span></div>';
    }).join('');
    track.querySelectorAll('.chest-marker').forEach(function(m){ m.remove(); });
    track.insertAdjacentHTML('beforeend', markers);
  }

  function renderDailyList(){
    var html = DAILY_TASKS.map(function(t, idx){
      var cls = t.done ? 'task-card done' : 'task-card';
      var btn = t.done
        ? '<div class="t-btn done">已完成</div>'
        : '<div class="t-btn act" onclick="completeDaily('+idx+')">去完成</div>';
      return '<div class="'+cls+'">'
        + '<div class="t-title">'+t.title+'</div>'
        + '<div class="t-desc">'+t.desc+'</div>'
        + '<div class="t-reward">活跃值 +'+t.pts+'</div>'
        + btn + '</div>';
    }).join('');
    document.getElementById('daily-list').innerHTML = html;
  }
  function completeDaily(idx){
    var t = DAILY_TASKS[idx];
    if(t.done) return;
    t.done = true;
    activeVal += t.pts;
    renderDailyBar();
    renderDailyList();
  }

  function renderAchvList(){
    document.getElementById('achv-count').textContent = achvCount;
    var html = ACHV_TASKS.map(function(t, idx){
      var progHtml = t.prog ? '<span class="prog">('+t.prog[0]+'/'+t.prog[1]+')</span>' : '';
      if(t.state === 'done'){
        return '<div class="task-card done"><div class="t-title">'+t.title+progHtml+'</div><div class="t-desc">'+t.desc+'</div><div class="t-reward">奖励 已领取</div><div class="t-btn done">已完成</div></div>';
      }
      if(t.state === 'chest'){
        return '<div class="task-card"><div class="t-title">'+t.title+progHtml+'</div><div class="t-desc">'+t.desc+'</div><div class="t-reward">奖励 '+t.reward+'</div><div class="t-chest-btn" onclick="claimAchv('+idx+')">'+CHEST_SVG+'</div></div>';
      }
      return '<div class="task-card"><div class="t-title">'+t.title+progHtml+'</div><div class="t-desc">'+t.desc+'</div><div class="t-reward">奖励 '+t.reward+'</div><div class="t-btn act" onclick="advanceAchv('+idx+')">去完成</div></div>';
    }).join('');
    document.getElementById('achv-list').innerHTML = html;
  }
  function advanceAchv(idx){
    var t = ACHV_TASKS[idx];
    if(t.state !== 'todo') return;
    t.state = 'chest';
    achvCount += 1;
    renderAchvList();
  }
  function claimAchv(idx){
    var t = ACHV_TASKS[idx];
    if(t.state !== 'chest') return;
    t.state = 'done';
    renderAchvList();
  }

  renderDailyBar();
  renderDailyList();
  renderAchvList();
  setTaskTab('daily');

  /* ---------- chat channels ---------- */
  var CHANNELS = {
    news:{title:'官方公告', empty:true},
    events:{title:'活動訊息', empty:true},
    notify:{title:'訊息通知', empty:true},
    peek:{title:'誰偷窺我', empty:true},
    grab:{title:'搶單助理', empty:false}
  };
  function openChannel(id){
    var c = CHANNELS[id];
    if(!c) return;
    document.getElementById('channel-title-text').textContent = c.title;
    var body = document.getElementById('channel-body');
    if(id === 'events'){
      body.innerHTML = '<div style="background:#fff;border-radius:12px;overflow:hidden;cursor:pointer;box-shadow:0 1px 4px rgba(0,0,0,.06);" onclick="openActivityDetail(\'channel\')">'
        + '<div style="height:90px;background:#3F9C97;display:flex;align-items:center;justify-content:center;font-size:34px;">🌻</div>'
        + '<div style="padding:12px 14px;"><div style="font-weight:700;font-size:13.5px;color:#1B1330;">夏日風情｜送禮訂單領限定裝扮</div>'
        + '<div style="font-size:11px;color:#B4AFA6;margin-top:4px;">2023.06.01 - 06.07　點擊查看活動詳情 ›</div></div></div>';
    } else if(c.empty){
      body.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:90px 24px;text-align:center;color:#B4AFA6;">'
        + '<div style="font-size:40px;margin-bottom:14px;">📭</div>'
        + '<div style="font-size:13px;">暂无最新消息</div>'
        + '<div style="font-size:11px;margin-top:6px;color:#C9C3B6;">这个频道你还没给具体内容，等你发过来我再补上</div>'
        + '</div>';
    } else {
      body.innerHTML = grabHtml();
    }
    showScreen('channel');
  }
  function grabBtnHtml(){
    return '<div style="margin-top:10px;"><span class="grab-btn" onclick="openQuickOrder()">前往搶單</span></div>';
  }
  function grabMsg(lines){
    return '<div style="display:flex;gap:10px;margin-bottom:6px;">'
      + '<div style="flex:none;width:32px;height:32px;border-radius:50%;background:#DCEFD8;display:flex;align-items:center;justify-content:center;font-size:15px;">⚡</div>'
      + '<div style="flex:1;background:#fff;border-radius:12px;padding:14px;font-size:13px;color:#3E2A1E;line-height:1.8;">'
      + '<div style="font-weight:700;margin-bottom:4px;">⚡⚡⚡有符合您的派單⚡⚡⚡</div>'
      + '趕快到【快速下單】進行搶單吧！<br>' + lines.join('<br>')
      + grabBtnHtml() + '</div></div>';
  }
  function grabHtml(){
    return ''
      + '<div style="background:#fff;border-radius:12px;padding:16px;margin-bottom:16px;font-size:13px;color:#3E2A1E;line-height:2;">'
      + '數量：1<br>等級：白金<br>性別：不限'
      + grabBtnHtml() + '</div>'
      + '<div style="text-align:center;font-size:11px;color:#B4AFA6;margin-bottom:10px;">20 Jul, 12:25 pm</div>'
      + grabMsg(['特技項目：王者榮耀','單價：300/半小時','數量：1','等級：白金','性別：女'])
      + '<div style="text-align:center;font-size:11px;color:#B4AFA6;margin:14px 0 10px;">Mon, 1:31 am</div>'
      + grabMsg(['特技項目：王者榮耀','單價：300/半小時','數量：1','等級：白金','性別：不限']);
  }

  /* ---------- post moment ---------- */
  var postText = '';
  var postPhotos = [];
  var photoPickerTarget = 'post';
  var PHOTO_TILES = [['🐲','#F2A65A'],['🐴','#C9BFA8'],['🎮','#7B5EC7'],['🏞️','#8FBF7F'],['🌄','#E8A0A8'],['🐲','#E8834A'],['🐴','#B8AC94'],['🎮','#6C4CF0'],['🏞️','#79A86A'],['🌄','#E85B8F'],['🐲','#F0B84C'],['🐴','#A79C8C']];

  function openPostMoment(){
    document.getElementById('post-text').value = postText;
    updatePostCounter();
    renderPhotoRow();
    document.getElementById('pm-modal').style.display = 'none';
    showScreen('post-moment');
  }
  function updatePostCounter(){
    var v = document.getElementById('post-text').value;
    postText = v;
    document.getElementById('post-counter').textContent = v.length + '/1000';
  }
  function renderPhotoRow(){
    var html = postPhotos.map(function(p, idx){
      return '<div class="photo-thumb" style="background:'+p[1]+';">'+p[0]+'<div class="rm" onclick="removePhoto('+idx+')">✕</div></div>';
    }).join('');
    if(postPhotos.length < 9){
      html += '<div class="photo-add" onclick="openPhotoPicker()">+</div>';
    }
    document.getElementById('photo-row').innerHTML = html;
  }
  function removePhoto(idx){ postPhotos.splice(idx,1); renderPhotoRow(); }

  function openPhotoPicker(target){
    photoPickerTarget = target || 'post';
    var html = PHOTO_TILES.map(function(t,i){
      return '<div class="pp-item" style="background:'+t[1]+';" onclick="pickPhoto('+i+')">'+t[0]+'</div>';
    }).join('');
    document.getElementById('pp-grid').innerHTML = html;
    showScreen('photo-picker');
  }
  function backFromPicker(){
    if(photoPickerTarget === 'cover' || photoPickerTarget === 'background'){
      showScreen('party-setup');
    } else if(photoPickerTarget === 'note'){
      showScreen('public-note');
    } else {
      showScreen('post-moment');
    }
  }
  function pickPhoto(i){
    var tile = PHOTO_TILES[i];
    if(photoPickerTarget === 'cover'){
      partySetup.cover = tile;
      renderPartySetup();
      showScreen('party-setup');
      return;
    }
    if(photoPickerTarget === 'background'){
      partySetup.background = tile;
      renderPartySetup();
      showScreen('party-setup');
      return;
    }
    if(photoPickerTarget === 'note'){
      pnPhoto = tile;
      renderPnPhoto();
      showScreen('public-note');
      return;
    }
    if(postPhotos.length >= 9) return;
    postPhotos.push(tile);
    renderPhotoRow();
    showScreen('post-moment');
  }

  function tryLeavePost(){
    if(postText.trim().length > 0 || postPhotos.length > 0){
      document.getElementById('pm-modal').style.display = 'flex';
    } else {
      showScreen('moments');
    }
  }
  function discardPost(){
    postText = '';
    postPhotos = [];
    document.getElementById('post-text').value = '';
    document.getElementById('pm-modal').style.display = 'none';
    showScreen('moments');
  }
  function savePostDraft(){
    document.getElementById('pm-modal').style.display = 'none';
    showScreen('moments');
  }
  function submitPost(){
    postText = '';
    postPhotos = [];
    document.getElementById('post-text').value = '';
    showScreen('moments');
  }

  /* ---------- party setup ---------- */
  var partySetup = {
    cover: null, title: '', category: 'normal', mode: 'multi',
    theme: '', language: '', funLabel: '', mic: 'admin',
    countdown: 0, permission: 'public', privateParty: false,
    password: '', pwVisible: false, admins: 0, background: null
  };
  var funSettings = { micBar:false, dice:false, publicNote:false, privateNote:false, barCap:10000 };

  function openPartySetup(){
    partySetup = {
      cover: null, title: '', category: 'normal', mode: 'multi',
      theme: '', language: '', funLabel: '', mic: 'admin',
      countdown: 0, permission: 'public', privateParty: false,
      password: '', pwVisible: false, admins: 0, background: null
    };
    funSettings = { micBar:false, dice:false, publicNote:false, privateNote:false, barCap:10000 };
    renderPartySetup();
    showScreen('party-setup');
  }
  function setPSField(field, value){ partySetup[field] = value; renderPartySetup(); }
  function togglePrivate(){ partySetup.privateParty = !partySetup.privateParty; renderPartySetup(); }
  function togglePwVisible(){ partySetup.pwVisible = !partySetup.pwVisible; renderPartySetup(); }
  function adjustCountdown(delta){ partySetup.countdown = Math.max(0, partySetup.countdown + delta); renderPartySetup(); }
  function syncPartyTitle(){
    var v = document.getElementById('ps-title-input').value;
    partySetup.title = v;
    document.getElementById('ps-title-count').textContent = v.length + '/30';
    var btn = document.getElementById('ps-submit-btn');
    if(v.trim().length > 0){ btn.classList.add('ready'); } else { btn.classList.remove('ready'); }
  }
  function syncPartyPassword(){ partySetup.password = document.getElementById('ps-pw-input').value; }

  var SEG = {
    category:[['normal','普通'],['official','官方'],['guild','公會']],
    mode:[['multi','多人'],['four','四人'],['single','單人']],
    mic:[['free','自由'],['admin','管理員批准']],
    permission:[['public','公開'],['friends','好友']]
  };
  function segRow(field, label){
    return '<div class="ps-row" style="cursor:default;"><div class="psl">'+label+'</div><div class="seg-row">'
      + SEG[field].map(function(o){
          return '<div class="seg-btn'+(partySetup[field]===o[0]?' on':'')+'" onclick="setPSField(\''+field+'\',\''+o[0]+'\')">'+o[1]+'</div>';
        }).join('')
      + '</div></div>';
  }

  function renderPartySetup(){
    var coverInner = partySetup.cover
      ? '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:30px;background:'+partySetup.cover[1]+';">'+partySetup.cover[0]+'</div><div class="rm" onclick="event.stopPropagation();setPSField(\'cover\',null)">✕</div>'
      : '<span class="plus">⊕</span><span>上傳封面</span>';
    var funText = funSettings.micBar || funSettings.dice || funSettings.publicNote || funSettings.privateNote
      ? [funSettings.micBar?'麥位血條ON':'', funSettings.dice?'骰子ON':'', funSettings.publicNote?'麥位公開筆記ON':'', funSettings.privateNote?'麥位私密筆記ON':''].filter(Boolean).join(' ')
      : '點擊選擇';
    var bgInner = partySetup.background
      ? '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:34px;background:'+partySetup.background[1]+';">'+partySetup.background[0]+'</div><div class="rm" onclick="event.stopPropagation();setPSField(\'background\',null)">✕</div>'
      : '<span class="plus">⊕</span><span>自定義背景</span>';

    var html = ''
      + '<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:18px;">'
      + '<div class="ps-cover" onclick="openPhotoPicker(\'cover\')">'+coverInner+'</div>'
      + '<div class="ps-title-row"><div class="ps-title-top"><span>派對標題</span><span id="ps-title-count">'+partySetup.title.length+'/30</span></div>'
      + '<input class="ps-title-input" id="ps-title-input" maxlength="30" placeholder="為您的派對取個好的標題" value="'+partySetup.title+'" oninput="syncPartyTitle()">'
      + '</div></div>'
      + '<div class="seg-row" style="margin-bottom:16px;">' + SEG.category.map(function(o){ return '<div class="seg-btn'+(partySetup.category===o[0]?' on':'')+'" onclick="setPSField(\'category\',\''+o[0]+'\')">'+o[1]+'</div>'; }).join('') + '</div>'
      + '<div class="ps-row" onclick="openFunSettings()"><div class="psl">趣味設定</div><div class="psv">'+funText+' ›</div></div>'
      + segRow('mode','派對模式')
      + '<div class="ps-row" onclick="openTagPicker(\'theme\')"><div class="psl">主題類型</div><div class="psv">'+(partySetup.theme||'點擊選擇')+' ›</div></div>'
      + '<div class="ps-row" onclick="openTagPicker(\'lang\')"><div class="psl">語言</div><div class="psv">'+(partySetup.language||'點擊選擇')+' ›</div></div>'
      + '<div class="ps-row" onclick="goPlaceholder(\'公告編輯\',\'這裡會是公告文字/圖片/語音編輯頁，等對應設計稿確認後再補齊。\')"><div class="psl">公告</div><div class="psv">點擊添加 ›</div></div>'
      + segRow('mic','上麥設定')
      + '<div class="ps-row" style="cursor:default;"><div class="psl">設定倒計時</div><div class="stepper">'
      + '<div class="step-btn" onclick="adjustCountdown(-5)">–</div><div class="step-val">'+(partySetup.countdown===0?'∞':partySetup.countdown+'分鐘')+'</div><div class="step-btn" onclick="adjustCountdown(5)">+</div>'
      + '</div></div>'
      + segRow('permission','派對權限')
      + '<div class="ps-toggle-row"><div class="ps-toggle-top"><div><div class="psl">私密派對</div><div class="ps-desc">開啟私密派對，進入派對的用戶需輸入密碼</div></div><div class="tgl'+(partySetup.privateParty?' on':'')+'" onclick="togglePrivate()"><div class="kn"></div></div></div></div>'
      + '<div class="ps-row" style="cursor:default;flex-direction:column;align-items:stretch;gap:6px;"><div class="psl">設定密碼</div>'
      + '<div style="display:flex;align-items:center;gap:8px;position:relative;">'
      + '<input class="ps-pw-input" id="ps-pw-input" type="'+(partySetup.pwVisible?'text':'password')+'" placeholder="請輸入密碼" value="'+partySetup.password+'" oninput="syncPartyPassword()">'
      + '<span style="position:absolute;right:10px;cursor:pointer;" onclick="togglePwVisible()">'+(partySetup.pwVisible?'🙈':'👁')+'</span></div>'
      + '<div style="font-size:11px;color:#E8544A;">請輸入 4~6 個字元，可混合使用英文和數字</div></div>'
      + '<div class="ps-row" onclick="goPlaceholder(\'管理員\',\'這裡會是管理員列表/新增管理員頁，等對應設計稿確認後再補齊。\')"><div class="psl">管理員</div><div class="psv">'+partySetup.admins+'/10 ›</div></div>'
      + '<div style="padding:14px 0;"><span class="ps-link" onclick="goPlaceholder(\'邀請朋友\',\'這裡會是邀請朋友分享頁，等對應設計稿確認後再補齊。\')">邀請朋友</span></div>'
      + '<div style="font-size:13.5px;font-weight:700;color:#1B1330;margin-bottom:10px;">自定義背景</div>'
      + '<div class="ps-bg-box" onclick="openPhotoPicker(\'background\')">'+bgInner+'</div>'
      + '<div style="height:70px;"></div>';
    document.getElementById('ps-body').innerHTML = html
      + '<div class="ps-submit"><button id="ps-submit-btn" class="'+(partySetup.title.trim()?'ready':'')+'" onclick="completePartySetup()">完成設定</button></div>';
  }
  function completePartySetup(){
    if(!partySetup.title.trim()) return;
    openPartyRoom(partySetup.title, partySetup.theme || '普通', partySetup.cover);
  }

  /* ---------- theme / language tag picker ---------- */
  var TAG_DATA = {
    theme:{title:'主題類型', sub:'請選擇一個類型', options:['恋爱脑粉碎机','闲聊小酒馆','娱乐热搜站','陪玩大联机','麦上脱口秀','深夜树洞','零食大作战','深夜怪谈','吐槽便利店','知识小课堂','恋爱模拟器','乐器小屋','虚拟旅行','次元聊天室','职场八卦局','自定義']},
    lang:{title:'語言', sub:'請選擇一個語言', options:['English','繁體中文','簡體中文','Malay','Indonesia','Thai','Filipino','Vietnamese','Burmese','Khmer','Lao','Portuguese','Tetun','Global']}
  };
  var currentTagKind = 'theme';
  function openTagPicker(kind){
    currentTagKind = kind;
    var d = TAG_DATA[kind];
    document.getElementById('tag-picker-title').textContent = d.title;
    document.getElementById('tag-picker-sub').textContent = d.sub;
    var current = kind === 'theme' ? partySetup.theme : partySetup.language;
    document.getElementById('tag-picker-list').innerHTML = d.options.map(function(o){
      return '<div class="tag-chip'+(o===current?' on':'')+'" onclick="selectTag(\''+o+'\')">'+o+'</div>';
    }).join('');
    showScreen('tag-picker');
  }
  function selectTag(label){
    if(currentTagKind === 'theme'){ partySetup.theme = label; } else { partySetup.language = label; }
    renderPartySetup();
    showScreen('party-setup');
  }

  /* ---------- fun settings ---------- */
  function openFunSettings(){ renderFunSettings(); showScreen('fun-settings'); }
  function toggleFun(key){ funSettings[key] = !funSettings[key]; renderFunSettings(); }
  function adjustBarCap(delta){ funSettings.barCap = Math.max(0, funSettings.barCap + delta); renderFunSettings(); }
  function renderFunSettings(){
    var html = ''
      + '<div class="ps-toggle-row"><div class="ps-toggle-top"><div><div class="psl">啟用麥位血條</div><div class="ps-desc">給每個麥位添加血條，在麥位上的用戶可以使用技能改變血條</div></div><div class="tgl'+(funSettings.micBar?' on':'')+'" onclick="toggleFun(\'micBar\')"><div class="kn"></div></div></div></div>'
      + '<div class="ps-row" style="cursor:default;"><div class="psl">默認血條上限</div><div class="stepper"><div class="step-btn" onclick="adjustBarCap(-1000)">–</div><div class="step-val">'+funSettings.barCap+'</div><div class="step-btn" onclick="adjustBarCap(1000)">+</div></div></div>'
      + '<div class="ps-toggle-row"><div class="ps-toggle-top"><div><div class="psl">啟用骰子<span style="color:#E8544A;">給所有人</span></div></div><div class="tgl'+(funSettings.dice?' on':'')+'" onclick="toggleFun(\'dice\')"><div class="kn"></div></div></div></div>'
      + '<div class="ps-toggle-row"><div class="ps-toggle-top"><div><div class="psl">啟用麥位公開筆記</div><div class="ps-desc">給每個麥位添加筆記和上傳一張圖，以便記錄公開信息</div></div><div class="tgl'+(funSettings.publicNote?' on':'')+'" onclick="toggleFun(\'publicNote\')"><div class="kn"></div></div></div></div>'
      + '<div class="ps-toggle-row"><div class="ps-toggle-top"><div><div class="psl">啟用麥位私密筆記</div><div class="ps-desc">給每個麥位添加筆記和上傳一張圖，以便記錄隱藏信息</div></div><div class="tgl'+(funSettings.privateNote?' on':'')+'" onclick="toggleFun(\'privateNote\')"><div class="kn"></div></div></div></div>';
    document.getElementById('fun-settings-body').innerHTML = html;
  }
  function closeFunSettings(){ renderPartySetup(); showScreen('party-setup'); }

  /* ---------- party room ---------- */
  var partyRoomOrigin = 'party';
  var announceOpen = true;
  function openPartyRoom(title, tag, cover){
    document.getElementById('pr-title').textContent = title || '派對';
    document.getElementById('pr-theme-tag').textContent = tag || '普通';
    var av = document.getElementById('pr-avatar');
    if(cover){ av.style.background = cover[1]; av.textContent = cover[0]; } else { av.style.background = '#3A3350'; av.textContent = '🐼'; }
    partyRoomOrigin = (currentScreenId() === 'party-setup') ? 'party-setup' : 'party';
    announceOpen = true;
    closePRMenu();
    closePRMembers();
    closePRPublish();
    renderPartyRoom();
    showScreen('party-room');
  }
  function currentScreenId(){
    var active = document.querySelector('.screen.active');
    return active ? active.id.replace('screen-','') : '';
  }
  function renderPartyRoom(){
    var chatLog = '<div class="pr-chatlog">三番四複是<br>三番四複是<br>三番四複是<br>'
      + '<span class="pr-sysmsg">'+document.getElementById('pr-title').textContent+' 進入派對房</span><br>'
      + '三番四複是</div>';
    var announceHtml = announceOpen ? (
      '<div class="announce-card">'
      + '<div class="announce-top"><span>📢</span><span class="lbl">公告</span><span class="meta">👁 0</span><span class="meta" style="background:rgba(255,255,255,.2);padding:2px 8px;border-radius:8px;">ON</span><span style="cursor:pointer;">✏️</span><span style="cursor:pointer;" onclick="announceOpen=false;renderPartyRoom();">✕</span></div>'
      + '<div class="announce-imgs">'
      + '<div class="ai" style="background:#E8834A;">🐲</div><div class="ai" style="background:#7B5EC7;">🎮</div><div class="ai" style="background:#C05FD1;"></div>'
      + '</div>'
      + '<div class="announce-text">派對公告<br>派對公告派對公告派對公告派對公告派對公告<br>派對公告派對公告派對公告派對公告<br><br>派對公告<br>派對公告派對公告派對公告<br>派對公告派對公告派對公告</div>'
      + '<div style="margin-top:10px;display:inline-block;background:rgba(255,255,255,.18);font-size:11px;padding:5px 12px;border-radius:10px;">點擊進入派對房</div>'
      + '</div>'
    ) : chatLog;
    document.getElementById('pr-body').innerHTML = announceHtml
      + '<div class="pr-dice" onclick="rollDice()"><div style="font-size:20px;">🎲</div><div id="dice-label">D20</div></div>';
  }
  function rollDice(){
    var v = Math.floor(Math.random()*20)+1;
    document.getElementById('dice-label').textContent = v;
  }
  function leavePartyRoom(){ showScreen(partyRoomOrigin); }

  /* ---------- party room sheets ---------- */
  function openPRMenu(){ document.getElementById('pr-menu-sheet').classList.add('show'); }
  function closePRMenu(){ document.getElementById('pr-menu-sheet').classList.remove('show'); }

  var PR_MEMBER_LIST = [
    {name:'Caleb Ting', role:'Owner', avatar:'🧑', bg:'#E8A0A0'},
    {name:'Angela Baby❤️', role:'Super Admin', avatar:'🎏', bg:'#F3D9A0'},
    {name:'Vic Tan', role:'Visitor', avatar:'👴', bg:'#C9DCF2'},
    {name:'Emico🍷🍸', role:'Host', avatar:'😊', bg:'#F3D9A0', badge:'1'},
    {name:'Aub 小哥哥', role:'Admin', avatar:'🧔', bg:'#8FBF7F'}
  ];
  var PR_ADMIN_LIST = [
    {name:'Caleb Ting', role:'Owner', avatar:'🧑', bg:'#E8A0A0'},
    {name:'Angela Baby❤️', role:'Super Admin', avatar:'🎏', bg:'#F3D9A0'},
    {name:'Aub 小哥哥', role:'Admin', avatar:'🧔', bg:'#8FBF7F'},
    {name:'Aub小哥哥', role:'aublittlebro', avatar:'🧔', bg:'#8FBF7F', badge:'?'}
  ];
  var currentPRMemberTab = 'members';
  function openPRMembers(tab){
    setPRMemberTab(tab || 'members');
    document.getElementById('pr-members-sheet').classList.add('show');
  }
  function closePRMembers(){ document.getElementById('pr-members-sheet').classList.remove('show'); }
  function setPRMemberTab(tab){
    currentPRMemberTab = tab;
    document.getElementById('pr-mtab-members').classList.toggle('on', tab==='members');
    document.getElementById('pr-mtab-admin').classList.toggle('on', tab==='admin');
    var list = tab === 'members' ? PR_MEMBER_LIST : PR_ADMIN_LIST;
    document.getElementById('pr-member-list').innerHTML = list.map(function(m){
      return '<div class="pr-member-row"><div class="avatar-round" style="width:42px;height:42px;background:'+m.bg+';font-size:18px;">'+m.avatar+'</div>'
        + '<div><div class="nm">'+m.name+'</div><div class="rl">'+m.role+'</div></div></div>';
    }).join('');
  }

  var prQoQty = 1;
  function openPRPublish(){
    prQoQty = 1;
    document.getElementById('pr-qo-qty').textContent = 1;
    document.getElementById('pr-qo-remarks').value = '';
    document.getElementById('pr-qo-remarks-count').textContent = '0/100';
    document.getElementById('pr-publish-sheet').classList.add('show');
  }
  function closePRPublish(){ document.getElementById('pr-publish-sheet').classList.remove('show'); }
  function adjustPrQty(delta){
    prQoQty = Math.max(1, prQoQty + delta);
    document.getElementById('pr-qo-qty').textContent = prQoQty;
  }
  function updatePrRemarks(){
    var v = document.getElementById('pr-qo-remarks').value;
    document.getElementById('pr-qo-remarks-count').textContent = v.length + '/100';
  }

  /* ---------- squad ---------- */
  var ROSTER = [
    {name:'Caleb', avatar:'🧑', bg:'#E8B4C8', perk:'解鎖小隊任務'},
    {name:'Godlike', avatar:'🧔', bg:'#C9DCF2', perk:'生命值上限+10'},
    {name:'咪咪恣么了', avatar:'👧', bg:'#F3C9DC', perk:'瑪納值上限+30'},
    {name:null, avatar:null, perk:'小隊金幣翻倍'},
    {name:null, avatar:null, perk:null}
  ];
  var OTHER_SQUADS = [
    {name:'Coding Is Life', color:'linear-gradient(160deg,#B8D98A,#9BC46A)', leaderName:'Duncan', leaderAvatar:'👩', leaderBg:'#F0C4A8', tag:'Godlike', slogan:null, count:'2/5', joined:false},
    {name:'藍色天空鳥', color:'linear-gradient(160deg,#8FC0E8,#5B9FD1)', leaderName:'Aubrey', leaderAvatar:'🧔', leaderBg:'#8A6A4A', tag:null, slogan:'Jika Kau Fikir Boleh, Kau Boleh!', count:'1/5', joined:false},
    {name:'無冕帝王666', color:'linear-gradient(160deg,#C9A8E0,#A87DC9)', leaderName:'Caleb', leaderAvatar:'🧑', leaderBg:'#E8B4C8', tag:'Godlike', slogan:'不忘初心，方得始終！', count:'3/5', joined:false}
  ];

  function rosterHtml(){
    return ROSTER.map(function(m){
      return '<div class="sq-slot"><div class="perk">'+(m.perk||'')+'</div>'
        + '<div class="av" style="background:'+(m.bg||'rgba(255,255,255,.5)')+';">'+(m.avatar || '👤')+'</div>'
        + '<div class="nm">'+(m.name||'')+'</div></div>';
    }).join('');
  }

  function openSquadList(){
    var myCardHtml = '<div class="sq-card" style="background:linear-gradient(160deg,#C9A8E0,#A87DC9);">'
      + '<div class="sq-top"><span class="sq-name">無冕帝王666</span><span class="sq-link" onclick="openSquadDetail()">前往小隊 ›</span></div>'
      + '<div class="sq-roster">' + rosterHtml() + '</div>'
      + '<span class="slogan">不忘初心，方得始終！</span><span class="cnt">3/5</span>'
      + '</div>';
    document.getElementById('sq-my-card-slot').innerHTML = myCardHtml;
    renderOtherSquads();
    showScreen('squad-list');
  }
  function renderOtherSquads(){
    document.getElementById('sq-other-list').innerHTML = OTHER_SQUADS.map(function(s, idx){
      return '<div class="sq-card" style="background:'+s.color+';">'
        + '<div class="sq-top"><span class="sq-name">'+s.name+'</span><button class="sq-badge" onclick="toggleJoinSquad('+idx+')">'+(s.joined?'已申請':'申請加入')+'</button></div>'
        + '<div class="sq-roster">'
        + '<div class="sq-slot"><div class="perk">解鎖<br>小隊任務</div><div class="av" style="background:'+s.leaderBg+';">'+s.leaderAvatar+'</div><div class="nm">'+s.leaderName+'</div></div>'
        + '<div class="sq-slot"><div class="perk">生命值上限+10</div><div class="av">👤</div><div class="nm">'+(s.tag||'')+'</div></div>'
        + '<div class="sq-slot"><div class="perk">瑪納值上限+30</div><div class="av">👤</div><div class="nm"></div></div>'
        + '<div class="sq-slot"><div class="perk">小隊金幣翻倍</div><div class="av">👤</div><div class="nm"></div></div>'
        + '<div class="sq-slot"><div class="perk"></div><div class="av">👤</div><div class="nm"></div></div>'
        + '</div>'
        + (s.slogan ? '<span class="slogan">'+s.slogan+'</span>' : '<span></span>') + '<span class="cnt">'+s.count+'</span>'
        + '</div>';
    }).join('');
  }
  function toggleJoinSquad(idx){
    OTHER_SQUADS[idx].joined = !OTHER_SQUADS[idx].joined;
    renderOtherSquads();
  }

  var SQUAD_TASKS = [
    {t:'下單', d:'任意成員下單 1次（不限金額）', r:'小隊任務積分 + 15'},
    {t:'邀請新成員', d:'成功邀請 1 位新成員加入小隊', r:'小隊任務積分 + 20'},
    {t:'小隊聊天', d:'在小隊聊天室發言 5 次', r:'小隊任務積分 + 10'}
  ];
  var currentSquadTask = 0;
  var squadPoints = 5;
  var SQUAD_CHEST_POS = [8,36,64,92];
  var SQUAD_CHEST_LBL = [25,50,75,100];
  var squadClaimed = false;

  function openSquadDetail(){
    var cardHtml = '<div class="sq-card" style="background:linear-gradient(160deg,#C9A8E0,#A87DC9);">'
      + '<div class="sq-top"><span class="sq-name">西天取經</span></div>'
      + '<div class="sq-roster">' + rosterHtml() + '</div>'
      + '<span class="slogan">不忘初心，方得始終！</span><span class="cnt">3/5</span>'
      + '</div>';
    document.getElementById('sq-detail-card-slot').innerHTML = cardHtml;
    document.getElementById('sq-points-top').innerHTML = '<span>小队任务积分：'+squadPoints+'/100</span><span>刷新 21:31</span>';
    var pct = Math.min(100, (squadPoints/100)*100);
    var markers = SQUAD_CHEST_POS.map(function(pos, i){
      var lit = pct >= pos ? ' lit' : '';
      var special = i === SQUAD_CHEST_POS.length-1 ? ' style="filter:hue-rotate(150deg) saturate(1.4);"' : '';
      return '<div class="chest-marker'+lit+'" style="left:'+pos+'%;"><div class="cicon"'+special+' style="width:22px;height:22px;margin:0 auto;">'+CHEST_SVG+'</div><span class="lbl">'+SQUAD_CHEST_LBL[i]+'</span></div>';
    }).join('');
    document.getElementById('sq-track').innerHTML = '<div class="daily-fill" style="width:'+pct+'%;"></div><div class="daily-knob" style="left:'+pct+'%;"></div>' + markers;
    renderSquadTask();
    renderSquadContrib();
    squadClaimed = false;
    document.getElementById('sq-claim-label').textContent = '一鍵領取';
    showScreen('squad-detail');
  }
  function renderSquadTask(){
    var t = SQUAD_TASKS[currentSquadTask];
    document.getElementById('sq-task-card').innerHTML =
      '<div class="sq-task-nav prev" onclick="navSquadTask(-1)">‹</div>'
      + '<div class="t">'+t.t+'</div><div class="d">'+t.d+'</div><div class="r">'+t.r+'</div>'
      + '<div class="sq-task-nav next" onclick="navSquadTask(1)">›</div>';
  }
  function navSquadTask(delta){
    currentSquadTask = (currentSquadTask + delta + SQUAD_TASKS.length) % SQUAD_TASKS.length;
    renderSquadTask();
  }
  function renderSquadContrib(){
    var rows = [{n:'Duncan',p:30},{n:'Duncan',p:30},{n:'Caleb',p:20},{n:'咪咪恣么了',p:15}];
    document.getElementById('sq-contrib-list').innerHTML = rows.map(function(r){
      return '<div class="sq-contrib-row"><span>'+r.n+'</span><span class="pt">'+r.p+' 積分</span></div>';
    }).join('');
  }
  function claimSquadReward(){
    if(squadClaimed) return;
    squadClaimed = true;
    document.getElementById('sq-claim-label').textContent = '已領取';
  }

  /* ---------- wallet ---------- */
  var WL_PAY_METHODS = ['信用卡/扣賬卡','線上轉賬','Google Pay','Apple Pay'];
  var WL_PACKAGES = [
    {amt:28, usd:'1.99'},
    {amt:138, usd:'8.99'},
    {amt:368, usd:'19.99'},
    {amt:958, usd:'49.99'},
    {amt:1988, usd:'99.99'},
    {amt:9940, usd:'499.99'}
  ];
  var wlSelectedPay = 0;
  var wlSelectedPkg = 0;
  var wlBalance = 321123;

  function openWallet(){
    document.getElementById('wl-balance').textContent = wlBalance.toLocaleString();
    document.getElementById('wl-gift-input').value = '';
    clearGiftError();
    renderWalletPay();
    renderWalletPkg();
    updateWalletDue();
    document.getElementById('wl-modal').classList.remove('show');
    showScreen('wallet');
  }
  function renderWalletPay(){
    document.getElementById('wl-pay-grid').innerHTML = WL_PAY_METHODS.map(function(m, i){
      return '<div class="wl-pay-card'+(i===wlSelectedPay?' selected':'')+'" onclick="selectWalletPay('+i+')">'+m+'</div>';
    }).join('');
  }
  function selectWalletPay(i){ wlSelectedPay = i; renderWalletPay(); }
  function renderWalletPkg(){
    document.getElementById('wl-pkg-grid').innerHTML = WL_PACKAGES.map(function(p, i){
      return '<div class="wl-pkg-card'+(i===wlSelectedPkg?' selected':'')+'" onclick="selectWalletPkg('+i+')">'
        + '<div class="amt">💎 '+p.amt.toLocaleString()+'</div><div class="usd">USD '+p.usd+'</div></div>';
    }).join('');
  }
  function selectWalletPkg(i){ wlSelectedPkg = i; renderWalletPkg(); updateWalletDue(); }
  function updateWalletDue(){
    document.getElementById('wl-due').textContent = 'USD ' + WL_PACKAGES[wlSelectedPkg].usd;
  }
  function clearGiftError(){
    document.getElementById('wl-gift-input').classList.remove('invalid');
    document.getElementById('wl-gift-err').textContent = '';
  }
  function submitGift(){
    var v = document.getElementById('wl-gift-input').value.trim();
    if(v.toLowerCase() === 'dktingcaleb' || v.toLowerCase() === 'caleb'){
      document.getElementById('wl-gift-err').textContent = '';
      document.getElementById('wl-gift-input').classList.remove('invalid');
      document.getElementById('wl-modal-text').textContent = '代儲成功！';
      document.getElementById('wl-modal').classList.add('show');
    } else {
      document.getElementById('wl-gift-input').classList.add('invalid');
      document.getElementById('wl-gift-err').textContent = '無此用戶';
      document.getElementById('wl-modal-text').textContent = '該用戶不存在！';
      document.getElementById('wl-modal').classList.add('show');
    }
  }
  function closeWalletModal(){ document.getElementById('wl-modal').classList.remove('show'); }

  /* ---------- guild ---------- */
  var hasGuild = false;
  var myGuild = null;
  var OTHER_GUILDS_SIMPLE = [
    {name:'傳奇', suit:'♠', tier:'I', tierBg:'#2EBFB0', lv:1, count:'1/20', leader:'🌻米雪🌻', code:'mixue03', nature:'娛樂'},
    {name:'破天劍', suit:'♣', tier:'II', tierBg:'#4A4238', lv:2, count:'40/40', leader:'🌻米雪🌻', code:'mixue03', nature:'娛樂'},
    {name:'IMU', suit:'♦', tier:'III', tierBg:'#B8791F', lv:3, count:'35/40', leader:'🌻米雪🌻', code:'mixue03', nature:'娛樂'},
    {name:'Frozen Castle', suit:'♠', tier:'IV', tierBg:'#8A8477', lv:4, count:'60/60', leader:'🌻米雪🌻', code:'mixue03', nature:'娛樂'}
  ];
  var OTHER_GUILDS_RICH = [
    {name:'齊天大殿', bannerBg:'#F2A65A', banner:'🐯', leader:'Duncan', tags:[['打羽球','#4A90D9'],['玩Moba','#E8544A']], desc:'"不忘初心，方得始終！"', count:'13/60', expandable:false, expanded:false},
    {name:'齊天大殿', bannerBg:'#C9A8E0', banner:'🧝', leader:'Duncan', tags:[['打羽球','#4A90D9'],['玩Moba','#E8544A'],['玩Moba','#9B6FE0']], desc:'樂天派屬於大家一起分享歡樂、天天聚在一起的一個公會。我們不分年齡、不分性別、不分宗教、不分彼此，公會宗旨只有一個就是要歡樂！歡迎大家一起加入了樂天派，一起歡樂無限！', count:'13/60', expandable:true, expanded:false}
  ];

  function openGuildList(){
    renderGuildTop();
    renderGuildOther();
    showScreen('guild-list');
  }
  function renderGuildTop(){
    var html;
    if(hasGuild && myGuild){
      html = '<div class="gd-my-card"><div class="gd-my-header"><span>我的公會</span><span class="gd-my-link" onclick="goPlaceholder(\'公會詳情\',\'這裡會是完整的公會詳情頁，等對應設計稿確認後再補齊。\')">前往公會 ›</span></div>'
        + '<div class="gd-circle-row"><div><div class="gd-circle">🏯<div class="lv">LV '+myGuild.lv+'</div></div><div class="gd-circle-cnt">人數 '+myGuild.count+'</div></div>'
        + '<div class="gd-info"><div class="nm">'+myGuild.name+' <span style="color:#2EBFB0;">'+myGuild.suit+'</span><span class="tier" style="background:'+myGuild.tierBg+';">'+myGuild.tier+'</span></div>'
        + '<div class="row">會長 '+myGuild.leader+'</div><div class="row code">'+myGuild.code+'</div><div class="row nature">公會性質 '+myGuild.nature+'</div></div></div></div>';
    } else {
      html = '<div class="gd-banner-card"><h4>加入公會即可獲得專屬福利!</h4><div class="gd-perk-row">'
        + ['免費金幣','免費藍鑽','公會徽章','公會主題服裝','更多福利'].map(function(l){
            return '<div class="gd-perk"><div class="ic">😊</div><div class="lbl">'+l+'</div></div>';
          }).join('')
        + '</div></div>';
    }
    document.getElementById('gd-top-slot').innerHTML = html;
  }
  function renderGuildOther(){
    if(hasGuild){
      document.getElementById('gd-other-list').innerHTML = OTHER_GUILDS_SIMPLE.map(function(g){
        return '<div class="gd-my-card" style="margin:0 16px 16px;cursor:pointer;" onclick="goPlaceholder(\''+g.name+'\',\'這裡會是該公會的詳情頁，等對應設計稿確認後再補齊。\')"><div class="gd-circle-row">'
          + '<div><div class="gd-circle">🏯<div class="lv">LV '+g.lv+'</div></div><div class="gd-circle-cnt">人數 '+g.count+'</div></div>'
          + '<div class="gd-info"><div class="nm">'+g.name+' <span style="color:#2EBFB0;">'+g.suit+'</span><span class="tier" style="background:'+g.tierBg+';">'+g.tier+'</span></div>'
          + '<div class="row">會長 '+g.leader+'</div><div class="row code">'+g.code+'</div><div class="row nature">公會性質 '+g.nature+'</div></div></div></div>';
      }).join('');
    } else {
      document.getElementById('gd-other-list').innerHTML = OTHER_GUILDS_RICH.map(function(g, idx){
        var descText = (g.expandable && !g.expanded) ? g.desc.slice(0, 40) + '…' : g.desc;
        return '<div class="gd-rich-card">'
          + '<div class="gd-rich-banner" style="background:'+g.bannerBg+';">'+g.banner+'</div>'
          + '<div class="gd-rich-body"><div class="nm">'+g.name+' <span style="color:#2EBFB0;">♠</span></div><div class="leader">會長 '+g.leader+'</div>'
          + '<div class="gd-rich-tags">' + g.tags.map(function(t){ return '<span style="background:'+t[1]+';">'+t[0]+'</span>'; }).join('') + '</div>'
          + '<div style="display:flex;align-items:flex-start;gap:6px;"><div class="gd-rich-desc">'+descText+'</div>'
          + (g.expandable ? '<span class="gd-expand" onclick="toggleGuildDesc('+idx+')">'+(g.expanded?'▲':'▼')+'</span>' : '') + '</div>'
          + '<div class="gd-rich-foot"><span></span><span style="font-size:11px;color:#8A8477;">'+g.count+'</span></div></div>'
          + '<button class="gd-join-btn" onclick="applyToGuild('+idx+')">申請加入</button>'
          + '</div>';
      }).join('');
    }
  }
  function toggleGuildDesc(idx){
    OTHER_GUILDS_RICH[idx].expanded = !OTHER_GUILDS_RICH[idx].expanded;
    renderGuildOther();
  }
  function applyToGuild(idx){
    var g = OTHER_GUILDS_RICH[idx];
    hasGuild = true;
    myGuild = {name:g.name, suit:'♠', tier:'I', tierBg:'#2EBFB0', lv:1, count:g.count, leader:'🌻米雪🌻', code:'mixue03', nature:'娛樂'};
    renderGuildTop();
    renderGuildOther();
  }

  /* ---------- level / rank ---------- */
  var LEVEL_DATA = [
    [1,0],[2,6000],[3,12000],
    [4,18600],[5,25200],[6,32000],
    [7,39000],[8,46200],[9,53600],
    [10,61200],[11,69000],[12,77000],
    [13,85200],[14,93600],[15,102200],
    [16,111000],[17,120000],[18,129200]
  ];
  var RANK_DATA = [
    ['青銅I',0],['青銅II',88],['白銀I',688],
    ['白銀II',1888],['白銀II',1888],['白銀III',4888],
    ['黃金I',9888],['黃金II',15888],['黃金III',21888],
    ['黃金IV',27888],['鉑金I',35888],['鉑金II',43888],
    ['鉑金III',51888],['鉑金IV',61888],['鉑金IV',61888],
    ['鉑金V',71888],['鑽石I',91888],['鑽石II',111888]
  ];
  var currentLevelIdx = 2;
  var currentRankIdx = 1;
  var currentLevelRankTab = 'level';

  function openLevelRank(tab){
    setLevelRankTab(tab || 'level');
    showScreen('level-rank');
  }
  function setLevelRankTab(tab){
    currentLevelRankTab = tab;
    document.getElementById('lr-tab-level').classList.toggle('on', tab==='level');
    document.getElementById('lr-tab-rank').classList.toggle('on', tab==='rank');
    if(tab === 'level'){
      document.getElementById('lr-sub-text').textContent = '經由完成任務可提升';
      var cur = LEVEL_DATA[currentLevelIdx], nxt = LEVEL_DATA[currentLevelIdx+1];
      document.getElementById('lr-progress-card').innerHTML =
        '<div class="lr-progress-top"><span class="cur">LV'+cur[0]+'</span><span class="nxt">LV'+(nxt?nxt[0]:cur[0])+'</span></div>'
        + '<div class="lr-progress-track"><div class="lr-progress-fill" style="width:35%;"></div></div>'
        + (nxt ? '<div class="lr-progress-note">再完成任務 <b>'+(nxt[1]-cur[1]).toLocaleString()+'經驗</b> 晉級到 LV'+nxt[0]+'</div>' : '<div class="lr-progress-note">已達最高等級</div>');
      document.getElementById('lr-grid').innerHTML = LEVEL_DATA.map(function(l, i){
        var num = String(l[0]).padStart(2,'0');
        return '<div class="lr-card'+(i===currentLevelIdx?' selected':'')+'"><div class="badge">'+num+'</div><div class="val">'+l[1].toLocaleString()+'</div></div>';
      }).join('');
    } else {
      document.getElementById('lr-sub-text').textContent = '經由訂單消費或贈送禮物可提升';
      var curR = RANK_DATA[currentRankIdx], nxtR = RANK_DATA[currentRankIdx+1];
      document.getElementById('lr-progress-card').innerHTML =
        '<div class="lr-progress-top"><span class="cur">'+curR[0]+'</span><span class="nxt">'+(nxtR?nxtR[0]:curR[0])+'</span></div>'
        + '<div class="lr-progress-track"><div class="lr-progress-fill" style="width:35%;"></div></div>'
        + (nxtR ? '<div class="lr-progress-note">再下單或送禮消費 <b>'+(nxtR[1]-curR[1]).toLocaleString()+'藍鑽</b> 晉級到 '+nxtR[0]+'</div>' : '<div class="lr-progress-note">已達最高段位</div>');
      document.getElementById('lr-grid').innerHTML = RANK_DATA.map(function(r, i){
        return '<div class="lr-card'+(i===currentRankIdx?' selected':'')+'"><div class="badge">'+r[0]+'</div><div class="val">'+r[1].toLocaleString()+'</div></div>';
      }).join('');
    }
  }

  /* ---------- nobility ---------- */
  var NOBLE_TIERS = ['騎士','子爵','伯爵','侯爵','公爵','王族','皇族'];
  var currentNobleTier = 0;
  var NOBLE_SUBCATS = ['全部','裝扮','系統','技能','其它'];
  var currentNobleSubcat = '全部';
  var NOBLE_PRIVILEGES = [
    {name:'貴族勳章', unlocked:true},
    {name:'貴族頭框', unlocked:true},
    {name:'貴族聊天氣泡', unlocked:true},
    {name:'貴族主題風格', unlocked:true},
    {name:'', unlocked:false},
    {name:'', unlocked:false},
    {name:'', unlocked:false},
    {name:'', unlocked:false}
  ];
  function openNobility(){
    renderNobility();
    showScreen('nobility');
  }
  function renderNobility(){
    document.getElementById('nb-tier-tabs').innerHTML = NOBLE_TIERS.map(function(t, i){
      return '<div class="nb-tier-tab'+(i===currentNobleTier?' on':'')+'" onclick="setNobleTier('+i+')">'+t+'</div>';
    }).join('');
    document.getElementById('nb-subtabs').innerHTML = NOBLE_SUBCATS.map(function(c){
      return '<div class="nb-subtab'+(currentNobleSubcat===c?' on':'')+'" onclick="setNobleSubcat(\''+c+'\')">'+c+'</div>';
    }).join('');
    document.getElementById('nb-priv-grid').innerHTML = NOBLE_PRIVILEGES.map(function(p){
      return '<div class="nb-priv'+(p.unlocked?'':' locked')+'"><div class="circ"></div><div class="lbl">'+(p.unlocked?p.name:'&nbsp;')+'</div></div>';
    }).join('');
    document.getElementById('nb-recharge-text').textContent = '升級為'+NOBLE_TIERS[currentNobleTier]+'需要儲值 1,000.00';
  }
  function setNobleTier(i){ currentNobleTier = i; renderNobility(); }
  function setNobleSubcat(c){ currentNobleSubcat = c; renderNobility(); }

  /* ---------- public note ---------- */
  var pnPhoto = null;
  function openPublicNote(){
    document.getElementById('pn-text').value = '';
    pnPhoto = null;
    updatePnCounter();
    renderPnPhoto();
    showScreen('public-note');
  }
  function updatePnCounter(){
    var v = document.getElementById('pn-text').value;
    document.getElementById('pn-count').textContent = v.length + '/10000';
    updatePnSaveState();
  }
  function renderPnPhoto(){
    var slot = document.getElementById('pn-photo-slot');
    if(pnPhoto){
      slot.innerHTML = '<div class="pn-photo-thumb" style="background:'+pnPhoto[1]+';">'+pnPhoto[0]+'<div class="rm" onclick="removePnPhoto()">✕</div></div>';
    } else {
      slot.innerHTML = '<div class="pn-photo-add" onclick="openPhotoPicker(\'note\')">🗂️+</div>';
    }
    updatePnSaveState();
  }
  function removePnPhoto(){ pnPhoto = null; renderPnPhoto(); }
  function updatePnSaveState(){
    var hasContent = document.getElementById('pn-text').value.trim().length > 0 || !!pnPhoto;
    document.getElementById('pn-save-btn').classList.toggle('ready', hasContent);
  }
  function savePublicNote(){
    if(!document.getElementById('pn-save-btn').classList.contains('ready')) return;
    showScreen('party-room');
  }

  /* ---------- activity ---------- */
  var activityOrigin = 'home';
  var AC_RANKS = [
    ['Vic Tan','👴','#C9DCF2'],['杰奎琳','👧','#F3C9DC'],['胖达','🐼','#DCE7D5'],
    ['爱上一只喵咪','🐱','#F2A65A'],['米雪','🌻','#F3D9A0'],['Emico','😊','#F3D9A0'],
    ['扶弟魔——安安','👩','#E8A0A8'],['胡子哥','🧔','#8A6A4A'],['艾米莉','👩','#C9A8E0'],
    ['Angela Baby','🎏','#F3D9A0']
  ];
  function openActivityDetail(origin){
    activityOrigin = origin || 'home';
    var medals = ['🥇','🥈','🥉'];
    document.getElementById('ac-rank-list').innerHTML = AC_RANKS.map(function(r, i){
      return '<div class="ac-rank-row"><span class="ac-rank-num">'+(i<3?medals[i]:(i+1))+'</span>'
        + '<div class="ac-rank-avatar" style="background:'+r[2]+';">'+r[1]+'</div>'
        + '<span class="ac-rank-name">'+r[0]+'</span><span class="ac-rank-score">积分<b>130141</b></span></div>';
    }).join('')
      + '<div class="ac-rank-row me"><span class="ac-rank-num" style="font-size:11px;">未入榜</span>'
      + '<div class="ac-rank-avatar" style="background:#E8A0A0;">🧑</div>'
      + '<span class="ac-rank-name">Caleb Ting</span><span class="ac-rank-score">积分<b>130141</b></span></div>';
    showScreen('activity');
  }

  /* ---------- player profile / intimacy / album ---------- */
  var currentPlayerName = '🌻米雪🌻';
  var playerProfileOrigin = 'moments';
  var ppExpanded = true;
  var ppOrderExpanded = false;

  function openPlayerProfile(name){
    if(!PLAYERS[name]){ PLAYERS[name] = {avatar:'🙂',avatarBg:'#DCD7CB',following:false,blocked:false,inParty:null}; PLAYER_INTIMACY[name] = 0; }
    currentPlayerName = name;
    playerProfileOrigin = currentScreenId() || 'moments';
    ppExpanded = true;
    ppOrderExpanded = false;
    document.getElementById('pp-menu').classList.remove('show');
    renderPlayerProfile();
    showScreen('player-profile');
  }
  function togglePPMenu(){ document.getElementById('pp-menu').classList.toggle('show'); }
  function togglePPFollow(){
    var p = PLAYERS[currentPlayerName];
    p.following = !p.following;
    renderPlayerProfile();
  }
  function togglePPBlock(){
    var p = PLAYERS[currentPlayerName];
    p.blocked = !p.blocked;
    document.getElementById('pp-menu').classList.remove('show');
    renderPlayerProfile();
  }
  function togglePPExpand(){ ppExpanded = !ppExpanded; renderPlayerProfile(); }
  function togglePPOrder(){ ppOrderExpanded = !ppOrderExpanded; renderPlayerProfile(); }

  function renderPlayerProfile(){
    var p = PLAYERS[currentPlayerName];
    var intimacy = PLAYER_INTIMACY[currentPlayerName] || 0;
    var tier = tierInfo(intimacy);
    document.getElementById('pp-name').textContent = currentPlayerName;
    document.getElementById('pp-follow-btn').textContent = p.following ? '已關注' : '關注';
    document.getElementById('pp-follow-btn').style.opacity = p.following ? '0.6' : '1';
    document.getElementById('pp-hearts').innerHTML = heartsHtml(intimacy) + '<span class="tier-label">'+tier.label+' ('+intimacy.toLocaleString()+'/10,000)</span>';

    var bannerHtml = '';
    if(p.blocked){
      bannerHtml = '<div class="pp-banner blocked">🚫 您已封鎖此用戶</div>';
    } else if(p.inParty){
      bannerHtml = '<div class="pp-banner party" onclick="openPartyRoom(\''+p.inParty.name+'\',\'趣味互動\')">'
        + '<span>🎤 正在派對中</span><span>正在 '+p.inParty.name+' ›</span></div>';
    }
    document.getElementById('pp-banner-slot').innerHTML = bannerHtml;

    document.getElementById('pp-expand-icon').textContent = ppExpanded ? '︿' : '⌄';
    document.querySelector('.pp-carousel').style.display = ppExpanded ? 'flex' : 'none';
    document.querySelector('.pp-dots').parentElement.style.display = ppExpanded ? 'flex' : 'none';

    document.getElementById('pp-order-chevron').textContent = ppOrderExpanded ? '︿' : '⌄';
    document.getElementById('pp-order-slot').innerHTML = ppOrderExpanded ? (
      '<div class="pp-order-card">'
      + '<div class="pp-order-top"><span>訂單編號：AX123GB</span><span>截至日期：11 NOV 2025 23:15</span></div>'
      + '<div class="pp-order-mid"><span style="background:#E8544A;color:#fff;font-size:10.5px;padding:8px 7px;border-radius:6px;font-weight:700;">语音<br>聊天</span>'
      + '<div style="flex:1;"><div style="font-weight:700;font-size:13px;color:#1B1330;">王者榮耀</div><div style="color:#4A90D9;font-size:12px;font-weight:600;margin-top:4px;">50/半小時 ×2</div></div></div>'
      + '<div class="pp-track"><div class="dot done"></div><div class="seg done"></div><div class="dot done"></div><div class="seg"></div><div class="dot"></div><div class="seg"></div><div class="dot"></div></div>'
      + '<div class="pp-track-labels"><span>送出訂單</span><span>接單中</span><span>訂單完成</span><span>評價</span></div>'
      + '<div style="text-align:right;margin-top:10px;"><span style="color:#8A8477;font-size:12px;cursor:pointer;" onclick="goPlaceholder(\'訂單列表\',\'這裡會是完整的訂單歷史列表，等對應設計稿確認後再補齊。\')">更多訂單 ›</span></div>'
      + '</div>'
    ) : '';
  }

  /* ---------- specialty list ---------- */
  var SPECIALTIES = [
    {img:'🎮', bg:'#7B5EC7', title:'王者榮耀', rating:5.0, orders:78, tag:'嫂姐音', dur:'15"', price:'300/半小時'},
    {img:'🎮', bg:'#7B5EC7', title:'王者榮耀', rating:5.0, orders:78, tag:'嫂姐音', dur:'15"', price:'300/半小時'}
  ];
  function openSpecialtyList(){ renderSpecialtyList(); showScreen('specialty-list'); }
  function renderSpecialtyList(){
    var html = SPECIALTIES.map(function(s){
      return '<div class="spec-item">'
        + '<div class="spec-thumb" style="background:'+s.bg+';">'+s.img+'<span class="dur">🔊'+s.dur+'</span></div>'
        + '<div class="spec-info"><div class="t">'+s.title+'</div><div class="r">⭐ '+s.rating.toFixed(1)+'　接單數 '+s.orders+'</div><div class="tag2">'+s.tag+'</div><br><div class="price">💎 '+s.price+'</div></div>'
        + '<div class="spec-order-btn" onclick="openConfirmOrder(\''+s.title+'\',\''+s.price+'\')">下單</div>'
        + '</div>';
    }).join('');
    document.getElementById('specialty-list-body').innerHTML = html;
  }

  /* ---------- confirm order ---------- */
  var orderQty = 1;
  function openConfirmOrder(specialty, price){
    orderQty = 1;
    var p = PLAYERS[currentPlayerName] || {avatar:'🙂',avatarBg:'#DCD7CB'};
    var html = ''
      + '<div class="co-row" style="display:flex;align-items:center;gap:12px;">'
      + '<div class="avatar-round" style="width:44px;height:44px;background:'+p.avatarBg+';font-size:20px;">'+p.avatar+'</div>'
      + '<div style="flex:1;"><div style="font-weight:700;font-size:13.5px;color:#1B1330;">'+currentPlayerName+'</div><div style="font-size:11px;color:#B4AFA6;">user id</div></div>'
      + '<span class="ps-link" onclick="goPlaceholder(\'發送消息\',\'這裡會跳轉到與該玩家的一對一聊天視窗，等對應設計稿確認後再補齊。\')">發送消息</span>'
      + '</div>'
      + '<div class="co-row"><div class="l">服務特長</div><div class="v">'+specialty+' ⌄</div></div>'
      + '<div class="co-row"><div class="l">單位</div><div class="v">'+price+'</div></div>'
      + '<div class="co-row"><div class="l">數量</div><div class="stepper"><div class="step-btn" onclick="adjustOrderQty(-1)">–</div><div class="step-val" id="order-qty">1</div><div class="step-btn" onclick="adjustOrderQty(1)">+</div></div></div>'
      + '<div class="co-row"><div class="l">服務截至</div><div class="v">2025/09/28 21:00 ⌄</div><div style="font-size:11px;color:#E8544A;margin-top:6px;">服務截至的時候，所有服務單位將自動完成，請用戶和陪玩在這之前自行商量服務時間</div></div>'
      + '<div class="co-row"><textarea placeholder="備註：最多50字元" maxlength="50" style="width:100%;min-height:70px;border:none;background:#F4F2EC;border-radius:8px;padding:10px;font-size:12.5px;font-family:inherit;resize:none;"></textarea></div>'
      + '<div class="ps-row" onclick="goPlaceholder(\'折價券\',\'這裡會是可用折價券列表，等對應設計稿確認後再補齊。\')"><div class="psl">折價券</div><div class="psv">未使用 ›</div></div>'
      + '<div class="ps-row" style="cursor:default;"><div class="psl">實際支付</div><div class="psv" style="color:#4A90D9;font-weight:700;font-size:14px;">💎 <span id="order-total">'+(parseInt(price)||300)+'</span></div></div>'
      + '<div style="height:14px;"></div>'
      + '<button class="co-order-btn" onclick="goPlaceholder(\'提交訂單\',\'訂單提交與付款流程尚未設計，等對應設計稿確認後再補齊。\')">提交訂單</button>';
    document.getElementById('confirm-order-body').innerHTML = html;
    orderBasePrice = parseInt(price) || 300;
    showScreen('confirm-order');
  }
  var orderBasePrice = 300;
  function adjustOrderQty(delta){
    orderQty = Math.max(1, orderQty + delta);
    document.getElementById('order-qty').textContent = orderQty;
    document.getElementById('order-total').textContent = orderQty * orderBasePrice;
  }

  /* ---------- album ---------- */
  var albumMode = 'own';
  function openAlbum(mode){
    albumMode = mode;
    var intimacy = mode === 'own' ? 10000 : (PLAYER_INTIMACY[currentPlayerName] || 0);
    var tier = tierInfo(intimacy);
    document.getElementById('album-title').textContent = mode === 'own' ? '我的相簿' : '相簿';
    document.getElementById('album-hearts-slot').innerHTML = mode === 'own' ? '' :
      '<div class="album-hearts">' + heartsHtml(intimacy) + '<span class="album-tier">'+tier.label+' ('+intimacy.toLocaleString()+'/10,000)</span></div>';

    var albums = [
      {name:'公開相簿', hearts:'♡', thresh:0, photo:null, count:'0/9'},
      {name:'親密度相簿 1', hearts:'❤×2', thresh:ALBUM_THRESH[1], photo:'🍔', count:'3/9'},
      {name:'親密度相簿 2', hearts:'❤×5', thresh:ALBUM_THRESH[2], photo:'🎮', count:'4/9'},
      {name:'親密度相簿 3', hearts:'❤×8', thresh:ALBUM_THRESH[3], photo:null, count:'0/9'}
    ];
    var html = albums.map(function(a){
      var locked = mode === 'other' && intimacy < a.thresh;
      var thumb = a.photo
        ? '<div class="album-thumb" style="background:#DCE7D5;font-size:40px;">'+a.photo+'</div>'
        : '<div class="album-thumb">🖼️<div style="font-size:10px;margin-top:4px;">尚未上傳任何照片或視頻</div></div>';
      var lockOverlay = locked ? '<div class="album-lock"><div class="li">🔒</div><div>尚未解鎖</div><div>解鎖還需 '+a.thresh.toLocaleString()+' 親密度</div></div>' : '';
      return '<div class="album-card" onclick="'+(locked?'':'openPlaceholderAlbumDetail(\''+a.name+'\')')+'">'
        + thumb + lockOverlay
        + '<div class="album-meta"><div class="hx">'+a.hearts+'</div><div class="nm">'+a.name+'</div><div class="ct">('+a.count+')</div></div>'
        + '</div>';
    }).join('');
    document.getElementById('album-grid').innerHTML = html;
    showScreen('album');
  }
  function openPlaceholderAlbumDetail(name){
    goPlaceholder(name, '這裡會是相簿內的照片/影片瀏覽頁，等對應設計稿確認後再補齊。');
  }
  function closeAlbum(){
    if(albumMode === 'own'){ showScreen('profile'); } else { showScreen('player-profile'); renderPlayerProfile(); }
  }

  /* ---------- avatar / virtual character ---------- */
  var EQUIP_SLOTS_LEFT = [{k:'head',l:'頭部'},{k:'face',l:'臉部'},{k:'outfit',l:'穿著'},{k:'back',l:'背部'}];
  var EQUIP_SLOTS_RIGHT = [{k:'hair',l:'髮型'},{k:'accessory',l:'飾品'},{k:'skin',l:'膚色'},{k:'pet',l:'寵物'}];
  var SLOT_LABELS = {}; EQUIP_SLOTS_LEFT.concat(EQUIP_SLOTS_RIGHT).forEach(function(s){ SLOT_LABELS[s.k] = s.l; });
  var EQUIP_CATS = [{k:'all',l:'全部'},{k:'head',l:'頭部'},{k:'outfit',l:'服裝'},{k:'back',l:'背部'},{k:'tail',l:'尾部'},{k:'face',l:'捏臉'}];
  var EQUIP_ITEMS = {
    head: ['頭部1','頭部2','頭部3','頭部4','頭部5'],
    outfit: ['服裝1','服裝2','服裝3'],
    back: ['背部1','背部2'],
    tail: ['尾部1','尾部2'],
    face: ['捏臉1','捏臉2']
  };
  var equippedByCat = { head:'頭部3' };
  var currentEquipCat = 'head';

  function openAvatarScreen(){
    renderEquipTab();
    renderSkillTab();
    renderJobTab();
    renderStatusTab();
    setAvatarTab('equip');
    showScreen('avatar');
  }
  function setAvatarTab(tab){
    ['status','job','equip','skill'].forEach(function(t){
      document.getElementById('av-tab-'+t).classList.toggle('on', t===tab);
      document.getElementById('av-panel-'+t).classList.toggle('on', t===tab);
    });
  }
  function slotBoxHtml(s){
    var active = currentEquipCat === s.k;
    return '<div class="av-slot"><div class="box'+(active?' active':'')+'" onclick="selectEquipSlot(\''+s.k+'\')"></div><div class="lbl">'+s.l+'</div></div>';
  }
  function selectEquipSlot(k){
    if(EQUIP_ITEMS[k]){ setEquipCat(k); }
    else { goPlaceholder(SLOT_LABELS[k]||k, '這個裝備分類的選擇頁還沒提供設計稿，等你發過來我再補齊。'); }
  }
  function setEquipCat(k){ currentEquipCat = k; renderEquipTab(); }
  function renderEquipTab(){
    document.getElementById('equip-slots-left').innerHTML = EQUIP_SLOTS_LEFT.map(slotBoxHtml).join('');
    document.getElementById('equip-slots-right').innerHTML = EQUIP_SLOTS_RIGHT.map(slotBoxHtml).join('');
    document.getElementById('equip-subtabs').innerHTML = EQUIP_CATS.map(function(c){
      return '<div class="av-subtab'+(currentEquipCat===c.k?' on':'')+'" onclick="setEquipCat(\''+c.k+'\')">'+c.l+'</div>';
    }).join('');
    renderEquipGrid();
  }
  function renderEquipGrid(){
    var items;
    if(currentEquipCat === 'all'){
      items = [];
      Object.keys(EQUIP_ITEMS).forEach(function(cat){ EQUIP_ITEMS[cat].forEach(function(nm){ items.push({cat:cat, name:nm}); }); });
    } else {
      items = (EQUIP_ITEMS[currentEquipCat] || []).map(function(nm){ return {cat:currentEquipCat, name:nm}; });
    }
    var html = '';
    if(currentEquipCat !== 'all'){
      html += '<div class="av-item remove" onclick="unequip(\''+currentEquipCat+'\')"><div class="box">－</div><div class="lbl">卸下</div></div>';
    }
    html += items.map(function(it){
      var eq = equippedByCat[it.cat] === it.name;
      return '<div class="av-item" onclick="equipItem(\''+it.cat+'\',\''+it.name+'\')"><div class="box">🧩'+(eq?'<span class="badge">已裝備</span>':'')+'</div><div class="lbl">'+it.name+'</div></div>';
    }).join('');
    document.getElementById('equip-item-grid').innerHTML = html;
  }
  function equipItem(cat, name){
    equippedByCat[cat] = name;
    document.getElementById('equip-intro-text').textContent = name + ' 裝備詳細介紹';
    renderEquipGrid();
  }
  function unequip(cat){
    delete equippedByCat[cat];
    document.getElementById('equip-intro-text').textContent = '裝備詳細介紹';
    renderEquipGrid();
  }

  var SKILL_CATS = [{k:'all',l:'全部'},{k:'attack',l:'攻擊'},{k:'defense',l:'防禦'},{k:'recover',l:'回復'},{k:'support',l:'輔助'}];
  var SKILL_ITEMS = {
    attack: ['金手指','金手指','金手指','金手指','金手指','金手指','金手指','金手指','金手指'],
    defense: [], recover: [], support: []
  };
  var currentSkillCat = 'attack';
  var learnedSkills = {};
  function renderSkillTab(){
    document.getElementById('skill-subtabs').innerHTML = SKILL_CATS.map(function(c){
      return '<div class="av-subtab'+(currentSkillCat===c.k?' on':'')+'" onclick="setSkillCat(\''+c.k+'\')">'+c.l+'</div>';
    }).join('');
    renderSkillGrid();
  }
  function setSkillCat(k){ currentSkillCat = k; renderSkillTab(); }
  function renderSkillGrid(){
    var items = SKILL_ITEMS[currentSkillCat] || [];
    var html = items.length ? items.map(function(name, idx){
      var key = currentSkillCat + '-' + idx;
      var on = !!learnedSkills[key];
      return '<div class="skill-item'+(on?' on':'')+'" onclick="toggleSkill(\''+key+'\')"><span class="radio"></span>'+name+'</div>';
    }).join('') : '<div style="grid-column:1/-1;text-align:center;color:#B4AFA6;font-size:12px;padding:24px 0;">這個分類還沒有技能資料，等你發過來我再補上</div>';
    document.getElementById('skill-item-grid').innerHTML = html;
  }
  function toggleSkill(key){ learnedSkills[key] = !learnedSkills[key]; renderSkillGrid(); }

  /* ---------- job / class ---------- */
  var JOB_LIST = [
    {name:'劍士', skills:['斬擊','斧擊','刀斧雙擊','怒吼'], equip:['鐵血頭盔','鐵血戰甲']},
    {name:'弓手'},
    {name:'槍兵', skills:['千里傳鴿','流星雨'], equip:['精靈披風','精靈服']},
    {name:'盜賊'},
    {name:'補師'},
    {name:'法師'},
    {name:'戰士'},
    {name:'騎士'},
    {name:'獵人'},
    {name:'槍騎兵'}
  ];
  var JOB_CATS = ['全部','劍士','弓手','槍兵','盜賊','補師'];
  var currentJobCat = '全部';
  var equippedJob = '劍士';
  var selectedJob = '槍兵';

  function renderJobTab(){
    var stackJobs = [equippedJob];
    if(selectedJob !== equippedJob) stackJobs.push(selectedJob);
    document.getElementById('job-detail-stack').innerHTML = stackJobs.map(function(name){
      var job = JOB_LIST.find(function(j){ return j.name === name; }) || {name:name};
      var skillLbl = (name === equippedJob) ? '解鎖技能' : '附帶技能';
      var skills = job.skills || [];
      var equip = job.equip || [];
      var cols = (skills.length || equip.length)
        ? '<div class="job-detail-cols"><div><div class="job-col-lbl">'+skillLbl+'</div>'+skills.map(function(s){return '<div class="job-col-item">'+s+'</div>';}).join('')+'</div>'
          + '<div><div class="job-col-lbl">解鎖裝備</div>'+equip.map(function(s){return '<div class="job-col-item">'+s+'</div>';}).join('')+'</div></div>'
        : '<div style="font-size:12px;color:#B4AFA6;margin-bottom:16px;">這個職業還沒有提供技能/裝備資料</div>';
      return '<div class="job-pill-header"><span class="tag">等級<br>顯示中</span>'+name+'</div>' + cols;
    }).join('');

    document.getElementById('job-subtabs').innerHTML = JOB_CATS.map(function(c){
      return '<div class="av-subtab'+(currentJobCat===c?' on':'')+'" onclick="setJobCat(\''+c+'\')">'+c+'</div>';
    }).join('');

    var list = currentJobCat === '全部' ? JOB_LIST : JOB_LIST.filter(function(j){ return j.name === currentJobCat; });
    document.getElementById('job-grid').innerHTML = list.map(function(j){
      var sel = j.name === selectedJob;
      var eq = j.name === equippedJob;
      return '<div class="job-card'+(sel?' selected':'')+'" onclick="selectJob(\''+j.name+'\')">'
        + '<span class="tag">等級<br>顯示中</span>' + j.name
        + (eq ? '<span class="eqbadge">已裝備</span>' : '')
        + '</div>';
    }).join('');
  }
  function setJobCat(c){ currentJobCat = c; renderJobTab(); }
  function selectJob(name){ selectedJob = name; renderJobTab(); }

  /* ---------- status tab ---------- */
  var STATUS_CATS = ['全部','輔助','恢復'];
  var currentStatusCat = '輔助';
  function renderStatusTab(){
    document.getElementById('status-subtabs').innerHTML = STATUS_CATS.map(function(c){
      return '<div class="av-subtab'+(currentStatusCat===c?' on':'')+'" onclick="setStatusCat(\''+c+'\')">'+c+'</div>';
    }).join('');
    document.getElementById('status-skill-list').innerHTML =
      '<div style="text-align:center;color:#B4AFA6;font-size:12px;padding:40px 20px 60px;">這個分類目前沒有可對自己使用的技能，等你發過來更多資料我再補上</div>';
  }
  function setStatusCat(c){ currentStatusCat = c; renderStatusTab(); }

  /* ---------- quick order ---------- */
  var qoQty = 1;
  var quickOrderOrigin = 'home';
  var ACTIVE_ORDERS = [
    {game:'APEX', price:'250以內/半小時 x 1', gender:'女生', msg:'心情不好，可以陪玩玩遊戲嗎？😊', count:'32 人搶單中', expire:'03:00 AM 到期'},
    {game:'APEX', price:'250以內/半小時 x 1', gender:'女生', msg:'心情不好，可以陪玩玩遊戲嗎？😊', count:'32 人搶單中', expire:'03:00 AM 到期'},
    {game:'APEX', price:'250以內/半小時 x 1', gender:'女生', msg:'心情不好，可以陪玩玩遊戲嗎？😊', count:'32 人搶單中', expire:'03:00 AM 到期'}
  ];
  var HISTORY_ORDERS = [
    {tags:'蘿莉音，少蘿音，少女音，少御音，御姐音，御媽音，青年音，叔音', date:'Jun 1'},
    {tags:'蘿莉音，少蘿音，少女音', date:'Jun 1'},
    {tags:'蘿莉音，少蘿音，少女音，少御音，御姐音', date:'Jun 1'},
    {tags:'蘿莉音，少蘿音，少女音，少御音，御姐音，御媽音，青年音', date:'Jun 1'},
    {tags:'蘿莉音，少蘿音', date:'Jun 1'}
  ];

  function openQuickOrder(){
    quickOrderOrigin = currentScreenId() || 'home';
    if(quickOrderOrigin === 'quick-order') quickOrderOrigin = 'home';
    qoQty = 1;
    document.getElementById('qo-qty').textContent = qoQty;
    document.getElementById('qo-remarks').value = '';
    document.getElementById('qo-remarks-count').textContent = '0/50';
    renderQuickOrderLists();
    showScreen('quick-order');
  }
  function adjustQoQty(delta){
    qoQty = Math.max(1, qoQty + delta);
    document.getElementById('qo-qty').textContent = qoQty;
  }
  function updateQoRemarks(){
    var v = document.getElementById('qo-remarks').value;
    document.getElementById('qo-remarks-count').textContent = v.length + '/50';
  }
  function renderQuickOrderLists(){
    document.getElementById('qo-active-list').innerHTML = ACTIVE_ORDERS.map(function(o){
      return '<div class="qo-order-card">'
        + '<div class="qo-order-top"><span class="avatar-round" style="width:20px;height:20px;background:#7B5EC7;font-size:11px;display:inline-flex;">🧑</span>正在尋找陪玩師</div>'
        + '<div class="qo-order-body"><div class="qo-order-thumb"></div><div class="qo-order-info">'
        + '<div class="t">'+o.game+'</div><div class="p">'+o.price+'</div>'
        + '<div class="desc">蘿莉音，少爺音，少女音，御姐音，大叔音，大叔音</div>'
        + '<div class="gender">'+o.gender+'</div></div></div>'
        + '<div class="qo-order-msg">💬 '+o.msg+'</div>'
        + '<div class="qo-order-foot"><span class="cnt">'+o.count+'</span><span class="exp">'+o.expire+'</span></div>'
        + '</div>';
    }).join('');
    document.getElementById('qo-history-list').innerHTML = HISTORY_ORDERS.map(function(h){
      return '<div class="qo-hist-item"><div class="qo-hist-thumb">語音<br>聊天</div><div class="qo-hist-info">'
        + '<div class="t">語音聊天</div><div class="desc">'+h.tags+'</div><div class="date">'+h.date+'</div>'
        + '</div></div>';
    }).join('');
  }
  function submitQuickOrder(){
    showScreen(quickOrderOrigin);
  }
  function goPlaceholder(title,desc){
    document.getElementById('ph-title').textContent = title;
    document.getElementById('ph-desc').textContent = desc;
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById('screen-placeholder').classList.add('active');
  }
  function setDevice(d){
    document.getElementById('stage').dataset.device = d;
    document.querySelectorAll('#dev-mobile,#dev-tablet,#dev-desktop').forEach(b=>b.classList.remove('active'));
    document.getElementById('dev-'+d).classList.add('active');
    var labels = {mobile:'Mobile · 360×760', tablet:'Tablet · 600×820', desktop:'Desktop · 1040×720'};
    document.getElementById('frame-label').textContent = labels[d];
  }
  setDevice('mobile');
  showScreen('splash');
