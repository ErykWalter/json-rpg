interface EndingCardProps {
    onRestart: () => void;
}

function EndingCard({ onRestart }: EndingCardProps) {
    return (
        <div className="card">
            <h1>Koniec</h1>
            <p>Gratulacje, udało Ci się przejść całą grę!</p>
            <button onClick={onRestart}>Restart</button>
        </div>
    );
}

export default EndingCard;
