import event from "events"

export const EventEmitter = new event.EventEmitter()

EventEmitter.addListener("onClick", (event) => {
     console.log(event)
})

EventEmitter.addListener("onNext", (event) => {
     console.log("Demo", event)
})


