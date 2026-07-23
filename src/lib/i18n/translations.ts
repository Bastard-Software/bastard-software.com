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
      {
        name: "Krystian Budek",
        role: "Co-Founder",
        badges: ["DevOps", "Cloud Infrastructure & Automation"],
        bio: "Krystian brings a strong background in DevOps, cloud infrastructure, enterprise automation, and software development. He builds automated workflows and integrations across cloud platforms, identity systems, and business applications. He brings his infrastructure and product engineering experience to OncoKernel.",
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
    talkToUs: "Porozmawiajmy",
    toggleMenu: "Przełącz menu",
  },
  footer: {
    tagline:
      "Lokalny (on-premise) pipeline AI i symulacji GPU dla spersonalizowanego leczenia nowotworów — od dopasowywania badań klinicznych, przez interpretację genomu guza, po testowanie terapii in silico.",
    builtOn: "Zbudowane na NVIDIA CUDA, BioNeMo i Evo 2.",
    disclaimer:
      "Nasze narzędzia stanowią informacyjne, badawcze wsparcie decyzyjne. Nie diagnozują, nie przepisują leczenia ani nie zastępują osądu wykwalifikowanego lekarza.",
    platformCol: "Platforma",
    companyCol: "Firma",
    trialMatcher: "Trial Matcher",
    oncokernel: "OncoKernel",
    digitalTwin: "Cyfrowy Bliźniak",
    aiWetlab: "AI + Wet Lab",
    rightsReserved: "Wszelkie prawa zastrzeżone.",
  },
  home: {
    badge: "Onkologia precyzyjna × Obliczenia akcelerowane",
    h1Pre: "Pipeline akcelerowany przez AI dla",
    h1Gradient: "spersonalizowanej onkologii",
    sub: "Bastard Software buduje infrastrukturę obliczeniową, która przekłada surowe sekwencje guza na dopasowane badania kliniczne, wytłumaczalne plany leczenia i przestrzenne symulacje GPU mikrośrodowiska nowotworu.",
    exploreBtn: "Poznaj platformę",
    talkBtn: "Porozmawiajmy",
    pipelineChips: ["Trial Matcher", "OncoKernel", "Cyfrowy Bliźniak", "NVIDIA BioNeMo"],
    problemEyebrow: "Problem",
    problemTitlePre: "Sekwencjonowanie jest tanie.",
    problemTitleGradient: "Wąskim gardłem jest interpretacja oparta na obliczeniach.",
    problemDesc:
      "Szpitale generują terabajty danych sekwencyjnych, ale brakuje im pipeline'ów HPC i wnioskowania AI, które przekułyby je w decyzje kliniczne. Istotne klinicznie mutacje pozostają przeoczone, a pacjenci nie trafiają do badań, które mogłyby uratować im życie.",
    platformEyebrow: "Platforma",
    platformTitle: "Spójny ekosystem wsparcia decyzji klinicznych",
    platformDesc:
      "Od natychmiastowego dopasowywania badań klinicznych po głęboką symulację guza akcelerowaną przez GPU.",
    pillars: [
      {
        tag: "01 — Trial Matcher",
        title: "Natychmiastowe dopasowywanie badań klinicznych dla onkologów",
        description:
          "Nasz działający portal dla klinicystów. Wprowadź biomarkery pacjenta i lokalizację, aby natychmiast otrzymać rekrutujące badania kliniczne i programy lekowe — dzięki architekturze RAG opartej na LLM.",
      },
      {
        tag: "02 — OncoKernel",
        title: "Interpretacja genomu guza akcelerowana przez GPU",
        description:
          "Nasz lokalny (on-premise) pipeline przetwarzający dane FASTQ we wnioski kliniczne. Wykorzystujemy akcelerowane przez GPU modele fundamentalne do oceny wariantów o nieznanym znaczeniu (VUS) i dopasowywania genotypów do terapii.",
      },
      {
        tag: "03 — Cyfrowy Bliźniak",
        title: "Przestrzenna symulacja guza akcelerowana przez GPU",
        description:
          "Silnik modelowania wieloagentowego (ABM) napisany w SYCL, kompilowany do natywnej CUDA na sprzęcie NVIDIA. Symulujemy mikrośrodowisko guza i naciek immunologiczny na GPU, aby testować skuteczność terapii in silico.",
      },
      {
        tag: "04 — AI & Wet Lab (Przyszłość)",
        title: "Projektowanie terapii mRNA i CAR-T",
        description:
          "Nasz horyzont: struktury białkowe generowane przez BioNeMo i fizyczna walidacja zaprojektowanych przez AI szczepionek neoantygenowych na organoidach pochodzących od pacjenta.",
      },
    ],
    whyEyebrow: "Co nas wyróżnia",
    whyTitle: "Zaprojektowane pod obliczenia wysokiej wydajności",
    highlights: [
      {
        title: "GPU-native i AI-first",
        description:
          "Od akcelerowanych pipeline'ów bioinformatycznych po przestrzenne symulacje obliczeniowe w SYCL — nasz stack jest projektowany pod akcelerację GPU, kompilując się do CUDA i integrując NVIDIA BioNeMo tam, gdzie ma to największe znaczenie.",
      },
      {
        title: "On-premise i zgodne z RODO",
        description:
          "Dane pacjentów nie trafiają do chmur publicznych. Nasz skonteneryzowany pipeline działa wewnątrz sieci szpitala — zgodność wynika z architektury, a nie z polityki.",
      },
      {
        title: "Ugruntowane wnioskowanie LLM",
        description:
          "Każda rekomendacja kliniczna opiera się na Semantic RAG, serwowanym lokalnie na GPU, łącząc profil molekularny z cytowaną literaturą biomedyczną i aktualnymi rejestrami badań.",
      },
      {
        title: "Zbudowane przez lekarza i inżyniera",
        description:
          "Założone przez lekarza i inżyniera systemów GPU — łączymy realia kliniczne z obliczeniami wysokiej wydajności.",
      },
    ],
  },
  about: {
    metaTitle: "O nas",
    metaDesc:
      "Bastard Software buduje lokalny (on-premise) pipeline AI i symulacji GPU dla spersonalizowanego leczenia nowotworów — założony przez lekarza i informatyka, z praktykującym onkologiem jako klinicznym partnerem projektowym.",
    eyebrow: "O nas",
    titlePre: "Założone przez lekarza i",
    titleGradient: "informatyka",
    desc: "Bastard Software istnieje, ponieważ najtrudniejsze części onkologii precyzyjnej — osąd kliniczny oraz inżynieria systemów AI/GPU — niemal nigdy nie spotykają się w jednym pokoju. My umieściliśmy obie w zespole założycielskim.",
    team: [
      {
        name: "Mateusz Bahyrycz",
        role: "Założyciel i CEO",
        badges: ["Lekarz", "Inżynier systemów GPU / CUDA"],
        bio: "Mateusz założył Bastard Software, aby zamknąć lukę między medycyną kliniczną a niskopoziomową infrastrukturą obliczeniową, której onkologia precyzyjna faktycznie potrzebuje — od kerneli obliczeniowych SYCL/CUDA po lokalne wnioskowanie AI. Odpowiada za architekturę techniczną firmy i silnik symulacji Cyfrowego Bliźniaka.",
      },
      {
        name: "Rafał Nojek",
        role: "Współzałożyciel",
        badges: ["Lekarz", "Inżynier AI / ML"],
        bio: "Rafał łączy perspektywę lekarza z doświadczeniem w uczeniu maszynowym, dużych modelach językowych i analizie danych. Jest głównym wykonawcą stosu AI w Bastard Software — w szczególności wnioskowania na grafie wiedzy w OncoKernel oraz asystenta klinicznego.",
      },
      {
        name: "Krystian Budek",
        role: "Współzałożyciel",
        badges: ["DevOps", "Infrastruktura chmurowa i automatyzacja"],
        bio: "Krystian ma solidne doświadczenie w obszarze DevOps, infrastruktury chmurowej, automatyzacji procesów oraz tworzenia oprogramowania. Projektuje i rozwija zautomatyzowane procesy oraz integracje pomiędzy platformami chmurowymi, systemami tożsamości i aplikacjami biznesowymi. W OncoKernel wykorzystuje swoje doświadczenie w obszarze infrastruktury, automatyzacji i rozwoju produktów.",
      },
    ],
    paragraphs: [
      "To połączenie nie jest przypadkowym dodatkiem do produktu — jest jego tezą. Oprogramowanie dla onkologii precyzyjnej zawodzi, gdy powstaje w izolacji jednej dyscypliny: tworzone przez inżynierów, którzy nie rozumieją, czego naprawdę potrzebuje konsylium onkologiczne, albo przez klinicystów bez zaplecza systemowego, by zbudować infrastrukturę AI działającą bezpiecznie wewnątrz sieci szpitalnej.",
      "Współpracujemy z praktykującym onkologiem jako klinicznym partnerem projektowym i pierwszym ośrodkiem pilotażowym — zapewnia on walidację domenową w onkologii oraz relację ze szpitalem, która zamienia demo we wdrożenie.",
    ],
    thesisCards: [
      {
        title: "Nasza teza",
        description:
          "Zsekwencjonowanie guza jest tanie. Zinterpretowanie go — bezpiecznie, w sposób wytłumaczalny i bez wynoszenia danych poza szpital — to problem trudny i wartościowy.",
      },
      {
        title: "Projektowanie prowadzone przez klinicystę",
        description:
          "Każde narzędzie projektujemy wokół tego, co lekarz faktycznie robi z wynikiem, a praktykujący onkolog waliduje ten przepływ pracy.",
      },
      {
        title: "Rygor inżynierii systemowej",
        description:
          "Obliczenia GPU, kontrakty danych i wdrożenie on-premise traktujemy jako pełnoprawne problemy inżynierskie, a nie kwestie na później.",
      },
      {
        title: "Zbudowane dla szpitali",
        description:
          "Każdą decyzję architektoniczną podejmujemy tak, by dało się ją wdrożyć w prawdziwej sieci szpitalnej, pod prawdziwymi ograniczeniami regulacyjnymi.",
      },
    ],
  },
  contact: {
    metaTitle: "Kontakt",
    metaDesc:
      "Skontaktuj się z Bastard Software — zapraszamy szpitale, partnerów badawczych i inwestorów.",
    eyebrow: "Kontakt",
    title: "Porozmawiajmy",
    desc: "Niezależnie od tego, czy jesteś szpitalem rozważającym pilotaż, badaczem zainteresowanym platformą, czy inwestorem — chętnie Cię wysłuchamy.",
    location: "Kraków, Polska — tworzymy dla szpitali na całym świecie",
  },
  contactForm: {
    name: "Imię i nazwisko",
    namePlaceholder: "Jan Kowalski",
    email: "E-mail",
    emailPlaceholder: "ty@szpital.pl",
    message: "Wiadomość",
    messagePlaceholder: "Napisz o swoim szpitalu, zespole badawczym lub o tym, co budujesz.",
    submit: "Wyślij wiadomość",
    subjectVisitor: "odwiedzającego",
    subjectPrefix: "Zapytanie ze strony od",
  },
  platform: {
    metaTitle: "Platforma",
    metaDesc:
      "Platforma Bastard Software: wyszukiwarka badań klinicznych, akcelerowany przez GPU pipeline interpretacji genomu OncoKernel, silnik symulacji Cyfrowy Bliźniak w SYCL/CUDA oraz projektowane w NVIDIA BioNeMo i walidowane w wet labie szczepionki mRNA i terapie CAR-T.",
    introEyebrow: "Platforma",
    introTitlePre: "Jeden pipeline,",
    introTitleGradient: "rosnący zestaw narzędzi",
    introDesc:
      "Każde narzędzie działa samodzielnie, a razem tworzą jedną ciągłą ścieżkę — od pierwszego wyszukania pobliskiego badania klinicznego, przez pełną interpretację molekularną guza, po symulację i projektowanie samej terapii. Z czasem dołączają do niej kolejne narzędzia.",
    trialMatcher: {
      badge: "W budowie — brama wejściowa",
      title: "Znajdź najlepiej dopasowane badanie kliniczne w kilka sekund",
      desc: "Panel oparty na danych publicznych, zbudowany dla onkologów. Wprowadź wskazanie, kilka biomarkerów i lokalizację — otrzymasz najbliższe rekrutujące badania kliniczne oraz programy lekowe, do których pacjent by się kwalifikował. Europa najpierw: unijne rejestry badań (CTIS, EUCTR) połączone z ClinicalTrials.gov, plus krajowe programy refundacyjne.",
      bullets: [
        "Sortowane według dopasowania klinicznego i odległości od pacjenta",
        "Uwzględnia krajowe programy lekowe, nie tylko badania kliniczne",
        "Wyłącznie rejestry publiczne — sekwencja pacjenta nigdy nie jest używana",
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
      matchTitle: "Faza II — adawosertyb w mięsaku z mutacją TP53",
      matchProgramme: "Program NFZ",
      matchTitle2: "Program lekowy B.72 — mięsaki kości",
    },
    oncokernel: {
      badge: "Rdzeń platformy — pipeline on-premise",
      title: "OncoKernel: od surowej sekwencji guza do planu leczenia popartego cytowaniami",
      desc: "OncoKernel działa w całości wewnątrz sieci szpitala. Prowadzi próbkę guza przez cztery rozdzielone bloki — każdy wymienny i testowalny osobno — a kończy panelem dla lekarza i asystentem czatu opartym na źródłach.",
      steps: [
        {
          label: "Blok 1 — Ingestia",
          title: "Od surowych odczytów do scharakteryzowanego genomu",
          description:
            "Wykrywanie wariantów somatycznych, czystość/ploidalność guza, TMB/MSI oraz typowanie HLA — opakowujemy zwalidowane klinicznie narzędzia open source, zamiast wyważać otwarte drzwi w bioinformatyce.",
        },
        {
          label: "Blok 2 — Graf wiedzy",
          title: "Adnotacja i ocena każdego wariantu",
          description:
            "Znane warianty są rozstrzygane względem żywego grafu genów, leków i wskazań; warianty o niepewnym znaczeniu ocenia genomowy model fundamentalny.",
        },
        {
          label: "Blok 3 — Wnioskowanie",
          title: "Dopasowanie genotypu do terapii",
          description:
            "Wieloagentowy system wyszukiwania zestawia profil molekularny pacjenta z wytycznymi, literaturą i aktualnymi rejestrami badań — każde stwierdzenie cytuje swoje źródło.",
        },
        {
          label: "Blok 4 — Panel",
          title: "Prezentacja dla lekarza",
          description:
            "Czytelny panel z asystentem czatu opartym na źródłach i eksportem PDF jednym kliknięciem — to informacyjne wsparcie decyzyjne, decyduje onkolog.",
        },
      ],
      cards: [
        {
          title: "RODO na poziomie architektury",
          description:
            "Dane genomowe nie opuszczają sieci szpitala — ta sama decyzja architektoniczna, która otwiera sprzedaż, rozwiązuje kwestię zgodności.",
        },
        {
          title: "Genomowe modele fundamentalne",
          description:
            "Ocena efektu wariantu w trybie zero-shot z użyciem Evo 2, akcelerowana przez GPU, dla mutacji, których nie sklasyfikowała jeszcze żadna baza — wraz z uzasadnieniem napisanym prostym językiem.",
        },
        {
          title: "Żywy graf wiedzy",
          description:
            "Geny, warianty, leki, szlaki i wskazania rozstrzygane względem stale aktualizowanego grafu, a nie statycznego arkusza.",
        },
        {
          title: "Asystent kliniczny oparty na źródłach",
          description:
            "Serwowany lokalnie dla niskiej latencji — bez rundy do chmury. Każda odpowiedź cytuje konkretny akapit źródłowy; to informacyjne wsparcie decyzyjne, decyzję zawsze podejmuje onkolog.",
        },
      ],
    },
    digitalTwin: {
      badge: "Działający silnik symulacji",
      titlePre: "Natywny dla GPU",
      titleGradient: "Cyfrowy Bliźniak",
      titlePost: "mikrośrodowiska guza",
      descPre:
        "Nasz silnik modelowania wieloagentowego (ABM) powstał w podejściu compute-first w SYCL — przenośnym standardzie obliczeniowym działającym u różnych producentów GPU.",
      descNote: "Na sprzęcie NVIDIA kompiluje się do natywnej CUDA dla maksymalnej wydajności.",
      descPost:
        "Dynamicznie symuluje komórki nowotworowe, naciek immunologiczny (TIL) i dyfuzję leku jako pola ciągłe, wykonując się w całości na shaderach obliczeniowych GPU — dzięki czemu możemy testować terapie zaprojektowane przez AI in silico, zanim trafią do wet labu.",
      cards: [
        {
          title: "Obliczenia SYCL, natywne dla GPU",
          description:
            "Masowo zrównoleglone spatial hashing i detekcja kolizji na shaderach obliczeniowych GPU — eliminują wąskie gardła CPU typowe dla starszych symulatorów.",
        },
        {
          title: "Agenci ugruntowani biologicznie",
          description:
            "Symulacja hipoksji, sygnalizacji angiogennej i penetracji komórek CAR-T na podstawie profilu genomowego wyekstrahowanego przez OncoKernel.",
        },
        {
          title: "Screening terapii in silico",
          description:
            "Deterministyczne, oparte na fizyce środowisko do oceny kinetycznej skuteczności immunoterapii zaprojektowanych przez generatywną AI.",
        },
      ],
    },
    aiWetlab: {
      badge: "Horyzont przyszłości — Faza 3",
      title: "AI + Wet Lab: od projektów in silico do fizycznej rzeczywistości",
      desc: "Nasz stack modeluje biologię, ale docelowa roadmapa zakłada również walidację fizyczną. W przyszłości neoantygeny zidentyfikowane przez OncoKernel i zwinięte przez BioNeMo będą syntezowane jako szczepionki mRNA i walidowane na organoidach pochodzących od pacjenta oraz w układach mikroprzepływowych tumor-on-a-chip w laboratoriach naszych partnerów.",
      cards: [
        {
          title: "Szczepionki neoantygenowe projektowane przez AI",
          description:
            "Transkrypty mRNA projektowane pod mutacje swoiste dla guza pacjenta i jego typ HLA, walidowane in silico przed syntezą.",
        },
        {
          title: "Projektowanie terapii CAR-T",
          description:
            "Konstruowanie chimerycznych receptorów antygenowych wymierzonych w antygeny swoiste dla guza, które platforma wskazuje u danego pacjenta.",
        },
        {
          title: "Walidacja w wet labie",
          description:
            "Organoidy pochodzące od pacjenta i modele tumor-on-a-chip pozwalają fizycznie zweryfikować każdą predykcję AI, zanim trafi ona do pacjenta.",
        },
      ],
    },
    cta: {
      title: "Zainteresowany pilotażem, współpracą lub technologią, która za tym stoi?",
      button: "Skontaktuj się",
    },
  },
  technology: {
    metaTitle: "Technologia",
    metaDesc:
      "Architektura Bastard Software: lokalna (on-premise) infrastruktura zgodna z RODO na poziomie projektu, akcelerowane przez GPU genomowe AI (NVIDIA BioNeMo, Evo 2) oraz silnik symulacji SYCL/CUDA.",
    eyebrow: "Technologia",
    titlePre: "Architektura",
    titleGradient: "pod spodem pipeline'u",
    desc: "Trzy decyzje inżynierskie przewijają się przez wszystko, co budujemy: dane pacjenta nie opuszczają szpitala, każda rekomendacja musi być wytłumaczalna, a ciężkie obliczenia należą do GPU.",
    privacy: {
      badge: "Architektura prywatności",
      title: "On-premise z architektury, nie z polityki",
      p1: "Zgodnie z art. 9 RODO dane genetyczne to kategoria szczególna — ich przetwarzanie jest ściśle ograniczone, a odpowiedzialność za naruszenie spoczywa na dyrekcji szpitala. Nasza odpowiedź jest architektoniczna: usługi ingestii i wnioskowania działają jako kontenery w sieci szpitala. Żadna sekwencja pacjenta nie trafia do API w chmurze. Na zewnątrz wychodzą wyłącznie zanonimizowane, zabstrahowane zapytania — do publicznego rejestru badań lub indeksu literatury.",
      p2: "Każda rekomendacja jest przy tym ujęta jako informacyjne wsparcie decyzyjne. Klinicysta pozostaje w pętli na każdym etapie; system odpowiada na pytania i cytuje źródła, nie wydaje poleceń.",
      boundaryLabel: "Granica sieci szpitalnej",
      rows: [
        { label: "FASTQ guza / dane sekwencjonowania", note: "nie opuszcza sieci" },
        { label: "Wykrywanie wariantów i graf wiedzy", note: "działa lokalnie" },
        { label: "Wyłącznie zanonimizowane zapytania", note: "opuszcza granicę" },
      ],
      note1: "Zgodność z art. 9 RODO wynika z projektu, nie z polityki",
      note2: "Docelowe wdrożenie: dedykowany sprzęt brzegowy dla regulowanego, lokalnego medycznego AI",
    },
    aiStack: {
      eyebrow: "Stos wnioskowania",
      title: "Akcelerowane wnioskowanie AI i RAG",
      cards: [
        {
          title: "Integracja z NVIDIA BioNeMo",
          description:
            "Wykorzystujemy NVIDIA BioNeMo do przewidywania struktur białkowych 3D (AlphaFold2/ESMFold) i projektowania neoantygenów o wysokim powinowactwie na potrzeby spersonalizowanych szczepionek mRNA.",
        },
        {
          title: "Genomowe modele fundamentalne",
          description:
            "Używamy modeli takich jak Evo 2, akcelerowanych przez GPU, do oceny wariantów o nieznanym znaczeniu (VUS) i wnioskowania na poziomie sekwencji.",
        },
        {
          title: "Wieloagentowy Semantic RAG",
          description:
            "Architektura LangGraph wykorzystująca lokalne bazy wektorowe (np. Qdrant) i osadzenia MedCPT, aby dopasowywać genotyp pacjenta do aktualnych badań klinicznych i literatury bez halucynacji.",
        },
        {
          title: "Bio-pipeline'y w Nextflow",
          description:
            "Zrównoleglone, skonteneryzowane wykonywanie przepływów genomicznych (WiGiTS, SAGE, LILAC), zdolne działać na lokalnych klastrach HPC lub rozszerzać się na GPU w chmurze.",
        },
      ],
    },
    gpuJustification: {
      eyebrow: "Uzasadnienie obliczeń",
      titlePre: "Każde obciążenie GPU",
      titleGradient: "ma uzasadnienie",
      desc: "Nie sięgamy po GPU domyślnie — każde poniższe obciążenie wymaga GPU, bo alternatywa jest albo zbyt wolna, by była klinicznie użyteczna, albo fizycznie niemożliwa na CPU. Tam, gdzie właściwym narzędziem jest CPU, używamy CPU.",
      workloads: [
        {
          workload: "Ocena nowych wariantów (VUS)",
          tech: "Evo 2 (7B, kwantyzowany), akcelerowany przez GPU",
          why: "Deterministyczne wykrywanie wariantów (SAGE/PURPLE/LILAC) działa już na CPU — ale ocena wariantów, których nie sklasyfikowała żadna baza, wymaga modelu fundamentalnego w pętli, a to nie mieści się w budżecie CPU przy pracy w czasie rzeczywistym.",
        },
        {
          workload: "Projektowanie neoantygenów i białek",
          tech: "NVIDIA BioNeMo",
          why: "Przewidywanie struktury i dokowanie (modele klasy AlphaFold2/ESMFold) w celu projektowania i rankingowania spersonalizowanych kandydatów na szczepionki.",
        },
        {
          workload: "Wnioskowanie asystenta klinicznego",
          tech: "Lokalny LLM, akcelerowany przez GPU",
          why: "Kwantyzowane serwowanie on-premise o niskiej latencji — asystent odpowiada w kilka sekund, bez ani jednego zapytania do API w chmurze.",
        },
        {
          workload: "Symulacja mikrośrodowiska guza",
          tech: "Obliczenia SYCL",
          why: "Tysiące oddziałujących na siebie agentów aktualizowanych w każdej klatce — symulator ograniczony do CPU nie udźwignie tego w klinicznie użytecznej skali. Na sprzęcie NVIDIA kompiluje się do natywnej CUDA.",
        },
      ],
      roadmapPre: "Roadmapa —",
      roadmapText:
        "oceniamy akcelerowane przez GPU silniki wyszukiwania i przechodzenia grafów, aby dalej skalować graf wiedzy.",
    },
    simulation: {
      badge: "Obliczenia akcelerowane przez GPU",
      titlePre: "Silnik symulacji w podejściu compute-first, zbudowany, by",
      titleGradient: "działać wszędzie",
      descPre:
        "Nasz silnik modelowania wieloagentowego jest napisany w C++20 z SYCL — neutralnym względem producenta standardzie obliczeniowym działającym na różnych architekturach GPU.",
      descNote: "Na sprzęcie NVIDIA kompiluje się do natywnej CUDA dla maksymalnej przepustowości.",
      descPost:
        "Przenosząc masowy spatial hashing i detekcję kolizji między komórkami w całości na shadery obliczeniowe GPU, eliminujemy wąskie gardła CPU typowe dla starszych symulatorów — co pozwala modelować mikrośrodowisko guza w klinicznie użytecznej skali.",
      cards: [
        {
          title: "Rozwiązania oparte na obliczeniach i AI",
          description:
            "Każda symulacja działa jako obliczenia akcelerowane przez GPU — projektowane pod skalę i szybkość, tak by nauki nie ograniczał sprzęt.",
        },
        {
          title: "Zbudowane dla naukowców, nie inżynierów",
          description:
            "Edytor wizualny pozwala badaczom samodzielnie projektować i uruchamiać symulacje — bez programowania GPU ani pisania kodu.",
        },
        {
          title: "Przenośny rdzeń, dostrojony pod CUDA",
          description:
            "SYCL utrzymuje przenośność kodu w założeniu — ale każdy build domyślnie korzysta z backendu CUDA od NVIDII, gdzie i tak toczy się nasz rozwój, integracja z BioNeMo i wnioskowanie Evo 2.",
        },
      ],
    },
    builtWith: "Zbudowane z użyciem",
  },
};

export const translations = { en, pl };
