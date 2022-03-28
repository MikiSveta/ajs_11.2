export default class Team {
  constructor(...person) {
    this.team = [...person];
  }

  * [Symbol.iterator]() {
    let current = 0;
    const last = this.members.length;
    while (current < last) {
      yield this.members[current];
      current += 1;
    }
  }
}
