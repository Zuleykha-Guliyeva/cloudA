import { useQuery } from "react-query"
import { getNewsSingleService } from "./news-single.service";
import { API } from "core/configs/api.config";

export const useNewsSingle = (news_id:number) => {
    return useQuery([API.news, news_id], () => {
      return getNewsSingleService(news_id);
    });
}