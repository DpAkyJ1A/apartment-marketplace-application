import { IRent } from '../../types/Rent';
import Button from '../Button';
import styles from './index.module.css'

interface IProps {
  index: number,
  rent: IRent,
  deleteRent: (index: number) => void,
  chooseRent: (index: number) => void,
}

function RentItem({
  index,
  rent,
  deleteRent,
  chooseRent
}: IProps) {
  const {
    title = '',
    days = 0,
    beds = 0,
    price = 0
  } = rent || {};

  return (
    <div className={styles['rent-item']}>
      <p>
        {title} / {beds} bed / {days} day(s) / ${price}
      </p>
      <div className={styles['rent-item__buttons']}>
        <Button
          title="Rent"
          color="blue"
          onClick={() => chooseRent(index)}
        />
        <Button
          title="Delete"
          color="red"
          onClick={() => deleteRent(index)}
        />
      </div>
    </div>
  )
}

export default RentItem
