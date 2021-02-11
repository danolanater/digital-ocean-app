function WinningTicketContainer(props) {
    return (
        <div className="winner__item-container">
            <h3 className="winner__item-header">{props.title}</h3>
            <div className="winner__item-tickets">
                {props.tickets.length > 0 ? 
                props.tickets.map(ticket => <p className="ticket" key={ticket}>{ticket}</p>) : 
                <p className="winner__none" key={props.title}>None This Week :(</p>}
            </div>
        </div>
    )
}

export default WinningTicketContainer