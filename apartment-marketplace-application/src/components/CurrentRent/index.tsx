import { IRent } from '../../types/Rent';
import Button from '../Button';
import styles from './index.module.css'

interface IProps {
  currentRent: IRent | null,
  resetCurrentRent: () => void
}

function CurrentRent({ 
  currentRent,
  resetCurrentRent
}: IProps) {
  const {
    title = '',
    beds = 0,
    days = 0,
    price = 0
  } = currentRent || {};

  return (
    <div className={styles['current-rent']}>
      <h2>🤩Your Current Rent</h2>
      <div className={styles['current-rent__content']}>
        {currentRent !== null
          ? (
            <>
              <p>
                {title} / {beds} bed / {days} day(s) / ${price}
              </p>
              <Button
                title="Cancel rent"
                color="red"
                onClick={resetCurrentRent}
              />
            </>
          ) : (
             <p>You have NO rent yet</p> 
          )}
      </div>
    </div>
  )
}

export default CurrentRent
