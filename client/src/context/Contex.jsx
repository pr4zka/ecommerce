import { createContext, useContext } from 'react'
import { register } from '../api/auth'


const shopContext = createContext()


export const useShop = () => {
    const context = useContext(shopContext)
    return context
}


export const ShopContainer = ({ children }) => {




    const registerRequest = async (data) => {
        const res = await register(data)
        console.log(res)
    }



    return <shopContext.Provider value={{registerRequest}}>
        {children}
    </shopContext.Provider>
}