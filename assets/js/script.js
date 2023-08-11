// Memberi nomor
let nomor = document.querySelectorAll(".nomor");
nomor.forEach((e, i) => {
    e.textContent = i + 1;
});

// Cari
let cari = document.getElementById("cari");
let barang = document.querySelectorAll("#barang tr td");
cari.addEventListener("input", function() {
    barang.forEach(e => {
        if(e.parentNode.textContent.toLowerCase().indexOf(cari.value.toLowerCase()) > -1){
            document.querySelector("#tidak-ditemukan").parentNode.style.display = "none";
            e.parentNode.style.display = "";
        } else {
            e.parentNode.style.display = "none";
        }
    });
    if (barang[0].parentNode.parentNode.textContent.toLowerCase().indexOf(cari.value.toLowerCase()) < 0) {
        console.log("ok");
        document.querySelector("#tidak-ditemukan").parentNode.style.display = "";
    }
});