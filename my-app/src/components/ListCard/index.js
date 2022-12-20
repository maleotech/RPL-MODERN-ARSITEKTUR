import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../actions/kontakAction";

export default function ListCard() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } =
    useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action getlistkontak
    console.log("1. use effect dijalankan");
    dispatch(getListKontak());
  }, [dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.name} - {kontak.phoneNumber}
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}
