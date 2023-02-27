import { createContext, useContext } from 'react'
import { login } from '../api/auth'


const shopContext = createContext()


export const useShop = () => {
    const context = useContext(shopContext)
    return context
}


export const ShopContainer = ({ children }) => {




    const loginRequest = async (data) => {
        const res = await login(data)
    }



    return <shopContext.Provider value={{loginRequest}}>
        {children}
    </shopContext.Provider>
}