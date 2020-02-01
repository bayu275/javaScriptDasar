//deklarasikan kursi penumpang
var penumpang = [];
// function ekspresi tambah penumpang
var masukanPenumpang = function (namaPenumpang,penumpang) {
    // jika angkot tidak ada penumpang
    if (penumpang.length == 0) {
        // masukan penumpang ke kursi pertama
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang; 
    }
    // jika angkot sudah ada penumpang
    else{
        // cek seluruh kursi angkot
        for(var i=0;i<penumpang.length;i++){
            // jika ada kursi angkot yang kosong
            if(penumpang[i] == undefined){
                // masukan penumpang ke kursi yang kosong
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            // penumpang dengan nama yang sama tidak boleh naik angkot
            }else if (penumpang[i] == namaPenumpang) {
                // kembalikan isi array & keluar dari function
                return namaPenumpang+' sudah di dalam angkot';
            // jika  tidak ada kursi yang kosong
            }else if(i == penumpang.length -1){
                // masukan penumpang ke kursi selanjutnya 
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}
// function penumpang turun
var turunkanPenumpang = function (namaPenumpang,penumpang) {
    // jika angkot masih kosong
    if (penumpang.length == 0) {
        // kembalikan isi arraynya & keluar dari function & tampilkan alasannya
        return 'Angkot kosong tidak ada penumpang';
    // jika angkot ada penumpang, dan penumpang ingin turun    
    }else{
        // cek seluruh penumpang
        for(var i=0;i<penumpang.length;i++){
            // penumpang mana yang mau turun
            if (penumpang[i] == namaPenumpang) {
                // berhentikan angkot dan turunkan penumpang
                penumpang[i] = undefined;
                // kembalikan isi arraynya & keluar dari function
                return penumpang;
            // jika penumpang yang mau di turunkan tidak ada di dalam angkot
            }else if (i == penumpang.length -1) {
                return penumpang = namaPenumpang+' tidak ada didalam angkot';   
            }
        }
    }
}
//tampilkan ke console
console.log(penumpang);