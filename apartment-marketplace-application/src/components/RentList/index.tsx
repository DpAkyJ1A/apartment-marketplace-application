import { IRent } from '../../types/Rent';
import RentItem from '../RentItem';
import styles from './index.module.css'

interface IProps {
  rentList: IRent[],
  setRentList: React.Dispatch<React.SetStateAction<IRent[]>>,
  setCurrentRent: React.Dispatch<React.SetStateAction<IRent | null>>,
  sortOrder: string,
  setSortOrder: React.Dispatch<React.SetStateAction<string>>
}

function RentList({
  rentList = [],
  setRentList,
  setCurrentRent,
  sortOrder,
  setSortOrder
}: IProps) {
  const deleteRent = (index: number) => {
    setRentList((prev) => prev.filter((_, i) => i !== index))
  }

  const chooseRent = (index: number) => {
    setCurrentRent(rentList[index])
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSortOrder(value);
  };

  return (
    <div className={styles['rent-list']}>
      <div className={styles['rent-list__header']}>
        <h2>🏡Available Apartments ({rentList.length})</h2>
        <div className={styles['rent-list__sort-wrapper']}>
          <label>Sort by:</label>
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="">No Sort</option>
            <option value="asc">Price: Lowest First</option>
            <option value="desc">Price: Highest First</option>
          </select>
        </div>
      </div>
      <div className={styles['rent-list__content']}>
        {rentList.length
          ? (rentList.map((single: IRent, index: number) => (
              <RentItem
                key={single.title}
                index={index}
                rent={{...single}}
                deleteRent={deleteRent}
                chooseRent={chooseRent}
              />
            ))
          ) : (
            <h2 className={styles['rent-list__shrug']}>¯\_(ツ)_/¯</h2>
          )
      }
      </div>
    </div>
  )
}

export default RentList
