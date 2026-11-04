// faq-data.js - Fail simpanan senarai soalan & jawapan FAQ kes Rite Sdn Bhd

function getFloatingBotResponse(query) {
    let q = query.toLowerCase();

    if (q.includes('lease') || q.includes('pajakan') || q.includes('kereta') || q.includes('nota 11')) {
        return "<b>Rujukan Nota 11 (Pajakan Kenderaan):</b> Pajakan kereta penumpang disekat di bawah s.39(1)(k) (Had kos pemilikan asal RM50k/RM100k, PR No. 3/2017). Lori komersial dibenarkan penuh.";
    } 
    else if (q.includes('entertainment') || q.includes('hiburan') || q.includes('nota 8')) {
        return "<b>Rujukan Nota 8 (Perbelanjaan Hiburan):</b> Hiburan kepada pelanggan layak potongan 50% sahaja (s.39(1)(l)). Manakala keraian pekerja (seperti Annual Dinner) layak potongan penuh 100% (PR No. 4/2015).";
    } 
    else if (q.includes('bad debt') || q.includes('hutang') || q.includes('china') || q.includes('nota 5')) {
        return "<b>Rujukan Nota 5 (Hutang Lapuk & Ragu):</b> Hapus kira hutang perdagangan pembekal China bernilai RM4M dibenarkan potongan di bawah s.34(2) kerana memenuhi syarat tindakan kutipan munasabah.";
    } 
    else if (q.includes('withholding') || q.includes('cukai pegangan') || q.includes('jerman') || q.includes('sweden') || q.includes('nota 4')) {
        return "<b>Rujukan Nota 4 & 15 (Cukai Pegangan):</b> Bayaran kepada syarikat bukan pemastautin (Jurutera Jerman & Sweden) tertakluk Cukai Pegangan 10% (s.109B). Gagal remit menyebabkan belanja jadi *disallowed* (s.39(1)(r)).";
    } 
    else if (q.includes('dividen') || q.includes('faedah') || q.includes('nota 1')) {
        return "<b>Rujukan Nota 1 (Dividen & Faedah):</b> Dividen RM178k adalah dikecualikan cukai. Belanja faedah pinjaman bank RM1.5M untuk pelaburan saham dilarang (*disallowed*) di bawah s.33(1)(a).";
    }
    
    // 👇 CONTOH NAK TAMBAH SOALAN BARU NANTI:
    // else if (q.includes('kata_kunci_baru')) {
    //     return "<b>Tajuk Rujukan:</b> Jawapan atau akta untuk soalan baru di sini.";
    // }

    else {
        return "Berdasarkan kes Rite Sdn Bhd, anda boleh rujuk butang soalan pantas di atas atau semak modul <b>Legal Explorer</b> untuk rujukan Public Ruling LHDN yang terperinci!";
    }
}