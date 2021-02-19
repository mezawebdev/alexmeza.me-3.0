const config = {
    showPages: true,
    showWorld: true,
    pages:[
        {
            active: false,
            path: "/",
            label: "HOME",
            target: "earth"
        },
        {
            active: false,
            path: "/about",
            label: "ABOUT",
            target: "saturn"
        },
        {
            active: false,
            path: "/work",
            label: "WORK",
            target: "mars"
        },
        {
            active: false,
            path: "/contact",
            label: "CONTACT",
            target: "neptune"
        }
    ],
    projects: [
        {
            id: 1,
            type: "professional",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [
                "/assets/images/projects/sunsick-studio-1.png",
                "/assets/images/projects/sunsick-studio-1.png"
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Vue.js", "Wordpress"],
            githubUrl: "http://myapp.com",
            appUrl: "http://myapp.com"
        },
        {
            id: 2,
            type: "professional",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 3,
            type: "professional",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 4,
            type: "professional",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 5,
            type: "personal",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 6,
            type: "personal",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 7,
            type: "personal",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 8,
            type: "personal",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 9,
            type: "experimental",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        },
        {
            id: 10,
            type: "experimental",
            title: "Awesome Project",
            description: "Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem Lorem Lorem Lorem LOrem",
            year: 2018,
            thumbnail: "/assets/images/projects/hustlestrive-thumbnail.png",
            images: [],
            technologies: [],
            githubUrl: "",
            appUrl: ""
        }
    ],
    technologies: [
        {
            label: "HTML5",
            image: "/assets/images/html5-white.png"
        },
        {
            label: "CSS3",
            image: "/assets/images/css3-white.png"
        },
        {
            label: "JavaScript",
            image: "/assets/images/js-white.png"
        },
        {
            label: "Vue.js",
            image: "/assets/images/vue.png"
        },
        {
            label: "Nuxt.js",
            image: "/assets/images/nuxtjs.svg"
        },
        {
            label: "React.js",
            image: "/assets/images/react.png"
        },
        {
            label: "Next.js",
            image: "/assets/images/nextjs.png"
        },
        {
            label: "Babylon.js",
            image: "/assets/images/babylonjs.png"
        },
        {
            label: "Node.js",
            image: "/assets/images/nodejs.svg"
        },
        {
            label: "MySQL",
            image: "/assets/images/mysql.png"
        },
        {
            label: "PHP",
            image: "/assets/images/php.png"
        },
        {
            label: "Laravel",
            image: "/assets/images/laravel.png"
        },
        {
            label: "Wordpress",
            image: "/assets/images/wordpress.png"
        },
        {
            label: "Sass",
            image: "/assets/images/sass.png"
        },
        {
            label: "Bootstrap",
            image: "/assets/images/bootstrap.png"
        }
    ],
    brands: [
        {
            label: "Rescue Agency",
            image: "/assets/images/brands/rescue.svg"
        },
        {
            label: "Sunsick Studio",
            image: "/assets/images/brands/sunsick.png"
        }
    ],
    world: {
        backgroundColor: "#FFFFFF",
        scale: 0.0002,
        planetScaleModifier: 10,
        showLights: true,
        engine: {
            hardwareScalingLevel: 1
        },
        spacebox: {
            enabled: true,
            color: "light-blue",
            speed: 0.0001
        },
        effects: {
            enabled: true,
            fog: {
                enabled: true,
                density: 0.00001,
                color: "#486878"
            },
            glow: {
                enabled: true,
                intensity: 5
            }
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
                radius: 1
            },
            animate: true
        },
        lights: [
            {
                key: "sunlight-1",
                initialPosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                intensity: 3
            },
            {
                key: "ambient-light-1",
                initialPosition: {
                    x: 0,
                    y: 600,
                    z: 0
                },
                intensity: 1
            },
            {
                key: "ambient-light-2",
                initialPosition: {
                    x: 0,
                    y:  600,
                    z: 0
                },
                intensity: 0.5
            },
            {
                key: "ambient-light-3",
                initialPosition: {
                    x: 600,
                    y: 0,
                    z: 0
                },
                intensity: 0.5
            },
            {
                key: "ambient-light-4",
                initialPosition: {
                    x:  600,
                    y: 0,
                    z: 0
                },
                intensity: 0.5  
            },
            {
                key: "ambient-light-5",
                initialPosition: {
                    x: 0,
                    y: 0,
                    z: 600
                },
                intensity: 0.5
            },
            {
                key: "ambient-light-6",
                initialPosition: {
                    x: 0,
                    y: 0,
                    z:  600
                },
                intensity: 0.5
            }
        ],
        debug: {
            showAxis: false,
            axisSize: 5000,
            showTarget: true,
            showConsole: false
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
                    z: 0
                }
            },
            stars: {
                enabled: true,
                texture: "/assets/textures/particle.png",
                emitRate: 5000,
                minSize: 5,
                maxSize: 10,
                minLifeTime: 10,
                maxLifeTime: 1000,
                origin: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                minEmitBox: {
                    x: -1000,
                    y: -1000,
                    z: -1000
                },
                maxEmitBox: {
                    x: 1000,
                    y: 1000,
                    z: 1000
                }
            },
            asteroidBelt: {
                enabled: false
            },
            sun: {
                key: "sun",
                texture: "/assets/textures/sun.jpg",
                get diameter() { /* sun's real size is 1377648 km */ return config.world.scale * 1377648; },
                initialPosition: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    axis: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    angle: 0.001,
                    speed: 0.001
                },
                debug: {
                    showRing: false,
                    showInitialPosition: false
                }
            },
            planets: [
                // Mercury
                {
                    key: "mercury",
                    texture: "/assets/textures/mercury.jpg",
                    get diameter() { return getPlanetDiameter(277); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[0], 1); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[0], 1); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.008 * config.world.speed },
                        speed: 0.005
                    },
                    effects: {
                        highlight: true,
                        highlightColor: "#ffffff"
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    target: {
                        get x() { return config.world.objects.planets[0].initialPosition.x },
                        get y() { return config.world.objects.planets[0].initialPosition.y + 5 },
                        get z() { return config.world.objects.planets[0].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 250,
                        y: 5,
                        z: 250
                    }
                },
                //  Venus
                {
                    key: "venus",
                    texture: "/assets/textures/venus.jpg",
                    get diameter() { return getPlanetDiameter(113); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[1], 2); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[1], 2); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.007 * config.world.speed },
                        speed: 0.001
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_1.png",
                            rotate: true,
                            rotationSpeed: -0.001,
                            highlight: false,
                            highlightColor: "#d9b881",
                            alpha: 0.5
                        }
                    ],
                    effects: {
                        highlight: true,
                        highlightColor: "#d9b881"
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    target: {
                        get x() { return config.world.objects.planets[1].initialPosition.x },
                        get y() { return config.world.objects.planets[1].initialPosition.y + 12.5 },
                        get z() { return config.world.objects.planets[1].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 365,
                        y: 12,
                        z: 365
                    }
                },
                // Earth
                {
                    key: "earth",
                    texture: "/assets/textures/earth.jpg",
                    get diameter() {  return getPlanetDiameter(108); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[2], 3); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[2], 3); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.006 * config.world.speed },
                        speed: 0.001
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/earth_atmosphere.png",
                            rotate: true,
                            rotationSpeed: -0.001,
                            highlight: false,
                            highlightColor: "#3d91ff"
                        }
                    ],
                    effects: {
                        highlight: true,
                        highlightColor: "#3d91ff"
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    target: {
                        get x() { return config.world.objects.planets[2].initialPosition.x },
                        get y() { return config.world.objects.planets[2].initialPosition.y + 12.5 },
                        get z() { return config.world.objects.planets[2].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 460,
                        y: 14,
                        z: 465
                    }
                },
                // Mars
                {
                    key: "mars",
                    texture: "/assets/textures/mars.jpg",
                    get diameter() {  return getPlanetDiameter(208); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[3], 4); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[3], 4); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.005 * config.world.speed },
                        speed: 0.001
                    },
                    effects: {
                        highlight: true,
                        highlightColor: "#fae4b4"
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_2.png",
                            rotate: true,
                            rotationSpeed: -0.001,
                            highlight: false,
                            highlightColor: "#fae4b4",
                            alpha: 0.1
                        }
                    ],
                    target: {
                        get x() { return config.world.objects.planets[3].initialPosition.x },
                        get y() { return config.world.objects.planets[3].initialPosition.y + 6 },
                        get z() { return config.world.objects.planets[3].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 555,
                        y: 9,
                        z: 555
                    }
                },
                // Jupiter
                {
                    key: "jupiter",
                    texture: "/assets/textures/jupiter.jpg",
                    get diameter() {  return getPlanetDiameter(9.68); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[4], 5.25); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[4], 5.25); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.004 * config.world.speed },
                        speed: 0.001
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    effects: {
                        highlight: true,
                        highlightColor: "#fae4b4"
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_2.png",
                            rotate: true,
                            rotationSpeed: -0.001,
                            highlight: false,
                            highlightColor: "#fae4b4",
                            alpha: 0.25
                        },
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_1.png",
                            rotate: true,
                            rotationSpeed: 0.001,
                            highlight: false,
                            highlightColor: "#fae4b4",
                            alpha: 0.25
                        }
                    ],
                    target: {
                        get x() { return config.world.objects.planets[4].initialPosition.x - 70 },
                        get y() { return config.world.objects.planets[4].initialPosition.y + 70 },
                        get z() { return config.world.objects.planets[4].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 470,
                        y: 11,
                        z: 430
                    }
                },
                // Saturn
                {
                    key: "saturn",
                    texture: "/assets/textures/saturn.jpg",
                    get diameter() {  return getPlanetDiameter(11.4); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[5], 8.5); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[5], 8.5); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.003 * config.world.speed },
                        speed: 0.001
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    effects: {
                        highlight: true,
                        highlightColor: "#bbb37c"
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_2.png",
                            rotate: true,
                            rotationSpeed: -0.001,
                            highlight: false,
                            highlightColor: "#bbb37c",
                            alpha: 0.25
                        },
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_1.png",
                            rotate: true,
                            rotationSpeed: 0.001,
                            highlight: false,
                            highlightColor: "#bbb37c",
                            alpha: 0.25
                        }
                    ],
                    ring: true,
                    target: {
                        get x() { return config.world.objects.planets[5].initialPosition.x - 70 },
                        get y() { return config.world.objects.planets[5].initialPosition.y + 70 },
                        get z() { return config.world.objects.planets[5].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 915,
                        y: 11,
                        z: 915
                    }
                },
                // Uranus
                {
                    key: "uranus",
                    texture: "/assets/textures/uranus.jpg",
                    get diameter() {  return getPlanetDiameter(26.8); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[6], 11.75); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[6], 11.75); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.002 * config.world.speed },
                        speed: 0.001
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    effects: {
                        highlight: true,
                        highlightColor: "#57faff"
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_2.png",
                            rotate: true,
                            rotationSpeed: -0.001,
                            highlight: false,
                            highlightColor: "#57faff",
                            alpha: 0.25
                        },
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_1.png",
                            rotate: true,
                            rotationSpeed: 0.001,
                            highlight: false,
                            highlightColor: "#57faff",
                            alpha: 0.25
                        }
                    ],
                    ring: true,
                    target: {
                        get x() { return config.world.objects.planets[6].initialPosition.x },
                        get y() { return config.world.objects.planets[6].initialPosition.y + 10 },
                        get z() { return config.world.objects.planets[6].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 1250,
                        y: 11,
                        z: 1250
                    }
                },
                // Neptune
                {
                    key: "neptune",
                    texture: "/assets/textures/neptune.jpg",
                    get diameter() {  return getPlanetDiameter(27.7); },
                    initialPosition: {
                        get x() { return getPlanetPosition(config.world.objects.planets[7], 13.5); },
                        y: 0,
                        get z() { return getPlanetPosition(config.world.objects.planets[7], 13.5); },
                    },
                    rotation: {
                        axis: {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        get angle() { return 0.001 * config.world.speed },
                        speed: 0.001
                    },
                    debug: {
                        showRing: false,
                        showInitialPosition: false
                    },
                    effects: {
                        highlight: true,
                        highlightColor: "#4267bf"
                    },
                    layers: [
                        {
                            type: "texture",
                            texture: "/assets/textures/clouds_1.png",
                            rotate: true,
                            rotationSpeed: 0.001,
                            highlight: false,
                            highlightColor: "#4267bf",
                            alpha: 0.1
                        }
                    ],
                    ring: true,
                    target: {
                        get x() { return config.world.objects.planets[7].initialPosition.x },
                        get y() { return config.world.objects.planets[7].initialPosition.y + 10 },
                        get z() { return config.world.objects.planets[7].initialPosition.z }
                    },
                    cameraPlacement: {
                        x: 1400,
                        y: 11,
                        z: 1400
                    }
                }
            ]
        }
    }
}

function getPlanetPosition(planet, padding) {
    return ((config.world.objects.sun.diameter / 2) + (planet.diameter / 2)) + (config.world.objects.distance * padding);
}

function getPlanetDiameter(ratioToSun) {
    return (config.world.objects.sun.diameter / ratioToSun) * config.world.planetScaleModifier
}

export default config;