import { useQuery } from "react-query"
import { getProductsService } from "./products.service"

export const useProducts = () => {
    return useQuery('products', () => {
        return getProductsService();
    })
}