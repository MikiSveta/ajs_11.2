import Person from './person';
import Team from './team';

const person1 = new Person('Лучник', 'Bowmen', 50, 1, 40, 10);
const person2 = new Person('Маг', 'Magician', 30, 2, 35, 50);
const person3 = new Person('Демон', 'Daemon', 20, 1, 20, 30);

const myTeam = new Team(person1, person2, person3);

for (const p of myTeam) {
  console.log(p);
}
