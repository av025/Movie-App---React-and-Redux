export function movieSearch(term) {
    return `https://omdbapi.com/?s=${term}&apikey=${import.meta.env.VITE_API_KEY}`
}

export function movieSearchOnId(movieId) {
    return `https://omdbapi.com/?i=${movieId}&apikey=${import.meta.env.VITE_API_KEY}`
}