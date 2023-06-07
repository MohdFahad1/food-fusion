import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { storage } from "redux-persist";

const persistConfig = {
    key:"food-shop",
    storage,
    whitelist:['cart']
}

const appReducer = combineReducers({
    cart:cartReducer,
})

export default persistReducer(persistConfig, appReducer);