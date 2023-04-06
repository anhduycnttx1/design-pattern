class Person {
     name: string;
     constructor(name: string) {
          this.name = name;
     }

     updateStatus(event: string) {
          this.goToHelp(event)
     }

     goToHelp(event: string) {
          console.log(`${this.name} - Event: ${event}`)
     }
}

class Subject {
     persons: Person[] = [];
     constructors() {
          this.persons = []
     }

     subscribe(person: Person) {
          this.persons.push(person)
     }

     emit(event: string) {
          this.persons.forEach(person => person.updateStatus(event))
     }
}


export const subject = new Subject()
// New person
const personOne = new Person("Jax")
const personTwo = new Person("Lilia")

// Add persons to Subject
subject.subscribe(personOne)
subject.subscribe(personTwo)


