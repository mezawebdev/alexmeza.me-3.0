const config = {
  showPages: true,
  showWorld: true,
  showLoadingScreen: false,
  pages: [
    {
      active: false,
      path: "/",
      label: "HOME",
      target: "earth",
    },
    {
      active: false,
      path: "/about",
      label: "ABOUT",
      target: "saturn",
    },
    {
      active: false,
      path: "/work",
      label: "WORK",
      target: "mars",
    },
    {
      active: false,
      path: "/contact",
      label: "CONTACT",
      target: "neptune",
    },
  ],
  projects: [
    {
      id: 1,
      type: "professional",
      title: "Biteable.com",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Biteable is an online video maker. Their core mission is to allow people to bring their messages to life. Biteable.com is the main home and entry point for the Biteable app.</li>
                    <li><strong>Goal:</strong> Improve current ACF/PHP-based app with a new system that allows authors to manage web content effectively as well as improve website speed, detach data-layer from UI, and greatly improve the website experience for the end-users.</li>
                    <li><strong>My Roles:</strong> Full-Stack Engineer</li>
                    <li><strong>Solution:</strong> Developed a cutting-edge headless architecture using React.js/Next.js and PHP/WordPress as the CMS using custom Gutenberg blocks along with a shared UI library from scratch using React.js & Storybook.</li>
                    <li><strong>Result:</strong> Delivered a one-of-a-kind headless system with a shared UI library that is fed to both WordPress' Gutenberg page editor as well as a separate Next.js app to generate static pages using the data from the WordPress API. This provided authors with advanced page building capabilities and allowed engineers to develop efficient & semantic UI and deliver it to the end-users faster.</li>
                </ul>
            `,
      year: 2022,
      thumbnail: "/assets/images/projects/Biteable-Thumbnail-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Biteable-Apple-Mockups.png",
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "Sass",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React.js",
        "Next.js",
        "PHP",
        "MySQL",
        "Docker",
        "Wordpress",
      ],
      githubUrl: "",
      appUrl: "https://biteable.com",
      codebaseSrc: "",
      isRescue: false,
    },
    {
      id: 2,
      type: "professional",
      title: "Quit The Hit",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Quit the Hit is a program that helps youth and adult audiences quit vaping through the guidance of a coach.</li>
                    <li><strong>Goal:</strong> Create a system that connects youth audiences with coaches.</li>
                    <li><strong>My Roles:</strong> lead engineer, project architecture, database design, UI/UX</li>
                    <li><strong>Solution:</strong> I created a web application with Nuxt.js and Node.js + Express.js on the back-end. I used MySQL as the database language alongside the Sequelize ORM for Node.js. I also used the Qualtrics API for survey integration.</li>
                    <li><strong>Result:</strong> Multi-year extension of original contract as well as the acquisition of new contracts for other national organizations.</li>
                </ul>
            `,
      year: 2019,
      thumbnail: "/assets/images/projects/Quit-The-Hit-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Quit-The-Hit-1.png",
        },
        {
          type: "video",
          mimeType: "video/mp4",
          src: "/assets/work/projects/qth-video-1.mov",
          vertical: true,
        },
        {
          type: "video",
          mimeType: "video/mp4",
          src: "/assets/work/projects/qth-video-2.mov",
          vertical: false,
        },
        {
          type: "video",
          mimeType: "video/mp4",
          src: "/assets/work/projects/qth-video-3.mov",
          vertical: false,
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Vue.js",
        "Nuxt.js",
        "MySQL",
        "Apache",
      ],
      githubUrl: "",
      appUrl: "https://quitthehitnow.com",
      codebaseSrc: "",
      isRescue: true,
    },
    {
      id: 3,
      type: "professional",
      title: "Hustle & Strive",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Hustle & Strive is an online self-help program which helps youth audiences stay away from addictive substances by teaching them coping techniques.</li>
                    <li><strong>Goal:</strong> Create interactive program with surveys, videos and digital experiences to teach users core coping mechanisims.</li>
                    <li><strong>My Roles:</strong> lead engineer, front-end architecture, UI/UX, back-end development</li>
                    <li><strong>Solution:</strong> I created a PHP laravel application with Vue.js on the front. I used MySQL for the database, and incorporated Laravel Nova as an administration back-end which was used by admins and stakeholders</li>
                    <li><strong>Result:</strong> program ran for multiple years, generated wide range of users and facilitated a new contract recently.</li>
                </ul>
            `,
      year: 2018,
      thumbnail: "/assets/images/projects/Hustle-And-Strive-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Hustle-And-Strive-1.png",
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Laravel",
        "MySQL",
        "Apache",
      ],
      githubUrl: "",
      appUrl: "https://hustlestrive.com",
      codebaseSrc: "",
      isRescue: true,
    },
    {
      id: 4,
      type: "professional",
      title: "Sunsick Studio",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Sunsick Studio is a music recording studio located in San Diego, California.</li>
                    <li><strong>Goal:</strong> develop a customizable website to serve as the main hub for Sunsick Studio's online presence, to display their work and, to gather more inquiries for recording work.</li>
                    <li><strong>My Roles:</strong> UI/UX designer, lead engineer, front-end development, headless CMS setup and configuration</li>
                    <li><strong>Solution:</strong> I designed a website that aligns with Sunsick Studio's brand. I used Figma to create wireframes and comps. I developed the website with React.js, JavaScript, and Next.js for SEO. In order to make the site customizble, I created a headless CMS architecture using Strapi.</li>
                    <li><strong>Result:</strong> Program is currently in the final stages of development and is expected to launch soon.</li>
                </ul>
            `,
      year: 2021,
      thumbnail: "/assets/images/projects/Sunsick-Studio-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Sunsick-Studio-1.png",
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "MySQL",
        "Strapi",
        "Nginx",
      ],
      githubUrl: "https://github.com/mezaWebLab/sunsickstudio-2021-client",
      appUrl: "https://sunsickstudio.mezaweblab.com",
      codebaseSrc: "/sunsick-studio",
      isRescue: false,
    },
    {
      id: 5,
      type: "professional",
      title: "Behind The Haze",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Behind the Haze is a multi-state anti-vaping campaign aimed at youth audiences.</li>
                    <li><strong>Goal:</strong> develop a high quality website that can be easily repurposed and licensed. Implement lots of interactive modules to create an eye-catching website.</li>
                    <li><strong>My Roles:</strong> lead engineer, front-end development, project architecture</li>
                    <li><strong>Solution:</strong> I created a website that is highly abstracted and modular. Following a component-based pattern, I developed fully abstracted UIs that can be easily plugged in anywhere. I created various interactive modules such as carousels, sliders, tappers, etc., and implemented parallax effects and CSS animations/transitions to make the website feel alive.</li>
                    <li><strong>Result:</strong> Obtained multiple clients across various states that have now adoped and licensed the site.</li>
                </ul>
            `,
      year: 2020,
      thumbnail: "/assets/images/projects/Behind-The-Haze-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Behind-The-Haze-1.png",
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "Apache",
      ],
      githubUrl: "",
      appUrl: "https://behindthehaze.com",
      codebaseSrc: "",
      isRescue: true,
    },
    {
      id: 6,
      type: "professional",
      title: "Quit Now SC",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Quit Now SC is a website for the South Carolina Tobacco Quitline. The purpose of this website was to create a main hub to raise awareness about the client's quitline resources and the road to quitting tobacco for good.</li>
                    <li><strong>Goal:</strong> develop a website that easy to navigate, accessible and can be updated easily.</li>
                    <li><strong>My Roles:</strong> lead engineer, front-end development, project architecture</li>
                    <li><strong>Solution:</strong> I created a system that fully abstracts the markup, and it's all configured with JavaScript objects and abstracted components. I used HTML, SCSS, JavaScript, Nuxt.js, Vue.js + more tools to develop the site.</li>
                    <li><strong>Result:</strong> This website resulted in successful contract completion and a happy client. The site has been viewed now by thousands of users and is still serving as one of the main hubs for users looking to use the Quitline resources in South Carolina.</li>
                </ul>
            `,
      year: 2018,
      thumbnail: "/assets/images/projects/Quit-Now-SC-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Quit-Now-SC-1.png",
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "Apache",
      ],
      githubUrl: "",
      appUrl: "https://quitnowsc.org",
      codebaseSrc: "",
      isRescue: true,
    },
    {
      id: 7,
      type: "professional",
      title: "Rethink Recovery",
      description: `
                <ul>
                    <li><strong>Overview:</strong> Rethink Recovery is a website for the  Illinois Department of Human Services, to promote and raise awareness of their Medication-Assisted Recovery (MAR) treatment. </li>
                    <li><strong>Goal:</strong> Develop a website that is highly aesthetic, eye-catching and informative.</li>
                    <li><strong>My Roles:</strong> lead engineer, front-end development, project architecture</li>
                    <li><strong>Solution:</strong> I used HTML, SCSS, Vue.js and Nuxt.js to create a website that completed the requirements. I also used parallax effects, fade-in animations and CSS transitions and animations to create an eye-catching website.</li>
                    <li><strong>Result:</strong> This work resulted in the acquisition of a new client contract.</li>
                </ul>
            `,
      year: 2018,
      thumbnail: "/assets/images/projects/Rethink-Recovery-IL-Thumbnail.png",
      media: [
        {
          type: "image",
          src: "/assets/images/projects/Rethink-Recovery-IL-1.png",
        },
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "Apache",
      ],
      githubUrl: "",
      appUrl: "https://rethinkrecoveryil.com",
      codebaseSrc: "",
      isRescue: true,
    },
    // {
    //     id: 7,
    //     type: "professional",
    //     title: "Outlast VT",
    //     description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
    //     year: 2018,
    //     thumbnail: "/assets/images/projects/Outlast-VT-Thumbnail.png",
    //     media: [
    //         {
    //             type: "image",
    //             src: "/assets/images/projects/Outlast-VT-1.png"
    //         }
    //     ],
    //     technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "PHP", "Apache"],
    //     githubUrl: "",
    //     appUrl: "https://rethinkrecoveryil.org",
    //     codebaseSrc: "",
    //     isRescue: true
    // // },
    // {
    //     id: 7,
    //     type: "professional",
    //     title: "ParentUp VT",
    //     description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
    //     year: 2018,
    //     thumbnail: "/assets/images/projects/Parent-Up-VT-Thumbnail.png",
    //     media: [
    //         {
    //             type: "image",
    //             src: "/assets/images/projects/Parent-Up-VT-1.png"
    //         }
    //     ],
    //     technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Nuxt.js", "Apache"],
    //     githubUrl: "",
    //     appUrl: "https://parentupvt.org",
    //     codebaseSrc: "",
    //     isRescue: true
    // }
  ],
  technologies: [
    {
      label: "HTML5",
      image: "/assets/images/html5-white.png",
      showBadge: true,
    },
    {
      label: "CSS3",
      image: "/assets/images/css3-white.png",
      showBadge: true,
    },
    {
      label: "TypeScript",
      image: "/assets/images/typescript.png",
      showBadge: true,
    },
    {
      label: "JavaScript",
      image: "/assets/images/js-white.png",
      showBadge: true,
    },
    {
      label: "Vue.js",
      image: "/assets/images/vue.png",
      showBadge: true,
    },
    {
      label: "Nuxt.js",
      image: "/assets/images/nuxtjs.svg",
      showBadge: true,
    },
    {
      label: "React.js",
      image: "/assets/images/react.png",
      showBadge: true,
    },
    {
      label: "Next.js",
      image: "/assets/images/nextjs.png",
      showBadge: true,
    },
    {
      label: "Babylon.js",
      image: "/assets/images/babylonjs.png",
      showBadge: true,
    },
    {
      label: "Node.js",
      image: "/assets/images/nodejs.svg",
      showBadge: true,
    },
    {
      label: "MySQL",
      image: "/assets/images/mysql.png",
      showBadge: true,
    },
    {
      label: "PHP",
      image: "/assets/images/php.png",
      showBadge: true,
    },
    {
      label: "Laravel",
      image: "/assets/images/laravel.png",
      showBadge: true,
    },
    {
      label: "Wordpress",
      image: "/assets/images/wordpress.png",
      showBadge: true,
    },
    {
      label: "Sass",
      image: "/assets/images/sass.png",
      showBadge: true,
    },
    {
      label: "Bootstrap",
      image: "/assets/images/bootstrap.png",
      showBadge: false,
    },
    {
      label: "Docker",
      image: "/assets/images/docker.png",
      showBadge: true,
    },
    {
      label: "Apache",
      image: "/assets/images/Apache_Feather_Logo.png",
      showBadge: false,
    },
    {
      label: "Nginx",
      image: "/assets/images/Nginx_Cube.png",
      showBadge: false,
    },
    {
      label: "Strapi",
      image: "/assets/images/hp-logo-hero_c94026101f.svg",
      showBadge: false,
    },
  ],
  brands: [
    {
      label: "Biteable",
      image: "/assets/images/brands/Biteable-Logo.png",
    },
    {
      label: "Rescue Agency",
      image: "/assets/images/brands/rescue.svg",
    },
    {
      label: "Quit the Hit",
      image: "/assets/images/brands/quit-the-hit-logo-highres.png",
    },
    {
      label: "Hustle & Strive",
      image: "/assets/images/brands/hustlle-strive-logo.svg",
    },
    {
      label: "Sunsick Studio",
      image: "/assets/images/brands/sunsick.png",
    },
    {
      label: "Behind The Haze",
      image: "/assets/images/brands/bth-logo-white.svg",
    },
    // {
    //     label: "OutlastVT",
    //     image: "/assets/images/brands/outlast-logo.png"
    // },
    {
      label: "QuitNowSC",
      image: "/assets/images/brands/logo-sctql.png",
    },
    {
      label: "RethinkRecoveryIL",
      image: "/assets/images/brands/rethink-recovery-logo.svg",
    },
    // {
    //     label: "ParentUpVT",
    //     image: "/assets/images/brands/logo-1.svg"
    // }
  ],
  world: {
    backgroundColor: "#FFFFFF",
    scale: 0.0002,
    planetScaleModifier: 10,
    showLights: true,
    engine: {
      hardwareScalingLevel: 1,
    },
    spacebox: {
      enabled: true,
      color: "light-blue",
      speed: 0.0001,
    },
    effects: {
      enabled: true,
      fog: {
        enabled: false,
        density: 0.00001,
        color: "#486878",
      },
      glow: {
        enabled: true,
        intensity: 5,
      },
    },
    speed: 0.2,
    camera: {
      initialPlanetFollow: "earth",
      initialPosition: {
        x: 465,
        y: 12,
        z: 465,
        alpha: 10,
        beta: 10,
        radius: 1,
      },
      animate: true,
    },
    lights: [
      {
        key: "sunlight-1",
        initialPosition: {
          x: 0,
          y: 0,
          z: 0,
        },
        intensity: 3,
      },
      {
        key: "ambient-light-1",
        initialPosition: {
          x: 0,
          y: 600,
          z: 0,
        },
        intensity: 1,
      },
    ],
    debug: {
      showAxis: false,
      axisSize: 5000,
      showTarget: false,
      showConsole: false,
    },
    objects: {
      showPlanets: true,
      showSun: true,
      showPlanetsRotationAxis: true,
      distance: 100,
      animation: {
        planetsRotationAxis: {
          x: 0,
          y: 0,
          z: 0,
        },
      },
      stars: {
        enabled: false,
        texture: "/assets/textures/particle.png",
        emitRate: 2500,
        minSize: 5,
        maxSize: 10,
        minLifeTime: 10,
        maxLifeTime: 1000,
        origin: {
          x: 0,
          y: 0,
          z: 0,
        },
        minEmitBox: {
          x: -1000,
          y: -1000,
          z: -1000,
        },
        maxEmitBox: {
          x: 1000,
          y: 1000,
          z: 1000,
        },
      },
      asteroidBelt: {
        enabled: false,
      },
      sun: {
        key: "sun",
        texture: "/assets/textures/sun.jpg",
        get diameter() {
          /* sun's real size is 1377648 km */ return (
            config.world.scale * 1377648
          );
        },
        initialPosition: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          axis: {
            x: 0,
            y: 0,
            z: 0,
          },
          angle: 0.001,
          speed: 0.001,
        },
        debug: {
          showRing: false,
          showInitialPosition: false,
        },
        cameraPlacement: {
          alpha: -2.2,
          beta: 1.3,
          radius: 17,
        },
      },
      planets: [
        // Mercury
        {
          key: "mercury",
          texture: "/assets/textures/mercury.jpg",
          get diameter() {
            return getPlanetDiameter(277);
          },
          initialPosition: {
            get x() {
              return getPlanetPosition(config.world.objects.planets[0], 1);
            },
            y: 0,
            get z() {
              return getPlanetPosition(config.world.objects.planets[0], 1);
            },
          },
          rotation: {
            axis: { x: 0, y: 0, z: 0 },
            get angle() {
              return 0.008 * config.world.speed;
            },
            speed: 0.005,
          },
          effects: {
            highlight: true,
            highlightColor: "#ffffff",
          },
          debug: {
            showRing: false,
            showInitialPosition: false,
          },
          target: {
            get x() {
              return config.world.objects.planets[0].initialPosition.x;
            },
            get y() {
              return config.world.objects.planets[0].initialPosition.y + 8;
            },
            get z() {
              return config.world.objects.planets[0].initialPosition.z;
            },
          },
          cameraPlacement: {
            alpha: -2.2,
            beta: 1.3,
            radius: 17,
          },
        },
        //  Venus
        {
          key: "venus",
          texture: "/assets/textures/venus.jpg",
          get diameter() {
            return getPlanetDiameter(113);
          },
          initialPosition: {
            get x() {
              return getPlanetPosition(config.world.objects.planets[1], 2);
            },
            y: 0,
            get z() {
              return getPlanetPosition(config.world.objects.planets[1], 2);
            },
          },
          rotation: {
            axis: {
              x: 0,
              y: 0,
              z: 0,
            },
            get angle() {
              return 0.007 * config.world.speed;
            },
            speed: 0.001,
          },
          layers: [
            {
              type: "texture",
              texture: "/assets/textures/clouds_1-small.png",
              rotate: true,
              rotationSpeed: -0.001,
              highlight: false,
              highlightColor: "#d9b881",
              alpha: 0.5,
            },
          ],
          effects: {
            highlight: true,
            highlightColor: "#d9b881",
          },
          debug: {
            showRing: false,
            showInitialPosition: false,
          },
          target: {
            get x() {
              return config.world.objects.planets[1].initialPosition.x;
            },
            get y() {
              return config.world.objects.planets[1].initialPosition.y + 12.5;
            },
            get z() {
              return config.world.objects.planets[1].initialPosition.z;
            },
          },
          cameraPlacement: {
            x: 365,
            y: 12,
            z: 365,
            alpha: 0.9,
            beta: 1.5,
            radius: 17,
          },
        },
        // Earth
        {
          key: "earth",
          texture: "/assets/textures/earth.jpg",
          get diameter() {
            return getPlanetDiameter(108);
          },
          initialPosition: {
            get x() {
              return getPlanetPosition(config.world.objects.planets[2], 3);
            },
            y: 0,
            get z() {
              return getPlanetPosition(config.world.objects.planets[2], 3);
            },
          },
          rotation: {
            axis: {
              x: 0,
              y: 0,
              z: 0,
            },
            get angle() {
              return 0.006 * config.world.speed;
            },
            speed: 0.001,
          },
          layers: [
            {
              type: "texture",
              texture: "/assets/textures/earth_atmosphere-small.png",
              rotate: true,
              rotationSpeed: -0.001,
              highlight: false,
              highlightColor: "#3d91ff",
            },
          ],
          effects: {
            highlight: true,
            highlightColor: "#3d91ff",
          },
          debug: {
            showRing: false,
            showInitialPosition: false,
          },
          target: {
            get x() {
              return config.world.objects.planets[2].initialPosition.x;
            },
            get y() {
              return config.world.objects.planets[2].initialPosition.y + 12.5;
            },
            get z() {
              return config.world.objects.planets[2].initialPosition.z;
            },
          },
          cameraPlacement: {
            x: 460,
            y: 13.5,
            z: 465,
            alpha: 0.9,
            beta: 1.45,
            radius: 17,
          },
        },
        // Mars
        {
          key: "mars",
          texture: "/assets/textures/mars.jpg",
          get diameter() {
            return getPlanetDiameter(208);
          },
          initialPosition: {
            get x() {
              return getPlanetPosition(config.world.objects.planets[3], 4);
            },
            y: 0,
            get z() {
              return getPlanetPosition(config.world.objects.planets[3], 4);
            },
          },
          rotation: {
            axis: {
              x: 0,
              y: 0,
              z: 0,
            },
            get angle() {
              return 0.005 * config.world.speed;
            },
            speed: 0.001,
          },
          effects: {
            highlight: true,
            highlightColor: "#fae4b4",
          },
          debug: {
            showRing: false,
            showInitialPosition: false,
          },
          layers: [
            {
              type: "texture",
              texture: "/assets/textures/clouds_2-small.png",
              rotate: true,
              rotationSpeed: -0.001,
              highlight: false,
              highlightColor: "#fae4b4",
              alpha: 0.1,
            },
          ],
          target: {
            get x() {
              return config.world.objects.planets[3].initialPosition.x;
            },
            get y() {
              return config.world.objects.planets[3].initialPosition.y + 6;
            },
            get z() {
              return config.world.objects.planets[3].initialPosition.z;
            },
          },
          cameraPlacement: {
            alpha: 0.9,
            beta: 1.3,
            radius: 10,
          },
        },
        // Jupiter
        {
          key: "jupiter",
          texture: "/assets/textures/jupiter.jpg",
          get diameter() {
            return getPlanetDiameter(9.68);
          },
          initialPosition: {
            get x() {
              return getPlanetPosition(config.world.objects.planets[4], 5.25);
            },
            y: 0,
            get z() {
              return getPlanetPosition(config.world.objects.planets[4], 5.25);
            },
          },
          rotation: {
            axis: {
              x: 0,
              y: 0,
              z: 0,
            },
            get angle() {
              return 0.004 * config.world.speed;
            },
            speed: 0.001,
          },
          debug: {
            showRing: false,
            showInitialPosition: false,
          },
          effects: {
            highlight: true,
            highlightColor: "#fae4b4",
          },
          layers: [
            {
              type: "texture",
              texture: "/assets/textures/clouds_2-small.png",
              rotate: true,
              rotationSpeed: -0.001,
              highlight: false,
              highlightColor: "#fae4b4",
              alpha: 0.25,
            },
            // {
            //     type: "texture",
            //     texture: "/assets/textures/clouds_1-small.png",
            //     rotate: true,
            //     rotationSpeed: 0.001,
            //     highlight: false,
            //     highlightColor: "#fae4b4",
            //     alpha: 0.25
            // }
          ],
          target: {
            get x() {
              return config.world.objects.planets[4].initialPosition.x - 70;
            },
            get y() {
              return config.world.objects.planets[4].initialPosition.y + 70;
            },
            get z() {
              return config.world.objects.planets[4].initialPosition.z;
            },
          },
          cameraPlacement: {
            x: 470,
            y: 11,
            z: 430,
            alpha: 0.9,
            beta: 1.5,
            radius: 17,
          },
        },
        // Saturn
        {
          key: "saturn",
          texture: "/assets/textures/saturn.jpg",
          get diameter() {
            return getPlanetDiameter(11.4);
          },
          initialPosition: {
            get x() {
              return getPlanetPosition(config.world.objects.planets[5], 8.5);
            },
            y: 0,
            get z() {
              return getPlanetPosition(config.world.objects.planets[5], 8.5);
            },
          },
          rotation: {
            axis: {
              x: 0,
              y: 0,
              z: 0,
            },
            get angle() {
              return 0.003 * config.world.speed;
            },
            speed: 0.001,
          },
          debug: {
            showRing: false,
            showInitialPosition: false,
          },
          effects: {
            highlight: true,
            highlightColor: "#bbb37c",
          },
          layers: [
            {
              type: "texture",
              texture: "/assets/textures/clouds_2-small.png",
              rotate: true,
              rotationSpeed: -0.001,
              highlight: false,
              highlightColor: "#bbb37c",
              alpha: 0.25,
            },
            // {
            //     type: "texture",
            //     texture: "/assets/textures/clouds_1-small.png",
            //     rotate: true,
            //     rotationSpeed: 0.001,
            //     highlight: false,
            //     highlightColor: "#bbb37c",
            //     alpha: 0.25
            // }
          ],
          ring: true,
          target: {
            get x() {
              return config.world.objects.planets[5].initialPosition.x - 100;
            },
            get y() {
              return config.world.objects.planets[5].initialPosition.y + 300;
            },
            get z() {
              return config.world.objects.planets[5].initialPosition.z - 100;
            },
          },
          cameraPlacement: {
            alpha: 1,
            beta: 1,
            radius: 17,
          },
        },
        // Uranus
        // {
        //     key: "uranus",
        //     texture: "/assets/textures/uranus.jpg",
        //     get diameter() {  return getPlanetDiameter(26.8); },
        //     initialPosition: {
        //         get x() { return getPlanetPosition(config.world.objects.planets[6], 11.75); },
        //         y: 0,
        //         get z() { return getPlanetPosition(config.world.objects.planets[6], 11.75); },
        //     },
        //     rotation: {
        //         axis: {
        //             x: 0,
        //             y: 0,
        //             z: 0
        //         },
        //         get angle() { return 0.002 * config.world.speed },
        //         speed: 0.001
        //     },
        //     debug: {
        //         showRing: false,
        //         showInitialPosition: false
        //     },
        //     effects: {
        //         highlight: true,
        //         highlightColor: "#57faff"
        //     },
        //     layers: [
        //         {
        //             type: "texture",
        //             texture: "/assets/textures/clouds_2.png",
        //             rotate: true,
        //             rotationSpeed: -0.001,
        //             highlight: false,
        //             highlightColor: "#57faff",
        //             alpha: 0.25
        //         },
        //         {
        //             type: "texture",
        //             texture: "/assets/textures/clouds_1.png",
        //             rotate: true,
        //             rotationSpeed: 0.001,
        //             highlight: false,
        //             highlightColor: "#57faff",
        //             alpha: 0.25
        //         }
        //     ],
        //     ring: true,
        //     target: {
        //         get x() { return config.world.objects.planets[6].initialPosition.x },
        //         get y() { return config.world.objects.planets[6].initialPosition.y + 10 },
        //         get z() { return config.world.objects.planets[6].initialPosition.z }
        //     },
        //     cameraPlacement: {
        //         x: 1250,
        //         y: 11,
        //         z: 1250,
        //         alpha: 0.9,
        //         beta: 1.5,
        //         radius: 17
        //     }
        // },
        // // Neptune
        // {
        //     key: "neptune",
        //     texture: "/assets/textures/neptune.jpg",
        //     get diameter() {  return getPlanetDiameter(27.7); },
        //     initialPosition: {
        //         get x() { return getPlanetPosition(config.world.objects.planets[7], 13.5); },
        //         y: 0,
        //         get z() { return getPlanetPosition(config.world.objects.planets[7], 13.5); },
        //     },
        //     rotation: {
        //         axis: {
        //             x: 0,
        //             y: 0,
        //             z: 0
        //         },
        //         get angle() { return 0.001 * config.world.speed },
        //         speed: 0.001
        //     },
        //     debug: {
        //         showRing: false,
        //         showInitialPosition: false
        //     },
        //     effects: {
        //         highlight: true,
        //         highlightColor: "#4267bf"
        //     },
        //     layers: [
        //         {
        //             type: "texture",
        //             texture: "/assets/textures/clouds_1.png",
        //             rotate: true,
        //             rotationSpeed: 0.001,
        //             highlight: false,
        //             highlightColor: "#4267bf",
        //             alpha: 0.1
        //         }
        //     ],
        //     ring: true,
        //     target: {
        //         get x() { return config.world.objects.planets[7].initialPosition.x },
        //         get y() { return config.world.objects.planets[7].initialPosition.y + 10 },
        //         get z() { return config.world.objects.planets[7].initialPosition.z }
        //     },
        //     cameraPlacement: {
        //         x: 1400,
        //         y: 11,
        //         z: 1400,
        //         alpha: 0.9,
        //         beta: 1.5,
        //         radius: 17
        //     }
        // }
      ],
    },
  },
};

function getPlanetPosition(planet, padding) {
  return (
    config.world.objects.sun.diameter / 2 +
    planet.diameter / 2 +
    config.world.objects.distance * padding
  );
}

function getPlanetDiameter(ratioToSun) {
  return (
    (config.world.objects.sun.diameter / ratioToSun) *
    config.world.planetScaleModifier
  );
}

export default config;
