var ulang = true;
//permainan akan selesai bila player sudah tidak mau bermain lagi.
while ( ulang ) {
    //menangkap pilihan player
    var p = prompt('pilih: gajah , semut ,orang');
    //menangkap pilihan komputer bilangan random
    var comp = Math.random();
    if(comp<0.33){
        comp='semut';
    }else if(comp<0.66){
        comp='Orang';
    }else{
        comp='gajah';
    }
    //rules
    var hasil='';
    if(p == comp){
        hasil = 'Anda '+p+' comp '+comp+' SERI';
    }else if( p=='orang'){
        hasil= 'Anda '+p+' comp '+comp+' '+'\n'+comp=='semut' ? 'MENANG' : 'KALAH';
    }else if( p=='semut'){
        hasil= 'Anda '+p+' comp '+comp+' '+'\n'+comp=='gajah' ? 'MENANG' : 'KALAH';
    }else if( p=='gajah'){
        hasil= 'Anda '+p+' comp '+comp+' '+'\n'+comp=='Orang' ? 'MENANG' : 'KALAH';
    }else{
        if (p == '') {
            hasil = 'Tidak boleh kosong';   
        }else{
            hasil = 'pilihan anda di luar jangkauan';
        }
    }
    //tampilkan hasilnya
    alert(hasil);
    ulang = confirm('mau main lagi ?');
}
//kata penutup ketika sudah selesai bermain
alert('Terimakasih sudah bermain');