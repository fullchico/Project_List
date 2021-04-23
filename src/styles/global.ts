import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`

 @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
:root {
    --background: #f0f2f5;
    --red: #E52E40;
    --blue: #5429CC;
    --green: #33CC95;
    --blue-light: #6933FF;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
   
    --shape: #FFFFFF;

    --blue-baby:#4280dd;

    /* nivel  */
    --baixo: #FFB900;
    --semibaixo: #FF9D00;
    --medio:#FF8900;
    --semialto:#FF6700;
    --alto:#FF4100;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media(max-width: 67,5rem){
        font-size: 93.75%;
    }
    @media(max-width: 45rem){
        font-size: 87.5%;
    }
}
body{
    background: var(--background);
    --webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: weight 400;
}
button{
    cursor: pointer;
}

.animeLeft{
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;


@keyframes animeLeft {
  to{
    opacity: 1;
    transform: initial;
  }
}
}


 .animeLeftModal{
  opacity: 0;
  transform: translatey(-20px);
  animation: animeLeft 0.3s forwards;


@keyframes animeLeftModal {
  to{
    opacity: 1;
    transform: initial;
  }
}
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
    /* estilização do modal */
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position:fixed;
        top:0;
        bottom: 0;
        right:0;
        left:0;
        display:flex;
        align-items:center;
        justify-content: center;

        
    }
    .react-modal-content{
        width: 100%;
        max-width:36rem;
        background: var(--background);
        padding:3rem;
        position: relative;
        border-radius:0.24rem;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;
