const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&page=1`;

exports.getAuthorization = () => {
    if (this.access_token !== null) {
        return this.access_token
    }

    return fetch(
        url,
        { method: 'POST'}
    ) .then(response => {
            console.log(response.json());
            const token = response.json().access_token
            this.access_token = token
        }
    ) .catch(err => {
            console.error(err);
        }
    );
}