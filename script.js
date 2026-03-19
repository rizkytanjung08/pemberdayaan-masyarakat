<script>
    // DATA MASTER - Uang Makan sebagai pengeluaran/potongan
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

    function toRp(angka) {
        return "Rp " + new Intl.NumberFormat('id-ID').format(angka);
    }

    function updateGlobalFinance() {
        const d = parseFloat(document.getElementById('inputDapur').value) || 0;
        const p = parseFloat(document.getElementById('inputPosko').value) || 0;
        const l = parseFloat(document.getElementById('inputLain').value) || 0;
        const r = parseFloat(document.getElementById('inputRugi').value) || 0;

        const totalPengeluaran = d + p + l + r;
        iuranPerOrang = Math.ceil(totalPengeluaran / 41);

        document.getElementById('totalKas').innerText = toRp(totalPengeluaran);
        document.getElementById('displayIuran').innerText = toRp(iuranPerOrang);
        
        renderPayrollTable();
    }

    function renderPayrollTable() {
        const tbody = document.getElementById('payrollTableBody');
        const search = document.getElementById('searchName').value.toLowerCase();
        tbody.innerHTML = "";

        daftarMahasiswa.forEach((mhs, id) => {
            if (mhs.nama.toLowerCase().includes(search)) {
                const hari = localStorage.getItem(`h_${id}`) || 0;
                const tambahan = localStorage.getItem(`t_${id}`) || 0;
                const bonus = localStorage.getItem(`b_${id}`) || 0;
                const potPribadi = localStorage.getItem(`pp_${id}`) || 0;

                const totalPendapatan = ((parseInt(hari) + parseInt(tambahan)) * UPAH_PER_HARI) + parseInt(bonus);
                const totalPotongan = mhs.makan + iuranPerOrang + parseInt(potPribadi);
                const totalDiterima = totalPendapatan - totalPotongan;

                tbody.innerHTML += `
                    <tr>
                        <td class="fw-bold">${mhs.nama}</td>
                        <td><input type="number" class="form-control form-control-sm" value="${hari}" onchange="saveEntry(${id}, 'h', this.value)"></td>
                        <td><input type="number" class="form-control form-control-sm" value="${tambahan}" onchange="saveEntry(${id}, 't', this.value)"></td>
                        <td><input type="number" class="form-control form-control-sm" value="${bonus}" onchange="saveEntry(${id}, 'b', this.value)"></td>
                        <td class="text-danger fw-semibold">${toRp(mhs.makan)}</td>
                        <td><input type="number" class="form-control form-control-sm" value="${potPribadi}" onchange="saveEntry(${id}, 'pp', this.value)"></td>
                        <td class="fw-bold ${totalDiterima >= 0 ? 'text-success' : 'text-danger'}">${toRp(totalDiterima)}</td>
                        <td>
                            <button class="btn btn-sm btn-dark" onclick="generateSlip(${id})">Slip</button>
                        </td>
                    </tr>
                `;
            }
        });
    }

    function saveEntry(id, key, val) {
        localStorage.setItem(`${key}_${id}`, val);
        renderPayrollTable();
    }

    function generateSlip(id) {
        const m = daftarMahasiswa[id];
        const h = parseInt(localStorage.getItem(`h_${id}`)) || 0;
        const t = parseInt(localStorage.getItem(`t_${id}`)) || 0;
        const b = parseInt(localStorage.getItem(`b_${id}`)) || 0;
        const pp = parseInt(localStorage.getItem(`pp_${id}`)) || 0;

        const upahPokok = h * UPAH_PER_HARI;
        const upahTambah = t * UPAH_PER_HARI;
        const totalPendapatan = upahPokok + upahTambah + b;
        const totalPotongan = m.makan + iuranPerOrang + pp;
        const grandTotal = totalPendapatan - totalPotongan;

        const html = `
            <div class="p-2">
                <p class="mb-1"><strong>Nama:</strong> ${m.nama}</p>
                <hr>
                <div class="fw-bold mb-2">PENGHASILAN (+)</div>
                <div class="d-flex justify-content-between"><span>Upah (${h} hari)</span> <span>${toRp(upahPokok)}</span></div>
                <div class="d-flex justify-content-between"><span>Lembur (${t} hari)</span> <span>${toRp(upahTambah)}</span></div>
                <div class="d-flex justify-content-between"><span>Bonus</span> <span>${toRp(b)}</span></div>
                <div class="d-flex justify-content-between border-top mt-1"><strong>Total Pendapatan</strong> <strong>${toRp(totalPendapatan)}</strong></div>
                
                <div class="fw-bold mt-3 mb-2">PENGELUARAN/POTONGAN (-)</div>
                <div class="d-flex justify-content-between text-danger"><span>Biaya Uang Makan</span> <span>-${toRp(m.makan)}</span></div>
                <div class="d-flex justify-content-between text-danger"><span>Iuran Kelompok</span> <span>-${toRp(iuranPerOrang)}</span></div>
                <div class="d-flex justify-content-between text-danger"><span>Potongan Pribadi</span> <span>-${toRp(pp)}</span></div>
                <div class="d-flex justify-content-between border-top mt-1"><strong>Total Potongan</strong> <strong>-${toRp(totalPotongan)}</strong></div>
                
                <hr style="border-top: 2px solid #000">
                <div class="d-flex justify-content-between fw-bold fs-5"><span>SISA DITERIMA</span> <span>${toRp(grandTotal)}</span></div>
            </div>
        `;

        document.getElementById('slipContent').innerHTML = html;
        new bootstrap.Modal(document.getElementById('slipModal')).show();
    }

    document.getElementById('searchName').addEventListener('input', renderPayrollTable);
    window.onload = updateGlobalFinance;
</script>
