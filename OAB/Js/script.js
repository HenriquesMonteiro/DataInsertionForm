const SECTIONS = [
  {
    label: "Identificação do paciente",
    color: "#1a56a0",
    bg: "#e8f0fb",
    fields: [
      { id: "f_id",     label: "ID",      type: "text",   ph: "ex: 152245792" },
      { id: "f_age",    label: "Age",     type: "number", ph: "anos" },
      { id: "f_bmi",    label: "BMI",     type: "text",   ph: "ex: 28 ou NI" },
      { id: "f_parity", label: "Parity",  type: "number", ph: "nº de partos" }
    ]
  },
  {
    label: "Tipo de parto",
    color: "#0f6e56",
    bg: "#e1f5ee",
    fields: [
      { id: "f_nvd", label: "Normal VD",           type: "number", ph: "0" },
      { id: "f_ces", label: "Cesarian / Cesation", type: "number", ph: "0" }
    ]
  },
  {
    label: "Estado menopáusico",
    color: "#534ab7",
    bg: "#eeedfe",
    fields: [
      { id: "f_peri", label: "Peri Meno",  type: "select", opts: ["no","yes","NI"] },
      { id: "f_pre",  label: "Pre Meno",   type: "select", opts: ["no","yes","NI"] },
      { id: "f_post", label: "Post Meno",  type: "select", opts: ["yes","no","NI"] }
    ]
  },
  {
    label: "Historial hormonal / hábitos",
    color: "#854f0b",
    bg: "#faeeda",
    fields: [
      { id: "f_lvo",   label: "Local vaginal Oestrogens", type: "combo", opts: ["no","yes","NI"], ph: "especificar..." },
      { id: "f_sht",   label: "Syst Horm Ther",           type: "combo", opts: ["no","yes","NI"], ph: "especificar..." },
      { id: "f_smoke", label: "Smoking",                  type: "combo", opts: ["no","yes","NI"], ph: "especificar..." },
      { id: "f_sex",   label: "Sexual activity",          type: "select", opts: ["no","yes","NI"] }
    ]
  },
  {
    label: "Sintomas / POP",
    color: "#993c1d",
    bg: "#faece7",
    fields: [
      { id: "f_dpop", label: "Due POP",    type: "select", opts: ["no","yes","NI"] },
      { id: "f_nop",  label: "No partner", type: "select", opts: ["no","yes","NI"] },
      { id: "f_disp", label: "Dyspareunia",type: "combo",  opts: ["no","yes","NI"], ph: "ex: primária, secundária..." }
    ]
  },
  {
    label: "Comorbilidades",
    color: "#3b6d11",
    bg: "#eaf3de",
    fields: [
      { id: "f_co",   label: "Comorbities (geral)", type: "free",  ph: "ex: CHPT, DM, outras..." },
      { id: "f_gas",  label: "Gastro",              type: "combo", opts: ["no","yes","NI"], ph: "ex: GERD, colite..." },
      { id: "f_car",  label: "Cardio",              type: "combo", opts: ["no","yes","NI"], ph: "ex: CHPT, HTA, FA..." },
      { id: "f_res",  label: "Resp",                type: "combo", opts: ["no","yes","NI"], ph: "ex: asma, DPOC..." },
      { id: "f_nerv", label: "Nerv Syst",           type: "combo", opts: ["no","yes","NI"], ph: "ex: AVC, esclerose..." },
      { id: "f_mus",  label: "Musc/skel",           type: "combo", opts: ["no","yes","NI"], ph: "ex: artrite, osteoporose..." },
      { id: "f_met",  label: "Metabolic",           type: "combo", opts: ["no","yes","NI"], ph: "ex: Dyslipidemia, obesidade..." },
      { id: "f_end",  label: "Endocrin",            type: "combo", opts: ["no","DM","yes","NI"], ph: "ex: DM tipo 2, hipotiroidismo..." }
    ]
  },
  {
    label: "Cirurgias anteriores",
    color: "#1a56a0",
    bg: "#e8f0fb",
    fields: [
      { id: "f_psui", label: "Previous SUI surgery", type: "free",  ph: "ex: no / UP Hold mesh" },
      { id: "f_ppop", label: "Previous POP surgery", type: "free",  ph: "ex: no / yes" },
      { id: "f_hys",  label: "Post Hysterectomy",    type: "combo", opts: ["no","Yes","NI"], ph: "ex: total, subtotal..." }
    ]
  },
  {
    label: "Compartimentos POP",
    color: "#534ab7",
    bg: "#eeedfe",
    fields: [
      { id: "f_ant",   label: "Ant comp",  type: "free", ph: "ex: GII / no" },
      { id: "f_postc", label: "Post comp", type: "free", ph: "ex: no / GIII" },
      { id: "f_mid",   label: "Mid comp",  type: "free", ph: "ex: GII / GIV" }
    ]
  },
  {
    label: "Sintomas OAB",
    color: "#993c1d",
    bg: "#faece7",
    fields: [
      { id: "f_oab",  label: "OAB symptoms",           type: "combo",  opts: ["yes","no","NI"], ph: "detalhar..." },
      { id: "f_urg",  label: "Urgency",                type: "select", opts: ["Yes","no","NI"] },
      { id: "f_freq", label: "Frequency",              type: "select", opts: ["yes","no","NI"] },
      { id: "f_noct", label: "Nocturia",               type: "select", opts: ["Yes","no","NI"] },
      { id: "f_urgi", label: "Urge incontinence",      type: "select", opts: ["Yes","no","NI"] },
      { id: "f_sui",  label: "SUI",                    type: "combo",  opts: ["no","yes","NI"], ph: "ex: esforço, misto..." },
      { id: "f_uvd",  label: "Urinary voiding dysfunct.", type: "combo", opts: ["no","yes","NI"], ph: "detalhar..." },
      { id: "f_cons", label: "Constipation",           type: "combo",  opts: ["no","yes","NI"], ph: "detalhar..." },
      { id: "f_gps",  label: "Genital prolapse sympt.",type: "free",   ph: "ex: Bulge / no" },
      { id: "f_uti",  label: "UTI preoperatively",     type: "combo",  opts: ["no","yes","NI"], ph: "ex: recorrente..." }
    ]
  },
  {
    label: "Gestão médica",
    color: "#854f0b",
    bg: "#faeeda",
    fields: [
      { id: "f_mmoab", label: "Medical management of OAB", type: "free", ph: "ex: Diatropan / no" },
      { id: "f_popm",  label: "POP management",            type: "free", ph: "ex: no / pessário" }
    ]
  },
  {
    label: "Tipo de cirurgia",
    color: "#0f6e56",
    bg: "#e1f5ee",
    fields: [
      { id: "f_vag", label: "Vaginal",      type: "free",   ph: "ex: AVR / AVR/SSF / Up Hold" },
      { id: "f_vm",  label: "Vaginal Mesh", type: "select", opts: ["no","yes","NI"] },
      { id: "f_lap", label: "Laparos",      type: "select", opts: ["no","yes","NI"] },
      { id: "f_rob", label: "Robot",        type: "select", opts: ["no","yes","NI"] },
      { id: "f_abd", label: "Abdominal",    type: "select", opts: ["no","yes","NI"] },
      { id: "f_vl",  label: "Vag/Lap",      type: "select", opts: ["no","yes","NI"] },
      { id: "f_rv",  label: "Rob/Vag",      type: "select", opts: ["no","yes","NI"] }
    ]
  },
  {
    label: "Complicações e resultados",
    color: "#993556",
    bg: "#fbeaf0",
    fields: [
      { id: "f_ioc",   label: "Intra op complications", type: "combo", opts: ["no","yes","NI"], ph: "descrever..." },
      { id: "f_poc",   label: "Post op complication",   type: "combo", opts: ["no","yes","NI"], ph: "descrever..." },
      { id: "f_out",   label: "Outcomes",               type: "free",  ph: "ex: Improved / Persistence / no" },
      { id: "f_oabf",  label: "OAB follow-up",          type: "free",  ph: "ex: no / Improved" },
      { id: "f_freqf", label: "Frequency follow-up",    type: "free",  ph: "ex: NaN / no" },
      { id: "f_void",  label: "Voiding",                type: "free",  ph: "ex: no" },
      { id: "f_suif",  label: "SUI follow-up",          type: "free",  ph: "ex: no / De novo" },
      { id: "f_consf", label: "Constipation follow-up", type: "free",  ph: "ex: no" },
      { id: "f_prolf", label: "Prolapse follow-up",     type: "free",  ph: "ex: Grad II ant / no" }
    ]
  },
  {
    label: "Medicação pós-op OAB e seguimento",
    color: "#3b6d11",
    bg: "#eaf3de",
    fields: [
      { id: "f_poabm", label: "Post OAB Med",       type: "combo", opts: ["no","yes","NI"], ph: "ex: nome do medicamento" },
      { id: "f_doabm", label: "Desct of OAB Med",   type: "free",  ph: "ex: Diatropan 5mg" },
      { id: "f_fu",    label: "Follow-up (meses)",  type: "free",  ph: "ex: > 12 M / < 6 M" }
    ]
  }
];

