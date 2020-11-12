export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVOURITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
    return async (dispatch: (data: { type: string; payload: any; }) => void) => {
        const result = await fetch(
            'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4b565d92a7b4d36a30a99cf4a2f70d2'
        );

        const resultData = await result.json();

        dispatch({
            type: FETCH_ARTICLES,
            payload: resultData
        });
    }
}

export const toggleFavorites = (url: string) => {
    return {
        type: TOGGLE_FAVOURITES,
        payload: url
    }
}