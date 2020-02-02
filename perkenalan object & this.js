// Perkenalan Object dan This

// membuat Object

// Object literal
var mhs1 = {
    //harus ada key dan  value nya
    //  key     value
    nama: 'Bayu Dirgantara',
    umur: 19,
    ips: [3.00, 2.50, 3, 20],
    alamat: {
        jalan: 'Jl. abc no.123',
        kota: 'Bandung',
        provinsi: 'Jawa Barat'
    }
};

var mhs2 = {
    //harus ada key dan  value nya
    //  key     value
        nama: 'Intan',
    umur: 19,
    ips: [3.00, 2.50, 3, 20],
    alamat: {
        jalan: 'Jl. abc no.123',
        kota: 'Bandung',
        provinsi: 'Jawa Barat'
    }
};

// Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    //buat object kosong
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    // dan jangan lupa kembalikan nilainya
    return mhs;
}
// isi objectnya
var mhs3 = buatObjectMahasiswa('Bayu Dirgantara', '101010', 'bayuusetiawan86@gmail.com', 'Programmer');

// Constructor
//sama seperti bhs lain == class
p
var mhs4 = new Mahasiswa('Erik', '202020', 'erik@yahoo.com', 'Belajar');

// THIS

// cara 1 - function declaration
//function halo() {
//    console.log('halo');
//}
//this.halo();
// this pada function declaration mengembalikan object Global

// cara 2 - Object Literal
//var obj = {};
//obj.halo = function halo() {
//    console.log(this);
//    console.log('halo');
//}
//obj.halo();
// this pada Object literal mengembalikan Object yang bersangkutan

// cara 3 - Constructor
//function Halo() {
//    console.log(this);
//    console.log('halo');
//}
//var obj1 = new Halo();
//var obj2 = new Halo();
// this constructor mengembalikan object yang baru di buat