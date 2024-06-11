import { useEffect, useState } from 'react'
import './App.css'
import CreateRent from './components/CreateRent'
import RentList from './components/RentList'
import { rentList } from './constants/rentList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/localStorage'
import CurrentRent from './components/CurrentRent'
import useMySort from './hooks/useMySort'
import { IRent } from './types/Rent'

function App() {
  const [list, setList] = useState(loadFromLocalStorage('rentList') || rentList)
  const [currentRent, setCurrentRent] = useState<IRent | null>(null)
  const [sortOrder, setSortOrder] = useState<string>('')

  const sortedList = useMySort(list, sortOrder)

  const resetCurrentRent = () => {
    setCurrentRent(null);
  }

  useEffect(() => {
    saveToLocalStorage('rentList', list)
  }, [list])

  return (
    <div className="home">
      <h1>Apartments Marketplace</h1>
      <CreateRent setRentList={setList} />
      <CurrentRent
        currentRent={currentRent}
        resetCurrentRent={resetCurrentRent}
      />
      <RentList
        rentList={sortedList}
        setRentList={setList}
        setCurrentRent={setCurrentRent}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  )
}

export default App
