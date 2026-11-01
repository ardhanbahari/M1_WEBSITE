/* PT. Angkasa Raya Steel - site scripts: video config, WhatsApp inquiry, ID/EN switch */
(function () {
  'use strict';

  var WA = '6285706644595';

  // === VIDEO YOUTUBE COMPANY PROFILE ===
  // Isi dengan ID video resmi, contoh: 'Y7f98aduVJ8'. Selama kosong, tombol & bagian video disembunyikan.
  var YOUTUBE_ID = '';

  if (YOUTUBE_ID) {
    var link = document.getElementById('yt-link');
    link.href = 'https://www.youtube.com/watch?v=' + YOUTUBE_ID;
    link.classList.add('glightbox');
    link.hidden = false;
    var sec = document.getElementById('video');
    sec.hidden = false;
    var f = document.getElementById('yt-embed');
    f.src = 'https://www.youtube.com/embed/' + YOUTUBE_ID;
    f.style.display = 'block';
    document.getElementById('yt-fallback').style.display = 'none';
  }

  // === Bahasa ===
  var lang = 'id';
  try { lang = localStorage.getItem('ars-lang') || 'id'; } catch (e) {}

  var EN = {
    'PT. Angkasa Raya Steel - Produsen Pipa Baja Bulat & Kotak': 'PT. Angkasa Raya Steel - Round & Square Steel Pipe Manufacturer',
    'Hubungi Kami': 'Contact Us',
    'Produsen pipa baja bulat dan pipa kotak (hollow) dengan bahan baku terbaik, teknologi manufaktur modern, dan kontrol kualitas ketat dari pabrik kami di Gresik, Jawa Timur.': 'Manufacturer of round and square hollow steel pipes with the best raw materials, modern manufacturing technology and strict quality control from our factory in Gresik, East Java.',
    'Tentang Kami': 'About Us',
    'Sistem Manajemen Mutu': 'Quality Management System',
    '2 Tipe': '2 Types',
    'Pipa Bulat & Pipa Kotak': 'Round & Square Pipes',
    'Traceable ke asal bahan baku': 'Traceable to raw material origin',
    'Pabrik, Jawa Timur': 'Factory, East Java',
    'Mengapa Pipa Angkasa Raya Steel Adalah Pilihan Terbaik': 'Why Angkasa Raya Steel Pipes Are the Best Choice',
    'PT. Angkasa Raya Steel adalah perusahaan manufaktur pipa baja dengan bahan terbaik dan konsistensi kualitas di Indonesia. Performa produk kami bertumpu pada tiga hal: bahan baku berkualitas, produksi yang konsisten, dan pengalaman panjang di industri.': 'PT. Angkasa Raya Steel is a steel pipe manufacturing company with the best materials and quality consistency in Indonesia. Our product performance rests on three things: quality raw materials, consistent production, and long industry experience.',
    'Berkontribusi pada infrastruktur Indonesia dengan baja berkualitas.': 'Contributing to Indonesia\'s infrastructure with quality steel.',
    'Bahan baku berkualitas dan teknologi inovatif.': 'Quality raw materials and innovative technology.',
    'Memenuhi kebutuhan modern, termasuk keselamatan dan perlindungan lingkungan.': 'Meeting modern needs, including safety and environmental protection.',
    'Catatan produksi yang konsisten membuat produk kami dipercaya pelanggan. Kami telah memasok berbagai proyek di seluruh Indonesia, menerima permintaan ekspor, dan terus berinvestasi pada basis produksi serta jaringan penjualan di dalam dan luar negeri. Kami membangun hubungan jangka panjang yang saling menguntungkan dengan pelanggan melalui produk yang presisi, konsisten, dan dapat diandalkan.': 'A consistent production record makes our products trusted by customers. We have supplied projects across Indonesia, received export requests, and keep investing in our production base and sales network at home and abroad. We build long-term, mutually beneficial relationships with customers through precise, consistent and reliable products.',
    'Proses & Kualitas': 'Process & Quality',
    'Visi': 'Vision',
    'Menjadi pemain utama dalam industri pipa baja; mitra yang inovatif, cerdas, dan selalu segar dengan produk pipa berkualitas dalam berbagai jenis dan ukuran.': 'To become a major player in the steel pipe industry; an innovative, smart and always fresh partner offering quality pipe products in many types and sizes.',
    'Misi': 'Mission',
    'Memimpin dalam memproduksi pipa baja berkualitas, dengan harga kompetitif dan pengiriman tepat waktu, dengan kepuasan pelanggan sebagai prioritas.': 'To lead in producing quality steel pipes, with competitive prices and on-time delivery, with customer satisfaction as the priority.',
    'Tersedia dalam berbagai kualitas, ketebalan dinding, ukuran sisi, dan diameter': 'Available in various grades, wall thicknesses, side dimensions and diameters',
    'Pipa Bulat Besi Baja': 'Round Iron Steel Pipe',
    'Ketahanan korosi tinggi dan fleksibel, tersedia dalam berbagai kualitas, ketebalan dinding, dan diameter.': 'High corrosion resistance and flexible, available in various grades, wall thicknesses and diameters.',
    'Pipa besi baja untuk tujuan struktural': 'Steel pipe for structural purposes',
    'Pipa besi baja untuk sektor pertanian': 'Steel pipe for the agricultural sector',
    'Pipa besi baja untuk perlindungan kabel': 'Steel pipe for cable protection',
    'Pipa Kotak Besi Baja': 'Square Iron Steel Pipe',
    'Ketahanan korosi dan kekuatan tinggi, tersedia dalam berbagai kualitas, ketebalan dinding, dan ukuran sisi.': 'High corrosion resistance and strength, available in various grades, wall thicknesses and side dimensions.',
    'Struktural & teknik: pagar, rangka atap, rangka dinding, konstruksi tiang': 'Structural & engineering: fences, roof frames, wall frames, pole construction',
    'Arsitektural: kisi dinding, lantai, grip handle, pigura, partisi, dll.': 'Architectural: wall lattices, flooring, grip handles, frames, partitions, etc.',
    ' Minta Penawaran': ' Request a Quote',
    'Minta Penawaran': 'Request a Quote',
    'Butuh spesifikasi ukuran & ketebalan tertentu?': 'Need a specific size & thickness?',
    'Kirim inquiry': 'Send an inquiry',
    'dan tim kami akan membantu.': 'and our team will help.',
    'Kualitas adalah budaya perusahaan. Setiap tahap dilalui dengan kontrol kualitas ekstra.': 'Quality is our corporate culture. Every step goes through extra quality control.',
    'Sebelum Produksi': 'Before Production',
    'Seleksi dan inspeksi bahan baku terbaik untuk memastikan kualitas bahan.': 'Selection and inspection of the best raw materials to ensure material quality.',
    'Selama Produksi': 'During Production',
    'Proses rolling, bending, dan cutting canggih oleh pekerja terampil dengan inspeksi dan kontrol kualitas setiap saat.': 'Sophisticated rolling, bending and cutting by skilled workers, with inspection and quality control at all times.',
    'Setelah Produksi': 'After Production',
    'Pengujian dan pengukuran untuk menjaga konsistensi dan performa produk.': 'Testing and measurement to maintain product consistency and performance.',
    'Pengiriman Produk': 'Product Shipment',
    'Pengemasan dan penataan yang tepat agar barang tidak rusak selama perjalanan.': 'Proper packaging and arrangement so goods are not damaged in transit.',
    'Bahan baku:': 'Raw materials:',
    'mitra yang diakui dan dipercaya produsen besi besar di Indonesia.': 'partners recognized and trusted by major iron manufacturers in Indonesia.',
    'Teknologi manufaktur:': 'Manufacturing technology:',
    'investasi terbesar pada infrastruktur modern untuk produksi yang stabil dan konsisten.': 'the largest investment goes to modern infrastructure for stable, consistent production.',
    'Dokumentasi mutu:': 'Quality documentation:',
    'dicatat untuk setiap batch produksi dan pengiriman, dapat ditelusuri hingga asal bahan baku.': 'recorded for every production batch and shipment, traceable to the origin of the raw material.',
    'Tanpa toleransi': 'No tolerance',
    'terhadap kekurangan kualitas; komitmen pada standar industri tertinggi dan perbaikan berkelanjutan.': 'for quality shortfalls; committed to the highest industry standards and continuous improvement.',
    'Bersertifikat ISO 9001': 'ISO 9001 certified',
    'Aplikasi pipa baja Angkasa Raya Steel untuk kebutuhan struktural, teknik, dan arsitektural': 'Angkasa Raya Steel pipe applications for structural, engineering and architectural needs',
    'Rangka Atap & Dinding': 'Roof & Wall Frames',
    'Pipa kotak untuk rangka atap dan rangka dinding bangunan.': 'Square pipes for building roof and wall frames.',
    'Pagar & Tiang': 'Fences & Poles',
    'Konstruksi pagar dan tiang yang kuat dan tahan korosi.': 'Strong, corrosion-resistant fence and pole construction.',
    'Arsitektural': 'Architectural',
    'Kisi dinding, lantai, grip handle, pigura, dan partisi.': 'Wall lattices, flooring, grip handles, frames and partitions.',
    'Pertanian & Kabel': 'Agriculture & Cable',
    'Pipa bulat untuk sektor pertanian dan perlindungan kabel.': 'Round pipes for the agricultural sector and cable protection.',
    'Produk dan proses produksi kami': 'Our products and production process',
    'Seleksi bahan baku': 'Raw material selection',
    'Proses produksi': 'Production process',
    'Pengujian dan pengukuran': 'Testing and measurement',
    'Pengiriman produk': 'Product shipment',
    'Inquiry Kebutuhan Pipa Baja Anda': 'Inquire About Your Steel Pipe Needs',
    'Customer service kami siap membantu Anda. Hubungi hotline / WhatsApp 0857 0664 4595.': 'Our customer service is ready to help. Call the hotline / WhatsApp 0857 0664 4595.',
    'Pabrik Gresik - Surabaya': 'Gresik - Surabaya Factory',
    'Alamat': 'Address',
    'Jalan Raya Manyar KM.11, Desa/Kelurahan Manyarejo, Kec. Manyar, Kab. Gresik, Provinsi Jawa Timur 61122, Indonesia': 'Jalan Raya Manyar KM.11, Manyarejo Village, Manyar District, Gresik Regency, East Java 61122, Indonesia',
    'Buka di Google Maps': 'Open in Google Maps',
    'Telepon / Fax': 'Phone / Fax',
    'Telp:': 'Tel:',
    'Kenali PT. Angkasa Raya Steel lebih dekat': 'Get to know PT. Angkasa Raya Steel',
    'Tonton video company profile PT. Angkasa Raya Steel di YouTube': 'Watch the PT. Angkasa Raya Steel company profile on YouTube',
    'Buka YouTube': 'Open YouTube',
    'Nama': 'Name',
    'Telepon': 'Phone',
    'Kebutuhan Anda': 'Your Needs',
    'Kirim via WhatsApp': 'Send via WhatsApp',
    'Tim kami akan segera menghubungi Anda kembali.': 'Our team will contact you shortly.',
    'Produk Kami': 'Our Products',
    'Jawa Timur': 'East Java',
    'Gresik, Jawa Timur 61122, Indonesia': 'Gresik, East Java 61122, Indonesia',
    'Struktur organisasi PT. Angkasa Raya Steel': 'Organizational structure of PT. Angkasa Raya Steel',
    'Direktur Utama': 'President Director',
    'Pimpinan perusahaan': 'Company leadership',
    'Manager Marketing': 'Marketing Manager',
    'Penjualan & hubungan pelanggan': 'Sales & customer relations',
    'Manager Produksi': 'Production Manager',
    'Operasional pabrik & pengiriman': 'Factory operations & shipment',
    'Manager Quality Control': 'Quality Control Manager',
    'Mutu & sertifikasi ISO 9001': 'Quality & ISO 9001 certification',
    'Manager HRD & Umum': 'HR & General Affairs Manager',
    'Sumber daya manusia & umum': 'Human resources & general affairs',
    'Manager Keuangan': 'Finance Manager',
    'Keuangan & akuntansi': 'Finance & accounting',
    'Jenis pipa, ukuran, ketebalan, jumlah...': 'Pipe type, size, thickness, quantity...'
  };
  var ATTR = ['placeholder', 'alt', 'title'];
  var nodes = [], attrs = [];

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function collect() {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode.nodeName;
        if (p === 'SCRIPT' || p === 'STYLE' || p === 'NOSCRIPT') return NodeFilter.FILTER_REJECT;
        var k = norm(n.nodeValue);
        return EN[k] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = w.nextNode())) nodes.push({ n: n, orig: n.nodeValue, key: norm(n.nodeValue) });
    document.querySelectorAll('[placeholder],[alt],[title]').forEach(function (el) {
      ATTR.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && EN[norm(v)]) attrs.push({ el: el, a: a, orig: v, key: norm(v) });
      });
    });
  }

  function setLang(l) {
    lang = l;
    nodes.forEach(function (o) {
      if (l === 'en') {
        var lead = o.orig.match(/^\s*/)[0], trail = o.orig.match(/\s*$/)[0];
        o.n.nodeValue = lead + EN[o.key] + trail;
      } else { o.n.nodeValue = o.orig; }
    });
    attrs.forEach(function (o) { o.el.setAttribute(o.a, l === 'en' ? EN[o.key] : o.orig); });
    document.documentElement.lang = l;
    document.title = l === 'en' ? EN['PT. Angkasa Raya Steel - Produsen Pipa Baja Bulat & Kotak'] : 'PT. Angkasa Raya Steel - Produsen Pipa Baja Bulat & Kotak';
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === l);
    });
    try { localStorage.setItem('ars-lang', l); } catch (e) {}
  }

  // === WhatsApp ===
  function waOpen(text) {
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
  }

  document.querySelectorAll('.btn-quote').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var prod = b.getAttribute('data-product');
      waOpen(lang === 'en'
        ? 'Hello PT. Angkasa Raya Steel, I would like to request a quote for ' + prod + '.\nSize / thickness / quantity: '
        : 'Halo PT. Angkasa Raya Steel, saya ingin meminta penawaran untuk ' + prod + '.\nUkuran / ketebalan / jumlah: ');
    });
  });

  document.getElementById('inquiry-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (id) { return document.getElementById(id).value; };
    var id = lang !== 'en';
    waOpen((id ? 'Halo PT. Angkasa Raya Steel, saya ingin inquiry pipa baja.\nNama: ' : 'Hello PT. Angkasa Raya Steel, I would like to inquire about steel pipes.\nName: ') + v('name-field') +
      (id ? '\nTelepon: ' : '\nPhone: ') + v('tel-field') +
      '\nEmail: ' + v('email-field') +
      (id ? '\nKebutuhan: ' : '\nNeeds: ') + v('message-field'));
  });

  collect();
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  if (lang === 'en') setLang('en');

})();
