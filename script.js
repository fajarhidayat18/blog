const dataArticle = [
  {
    id: 1,
    badge: "materi",
    judul: "Pentingnya Membangun Logika dalam Pemrograman",
    overview:
      "Sebagai seorang junior di dunia pemrograman, memahami dan membangun logika adalah pondasi yang tak ternilai. ",
    content: `Sebagai seorang junior di dunia pemrograman, memahami dan membangun logika adalah pondasi yang tak ternilai. Logika membentuk kerangka kerja pikiran dalam menyelesaikan masalah dengan cara yang terstruktur dan efisien. Mulailah dengan konsep sederhana, pelajari algoritma, dan terus tingkatkan kemampuan analitis dalam menyelesaikan permasalahan. Melalui latihan dan eksplorasi, kemampuan untuk menguraikan masalah menjadi langkah-langkah terperinci akan semakin terasah, membantu Anda menjadi programmer yang lebih handal.`,
  },
  {
    id: 2,
    badge: "materi",
    judul: "Mengelola Kode dengan Baik: Pentingnya Konsistensi dan Komentar",
    overview:
      "Mengelola kode dengan baik adalah keterampilan yang penting dalam dunia pemrograman.",
    content: `Mengelola kode dengan baik adalah keterampilan yang penting dalam dunia pemrograman. Bagi seorang junior, mengadopsi praktik-praktik terbaik seperti memberi nama variabel yang deskriptif, membuat struktur kode yang konsisten, dan menambahkan komentar yang jelas akan membantu tidak hanya Anda, tapi juga rekan-rekan pengembang untuk memahami proyek dengan lebih baik. Konsistensi dalam gaya penulisan dan penamaan kode akan memudahkan proses kolaborasi dan pemeliharaan kode, sementara komentar yang informatif akan mempercepat pemahaman bagi pembaca yang mungkin melihat kode Anda.`,
  },
  {
    id: 3,
    badge: "materi",
    judul: "Menjelajahi Dunia Mobile Development: Mobile Apps dengan Flutter",
    overview:
      "Bagi para pemula yang tertarik dalam pengembangan aplikasi mobile, Flutter dari Google memberikan platform yang menarik untuk dijelajahi.",
    content: `Bagi para pemula yang tertarik dalam pengembangan aplikasi mobile, Flutter dari Google memberikan platform yang menarik untuk dijelajahi. Dengan menggunakan bahasa pemrograman Dart, Flutter memungkinkan Anda untuk membuat aplikasi yang dapat berjalan pada Android dan iOS dengan antarmuka yang indah dan performa yang baik. Melalui pembelajaran yang terarah dan eksperimen langsung dengan Flutter, Anda dapat memperluas wawasan Anda dalam pengembangan aplikasi mobile yang modern.`,
  },
  {
    id: 4,
    badge: "materi",
    judul: "Memahami Asas Web Development: HTML, CSS, dan JavaScript",
    overview:
      "Artikel ini ditujukan untuk junior yang ingin memahami fondasi utama dalam pengembangan web.",
    content: `Artikel ini ditujukan untuk junior yang ingin memahami fondasi utama dalam pengembangan web. HTML sebagai tulang punggung struktur, CSS untuk estetika, dan JavaScript sebagai mesin penggerak interaktivitas, merupakan dasar yang tak terpisahkan. Mulailah dengan pemahaman dasar, belajar struktur HTML, tata letak CSS, dan logika JavaScript. Pahami cara ketiganya berinteraksi untuk membuat halaman web yang dinamis dan responsif. Pengertian yang kuat terhadap konsep ini akan menjadi landasan yang kokoh dalam perjalanan Anda sebagai seorang pengembang web.`,
  },
  {
    id: 5,
    badge: "materi",
    judul: "Exploring the World of Data Science and Python",
    overview:
      "Bagi seorang junior yang tertarik pada analisis data, Python merupakan alat yang sangat kuat dalam memasuki bidang ilmu data.",
    content: `Bagi seorang junior yang tertarik pada analisis data, Python merupakan alat yang sangat kuat dalam memasuki bidang ilmu data. Python menyediakan beragam pustaka seperti Pandas, NumPy, dan Matplotlib yang memungkinkan Anda untuk memproses data, menganalisis tren, dan menghasilkan visualisasi yang memukau. Memahami dasar-dasar Python dan kemampuan untuk menerapkannya dalam konteks data science akan membuka pintu bagi Anda untuk menjelajahi dunia analisis data yang menarik.`,
  },
];

document
  .querySelector(".nav-search")
  .addEventListener("click", function search() {
    const object = document.querySelector(".header-item");
    object.style.width = "fit-content";
  });

document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
});

dataArticle.forEach((data) => {
  document.querySelector(".article").innerHTML += `
              <article class="card article-content" id="artikel-${data.id}">
                  <img src="assets/img/code-monitor.avif" alt="" srcset="" />
                  <div class="card-body">
                    <span class="badge-blog text-sm">Materi</span>
                    <h4 class="text-lg">
                      ${data.judul}
                    </h4>
                    <p class="text-sm">
                      ${data.overview}
                    </p>
                  </div>
                </article>
              `;
});
document
  .querySelector(".button-show-profile")
  .addEventListener("click", function () {
    const profileContainer = document.querySelector(".profile-container");
    if (!profileContainer.classList.contains("show")) {
      profileContainer.classList.add("show");
      document.body.style.overflow = "hidden";
    } else {
      profileContainer.classList.add("unshow");
      profileContainer.classList.remove("show");
      setTimeout(function () {
        profileContainer.classList.remove("unshow");
      }, 100);
    }
  });
