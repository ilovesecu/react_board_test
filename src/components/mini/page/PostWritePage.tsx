import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import TextArea from "../ui/TextInput";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child){
      margin-bottom: 16px;
    }
  }
`;

function PostWritePage(props:any){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');

    return (
        <Wrapper>
            <Container>
                <TextInput height={20} value={title} onChange={(e:any)=>{
                    setTitle(e.target.value);
                }}/>

                <TextInput height={480} value={content} onChange={(e:any)=>{
                    setContent(e.target.value);
                }}
                />

                <Button title={"글 작성하기"} onClick={()=>{
                    navigate('/mini');
                }}/>
            </Container>
        </Wrapper>
    )
}

export default PostWritePage;