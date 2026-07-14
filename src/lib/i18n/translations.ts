export const locales = ["en", "pl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const en = {
  nav: {
    platform: "Platform",
    technology: "Technology",
    about: "About",
    contact: "Contact",
    talkToUs: "Talk to us",
    toggleMenu: "Toggle menu",
  },
  footer: {
    tagline:
      "An on-premise AI and GPU-simulation pipeline for personalized cancer treatment — from trial matching to tumor genome interpretation to in-silico therapy testing.",
    builtOn: "Built on NVIDIA CUDA, BioNeMo & Evo 2.",
    disclaimer:
      "Our tools provide informational, research-oriented decision support. They do not diagnose, prescribe, or replace the judgment of a qualified clinician.",
    platformCol: "Platform",
    companyCol: "Company",
    trialMatcher: "Trial Matcher",
    oncokernel: "OncoKernel",
    digitalTwin: "Digital Twin",
    aiWetlab: "AI + Wet Lab",
    rightsReserved: "All rights reserved.",
  },
  home: {
    badge: "Precision Oncology × Accelerated Computing",
    h1Pre: "The AI-accelerated pipeline for",
    h1Gradient: "personalized oncology",
    sub: "Bastard Software builds the compute infrastructure that translates raw tumor sequences into matched clinical trials, explainable treatment plans, and spatial GPU simulations of the tumor microenvironment.",
    exploreBtn: "Explore the platform",
    talkBtn: "Talk to us",
    pipelineChips: ["Trial Matcher", "OncoKernel", "Digital Twin", "NVIDIA BioNeMo"],
    problemEyebrow: "The problem",
    problemTitlePre: "Sequencing is cheap.",
    problemTitleGradient: "Compute-driven interpretation is the bottleneck.",
    problemDesc:
      "Hospitals generate terabytes of sequence data, but lack the HPC pipelines and AI reasoning to make it actionable. Actionable mutations are missed, and patients fail to match with life-saving trials.",
    platformEyebrow: "The Platform",
    platformTitle: "A unified ecosystem for clinical decision support",
    platformDesc:
      "From instant trial matching for clinicians to deep GPU-accelerated tumor simulation.",
    pillars: [
      {
        tag: "01 — Trial Matcher",
        title: "Instant clinical trial matching for oncologists",
        description:
          "Our live clinician-facing portal. Enter patient biomarkers and location to instantly retrieve recruiting trials and drug reimbursement programmes using our LLM-powered RAG architecture.",
      },
      {
        tag: "02 — OncoKernel",
        title: "GPU-accelerated tumor genome interpretation",
        description:
          "Our on-premise pipeline processing FASTQ to actionable insights. We leverage GPU-accelerated foundation models to score variants of unknown significance and match genotypes to therapies.",
      },
      {
        tag: "03 — Digital Twin",
        title: "GPU-accelerated spatial tumor simulation",
        description:
          "An Agent-Based Modeling (ABM) engine written in SYCL, compiling to native CUDA on NVIDIA hardware. We simulate the tumor microenvironment and immune infiltration on GPU to test therapy efficacy in-silico.",
      },
      {
        tag: "04 — AI & Wet Lab (Future)",
        title: "Designing mRNA & CAR-T therapies",
        description:
          "Our future horizon: taking BioNeMo-generated protein structures and validating AI-designed neoantigen vaccines physically in patient-derived organoids.",
      },
    ],
    whyEyebrow: "Why it's different",
    whyTitle: "Engineered for high-performance computing",
    highlights: [
      {
        title: "GPU-native & AI-first",
        description:
          "From accelerated bioinformatics pipelines to spatial SYCL-compute simulations, our stack is engineered for GPU acceleration — compiling to CUDA and integrating NVIDIA BioNeMo where they matter most.",
      },
      {
        title: "On-premise & GDPR-compliant",
        description:
          "Patient data never egresses to public clouds. Our containerized pipeline runs securely inside the hospital's network, ensuring full compliance by construction.",
      },
      {
        title: "Grounded LLM Reasoning",
        description:
          "Every clinical recommendation is backed by Semantic RAG, served locally on GPU, linking molecular profiles directly to cited biomedical literature and real-time trial registries.",
      },
      {
        title: "Built by a clinician and an engineer",
        description:
          "Founded by a physician and a GPU systems engineer, bridging the gap between clinical reality and high-performance computing.",
      },
    ],
  },
  about: {
    metaTitle: "About",
    metaDesc:
      "Bastard Software is building the on-premise AI and GPU-simulation pipeline for personalized cancer treatment — founded by a physician and a computer scientist, with a practicing oncologist as clinical design partner.",
    eyebrow: "About",
    titlePre: "Founded by a physician and",
    titleGradient: "a computer scientist",
    desc: "Bastard Software exists because the hardest parts of precision oncology — clinical judgment and AI/GPU systems engineering — are almost never found in the same room. We put both in the founding team.",
    team: [
      {
        name: "Mateusz Bahyrycz",
        role: "Founder & CEO",
        badges: ["MD", "GPU / CUDA Systems Engineer"],
        bio: "Mateusz founded Bastard Software to close the gap between clinical medicine and the low-level compute infrastructure precision oncology actually needs — from SYCL/CUDA compute kernels to on-premise AI inference. He leads the company's technical architecture and the Digital Twin simulation engine.",
      },
      {
        name: "Rafał Nojek",
        role: "Co-Founder",
        badges: ["MD", "AI / ML Engineer"],
        bio: "Rafał pairs a physician's perspective with deep expertise in machine learning, large language models, and data science. He is the core implementer of Bastard Software's AI stack, particularly OncoKernel's knowledge-graph reasoning and clinical copilot.",
      },
    ],
    paragraphs: [
      "That pairing is not incidental to the product — it is the thesis. Precision oncology software fails when it is built by one discipline in isolation: engineers who don't understand what a tumor board actually needs, or clinicians without the systems background to build AI infrastructure that runs safely inside a hospital network.",
      "We work alongside a practicing oncologist as clinical design partner and first pilot site — supplying the oncology domain validation, and the hospital relationship that turns a demo into a deployment.",
    ],
    thesisCards: [
      {
        title: "Our thesis",
        description:
          "Sequencing a tumor is cheap. Interpreting it — safely, explainably, and without the data leaving the hospital — is the hard, valuable problem.",
      },
      {
        title: "Clinician-led design",
        description:
          "Every tool is designed around what a physician actually does with the output, with a practicing oncologist validating the workflow.",
      },
      {
        title: "Systems-engineering rigor",
        description:
          "GPU compute, data contracts, and on-premise deployment are treated as first-class engineering problems, not afterthoughts.",
      },
      {
        title: "Built for hospitals",
        description:
          "Every architectural decision is made to be deployable inside a real hospital network under real regulatory constraints.",
      },
    ],
  },
  contact: {
    metaTitle: "Contact",
    metaDesc:
      "Get in touch with Bastard Software — hospitals, research partners, and investors welcome.",
    eyebrow: "Contact",
    title: "Let's talk",
    desc: "Whether you're a hospital exploring a pilot, a researcher interested in the platform, or an investor — we'd like to hear from you.",
    location: "Kraków, Poland — built for hospitals worldwide",
  },
  contactForm: {
    name: "Name",
    namePlaceholder: "Jane Kowalski",
    email: "Email",
    emailPlaceholder: "you@hospital.org",
    message: "Message",
    messagePlaceholder: "Tell us about your hospital, research group, or what you're building.",
    submit: "Send message",
    subjectVisitor: "a visitor",
    subjectPrefix: "Website inquiry from",
  },
  platform: {
    metaTitle: "Platform",
    metaDesc:
      "The Bastard Software platform: a clinical trial matcher, the GPU-accelerated OncoKernel genome interpretation pipeline, the SYCL/CUDA Digital Twin simulation engine, and NVIDIA BioNeMo-designed, wet-lab validated mRNA vaccines and CAR-T therapies.",
    introEyebrow: "The Platform",
    introTitlePre: "One pipeline,",
    introTitleGradient: "growing set of tools",
    introDesc:
      "Each tool is built to stand on its own, and together they form a single continuous path — from the first search for a nearby trial, to a full molecular interpretation of the tumor, to simulating and designing the therapy itself. More tools join this pipeline over time.",
    trialMatcher: {
      badge: "In development — the front door",
      title: "Find the closest matching clinical trial in seconds",
      desc: "A public-data panel built for oncologists. Enter an indication, a few biomarkers, and a location — get back the nearest recruiting clinical trials and the drug reimbursement programmes a patient would qualify for. Europe first: EU trial registries (CTIS, EUCTR) unioned with ClinicalTrials.gov, plus national drug reimbursement schemes.",
      bullets: [
        "Ranked by clinical fit and distance to the patient",
        "Includes national drug reimbursement programmes, not just trials",
        "Public registries only — no patient sequence ever touched",
      ],
      panelUrl: "trial-matcher.oncokernel.com",
      indication: "Indication",
      indicationValue: "Osteosarcoma",
      biomarkers: "Biomarkers",
      biomarkersValue: "TP53 R248W, TMB-high",
      locationLabel: "Location",
      locationValue: "Kraków, PL · 200 km radius",
      matchLabel: "Match",
      matchDistance: "18 km away",
      matchTitle: "Phase II — Adavosertib in TP53-mutant sarcoma",
      matchProgramme: "NFZ programme",
      matchTitle2: "B.72 drug reimbursement pathway — bone sarcomas",
    },
    oncokernel: {
      badge: "Core platform — on-premise pipeline",
      title: "OncoKernel: from raw tumor sequence to a citation-grounded treatment plan",
      desc: "OncoKernel runs entirely inside the hospital's own network. It takes a tumor sample through four decoupled blocks — each replaceable, each testable on its own — and ends with a physician-facing dashboard and a grounded chat copilot.",
      steps: [
        {
          label: "Block 1 — Ingestion",
          title: "Raw reads to a characterised genome",
          description:
            "Somatic variant calling, tumor purity/ploidy/TMB/MSI, and HLA typing — wrapping clinically-validated, open-source tools rather than re-deriving solved bioinformatics.",
        },
        {
          label: "Block 2 — Knowledge Graph",
          title: "Annotate and score every variant",
          description:
            "Known variants are resolved against a live graph of genes, drugs, and indications; variants of uncertain significance are scored with a genomic foundation model.",
        },
        {
          label: "Block 3 — Reasoning",
          title: "Match genotype to therapy",
          description:
            "A multi-agent retrieval system matches the patient's molecular profile against guidelines, literature, and live trial registries — every claim cites its source.",
        },
        {
          label: "Block 4 — Dashboard",
          title: "Present it to the physician",
          description:
            "A scannable dashboard with a grounded chat copilot and one-click PDF export — informational decision support, the oncologist decides.",
        },
      ],
      cards: [
        {
          title: "GDPR by construction",
          description:
            "Genomic data never leaves the hospital network — the same architectural choice that unlocks the sale unlocks the compliance story.",
        },
        {
          title: "Genomic foundation models",
          description:
            "Zero-shot variant-effect scoring via Evo 2, GPU-accelerated, for mutations no database has classified yet — with a plain-language rationale attached.",
        },
        {
          title: "Live knowledge graph",
          description:
            "Genes, variants, drugs, pathways, and indications resolved against a continuously updated graph, not a static spreadsheet.",
        },
        {
          title: "Grounded clinical copilot",
          description:
            "Served locally for low-latency inference — no cloud round-trip. Every answer cites the exact source paragraph; informational decision support, the oncologist always decides.",
        },
      ],
    },
    digitalTwin: {
      badge: "Active simulation engine",
      titlePre: "A GPU-native",
      titleGradient: "Digital Twin",
      titlePost: "of the tumor microenvironment",
      descPre:
        "Our Agent-Based Modeling (ABM) engine is built compute-first with SYCL — a portable compute standard across GPU vendors.",
      descNote: "On NVIDIA hardware it compiles to native CUDA for maximum performance.",
      descPost:
        "It dynamically simulates cancer cells, immune infiltration (TILs), and drug diffusion as continuous fields, executing entirely on GPU compute shaders — letting us test AI-generated therapies in-silico before they ever enter the wet lab.",
      cards: [
        {
          title: "SYCL Compute, GPU-Native",
          description:
            "Massively parallelized spatial hashing and collision detection on GPU compute shaders — eliminating CPU bottlenecks typical of legacy simulators.",
        },
        {
          title: "Biologically grounded agents",
          description:
            "Simulating hypoxia, angiogenic signalling, and CAR-T cell penetration based on the genomic profile extracted by OncoKernel.",
        },
        {
          title: "In-silico therapy screening",
          description:
            "Providing a deterministic, physics-based environment to evaluate the kinetic efficacy of immunotherapies designed by generative AI.",
        },
      ],
    },
    aiWetlab: {
      badge: "Future Horizon — Phase 3",
      title: "AI + Wet Lab: Bringing in-silico designs to physical reality",
      desc: "While our software stack models the biology, our ultimate roadmap involves physical validation. In the future, the neoantigens identified by OncoKernel and folded by BioNeMo will be synthesized into mRNA vaccines and validated in patient-derived organoids and tumor-on-a-chip microfluidics in our partner wet labs.",
      cards: [
        {
          title: "AI-designed neoantigen vaccines",
          description:
            "mRNA transcripts designed against a patient's tumor-specific mutations and HLA type, validated in-silico before synthesis.",
        },
        {
          title: "CAR-T therapy design",
          description:
            "Engineering chimeric antigen receptor constructs targeting the tumor-specific antigens the platform surfaces for that patient.",
        },
        {
          title: "Wet-lab validation",
          description:
            "Patient-derived organoids and tumor-on-a-chip models give a physical check on every AI prediction before it reaches a patient.",
        },
      ],
    },
    cta: {
      title: "Interested in a pilot, a partnership, or the underlying technology?",
      button: "Get in touch",
    },
  },
  technology: {
    metaTitle: "Technology",
    metaDesc:
      "The architecture behind Bastard Software: on-premise GDPR-by-design infrastructure, GPU-accelerated genomic AI (NVIDIA BioNeMo, Evo 2), and a SYCL/CUDA simulation engine.",
    eyebrow: "Technology",
    titlePre: "The architecture",
    titleGradient: "beneath the pipeline",
    desc: "Three engineering decisions run through everything we build: patient data never leaves the hospital, every recommendation must be explainable, and the heavy compute belongs on a GPU.",
    privacy: {
      badge: "The privacy architecture",
      title: "On-premise by construction, not by policy",
      p1: "Under EU GDPR Article 9, genetic data is a special category — processing it is tightly restricted, and hospital directors carry the liability for any breach. Our answer is architectural: the ingestion and reasoning services run as containers on the hospital's own network. No patient sequence is ever sent to a cloud API. Only de-identified, abstracted queries leave — to a public trial registry or a literature index.",
      p2: "Every recommendation is also framed as informational decision support. A clinician is in the loop at every step; the system answers questions and cites sources, it does not issue directives.",
      boundaryLabel: "Hospital network boundary",
      rows: [
        { label: "Tumor FASTQ / sequencing data", note: "never leaves" },
        { label: "Variant calling & knowledge graph", note: "runs on-site" },
        { label: "De-identified queries only", note: "leaves boundary" },
      ],
      note1: "GDPR Art. 9-aligned by design, not by policy",
      note2: "Target deployment: purpose-built edge hardware for regulated, on-premise medical AI",
    },
    aiStack: {
      eyebrow: "The reasoning stack",
      title: "Accelerated AI Inference & RAG",
      cards: [
        {
          title: "NVIDIA BioNeMo Integration",
          description:
            "Leveraging NVIDIA BioNeMo to predict 3D protein structures (AlphaFold2/ESMFold) and design highly affine neoantigens for personalized mRNA vaccines.",
        },
        {
          title: "Genomic Foundation Models",
          description:
            "Utilizing models like Evo 2, accelerated by GPUs, to score variants of unknown significance (VUS) and perform deep sequence-level reasoning.",
        },
        {
          title: "Multi-agent Semantic RAG",
          description:
            "A LangGraph architecture using local vector stores (e.g., Qdrant) and MedCPT embeddings to match patient genotypes with real-time clinical trials and literature without hallucinations.",
        },
        {
          title: "Nextflow Bio-Pipelines",
          description:
            "Highly parallelized, containerized execution of genomics workflows (WiGiTS, SAGE, LILAC) capable of running on local HPC clusters or bursting to cloud GPUs.",
        },
      ],
    },
    gpuJustification: {
      eyebrow: "Compute justification",
      titlePre: "Every GPU workload,",
      titleGradient: "justified",
      desc: "We don't reach for a GPU by default — each workload below is GPU-bound because the alternative is either too slow to be clinically useful or physically impossible on CPU. Where CPU is the right tool, we use CPU.",
      workloads: [
        {
          workload: "Novel variant (VUS) scoring",
          tech: "Evo 2 (7B, quantized), GPU-accelerated",
          why: "Deterministic calling (SAGE/PURPLE/LILAC) already runs on CPU — but scoring the variants no database has classified needs a foundation model in the loop, and that doesn't fit a real-time CPU budget.",
        },
        {
          workload: "Neoantigen & protein design",
          tech: "NVIDIA BioNeMo",
          why: "Structure prediction and docking (AlphaFold2/ESMFold-class models) to design and rank personalized vaccine candidates.",
        },
        {
          workload: "Clinical copilot inference",
          tech: "Local LLM, GPU-accelerated",
          why: "Low-latency, quantized on-premise serving — the copilot answers in seconds without a single call to a cloud API.",
        },
        {
          workload: "Tumor microenvironment simulation",
          tech: "SYCL compute",
          why: "Thousands of interacting agents updated every frame — a CPU-bound simulator cannot run this at a clinically useful scale. Compiles to native CUDA on NVIDIA hardware.",
        },
      ],
      roadmapPre: "Roadmap —",
      roadmapText:
        "evaluating GPU-accelerated retrieval and graph-traversal engines to scale the knowledge graph further.",
    },
    simulation: {
      badge: "GPU-Accelerated Computing",
      titlePre: "A compute-first simulation engine, built to",
      titleGradient: "run anywhere",
      descPre:
        "Our Agent-Based Modeling engine is written in C++20 with SYCL — a vendor-neutral compute standard that runs across GPU architectures.",
      descNote: "On NVIDIA hardware, it compiles to native CUDA for maximum throughput.",
      descPost:
        "By offloading massive spatial hashing and cell-to-cell collision detection entirely to GPU compute shaders, we eliminate CPU bottlenecks typical of legacy simulators — letting us model the tumor microenvironment at a clinically useful scale.",
      cards: [
        {
          title: "Compute / AI-driven solutions",
          description:
            "Every simulation runs as GPU-accelerated compute — built for scale and speed, so the science isn't limited by hardware.",
        },
        {
          title: "Built for scientists, not engineers",
          description:
            "A visual editor lets researchers design and run simulations directly — no GPU programming or coding required.",
        },
        {
          title: "Portable core, CUDA-tuned",
          description:
            "SYCL keeps the codebase portable in principle — but every build defaults to NVIDIA's CUDA backend, where our own development, BioNeMo integration, and Evo 2 inference already live.",
        },
      ],
    },
    builtWith: "Built with",
  },
};

