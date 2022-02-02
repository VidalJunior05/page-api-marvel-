import  styled from 'styled-components';

interface ThumbnailData{
    thumbnail: {
        path: string,
        extension:string,
    };
}
export const Header = styled.div`
    background-color: #202020;
    width:100%;
    display:flex;
    justify-content: center;
    padding: 20px 0;
    color:#f8fdff;

    .logo{
        height:40px;
        margin: 0px 50px;
    }
    .logo img {
        height:100%;
    }
    
`;
export const Container = styled.main`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    height:100%;
`;

export const CardComics = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const imageCardURL = (props: ThumbnailData) =>`
    ${props.thumbnail.path}.${props.thumbnail.extension}
`;

export const CardSingle = styled.div`
    background-color: #f1f1f1;
    height: 500px;
    width:300px;
    margin: 30px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);

    h2, p{
        padding: 5px;
        text-align: center;
    }
    h2{
        font-size:20px;
    }
    p{
        font-size:15px;
    }
    div#imageCardSingle {
        height:400px;
        width:100%;
        background: url(${imageCardURL}) no-repeat center;
        background-size: cover;
        transition: linear 1s;
    }
    &:hover{
        div#imageCardSingle{
            height:100px;
        }
    }
`;
export const ButtonMore = styled.div`
    background-color:#e62429;
    height: 40px;
    color:white;
    line-height: 40px;
    padding: 0 15px;
    margin:20px auto;
    cursor:pointer;
    border-radius: 5px;
    transition: all 0.4s;
    
    &:hover{
        background-color: #bd0005;
    }
    
`;
export const Footer = styled.div`
    background-color: #202020;
    width:100%;
    display:flex;
    justify-content: center;
    padding: 20px 0;
    color:#f8fdff;
    flex-direction: column;
    
    .blockSocials{
        margin:0 auto;
        text-align: center;
    }
    .blockSocials span{
        margin:0px 10px;
    }
    .blockSocials i {
        font-size: 40px;
        margin-bottom: 10px;
        transition: all .3s;
        cursor:pointer;
    }
    .blockSocials a {
        color:#f8fdff;
    }
    .blockSocials i:hover{
        transform: scale(1.1);
    }
    .fa-copyright{
        font-size:15px!important;
        margin-right: 5px;
        cursor: inherit !important;
    }
`;

export const ButtonAdd = styled.div`
    background-color: red;
    position: relative;
    width:30px;
    height:30px;
    font-size:25px;
    margin-top: -50px;
    left:268px
    
`;

