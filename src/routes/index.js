import { BrowserRouter, Route } from 'react-router-dom';
import InfiniteScrollList from '../components/infinite-scroll-list/InfiniteScrollList.container';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact={true} component={InfiniteScrollList} />
    </BrowserRouter>
  );
};

export default Router;
