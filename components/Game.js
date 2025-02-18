app.component('game', {
    props: {
      premium: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        name: "jeff"
      }
    },
    methods: {
      exampleFromRotating() {
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
    template:
      /*html*/
      `<div class="game">
            <h1>Game</h1>
      </div>`,
  });
  