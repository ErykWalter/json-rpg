import { Action } from '../types';
import DecisionMenu from './DecisionMenu';

interface ActionCard {
    action: Action,
    onNextClick: (id: number) => void,
}

function ActionCard({ action, onNextClick }: ActionCard) {
    return (
        <div className="card">
            <h1>{action.name}</h1>
            <p>{action.description}</p>
            <DecisionMenu decisions={action.decision} onNextClick={onNextClick} />
        </div>
    );
}

export default ActionCard;
