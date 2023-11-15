// apiService.ts

import AxiosIntance from "../AxiosIntance";

export const addToFavoritesAPI = async (mangaId: string,userId : string) => {
    return await AxiosIntance().post(`/api/favorite/add-favorite`, {manga:mangaId,user:userId});
  };
  export const removeFromFavoritesAPI = async (favoriteId: string) => {
    return await AxiosIntance().post(`/api/favorite/${favoriteId}/delete-favorite`);
  };

  export const fetchFavoritesAPI  = async (userId : string) => {
    return await AxiosIntance().get(`/api/favorite/get-all-favorite/${userId}`);
  };