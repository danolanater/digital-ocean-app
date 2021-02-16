
import { NewWinners } from './DataProcessor'
import WinningTicketContainer from './WinningTicketContainer'

function Winners() {
    const winnersArray = Object.keys(NewWinners).map(key => NewWinners[key])
    const winnerKeys = Object.keys(NewWinners)
    const newWinners = [];

    for(let i = 0; i < winnerKeys.length; i++) {
        newWinners.push(<WinningTicketContainer title={winnerKeys[i]} tickets={winnersArray[i]} key={winnersArray[i]} />)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const { value } = event.target.ticketNumber
        const tickets = Array.from(document.getElementsByClassName("ticket"))
        const winningTicket = tickets.find(element => element.innerHTML === value)
        const searchResult = document.getElementById("results")

        if (winningTicket) {
            winningTicket.classList.add("winning-ticket")
            console.log(searchResult)
            searchResult.innerText = "Congratulations, you've got a winning ticket!"

        } else {
            searchResult.innerText = "Sorry, looks like that ticket is no good :("
        }
    }


    return (
        <div className="winner-container" id="winners">
            <h1 className="winner-header">This Weeks Winners</h1>
            <h3 className="winner-date">February 15th, 2021</h3>
            <form onSubmit={handleSubmit}>
                <label>Search Ticket Number: </label>
                <input name="ticketNumber" type="number" placeholder="######" min="100000" max="999999"></input>
                <button>Search</button>
            </form>
            <div className="this-week-winning-tickets-container">
                {newWinners}
            </div>
            <p id="results"></p>
        </div>
    )
}

export default Winners