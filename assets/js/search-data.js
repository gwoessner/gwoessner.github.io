// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-accueil",
    title: "Accueil",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-enseignement",
          title: "Enseignement",
          description: "Mes documents de cours.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-recherches",
          title: "Recherches",
          description: "Ma thèse, et les articles que j&#39;ai publiés.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Pour un CV plus détaillé, vous pouvez cliquer sur l&#39;icone sur la droite.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-la-taxe-zucman-en-cours",
      
        title: "La taxe Zucman ? (EN COURS)",
      
      description: "Sur ce qui justifie la taxe Zucman.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/zucman/";
        
      },
    },{id: "post-qu-39-est-ce-que-l-39-économie",
      
        title: "Qu&#39;est-ce que l&#39;économie ?",
      
      description: "Comment les économistes évaluent les politiques de contrôle des loyers.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/econometrie/";
        
      },
    },{id: "post-qu-39-est-ce-que-les-mathématiques",
      
        title: "Qu&#39;est-ce que les mathématiques ?",
      
      description: "Je réponds aux questions qu&#39;on me pose souvent sur ma discipline.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/maths/";
        
      },
    },{id: "post-le-sujet-chaud-du-climat-partie-2",
      
        title: "Le sujet chaud du climat, partie 2",
      
      description: "Où on traite &quot;l&#39;argument des 1%&quot;.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/climat-2/";
        
      },
    },{id: "post-le-sujet-chaud-du-climat-partie-1",
      
        title: "Le sujet chaud du climat, partie 1",
      
      description: "Une revue argumentée de la thèse climatosceptique moderne.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/climat/";
        
      },
    },{id: "post-qu-39-est-ce-que-la-science",
      
        title: "Qu&#39;est-ce que la science ?",
      
      description: "Un aperçu de l&#39;épistémologie.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/epistemologie/";
        
      },
    },{id: "courses-collège-5ème",
          title: 'Collège, 5ème',
          description: "Dernière mise-à-jour : 2024-25.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/5eme/";
            },},{id: "courses-l3-martingales-et-mouvement-brownien",
          title: 'L3, Martingales et mouvement brownien',
          description: "Dernière mise-à-jour : 2022-23.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/L3_Brownian_Motion/";
            },},{id: "courses-spe",
          title: 'SPE',
          description: "Dernière mise-à-jour : Automne 2025.",
          section: "Courses",handler: () => {
              window.location.href = "/courses/epita/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%75%69%6C%6C%61%75%6D%65@%77%6F%65%73%73%6E%65%72.%6F%76%68", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/guillaume-woessner-700449227", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Guillaume-Woessner/", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Charles_WG3", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://tenors.app/speakers/ZmfyeFNDiRbrHvB5YqlASFyU6k62", "_blank");
        },
      },{
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
