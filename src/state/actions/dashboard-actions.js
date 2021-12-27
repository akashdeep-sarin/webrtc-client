export const DASHBOARD_SET_USERNAME = 'DASHBOARD_SET_USERNAME';

export const storeUsername = (username) => {
    return {
        type: DASHBOARD_SET_USERNAME,
        payload: {
            username
        },
    }
};