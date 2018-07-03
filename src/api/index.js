import { apiGet } from './utils';

export const fetchCategories = () => {
    return apiGet('categories');
};

export const fetchCategoryPosts = (id) => {
    return apiGet(`category/${id}`);
};

export const fetchSinglePost = (id) => {
    return apiGet(`post/${id}`);
};
