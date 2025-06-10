import { apiProcessor } from "../../services/apiProcessor"

const URL = ""
// creating the wishlist 
export const createWishlistApi = (obj) => {
    return apiProcessor({
        method: "post",
        url: URL,
        isPrivate: true,
        data: obj
    })
}

// getting the user's wishlist 
export const getWishlistApi = () => {
    // it needs the userId and it will be accessible in BE 
    return apiProcessor({
        method: "get",
        url: URL,
        isPrivate: true
    })
}

// deleting the wishlist item 
export const deleteWishlistItemApi = (id, ID) => {
    // here use the id and ID to send through params in the url
    // this is the update in the wishlist in BE that's why put
    return apiProcessor({
        method: "put",
        url: URL,
        isPrivate: true
    })
}

// deleting the whole wishlist
export const deleteWishlistApi = (id) => {
    // here use the id to send through params in the url
    return apiProcessor({
        method: "delete",
        url: URL,
        isPrivate: true
    })
}