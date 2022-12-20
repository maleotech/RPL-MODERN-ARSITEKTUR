// Synchronus

// const getUserSync = (id) => {
//   const nama = id === 1 ? "baihaqi" : "saputra";
//   return { id, nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = "Halle world";
// console.log(halo);

// Asynchronus

// const getUser = (id, callback) => {
//   const time = id === 1 ? 3000 : 2000;
//   setTimeout(() => {
//     const nama = id === 1 ? "baihaqi" : "saputra";
//     callback({ id, nama });
//   }, 1000);
// };

// const userOne = getUser(1, (hasil) => {
//     console.log(hasil);
// })

// const userTwo = getUser(2, (hasil) => {
//     console.log(hasil);
// })

// const halo = "Hello world";
// console.log(halo);

// console.log('hai')

function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "saputra",
  umur: 20,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, berumur ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = {
  cetakNama,
  PI,
  mahasiswa,
  Orang,
};