/* ── Build form ── */
function buildForm() {
  const root = document.getElementById("form-root");

  SECTIONS.forEach(sec => {
    const card = document.createElement("div");
    card.className = "section-card";
    card.style.borderColor = sec.color + "44";

    const hdr = document.createElement("div");
    hdr.className = "section-header";
    hdr.style.borderBottomColor = sec.color + "33";

    const icon = document.createElement("div");
    icon.className = "section-icon";
    icon.style.background = sec.bg;
    icon.style.border = `1.5px solid ${sec.color}66`;

    const title = document.createElement("span");
    title.className = "section-title";
    title.style.color = sec.color;
    title.textContent = sec.label;

    hdr.appendChild(icon);
    hdr.appendChild(title);
    card.appendChild(hdr);

    const grid = document.createElement("div");
    grid.className = "field-grid";

    sec.fields.forEach(f => {
      const wrap = document.createElement("div");
      wrap.className = "field-wrap";

      const lbl = document.createElement("label");
      lbl.className = "field-label";
      lbl.setAttribute("for", f.id);
      lbl.textContent = f.label;
      wrap.appendChild(lbl);

      if (f.type === "combo") {
        const sel = document.createElement("select");
        sel.id = f.id;
        sel.className = "combo-select";
        f.opts.forEach(o => {
          const op = document.createElement("option");
          op.value = o;
          op.textContent = o;
          sel.appendChild(op);
        });
        wrap.appendChild(sel);

        const det = document.createElement("input");
        det.id = f.id + "_det";
        det.type = "text";
        det.placeholder = f.ph || "especificar...";
        det.className = "combo-detail";
        det.title = "Se preenchido, este valor será usado em vez da opção acima";
        wrap.appendChild(det);

        const hint = document.createElement("div");
        hint.className = "combo-hint";
        hint.textContent = "↑ escreve para substituir a opção";
        wrap.appendChild(hint);

      } else if (f.type === "select") {
        const sel = document.createElement("select");
        sel.id = f.id;
        f.opts.forEach(o => {
          const op = document.createElement("option");
          op.value = o;
          op.textContent = o;
          sel.appendChild(op);
        });
        wrap.appendChild(sel);

      } else {
        const inp = document.createElement("input");
        inp.id = f.id;
        inp.type = f.type === "number" ? "number" : "text";
        inp.placeholder = f.ph || "";
        wrap.appendChild(inp);
      }

      grid.appendChild(wrap);
    });

    card.appendChild(grid);
    root.appendChild(card);
  });
}

