import config from '../config/index';

const URL_CATEGORIES = `${config.URL_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();
        return resp;
      }

      throw new Error('Não foi possível acessar os dados');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();
        return resp;
      }

      throw new Error('Não foi possível acessar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
