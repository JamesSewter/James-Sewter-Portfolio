app.component('home', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isDropdownOpen: false,
      isOverlayVisible: false,
      factText: 'Loading fact...',
      name: 'James Sewter',
      profilePicture: '../assets/images/professional_picture.png',
      skills: {
        languages: ['JavaScript', 'Python'],
        database: ['MongoDB', 'SQL', 'PSQL'],
        'back-end': ['Node.js', 'Koa.js', 'Express.js'],
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
          name: 'Node.js',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
        },
        {
          name: 'Express.js',
          logo: 'https://images.seeklogo.com/logo-png/33/1/express-js-logo-png_seeklogo-339850.png',
        },
        {
          name: 'Koa.js',
          logo: 'https://images.seeklogo.com/logo-png/36/1/koa-logo-png_seeklogo-362249.png',
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
        'MEng  General Engineering graduate from the University of Sheffield.',
      introTwo:
        'Strong enthusiasm for problem-solving, using engineering principles, and building useful tools.',

      introThree:
        'Developing my programming skills via personal projects - find out more below!',
      introFour:
        'Passionate about data visualisation, optimising server performance, and meeting user requirements.',
      introFive:
        'Away from coding you might find me on a countryside walk, at the gym, or playing snooker!',
      projects: {
        decisions: {
          title: 'Decisions',
          emoji: "🤔",
          summary:
            'Designed and developed a real-time decision-making app that enables users to vote on choices like dinner or film selections before passing the turn to the next participant. Integrated Socket.io for live interactions, ensuring seamless real-time voting. Built a RESTful API with Koa.js and Mongoose, documenting endpoints in Gitbook. Focused on delivering a user-friendly, multiplatform solution (web, Android, iOS) while ensuring high code quality with Jest testing. Worked in an Agile environment, utilising SCRUM, Kanban boards, RATS/spiking, and best practices in version control and team collaboration.',

          screenshots: [
            '../assets/images/decisions-home.png',
            '../assets/images/decisions-decison.png',
          ],
          position: 0,
          github: 'https://github.com/JamesSewter/decisions-api',
          link: 'https://decisions--88bemym06h.expo.app/',
          video:
            'https://www.youtube.com/watch?v=PdEE0mDj6Qo&ab_channel=AlexIzumi',
        },
        news: {
          title: 'NC News',
          emoji: "🗞️",
          summary:
            ' Designed and deployed a mobile-first front-end for a news website, prioritising user experience with smooth navigation using React Router and state management with useState. Integrated API functionality to dynamically fetch and display articles, topics, and user interactions, incorporating error handling and loading states for better user feedback. Developed a robust RESTful API to enable CRUD operations on the content, ensuring reliability through TDD and Supertest. Focused on accessibility and clarity in design, deploying the site on Netlify for public access, providing an intuitive platform for users to stay informed.',
          screenshots: [
            '../assets/images/nc-news-home.png',
            '../assets/images/nc-news-votes.png',
          ],
          position: 0,
          github: 'https://github.com/JamesSewter/nc-news',
          link: 'https://nc-news-js.netlify.app/',
          video: null,
        },
        meoteorites: {
          title: 'Find Meteorites',
          emoji: "☄️",
          summary:
            'Developed a React-based web application that fetches and visualises meteorite landing data from a NASA API. Users can search by year to explore meteorite impact details, including name, mass, coordinates, and an interactive Leaflet.js map for location insights. Implemented a local Node.js backend with caching (Node-Cache) to reduce redundant API calls, optimising performance by storing search results for a week. Utilised Express.js for server-side handling and React state management for dynamic updates, ensuring a smooth user experience.',
          screenshots: [
            '../assets/images/nasa-search.png',
            '../assets/images/nasa-example.png',
          ],
          position: 0,
          github: 'https://github.com/JamesSewter/fe-react-data-visualisation',
          link: 'https://findmeteorites.netlify.app/',
          video: '../assets/videos/nasa-demo.webm',
        },
      },
      linkedIn: 'https://www.linkedin.com/in/james-sewter/',
      gitHub: 'https://github.com/JamesSewter',
      linkedInLogo: '../assets/images/linkedin-logo.png',
      githubLogo: '../assets/images/github-logo.png',
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
    screenshotForwards(project) {
      if (project.position === project.screenshots.length - 1) {
        project.position = 0;
      } else {
        project.position++;
      }
    },
    screenshotBackwards(project) {
      if (project.position === 0) {
        project.position = project.screenshots.length - 1;
      } else {
        project.position--;
      }
    },
    stringToBulletPoints(summary) {
      const regex = /(?<=\.)\s+(?=[A-Z])/g;
      let sentences = summary.split(regex);
      return sentences.map((s) => s.trim());
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown(event) {
      if (
        this.$refs.dropdown &&
        !this.$refs.dropdown.contains(event.target) &&
        !this.$refs.dropdownToggle.contains(event.target)
      ) {
        this.isDropdownOpen = false;
      }
    },
    async fetchFact() {
      try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today");
        const data = await response.json();
        this.factText = data.text;
        this.isOverlayVisible = true;
      } catch (error) {
        this.factText = "Failed to fetch fact.";
        this.isOverlayVisible = true;
      }
    },
    closeOverlay() {
      this.isOverlayVisible = false;
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
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
  template:
    /*html*/
    `<div class="home">

      <nav class="nav-bar">
        <h1 id="name">{{ name }}</h1>
        <ul class="nav-links">
          <li class="link"><a href="#about">About</a></li>
          <li class="link"><a href="#skills">Skills</a></li>

          <li class="dropdown" class="link">
            <a href="#" @click.prevent="toggleDropdown" ref="dropdownToggle">Projects ▾</a>
            <ul class="dropdown-content" v-if="isDropdownOpen" ref="dropdown">
              <li class="project-link" v-for="(project) in projects" :key="project.title">
              <span class="emoji">{{ project.emoji }}</span>
              <a :href="'#' + project.title">{{project.title}}</a></li>
            </ul>
          </li>
          <li class="link"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

    <section id="about">
      <h2>About</h2>
        <div class="about-content">
          <div id="intro-points">
            <p class="intro-point">&#x1F393 &nbsp; {{ introOne }} &nbsp; &#x1F393</p>
            <p class="intro-point">&#x2699 &nbsp; {{ introTwo }} &nbsp; &#x2699</p>
            <p class="intro-point"> &#127947 &nbsp; {{ introThree }} &nbsp; &#127947 </p>
            <p class="intro-point"> 👨🏻‍💻 &nbsp; {{ introFour }} &nbsp; 👨🏻‍💻 </p>
            <p class="intro-point"> 🥾 &nbsp; {{ introFive }} &nbsp; 🥾 </p>
          </div>
          <img :src="profilePicture"  alt="Picture of James" id="profile-picture" >
        </div>
    </section>

    <section id="skills">
      <h2>Skills</h2>
        <div class="skills">
          <div class="logo-container">
            <div v-for="tool in techLogos" :key="tool.name"   class="logo-item" >
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
    </section>


    <section id="projects">
        <h2> Projects </h2>
        <div class="project" v-for="(project) in projects"  :key="project" :id="project.title">
          <h3>{{ project.title }}</h3>
          <div class="project-content">
            <div class="project-summary-box">
              <h4>📖&nbsp;&nbsp;&nbsp;&nbsp;Summary&nbsp;&nbsp;&nbsp;&nbsp;📖</h4>
              <ul id="project-summary">
                <li v-for="(bullet, index) in stringToBulletPoints(project.summary)" :key="index" class="bullet-point">
                {{ bullet }}
                </li>
              </ul>

              <div class="links">
              <ul>
                <li><a :href="project.github" target="_blank">GitHub Repo</a></li>
                <li><a :href="project.link" target="_blank">Hosted Project</a></li>
                <li v-if="project.video">
                <a :href="project.video" target="_blank">Video Demo</a>
                </li>
              </ul>
            </div>

            </div>
              <div class="screenshot-box">
                <h4>🔎&nbsp;&nbsp;&nbsp;&nbsp;Preview&nbsp;&nbsp;&nbsp;&nbsp;🔎</h4>
                <img :src="project.screenshots[project.position]"  alt="Screenshot" class="screenshot">
                <button id="toggle-button" @click="screenshotBackwards(project)">&larr;</button>
                <button id="toggle-button" @click="screenshotForwards(project)">&rarr;</button>
              </div>
          </div>
        </div>
    </section>

    <section id="contact">
    <h2>Contact</h2>
        <div class="contact">
            <ul> 
              <li>
                <a :href="linkedIn" target="_blank">
                  <img :src="linkedInLogo"  alt="LinkedIn Logo" class="contact-logo">
                </a>
                Find me on&nbsp<a :href="linkedIn" target="_blank">LinkedIn</a>
              </li>
              <br>
              <li>
                <a :href="gitHub" target="_blank">
                  <img :src="githubLogo"  alt="GitHub Logo" class="contact-logo">
                </a>
                See more exciting projects on&nbsp<a :href="gitHub" target="_blank">GitHub</a>
              </li>
            </ul>
        </div>
    </section>

    <div class="button-to-fact">
      <button class="button" @click="fetchFact">Fact of the day</button>
    </div>

  <div v-if="isOverlayVisible" class="fact-overlay">
    <div class="fact-content">
    <h2>Fact of the day</h2>
      <p>{{ factText }}</p>
      <button @click="closeOverlay" class="close-overlay">Close</button>
    </div>
  </div>
    </div>`,
});