/* ── Get value from a field (combo prefers detail text) ── */
function getVal(f) {
  if (f.type === "combo") {
    const det = (document.getElementById(f.id + "_det") || {}).value || "";
    if (det.trim()) return det.trim();
    return (document.getElementById(f.id) || {}).value || "";
  }
  return ((document.getElementById(f.id) || {}).value || "").trim();
}

/* ── Generate tab-separated line ── */
function generate() {
  const vals = SECTIONS.flatMap(s => s.fields).map(f => getVal(f));
  vals.push(""); // trailing empty column
  window._line = vals.join("\t");

  document.getElementById("out-box").textContent = window._line;
  document.getElementById("out-wrap").style.display = "block";
  document.getElementById("ok-badge").style.display = "none";
}

/* ── Copy to clipboard ── */
function copyLine() {
  if (!window._line) return;
  navigator.clipboard.writeText(window._line).then(() => {
    const b = document.getElementById("ok-badge");
    b.style.display = "inline-block";
    setTimeout(() => (b.style.display = "none"), 2500);
  });
}

/* ── Clear all fields ── */
function clearAll() {
  document.querySelectorAll("#form-root input").forEach(i => (i.value = ""));
  document.querySelectorAll("#form-root select").forEach(s => (s.selectedIndex = 0));
  document.getElementById("out-wrap").style.display = "none";
  window._line = "";
}

/* ── Init ── */
buildForm();
