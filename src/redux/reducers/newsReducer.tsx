import { FETCH_ARTICLES, TOGGLE_FAVOURITES } from "../actions/newsAction";
import { Article } from "../../interfaces/Article";

const initialState = {
    articles: [],
    favourites: []
}

export default function (state = initialState, action: { type: string; payload: any; }) {
    switch (action.type) {
        case FETCH_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }

        case TOGGLE_FAVOURITES:
            const index = state.favourites.findIndex((article: Article) => article.url === action.payload);

            if (index >= 0) {
                // item in favourites
                const favorites = state.favourites;
                favorites.splice(index, 1);
                return {
                    ...state,
                    favorites
                }
            } else {
                // item not in favourites
                const article: any = state.articles.articles.find(
                    (article: { url: string; }) => article.url === action.payload
                );
                state.favourites.push(article);
                return {
                    ...state
                }
            }
    }
    return state;
}