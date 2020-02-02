//manipulasi array

//1. menambah isi array
//var arr = [];
//arr[0] = "Bayu";
//arr[1] = "Dirgantara";
//arr[2] = "Intan";
//console.log(arr);

//2. menghapus isi array
//var arr = ["Bayu","Dirgantara","Intan"];
//arr[0] = undefined;
//console.log(arr);

//3. menampilkan isi
//var arr = ["Bayu","Dirgantara","Intan"];
//for(var i=0;i<3;i++){
//    console.log(arr[i]);
//    
//}






//metod pada array
//1. join

//console.log(arr.join());

//2. push & pop
//arr.push('Doddy','Fitri');
//arr.pop();

//3. unshift & shift
//arr.unshift('Doddy');
//arr.shift();
//console.log(arr.join(' - '));


//4. splice
//splice(indexAwal, mauDihapusBerapa, elemenbaru1, elemenbaru2,...)
//arr.splice(1, 2,'Doddy','Fitri');
//console.log(arr.join(' - '));

//5. slice
//var arr = ["Bayu","Dirgantara","Intan","Doddy","Fitri"];
////slice(awal,akhir);
//var arr2 = arr.slice(2,4);
//console.log(arr2.join(' - '));

//6. for each
//var angka = [1,2,3,4,5,6,7,8];
//var nama = ["Bayu","Dirgantara","Intan"];
//for(var i=0;i<angka.length;i++){
//    console.log(angka[i]);
//}

//angka.forEach(function () {
//    console.log(e); 
//})
//nama.forEach(function (e,i) {
//    console.log('nama ke-'+(i+1)+' adalah : '+e); 
//})

//7. Map
//var angka1 = [1,5,7,9,3,4,6];
//var angkabaru = angka1.forEach(function (e) {
//    return e * 2;
//})
//console.log(angkabaru.join(' - '));

//8. Sort
//var angka1 = [1,5,10,20,30,7,9,3,4,6];
//angka1.sort(function (a,b) {
//    return a-b;
//});
//console.log(angka1.join(' - '));

// 9 . fileter & find
//var angka = [1,10,20,5,40,60,79,4,3,2,6];
//var angka2 = angka.find(function (x) {
//    return x > 7;
//})
//console.log(angka2);
