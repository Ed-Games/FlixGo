import config from '../config/index';

const URL_VIDEOS = `${config.URL_TOP}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const resp = await response.json();
        return resp;
      }

      throw new Error('Não foi possível acessar os dados');
    });
}

export default {
  create,
};
