import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterContainer=styled.footer`
   background-color: #282c34;
position: fixed;
  bottom: 0;
  width: 100%;
  height: 350px;  
  padding-left: 50px;
  @media screen and (max-width:1024px){
  height: 862px;
  padding-left: 0px;
  }
`;

export const FooterWrap=styled.div`
    padding:48px 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1100px;
    margin:0 auto;
`;

export const FooterLinksContainer=styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:1024px){
        padding-top:32px;
    }
`;

export const FooterLinksWrapper=styled.div`
    display: flex;
    

    @media screen and (max-width:1024px){
        flex-direction:column;
    }
`;

export const FooterLinkItems=styled.div`
    display: flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px ;
    text-align:left;
    width:160px;
    box-sizing:border-box;
    color: #fff;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width: 100%;
    }
`;

export const FooterLinkTitle=styled.h1`
    font-size:14px;
    margin-bottom:16px;
`;

export const FooterLink=styled(Link)`
    color: #fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;

    &:hover {
        color: #4ec7cc;
        transition:0.3s ease-out;
    }
`;
export const FooterLinkSocial=styled.a`
    color: #fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;

    &:hover {
        color: #4ec7cc;
        transition:0.3s ease-out;
    }
`;

export const SocialMedia=styled.section`
    max-width:1000px;
    width:100%;
`;

export const SocialMediaWrap=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin: -8% auto 0px -19%;


    @media screen and (max-width:1024px){
        flex-direction:column;
    } 
`;

export const SocialLogo =styled(Link)`
    justify-self:start;
    cursor:pointer;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight:bold;
    &:hover {
        color: #4ec7cc;
        transition:0.3s ease-out;
    }
`;

export const WebsiteRights=styled.small`
    color:#fff;
    margin-bottom:16px;  
`;

export const SocialIcons=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width: 240px;
`;

export const SocialIconLink=styled.a`
    color: #fff;
    font-size:24px;
    &:hover {
        color: #4ec7cc;
        transition:0.3s ease-out;
    };
`;
export const LogoFooter = styled.img`
width: 100%;
  height: 24vh;
  margin: 0px 5px -1px 15px;
  text-decoration: none;
  @media screen and (max-width: 768px) {
  width: 75vw;
  height: 34vh;
}
@media screen and (max-width: 540px) {
    width: 70vw;
    height: 27vh;
    margin-left: 16%;
}
`