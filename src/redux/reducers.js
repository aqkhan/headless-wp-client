
const initialState = {
    fetching: false,
    categories: [],
    posts: [],
    singlePost: {}
};

export default ( state = initialState, action ) => {
    switch (action.type) {
        case "FETCHING":
            return {...state, fetching: true};
        case "CATEGORIES_FETCHED": {
            return {...state, categories: action.payload, fetching: false};
        }
        case "CATEGORY_POSTS_FETCHED": {
            return {...state, posts: action.payload, fetching: false};
        }
        case "SINGLE_POST_FETCHED": {
            return {...state, singlePost: action.payload, fetching: false};
        }
        default: return state;
    }
}