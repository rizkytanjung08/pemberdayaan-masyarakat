<script>
    // 1. DATA MASTER (Hasil mapping dari gambar yang kamu kirim)
    const daftarMahasiswa = [
        { nama: "April Yaman Zai", makan: 114500 },
        { nama: "Afrida Sitanggang", makan: 155500 },
        { nama: "Alfa Safrildo Simanjuntak", makan: 179500 },
        { nama: "Alvais Hanafi Sormin", makan: 127500 },
        { nama: "Aprilda Anantesa Br Bukit", makan: 138000 },
        { nama: "Aurellia Lestari Harefa", makan: 113500 },
        { nama: "Azi Muhammad Akbar Rambe", makan: 23500 },
        { nama: "Berkat Putra Saleh Gulo", makan: 179500 },
        { nama: "Bunga Nurul Lestari", makan: 120500 },
        { nama: "Cherie Stefany Aritonang", makan: 134500 },
        { nama: "Deby Anzely", makan: 40500 },
        { nama: "Dedi Darman Halawa", makan: 149000 },
        { nama: "Djenar Maesa Ayu", makan: 57000 },
        { nama: "Dwi Vatra Aulia", makan: 100000 },
        { nama: "Ezar Aditya Alfariz Nasution", makan: 119500 },
        { nama: "Gabriel Dhava Obrien Sinamo", makan: 147000 },
        { nama: "Glen Zona Agustinus Purba", makan: 182000 },
        { nama: "Glori Yana Br Sitepu", makan: 138000 },
        { nama: "Grisnauli Olyvya Sinaga", makan: 113000 },
        { nama: "Hafizh Hakim Hendrian", makan: 92500 },
        { nama: "Ilham Haramain", makan: 20000 },
        { nama: "Indah Syahputri", makan: 100000 },
        { nama: "Lius Yudika Lafau", makan: 118500 },
        { nama: "Martinus Gulo", makan: 179500 },
        { nama: "Muhammad Fadlin Azima", makan: 50000 },
        { nama: "Mukhlis Halawa", makan: 177000 },
        { nama: "Nico Pratama", makan: 122000 },
        { nama: "Nurazizah Marpaung", makan: 102500 },
        { nama: "Ones Torius Halawa", makan: 145500 },
        { nama: "Pebri Juan Saragih", makan: 134000 },
        { nama: "Pera Anjani Br Perangin angin", makan: 96500 },
        { nama: "Pradita Keysha", makan: 45500 },
        { nama: "Rifka Afriyani Sitanggang", makan: 69500 },
        { nama: "Rizki Pasrah Telaumbanua", makan: 165000 },
        { nama: "Shah Zhahan Arassi Sihombing", makan: 117000 },
        { nama: "Shannia Delofa Sinaga", makan: 119000 },
        { nama: "Sherly Maulidza", makan: 107000 },
        { nama: "Sri Kandi", makan: 78500 },
        { nama: "Sri Muliani", makan: 105000 },
        { nama: "Tony Blayer Simangunsong", makan: 117500 },
        { nama: "William Syah Putra Zamasi", makan: 177000 }
    ];

    const UPAH_PER_HARI = 40000;
    let iuranPerOrang = 0;

    // 2. FUNGSI FORMAT RUPIAH
    function toRp(angka) {
        return "Rp " + new Intl.NumberFormat('id-ID').format(angka);
    }

    // 3. LOGIKA HITUNG KAS KELOMPOK (Dapur, Posko, dll)
    function updateGlobalFinance() {
        const d = parseFloat(document.getElementById('inputDapur').value) || 0;
        const p = parseFloat(document.getElementById('inputPosko').value) || 0;
        const l = parseFloat(document.getElementById('inputLain').value) || 0;
        const r = parseFloat(document.getElementById('inputRugi').value) || 0;

        const totalPengeluaran = d + p + l + r;
        iuranPerOrang = Math.ceil(totalPengeluaran / 41); // Pembagian ke 41 orang

        document.getElementById('totalKas').innerText = toRp(totalPengeluaran);
        document.getElementById('displayIuran').innerText = toRp(iuranPerOrang);
        
        // Simpan ke localstorage agar tidak hilang
        localStorage.setItem('kas_dapur', d);
        localStorage.setItem('kas_posko', p);
        localStorage.setItem('kas_lain', l);
        localStorage.setItem('kas_rugi', r);

        renderPayrollTable();
    }

    // 4. RENDER TABEL PAYROLL
    function renderPayrollTable() {
        const tbody = document.getElementById('payrollTableBody');
        const search = document.getElementById('searchName').value.toLowerCase();
        tbody.innerHTML = "";

        daftarMahasiswa.forEach((mhs, id) => {
            if (mhs.nama.toLowerCase().includes(search)) {
                // Ambil data input dari LocalStorage
                const hari = localStorage.getItem(`h_${id}`) || 0;
                const tambahan = localStorage.getItem(`t_${id}`) || 0;
                const bonus = localStorage.getItem(`b_${id}`) || 0;
                const potPribadi = localStorage.getItem(`pp_${id}`) || 0;

                // Rumus: (Hari+Tambah)*40rb + Makan + Bonus - IuranKelompok - PotPribadi
                const upahTotal = (parseInt(hari) + parseInt(tambahan)) * UPAH_PER_HARI;
                const totalDiterima = upahTotal + mhs.makan + parseInt(bonus) - iuranPerOrang - parseInt(potPribadi);

                tbody.innerHTML += `
                    <tr>
                        <td class="fw-bold">${mhs.nama}</td>
                        <td><input type="number" class="form-control form-control-sm" value="${hari}" onchange="saveEntry(${id}, 'h', this.value)"></td>
                        <td><input type="number" class="form-control form-control-sm" value="${tambahan}" onchange="saveEntry(${id}, 't', this.value)"></td>
                        <td><input type="number" class="form-control form-control-sm" value="${bonus}" onchange="saveEntry(${id}, 'b', this.value)"></td>
                        <td class="text-muted">${toRp(mhs.makan)}</td>
                        <td><input type="number" class="form-control form-control-sm" value="${potPribadi}" onchange="saveEntry(${id}, 'pp', this.value)"></td>
                        <td class="fw-bold text-success">${toRp(totalDiterima)}</td>
                        <td>
                            <button class="btn btn-sm btn-dark" onclick="generateSlip(${id})">Slip</button>
                        </td>
                    </tr>
                `;
            }
        });
    }

    // 5. SIMPAN INPUT KE LOCALSTORAGE
    function saveEntry(id, key, val) {
        localStorage.setItem(`${key}_${id}`, val);
        renderPayrollTable(); // Refresh tabel setelah input
    }

    // 6. GENERATE SLIP GAJI (MODAL)
    function generateSlip(id) {
        const m = daftarMahasiswa[id];
        const h = localStorage.getItem(`h_${id}`) || 0;
        const t = localStorage.getItem(`t_${id}`) || 0;
        const b = localStorage.getItem(`b_${id}`) || 0;
        const pp = localStorage.getItem(`pp_${id}`) || 0;

        const upahPokok = h * UPAH_PER_HARI;
        const upahTambah = t * UPAH_PER_HARI;
        const total = upahPokok + upahTambah + m.makan + parseInt(b) - iuranPerOrang - parseInt(pp);

        const html = `
            <div class="p-2">
                <p class="mb-1"><strong>Nama:</strong> ${m.nama}</p>
                <hr>
                <div class="d-flex justify-content-between"><span>Upah (${h} hari x 40rb)</span> <span>${toRp(upahPokok)}</span></div>
                <div class="d-flex justify-content-between"><span>Tambahan Hari (${t} x 40rb)</span> <span>${toRp(upahTambah)}</span></div>
                <div class="d-flex justify-content-between text-primary"><span>Uang Makan (Tracking)</span> <span>${toRp(m.makan)}</span></div>
                <div class="d-flex justify-content-between"><span>Bonus/Lainnya</span> <span>${toRp(b)}</span></div>
                <hr>
                <div class="d-flex justify-content-between text-danger"><span>Iuran Kelompok (Bagi Rata)</span> <span>-${toRp(iuranPerOrang)}</span></div>
                <div class="d-flex justify-content-between text-danger"><span>Potongan Pribadi</span> <span>-${toRp(pp)}</span></div>
                <hr>
                <div class="d-flex justify-content-between fw-bold fs-5"><span>TOTAL TERIMA</span> <span>${toRp(total)}</span></div>
            </div>
        `;

        document.getElementById('slipContent').innerHTML = html;
        const modal = new bootstrap.Modal(document.getElementById('slipModal'));
        modal.show();
    }

    // 7. EVENT LISTENER & LOAD AWAL
    document.getElementById('searchName').addEventListener('input', renderPayrollTable);

    window.onload = function() {
        // Load nilai kas dari storage jika ada
        if(localStorage.getItem('kas_dapur')) {
            document.getElementById('inputDapur').value = localStorage.getItem('kas_dapur');
            document.getElementById('inputPosko').value = localStorage.getItem('kas_posko');
            document.getElementById('inputLain').value = localStorage.getItem('kas_lain');
            document.getElementById('inputRugi').value = localStorage.getItem('kas_rugi');
        }
        updateGlobalFinance();
    };
</script>
