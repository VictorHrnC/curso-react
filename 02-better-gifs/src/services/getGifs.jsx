const apiKey = "A1f7VGMt6nEIpuu415o3vqTwCeQ0qHqp";
const keyword = "trending";
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=50&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

export default function getGifs() {
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.fixed_height;
          return { title, id, url };
        });
        return gifs;
      }
    });
}