export type Translations = typeof en;

const pl: Translations = {
  nav: {
    platform: "Platforma",
    technology: "Technologia",
    about: "O nas",
    contact: "Kontakt",
    talkToUs: "Skontaktuj się",
    toggleMenu: "Przełącz menu",
  },
  footer: {
    tagline:
      "Lokalny (on-premise) pipeline AI i symulacji GPU dla spersonalizowanego leczenia onkologicznego — od dopasowywania badań klinicznych, przez interpretację genomu guza, po testowanie terapii in-silico.",
    builtOn: "Zbudowane na NVIDIA CUDA, BioNeMo i Evo 2.",
    disclaimer:
      "Nasze narzędzia stanowią informacyjne, badawcze wsparcie decyzyjne. Nie diagnozują, nie przepisują leczenia ani nie zastępują osądu wykwalifikowanego klinicysty.",
    platformCol: "Platforma",
    companyCol: "Firma",
    trialMatcher: "Trial Matcher",
    oncokernel: "OncoKernel",
    digitalTwin: "Cyfrowy bliźniak",
    aiWetlab: "AI + laboratorium",
    rightsReserved: "Wszelkie prawa zastrzeżone.",
  },
  home: {
    badge: "Onkologia precyzyjna × Obliczenia akceleracyjne",
    h1Pre: "Pipeline oparty na AI dla",
    h1Gradient: "spersonalizowanej onkologii",
    sub: "Bastard Software buduje infrastrukturę obliczeniową, która przekształca surowe sekwencje guza w dopasowane badania kliniczne, wytłumaczalne plany leczenia oraz przestrzenne symulacje mikrośrodowiska guza na GPU.",
    exploreBtn: "Poznaj platformę",
    talkBtn: "Skontaktuj się z nami",
    pipelineChips: ["Trial Matcher", "OncoKernel", "Cyfrowy bliźniak", "NVIDIA BioNeMo"],
    problemEyebrow: "Problem",
    problemTitlePre: "Sekwencjonowanie jest tanie.",
    problemTitleGradient: "Wąskim gardłem jest interpretacja oparta na obliczeniach.",
    problemDesc:
      "Szpitale generują terabajty danych sekwencyjnych, ale brakuje im pipeline'ów HPC i wnioskowania AI, by uczynić je użytecznymi. Istotne mutacje są pomijane, a pacjenci nie trafiają do ratujących życie badań klinicznych.",
    platformEyebrow: "Platforma",
    platformTitle: "Zunifikowany ekosystem wspierający decyzje kliniczne",
    platformDesc:
      "Od natychmiastowego dopasowywania badań klinicznych dla lekarzy po zaawansowaną symulację guza z użyciem GPU.",
    pillars: [
      {
        tag: "01 — Trial Matcher",
        title: "Natychmiastowe dopasowywanie badań klinicznych dla onkologów",
        description:
          "Nasz działający portal dla klinicystów. Wprowadź biomarkery i lokalizację pacjenta, aby błyskawicznie otrzymać rekrutujące badania oraz programy refundacji leków — dzięki architekturze RAG opartej na LLM.",
      },
      {
        tag: "02 — OncoKernel",
        title: "Interpretacja genomu guza przyspieszona przez GPU",
        description:
          "Nasz lokalny pipeline przetwarzający dane FASTQ w konkretne wnioski kliniczne. Wykorzystujemy modele fundamentowe przyspieszane przez GPU do oceny wariantów o nieznanym znaczeniu i dopasowania genotypów do terapii.",
      },
      {
        tag: "03 — Cyfrowy bliźniak",
        title: "Przestrzenna symulacja guza przyspieszona przez GPU",
        description:
          "Silnik modelowania agentowego (ABM) napisany w SYCL, kompilowany natywnie do CUDA na sprzęcie NVIDIA. Symulujemy mikrośrodowisko guza i naciek immunologiczny na GPU, aby testować skuteczność terapii in-silico.",
      },
      {
        tag: "04 — AI i laboratorium (przyszłość)",
        title: "Projektowanie terapii mRNA i CAR-T",
        description:
          "Nasz przyszły horyzont: wykorzystanie struktur białkowych generowanych przez BioNeMo i fizyczna walidacja zaprojektowanych przez AI szczepionek neoantygenowych w organoidach pochodzących od pacjentów.",
      },
    ],
    whyEyebrow: "Co nas wyróżnia",
    whyTitle: "Zaprojektowane pod obliczenia wysokiej wydajności",
    highlights: [
      {
        title: "GPU-native i AI-first",
        description:
          "Od przyspieszonych pipeline'ów bioinformatycznych po przestrzenne symulacje w SYCL — nasz stack jest projektowany pod akcelerację GPU, kompilując się do CUDA i integrując NVIDIA BioNeMo tam, gdzie ma to największe znaczenie.",
      },
      {
        title: "Lokalnie i zgodnie z RODO",
        description:
          "Dane pacjentów nigdy nie opuszczają szpitala w kierunku chmur publicznych. Nasz skonteneryzowany pipeline działa bezpiecznie wewnątrz sieci szpitala, zapewniając pełną zgodność już na poziomie architektury.",
      },
      {
        title: "Wnioskowanie LLM oparte na źródłach",
        description:
          "Każda rekomendacja kliniczna jest wsparta przez Semantic RAG, serwowany lokalnie na GPU, łączący profile molekularne bezpośrednio z cytowaną literaturą biomedyczną i rejestrami badań w czasie rzeczywistym.",
      },
      {
        title: "Stworzone przez klinicystę i inżyniera",
        description:
          "Założone przez lekarza i inżyniera systemów GPU, łącząc rzeczywistość kliniczną z obliczeniami wysokiej wydajności.",
      },
    ],
  },
  about: {
    metaTitle: "O nas",
    metaDesc:
      "Bastard Software buduje lokalny pipeline AI i symulacji GPU dla spersonalizowanego leczenia onkologicznego — założony przez lekarza i informatyka, z praktykującym onkologiem jako partnerem projektowym.",
    eyebrow: "O nas",
    titlePre: "Założone przez lekarza i",
    titleGradient: "informatyka",
    desc: "Bastard Software istnieje, ponieważ najtrudniejsze elementy onkologii precyzyjnej — osąd kliniczny i inżynieria systemów AI/GPU — niemal nigdy nie spotykają się w jednym zespole. My połączyliśmy oba w zespole założycielskim.",
    team: [
      {
        name: "Mateusz Bahyrycz",
        role: "Założyciel i CEO",
        badges: ["Lekarz", "Inżynier systemów GPU / CUDA"],
        bio: "Mateusz założył Bastard Software, by zniwelować przepaść między medycyną kliniczną a niskopoziomową infrastrukturą obliczeniową, której naprawdę potrzebuje onkologia precyzyjna — od kerneli obliczeniowych SYCL/CUDA po lokalne wnioskowanie AI. Kieruje architekturą techniczną firmy oraz silnikiem symulacji Cyfrowego bliźniaka.",
      },
      {
        name: "Rafał Nojek",
        role: "Współzałożyciel",
        badges: ["Lekarz", "Inżynier AI / ML"],
        bio: "Rafał łączy perspektywę lekarza z głęboką wiedzą w zakresie uczenia maszynowego, dużych modeli językowych i data science. Jest głównym twórcą stacku AI w Bastard Software, w szczególności wnioskowania grafu wiedzy OncoKernel oraz klinicznego kopilota.",
      },
    ],
    paragraphs: [
      "To połączenie nie jest przypadkowym dodatkiem do produktu — to jego teza. Oprogramowanie do onkologii precyzyjnej zawodzi, gdy jest budowane przez jedną dziedzinę w izolacji: inżynierów, którzy nie rozumieją, czego naprawdę potrzebuje konsylium onkologiczne, albo klinicystów bez zaplecza systemowego, by bezpiecznie budować infrastrukturę AI działającą w sieci szpitalnej.",
      "Współpracujemy z praktykującym onkologiem jako partnerem projektowym i pierwszym miejscem pilotażu — dostarczając walidację domenową w onkologii oraz relację ze szpitalem, która zmienia demo w realne wdrożenie.",
    ],
    thesisCards: [
      {
        title: "Nasza teza",
        description:
          "Zsekwencjonowanie guza jest tanie. Trudnym i wartościowym problemem jest jego interpretacja — bezpieczna, wytłumaczalna i bez opuszczania danych poza szpital.",
      },
      {
        title: "Projektowanie prowadzone przez klinicystów",
        description:
          "Każde narzędzie jest projektowane wokół tego, co lekarz faktycznie robi z wynikiem, a praktykujący onkolog waliduje cały przepływ pracy.",
      },
      {
        title: "Rygor inżynierii systemowej",
        description:
          "Obliczenia GPU, kontrakty danych i lokalne wdrożenie traktujemy jako pełnoprawne problemy inżynierskie, a nie kwestie drugorzędne.",
      },
      {
        title: "Zbudowane dla szpitali",
        description:
          "Każda decyzja architektoniczna jest podejmowana tak, by dało się ją wdrożyć w realnej sieci szpitalnej, w realnych warunkach regulacyjnych.",
      },
    ],
  },
  contact: {
    metaTitle: "Kontakt",
    metaDesc:
      "Skontaktuj się z Bastard Software — zapraszamy szpitale, partnerów badawczych i inwestorów.",
    eyebrow: "Kontakt",
    title: "Porozmawiajmy",
    desc: "Niezależnie od tego, czy jesteś szpitalem rozważającym pilotaż, badaczem zainteresowanym platformą, czy inwestorem — chcielibyśmy się z Tobą skontaktować.",
    location: "Kraków, Polska — tworzone dla szpitali na całym świecie",
  },
  contactForm: {
    name: "Imię i nazwisko",
    namePlaceholder: "Jan Kowalski",
    email: "E-mail",
    emailPlaceholder: "ty@szpital.pl",
    message: "Wiadomość",
    messagePlaceholder: "Opowiedz nam o swoim szpitalu, zespole badawczym lub tym, co budujesz.",
    submit: "Wyślij wiadomość",
    subjectVisitor: "odwiedzającego",
    subjectPrefix: "Zapytanie ze strony od",
  },
  platform: {
    metaTitle: "Platforma",
    metaDesc:
      "Platforma Bastard Software: narzędzie do dopasowywania badań klinicznych, przyspieszany przez GPU pipeline interpretacji genomu OncoKernel, silnik symulacji Cyfrowego bliźniaka w SYCL/CUDA oraz zaprojektowane przez NVIDIA BioNeMo, zwalidowane laboratoryjnie szczepionki mRNA i terapie CAR-T.",
    introEyebrow: "Platforma",
    introTitlePre: "Jeden pipeline,",
    introTitleGradient: "rosnący zestaw narzędzi",
    introDesc:
      "Każde narzędzie jest zbudowane tak, by działać samodzielnie, a razem tworzą jedną ciągłą ścieżkę — od pierwszego wyszukania pobliskiego badania klinicznego, przez pełną interpretację molekularną guza, aż po symulację i projektowanie samej terapii. Do tego pipeline'u z czasem dołączają kolejne narzędzia.",
    trialMatcher: {
      badge: "W trakcie rozwoju — pierwszy krok",
      title: "Znajdź najlepiej dopasowane badanie kliniczne w kilka sekund",
      desc: "Panel oparty na danych publicznych, stworzony dla onkologów. Wprowadź wskazanie, kilka biomarkerów i lokalizację — otrzymaj najbliższe rekrutujące badania kliniczne oraz programy refundacji leków, do których kwalifikuje się pacjent. Najpierw Europa: unijne rejestry badań (CTIS, EUCTR) połączone z ClinicalTrials.gov oraz krajowymi programami refundacyjnymi.",
      bullets: [
        "Ranking według dopasowania klinicznego i odległości od pacjenta",
        "Uwzględnia krajowe programy refundacji leków, nie tylko badania kliniczne",
        "Wyłącznie rejestry publiczne — żadna sekwencja pacjenta nigdy nie jest dotykana",
      ],
      panelUrl: "trial-matcher.oncokernel.com",
      indication: "Wskazanie",
      indicationValue: "Kostniakomięsak",
      biomarkers: "Biomarkery",
      biomarkersValue: "TP53 R248W, wysoki TMB",
      locationLabel: "Lokalizacja",
      locationValue: "Kraków, PL · promień 200 km",
      matchLabel: "Dopasowanie",
      matchDistance: "18 km stąd",
      matchTitle: "Faza II — Adawosertib w mięsaku z mutacją TP53",
      matchProgramme: "Program NFZ",
      matchTitle2: "Ścieżka refundacyjna B.72 — mięsaki kości",
    },
    oncokernel: {
      badge: "Platforma główna — lokalny pipeline",
      title: "OncoKernel: od surowej sekwencji guza do planu leczenia opartego na cytowanych źródłach",
      desc: "OncoKernel działa w całości wewnątrz sieci szpitala. Przeprowadza próbkę guza przez cztery niezależne bloki — każdy wymienny, każdy testowalny osobno — kończąc się pulpitem dla lekarza i kopilotem czatu opartym na źródłach.",
      steps: [
        {
          label: "Blok 1 — Wprowadzanie danych",
          title: "Od surowych odczytów do scharakteryzowanego genomu",
          description:
            "Wykrywanie wariantów somatycznych, czystość/ploidalność guza, TMB/MSI oraz typowanie HLA — z wykorzystaniem klinicznie zwalidowanych narzędzi open source, zamiast wymyślania na nowo rozwiązanej bioinformatyki.",
        },
        {
          label: "Blok 2 — Graf wiedzy",
          title: "Adnotowanie i ocena każdego wariantu",
          description:
            "Znane warianty są rozstrzygane względem aktualnego grafu genów, leków i wskazań; warianty o niepewnym znaczeniu są oceniane przez genomowy model fundamentowy.",
        },
        {
          label: "Blok 3 — Wnioskowanie",
          title: "Dopasowanie genotypu do terapii",
          description:
            "Wieloagentowy system wyszukiwania dopasowuje profil molekularny pacjenta do wytycznych, literatury i aktualnych rejestrów badań klinicznych — każde twierdzenie odwołuje się do źródła.",
        },
        {
          label: "Blok 4 — Pulpit",
          title: "Prezentacja dla lekarza",
          description:
            "Przejrzysty pulpit z kopilotem czatu opartym na źródłach i eksportem PDF jednym kliknięciem — informacyjne wsparcie decyzyjne, decyzję podejmuje onkolog.",
        },
      ],
      cards: [
        {
          title: "RODO na poziomie architektury",
          description:
            "Dane genomowe nigdy nie opuszczają sieci szpitala — ta sama decyzja architektoniczna, która umożliwia sprzedaż, zapewnia jednocześnie zgodność z przepisami.",
        },
        {
          title: "Genomowe modele fundamentowe",
          description:
            "Ocena efektu wariantów w trybie zero-shot za pomocą Evo 2, przyspieszana przez GPU, dla mutacji, których żadna baza jeszcze nie sklasyfikowała — wraz z uzasadnieniem w zrozumiałym języku.",
        },
        {
          title: "Aktualny graf wiedzy",
          description:
            "Geny, warianty, leki, szlaki i wskazania rozstrzygane względem stale aktualizowanego grafu, a nie statycznego arkusza kalkulacyjnego.",
        },
        {
          title: "Kliniczny kopilot oparty na źródłach",
          description:
            "Serwowany lokalnie dla niskich opóźnień — bez połączenia z chmurą. Każda odpowiedź cytuje dokładny fragment źródłowy; informacyjne wsparcie decyzyjne, decyzję zawsze podejmuje onkolog.",
        },
      ],
    },
    digitalTwin: {
      badge: "Aktywny silnik symulacji",
      titlePre: "Natywny dla GPU",
      titleGradient: "cyfrowy bliźniak",
      titlePost: "mikrośrodowiska guza",
      descPre:
        "Nasz silnik modelowania agentowego (ABM) jest zbudowany z myślą o obliczeniach w SYCL — przenośnym standardzie obliczeniowym działającym na GPU różnych producentów.",
      descNote: "Na sprzęcie NVIDIA kompiluje się natywnie do CUDA dla maksymalnej wydajności.",
      descPost:
        "Dynamicznie symuluje komórki nowotworowe, naciek immunologiczny (TIL) i dyfuzję leków jako pola ciągłe, wykonywane w całości na shaderach obliczeniowych GPU — pozwalając nam testować terapie zaprojektowane przez AI in-silico, zanim trafią do laboratorium.",
      cards: [
        {
          title: "Obliczenia SYCL, natywne dla GPU",
          description:
            "Masowo zrównoleglone przestrzenne haszowanie i wykrywanie kolizji na shaderach obliczeniowych GPU — eliminujące wąskie gardła CPU typowe dla starszych symulatorów.",
        },
        {
          title: "Agenci osadzeni biologicznie",
          description:
            "Symulacja niedotlenienia, sygnalizacji angiogenicznej i penetracji komórek CAR-T na podstawie profilu genomowego wyekstrahowanego przez OncoKernel.",
        },
        {
          title: "Testowanie terapii in-silico",
          description:
            "Deterministyczne, oparte na fizyce środowisko do oceny kinetycznej skuteczności immunoterapii zaprojektowanych przez generatywną AI.",
        },
      ],
    },
    aiWetlab: {
      badge: "Przyszły horyzont — Faza 3",
      title: "AI + laboratorium: przenoszenie projektów in-silico do fizycznej rzeczywistości",
      desc: "Podczas gdy nasz stack oprogramowania modeluje biologię, nasza docelowa mapa drogowa obejmuje fizyczną walidację. W przyszłości neoantygeny zidentyfikowane przez OncoKernel i zwinięte przez BioNeMo zostaną zsyntetyzowane w szczepionki mRNA i zwalidowane w organoidach pochodzących od pacjentów oraz mikroprzepływowych układach tumor-on-a-chip w naszych partnerskich laboratoriach.",
      cards: [
        {
          title: "Szczepionki neoantygenowe zaprojektowane przez AI",
          description:
            "Transkrypty mRNA zaprojektowane pod kątem specyficznych dla guza mutacji pacjenta i typu HLA, zwalidowane in-silico przed syntezą.",
        },
        {
          title: "Projektowanie terapii CAR-T",
          description:
            "Inżynieria chimerycznych receptorów antygenowych celujących w specyficzne dla guza antygeny wskazane przez platformę dla danego pacjenta.",
        },
        {
          title: "Walidacja laboratoryjna",
          description:
            "Organoidy pochodzące od pacjentów i modele tumor-on-a-chip dają fizyczną weryfikację każdej predykcji AI, zanim dotrze ona do pacjenta.",
        },
      ],
    },
    cta: {
      title: "Zainteresowany pilotażem, partnerstwem lub samą technologią?",
      button: "Skontaktuj się",
    },
  },
  technology: {
    metaTitle: "Technologia",
    metaDesc:
      "Architektura stojąca za Bastard Software: lokalna infrastruktura zgodna z RODO od podstaw, genomowa AI przyspieszana przez GPU (NVIDIA BioNeMo, Evo 2) oraz silnik symulacji SYCL/CUDA.",
    eyebrow: "Technologia",
    titlePre: "Architektura",
    titleGradient: "u podstaw pipeline'u",
    desc: "Trzy decyzje inżynierskie przenikają wszystko, co budujemy: dane pacjenta nigdy nie opuszczają szpitala, każda rekomendacja musi być wytłumaczalna, a ciężkie obliczenia należą do GPU.",
    privacy: {
      badge: "Architektura prywatności",
      title: "Lokalnie z założenia, a nie z polityki",
      p1: "Zgodnie z art. 9 RODO dane genetyczne są kategorią szczególną — ich przetwarzanie jest ściśle ograniczone, a dyrektorzy szpitali ponoszą odpowiedzialność za każdy wyciek. Naszą odpowiedzią jest architektura: usługi wprowadzania danych i wnioskowania działają jako kontenery w sieci własnej szpitala. Żadna sekwencja pacjenta nigdy nie jest wysyłana do chmurowego API. Opuszczają ją wyłącznie zanonimizowane, zabstrahowane zapytania — do publicznego rejestru badań lub indeksu literatury.",
      p2: "Każda rekomendacja jest również formułowana jako informacyjne wsparcie decyzyjne. Klinicysta jest obecny na każdym etapie; system odpowiada na pytania i cytuje źródła, ale nie wydaje poleceń.",
      boundaryLabel: "Granica sieci szpitalnej",
      rows: [
        { label: "Dane FASTQ / sekwencjonowania guza", note: "nigdy nie opuszcza" },
        { label: "Wykrywanie wariantów i graf wiedzy", note: "działa na miejscu" },
        { label: "Wyłącznie zanonimizowane zapytania", note: "opuszcza granicę" },
      ],
      note1: "Zgodne z art. 9 RODO z założenia, a nie z polityki",
      note2: "Docelowe wdrożenie: dedykowany sprzęt brzegowy dla regulowanej, lokalnej AI medycznej",
    },
    aiStack: {
      eyebrow: "Stos wnioskowania",
      title: "Przyspieszone wnioskowanie AI i RAG",
      cards: [
        {
          title: "Integracja z NVIDIA BioNeMo",
          description:
            "Wykorzystanie NVIDIA BioNeMo do przewidywania trójwymiarowych struktur białek (AlphaFold2/ESMFold) i projektowania wysoce dopasowanych neoantygenów dla spersonalizowanych szczepionek mRNA.",
        },
        {
          title: "Genomowe modele fundamentowe",
          description:
            "Wykorzystanie modeli takich jak Evo 2, przyspieszanych przez GPU, do oceny wariantów o nieznanym znaczeniu (VUS) oraz głębokiego wnioskowania na poziomie sekwencji.",
        },
        {
          title: "Wieloagentowy semantyczny RAG",
          description:
            "Architektura LangGraph wykorzystująca lokalne bazy wektorowe (np. Qdrant) i embeddingi MedCPT do dopasowywania genotypów pacjentów do aktualnych badań klinicznych i literatury bez halucynacji.",
        },
        {
          title: "Bio-pipeline'y Nextflow",
          description:
            "Wysoce zrównoleglone, skonteneryzowane wykonywanie przepływów genomicznych (WiGiTS, SAGE, LILAC), zdolne do działania na lokalnych klastrach HPC lub rozszerzania się do GPU w chmurze.",
        },
      ],
    },
    gpuJustification: {
      eyebrow: "Uzasadnienie użycia GPU",
      titlePre: "Każde obciążenie GPU",
      titleGradient: "jest uzasadnione",
      desc: "Nie sięgamy po GPU domyślnie — każde z poniższych obciążeń wymaga GPU, ponieważ alternatywa jest albo zbyt wolna, by mieć wartość kliniczną, albo fizycznie niemożliwa na CPU. Tam, gdzie CPU jest właściwym narzędziem, używamy CPU.",
      workloads: [
        {
          workload: "Ocena nowych wariantów (VUS)",
          tech: "Evo 2 (7B, skwantyzowany), przyspieszany przez GPU",
          why: "Deterministyczne wykrywanie (SAGE/PURPLE/LILAC) już działa na CPU — ale ocena wariantów, których żadna baza jeszcze nie sklasyfikowała, wymaga modelu fundamentowego w pętli, co nie mieści się w budżecie czasowym CPU w czasie rzeczywistym.",
        },
        {
          workload: "Projektowanie neoantygenów i białek",
          tech: "NVIDIA BioNeMo",
          why: "Przewidywanie struktury i dokowanie (modele klasy AlphaFold2/ESMFold) do projektowania i rankingu spersonalizowanych kandydatów na szczepionki.",
        },
        {
          workload: "Wnioskowanie klinicznego kopilota",
          tech: "Lokalny LLM, przyspieszany przez GPU",
          why: "Niskoopóźnieniowe, skwantyzowane serwowanie lokalne — kopilot odpowiada w kilka sekund bez pojedynczego wywołania chmurowego API.",
        },
        {
          workload: "Symulacja mikrośrodowiska guza",
          tech: "Obliczenia SYCL",
          why: "Tysiące wzajemnie oddziałujących agentów aktualizowanych w każdej klatce — symulator oparty na CPU nie jest w stanie działać w tej skali z wartością kliniczną. Kompiluje się natywnie do CUDA na sprzęcie NVIDIA.",
        },
      ],
      roadmapPre: "Mapa drogowa —",
      roadmapText:
        "oceniamy silniki wyszukiwania i przechodzenia grafu przyspieszane przez GPU, by dalej skalować graf wiedzy.",
    },
    simulation: {
      badge: "Obliczenia przyspieszane przez GPU",
      titlePre: "Silnik symulacji zorientowany na obliczenia, zbudowany, by",
      titleGradient: "działać wszędzie",
      descPre:
        "Nasz silnik modelowania agentowego jest napisany w C++20 z użyciem SYCL — neutralnego względem producenta standardu obliczeniowego działającego na różnych architekturach GPU.",
      descNote: "Na sprzęcie NVIDIA kompiluje się natywnie do CUDA dla maksymalnej przepustowości.",
      descPost:
        "Przenosząc masowe przestrzenne haszowanie i wykrywanie kolizji między komórkami w całości na shadery obliczeniowe GPU, eliminujemy wąskie gardła CPU typowe dla starszych symulatorów — pozwalając modelować mikrośrodowisko guza w skali użytecznej klinicznie.",
      cards: [
        {
          title: "Rozwiązania oparte na obliczeniach i AI",
          description:
            "Każda symulacja działa jako obliczenia przyspieszane przez GPU — zbudowane pod kątem skali i szybkości, dzięki czemu nauka nie jest ograniczona przez sprzęt.",
        },
        {
          title: "Zbudowane dla naukowców, nie inżynierów",
          description:
            "Wizualny edytor pozwala badaczom bezpośrednio projektować i uruchamiać symulacje — bez programowania GPU czy kodowania.",
        },
        {
          title: "Przenośny rdzeń, dostrojony pod CUDA",
          description:
            "SYCL zachowuje przenośność kodu w założeniu — ale każda kompilacja domyślnie korzysta z backendu CUDA NVIDIA, gdzie już dziś toczy się nasz rozwój, integracja z BioNeMo i wnioskowanie Evo 2.",
        },
      ],
    },
    builtWith: "Zbudowane z użyciem",
  },
};

export const translations = { en, pl };
