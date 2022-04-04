const callApi = async (url, options = {}) => {
    options.headers = {
      "Content-Type": "application/json",
      
      Accept: "application/json",
    };
    const urlString = "https://swapi.dev/api/" + url;
    const response = await fetch(urlString, options);
    const data = await response.json();
    return data;
  };
  /*const api = {
    films: {
      list() {
        return callApi("films/");
      },
      getFilm(id) {
        return callApi(`films/${id}`);
      },      
    },

  };*/

  export default callApi;