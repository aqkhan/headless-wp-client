import * as api from '../api';

export const fetchCategories = () => {
    return function (dispatch) {
        dispatch({
            type: "FETCHING"
        });
        api.fetchCategories().then(res => {
            dispatch ({
                type: "CATEGORIES_FETCHED",
                payload: res
            });
        });
    };
};

export const fetchCategoryPosts = (id) => {
    return function (dispatch) {
        dispatch({
            type: "FETCHING"
        });
        api.fetchCategoryPosts(id).then(res => {
            dispatch ({
                type: "CATEGORY_POSTS_FETCHED",
                payload: res
            });
        });
    };
};

export const fetchSinglePost = (id) => {
    return function (dispatch) {
        dispatch({
            type: "FETCHING"
        });
        api.fetchSinglePost(id).then(res => {
            dispatch ({
                type: "SINGLE_POST_FETCHED",
                payload: res
            });
        })
    }
};