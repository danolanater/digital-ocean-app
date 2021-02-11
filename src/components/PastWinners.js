import {OldWinners} from '../components/DataProcessor'
import WinningTicketContainer from './WinningTicketContainer'

function PastWinners() {
    const winnersArray = Object.keys(OldWinners).map(key => OldWinners[key])
    const winnerKeys = Object.keys(OldWinners)
    const oldWinners = [];

    for(let i = 0; i < winnerKeys.length; i++) {
        oldWinners.push(<WinningTicketContainer title={winnerKeys[i]} tickets={winnersArray[i]}  key={winnersArray[i]} />)
    }

    return (
        <div className="winner-container">
            <h1 className="winner-header">Past Winners</h1>
            <div className="this-week-winning-tickets-container">
                {oldWinners}
            </div>
        </div>
    )
}

export default PastWinners