import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
  console.log("2. masuk action");
  return (dispatch) => {
    // loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });
    //get api
    axios({
      method: "GET",
      url: "http://localhost:8000/kontaks",
      timeout: 120000,
    })
      .then((res) => {
        console.log("3. berhasil dapet data: ", res.data);
        //berhasil get api
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        console.log("3. gagal dapat data");
        //gagal get api
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};
