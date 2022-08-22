import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: flex-end;
    height: 3.6rem;
    padding: 0 2rem;
    background-color: #29b6f6;

    a {
        font-size: 1.2rem;
        font-weight: 600;
        text-decoration: none;
        color: #eee;
        padding: 1rem 1.2rem;
        transition: all 0.4s;
    }

    .active {
        background-color: #212121;
        /* font-weight: bold; */
    }
`;