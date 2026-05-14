// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Course materials and lecture slides.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-presented-my-book-at-the-feria-internacional-del-libro-de-guadalajara-fil-one-of-the-largest-book-fairs-in-the-spanish-speaking-world-thanks-to-all-co-authors-and-attendees-read-more-linkedin",
          title: 'Presented my book at the Feria Internacional del Libro de Guadalajara (FIL), one...',
          description: "",
          section: "News",},{id: "news-participated-as-panelist-at-bosch-fitfest-2023-discussing-artificial-intelligence-applied-to-software-testing-alongside-sergio-jair-martín-alvarez-jose-luis-anaya-bernal-and-armando-ramirez-read-more-linkedin",
          title: 'Participated as panelist at Bosch FitFest 2023 discussing Artificial Intelligence applied to software...',
          description: "",
          section: "News",},{id: "news-serving-as-guest-editor-for-the-special-issue-innovations-in-artificial-intelligence-for-medicine-and-healthcare-in-health-information-science-and-systems-springer-co-editors-sharib-ali-christian-mata-lucía-prieto-santamaría-enrique-garcia-ceja-and-estefanía-talavera-read-more-linkedin",
          title: 'Serving as Guest Editor for the Special Issue “Innovations in Artificial Intelligence for...',
          description: "",
          section: "News",},{id: "news-phd-student-victor-terrón-presented-his-research-on-llm-optimization-techniques-for-compliance-assessment-at-cimps-2025-in-lima-peru-the-work-analyzes-9-techniques-including-rag-lora-and-prompt-engineering-read-more-linkedin",
          title: 'PhD student Victor Terrón presented his research on LLM optimization techniques for compliance...',
          description: "",
          section: "News",},{id: "news-paper-beyond-swe-bench-a-compiler-assisted-pipeline-for-multi-language-automated-program-repair-published-at-micai-2025-team-moises-pineda-diego-luna-mariana-esquivel-juan-salazar-with-prof-daniel-flores-araiza-read-more-linkedin",
          title: 'Paper “Beyond SWE-Bench: A Compiler-Assisted Pipeline for Multi-language Automated Program Repair” published at...',
          description: "",
          section: "News",},{id: "news-participated-as-panelist-at-micai-2025-discussing-generative-ai-s-impact-on-education-alongside-omar-florez-pablo-rivas-inés-alvarez-icaza-xiaoou-li-and-lourdes-martinez-moderated-by-gilberto-ochoa-ruiz-read-more-linkedin",
          title: 'Participated as panelist at MICAI 2025 discussing “Generative AI’s Impact on Education” alongside...',
          description: "",
          section: "News",},{id: "news-our-paper-slice-semantic-language-indexed-code-extraction-was-presented-at-the-latinx-in-ai-workshop-at-neurips-2025-in-san-diego-congratulations-to-oscar-arámbula-oscar-beltran-omar-guzmán-and-victor-terrón-read-more-linkedin",
          title: 'Our paper SLICE: Semantic Language-Indexed Code Extraction was presented at the LatinX in...',
          description: "",
          section: "News",},{id: "news-presented-research-at-the-ife-conference-institute-for-the-future-of-education-alongside-dr-victor-rodriguez-great-collaboration-on-exploring-the-future-of-ai-in-education-read-more-linkedin",
          title: 'Presented research at the IFE Conference (Institute for the Future of Education) alongside...',
          description: "",
          section: "News",},{id: "news-featured-on-france-24-español-discussing-ai-safety-vs-rapid-development-constitutional-ai-and-the-tensions-between-ai-giants-like-anthropic-and-openai-watch-the-segment-read-more-linkedin",
          title: 'Featured on France 24 Español discussing AI safety vs. rapid development, Constitutional AI,...',
          description: "",
          section: "News",},{id: "news-launched-the-course-site-for-tc3002b-aplicaciones-computacionales-avanzadas-the-capstone-course-guiding-120-cs-students-through-final-projects-on-agentic-llm-systems-triton-kernels-gpu-llm-serving-and-constrained-decoding-in-partnership-with-c3-ai-intel-nxp-and-oracle-visit-the-site",
          title: 'Launched the course site for TC3002B – Aplicaciones Computacionales Avanzadas, the capstone course...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
