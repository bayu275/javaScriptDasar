var angkaRandom,player,hasil,ulang;
ulang = true;
while (ulang) {
        //angka random 1 sampai 9
        angkaRandom = Math.floor(Math.random() * 9 ) +1 ;
        //player hanya punya 3x kesempatan
        for(var i=3;i>0;i--){
            //inputan dari player
            player = parseInt(prompt('Tebak Angka 1 - 9'));
            //rules
            if (player==angkaRandom) {
                hasil = alert('Anda benar ! \nangka yang dicari adalah '+angkaRandom);
                break;
            }else{
                if (i == 1) {
                    hasil = 'kesempatan anda sudah habis \nangka yang dicari adalah '+angkaRandom;
                }else{
                    hasil = 'pilihan anda terlalu '+(player>angkaRandom ? 'BESAR':'KECIL \nmasih ada '+(i-1)+' kesempatan lagi');
                }    
            }
        alert(hasil);
    }
    ulang = confirm('mau main lagi ga ?');
}