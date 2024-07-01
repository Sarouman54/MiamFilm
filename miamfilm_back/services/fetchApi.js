exports.apiGetVideoByTitle = async (queryParameters) => {

    const url_base = "https://api.themoviedb.org/3/search/movie?api_key=";

    const response = await fetch(url_base + process.env.API_KEY + queryParameters);
    const data = await response.json();

    return data;
}
exports.apiGetDetailByVideo = async (idVideo, queryParameters) => {
    
    const url_base = "https://api.themoviedb.org/3/movie/";
    const url_base_2 = "?api_key="

    const response = await fetch(url_base + idVideo + url_base_2 + process.env.API_KEY + queryParameters);
    const data = await response.json();

    return data;
}
exports.apiGetCreditByVideo = async (idVideo, queryParameters) => {

    const url_base = "https://api.themoviedb.org/3/movie/";
    const url_base_2 = "/credits?api_key=";

    const response = await fetch(url_base + idVideo + url_base_2 + process.env.API_KEY + queryParameters);
    const data = await response.json();

    return data;
}

// URL RÉCUPÉRATION FILM D'APRÈS LE TITRE  : https://api.themoviedb.org/3/search/movie
// URL RÉCUPÉRATION ACTEURS, RÉALISATEUR... : https://api.themoviedb.org/3/movie/{id_video}/credits
// URL RÉCUPÉRATION DÉTAILS FILM : https://api.themoviedb.org/3/movie/{id_video}