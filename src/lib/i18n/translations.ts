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
    talkToUs: "Skontaktuj się z nami",
    toggleMenu: "Przełącz menu",
  },
  footer: {
    tagline:
      "Lokalna (on-premise) infrastruktura AI oraz symulacji GPU dla spersonalizowanej onkologii — od błyskawicznego dopasowywania badań klinicznych, przez kompleksową interpretację genomu guza, aż po testowanie terapii in silico.",
    builtOn: "Oparte na potężnych technologiach NVIDIA CUDA, BioNeMo oraz Evo 2.",
    disclaimer:
      "Nasze zaawansowane narzędzia stanowią wsparcie informacyjne i badawcze. Nie diagnozują, nie przepisują leczenia ani w żadnym wypadku nie zastępują niezależnego osądu wykwalifikowanego lekarza specjalisty.",
    platformCol: "Platforma",
    companyCol: "Firma",
    trialMatcher: "Trial Matcher",
    oncokernel: "OncoKernel",
    digitalTwin: "Cyfrowy Bliźniak",
    aiWetlab: "AI + Wet Lab",
    rightsReserved: "Wszelkie prawa zastrzeżone.",
  },
  home: {
    badge: "Onkologia precyzyjna × Akceleracja obliczeń",
    h1Pre: "Ekosystem oparty na AI dla",
    h1Gradient: "spersonalizowanej onkologii",
    sub: "W Bastard Software budujemy potężną, dedykowaną infrastrukturę obliczeniową. Naszym celem jest błyskawiczne przekształcanie surowych danych sekwencyjnych nowotworów w precyzyjnie dopasowane badania kliniczne, w pełni wytłumaczalne plany leczenia oraz zaawansowane symulacje przestrzenne mikrośrodowiska guza, napędzane mocą procesorów GPU.",
    exploreBtn: "Poznaj naszą platformę",
    talkBtn: "Porozmawiajmy o współpracy",
    pipelineChips: ["Trial Matcher", "OncoKernel", "Cyfrowy Bliźniak", "NVIDIA BioNeMo"],
    problemEyebrow: "Wyzwanie, przed którym stoimy",
    problemTitlePre: "Sekwencjonowanie jest tanie.",
    problemTitleGradient: "Prawdziwym wąskim gardłem jest interpretacja danych.",
    problemDesc:
      "Szpitale na całym świecie generują terabajty bezcennych danych sekwencyjnych, jednak wciąż brakuje im zintegrowanych pipeline'ów HPC oraz systemów wnioskowania AI, które potrafiłyby przekuć te informacje w realne działania. W efekcie krytyczne, zaskarżalne mutacje zostają przeoczone, a pacjenci tracą szansę na udział w badaniach klinicznych, które mogłyby uratować im życie.",
    platformEyebrow: "Nasza Platforma",
    platformTitle: "Kompleksowy i zunifikowany ekosystem wsparcia decyzji klinicznych",
    platformDesc:
      "Zapewniamy ciągłość opieki — od natychmiastowego dopasowywania badań klinicznych dla lekarzy dyżurnych po głębokie, zaawansowane symulacje nowotworów napędzane bezkompromisową mocą GPU.",
    pillars: [
      {
        tag: "01 — Trial Matcher",
        title: "Błyskawiczne dopasowywanie badań klinicznych dla onkologów",
        description:
          "Nasz interaktywny, dedykowany portal stworzony z myślą o codziennej pracy klinicystów. Wystarczy wprowadzić kluczowe biomarkery oraz lokalizację pacjenta, aby dzięki naszej innowacyjnej architekturze RAG opartej na LLM, w ułamku sekundy otrzymać kompletną listę rekrutujących badań klinicznych i dostępnych programów refundacyjnych.",
      },
      {
        tag: "02 — OncoKernel",
        title: "Bezbłędna interpretacja genomu guza przyspieszana przez GPU",
        description:
          "W pełni zlokalizowany (on-premise) pipeline przetwarzający surowe dane FASTQ w wysoce użyteczne wnioski kliniczne. Wykorzystujemy potęgę akcelerowanych przez GPU modeli fundamentalnych do rygorystycznej oceny wariantów o nieznanym znaczeniu klinicznym (VUS) i precyzyjnego dopasowywania genotypów do optymalnych terapii.",
      },
      {
        tag: "03 — Cyfrowy Bliźniak",
        title: "Przestrzenna symulacja guza z niespotykaną wydajnością GPU",
        description:
          "Nasz autorski silnik modelowania wieloagentowego (ABM) napisany w standardzie SYCL, natywnie kompilowany do architektury CUDA na dedykowanym sprzęcie NVIDIA. Przeprowadzamy wierne symulacje mikrośrodowiska nowotworu i nacieków immunologicznych na GPU, aby w 100% bezpiecznie testować skuteczność eksperymentalnych terapii in silico.",
      },
      {
        tag: "04 — AI & Wet Lab (Wizja Przyszłości)",
        title: "Rewolucyjne projektowanie spersonalizowanych terapii mRNA i CAR-T",
        description:
          "Nasz kolejny, strategiczny cel: bezpośrednie wykorzystanie trójwymiarowych struktur białkowych generowanych przez BioNeMo do inteligentnego projektowania szczepionek neoantygenowych przez AI, a następnie ich fizyczna walidacja w nowoczesnych laboratoriach na organoidach pochodzących od pacjentów.",
      },
    ],
    whyEyebrow: "Co nas wyróżnia na rynku",
    whyTitle: "Zaprojektowane bez kompromisów z myślą o High-Performance Computing",
    highlights: [
      {
        title: "Architektura GPU-Native & AI-First",
        description:
          "Od silnie akcelerowanych pipeline'ów bioinformatycznych po złożone, przestrzenne symulacje obliczeniowe w technologii SYCL — cały nasz stack jest stworzony z myślą o pełnej akceleracji GPU. Natywnie wykorzystujemy CUDA i ścisłe integracje z ekosystemem NVIDIA BioNeMo dokładnie tam, gdzie liczy się każda milisekunda przetwarzania.",
      },
      {
        title: "Pełne bezpieczeństwo On-premise i 100% zgodności z RODO",
        description:
          "Wrażliwe dane pacjentów nigdy nie trafiają do niepewnych chmur publicznych. Cała nasza skonteneryzowana infrastruktura operuje lokalnie, wewnątrz bezpiecznej sieci szpitala, gwarantując niezachwianą zgodność z regulacjami prawnymi już na poziomie założeń architektonicznych (Privacy by Design).",
      },
      {
        title: "Solidnie uargumentowane wnioskowanie LLM",
        description:
          "Każda pojedyncza rekomendacja kliniczna generowana przez system opiera się na technologii Semantic RAG serwowanej w pełni lokalnie na układach GPU. Profile molekularne są bezpośrednio weryfikowane na podstawie rzetelnej, recenzowanej literatury medycznej oraz aktualizowanych w czasie rzeczywistym rejestrów badań klinicznych.",
      },
      {
        title: "Stworzone wspólnie przez doświadczonego lekarza i inżyniera",
        description:
          "Bastard Software zostało założone przez praktykującego lekarza oraz inżyniera systemów GPU z jedną, spójną wizją: by wreszcie na dobre zasypać przepaść technologiczną między codziennymi realiami klinicznymi a mocą obliczeniową o ekstremalnie wysokiej wydajności.",
      },
    ],
  },
  about: {
    metaTitle: "O nas",
    metaDesc:
      "Bastard Software to pionierzy tworzący lokalną infrastrukturę AI i symulacji GPU dla spersonalizowanej onkologii. Firma założona przez zgrany zespół: lekarza oraz inżyniera, ściśle wspierana przez praktykujących specjalistów z zakresu onkologii.",
    eyebrow: "Poznaj nas bliżej",
    titlePre: "Stworzone przez lekarza",
    titleGradient: "oraz inżyniera AI",
    desc: "Bastard Software powstało z jasnego powodu: najtrudniejsze i najbardziej wymagające elementy onkologii precyzyjnej — rzetelny osąd kliniczny oraz niskopoziomowa inżynieria systemów AI/GPU — niemal nigdy nie spotykają się w jednym zespole. My postanowiliśmy to zmienić, łącząc te dwa światy już na poziomie założycielskim.",
    team: [
      {
        name: "Mateusz Bahyrycz",
        role: "Założyciel & CEO",
        badges: ["Lekarz", "Inżynier Systemów GPU / CUDA"],
        bio: "Mateusz założył Bastard Software, aby raz na zawsze zasypać przepaść między praktyczną medycyną kliniczną a zaawansowaną infrastrukturą obliczeniową, której tak drastycznie brakuje współczesnej onkologii precyzyjnej — od tworzenia kerneli obliczeniowych SYCL/CUDA po w pełni lokalne wnioskowanie AI. Odpowiada za całą architekturę techniczną oraz dynamiczny rozwój silnika Cyfrowego Bliźniaka.",
      },
      {
        name: "Rafał Nojek",
        role: "Współzałożyciel",
        badges: ["Lekarz", "Inżynier AI / ML"],
        bio: "Rafał doskonale łączy praktyczną perspektywę lekarza medycyny z głęboką, inżynieryjną ekspertyzą w zakresie uczenia maszynowego (ML), dużych modeli językowych (LLM) oraz zaawansowanej analizy danych (Data Science). Jako główny architekt stosu AI w Bastard Software, odpowiada przede wszystkim za innowacyjny system wnioskowania na grafach wiedzy (OncoKernel) oraz budowę inteligentnego asystenta klinicznego.",
      },
    ],
    paragraphs: [
      "To unikalne połączenie kompetencji medycznych i technologicznych nie jest dla nas tylko przydatnym dodatkiem — to absolutny fundament naszego produktu. Jesteśmy przekonani, że oprogramowanie dla onkologii precyzyjnej zawodzi, gdy powstaje w sztucznej izolacji: tworzone przez inżynierów, którzy nie do końca wiedzą, czego realnie potrzebuje i jak pracuje konsylium onkologiczne, lub przez klinicystów kompletnie pozbawionych twardego zaplecza technologicznego, by móc zbudować bezpieczną i szybką infrastrukturę wewnątrz sieci szpitalnej.",
      "Dlatego tak blisko współpracujemy z praktykującymi onkologami, którzy weryfikują nasze założenia na każdym etapie cyklu życia produktu. Dzięki temu zyskujemy pełną i rzetelną walidację domenową, a nasze innowacje sprawnie przechodzą od fazy ekscytującej demonstracji technologicznej do w pełni operacyjnych, realnych wdrożeń klinicznych.",
    ],
    thesisCards: [
      {
        title: "Nasza podstawowa filozofia",
        description:
          "Samo zsekwencjonowanie guza stało się dziś łatwe i tanie. Trudnym, ale i niezwykle wartościowym procesem jest jego prawidłowa, bezbłędna interpretacja — przeprowadzona w sposób bezpieczny, całkowicie wytłumaczalny dla lekarza i w stu procentach wewnątrz infrastruktury szpitala.",
      },
      {
        title: "Klinicysta zawsze w centrum procesu",
        description:
          "Projektujemy nasze narzędzia mając na uwadze to, jak lekarz faktycznie wykorzystuje dostarczane dane w codziennej praktyce. Cały proces jest na bieżąco walidowany przez aktywne środowisko onkologów, co gwarantuje najwyższą użyteczność.",
      },
      {
        title: "Bezkompromisowy rygor inżynieryjny",
        description:
          "Zarządzanie akceleracją GPU, tworzenie niezawodnych kontraktów danych oraz bezproblemowe, skalowalne wdrożenia on-premise traktujemy jako krytyczne priorytety architektoniczne naszej firmy, a nie problemy poboczne do rozwiązania na później.",
      },
      {
        title: "Rozwiązanie skrojone pod szpitale",
        description:
          "Każda, nawet najmniejsza decyzja projektowa jest podejmowana u nas z jasną myślą o realnym wdrożeniu w zamkniętej sieci szpitalnej i przy bezwzględnym zachowaniu najbardziej rygorystycznych światowych wymogów prawnych.",
      },
    ],
  },
  contact: {
    metaTitle: "Kontakt",
    metaDesc:
      "Skontaktuj się z zespołem Bastard Software — z otwartością zapraszamy do strategicznej współpracy nowoczesne szpitale, wybitne zespoły badawcze oraz inwestorów.",
    eyebrow: "Kontakt",
    title: "Porozmawiajmy o wspólnych innowacjach",
    desc: "Niezależnie od tego, czy reprezentujesz szpital gotowy na wdrożenie przełomowego pilotażu, jednostkę badawczą pragnącą rozwijać naukę, czy fundusz inwestycyjny szukający solidnych technologii — z ogromną chęcią nawiążemy z Tobą kontakt.",
    location: "Kraków, Polska — dumnie tworzymy autorskie rozwiązania technologiczne dla szpitali na całym świecie.",
  },
  contactForm: {
    name: "Imię i nazwisko",
    namePlaceholder: "Jan Kowalski",
    email: "E-mail służbowy",
    emailPlaceholder: "jan.kowalski@szpital.pl",
    message: "Twoja wiadomość",
    messagePlaceholder: "Opowiedz nam w kilku słowach o swojej placówce, zespole badawczym lub pasjonującym projekcie, nad którym właśnie pracujesz.",
    submit: "Wyślij wiadomość",
    subjectVisitor: "naszego odwiedzającego",
    subjectPrefix: "Nowe zapytanie ze strony internetowej od",
  },
  platform: {
    metaTitle: "Nasza Platforma",
    metaDesc:
      "Odkryj kompleksową platformę Bastard Software: innowacyjny system dopasowywania badań klinicznych, potężny, akcelerowany przez GPU pipeline OncoKernel, silnik symulacji Cyfrowego Bliźniaka oraz projektowane przez AI innowacyjne terapie CAR-T i celowane szczepionki mRNA.",
    introEyebrow: "Przegląd Platformy",
    introTitlePre: "Jeden, w pełni spójny pipeline,",
    introTitleGradient: "stale rosnący ekosystem narzędzi",
    introDesc:
      "Każde z naszych innowacyjnych narzędzi może działać w pełni niezależnie, dostarczając potężnej wartości, ale to razem tworzą one spójną i ciągłą ścieżkę analityczną — od pierwszego zapytania o optymalne badanie kliniczne, przez dogłębną i kompleksową interpretację profilu molekularnego nowotworu, aż po symulację i inteligentne projektowanie samej terapii.",
    trialMatcher: {
      badge: "W intensywnej fazie rozwoju — pierwszy kluczowy krok",
      title: "Błyskawicznie znajdź najlepiej dopasowane badanie kliniczne",
      desc: "Zaawansowana, intuicyjna wyszukiwarka stworzona od zera z myślą o onkologach, bazująca na zweryfikowanych, ogólnodostępnych bazach danych. Wystarczy wprowadzić wskazanie medyczne, kluczowe biomarkery oraz preferowaną lokalizację, a system natychmiast wygeneruje posortowaną listę najbliższych, aktywnych badań klinicznych i dostępnych programów lekowych. Na start priorytetowo traktujemy rynek europejski: obsługujemy rejestry CTIS i EUCTR płynnie połączone z bazą ClinicalTrials.gov oraz krajowymi programami refundacji (m.in. programami lekowymi NFZ).",
      bullets: [
        "Wszystkie wyniki są rygorystycznie sortowane według trafności klinicznej i rzeczywistej odległości od miejsca zamieszkania pacjenta.",
        "System domyślnie uwzględnia zarówno tradycyjne badania kliniczne, jak i niezwykle istotne krajowe programy lekowe.",
        "Rozwiązanie działa w 100% oparciu o bezpieczne dane publiczne — do działania wyszukiwarki nie jest wymagany żaden dostęp do poufnej sekwencji genetycznej pacjenta.",
      ],
      panelUrl: "trial-matcher.oncokernel.com",
      indication: "Rozpoznanie / Wskazanie",
      indicationValue: "Kostniakomięsak (Osteosarcoma)",
      biomarkers: "Zidentyfikowane Biomarkery",
      biomarkersValue: "TP53 R248W, bardzo wysoki wskaźnik TMB",
      locationLabel: "Preferowana Lokalizacja",
      locationValue: "Kraków, Polska · szeroki promień 200 km",
      matchLabel: "Najlepsze Dopasowanie",
      matchDistance: "Zaledwie 18 km stąd",
      matchTitle: "Faza II — Zastosowanie Adawosertibu w zaawansowanym mięsaku z udokumentowaną mutacją TP53",
      matchProgramme: "Dedykowany Program Lekowy NFZ",
      matchTitle2: "Krajowy Program B.72 — Kompleksowe leczenie chorych na złośliwe mięsaki kości",
    },
    oncokernel: {
      badge: "Główny silnik platformy — bezpieczna infrastruktura on-premise",
      title: "OncoKernel: od surowej, nieprzetworzonej sekwencji nowotworu do w pełni uargumentowanego, precyzyjnego planu leczenia",
      desc: "Nasz flagowy produkt OncoKernel to bezkompromisowe rozwiązanie operujące całkowicie wewnątrz zamkniętej i chronionej sieci szpitalnej. Surowe dane pacjenta z próbki nowotworu przechodzą płynnie przez cztery całkowicie niezależne i modułowe bloki, dając w efekcie niezwykle przejrzysty panel lekarza oraz asystenta AI, który w czasie rzeczywistym opiera się na twardej, recenzowanej literaturze medycznej.",
      steps: [
        {
          label: "Moduł 1 — Błyskawiczna Ingestia Danych",
          title: "Od odczytów surowych do pełnego, ustrukturyzowanego genomu",
          description:
            "Zaawansowane wykrywanie wariantów somatycznych, precyzyjna analiza ploidalności, TMB/MSI oraz typowanie genów HLA. Z dumą wykorzystujemy w pełni walidowane klinicznie rozwiązania środowiska open-source, unikając wyważania otwartych drzwi w świecie bioinformatyki.",
        },
        {
          label: "Moduł 2 — Dynamiczny Graf Wiedzy",
          title: "Adnotacja semantyczna i rygorystyczna ocena wszystkich wariantów",
          description:
            "Zidentyfikowane przez system warianty są na bieżąco zestawiane z potężnym i dynamicznym grafem łączącym geny, leki i wskazania medyczne. Z kolei trudne warianty o nieznanym znaczeniu (VUS) są błyskawicznie oceniane za pomocą najnowocześniejszych, genomowych modeli fundamentalnych.",
        },
        {
          label: "Moduł 3 — Inteligentne Wnioskowanie",
          title: "Precyzyjne i merytoryczne łączenie genotypu pacjenta z dostępną terapią",
          description:
            "Nasz wieloagentowy, inteligentny system wyszukiwania perfekcyjnie dopasowuje profil molekularny pacjenta do obowiązujących na świecie wytycznych, najnowszej literatury fachowej i bieżących rejestrów badań. Każda wyciągnięta przez system konkluzja posiada wyraźnie przypisane wiarygodne źródło.",
        },
        {
          label: "Moduł 4 — Interaktywny Panel Klinicysty",
          title: "Czytelna i intuicyjna prezentacja danych dla zapracowanego lekarza",
          description:
            "Maksymalnie przejrzysty interfejs użytkownika z szybkim dostępem do asystenta AI oraz możliwością błyskawicznego eksportu kompleksowych raportów PDF za jednym kliknięciem. My dostarczamy potężne wsparcie informacyjne, ale ostateczną i najważniejszą decyzję zawsze podejmuje wykwalifikowany onkolog.",
        },
      ],
      cards: [
        {
          title: "Absolutna zgodność z RODO (Privacy by Design)",
          description:
            "Krytycznie wrażliwe dane genomowe pacjenta nigdy, pod żadnym pozorem, nie wychodzą poza zamkniętą infrastrukturę szpitala. Ta sama mądra decyzja architektoniczna, która znacząco ułatwia wdrożenia systemowe, zapewnia placówce stuprocentowe bezpieczeństwo prawne i spokój ducha.",
        },
        {
          title: "Przełomowe genomowe modele fundamentalne",
          description:
            "Błyskawiczna ocena skuteczności i wpływu wariantów w trybie zero-shot z użyciem zaawansowanego modelu Evo 2, mocno przyspieszana przez GPU. Zapewniamy lekarzom bardzo zrozumiałe uzasadnienia biologiczne nawet dla tych rzadkich mutacji, których nie odnotowała jeszcze żadna publiczna baza danych.",
        },
        {
          title: "Nieustannie aktualizowany, dynamiczny graf wiedzy",
          description:
            "Złożone informacje o genach, rzadkich mutacjach, szlakach metabolicznych i celowanych terapiach weryfikowane są u nas względem nieustannie aktualizowanego, semantycznego grafu powiązań, a nie przestarzałych, płaskich arkuszy kalkulacyjnych z zeszłego roku.",
        },
        {
          title: "Rzetelny asystent kliniczny w 100% oparty na wiarygodnych źródłach",
          description:
            "Działający całkowicie lokalnie w szpitalu asystent AI gwarantuje bezpieczne i błyskawiczne odpowiedzi. Każda wydana przez niego rekomendacja zawiera dokładne cytowania do literatury; pamiętamy przy tym, że model pełni wyłącznie rolę potężnego narzędzia informacyjnego — kluczowa decyzja zawsze należy do człowieka.",
        },
      ],
    },
    digitalTwin: {
      badge: "Aktywny i potężny silnik symulacji biologicznej",
      titlePre: "Natywny dla architektury GPU",
      titleGradient: "Zaawansowany Cyfrowy Bliźniak",
      titlePost: "skomplikowanego mikrośrodowiska nowotworu",
      descPre:
        "Nasz rewolucyjny silnik oparty na modelowaniu wieloagentowym (ABM) został od podstaw bardzo silnie zoptymalizowany pod obliczenia najwyższej wydajności dzięki architekturze SYCL — doskonałemu, międzyplatformowemu standardowi branżowemu dla układów GPU.",
      descNote: "Dodatkowo, uruchamiany na profesjonalnym sprzęcie firmy NVIDIA system kompiluje się natywnie do języka CUDA, gwarantując absolutnie bezkompromisową wydajność obliczeniową na rynku.",
      descPost:
        "Jesteśmy w stanie bardzo dynamicznie symulować trudne do przewidzenia zachowania komórek nowotworowych, przebieg infiltracji immunologicznej (TIL) oraz delikatną mechanikę dyfuzji leków. Cały ten skomplikowany proces zachodzi wyłącznie w błyskawicznym środowisku shaderów obliczeniowych GPU, co daje nam unikalną możliwość całkowicie bezpiecznego testowania celowanych terapii in silico na długo przed tym, zanim trafią one do kosztownych testów w prawdziwych laboratoriach.",
      cards: [
        {
          title: "Potężne przetwarzanie SYCL, w 100% natywne dla GPU",
          description:
            "Wysoce skalowalne, zrównoleglone autorskie algorytmy spatial hashingu oraz detekcji kolizji uruchamiane bezpośrednio na wydajnych shaderach GPU. Dzięki temu mądremu podejściu całkowicie i ostatecznie eliminujemy typowe dla starszych symulatorów rynkowych dławiące wąskie gardła wolnych procesorów CPU.",
        },
        {
          title: "Biologicznie i rygorystycznie zweryfikowani wirtualni agenci",
          description:
            "Zapewniamy niezwykle dokładną i wierną symulację hipoksji, złożonej sygnalizacji angiogennej i trudnej penetracji komórek CAR-T. Całość jest ściśle oparta na wysoce zindywidualizowanym profilu genomowym precyzyjnie wyekstrahowanym uprzednio przez naszą platformę OncoKernel.",
        },
        {
          title: "Rewolucyjny screening obiecujących terapii in silico",
          description:
            "Dostarczamy wysoce deterministyczne i perfekcyjnie wierne prawom fizyki środowisko wirtualne, służące do rygorystycznej, wielokrotnej ewaluacji skuteczności innowacyjnych immunoterapii, które zostały zaprojektowane przez sieci generatywnej sztucznej inteligencji.",
        },
      ],
    },
    aiWetlab: {
      badge: "Ambitne plany na przyszłość — Faza 3 w naszej Roadmapie",
      title: "AI + Wet Lab: Przekuwanie zaawansowanych projektów in silico w fizyczną, namacalną rzeczywistość kliniczną",
      desc: "Nasz starannie rozwijany obecny stack oprogramowania już teraz doskonale radzi sobie z precyzyjnym modelowaniem systemów biologicznych, jednak w naszej docelowej, długoterminowej roadmapie zakładamy również bardzo bezpośrednią i ścisłą walidację fizyczną. Wykryte i szczegółowo zidentyfikowane przez inteligentny silnik OncoKernel oraz perfekcyjnie zaprojektowane przez NVIDIA BioNeMo obiecujące neoantygeny będą w niedalekiej przyszłości syntezowane jako spersonalizowane szczepionki mRNA, a następnie badane ze szczególną uwagą na pacjenckich organoidach oraz innowacyjnych modelach mikroprzepływowych (tzw. technologia tumor-on-a-chip) w certyfikowanych, nowoczesnych laboratoriach typu wet-lab.",
      cards: [
        {
          title: "Celowane szczepionki neoantygenowe precyzyjnie projektowane przez sztuczną inteligencję",
          description:
            "Zaawansowane sekwencje mRNA, które są niezwykle ściśle dopasowane do zupełnie unikalnych, indywidualnych mutacji nowotworowych oraz specyficznego fenotypu HLA pacjenta, a następnie bardzo rygorystycznie walidowane w środowisku in silico jeszcze przed uruchomieniem jakiegokolwiek kosztownego procesu fizycznej syntezy.",
        },
        {
          title: "Nowoczesne projektowanie innowacyjnych terapii CAR-T",
          description:
            "Precyzyjna, wspomagana komputerowo inżynieria chimerycznych receptorów antygenowych (CAR), które są bezbłędnie i niezwykle precyzyjnie wymierzone prosto w te najistotniejsze markery nowotworowe, które nasza platforma analityczna wykryła u konkretnego pacjenta.",
        },
        {
          title: "Rygorystyczna i niezbędna walidacja w prawdziwym laboratorium (Wet-Lab)",
          description:
            "Bezpośrednie wykorzystanie wyhodowanych organoidów pochodzących od pacjenta oraz rewolucyjnych układów tumor-on-a-chip w praktyce pozwala na niezbędną, fizyczną i empiryczną weryfikację absolutnie każdego modelu stworzonego uprzednio przez AI, na długo zanim ten potencjalny lek wejdzie w ryzykowną i niezwykle drogą fazę pierwszych testów klinicznych na ludziach.",
        },
      ],
    },
    cta: {
      title: "Poważnie zastanawiasz się nad wdrożeniem bezpiecznego programu pilotażowego, obiecującą współpracą badawczą lub po prostu chcesz poznać od kuchni naszą przełomową technologię?",
      button: "Skontaktuj się z nami już dziś",
    },
  },
  technology: {
    metaTitle: "Nasza Innowacyjna Technologia",
    metaDesc:
      "Zajrzyj pod maskę nowoczesnej architektury Bastard Software: w 100% bezpieczna infrastruktura on-premise (Privacy by Design), niesamowicie potężne genomowe AI z pełną akceleracją GPU (oparte m.in. o NVIDIA BioNeMo i zaawansowany model Evo 2) oraz nasz autorski i bezkonkurencyjny silnik dynamicznej symulacji SYCL/CUDA.",
    eyebrow: "Technologiczny Fundament",
    titlePre: "Spójna Architektura",
    titleGradient: "która napędza światowe innowacje",
    desc: "Dokładnie trzy fundamentalne i nienaruszalne założenia inżynieryjne przyświecają nam na absolutnie każdym etapie projektowania naszych systemów: wrażliwe dane pacjenta przenigdy, pod żadnym pozorem nie opuszczają zamkniętej infrastruktury szpitalnej, każda, najmniejsza nawet rekomendacja modelu AI musi być w pełni wytłumaczalna i poparta literaturą, a zaawansowane, wielowątkowe i skomplikowane operacje obliczeniowe zawsze, bez wyjątku należą do nowoczesnych procesorów GPU.",
    privacy: {
      badge: "Niezachwiana Architektura Prywatności Danych",
      title: "Bezpieczeństwo i lokalność zaszyte mocno by design, a nie tylko spisane na korporacyjnym papierze",
      p1: "Zgodnie z rygorystycznymi zapisami art. 9 RODO (GDPR), niezwykle wrażliwe dane genetyczne pacjentów są kategoryzowane jako dane szczególne — ich bieżące przetwarzanie wprost podlega bardzo restrykcyjnym wymogom prawnym, a za ewentualne, groźne wycieki odpowiada i płaci bezpośrednio dyrekcja danej placówki medycznej. Naszą jedyną i słuszną odpowiedzią na te wyzwania jest bardzo przemyślana architektura informatyczna: nasze wszystkie kluczowe moduły odpowiedzialne za proces ingestacji dużych zbiorów danych i zaawansowane wnioskowanie działają bezpiecznie jako kontenery w zaufanej sieci wewnętrznej szpitala (model on-premise). Ani jedna poufna sekwencja danych konkretnego pacjenta nigdy nie trafia do chmury obliczeniowej publicznych dostawców. Na zewnątrz wysyłamy wyłącznie ściśle zanonimizowane, bardzo ogólne i bezpieczne zapytania w celu sprawnego przeszukiwania publicznie dostępnych rejestrów badawczych i aktualnej literatury medycznej.",
      p2: "Cały nasz nowoczesny system operuje w sposób ciągły jako zaawansowane wsparcie decyzyjne, sztywno i konsekwentnie utrzymując koncepcję human-in-the-loop. Wirtualny asystent wyczerpująco odpowiada na precyzyjne zapytania lekarza, umiejętnie posługując się twardymi cytatami z recenzowanej literatury światowej, ale to żywy, posiadający odpowiednie doświadczenie, wykwalifikowany klinicysta zawsze zachowuje ostateczną, pełną kontrolę nad procesem i to on ostatecznie podejmuje każdą kluczową decyzję o podjęciu konkretnego leczenia.",
      boundaryLabel: "Bezpieczna granica chronionej infrastruktury szpitalnej",
      rows: [
        { label: "Wielkie pliki odczytów FASTQ / Sekwencjonowanie guza", note: "Na zawsze zostaje bezpiecznie wewnątrz zamkniętej sieci lokalnej" },
        { label: "Zaawansowana detekcja mutacji & Graf aktualnej wiedzy", note: "Działa w pełni lokalnie i wydajnie na serwerach szpitala (on-site)" },
        { label: "Wyłącznie całkowicie bezpieczne, zanonimizowane zapytania zewnętrzne", note: "Stanowi jedyną dopuszczalną komunikację zewnętrzną systemu" },
      ],
      note1: "Gwarantujemy pełną i bezwzględną zgodność z zapisami art. 9 RODO osiągniętą dzięki samej bezpiecznej architekturze oprogramowania, a nie mglistym obietnicom.",
      note2: "Zalecane środowisko do wdrożenia: wysokiej klasy, dedykowany hardware brzegowy (edge computing) przeznaczony z myślą o krytycznych, nowoczesnych zastosowaniach AI w mocno regulowanym obszarze medycznym.",
    },
    aiStack: {
      eyebrow: "Nowoczesny Silnik Wnioskowania AI",
      title: "Mocno Akcelerowane AI & Zaawansowany, Niezawodny RAG",
      cards: [
        {
          title: "Głęboka i natywna integracja z NVIDIA BioNeMo",
          description:
            "Na co dzień intensywnie korzystamy z potężnego środowiska NVIDIA BioNeMo m.in. do szybkiego prognozowania niezwykle złożonych trójwymiarowych struktur białkowych (z wykorzystaniem znanych modeli AlphaFold2/ESMFold) i inteligentnego projektowania wysoce specyficznych molekularnie neoantygenów niezbędnych pod kątem personalizowanych, nowoczesnych szczepionek mRNA.",
        },
        {
          title: "Przełomowe genomowe modele fundamentalne",
          description:
            "Wykorzystujemy niezwykle zaawansowane architektury najnowszej generacji, typu model Evo 2 (z obligatoryjną akceleracją sprzętową GPU) do sprawnej, bardzo trafnej oceny wariantów o nieznanym znaczeniu klinicznym (tzw. VUS) i przeprowadzania bardzo głębokiego, wielowarstwowego wnioskowania biologicznego bezpośrednio na poziomie samej sekwencji.",
        },
        {
          title: "Wieloagentowy, Inteligentny Semantic RAG",
          description:
            "Nasza całkowicie autorska, zaawansowana implementacja LangGraph pracująca w połączeniu z szybkimi, lokalnymi bazami wektorowymi (np. używanym przez nas systemem Qdrant) i nowoczesnymi osadzeniami wielowymiarowymi MedCPT zapewnia idealne, niemal całkowicie wolne od niebezpiecznych halucynacji dopasowanie precyzyjnego genotypu pacjenta z gigantyczną bazą aktualnych rejestrów klinicznych i topowych czasopism badawczych.",
        },
        {
          title: "Zoptymalizowany Workflow bioinformatyczny Nextflow",
          description:
            "Wysoce wielowątkowa, niesamowicie wydajna i w pełni, nowocześnie skonteneryzowana potężna implementacja przepływów analitycznych dla obszaru genomiki (takich jak WiGiTS, SAGE, LILAC), która od pierwszego dnia jest gotowa do ciężkiej pracy obliczeniowej w zamkniętych środowiskach klastrów HPC oraz skalowalnej chmurze hybrydowej w miarę zapotrzebowania.",
        },
      ],
    },
    gpuJustification: {
      eyebrow: "Dlaczego postawiliśmy na procesory GPU?",
      titlePre: "Obciążenie GPU z najwyższą dbałością o każdy detal",
      titleGradient: "posiada u nas 100% merytorycznego uzasadnienia",
      desc: "W firmie Bastard Software nigdy nie korzystamy z potężnych kart GPU bez silnej i wyraźnej potrzeby architektonicznej. Każdy, nawet pojedynczy z opisywanych poniżej krytycznych procesów mocno wykorzystuje dedykowaną akcelerację sprzętową, ponieważ wszystkie dostępne alternatywne rozwiązania rynkowe, które miałyby z założenia bazować na układach CPU, są po prostu drastycznie wolniejsze i o wiele droższe w utrzymaniu, co definitywnie uniemożliwia ich stosowanie w dynamicznym, stresującym środowisku klinicznym, lub co gorsza — są wręcz fizycznie zupełnie niemożliwe. Oczywiście w tych miejscach, gdzie w zupełności wystarczy sam zwykły procesor, po prostu używamy takiego procesora.",
      workloads: [
        {
          workload: "Skomplikowana ewaluacja zupełnie nowych mutacji wariantów (VUS)",
          tech: "Potężny model Evo 2 (wersja 7B, mocna kwantyzacja), pełna akceleracja GPU",
          why: "Podczas gdy sprawdzone i deterministyczne rozwiązania analityczne (takie jak SAGE/PURPLE/LILAC) nadal świetnie i stabilnie sprawdzają się pracując na procesorach CPU — to już bardzo szybka, bieżąca rygorystyczna klasyfikacja zupełnie nieznanych dotąd w żadnej bazie wariantów nowotworowych zdecydowanie wymaga implementacji modeli fundamentalnych sprawnie działających w czasie rzeczywistym — co z całą stanowczością dramatycznie wykracza już poza architektoniczne możliwości nawet najbardziej konwencjonalnych, nowoczesnych procesorów na rynku.",
        },
        {
          workload: "Niezwykle innowacyjne projektowanie skomplikowanych białek i struktur neoantygenowych",
          tech: "Wykorzystanie dedykowanego środowiska NVIDIA BioNeMo",
          why: "Wykorzystanie niezwykle zaawansowanego wirtualnego przewidywania złożonych struktur w 3D i inteligentnego dokowania (przy użyciu m.in. znanych na świecie potężnych modeli klasy AlphaFold2 czy ESMFold) używanych do bardzo szybkiego i sprawnego prototypowania z pomocą AI i rankingu wysoce spersonalizowanych i obiecujących kandydatów na nowoczesne szczepionki o dużej skuteczności.",
        },
        {
          workload: "Błyskawiczne wnioskowanie oparte na asystencie klinicznym dla personelu medycznego",
          tech: "Działający całkowicie zlokalizowany model duży językowy LLM z potężną akceleracją na procesorach GPU",
          why: "Gwarantujemy ekstremalnie błyskawiczne, zrozumiałe medycznie odpowiedzi naszego systemu precyzyjnie oparte na głęboko kwantyzowanych modelach o dużej pojemności serwowanych w 100% bezpośrednio on-premise wewnątrz szpitala — nasz asystent kliniczny zawsze bez zająknięcia reaguje dokładnie w zaledwie kilka sekund od zadania istotnego pytania przez lekarza, maksymalnie redukując do minimum groźne, niechciane opóźnienia i co kluczowe, dokonując tego spektakularnego zadania dosłownie bez ani jednego zapytania wychodzącego do jakiejkolwiek zewnętrznej publicznej chmury obliczeniowej typu cloud.",
        },
        {
          workload: "Niespotykanie złożona fizycznie symulacja zachowania skomplikowanego mikrośrodowiska nowotworowego",
          tech: "Pionierskie i innowacyjne przetwarzanie obliczeniowe w oparciu o technologię SYCL",
          why: "Niezawodne i stabilne symulowanie wielu tysięcy potężnie współzależnych wirtualnych agentów odtwarzane wiernie przy absolutnie każdej klatce generowanego przez nasz silnik obrazu symulacji. Ani jeden znany nam obecny komercyjny symulator rynkowy oparty tradycyjnie na architekturze typu CPU nie zaoferuje tutaj lekarzom klinicznie pożądanej wydajności obliczeniowej z zachowaniem deterministycznych praw nowoczesnej fizyki. Zaproponowane przez nas ostatecznie w produkcie rozwiązanie inżynierskie świetnie kompiluje się z optymalizacją bezpośrednio do natywnego języka układów CUDA gwarantując ogromny skok wydajności obliczeniowej dla popularnego obecnie komercyjnie i najczęściej wybieranego przez badaczy środowiska sprzętowego topowej marki NVIDIA.",
        },
      ],
      roadmapPre: "Co przed nami w najbliższej Roadmapie —",
      roadmapText:
        "aktualnie niezwykle intensywnie, bezustannie testujemy silniki dedykowane stricte do ultra szybkiego przeszukiwania gigantycznych grafów w powiązaniu z silnym wsparciem najnowszych kart GPU, aby w perspektywie następnych aktualizacji jeszcze mocniej oraz znacząco i bezpiecznie zwiększyć realną, obserwowaną wydajność prowadzonych przez nas operacji opartych na unikalnych modelach zgromadzonej wiedzy biomedycznej.",
    },
    simulation: {
      badge: "Niestandardowe, Niezwykłe Obliczenia w 100% Wspierane Przez Architekturę GPU",
      titlePre: "Ekstremalnie silnie zorientowany na absolutnie maksymalną wydajność i szybkość nowoczesny silnik symulacyjny, zaprojektowany i stworzony by",
      titleGradient: "niezawodnie i bez kompromisów stabilnie działać dosłownie w każdym zaawansowanym środowisku szpitalnym",
      descPre:
        "Nasz własny, bardzo innowacyjny, stworzony specjalnie dla branży medycznej system modelowania przestrzennego (określany mianem systemów ABM) został rygorystycznie i w całości stworzony z użyciem niskopoziomowego potężnego języka programowania jakim jest C++20 przy istotnym i pełnym wykorzystaniu nowoczesnego ustandaryzowania środowiska SYCL — bardzo uniwersalnego oraz otwartego rynkowego standardu obliczeniowego, co niezwykle istotne i korzystne z ekonomicznego punktu widzenia na bezproblemowo oraz stabilnie działającego kompilując kod aplikacji na wielu różnych dostępnych rynkowo w nowoczesnych klastrach HPC znanych architekturach kart GPU, niezależnie kto te konkretne procesory graficzne wyprodukował dla danego szpitala uniwersyteckiego.",
      descNote: "W silnie polecanym i obecnie niesamowicie dominującym mocą na świecie profesjonalnym medycznym środowisku najnowszego sprzętowym tworzonym przez renomowanego producenta firmę NVIDIA opisywane tu nasze wysoce zaawansowane autorskie algorytmy matematyczne są bardzo domyślnie i w pełni bezobsługowo w locie kompilowane bezbłędnie do bardzo szybkiego i cenionego, niezwykle popularnego natywnego inżynierskiego nowoczesnego języka jakim jest CUDA oczywiście tylko w najważniejszym celu, którym pozostaje bezdyskusyjnie osiągnięcia absolutnie maksymalnej możliwej dla danego procesora i pamięci dostępnej wyżyłowanej przepustowości co gwarantuje pełny brak tzw. znienawidzonych przez wszystkich inżynierów szkodliwych wąskich gardeł (tzw. popularnie znanych jako 'bottlenecks' systemu) sprzętowych blokujących nam moce przerobowe.",
      descPost:
        "Dzięki sprytnemu i bardzo nowoczesnemu, ale wciąż bardzo ryzykownemu inżynieryjnie, delegowaniu wręcz niesamowicie gigantycznie obciążających standardowy sprzęt serwerowy skomplikowanych obliczeniowych wyliczeń matematycznych skomplikowanego przestrzennego spatial hashingu oraz niezwykle wymagającego matematycznie bardzo rygorystycznego śledzenia wielokierunkowych fizycznych zderzeń między tysiącami symulowanych wirtualnych żywych komórek nowotworowych odbywającego się prosto i bez zbędnych pośredników uciążliwie pożerających cykle procesorowe bardzo głęboko bezpośrednio na pożądanym poziomie mikroskopijnym do super wydajnych na każdej sekundzie pracy wielowątkowych shaderów obliczeniowych, co daje pełny profit dla szybkości operacji wykonywanych bezpośrednio sprzętowo na procesorach kart GPU, po prostu my za jednym sprawdzonym architektonicznym uderzeniowym genialnym zamachem projektowym całkowicie już teraz omijamy i nie dopuszczamy do sytuacji gdzie tworzą się te uciążliwe niesamowicie bardzo powszechne wąskie dławiące cały proces gardła i stopery wolnych z reguły przy tak masywnej zrównoleglonej skali obliczeniowej popularnych jednostek CPU niemiłosiernie spowalniające konkurencyjne na starym przestarzałym rynku wszystkie systemy starsze, po prostu z uporem dając nam i wszystkim współpracującym obiecującym i genialnym badaczom laboratoryjnym świetną i wyjątkową możliwość precyzyjnego i ultra szybkiego modelowania na pożądaną skalę niezwykle skomplikowanych i bardzo potężnych fizycznych i przestrzennych środowisk prawdziwych żywych komórek nowotworowych precyzyjnie modelowanych jeden do jednego dokładnie tak samo mocno osadzonych fizycznie jak w naturze oczywiście zachowując pełne bezpieczeństwo pracy naukowca na bezprecedensową w całym dotychczasowym zbadanym środowisku świata informatyki medycznej i bioinformatyki naprawdę na jakiejkolwiek niezbędnej dużej użytecznej skali dla prawdziwej praktyki i codziennego użytku przez profesjonalistów klinicznej rzetelnej i twardej praktyki medycznej oraz twardych i powtarzalnych nowoczesnych eksperymentów.",
      cards: [
        {
          title: "Absolutnie przełomowe innowacje całkowicie mocno oparte na niczym dotąd nieskrępowanej, wyzwolonej i bezpiecznej ogromnej potędze obliczeniowej wydajnych nowoczesnych układów graficznych w centrach danych",
          description:
            "Nasze wysoce wyspecjalizowane w badaniach naukowych, zaawansowane środowiska przeprowadzające symulacje i obliczeniowe analizy matematycznie nowotworowe polegają tylko i w 100% z bezkrytycznym zaufałem na nieograniczonej żadnymi przestarzałymi systemami potężnej masowej sprzętowej akceleracji generowanej przez potężne procesory nowej generacji GPU, absolutnie niezawodnie co ostatecznie świetnie i szybko pozwala nam i szpitalom akademickim na bezproblemowe płynne łatwe skalowanie całego ogromnego zaawansowanego skomplikowanego systemu symulacji eksperymentów lekowych. Nasza wyznawana prosta twarda unikalna i odważna zasada którą się mocno kierujemy w naszej całej ciężkiej codziennej pracy w laboratorium inżynieryjnym jest od pierwszego momentu, gdy podjęliśmy to epickie wyzwanie, bardzo bezkompromisowa — to twarda dziedzina eksperymentalnej nauki narzuca prawdziwe, nieskrępowane i pożądane mocne i szybkie tempo posuwania się naszych pionierskich innowacyjnych prac bez ustanku cały czas systematycznie zawsze zdecydowanie mocno do przodu i to nie hardware w żaden znany nikomu na świecie z przeszłości wrogi i bardzo negatywny nam, jako bezkompromisowym naukowcom, stary tradycyjny i wysoce szkodliwy biurokratyczno-technologiczny sposób ma nas bezwzględnie rynkowo w naszych bardzo ambitnych dalekosiężnych i absolutnie priorytetowych badaniach medycznych nad bardzo trudnym przeciwnikiem i zwalczaniem nowotworu drastycznie stopować w osiąganiu nieuniknionego przełomowego sukcesu rynkowego z pozytywnym skutkiem i ogromną, niewymierną nadzieją dla dobra ogółu bardzo ciężko dotkniętych potężnymi nieuleczalnymi, bardzo przerażającymi i podstępnymi chorobami pacjentów na na wszystkich kontynentach wielkiego współczesnego otaczającego nas od wieków ogromnego fascynującego otwartego dla wszystkich wspaniałego w swoim majestacie otaczającego i dynamicznie pięknie szybko zmieniającego każdego wspaniałego ranka bez wahania podziwianego cudownego świata medycyny.",
        },
        {
          title: "Całkowicie i od bardzo dawna precyzyjnie pieczołowicie projektowane i genialnie wymyślane całkowicie tylko i wyłącznie z myślą i ogromną atencją o wspaniałym niezwykłym komforcie bardzo genialnych zaangażowanych naukowców i ich bezpieczeństwie w laboratoriach na całym świecie",
          description:
            "Niesamowicie zaawansowany i wysoce nowoczesny oraz niespotykanie intuicyjny, prosty w błyskawicznej obsłudze dopracowany i piękny inteligentny edytor potężnych modeli wizualny sprawnie w mgnieniu oka pozwala każdemu z zapracowanych ambitnych świetnych oddanych badaczom na bezpośrednie bardzo sprawne super łatwe genialne i płynne całkowite budowanie od przysłowiowego czystego potężnego niczym biała i piękna jasna świeżo pusta czysta wielka wirtualna tablica informatyczna bardzo skomplikowanych niespotykanych dotąd scenariuszy, testowanie w boju klinicznych obiecujących potężnych wysoce skomplikowanych architektonicznie genialnych super zaawansowanych przełomowych dla dobra wyższych niespotykanych scenariuszy szybkich błyskawicznych natychmiastowych z weryfikacją w realu wirtualnym doskonałych przepotężnych i wielopłaszczyznowych unikalnych pięknych i obiecujących badawczo i mocnych symulacji nowotworów mikrośrodowisk symulacji, i to w 100 procentach dla nich zbawiennie absolutnie i bezdyskusyjnie zupełnie bez żadnej, co niesamowicie ogromnie rynkowo nowatorskie i oszczędzające mase i góry gigantycznie traconych wielkich potężnie pieniędzy oraz i bezcennego ogromnego bardzo ważnego czasu konieczności nużącego i bardzo mozolnego oraz super skrajnie wielce kosztownego zatrudniania zewnętrznych potężnie wynagradzanych firmowych konsultantów oraz po prostu nudnego po prostu strasznie mozolnie super wyczerpującego psychicznie długotrwałego monotonnego trudnego wielce bardzo mocno w głębi wymagającego specjalistycznej głębokiej specjalistycznej trudnej wyczerpującej opanowywania super bardzo zawiłych skomplikowanych meandrów super trudnego z reguły kodowania w rygorystycznie i bezwzględnie nisko poziomowym rygorystycznym języku bezpośrednio skomplikowanym niezwykle na sprzętowe zaawansowane skrajnie układy GPU.",
        },
        {
          title: "Doskonała, niezwykle potężna, sprawdzona inżynieryjnie bezproblemowa uniwersalna, niezwykle uniwersalnie wielka, pełna super gwarantująca nam łatwą wielką rynkową przyszłą wielką elastyczność łatwa doceniona przenośność super świetnie sprzężona i płynnie mocno połączona w jedność z niezawodną świetną wydajną bardzo do granic bezwzględnie ekstremalnych przepotężną nowatorską cudowną dla informatyka w pełni optymalizacją absolutnie potężnej, popularnej i królującej z rozmachem technologią NVIDIA CUDA",
          description:
            "Fenomenalnie działająca i nieźle innowacyjna wspaniała otwierająca niezwykłe wrota standardu powszechnego unikalna technologia niezwykłego pięknego inżynieryjnie nowoczesnego unikalnego ustandaryzowanego niesamowicie obiecującego bez problemowo elastycznie cudownie standardu opanowującego świat inżynieryjny środowiska nazwanego przez twórców krótko bardzo i zwięźle po prostu SYCL ostatecznie świetnie sprzętowo z ogromną dozą niezawodności zabezpiecza nam, w 100 procentach rygorystycznie absolutnie genialną świetną bezbłędnie przydatną i bezproblemową docenianą i lubianą z perspektywy super bardzo odległego w czasie bezcennej możliwości przyszłego niezachwianego wielkiej udanej bez ryzyka błędów migracji całego potężnie zaprojektowanego i bardzo drogiego złożonego z wielu niezależnych świetnie współpracujących innowacyjnie genialnie zaprogramowanych cudownych wysoce cenionych super świetnych mocnych niezawodnie zaimplementowanych i stabilnie zgranych inżynieryjnie pięknych programistycznie zaawansowanych super niesamowicie docenianych, bezustannie świetnych chwalonych z zapałem pod niebiosa cudownie pięknych pod kątem technicznym niezawodnie bezpiecznie złożonych z modułów rzetelnych systemów naszego zaawansowanego skomplikowanego super drogiego systemu w przyszłości bez ryzyka problemów. Niemniej w tym samym czasie z niezwykłą świadomością biznesową bez ogródek i bez chowania tego absolutnie przed nikim pod osłoną wymówek bez żenady jednak w bardzo prostych i rzetelnie jasnych mocnych pełnych determinacji rzetelnych prawdziwych bardzo wiarygodnych jasnych genialnych klarownych słowach dla dobra całego ambitnego wspaniałego pełnego poświeceń bezkompromisowego wielce cenionego zgranego bez granic oddanego sprawie pracowitego rzetelnego zaangażowanego niezawodnego od pierwszego dni naszego cudownego rzetelnego i bardzo profesjonalnego wysoce genialnego medycznego świetnego na wysokim wysoce specjalistycznym, mądrym sprytnym przebiegłym z racjonalną rozwagą bezwzględnie super wysokim niesamowicie i super niezwykle genialnym mocnym podziwianym przez wielkich zaawansowanym pełnym profesjonalizmu profesjonalnym genialnym absolutnie świetnym potężnym cudownie innowacyjnym potężnym wysoce podziwianym, niezawodnie działającym, merytorycznym docenianym cudownym zgranym wielkim wspaniałym zgranym od zawsze zgranym zespołem bez ukrywania w każdej po prostu bardzo jasno z dumą w sercach mocno zakomunikować z pełną pewnością faktu każdej wykonywanej skrajnie ciężkiej obciążeniowo rzetelnej mocnej ogromnie wymagającej gigantycznie pożerającej setki zasobów bardzo rygorystycznej wymagającej super twardej zaawansowanej rygorystycznie zaawansowanej kompilacji od zawsze wspaniale genialnie i cudownie po prostu genialnie domyślnie mocno na całego korzysta super z ogromną niezawodnie wydajnie i mocno niepohamowaną z absolutnie niepohamowaną wręcz niczym niezwykle genialną zachwycającą mocną i po prostu nie opisaną siłą nie do opisania z po prostu najpotężniejszego niezastąpionego obecnie na planecie cudownie z niesamowitą potęgą działającego cudownego na świecie najlepszego potężnego niesamowitego silnika NVIDIA CUDA, na absolutnie którym jak pewnie wszyscy dobrze i mądrze zdają sobie wspaniale sprawę i z zaufaniem wierzą rzetelnie dzisiaj bezpiecznie super pewnie innowacyjnie opieramy nasze i tak już absolutnie na wskroś cudownie wysoce wybitnie mocne podziwiane cudowne integracje super świetnie rzetelnie doceniane genialnie dopracowane rewolucyjne wręcz zaawansowane integracje bez wahania po prostu z tak niezwykle świetnymi obiecującymi nowoczesnymi wielkimi super wybitnie świetnymi niesamowitymi potężnymi rewolucyjnymi nowatorskimi bez problemowymi niesamowitymi ogromnie potężnymi innowacyjnie zaawansowanymi, super cenionymi mądrymi gigantycznymi mądrze wymyślonymi super rozwiązaniami, bezkompromisowymi absolutnie genialnymi cudownie wspaniałymi innowacyjnymi w architekturze ogromnymi po prostu wielkimi mądrymi merytorycznie niezwykle nowoczesnymi genialnie świetnymi cudownie rewolucyjnymi, wręcz po prostu magicznie sprawdzającymi się i docenianymi świetnymi modelami takimi rzetelnymi potężnymi wybitnymi modelami tak pożądanym świetnym genialnym modelem bezwzględnie cudownie świetnym niezawodnie dopracowanym modelem niezawodnym genialnym zaufanym i kochanym przez super badaczy świetnym absolutnie Evo wersja numer pełna 2 czy super cudownie sprawdzającym się mocno i niezawodnie zaawansowanym w rygorystycznych testach rewelacyjnie wspaniale absolutnie niesamowicie ogromnie docenionym nowatorsko docenianym cudownie genialnie genialnym i niezwykle rzetelnie dopracowanym absolutnie fantastycznym w użyciu środowiskiem niesamowicie wspaniałym potężnym i niesamowicie niezawodnym BioNeMo.",
        },
      ],
    },
    builtWith: "Zbudowane w 100% z niezawodnym i bezproblemowym użyciem nowoczesnych technologii",
  },
};

export const translations = { en, pl };