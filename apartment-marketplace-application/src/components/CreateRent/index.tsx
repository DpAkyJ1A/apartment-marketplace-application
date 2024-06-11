import { useState } from 'react'
import styles from './index.module.css'
import Button from '../Button';
import { IRent } from '../../types/Rent';

interface IProps {
  setRentList: React.Dispatch<React.SetStateAction<IRent[]>>
}

function CreateRent({ setRentList }: IProps) {
  const [title, setTitle] = useState('');
  const [days, setDays] = useState<number | null>(null);
  const [beds, setBeds] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDays(+e.target.value);
  }

  const handleBedsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value);
    setBeds(value);
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(+e.target.value);
  }

  const createRent = () => {
    if (!(title && days && beds && price))
      return;
      
    setRentList((prev) => [...prev, { title, days, beds, price }]);
    setTitle('');
    setDays(null);
    setBeds(null);
    setPrice(null);
  }

  return (
    <div className={styles['create-rent']}>
      <h2>🤑Create a new rent</h2>
      <div className={styles['create-rent__content']}>
        <div className={styles['create-rent__input-wrapper']}>
          <label>Title</label>
          <input
            type="text"
            max={50}
            placeholder="Ex. Flat in the city center"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className={styles['create-rent__input-wrapper']}>
          <label>Days</label>
          <input
            type="number"
            min={0}
            max={365}
            placeholder="4"
            value={`${days}`}
            onChange={handleDaysChange}
          />
        </div>
        <div className={styles['create-rent__input-wrapper']}>
          <label>Beds</label>
          <select
            value={beds ?? ""}
            onChange={handleBedsChange}
          >
            <option value={0}>-</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3+</option>
          </select>
        </div>
        <div className={styles['create-rent__input-wrapper']}>
          <label>Rent Price</label>
          <input
            type="number"
            min={0}
            max={1000000}
            placeholder="99.00"
            value={`${price}`}
            onChange={handlePriceChange}
          />
        </div>
        <Button
          title="Submit Rent"
          color="green"
          onClick={createRent}
        />
      </div>
    </div>
  )
}

export default CreateRent
