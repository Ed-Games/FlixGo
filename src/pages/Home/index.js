import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain/index';
import Carousel from '../../components/Carousel/index';
import categoriesRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault/index';

// http://localhost:8080/categorias?_embed=videos

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos().then((categoriasComvideos) => {
      setDadosIniciais(categoriasComvideos);
    })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            ignoreFirstVideo
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
