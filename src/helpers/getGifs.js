export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=BXyIbEhQ1GHSVG9evD23DRdN94Q1tjff&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log("Se ha llamado a la funcion getImages");
  return gifs;
};
