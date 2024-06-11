import { useMemo } from 'react';
import { IRent } from '../types/Rent';

const useMySort = (initialList: IRent[], sortOrder: string) => {
  const sortedList = useMemo(() => {
    const sortedArray = [...initialList];
    if (sortOrder === 'asc') {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      sortedArray.sort((a, b) => b.price - a.price);
    }
    return sortedArray;
  }, [sortOrder, initialList])

  return sortedList;
};

export default useMySort;
