import './App.css'
import ActionCard from './components/ActionCard'
import data from './data.ts'

function App() {

  return (
    <>
        <ActionCard action={data[0]} onNextClick={(id: number) => console.log(id) } />
    </>
  )
}

export default App
