import styled from "styled-components";

export const Section = styled.section`
    height: 86.6vh;

    h2 {
        text-align: center;
        color: #eee;
        margin-top: 4rem;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 40%;
        background-color: #29b6f6;
        box-shadow: 5px 5px 5px black;
        margin: 2rem auto;
        padding: 3rem 4rem;
        border-radius: 4px;

        label {
            color: #212121;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: .2rem;
        }

        input, textarea {
            height: 2rem;
            margin-bottom: 1rem;
            padding: 0 1rem;
            border: none;
            border-radius: 3px;
            outline: none;
            font-size: 1.2rem;
            color: #212121;
        }

        textarea {
            height: 10rem;
            padding: 1rem;
            font-family: 'Roboto', sans-serif;
        }

        button {
            border: none;
            color: #eee;
            background-color: #212121;
            font-size: 1.1rem;
            font-weight: 600;
            padding: .8rem 0;
            border-radius: 3px;
            cursor: pointer;
            transition: all ease .4s;

            &:hover {
                background-color: #f44336;
            }
            &:active {
                transition: all ease .1s;
                box-shadow: 0px 0px 4px #212121;
            }
        }

        select {
            border: none;
            color: #212121;
            font-size: 1rem;
            height: 1.6rem;
            border-radius: 3px;
            margin-bottom: 1rem;
        }
    }

    .deactive {
        background-color: #aaa;
        &:hover {
            background-color: #aaa;
        }
        &:active {
            box-shadow: none;
        }
    }
`;