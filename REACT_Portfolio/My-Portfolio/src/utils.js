  // Its is Taking Relative Path Which we passto it.It's Taking the Base URL of Our website Appending this Relative Path onto it & Then passing us back What ever this URL is And This Will  Basically make it easier for us to Dynamically import image into  our  different components 
 
  export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
  };