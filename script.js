<script>
    // 1. DATABASE MASTER (Data 41 Mahasiswa dari Gambar)
    const rate = 40000;
    const dbMakan = [
        { n: "April Yaman Zai", v: { "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "10/02": 2500, "11/02": 19500, "12/02": 4500, "16/02": 5500, "18/02": 6000, "20/02": 9000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 114500 },
        { n: "Afrida Sitanggang", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 22000, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 3000, "20/02": 9000, "24/02": 10000, "25/02": 5000, "27/02": 18000 }, t: 155500 },
        { n: "Alfa Safrildo Simanjuntak", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 10000, "19/02": 14000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 179500 },
        { n: "Alvais Hanafi Sormin", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 10000, "24/02": 2000, "27/02": 14000 }, t: 127500 },
        { n: "Aprilda Anantesa Br Bukit", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 138000 },
        { n: "Aurellia Lestari Harefa", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 3000, "17/02": 7000, "18/02": 6000, "27/02": 18000 }, t: 113500 },
        { n: "Azi Muhammad Akbar Rambe", v: { "30/01": 8500, "02/02": 6000, "03/02": 6000, "04/02": 3000 }, t: 23500 },
        { n: "Berkat Putra Saleh Gulo", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 10000, "19/02": 14000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 179500 },
        { n: "Bunga Nurul Lestari", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 22500, "12/02": 4500, "16/02": 3000, "17/02": 10000, "18/02": 3000, "20/02": 5000, "24/02": 2000, "27/02": 14000 }, t: 120500 },
        { n: "Cherie Stefany Aritonang", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 22000, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 3000, "20/02": 5000, "24/02": 10000, "27/02": 18000 }, t: 134500 },
        { n: "Deby Anzely", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000 }, t: 40500 },
        { n: "Dedi Darman Halawa", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 5000, "11/02": 6500, "16/02": 5500, "17/02": 10000, "18/02": 7000, "19/02": 14000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 149000 },
        { n: "Djenar Maesa Ayu", v: { "30/01": 8500, "02/02": 6000, "03/02": 3000, "04/02": 3000, "09/02": 5000, "10/02": 2500, "11/02": 6500, "12/02": 2500, "16/02": 2500, "17/02": 3500, "27/02": 14000 }, t: 57000 },
        { n: "Dwi Vatra Aulia", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6000, "12/02": 2500, "16/02": 5500, "17/02": 3500, "27/02": 14000 }, t: 100000 },
        { n: "Ezar Aditya Alfariz Nasution", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 22000, "12/02": 4500, "16/02": 2500, "24/02": 2000, "27/02": 14000 }, t: 119500 },
        { n: "Gabriel Dhava Obrien Sinamo", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "19/02": 5000, "20/02": 4000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 147000 },
        { n: "Glen Zona Agustinus Purba", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 22000, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "19/02": 5000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 182000 },
        { n: "Glori Yana Br Sitepu", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 138000 },
        { n: "Grisnauli Olyvya Sinaga", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "27/02": 18000 }, t: 113000 },
        { n: "Hafizh Hakim Hendrian", v: { "29/01": 10000, "30/01": 8500, "03/02": 6000, "04/02": 3000, "10/02": 7000, "11/02": 22000, "12/02": 4500, "16/02": 5500, "17/02": 10000, "24/02": 2000, "27/02": 14000 }, t: 92500 },
        { n: "Ilham Haramain", v: { "30/01": 8500, "03/02": 6000, "04/02": 3000, "12/02": 2500 }, t: 20000 },
        { n: "Indah Syahputri", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 2500, "17/02": 10000, "18/02": 6000, "27/02": 14000 }, t: 100000 },
        { n: "Lius Yudika Lafau", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6000, "12/02": 4500, "16/02": 5500, "17/02": 6000, "27/02": 18000 }, t: 118500 },
        { n: "Martinus Gulo", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 10000, "19/02": 14000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 179500 },
        { n: "Muhammad Fadlin Azima", v: { "03/02": 9500, "04/02": 3000, "09/02": 5000, "10/02": 5500, "11/02": 3500, "16/02": 2500, "17/02": 7000, "27/02": 14000 }, t: 50000 },
        { n: "Mukhlis Halawa", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 14000, "20/02": 9000, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 177000 },
        { n: "Nico Pratama", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "20/02": 5000, "24/02": 2000, "27/02": 14000 }, t: 122000 },
        { n: "Nurazizah Marpaung", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 2500, "17/02": 3500, "18/02": 3000, "27/02": 14000 }, t: 102500 },
        { n: "Ones Torius Halawa", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 5000, "11/02": 6500, "16/02": 5500, "17/02": 3500, "18/02": 10000, "19/02": 14000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 145500 },
        { n: "Pebri Juan Saragih", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "24/02": 10000, "25/02": 5000, "27/02": 18000 }, t: 134000 },
        { n: "Pera Anjani Br Perangin angin", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "10/02": 7000, "11/02": 6000, "12/02": 4500, "16/02": 5500, "17/02": 7000, "18/02": 3000, "27/02": 14000 }, t: 96500 },
        { n: "Pradita Keysha", v: { "30/01": 8500, "03/02": 3000, "04/02": 3000, "10/02": 2500, "11/02": 3000, "12/02": 4500, "16/02": 2500, "17/02": 3500, "27/02": 14000 }, t: 45500 },
        { n: "Rifka Afriyani Sitanggang", v: { "03/02": 9500, "04/02": 3000, "09/02": 5000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "17/02": 10000, "24/02": 10000, "27/02": 14000 }, t: 69500 },
        { n: "Rizki Pasrah Telaumbanua", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 10000, "19/02": 14000, "20/02": 9000, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 165000 },
        { n: "Shah Zhahan Arassi Sihombing", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "24/02": 2000, "27/02": 14000 }, t: 117000 },
        { n: "Shannia Delofa Sinaga", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "27/02": 18000 }, t: 119000 },
        { n: "Sherly Maulidza", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 3000, "20/02": 5000, "24/02": 2000, "27/02": 14000 }, t: 107000 },
        { n: "Sri Kandi", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "10/02": 2500, "11/02": 3000, "12/02": 4500, "16/02": 2500, "24/02": 2000, "27/02": 14000 }, t: 78500 },
        { n: "Sri Muliani", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 6000, "27/02": 14000 }, t: 105000 },
        { n: "Tony Blayer Simangunsong", v: { "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 19500, "12/02": 4500, "16/02": 3000, "17/02": 10000, "18/02": 6000, "27/02": 18000 }, t: 117500 },
        { n: "William Syah Putra Zamasi", v: { "28/01": 12000, "29/01": 10000, "30/01": 8500, "02/02": 9500, "03/02": 9500, "04/02": 3000, "09/02": 9000, "10/02": 7000, "11/02": 6500, "12/02": 4500, "16/02": 5500, "17/02": 10000, "18/02": 10000, "19/02": 14000, "20/02": 11500, "21/02": 12000, "24/02": 10000, "25/02": 9000, "27/02": 18000 }, t: 177000 }
    ];

    let iuranPerMhs = 0;

    // Fungsi Format Rupiah
    function format(n) { return "Rp " + new Intl.NumberFormat('id-ID').format(Math.abs(n)); }

    // 2. LOGIKA KAS UNIT (DAPUR, POSKO, LAINNYA, RUGI)
    function hitungKas() {
        const d = Number(document.getElementById('k_dapur').value) || 0;
        const p = Number(document.getElementById('k_posko').value) || 0;
        const l = Number(document.getElementById('k_lain').value) || 0;
        const r = Number(document.getElementById('k_rugi').value) || 0;
        
        const totalKas = d + p + l + r;
        iuranPerMhs = Math.ceil(totalKas / 41); // Pembagi 41 orang
        
        document.getElementById('iuranDisplay').innerText = format(iuranPerMhs);
        renderTable(); // Update tabel payroll saat kas berubah
    }

    // 3. RENDER TABEL PAYROLL (RESPONSIF & AUTOMATIC)
    function renderTable() {
        const search = document.getElementById('searchName').value.toLowerCase();
        const body = document.getElementById('payrollBody');
        body.innerHTML = "";
        
        dbMakan.forEach((m, i) => {
            if(m.n.toLowerCase().includes(search)) {
                // Ambil data yang tersimpan di memori browser
                const h = localStorage.getItem(`h_${i}`) || 0;   // Hari Kerja
                const t = localStorage.getItem(`t_${i}`) || 0;   // Tambah Hari
                const b = localStorage.getItem(`b_${i}`) || 0;   // Bonus
                const a = localStorage.getItem(`a_${i}`) || 0;   // Asuransi
                const pr = localStorage.getItem(`pr_${i}`) || 0; // Potongan Pribadi
                
                // Kalkulasi Matematika
                const income = (Number(h) + Number(t)) * rate + Number(b);
                const outcome = m.t + iuranPerMhs + Number(a) + Number(pr);
                const net = income - outcome;

                body.innerHTML += `
                    <tr>
                        <td data-label="Nama"><b>${m.n}</b></td>
                        <td data-label="Hari"><input type="number" class="form-control form-control-sm" value="${h}" onchange="save(${i},'h',this.value)"></td>
                        <td data-label="Tmbh"><input type="number" class="form-control form-control-sm" value="${t}" onchange="save(${i},'t',this.value)"></td>
                        <td data-label="Bonus"><input type="number" class="form-control form-control-sm" value="${b}" onchange="save(${i},'b',this.value)"></td>
                        <td data-label="Asuransi"><input type="number" class="form-control form-control-sm" value="${a}" onchange="save(${i},'a',this.value)"></td>
                        <td data-label="Makan" class="text-danger small">${format(m.t)}</td>
                        <td data-label="Iuran Kas" class="text-danger small">${format(iuranPerMhs)}</td>
                        <td data-label="Pribadi"><input type="number" class="form-control form-control-sm" value="${pr}" onchange="save(${i},'pr',this.value)"></td>
                        <td data-label="TOTAL NET" class="fw-bold ${net < 0 ? 'text-danger' : 'text-primary'}">${format(net)}</td>
                        <td data-label="Opsi"><button class="btn btn-sm btn-dark" onclick="showSlip(${i})">SLIP</button></td>
                    </tr>`;
            }
        });
    }

    // Auto-Save ke Browser (Local Storage)
    function save(i, k, v) { 
        localStorage.setItem(`${k}_${i}`, v); 
        renderTable(); 
    }

    // 4. GENERATE SLIP GAJI (PRINT READY)
    function showSlip(i) {
        const m = dbMakan[i];
        const h = Number(localStorage.getItem(`h_${i}`)) || 0;
        const t = Number(localStorage.getItem(`t_${i}`)) || 0;
        const b = Number(localStorage.getItem(`b_${i}`)) || 0;
        const a = Number(localStorage.getItem(`a_${i}`)) || 0;
        const pr = Number(localStorage.getItem(`pr_${i}`)) || 0;
        
        const inc = (h + t) * rate + b;
        const out = m.t + iuranPerMhs + a + pr;
        const net = inc - out;

        document.getElementById('slipPrintArea').innerHTML = `
            <div class="slip-header text-center">
                <h4 class="mb-1">SLIP GAJI PROGRAM PEMA 2026</h4>
                <p class="small text-uppercase">Tanda Terima Honorarium Mahasiswa</p>
            </div>
            <div class="row small mb-3">
                <div class="col-6">Penerima: <b>${m.n}</b></div>
                <div class="col-6 text-end">Tgl: ${new Date().toLocaleDateString('id-ID')}</div>
            </div>
            
            <table class="table table-sm table-borderless small">
                <tr class="table-light"><td colspan="2"><b>A. PENDAPATAN</b></td></tr>
                <tr><td>Honor Kerja (${h} Hari x 40rb)</td><td class="text-end">${format(h*rate)}</td></tr>
                <tr><td>Tambah Hari (${t} Hari x 40rb)</td><td class="text-end">${format(t*rate)}</td></tr>
                <tr><td>Bonus / Apresiasi</td><td class="text-end">${format(b)}</td></tr>
                
                <tr class="table-light"><td colspan="2"><b>B. POTONGAN</b></td></tr>
                <tr><td>Biaya Makan (Akumulasi)</td><td class="text-end text-danger">-${format(m.t)}</td></tr>
                <tr><td>Iuran Kas Unit (Total/41)</td><td class="text-end text-danger">-${format(iuranPerMhs)}</td></tr>
                <tr><td>Asuransi</td><td class="text-end text-danger">-${format(a)}</td></tr>
                <tr><td>Potongan Pribadi</td><td class="text-end text-danger">-${format(pr)}</td></tr>
                
                <tr class="border-top border-dark">
                    <td><b class="h5">TOTAL BERSIH</b></td>
                    <td class="text-end"><b class="h5 text-primary">${format(net)}</b></td>
                </tr>
            </table>

            <div class="sig-container" style="display: flex; justify-content: space-between; margin-top: 50px; text-align: center;">
                <div style="width: 45%;">
                    <p class="mb-0">Mengetahui,</p>
                    <p><b>Ketua</b></p>
                    <div style="height: 70px; border-bottom: 1px solid black; margin-bottom: 5px; display: flex; align-items: flex-end; justify-content: center; font-weight: 800;">APRIL YAMAN</div>
                </div>
                <div style="width: 45%;">
                    <p class="mb-0">Medan, ${new Date().getDate()} ${new Date().toLocaleString('id-ID',{month:'short'})}</p>
                    <p><b>Penerima</b></p>
                    <div style="height: 70px; border-bottom: 1px solid black; margin-bottom: 5px; display: flex; align-items: flex-end; justify-content: center; font-weight: 800;">${m.n.toUpperCase()}</div>
                </div>
            </div>
        `;
        new bootstrap.Modal(document.getElementById('slipModal')).show();
    }

    // 5. FITUR CEK MAKAN (DETAIL PER TANGGAL)
    function cekMakan() {
        const input = document.getElementById('makanSearch').value.toLowerCase();
        const m = dbMakan.find(x => x.n.toLowerCase().includes(input));
        const res = document.getElementById('makanResult');
        if(!m) { res.innerHTML = "<p class='text-danger'>Nama tidak ditemukan.</p>"; return; }

        let html = `<div class='card p-3 shadow-sm bg-light'><h6 class='mb-3'>Histori: ${m.n}</h6><table class='table table-sm small'><thead><tr><th>Tanggal</th><th>Biaya</th></tr></thead><tbody>`;
        for (const [tgl, biaya] of Object.entries(m.v)) {
            html += `<tr><td>${tgl}/2026</td><td>${format(biaya)}</td></tr>`;
        }
        html += `<tr class='fw-bold table-info'><td>TOTAL AKUMULASI</td><td>${format(m.t)}</td></tr></tbody></table></div>`;
        res.innerHTML = html;
    }

    // Jalankan pertama kali saat load
    document.getElementById('searchName').addEventListener('input', renderTable);
    window.onload = hitungKas;
</script>
