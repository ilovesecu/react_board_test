import SecretBoard from "../../components/board/SecretBoard";
import Pagination from "../../components/pagination/Pagination";
import ButtonKit from "../../components/controller/ButtonKit";
import Container from "@mui/material/Container";
import React from "react";

function BoardListContainer(){
    return(
        <Container maxWidth="md">
            <SecretBoard />
            <Pagination/>
            <ButtonKit/>
        </Container>
    )
}

export default BoardListContainer;

