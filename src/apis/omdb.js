export function movieSearch(term) {
    return `https://omdbapi.com/?s=${term}&apikey=${import.meta.env.VITE_API_KEY}`
}

