import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params: any) => {
    const url = '/page';
    return axiosClient.get(url, { params });
  },

  // get: (id: any) => {
  //   const url = `/products/${id}`;
  //   return axiosClient.get(url);
  // },
  // add:(id:any) =>{
  //   axiosClient.post(`${id}`, {
  //     firstName: 'Finn',
  //     lastName: 'Williams'
  //   });
  // }
}

export default productApi;