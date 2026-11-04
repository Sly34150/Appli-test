(() => {
  const scenes = {
    chest: { machine: "press", start: "M83 59Q99 57 108 65L117 68", finish: "M83 59Q105 57 122 60L137 61", arrow: "M116 47Q130 40 139 48", from: "Poignées près du torse", to: "Pousse devant toi" },
    incline: { machine: "press", start: "M83 59Q99 57 108 65L117 68", finish: "M83 59Q104 50 120 44L133 37", arrow: "M116 49Q128 35 140 34", from: "Mains au niveau du torse", to: "Pousse vers le haut" },
    shoulder: { machine: "shoulder", start: "M83 57Q100 54 109 62L113 69", finish: "M83 57Q98 43 103 29L104 21", arrow: "M112 44Q122 28 116 17", from: "Mains aux épaules", to: "Pousse au-dessus de la tête" },
    pecdeck: { machine: "fly", start: "M83 59Q101 54 111 60L125 65", finish: "M83 59Q98 56 105 65L110 70", arrow: "M126 48Q111 42 101 49", from: "Bras ouverts", to: "Rapproche devant la poitrine" },
    pulldown: { machine: "vertical", start: "M83 58Q101 45 110 33L117 26", finish: "M83 58Q101 57 111 70L116 79", arrow: "M132 28Q142 53 130 75", from: "Bras tendus en haut", to: "Tire vers la poitrine" },
    row: { machine: "row", start: "M83 60Q105 58 122 70L136 79", finish: "M83 60Q99 58 106 69L111 77", arrow: "M137 62Q122 58 109 67", from: "Bras allongés", to: "Ramène vers le ventre" },
    reverse: { machine: "fly", start: "M83 59Q96 58 105 69L110 77", finish: "M83 59Q102 51 115 56L132 60", arrow: "M109 46Q124 39 139 46", from: "Mains devant", to: "Ouvre les bras" },
    cable: { machine: "cable", start: "M83 58Q101 55 116 59L132 60", finish: "M83 58Q100 45 111 41L105 38", arrow: "M135 49Q125 35 110 36", from: "Bras devant", to: "Tire la corde au visage" },
    biceps: { machine: "curl", start: "M83 59Q98 69 105 82L108 96", finish: "M83 59Q100 67 106 76L104 59", arrow: "M119 89Q124 70 112 57", from: "Bras presque tendus", to: "Plie les coudes" },
    triceps: { machine: "cable", start: "M83 58Q100 56 108 67L109 78", finish: "M83 58Q100 56 108 67L111 104", arrow: "M126 71Q133 89 125 105", from: "Coudes près du corps", to: "Pousse vers le bas" },
    crunch: { machine: "crunch", start: "M83 58Q99 58 105 73L111 85", finish: "M83 58Q93 68 101 77L109 85", arrow: "M122 59Q120 75 108 83", from: "Buste droit", to: "Enroule le buste" },
    back: { machine: "back", start: "M81 57Q98 63 107 75L113 81", finish: "M81 57Q91 51 102 58L114 66", arrow: "M127 82Q137 62 126 49", from: "Buste légèrement fléchi", to: "Reviens à l'alignement" },
    lateral: { machine: "shoulder", start: "M83 59Q98 70 105 82L107 94", finish: "M83 59Q103 48 118 48L133 43", arrow: "M111 84Q128 73 135 55", from: "Bras le long du corps", to: "Lève sur les côtés" },
    pallof: { machine: "cable", start: "M83 58Q98 59 105 70L108 82", finish: "M83 58Q104 57 122 60L137 62", arrow: "M116 48Q131 41 140 50", from: "Poignée près du torse", to: "Pousse sans tourner" },
    bike: { machine: "bike", start: "M83 59Q96 55 107 62L119 72", finish: "M83 59Q96 55 107 62L119 72", arrow: "M125 54Q138 48 145 58", from: "Assieds-toi et règle la selle", to: "Pédale à ton rythme" }
  };

  const equipment = {
    press: `<path d="M37 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M47 140L51 57L60 52L57 139M145 141L151 67L158 63L153 139M50 57L151 67" class="frame"/><path d="M58 91L93 96L101 91L67 86Z" class="pad"/><path d="M59 91L58 112L66 116L67 86M67 106L104 110L110 105L72 101Z" class="pad"/><path d="M96 69L119 73L127 69M98 69L95 77M124 73L122 81" class="frame"/>`,
    shoulder: `<path d="M38 145L145 145L158 137L51 137Z" class="rail-fill"/><path d="M51 140L55 70L63 65L60 140M141 141L148 65L155 61L151 139M56 70L148 65" class="frame"/><path d="M59 95L94 99L102 94L67 90Z" class="pad"/><path d="M60 96V115L68 119V91M99 68L99 53L107 50L107 68M99 53L126 54L132 50" class="frame"/>`,
    fly: `<path d="M37 145L144 145L157 137L50 137Z" class="rail-fill"/><path d="M48 140L52 76L60 71L57 140M143 141L150 76L158 71L153 139" class="frame"/><path d="M58 103L94 108L103 102L66 97Z" class="pad"/><path d="M59 103V117L67 121V97M105 74L119 61L125 64L114 79M141 74L128 61L123 64L133 80M118 59V104M128 59V104" class="frame"/>`,
    vertical: `<path d="M38 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M139 140V39L147 34V140M157 138V43L164 39V137M144 40L160 43M145 62L158 64" class="frame"/><path d="M58 110L91 114L99 109L66 105Z" class="pad"/><path d="M63 111V120L70 123V106M91 111V120M82 34H137M82 34V42M81 42L69 43M136 34V40" class="frame"/><path d="M111 39V68" class="cable"/>`,
    row: `<path d="M38 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M48 137L51 116L59 112L57 140M143 140V97L151 92V138" class="frame"/><path d="M61 111L99 116L107 111L69 106Z" class="pad"/><path d="M61 111V120L69 124V106M103 96L139 101L146 96L110 91Z" class="pad"/><path d="M137 101L114 86L100 82" class="cable"/><circle cx="99" cy="82" r="3" class="bolt"/>`,
    cable: `<path d="M38 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M45 140V40L53 35V140M63 141V44L70 40V140M48 40L67 44M49 57L66 60M53 78L68 80" class="frame"/><circle cx="72" cy="61" r="5" class="wheel"/><path d="M72 61L93 66L107 67" class="cable"/><path d="M104 63L110 67L104 71" class="frame"/>`,
    curl: `<path d="M38 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M48 140V105L56 101V140M58 104L96 109L104 104L66 99Z" class="pad"/><path d="M58 104V115L66 119V99M95 105L104 65L111 61L105 107M100 77L122 79L129 75L108 72Z" class="frame"/>`,
    crunch: `<path d="M38 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M50 140V96L58 91V140M62 112L101 117L109 112L69 107Z" class="pad"/><path d="M62 112V122L70 126V107M105 111L113 89L120 87L115 115M113 90L129 93L134 89" class="frame"/>`,
    back: `<path d="M38 145L144 145L158 137L51 137Z" class="rail-fill"/><path d="M51 140V109L59 104V140M64 113L103 118L111 113L72 108Z" class="pad"/><path d="M64 113V123L72 127V108M106 113L121 91L129 90L115 118M119 93L135 96L142 92" class="frame"/>`,
    bike: `<circle cx="59" cy="119" r="22" class="wheel"/><circle cx="137" cy="119" r="22" class="wheel"/><circle cx="59" cy="119" r="4" class="bolt"/><circle cx="137" cy="119" r="4" class="bolt"/><path d="M59 119L92 119L111 91L137 119M92 119L81 88L111 91M80 88H69M108 87H120M111 91L119 67L133 66" class="frame"/><path d="M97 103L104 106M78 83L84 83" class="pad"/>`
  };

  const arrows = {
    chest: "M116 48Q130 41 139 53", incline: "M116 50Q130 38 138 31",
    shoulder: "M113 43Q122 25 112 16", pecdeck: "M126 53Q111 46 101 53",
    pulldown: "M128 29Q139 54 126 77", row: "M137 67Q121 60 108 71",
    reverse: "M106 53Q122 42 138 48", cable: "M135 52Q124 39 110 41",
    biceps: "M119 89Q124 70 111 57", triceps: "M123 71Q133 89 124 106",
    crunch: "M121 60Q119 76 107 84", back: "M127 83Q137 62 125 49",
    lateral: "M111 84Q128 72 136 54", pallof: "M117 51Q132 44 140 54",
    bike: "M124 54Q138 48 146 59"
  };

  const stylesheet = `
    .paper{fill:#e9e4d8}.grain{fill:url(#hatch)}.ink{fill:none;stroke:#354446;stroke-width:2.1;stroke-linecap:round;stroke-linejoin:round}.echo{fill:none;stroke:#52605b;stroke-width:1;opacity:.48;stroke-linecap:round;stroke-linejoin:round}.frame{fill:none;stroke:url(#steel);stroke-width:5;stroke-linecap:round;stroke-linejoin:round}.rail-fill{fill:url(#steel);stroke:#354446;stroke-width:1.6;stroke-linejoin:round}.pad{fill:url(#vinyl);stroke:#354446;stroke-width:1.5;stroke-linejoin:round}.cable{fill:none;stroke:#685f4c;stroke-width:1.5;stroke-linecap:round}.bolt{fill:#c36e52;stroke:#354446;stroke-width:1.3}.wheel{fill:#d7d1c2;stroke:#354446;stroke-width:2}.body{fill:url(#shirt);stroke:#354446;stroke-width:2;stroke-linejoin:round}.skin{fill:url(#skin);stroke:#354446;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}.limb{fill:none;stroke:url(#skin);stroke-width:9;stroke-linecap:round;stroke-linejoin:round}.limb-line{fill:none;stroke:#9b684f;stroke-width:1;stroke-linecap:round;opacity:.8}.pants{fill:none;stroke:#405353;stroke-width:12;stroke-linecap:round;stroke-linejoin:round}.pants-line{fill:none;stroke:#82918a;stroke-width:1.1;stroke-linecap:round;opacity:.8}.shoe{fill:#c46c53;stroke:#354446;stroke-width:1.6;stroke-linejoin:round}.motion{fill:none;stroke:#c45f49;stroke-width:2.5;stroke-linecap:round;stroke-dasharray:3 4}.shade{fill:#314143;opacity:.16}.scribble{fill:none;stroke:#354446;stroke-width:.7;opacity:.32;stroke-linecap:round}.`;

  function defs(prefix) {
    return `<defs><linearGradient id="${prefix}-steel" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#9ba49a"/><stop offset=".45" stop-color="#596a66"/><stop offset="1" stop-color="#3a4948"/></linearGradient><linearGradient id="${prefix}-vinyl" x1="0" y1="0" x2="0.8" y2="1"><stop stop-color="#89928a"/><stop offset="1" stop-color="#4d5c59"/></linearGradient><linearGradient id="${prefix}-shirt" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#83aaa0"/><stop offset=".58" stop-color="#527a73"/><stop offset="1" stop-color="#344e4c"/></linearGradient><linearGradient id="${prefix}-skin" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e1b992"/><stop offset=".55" stop-color="#c89069"/><stop offset="1" stop-color="#a9684e"/></linearGradient><pattern id="${prefix}-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V7" stroke="#65716a" stroke-width=".6" opacity=".28"/></pattern></defs><style>${stylesheet.replaceAll("url(#steel)", `url(#${prefix}-steel)`).replaceAll("url(#vinyl)", `url(#${prefix}-vinyl)`).replaceAll("url(#shirt)", `url(#${prefix}-shirt)`).replaceAll("url(#skin)", `url(#${prefix}-skin)`).replaceAll("url(#hatch)", `url(#${prefix}-hatch)`)}
      .motion-head{fill:#c45f49}</style><marker id="${prefix}-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#c45f49"/></marker>`;
  }

  function echoPath(path, className = "ink") {
    return `<path class="${className}" d="${path}"/><path class="echo" d="${path}" transform="translate(.8 .7)"/>`;
  }

  function person(scene, phase) {
    const arms = scene[phase];
    const torso = phase === "finish" && scene === scenes.crunch
      ? "M77 50Q89 52 96 62L103 78Q91 82 81 72Z"
      : phase === "start" && scene === scenes.back
        ? "M77 50Q91 53 102 64L110 76Q99 82 86 72Z"
        : "M77 50Q88 45 98 51L104 77Q94 84 80 75Z";
    const cycling = scene === scenes.bike;
    const legs = cycling
      ? "M91 80Q103 92 116 101L135 116M94 81Q105 93 98 111L83 119"
      : "M88 77Q103 85 115 98L122 120M86 78Q96 91 91 106L79 119";
    const feet = cycling
      ? `<path class="shoe" d="M131 112l10 2 5 5-13 1zM77 117l8-2 5 4-12 3z"/>`
      : `<path class="shoe" d="M118 117l7 2 7 6-16 1zM74 116l8 1 4 6-14 1z"/>`;
    const otherArm = arms.replaceAll("M83 59", "M81 61").replaceAll("Q", "Q");
    const head = `<path d="M83 32Q84 22 94 23Q104 25 101 37L97 45L86 43Z" class="skin"/><path d="M83 32Q84 22 94 23Q101 24 101 31Q95 27 89 31L86 38Z" fill="#3b3d35" stroke="#354446" stroke-width="1.5"/><path d="M99 35l4 2-4 2" class="ink"/>`;
    const shirt = `<path d="${torso}" class="body"/><path d="M82 53Q90 57 100 53M84 69Q92 72 102 68" class="scribble"/><path d="M80 49L75 54M98 50L104 54" class="ink"/>`;
    const pants = `<path d="${legs}" class="pants"/><path d="${legs}" class="pants-line"/>${feet}`;
    const armsSvg = `<path d="${otherArm}" class="limb"/><path d="${arms}" class="limb"/><path d="${arms}" class="limb-line"/><path d="${arms}" class="echo"/>`;
    return `${echoPath("M24 147Q77 143 147 147", "scribble")}<ellipse cx="96" cy="145" rx="48" ry="5" class="shade"/>${pants}${shirt}${armsSvg}${head}<path d="M82 58l-5 5M101 59l4 4" class="ink"/>`;
  }

  function renderPanel(key, phase, scene, label, caption, index) {
    const prefix = `${key}-${phase}`;
    const equipmentSvg = equipment[scene.machine] || equipment.press;
    const motionPath = arrows[key] || arrows.chest;
    return `<figure class="pose-card"><svg viewBox="0 0 180 164" role="img" aria-label="${label} : ${caption}">${defs(prefix)}<rect class="paper" x="0" y="0" width="180" height="164"/><path class="grain" d="M0 0h180v164H0z"/><path d="M8 151Q61 148 169 152" class="scribble"/><g opacity=".28" transform="translate(.8 .7)">${equipmentSvg}</g>${equipmentSvg}${person(scene, phase)}<path class="motion" d="${motionPath}" marker-end="url(#${prefix}-arrow)"/><path d="M15 17l5-3m138 136 7 2M18 127l4-2" class="scribble"/></svg><figcaption class="pose-caption"><span class="pose-number">0${index}</span><span><strong>${label}</strong><small>${caption}</small></span></figcaption></figure>`;
  }

  window.drawExerciseIllustration = key => {
    const scene = scenes[key] || scenes.chest;
    const container = document.getElementById("demo-drawing");
    container.innerHTML = renderPanel(key, "start", scene, "Départ", scene.from, 1)
      + renderPanel(key, "finish", scene, "Arrivée", scene.to, 2);
  };
})();