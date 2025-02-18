app.component('home', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      name: 'James Sewter',
      skills: {
        languages: ['JavaScript', 'Python'],
        database: ['MongoDB', 'SQL', 'PSQL'],
        'back-end': ['Koa.js', 'Node.js', 'Express.js'],
        'front-end': ['React Native', 'React', 'CSS', 'HTML', 'Wave', 'Vue.js'],
        testing: ['TDD', 'Supertest', 'Jest'],
        other: ['Socket.io', 'Expo', 'Render', 'Netlify', 'Supabase'],
      },
      skillIndices: {},
      techLogos: [
        {
          name: 'JavaScript',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
        },
        {
          name: 'Python',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        },
        {
          name: 'MongoDB',
          logo: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp',
        },
        {
          name: 'SQL',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
        },
        {
          name: 'PSQL',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
        },
        {
          name: 'Koa.js',
          logo: 'https://images.seeklogo.com/logo-png/36/1/koa-logo-png_seeklogo-362249.png',
        },
        {
          name: 'Node.js',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        },
        {
          name: 'Express.js',
          logo: 'https://images.seeklogo.com/logo-png/33/1/express-js-logo-png_seeklogo-339850.png',
        },
        {
          name: 'React',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        },
        {
          name: 'CSS',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        },
        {
          name: 'HTML',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        },
        {
          name: 'Vue.js',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
        },
        {
          name: 'Socket.io',
          logo: 'https://itsolution24x7.com/blog/wp-content/uploads/2020/06/socketio.png',
        },
      ],
      introOne:
        /* edit this */
        'MEng  General Engineering graduate from the University of Sheffield.',
      introTwo:
        'Strong enthusiasm for problem-solving, using engineering principles, and building useful tools.',

      introThree:
        'Developing my programming skills via personal projects - find out more below!',
      linkedIn: 'https://www.linkedin.com/in/james-sewter/',
      gitHub: 'https://github.com/JamesSewter',
    };
  },
  methods: {
    startRotatingSkills() {
      setInterval(() => {
        Object.keys(this.skills).forEach((area) => {
          this.skillIndices[area] =
            (this.skillIndices[area] + 1) % this.skills[area].length;
        });
      }, 2000);
    },
    capitaliseFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  computed: {
    currentSkills() {
      let rotatingSkills = {};
      Object.keys(this.skills).forEach((area) => {
        rotatingSkills[area] = this.skills[area][this.skillIndices[area]] || '';
      });
      return rotatingSkills;
    },
  },
  mounted() {
    Object.keys(this.skills).forEach((area) => {
      this.skillIndices[area] = 0;
    });
    this.startRotatingSkills();
  },
  template:
    /*html*/
    `<div class="home">
          <nav class="nav-bar">
            <h1 id="name">{{ name }}</h1>
          </nav>
          
          <div class="intro">
            <h2> Who am I? </h2>
            <p>&#x1F393 {{ introOne }} &#x1F393</p>
            <p>&#x2699 {{ introTwo }} &#x2699</p>
            <p>  &#x1F680 || &#127947{{ introThree }} &#127947 || &#x1F680</p>
          </div>

          <h2>Skills</h2>
            <div class="skills">
              <div class="logo-container">
                <div v-for="tool in techLogos" :key="tool.name" class="logo-item" >
                  <img :src="tool.logo" :alt="tool.name">
                </div>
              </div>

              <div class=skills-container>
                <ul v-for="(value, area) in skills" :key="area">
                  <li >
                    <strong>{{ capitaliseFirstLetter(area) }}:</strong> 
                    <div class="skills-carousel">
                      <p class="skill">{{"&nbsp;" + currentSkills[area] }}</p>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
          
          /* add project info */
          <div class="projects">
            <h2> Projects </h2>
            <h3> Decisions </h3>
            <h3> News Website </h3>
            <h3> Bladeless Wind Turbines! </h3>
            <h3> Simple Strength  </h3>
            <h3> Meteorites  </h3>
          </div>

        <div class="contact">
          <h2>Find out more</h2>
            <ul> 
              <li>
                <a :href="linkedIn" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a :href="gitHub" target="_blank">GitHub</a>
              </li>
            </ul>
        </div>

        <div class="button-to-game">
          <button 
            class="button">
            Click me
          </button>
        </div>
    </div>`,
});
