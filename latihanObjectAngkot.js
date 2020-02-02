// deklarasikan Constructor Angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
    // tambbahkan method penumpang naik
    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            return penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return penumpang;
                } else if (this.penumpang[i] == namaPenumpang) {
                    return namaPenumpang + ' sudah ada didalam angkot';
                } else if (i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return penumpang;
                }
            }
        }
    }
    // tambahkan penumpang turun
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            return 'Penumpang masih kosong';
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    return namaPenumpang + ' tidak ada didalam angkot';
                }
            }
        }
    }
}
// deklarasikan berapa angkot yang mau di buat
var angkot1 = new Angkot('Bayu Dirgantara', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0);