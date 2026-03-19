<script>
    // ==========================================
    // 1. DATA MASTER (UANG MAKAN & 41 MAHASISWA)
    // ==========================================
    
    // Rincian per tanggal (Contoh mapping dari Gambar 1)
    // Kamu bisa melengkapi rincian ini untuk semua mahasiswa sesuai kebutuhan
    const rincianMakanHarian = {
        "April Yaman Zai": [{tgl:"30/01", rp:8500}, {tgl:"02/02", rp:9500}, {tgl:"03/02", rp:9500}, {tgl:"04/02", rp:3000}, {tgl:"11/02", rp:19500}, {tgl:"12/02", rp:4500}, {tgl:"16/02", rp:5500}, {tgl:"18/02", rp:6000}, {tgl:"20/02", rp:9000}, {tgl:"24/02", rp:10000}, {tgl:"25/02", rp:9000}, {tgl:"27/02", rp:18000}],
        "Afrida Sitanggang": [{tgl:"29/01", rp:10000}, {tgl:"30/01", rp:8500}, {tgl:"02/02", rp:9500}, {tgl:"03/02", rp:9500}, {tgl:"04/02", rp:3000}, {tgl:"09/02", rp:9000}, {tgl:"10/02", rp:7000}, {tgl:"11/02", rp:22000}, {tgl:"12/02", rp:4500}, {tgl:"16/02", rp:5500}, {tgl:"17/02", rp:10000}, {tgl:"18/02", rp:3000}, {tgl:"20/02", rp:9000}, {tgl:"24/02", rp:10000}, {tgl:"25/02", rp:5000}, {tgl:"27/02", rp:18000}],
        "Rizki Pasrah Telaumbanua": [{tgl:"28/01", rp:15000}, {tgl:"29/01", rp:10000}, {tgl:"30/01", rp:8500}, {tgl:"02/02", rp:9500}, {tgl:"03/02", rp:9500}, {tgl:"04/02", rp:3000}, {tgl:"09/02", rp:9000}, {tgl:"10/02", rp:7000}, {tgl:"11/02", rp:22000}, {tgl:"12/02", rp:4500}, {tgl:"16/02", rp:5500}, {tgl:"17/02", rp:10000}, {tgl:"18/02", rp:3000}, {tgl:"20/02", rp:9000}, {tgl:"24/02", rp:10000}, {tgl:"25/02", rp:9000}, {tgl:"27/02", rp:21000}]
        // Tambahkan nama lainnya di sini...
    };

    // Daftar 41 Mahasiswa (Total Makan sesuai kolom hijau gambar)
    const listMahasiswa = [
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

    const HONOR_PER_HARI = 40000;
    let iuranPerOrang = 0;

    // ==========================================
    // 2. FUNGSI UTILITAS
    // ==========================================
    function toRp(n) {
        return "Rp " + new Intl.NumberFormat('id-ID').format(n);
    }

    // ==========================================
    // 3. LOGIKA KAS KELOMPOK (ADMIN TAB)
    // ==========================================
    function updateFinance() {
        const d = parseFloat(document.getElementById('k_dapur').value) || 0;
        const p = parseFloat(document.getElementById('k_posko').value) || 0;
        const l = parseFloat(document.getElementById('k_lain').value) || 0;
        const r = parseFloat(document.getElementById('k_rugi').value) || 0;

        const totalKelompok = d + p + l + r;
        iuranPerOrang = Math.ceil(totalKelompok / 41);

        document.getElementById('totalGroup').innerText = toRp(totalKelompok);
        document.getElementById('iuranFinal').innerText = toRp(iuranPerOrang);
        document.getElementById('valIuran').innerText = toRp(iuranPerOrang);
        
        renderPayroll();
    }

    // ==========================================
    // 4. RENDER TABEL UTAMA
    // ==========================================
    function renderPayroll() {
        const search = document.getElementById('searchName').value.toLowerCase();
        const tbody = document.getElementById('payrollTable');
        tbody.innerHTML = "";

        listMahasiswa.forEach((mhs, id) => {
            if (mhs.nama.toLowerCase().includes(search)) {
                // Load data dari storage
                const h = localStorage.getItem(`h_${id}`) || 0;
                const t = localStorage.getItem(`t_${id}`) || 0;
                const b = localStorage.getItem(`b_${id}`) || 0;
                const p = localStorage.getItem(`p_${id}`) || 0;

                const income = (parseInt(h) + parseInt(t)) * HONOR_PER_HARI + parseInt(b);
                const outcome = mhs.makan + iuranPerOrang + parseInt(p);
                const sisa = income - outcome;

                tbody.innerHTML += `
                    <tr>
                        <td class="small"><strong>${mhs.nama}</strong></td>
                        <td><input type="number" class="form-control form-control-sm" value="${h}" onchange="saveData(${id},'h',this.value)"></td>
                        <td><input type="number" class="form-control form-control-sm" value="${t}" onchange="saveData(${id},'t',this.value)"></td>
                        <td><input type="number" class="form-control form-control-sm" value="${b}" onchange="saveData(${id},'b',this.value)"></td>
                        <td class="text-danger small fw-bold">-${toRp(mhs.makan)}</td>
                        <td><input type="number" class="form-control form-control-sm" value="${p}" onchange="saveData(${id},'p',this.value)"></td>
                        <td class="fw-bold ${sisa >= 0 ? 'text-success' : 'text-danger'}">${toRp(sisa)}</td>
                        <td><button class="btn btn-sm btn-dark" onclick="viewSlip(${id})">Slip</button></td>
                    </tr>
                `;
            }
        });
    }

    function saveData(id, key, val) {
        localStorage.setItem(`${key}_${id}`, val);
        renderPayroll();
    }

    // ==========================================
    // 5. TRACKING MAKAN (TAB 2)
    // ==========================================
    function cekMakan() {
        const input = document.getElementById('makanInput').value.toLowerCase();
        const res = document.getElementById('makanResult');
        const m = listMahasiswa.find(x => x.nama.toLowerCase().includes(input));

        if (!m || input === "") {
            res.innerHTML = `<div class="alert alert-light">Masukkan nama mahasiswa yang terdaftar.</div>`;
            return;
        }

        const log = rincianMakanHarian[m.nama] || [];
        let html = `
            <div class="mb-3"><h6>Histori: <strong>${m.nama}</strong></h6></div>
            <table class="table table-sm table-bordered bg-white">
                <thead class="table-light"><tr><th>Tanggal</th><th>Biaya Makan</th></tr></thead>
                <tbody>`;
        
        if (log.length === 0) {
            html += `<tr><td colspan="2" class="text-muted text-center">Detail harian belum tersedia.</td></tr>`;
        } else {
            log.forEach(item => {
                html += `<tr><td>${item.tgl}</td><td>${toRp(item.rp)}</td></tr>`;
            });
        }
        
        html += `<tr class="table-warning"><td><strong>TOTAL TERPAKAI</strong></td><td><strong>${toRp(m.makan)}</strong></td></tr></tbody></table>`;
        res.innerHTML = html;
    }

    // ==========================================
    // 6. SLIP GAJI & CETAK
    // ==========================================
    function viewSlip(id) {
        const m = listMahasiswa[id];
        const h = parseInt(localStorage.getItem(`h_${id}`)) || 0;
        const t = parseInt(localStorage.getItem(`t_${id}`)) || 0;
        const b = parseInt(localStorage.getItem(`b_${id}`)) || 0;
        const p = parseInt(localStorage.getItem(`p_${id}`)) || 0;

        const income = (h + t) * HONOR_PER_HARI + b;
        const outcome = m.makan + iuranPerOrang + p;
        const net = income - outcome;

        document.getElementById('slipPrintArea').innerHTML = `
            <div class="text-center mb-4">
                <h5 class="fw-bold mb-0">SLIP PEMBAYARAN HONOR MAHASISWA</h5>
                <p class="small text-uppercase">KKN UNIT 2026 - TAHUN 2026</p>
                <div style="border-bottom: 2px solid #000; margin-top: 10px;"></div>
            </div>

            <div class="row mb-3 small">
                <div class="col-6">NAMA: <strong>${m.nama}</strong></div>
                <div class="col-6 text-end text-muted">DICETAK: ${new Date().toLocaleDateString('id-ID')}</div>
            </div>

            <table class="table table-sm table-borderless mb-0">
                <tr class="table-light"><td colspan="2"><strong>I. PENDAPATAN (+)</strong></td></tr>
                <tr><td>Upah Kerja (${h} Hari x 40rb)</td><td class="text-end">${toRp(h*HONOR_PER_HARI)}</td></tr>
                <tr><td>Tambahan Hari (${t} Hari x 40rb)</td><td class="text-end">${toRp(t*HONOR_PER_HARI)}</td></tr>
                <tr><td>Bonus / Insentif</td><td class="text-end">${toRp(b)}</td></tr>
                <tr class="border-top fw-bold"><td>Total Pendapatan Kotor</td><td class="text-end">${toRp(income)}</td></tr>

                <tr><td colspan="2">&nbsp;</td></tr>

                <tr class="table-light"><td colspan="2"><strong>II. POTONGAN PENGELUARAN (-)</strong></td></tr>
                <tr><td>Uang Makan (Riwayat Terlampir)</td><td class="text-end text-danger">-${toRp(m.makan)}</td></tr>
                <tr><td>Iuran Kas Kelompok (Bagi Rata)</td><td class="text-end text-danger">-${toRp(iuranPerOrang)}</td></tr>
                <tr><td>Potongan Lain-lain</td><td class="text-end text-danger">-${toRp(p)}</td></tr>
                <tr class="border-top fw-bold text-danger"><td>Total Potongan</td><td class="text-end">-${toRp(outcome)}</td></tr>
            </table>

            <div class="mt-4 p-3 d-flex justify-content-between align-items-center bg-dark text-white rounded">
                <span class="fw-bold">SISA SALDO DITERIMA</span>
                <span class="h4 mb-0 fw-800">${toRp(net)}</span>
            </div>

            <div class="signature-section mt-5">
                <div class="sig-box text-center">
                    <p class="mb-0">Penerima,</p>
                    <div class="sig-space"></div>
                    <p class="mt-2 fw-bold text-uppercase">${m.nama}</p>
                </div>
                <div class="sig-box text-center">
                    <p class="mb-0">Mengetahui,<br>Ketua Unit</p>
                    <div class="sig-space"></div>
                    <p class="mt-2 fw-bold text-uppercase">April Yaman</p>
                </div>
            </div>

            <div class="mt-5 text-center text-muted no-print" style="font-size: 0.7rem;">
                <p>*Gunakan tombol Cetak untuk menyimpan dalam format PDF atau kertas.</p>
            </div>
        `;
        
        new bootstrap.Modal(document.getElementById('slipModal')).show();
    }

    // Initial Load
    document.getElementById('searchName').addEventListener('input', renderPayroll);
    window.onload = updateFinance;

</script>
