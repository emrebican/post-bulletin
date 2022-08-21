import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    background-color: #424242;
    padding: 1rem 2rem;

    article {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: .5rem 2rem;
    background-color: #424242;
    color: #eee;

        h3 {
            font-size: 1.6rem;
        }
    }

    h2 {
        font-size: 2rem;
        color: #eee;
        margin-bottom: -.2rem;
    }
`;