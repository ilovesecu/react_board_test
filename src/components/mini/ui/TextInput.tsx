import styled from "styled-components";
import {TextareaHTMLAttributes} from "react";

// StyledTextarea 컴포넌트에 전달되는 props 타입 정의
interface StyledTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    height?: number;
}

const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: calc(100% - 32px);
  ${(props:any) =>
          props.height &&
          `height: ${props.height}px`
  }
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

function TextArea(props:any){
    const {value, height, onChange} = props;

    return <StyledTextarea value={value} height={height} onChange={onChange} />;
}
export default TextArea;