import { Wrapper, Container, Item, ItemValue, ItemWrapper, CommentWrapper, CommentValue, Comment } from './InfiniteScrollList.styles';

const InfiniteScrollListUI = ({ item }) => {
  return (
    <Wrapper>
      {item.map((v, i) => (
        <Container key={i}>
          <ItemWrapper>
            <Item>Comment Id</Item>
            <ItemValue>{v.id}</ItemValue>
          </ItemWrapper>
          <ItemWrapper>
            <Item>Email</Item>
            <ItemValue>{v.email}</ItemValue>
          </ItemWrapper>
          <CommentWrapper>
            <Comment>Comment</Comment>
            <CommentValue>{v.body}</CommentValue>
          </CommentWrapper>
        </Container>
      ))}
    </Wrapper>
  );
};

export default InfiniteScrollListUI;
