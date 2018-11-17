class Team {
  constructor({ city, name, abbreviation }) {
    this.city = city;
    this.name = name;
    this.abbreviation = abbreviation;
  }

  get teamName() {
    return `${this.city} ${this.name}`;
  }

  points = {
    wins: 0,
    losses: 0,
    ot: 0, //overtime losses
    sf: 0, //shots for
    sa: 0, //shots against
    gf: 0, //goals for
    ga: 0, //goals against
    pim: 0, //penalty minutes
    so: 0 //shut-outs
  };
}

export default Team;
