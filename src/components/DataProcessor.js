import * as data from '../data/tickets.json'

/* Older Winners */
const dataAsArray = Object.keys(data.default).map(date => data.default[date])

/* New Winners */
const NewWinners = dataAsArray.pop()

/* Old Winners put in first index */
dataAsArray.forEach(index => {
    if(index !== dataAsArray[0]) {
        if(index.AirPods) {
            dataAsArray[0].AirPods = (dataAsArray[0].AirPods + "," + index.AirPods).split(',')
        }
        if(index.iPad) {
            dataAsArray[0].iPad = (dataAsArray[0].iPad + "," + index.iPad).split(',')
        }
        if(index["Apple Watch"]) {
            dataAsArray[0]["Apple Watch"] = (dataAsArray[0]["Apple Watch"] + "," + index["Apple Watch"]).split(',')
        }
        if(index.HomePod) {
            dataAsArray[0].HomePod = (dataAsArray[0].HomePod + "," + index.HomePod).split(',')
        }
        if(index["HomePod mini"]) {
            dataAsArray[0]["HomePod mini"] = (dataAsArray[0]["HomePod mini"] + "," + index["HomePod mini"]).split(',')
            dataAsArray[0]["HomePod mini"].shift()
        }
        if(index.iPhone) {
            dataAsArray[0].iPhone = (dataAsArray[0].iPhone + "," + index.iPhone).split(',')
            dataAsArray[0].iPhone.shift()
        }
    }
})

const OldWinners = dataAsArray[0]

export {NewWinners, OldWinners}