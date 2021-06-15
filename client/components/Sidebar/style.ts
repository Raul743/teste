import Styled from "styled-components"

export const Aside = Styled.aside`
    padding: 10px 0 30px 0;
    background: #2a3042;
    width: 20vw;
    z-index: 1001;
    bottom: 0;
    margin-top: 0;
    top: 70px;
    -webkit-box-shadow: 0 .75rem 1.5rem rgba(18,38,63,.03);
    box-shadow: 0 .75rem 1.5rem rgba(18,38,63,.03);
    height: 100%;
    grid-column: 1;
    position: fixed;

`;

export const Nav = Styled.nav`
    ul li a i {
        display: inline-block;
        min-width: 1.75rem;
        padding-bottom: .125em;
        font-size: 1.25rem;
        line-height: 1.40625rem;
        vertical-align: middle;
        color: #7f8387;
        -webkit-transition: all .4s;
        transition: all .4s;
    }

`;

export const SubMenu = Styled.nav`
    li a {
        padding: .4rem 1.5rem .4rem 3.5rem;
        font-size: 13px;
        color: #545a6d;
    }
`;
