class Team {
  constructor({ city, name }) {
    this.city = city;
    this.name = name;
  }

  get teamName() {
    return `${this.city} ${this.name}`;
  }
}

export default Team;
