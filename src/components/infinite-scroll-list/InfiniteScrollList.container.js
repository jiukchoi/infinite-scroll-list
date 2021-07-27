import axios from 'axios';
import { Component } from 'react';
import InfiniteScrollListUI from './InfiniteScrollList.presenter';

class InfiniteScrollList extends Component {
  state = {
    item: [],
    itemPage: 1,
  };

  getItem = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${this.state.itemPage}&_limit=10`);

    this.setState(prev => ({
      item: [...prev.item, ...data]
    }));
  };

  infiniteScroll = () => {
    if (window.innerHeight + window.scrollY === document.documentElement.scrollHeight) {
      this.setState({
        itemPage: this.state.itemPage + 1,
      });
    };
  };

  componentDidMount() {
    this.getItem();
    window.addEventListener('scroll', this.infiniteScroll);
  };

  componentDidUpdate(_, prevState) {
    if (this.state.itemPage !== prevState.itemPage) {
      this.getItem();
    };
  };

  render() {
    return <InfiniteScrollListUI item={this.state.item} />
  };
};

export default InfiniteScrollList;
