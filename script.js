<script>
    // 1. DATABASE MASTER (Masukkan 41 Nama di Sini)
    // v: Nilai makan per tanggal (19 kolom), t: Total akumulasi makan
    const rate = 40000; // Honor per hari
    const dataPema = [
        { n: "April Yaman Zai", v: [0,0,8500,9500,9500,3000,0,2500,19500,4500,5500,0,6000,0,9000,0,10000,9000,18000], t: 114500 },
        { n: "Afrida Sitanggang", v: [12000,10000,8500,9500,9500,3000,9000,7000,22000,4500,5500,10000,3000,0,9000,0,10000,5000,18000], t: 155500 },
        { n: "Alfa Safrildo Simanjuntak", v: [12000,10000,8500,9500,9500,3000,9000,7000,19500,4500,5500,10000,10000,14000,9000,12000,10000,9000,18000], t: 179500 },
        { n: "Alvais Hanafi Sormin", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,0,0,0,0,5000,9000,10000], t: 127500 },
        { n: "Aprilda Anantesa Br Bukit", v: [12000,10000,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,10000,12000,9000,0,0,9000,0], t: 138000 },
        { n: "Aurellia Lestari Harefa", v: [12000,10000,8500,9500,9500,3000,0,7000,0,4500,5500,10000,10000,0,0,0,10000,5000,10000], t: 113500 },
        { n: "Azi Muhammad Akbar Rambe", v: [0,0,0,9500,0,0,9000,5000,0,0,0,0,0,0,0,0,0,0,0], t: 23500 },
        { n: "Berkat Putra Saleh Gulo", v: [12000,10000,8500,9500,9500,3000,9000,7000,19500,4500,5500,10000,10000,14000,9000,12000,10000,9000,18000], t: 179500 },
        { n: "Bunga Nurul Lestari", v: [12000,10000,8500,9500,9500,3000,0,7000,14500,4500,5500,10000,10000,0,0,0,10000,7000,0], t: 120500 },
        { n: "Cherie Stefany Aritonang", v: [12000,10000,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,10000,12000,9000,12000,0,0,0], t: 134500 },
        { n: "Deby Anzely", v: [12000,10000,8500,0,0,0,0,0,0,0,0,0,0,0,0,10000,0,0,0], t: 40500 },
        { n: "Dedi Darman Halawa", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,14000,9000,12000,0,0,0], t: 149000 },
        { n: "Djenar Maesa Ayu", v: [0,10000,8500,9500,9500,0,0,0,0,0,0,0,10000,0,9500,0,0,0,0], t: 57000 },
        { n: "Dwi Vatra Aulia", v: [0,0,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,10000,0,9000,0,10000,4500,0], t: 100000 },
        { n: "Ezar Aditya Alfariz Nasution", v: [12000,10000,8500,9500,9500,3000,9000,7000,19500,4500,5500,10000,10000,0,0,0,0,0,0], t: 119500 },
        { n: "Gabriel Dhava Obrien Sinamo", v: [12000,10000,8500,9500,9500,3000,9000,7000,24500,4500,5500,10000,10000,14000,10000,0,0,0,0], t: 147000 },
        { n: "Glen Zona Agustinus Purba", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,14000,9000,12000,10000,14000,18000], t: 182000 },
        { n: "Glori Yana Br Sitepu", v: [12000,10000,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,10000,12000,9000,12000,4500,0,0], t: 138000 },
        { n: "Grisnauli Olyvya Sinaga", v: [12000,10000,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,10000,0,0,12000,0,2500,0], t: 113000 },
        { n: "Hafizh Hakim Hendrian", v: [12000,10000,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,4000,0,0,0,0,0,0], t: 92500 },
        { n: "Ilham Haramain", v: [0,10000,0,0,0,0,0,0,0,0,0,10000,0,0,0,0,0,0,0], t: 20000 },
        { n: "Indah Syahputri", v: [12000,10000,8500,9500,9500,3000,0,7000,0,4500,5500,10000,10000,10500,0,0,0,0,0], t: 100000 },
        { n: "Lius Yudika Lafau", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,6000,0,0,0,0,0,0], t: 118500 },
        { n: "Martinus Gulo", v: [12000,10000,8500,9500,9500,3000,9000,7000,19500,4500,5500,10000,10000,14000,9000,12000,10000,9000,18000], t: 179500 },
        { n: "Muhammad Fadlin Azima", v: [12000,10000,8500,9500,0,0,0,0,0,0,0,10000,0,0,0,0,0,0,0], t: 50000 },
        { n: "Mukhlis Halawa", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,12000,9000,12000,10000,9000,18000], t: 177000 },
        { n: "Nico Pratama", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,9000,0,0,0,0,0], t: 122000 },
        { n: "Nurazizah Marpaung", v: [12000,10000,8500,9500,9500,3000,0,7000,0,4500,5500,10000,4000,0,9000,0,0,0,10000], t: 102500 },
        { n: "Ones Torius Halawa", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,14000,9000,0,0,0,0], t: 145500 },
        { n: "Pebri Juan Saragih", v: [12000,10000,8500,9500,9500,3000,9000,7000,6500,4500,5500,10000,6000,0,0,0,10000,5000,18000], t: 134000 },
        { n: "Pera Anjani Br Perangin angin", v: [12000,10000,8500,9500,9500,3000,0,7000,0,4500,5500,10000,4000,0,0,0,10000,3000,0], t: 96500 },
        { n: "Pradita Keysha", v: [12000,10000,0,0,0,0,0,0,0,0,0,10000,0,13500,0,0,0,0,0], t: 45500 },
        { n: "Rifka Afriyani Sitanggang", v: [0,0,8500,9500,9500,3000,0,0,0,0,0,10000,0,0,9000,0,10000,0,10000], t: 69500 },
        { n: "Rizki Pasrah Telaumbanua", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,14000,9000,12000,10000,0,18000], t: 165000 },
        { n: "Shah Zhahan Arassi Sihombing", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,0,0,0,0,0,0], t: 117000 },
        { n: "Shannia Delofa Sinaga", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,0,0,0,0,0,0], t: 119000 },
        { n: "Sherly Maulidza", v: [12000,10000,8500,9500,9500,3000,9000,7000,0,4500,5500,10000,4000,0,9000,0,0,5000,0], t: 107000 },
        { n: "Sri Kandi", v: [12000,10000,8500,9500,0,3000,0,7000,0,4500,5500,0,9500,9000,0,0,0,0,0], t: 78500 },
        { n: "Sri Muliani", v: [12000,10000,8500,9500,9500,3000,0,7000,0,4500,5500,10000,10000,5500,0,0,0,0,0], t: 105000 },
        { n: "Tony Blayer Simangunsong", v: [12000,10000,8500,9500,9500,3000,9000,7000,14500,4500,5500,10000,10000,0,0,0,0,0,0], t: 117500 },
        { n: "William Syah Putra Zamasi", v: [12000,10000,8500,9500,9500,3000,9000,7000,6500,4500,5500,10000,10000,14000,9000,12000,10000,9000,18000], t: 177000 }
    ];

    const tanggalList = ["28/01", "29/01", "30/01", "02/02", "03/02", "04/02", "09/02", "10/02", "11/02", "12/02", "16/02", "17/02", "18/02", "19/02", "20/02", "21/02", "24/02", "25/02", "27/02"];
    let iuranPerMhs = 0;

    // 2. FUNGSI FORMAT RUPIAH
    function format(n) { return "Rp " + new Intl.NumberFormat('id-ID').format(n); }

    // 3. LOGIKA KAS & IURAN
    function hitungKas() {
        const d = Number(document.getElementById('k_dapur').value) || 0;
        const p = Number(document.getElementById('k_posko').value) || 0;
        const l = Number(document.getElementById('k_lain').value) || 0;
        const r = Number(document.getElementById('k_rugi').value) || 0;
        
        const totalKas = d + p + l + r;
        iuranPerMhs = Math.ceil(totalKas / 41);
        
        document.getElementById('totalGroup').innerText = format(totalKas);
        document.getElementById('iuranFinal').innerText = format(iuranPerMhs);
        renderTable();
    }

    // 4. RENDER TABEL PAYROLL (MOBILE FRIENDLY)
    function renderTable() {
        const search = document.getElementById('searchName').value.toLowerCase();
        const body = document.getElementById('payrollTable');
        body.innerHTML = "";
        
        dataPema.forEach((m, i) => {
            if(m.n.toLowerCase().includes(search)) {
                // Ambil data tersimpan dari LocalStorage
                const h = localStorage.getItem(`h_${i}`) || 0;
                const b = localStorage.getItem(`b_${i}`) || 0;
                const p = localStorage.getItem(`p_${i}`) || 0;
                
                const income = (Number(h) * rate) + Number(b);
                const outcome = m.t + iuranPerMhs + Number(p);
                const net = income - outcome;

                body.innerHTML += `
                    <tr>
                        <td data-label="Mahasiswa"><strong>${m.n}</strong></td>
                        <td data-label="Hari Kerja"><input type="number" class="form-control form-control-sm" value="${h}" onchange="save(${i},'h',this.value)"></td>
                        <td data-label="Bonus"><input type="number" class="form-control form-control-sm" value="${b}" onchange="save(${i},'b',this.value)"></td>
                        <td data-label="Pot. Makan" class="text-danger small">${format(m.t)}</td>
                        <td data-label="Pot. Lain"><input type="number" class="form-control form-control-sm" value="${p}" onchange="save(${i},'p',this.value)"></td>
                        <td data-label="Total Net" class="fw-bold text-primary">${format(net)}</td>
                        <td data-label="Opsi"><button class="btn btn-sm btn-dark" onclick="showSlip(${i})">SLIP</button></td>
                    </tr>`;
            }
        });
    }

    // 5. AUTO SAVE DATA KE BROWSER
    function save(i, k, v) { localStorage.setItem(`${k}_${i}`, v); renderTable(); }

    // 6. TAMPILKAN SLIP MODAL
    function showSlip(i) {
        const m = dataPema[i];
        const h = Number(localStorage.getItem(`h_${i}`)) || 0;
        const b = Number(localStorage.getItem(`b_${i}`)) || 0;
        const p = Number(localStorage.getItem(`p_${i}`)) || 0;
        
        const inc = (h * rate) + b;
        const out = m.t + iuranPerMhs + p;
        const net = inc - out;

        document.getElementById('slipPrintArea').innerHTML = `
            <div class="slip-header text-center">
                <h5 class="mb-0">RINCIAN HONORARIUM MAHASISWA</h5>
                <p class="small">KKN UNIT PEMA - PERIODE JAN/FEB 2026</p>
            </div>
            <div class="row small mb-2">
                <div class="col-6">Nama: <b>${m.n}</b></div>
                <div class="col-6 text-end">${new Date().toLocaleDateString('id-ID')}</div>
            </div>
            <table class="table table-borderless table-sm small">
                <tr class="table-light"><td><b>A. PENGHASILAN</b></td><td class="text-end"></td></tr>
                <tr><td>Honor Kerja (${h} Hari x 40rb)</td><td class="text-end">${format(h*rate)}</td></tr>
                <tr><td>Bonus / Tambahan</td><td class="text-end">${format(b)}</td></tr>
                <tr class="table-light"><td><b>B. POTONGAN</b></td><td class="text-end"></td></tr>
                <tr><td>Akumulasi Uang Makan</td><td class="text-end text-danger">-${format(m.t)}</td></tr>
                <tr><td>Iuran Kas (Bagi Rata)</td><td class="text-end text-danger">-${format(iuranPerMhs)}</td></tr>
                <tr><td>Potongan Lainnya</td><td class="text-end text-danger">-${format(p)}</td></tr>
                <tr class="border-top">
                    <td><b class="h6">TOTAL DITERIMA</b></td>
                    <td class="text-end"><b class="h6 text-primary">${format(net)}</b></td>
                </tr>
            </table>
            <div class="signature-section">
                <div class="sig-box"><p>Ketua,</p><div class="sig-space">April Yaman</div></div>
                <div class="sig-box"><p>Penerima,</p><div class="sig-space">${m.n}</div></div>
            </div>
        `;
        new bootstrap.Modal(document.getElementById('slipModal')).show();
    }

    // 7. CEK HISTORI MAKAN
    function cekMakan() {
        const input = document.getElementById('makanSearch').value.toLowerCase();
        const m = dataPema.find(x => x.n.toLowerCase().includes(input));
        const res = document.getElementById('makanResult');
        if(!m) { res.innerHTML = "Nama tidak ditemukan."; return; }

        let table = `<table class="table table-sm small"><thead><tr><th>Tgl</th><th>Biaya</th></tr></thead><tbody>`;
        tanggalList.forEach((tgl, idx) => {
            if(m.v[idx] > 0) table += `<tr><td>${tgl}</td><td>${format(m.v[idx])}</td></tr>`;
        });
        table += `<tr class="table-info fw-bold"><td>TOTAL</td><td>${format(m.t)}</td></tr></tbody></table>`;
        res.innerHTML = table;
    }

    document.getElementById('searchName').addEventListener('input', renderTable);
    window.onload = hitungKas;
</script>
