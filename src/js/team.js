export default class Team {
  constructor(...person) {
    this.team = [...person];
  }

  [Symbol.iterator]() {
    const { team } = this;
    let current = 0;
    const last = team.length;
    return {
      next() {
        if (current < last) {
          const result = {
            done: false, value: team[current],
          };
          current += 1;
          return result;
        }
        return { done: true };
      },
    };
  }
}
