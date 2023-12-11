import { Decision } from '../types';

interface DecisionMenuProps {
    decisions: Decision[],
    onNextClick: (id: number) => void,
}

function DecisionMenu({ decisions, onNextClick }: DecisionMenuProps) {
    const selectRandomDecision = (ids: number[]) => {
        const randomIndex = Math.floor(Math.random() * ids.length);
        return ids[randomIndex];
    }

    const decisionList = decisions.map((decision, index) => (
        <li key={index}>
            <button onClick={() => onNextClick(selectRandomDecision(decision.id))}>
                {decision.prompt}
            </button>
        </li>
    ));

    return (
        <ul>
            {decisionList}
        </ul>
    );
}

export default DecisionMenu;
