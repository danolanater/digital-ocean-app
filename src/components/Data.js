import data from '../data/1-25-21.json'

function Data() {


    const ipadTicketsRender = data.ipad.map(ticket => {
        return <p key={ticket}>{ticket}</p>
    })

    return ipadTicketsRender
}

export default Data