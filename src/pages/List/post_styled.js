import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 1rem 2rem;

    article {
        width: 50%;
        border: 2px solid #29b6f6;
        border-radius: 5px;
        padding: .8rem 2rem;
        box-shadow: 5px 3px 10px #000;
        background-color: #29b6f6;
        color: #eee;

        h3 {
            font-size: 1.6rem;
            margin-bottom: .8rem;
        }

        p{
            color: #ddd;
        }
    }

    h2 {
        width: 15%  ;
        text-align: center;
        font-size: 2rem;
        color: #eee;
        margin-bottom: 1.2rem;
        border-bottom: 2px solid #29b6f6;
    }
`;