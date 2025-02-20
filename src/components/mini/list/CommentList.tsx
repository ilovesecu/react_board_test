import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  & > * {
    :not(:last-child){
      margin-bottom: 16px;
    }
  }
`;

function CommentList(props:any){
    const {comments} = props;
    return (
        <Wrapper>
            {
                comments.map((comment:any,index:number)=>{
                    return (
                        <CommentListItem key={comment.id} comment={comment}/>
                    )
                })
            }
        </Wrapper>
    )
}
export default CommentList;