class Person {
     name: string;
     constructor(name: string) {
          this.name = name;
     }

     updateStatus(index: number) {
          this.goToHelp(index)
     }

     goToHelp(index: number) {
          console.log(`${this.name} :::::::::PING: ${index}`)
     }
}

class Subject {
     persons: Person[] = [];
     constructors() {
          this.persons = []
     }

     addPersons(person: Person) {
          this.persons.push(person)
     }

     notify(index: number) {
          this.persons.forEach(person => person.updateStatus(index))
     }
}


export const subject = new Subject()
// New person
const personOne = new Person("Jax")
const personTwo = new Person("Lilia")

// Add persons to Subject
subject.addPersons(personOne)
subject.addPersons(personTwo)


