
// URL RÉCUPÉRATION FILM D'APRÈS LE TITRE  : https://api.themoviedb.org/3/search/movie
// URL RÉCUPÉRATION ACTEURS, RÉALISATEUR... : https://api.themoviedb.org/3/movie/{idMovie}/credits
// URL RÉCUPÉRATION DÉTAILS FILM : https://api.themoviedb.org/3/movie/{idMovie}

exports.apiGetMovieByTitle = async (queryParameters) => {

    try {
        const url_base = "https://api.themoviedb.org/3/search/movie?api_key=";

        const response = await fetch(url_base + process.env.API_KEY + queryParameters);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error to get movie by title from api');
    }
    
}

exports.apiGetSerieByTitle = async (queryParameters) => {

    try {
        const url_base = "https://api.themoviedb.org/3/search/tv?api_key=";

        const response = await fetch(url_base + process.env.API_KEY + queryParameters);
        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error to get serie by title from api');
    }
    
}

exports.apiGetDetailByMovie = async (idMovie, queryParameters) => {
    
    try {
        const url_base = "https://api.themoviedb.org/3/movie/";
        const url_base_2 = "?api_key="
    
        const response = await fetch(url_base + idMovie + url_base_2 + process.env.API_KEY + queryParameters);
        const data = await response.json();
    
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error to get detail by movie from api');
    }

}

exports.apiGetCreditByMovie = async (idMovie, queryParameters) => {

    try {
        const url_base = "https://api.themoviedb.org/3/movie/";
        const url_base_2 = "/credits?api_key=";
    
        const response = await fetch(url_base + idMovie + url_base_2 + process.env.API_KEY + queryParameters);
        const data = await response.json();
    
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error to get credit by movie from api');
    }

}