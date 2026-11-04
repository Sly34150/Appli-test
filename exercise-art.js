(() => {
  const scenes = {
    chest: { machine: "press", posture: "seated", focus: "chest", from: "Poignées près du torse", to: "Pousse devant toi", start: ["M307 163Q288 161 273 175L249 174", "M331 162Q309 160 294 175L270 174"], finish: ["M307 163Q282 153 257 153L227 152", "M331 162Q305 152 280 151L250 150"], arrow: "M238 196V146" },
    incline: { machine: "incline", posture: "seated", focus: "chest", from: "Poignées au torse", to: "Pousse en diagonale", start: ["M307 163Q288 161 273 175L249 174", "M331 162Q309 160 294 175L270 174"], finish: ["M307 163Q285 144 270 125L252 105", "M331 162Q310 141 298 120L280 99"], arrow: "M239 183L239 113" },
    shoulder: { machine: "shoulder", posture: "seated", focus: "shoulders", from: "Mains aux épaules", to: "Pousse au-dessus de la tête", start: ["M307 160Q288 140 296 116L300 105", "M331 160Q312 139 320 115L326 104"], finish: ["M307 160Q291 125 292 91L295 62", "M331 160Q316 123 319 89L323 60"], arrow: "M276 120V70" },
    pecdeck: { machine: "fly", posture: "seated", focus: "chest", from: "Bras ouverts", to: "Rapproche devant toi", start: ["M307 163Q280 151 255 145L235 139", "M331 162Q307 150 287 144L267 138"], finish: ["M307 163Q292 154 278 163L264 173", "M331 162Q314 153 300 162L286 172"], arrow: "M239 128Q270 113 296 132" },
    pulldown: { machine: "vertical", posture: "seated", focus: "back", from: "Bras tendus en haut", to: "Tire vers la poitrine", start: ["M307 160Q284 129 278 91L277 72", "M331 160Q308 126 307 91L307 72"], finish: ["M307 160Q286 151 283 130L281 116", "M331 160Q310 152 307 131L306 116"], arrow: "M349 78V135" },
    row: { machine: "row", posture: "seated", focus: "back", from: "Bras allongés", to: "Tire vers le ventre", start: ["M307 163Q278 164 254 174L226 177", "M331 162Q302 164 279 175L251 178"], finish: ["M307 163Q291 159 281 175L276 180", "M331 162Q312 159 303 175L299 179"], arrow: "M235 205H282" },
    reverse: { machine: "reverse", posture: "seated", focus: "shoulders", from: "Mains devant", to: "Ouvre les bras", start: ["M307 163Q291 159 279 174L267 180", "M331 162Q311 158 299 173L288 179"], finish: ["M307 163Q280 150 255 150L233 153", "M331 162Q306 148 282 147L260 149"], arrow: "M250 129Q274 112 300 131" },
    cable: { machine: "cable", posture: "standing", focus: "shoulders", from: "Bras devant", to: "Tire vers le visage", start: ["M307 163Q330 150 354 138L375 130", "M331 162Q352 149 370 138L390 131"], finish: ["M307 163Q326 147 337 126L344 116", "M331 162Q348 146 357 125L364 116"], arrow: "M403 118Q383 102 360 112" },
    biceps: { machine: "curl", posture: "seated", focus: "biceps", from: "Bras presque tendus", to: "Plie les coudes", start: ["M307 163Q289 184 282 205L280 219", "M331 162Q311 182 306 203L304 216"], finish: ["M307 163Q288 158 287 176L295 187", "M331 162Q309 157 308 175L316 186"], arrow: "M274 210Q270 184 286 174" },
    triceps: { machine: "cable", posture: "standing", focus: "triceps", from: "Coudes pliés", to: "Pousse vers le bas", start: ["M307 163Q333 162 350 178L358 190", "M331 162Q352 161 370 176L377 189"], finish: ["M307 163Q334 172 352 199L362 222", "M331 162Q355 171 375 198L385 221"], arrow: "M413 177V226" },
    crunch: { machine: "crunch", posture: "seated", focus: "core", from: "Buste droit", to: "Enroule le buste", start: ["M307 163Q290 156 278 164L269 171", "M331 162Q311 155 300 163L291 170"], finish: ["M303 169Q288 176 279 189L272 195", "M326 167Q308 175 301 188L295 194"], arrow: "M365 165Q350 192 329 200" },
    back: { machine: "back", posture: "seated", focus: "back", from: "Buste fléchi", to: "Reviens à l’alignement", start: ["M300 177Q286 165 278 169L270 175", "M323 175Q304 164 296 169L288 175"], finish: ["M307 163Q290 156 278 164L269 171", "M331 162Q311 155 300 163L291 170"], arrow: "M367 193Q354 162 334 151" },
    lateral: { machine: "lateral", posture: "seated", focus: "shoulders", from: "Bras le long du corps", to: "Lève sur les côtés", start: ["M307 163Q295 183 292 203L292 215", "M331 162Q322 183 322 202L323 215"], finish: ["M307 163Q280 151 255 146L239 142", "M331 162Q350 152 371 145L389 141"], arrow: "M280 202Q269 171 248 151" },
    pallof: { machine: "cable", posture: "standing", focus: "core", from: "Poignée au torse", to: "Pousse sans tourner", start: ["M307 163Q331 158 349 168L357 178", "M331 162Q350 158 367 169L376 178"], finish: ["M307 163Q337 160 365 165L390 170", "M331 162Q359 160 384 165L408 170"], arrow: "M360 143H405" },
    bike: { machine: "bike", posture: "bike", focus: "legs", from: "Position confortable", to: "Pédale à ton rythme", start: ["M307 163Q326 156 346 164L357 172", "M331 162Q350 155 370 164L381 172"], finish: ["M307 163Q326 156 346 164L357 172", "M331 162Q350 155 370 164L381 172"], arrow: "M260 263Q285 280 312 266" }
  };

  const equipment = {
    press: `<path d="M421 134L388 143L367 169L247 167M421 151L392 160L374 186L261 183"/><path d="M239 155V178M254 173V195" class="grip"/>`,
    incline: `<path d="M421 120L389 115L366 137L276 93M421 140L395 135L373 154L294 111"/><path d="M269 84L286 102M292 101L308 118" class="grip"/>`,
    shoulder: `<path d="M420 105L393 99L370 78L328 74M420 126L397 119L377 98L351 94"/><path d="M325 62V88M348 82V108" class="grip"/>`,
    fly: `<path d="M421 131L393 123L368 143L250 123M421 151L394 147L374 166L270 151"/><path d="M246 112V135M264 139V160" class="grip"/>`,
    vertical: `<path d="M315 66H389M350 67V99M350 97Q350 113 343 128"/><path d="M292 64V78M337 64V78" class="grip"/>`,
    row: `<path d="M438 192Q388 192 360 183L248 178"/><circle cx="438" cy="192" r="10" class="pulley"/><path d="M239 170V187M254 170V187" class="grip"/><path d="M206 244L247 244L258 278H218Z" class="pad"/>`,
    reverse: `<path d="M420 132L393 128L374 148L269 179M420 151L395 150L378 168L290 190"/><path d="M266 169V189M284 176V197" class="grip"/>`,
    cable: `<circle cx="438" cy="116" r="10" class="pulley"/><path d="M438 116Q405 117 390 140L378 149"/><path d="M375 143L389 151M375 155L389 147" class="grip"/>`,
    curl: `<path d="M350 225L339 195L296 187M337 195L278 185"/><path d="M270 179V198M289 179V198" class="grip"/><path d="M293 203H353L359 224H299Z" class="pad"/>`,
    crunch: `<path d="M350 148L376 155L386 188L364 201M382 156L397 175"/><path d="M375 190L393 203M347 201L364 215" class="grip"/>`,
    back: `<path d="M331 220L375 189L402 196L374 234Z" class="pad"/><path d="M370 224L394 243L390 289M342 233L327 285"/>`,
    lateral: `<path d="M395 128L370 120L352 140L327 169M405 149L378 149L355 166L333 184"/><path d="M317 166H336M324 181H343" class="grip"/>`,
    bike: `<circle cx="220" cy="275" r="38" class="wheel"/><circle cx="350" cy="275" r="38" class="wheel"/><path d="M220 275H290L350 275L315 211L280 275L250 220H315M249 217H230M306 207H328"/><path d="M285 265L298 275M295 256L298 275" class="grip"/>`
  };

  const style = `<style>
    .outline{stroke:#263332;stroke-width:6;stroke-linecap:round;stroke-linejoin:round}
    .machine{fill:none;stroke:#263332;stroke-width:9;stroke-linecap:round;stroke-linejoin:round}
    .metal{fill:url(#metal);stroke:#263332;stroke-width:5;stroke-linejoin:round}
    .pad{fill:#667d76;stroke:#263332;stroke-width:5;stroke-linejoin:round}
    .grip{fill:none;stroke:#d77e5e;stroke-width:13;stroke-linecap:round}
    .pulley{fill:#eef3f0;stroke:#263332;stroke-width:5}
    .skin{fill:url(#skin);stroke:#263332;stroke-width:5;stroke-linejoin:round}
    .arm-back{fill:none;stroke:#a96850;stroke-width:24;stroke-linecap:round;stroke-linejoin:round}
    .arm-front{fill:none;stroke:url(#skin);stroke-width:20;stroke-linecap:round;stroke-linejoin:round}
    .shirt{fill:url(#shirt);stroke:#263332;stroke-width:5;stroke-linejoin:round}
    .pants{fill:none;stroke:#374b4c;stroke-width:25;stroke-linecap:round;stroke-linejoin:round}
    .shoe{fill:#344747;stroke:#263332;stroke-width:4;stroke-linejoin:round}
    .focus{fill:#e87954;stroke:#9b443a;stroke-width:3}
    .direction{fill:none;stroke:#dc6849;stroke-width:5;stroke-dasharray:8 7;stroke-linecap:round}
  </style>`;

  function machineDrawing(key) {
    if (key === "bike") return `<g class="metal">${equipment.bike}</g><path d="M130 308H492" class="machine"/>`;
    const tower = `<path d="M430 300V75L449 63V300Z" class="metal"/><path d="M449 63H490V300H449Z" fill="#9ea9a4" class="outline"/><rect x="438" y="103" width="43" height="133" fill="#d5ded9" stroke="#263332" stroke-width="4"/><path d="M439 119H480M439 137H480M439 155H480M439 173H480M439 191H480M439 209H480M439 227H480" fill="none" stroke="#70817b" stroke-width="4"/><circle cx="438" cy="87" r="11" class="pulley"/><path d="M438 87Q382 98 383 130" fill="none" stroke="#263332" stroke-width="4"/><path d="M420 300H505L520 310H405Z" fill="#647770" class="outline"/>`;
    const seat = `<path d="M329 148L367 143V235L329 239Z" class="pad"/><path d="M321 229H398L411 244L332 247Z" class="pad"/><path d="M352 240L353 295M396 242L405 295M336 297H372M390 297H424" class="machine"/><path d="M125 307H520" class="machine"/>`;
    return `<g>${tower}${seat}<g fill="none" stroke="#263332" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">${equipment[key] || equipment.press}</g></g>`;
  }

  function renderScene(key, phase) {
    const scene = scenes[key] || scenes.chest;
    const detail = exerciseScenes[key] || exerciseScenes.chest;
    const armPaths = detail[phase];
    const seated = detail.posture !== "standing";
    const legs = seated
      ? `<path d="M320 217Q294 231 270 245L245 247M321 222Q300 239 287 257L278 281M245 247L237 289M278 281L294 300" class="pants"/>`
      : `<path d="M315 219Q313 250 305 279L301 301M340 219Q353 250 360 279L362 301" class="pants"/>`;
    const shoes = `<path d="M225 292L248 293L258 304L226 306ZM285 299L307 300L315 311L284 311Z" class="shoe"/>`;
    const body = `<path d="M298 149Q312 137 338 146L352 211Q340 224 317 219L296 178Z" class="shirt"/>`;
    const focus = detail.focus === "chest" ? `<path d="M301 154Q316 145 329 153L327 172L307 171Z" class="focus"/>`
      : detail.focus === "back" ? `<path d="M335 151L346 156L348 195L337 201L330 180Z" class="focus"/>`
      : detail.focus === "shoulders" ? `<circle cx="302" cy="151" r="10" class="focus"/>`
      : detail.focus === "biceps" || detail.focus === "triceps" ? `<path d="M289 164L304 165L299 184L286 180Z" class="focus"/>`
      : detail.focus === "core" ? `<path d="M310 175L333 176L337 207L314 206Z" class="focus"/>`
      : `<path d="M319 231L337 234L352 272L338 276Z" class="focus"/>`;
    const arms = armPaths.map((path, index) => `<path d="${path}" class="${index ? "arm-back" : "arm-front"}"/><circle cx="${path.match(/(-?\d+(?:\.\d+)?)\s*$/)?.[1] || 250}" cy="${path.match(/(-?\d+(?:\.\d+)?)\s*$/)?.[1] || 165}" r="8" class="skin"/>`).join("");
    const arrow = `<path d="${detail.arrow}" class="direction" marker-end="url(#arrow)"/>`;
    return `<svg viewBox="0 0 640 400" role="img" aria-label="${scene.name || key} : ${phase === "start" ? detail.from : detail.to}"><defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#dce3df"/><stop offset=".5" stop-color="#a4b0ab"/><stop offset="1" stop-color="#65736e"/></linearGradient><linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f8d8ba"/><stop offset=".55" stop-color="#dea783"/><stop offset="1" stop-color="#b87459"/></linearGradient><linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a5c9b9"/><stop offset="1" stop-color="#548b7f"/></linearGradient><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#dc6849"/></marker></defs>${style}<rect width="640" height="400" fill="#fff"/><path d="M113 295C69 227 111 111 206 71C309 26 475 65 526 158C567 235 523 312 448 336C329 374 176 350 113 295Z" fill="#e9f1ed"/><ellipse cx="325" cy="350" rx="252" ry="24" fill="#d7e5df"/><path d="M54 354Q332 329 590 354" fill="none" stroke="#b4c9bf" stroke-width="2"/>${machineDrawing(key)}${legs}<path d="M298 149Q312 137 338 146L352 211Q340 224 317 219L296 178Z" class="shirt"/>${focus}<path d="M287 116Q287 94 307 92Q328 94 328 116L323 139L296 139Z" class="skin"/><path d="M288 109Q292 91 308 92Q322 92 327 106L320 103L303 104L293 119Z" fill="#354340" class="outline"/>${arms}${shoes}${arrow}<text x="30" y="38" fill="#263332" font-size="16" font-weight="800" letter-spacing="1">${phase === "start" ? "DÉPART" : "MOUVEMENT"}</text><text x="610" y="375" text-anchor="end" fill="#58635e" font-size="13">Zone orange : muscles sollicités</text></svg>`;
  }

  window.drawExerciseIllustration = key => {
    const container = document.getElementById("demo-drawing");
    const phase = document.querySelector("[data-pose][aria-pressed=\"true\"]")?.dataset.pose || "start";
    container.innerHTML = renderScene(key, phase);
  };
})();