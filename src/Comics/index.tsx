import { off } from 'process';
import React, {useCallback, useEffect, useState} from 'react';
import api from '../services/api';


import { Header, Container, CardComics, CardSingle,ButtonMore, Footer } from './styles';


interface ResponseData{
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string,
    extension:string,
  };
  
}

const Comics: React.FC = () => {
  const [comics, setComics] = useState<ResponseData[]>([]);

  useEffect(()  => {
    api
    .get('/comics')
    .then(respostaRequisicao => {
      setComics(respostaRequisicao.data.data.results);  

    })
    .catch(err => console.log(err));
  }, []);

  const handleLoadMore = useCallback(async () => {
    try{
      const offset = comics.length;
      
      const respostaRequisicao = await api.get(`comics`, {
        params: {
          offset,
        },
      });
      setComics([...comics, ...respostaRequisicao.data.data.results]);

    } catch(err){
      console.log(err);
    };
  }, [comics]);
  
  const handleSubmit = () =>{
    alert("Sim");
  }

  return(
    <Container>

      <Header>
        <div className="logo">
            <a href="https://www.marvel.com/" target="blank">
              <img src="https://marvel-apiuse.herokuapp.com/static/media/MarvelLogo1.015fc889.svg"  alt="Logo Marvel"/>
            </a>
        </div>
      </Header>
    
      <CardComics>
        {comics.map(comics =>{
          //console.log(comics);
          return (
            <CardSingle key={comics.id} thumbnail={comics.thumbnail}>
              <ul>
                <li>
                  <div id="imageCardSingle" />
                  <h2>{comics.title}</h2>
                  <p>{comics.description}</p>
                </li>
                </ul>
            </CardSingle>
          )
        })}
      </CardComics>
      <ButtonMore onClick={handleLoadMore}>
         Load More
      </ButtonMore>
      <Footer>
        <div className="blockSocials">
          <span>
            <a href="https://github.com/VidalJunior05" target="blank">
              <i className="fab fa-github"></i>
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/j%C3%BAnior-vidal-529596113/" target="blank">
              <i className="fab fa-linkedin"></i>
            </a>
            </span>
          <span>
            <a href="https://www.instagram.com/junior_vidal_71/" target="blank">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
          <div>
          <p><i className="far fa-copyright"></i>Desenvolvido por VidalJúnior</p>
          </div>
        </div>
      </Footer>
    </Container>
    
  );
};

export default Comics;