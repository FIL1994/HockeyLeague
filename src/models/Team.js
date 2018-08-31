class Team {
  constructor({ city, name, abbreviation }) {
    this.city = city;
    this.name = name;
    this.abbreviation = abbreviation;
  }

  get teamName() {
    return `${this.city} ${this.name}`;
  }
}

export default Team;
