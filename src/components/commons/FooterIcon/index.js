import styled from 'styled-components';

const FooterIcon = styled.div`
    width: 100%;
    text-align: center;
    padding: 10px;
    a {
        margin-left: 20px;
        &:hover,
        &:focus {
            opacity: .5;
        } 
    }
    img {
        width: 18px;
        height: 18px;
    }
`;

export default FooterIcon;
