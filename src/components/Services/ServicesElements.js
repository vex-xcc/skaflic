import styled from "styled-components";



export const ServicesContainer=styled.div`
    height:fit-content ;
    flex-direction: column;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:${({lightBg})=>(lightBg ? '#f9f9f9' : '#282c34')};
    z-index:1;
    position: relative;
    @media screen and (max-width:768px){
        height: fit-content;
    }
`;

export const ServicesWrapper=styled.div`
    /* max-width:1000px;
    margin:0 auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr; */
  display: grid;
  width: 100%;
  grid-template-columns: 50% 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;
    margin-bottom: 20px;
    @media screen and (max-width:1000px){
        /* grid-template-columns:1fr 1fr; */
    }
    @media screen and (max-width:299px){
        padding: 0 11px;
    }
`;

export const ServicesCard=styled.div`
    background:${({darkBg})=>(darkBg ? '#f9f9f9' : '#282c34')};
    height: 300px;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    border-radius:10px ;
    max-height: 366px;
    padding:17px;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition:all 0.2s ease-in-out;

    &:hover{
        transform:scale(1.02);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
    @media screen and (max-width:299px){
        padding: 0;
    }
`;

export const ServicesIcon=styled.img`
    height: 99px;
    width: 100px;
    margin-bottom:10px;
`;

export const ServicesH1=styled.h1`
    font-size:2.5rem;
    color:#fff;
    margin-bottom:64px;
    color:${({darkTitle})=>(darkTitle ? '#f9f9f9' : '#282c34')};
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`;

export const ServicesH2=styled.h2`
    font-size:1rem;
    margin-bottom:10px;
    margin-top:19px;
    text-align: center;
    color:${({darkHed})=>(darkHed ? '#f9f9f9' : '#282c34')};
`;

export const ServicesP=styled.p`
    font-size:1rem;
    text-align:center;
    color:${({darkText})=>(darkText ? '#f9f9f9' : '#282c34')};
`;


