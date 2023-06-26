export const getUsersSelector = (state) => {
    return state.app.users
}

export const getCurrentPageSelector = (state) => {
    return state.app.currentPage
}

export const getPageSizeSelector = (state) => {
    return state.app.pageSize
}

export const getTotalUsersCountSelector = (state) => {
    return state.app.totalUsersCount
}

export const getIsLoadingSelector = (state) => {
    return state.app.isLoading
}

export const getPhotoURL = (state) => {
    return state.app.photoURL
}

export const getToken = (state) => {
    return state.app.token
}
