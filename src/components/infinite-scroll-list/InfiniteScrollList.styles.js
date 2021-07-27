import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 33px;
`;
export const Container = styled.div`
  width: 500px;
  background-color: #F8F9FA;
  border: 0.5px solid rgba(206, 212, 218, 0.5);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 12px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;
export const Item = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #212529;
  margin-right: 12px;
`;
export const ItemValue = styled.span`
  font-size: 18px;
  color: #212529;
`;
export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Comment = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #212529;
  margin-right: 12px;
  margin-bottom: 2px;
`;
export const CommentValue = styled.span`
  font-size: 18px;
  color: #212529;
`;
