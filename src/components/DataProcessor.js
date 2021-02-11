import * as data from '../data/tickets.json'

/* Older Winners */
const dataAsArray = Object.keys(data.default).map(date => data.default[date])

/* New Winners */
const NewWinners = dataAsArray.pop()

/* Old Winners put in first index */
dataAsArray.forEach(index => {
    if(index !== dataAsArray[0]) {
        if(index.airpods) {
            dataAsArray[0].airpods = (dataAsArray[0].airpods + "," + index.airpods).split(',')
        }
        if(index.ipad) {
            dataAsArray[0].ipad = (dataAsArray[0].ipad + "," + index.ipad).split(',')
        }
        if(index.applewatch) {
            dataAsArray[0].applewatch = (dataAsArray[0].applewatch + "," + index.applewatch).split(',')
        }
        if(index.homepod) {
            dataAsArray[0].homepod = (dataAsArray[0].homepod + "," + index.homepod).split(',')
        }
    }
})

const OldWinners = dataAsArray[0]

export {NewWinners, OldWinners}