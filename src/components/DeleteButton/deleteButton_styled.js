import styled from "styled-components";

export const Button = styled.button`
    position: absolute;
    top: .6rem;
    right: 1.2rem;
    cursor: pointer;
    border: none;
    color: #eee;
    background-color: transparent;
    font-size: 1.4rem;
    transition: all ease .1s;

    &:hover {
        transform: scale(1.2);
    }
`;