// Fungsi untuk menambahkan angka/oprator ketampilan Kalkulator
function appendValue(value) {
    // ambil elemen imputdengan id 'display' lalu tambahkan nilay yang ditekan kedalamnya 
    document.getElementById("display").value += value;
}

// Fungsi untuk menghapus semua isi tampilan kalkulator
function clearDisplay() {
    // mengosongkan isi dari imput display
    document.getElementById("display").value ="";
}

// fungsi untuk menghapus 1 karakter di tampilan 
function deletelast() {
    // Ambil isi saat ini, lalu potong satu karakter dari belakang
    const curent = document.getElementById("display").value;
    document.getElementById("display").value = curent.slice(0, -1)
}

// Fungsi untung menghitung hasil ekspresi matematika
function calculate() {
    try {
        // Evaluasi string matematika dan tampilan hasilnya di imput display
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }   catch (error)  {
        // jika terjadi error (seperti sintaks ketik), tampilan pesan error
        document.getElementById("display").value = "error";
    }
}