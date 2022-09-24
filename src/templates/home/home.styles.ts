import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 100px);

    max-width: 700px;
    margin: 0 auto;

    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3.5rem;
        font-weight: bold;
        text-align: center;
        margin: 0;
    }

    p {
        text-align: center;
        font-size: 1.2rem;
        margin: 25px 10px;
        line-height: 1.8rem;
    }

    & > div {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        align-items: center;
        
        img {
            width: 35px;
            height: 35px;
            margin: 0 5px;
        }
    }

`;
