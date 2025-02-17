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
      intro:
        /* edit this */
        'I am a General Engineering MEng graduate from the University of Sheffield, with a strong enthusiasm for problem-solving and using engineering principles. Driven by curiosity and a desire to understand how writing logic can play a powerful role in addressing today’s challenges, I chose to further develop my skills through Northcoders’ JavaScript bootcamp. Look through my projects below!',
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
        <div class="basic-info">
          <h1>{{ name }}</h1>

          <h2>Skills</h2>
          <div class="logo-container">
          <div v-for="tool in techLogos" :key="tool.name" class="logo-item" >
          <img :src="tool.logo" :alt="tool.name">
          </div>
          </div>
          
          <ul>
          <li v-for="(value, area) in skills" :key="area">
            {{ capitaliseFirstLetter(area) }}: <div class="skills-carousel">
            <p class="skill">{{ currentSkills[area] }}</p>
            </div>
          </li>
          </ul>

          <h2> Who am I? </h2>
          <p>{{ intro }}</p>
          <h2> Projects </h2>
          <h3> Decisions </h3>
          <h3> News Website </h3>
          <h3> Bladeless Wind Turbines! </h3>
          <h3> Simple Strength  </h3>
          <h3> Meteorites  </h3>

          <h2>Explore more:</h2>
          <ul> <li><a :href="linkedIn" target="_blank">LinkedIn</a> </li>
          <li> <a :href="gitHub" target="_blank">GitHub</a> </li></ul>
          <button 
            class="button">
            Click me
          </button>
        </div>
    </div>`,
});
