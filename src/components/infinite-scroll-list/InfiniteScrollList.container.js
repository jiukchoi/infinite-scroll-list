import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScrollListUI from './InfiniteScrollList.presenter';

const InfiniteScrollList = () => {
  const [item, setItem] = useState([]);

  const getItem = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10');

    setItem(data);
  };

  useEffect(() => {
    getItem();
  }, []);

  return <InfiniteScrollListUI item={item} />;
};

export default InfiniteScrollList;
