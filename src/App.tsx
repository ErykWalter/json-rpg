import { useState } from 'react'
import './App.css'
import ActionCard from './components/ActionCard'
import EndCard from './components/EndingCard'
import data from './data.ts'

function App() {
    const [actionId, setActionId] = useState<number>(0);

    const currentAction = data.find((action) => action.id === actionId);
    if (!currentAction) {
        return (
            <EndCard onRestart={() => setActionId(0)} />
        )
    }
  return (
    <>
        <ActionCard action={currentAction} onNextClick={(id: number) => setActionId(id)} />
    </>
  )
}

export default App
