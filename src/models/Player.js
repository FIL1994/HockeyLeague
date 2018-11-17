class Player {
  constructor({ name, position }) {
    this.name = name;
    this.position = position;
  }

  skills = {
    offense: 0,
    defence: 0,
    teamwork: 0,
    shooting: 0,
    passing: 0,
    aggression: 0,
    speed: 0,
    strength: 0
  };
}

export default Player;
