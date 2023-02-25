import { GlobalStore } from './globalStore';
import {createContext, useContext} from "react";


const store = {
    store: new GlobalStore()
}

const StoreContext = createContext(store)

export const useStore = () => useContext<typeof store>(StoreContext)