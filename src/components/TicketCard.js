import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"
import { Link } from "react-router-dom"

const TicketCard = ({color , ticket}) => {
    return(
        <div className="ticket-card">
            <Link to={`/ticket/${ticket.dacumentId}`} id="link">
                <div className="ticket-colour" style={{backgroundColor: color}}></div>
                <h3>{ticket.title}</h3>
                <AvatarDisplay ticket={ticket}/>
                <StatusDisplay status={ticket.status}/>
                <PriorityDisplay priority={Number(ticket.priority)} />
                <ProgressDisplay progress={Number(ticket.progress)} />
                
            </Link>
            <DeleteBlock documentId={ticket.documentId} />
        </div>
    )
}

export default TicketCard