import { useQuery } from "react-query"
import { getNewsService } from "./news.service"

export const useNews = () => {
    return useQuery("news", () => {
        return getNewsService();
    })
}