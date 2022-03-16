-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Inang: 127.0.0.1
-- Waktu pembuatan: 16 Des 2021 pada 10.05
-- Versi Server: 5.5.32
-- Versi PHP: 5.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Basis data: `janjijiwamail`
--
CREATE DATABASE IF NOT EXISTS `janjijiwamail` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `janjijiwamail`;

-- --------------------------------------------------------

--
-- Struktur dari tabel `action_janji`
--

CREATE TABLE IF NOT EXISTS `action_janji` (
  `email` varchar(100) NOT NULL,
  `idmessage` int(11) NOT NULL,
  `read` tinyint(1) DEFAULT NULL,
  `starred` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`email`,`idmessage`),
  KEY `fk_users_has_message_message1_idx` (`idmessage`),
  KEY `fk_users_has_message_users1_idx` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `action_janji`
--

INSERT INTO `action_janji` (`email`, `idmessage`, `read`, `starred`) VALUES
('bella@gmail.com', 1, 0, 0),
('bella@gmail.com', 2, 1, 1),
('bella@gmail.com', 3, 1, 0),
('bella@gmail.com', 12, 1, 0),
('bella@gmail.com', 15, 0, 0),
('jeremiagiven@gmail.com', 7, 1, 0),
('jeremiagiven@gmail.com', 8, 1, 0),
('jeremiagiven@gmail.com', 9, 1, 0),
('jeremiagiven@gmail.com', 10, 1, 0),
('jeremiagiven@gmail.com', 11, 1, 0),
('jeremiagiven@gmail.com', 14, 1, 0),
('salsa@gmail.com', 4, 0, 1),
('salsa@gmail.com', 5, 0, 0),
('salsa@gmail.com', 6, 1, 1),
('salsa@gmail.com', 13, 0, 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `message_janji`
--

CREATE TABLE IF NOT EXISTS `message_janji` (
  `idmessage` int(11) NOT NULL AUTO_INCREMENT,
  `email_pengirim` varchar(100) NOT NULL,
  `email_penerima` varchar(100) NOT NULL,
  `subject` varchar(100) DEFAULT NULL,
  `message` longtext,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`idmessage`),
  KEY `fk_users_has_users_users1_idx` (`email_penerima`),
  KEY `fk_users_has_users_users_idx` (`email_pengirim`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Dumping data untuk tabel `message_janji`
--

INSERT INTO `message_janji` (`idmessage`, `email_pengirim`, `email_penerima`, `subject`, `message`, `time`) VALUES
(1, 'bella@gmail.com', 'irvan45@gmail.com', 'Kerja Kelompok', 'Halo kapan kerja kelompok? Tolong email aku ya', '2021-12-16 00:28:32'),
(2, 'bella@gmail.com', 'jeremiagiven@gmail.com', 'Tugas Hybrid Mobile Programming', 'halo given. Ini progress tugas hybrid nya ya', '2021-12-16 04:30:12'),
(3, 'bella@gmail.com', 'salsa@gmail.com', 'Liburan di Semarang', 'Untuk Temanku Salsa,\r\ndi Jakarta\r\nAssalamualaikum,\r\nSalam kangen teman,\r\nHai Salsa, gimana kabarmu sekarang? Mudah-mudahan kamu dalam kondisi sehat serta baik-baik ya temanku. Saya kangen banget sama kamu.\r\nOh iya Salsa, saya mau cerita nih. Kebetulan saat menuliskan pesan ini saya lagi liburan ke Semarang bersama sahabat kuliahku. Saya mau kita nanti dapat liburan bersama serta membuat kenangan bersama yang tidak terlupakan seumur hidup ya.\r\nOh ya temanku, saya mau memberitahu bahwa ini merupakan awal kalinya saya mendatangi Semarang yang populer dengan wisata alamnya. Terdapat banyak tempat yang saya kunjungi. Semarang memanglah jadi tempat yang sangat indah buat liburan. Terlebih buat kita yang terbiasa hidup di kota besar. Saya ke wisata alam Batu, di sana sangat dingin loh. Kita juga berfoto-foto di berbagai tempat terkenal di sana.', '2021-12-14 17:32:01'),
(4, 'salsa@gmail.com', 'jeremiagiven@gmail.com', 'Cara masak mie instant', '1. Siapkan panci untuk merebus mie instan\r\n\r\n2. Masukan air ke dalam panci secukupnya\r\n\r\n3. Nyalakan kompor lalu rebus air sampai mendidih\r\n\r\n4. Buka bungkus mie instan dan pisahkan bumbu dengan mie, lalu buka bumbunya \r\n\r\n5. Setelah itu masukan mie kedalam panci yang sudah berisi air mendidih \r\n\r\n6. Tunggu mie selama 5 menit \r\n\r\n7. Setelah mie sudah matang, tuangkan mie ke dalam piring/mangkuk yang sudah kita siapkan terlebih                                                                       dahulu\r\n\r\n8. Aduk mie agar merata dengan bumbu \r\n\r\n9. Selesai mie siap disajikan/dimakan\r\n\r\nNah itu tadi adalah cara memasak mie instan semoga bermanfaat:)', '2021-12-20 00:11:45'),
(5, 'salsa@gmail.com', 'jeremiagiven@gmail.com', 'Dear Sahabatku', 'Halo kamu sahabatku, apa kabar kamu hari ini?\r\n\r\nDi sini aku memikirkanmu, aku ingin menuliskan surat ini untukmu sahabatku.\r\nSejak pertama kita bertemu, aku tidak ingat persisnya bagaimana kita bisa bersama tetapi aku bersyukur sekali memilikimu dalam hidupmu.\r\n\r\nBerjalan bersama, mengukir cerita-cerita persahabatan indah yang lengkap dari cerita kesal,sedih, marah, bahagia, bangga, dan rindu.\r\n\r\nKamu sahabatku yang selalu ada saat aku membutuhkan kasih sayang dan benuk perhatian tulus. Aku beruntung karena kamu selalu ada untukku bahkan untuk mendengarkan cerita-cerita yang mungkin hanya membuatmu lelah. Tetapi perhatianmu mengalahkan segala rasa sedih yang ada.\r\n\r\nMungkin kamu dikirim oleh Tuhan untuk melengkapi kisah hidupku.', '2021-12-14 17:34:25'),
(6, 'salsa@gmail.com', 'bella@gmail.com', 'Puisi Aku', 'malam ini aku pusing sekali\r\nibu guru memberiku tugas\r\ntugasnya membuat sebuah puisi\r\ntugas ini susah sekali\r\n\r\naku bingung apa yang akan ku tulis\r\ndi atas kertas ibi\r\nkepalaku....\r\npikiranku....\r\naku sungguh jadi pusing\r\nwahai pusing, menjauhlah dari kepalaku', '2021-12-15 16:35:34'),
(7, 'jeremiagiven@gmail.com', 'bella@gmail.com', 'Hei!', 'Ada kepompong ada kupu Bales dong SMS dari aku', '2021-12-24 10:48:16'),
(8, 'jeremiagiven@gmail.com', 'irvan45@gmail.com', 'Penawaran Produk Elektronik', 'Dengan hormat,\r\n\r\nMengingat produk terbaru dari perusahaan kami telah dirilis, maka kami menghargai saudara sebagai pelanggan loyal kami yang berhak menerima penawaran pertama dari perusahaan kami. Dengan demikian, kerjasama bisnis kita dapat terjalin dengan baik.\r\n\r\nGuna informasi yang lebih lengkap, berikut ini kami memberikan beberapa poin penting terkait informasi yang dibutuhkan, terkait penawaran menarik dari kami, yaitu:\r\n\r\n1.Rincian harga beserta nama dan jenis produk yang kami lampirkan bersama dengan surat ini. Adapun harga yang kami berikan sudah termasuk ongkos kirim kepada toko Anda.\r\n2.Sebagai mitra bisnis terbaik, kami memberikan penawaran menarik kepada Anda dengan membeli barang secara kredit pada kami. Adapun untuk pembayaran uang muka, cukup membayar 50% dari total pembayaran, dengan pelunasan/30.\r\n3.Kami akan selalu memberikan penghargaan kepada pelanggan loyal seperti Anda,dengan memberikan diskon pelanggan sebesar 10% dari total pembelian, berlaku kelipatan.\r\n\r\nJangan lewatkan penawaran menarik dari kami, yang khusus dipersembahkan untuk Anda sebagai pelanggan loyal kami. Kami berharap besar, Anda tertarik dengan penawaran kami dan bisa berlanjut pada hubungan bisnis yang baik. Apabila Anda memerlukan informasi lebih lanjut terkait penawaran kami, silahkan datang ke kantor kami di Jl. Pangeran Diponegoro No. 47 Malang.', '2021-12-14 17:50:56'),
(9, 'jeremiagiven@gmail.com', 'bella@gmail.com', 'Promosi Jabatan Sementara', 'Menimbang: Dalam rangka menindaklanjuti Surat Permohonan Cuti Melahirkan oleh Supervisor General Affair atas nama Farida, maka diperlukan pengganti sementara untuk melaksanakan tugas beliau\r\n\r\nMengingat:\r\n1. Adanya posisi jabatan yang diperlukan perusahaan\r\n2. Sistem dan manajemen perusahaan\r\n\r\nMenetapkan: Karyawan di bawah ini:\r\n\r\nNama: Ilham Dimas\r\nNomor Induk: 112233\r\nJabatan: Staf General Affair\r\nDepartemen: General Affair\r\n\r\nDipromosikan dengan posisi sementara berikut ini:\r\nJabatan: Supervisor General Affair\r\nDepartemen: General Affair\r\n\r\nEfektif tanggal: 1 April – 1 Juli 2021\r\n\r\nDemikian keputusan ini dibuat untuk dilaksanakan dengan baik dan dapat ditinjau kembali jika diperlukan.\r\n\r\nSurabaya, 20 Maret 2021', '2021-12-14 17:52:06'),
(10, 'jeremiagiven@gmail.com', 'salsa@gmail.com', 'Cara masak air', 'Cara Memasak Air dengan Benar dan Singkat\r\nTuangkan air bersih ke dalam panci.\r\nLetakkan panci diatas kompor.\r\nNyalakan kompor dengan api yang tidak terlalu besar.\r\nTunggu hingga air mendidih.\r\nMatikan kompornya.\r\nSaringlah air tersebut untuk memisahkan zat kapur dalam air matang tersebut.', '2021-12-29 03:49:39'),
(11, 'jeremiagiven@gmail.com', 'salsa@gmail.com', 'SURAT KEPUTUSAN GENERAL MANAGER PT XYZ', 'Menimbang:\r\n1. Sebagai bentuk apresiasi perusahaan kepada karyawan untuk menunjang kinerja yang efisien dan efektif\r\n2. Karyawan tersebut telah berprestasi dan mengabdikan diri kepada perusahaan\r\n\r\nMengingat:\r\n1. Kebijakan perusahaan yang berlaku\r\n2. Sistem manajemen perusahaan terhadap kebutuhan untuk menunjang produktivitas\r\n\r\nMEMUTUSKAN\r\nMenetapkan:\r\n\r\n1. Mengangkat:\r\nNama: Ahmadi Rahman\r\nNomor Induk: 13598\r\nJabatan Lama: Supervisor HRD\r\nUnit Kerja: Kantor Cabang Pasuruan PT XYZ\r\n\r\nMenjadi:\r\nJabatan Baru: Manager HRGA\r\nUnit Kerja: Kantor Pusat PT XYZ Surabaya\r\n\r\n2. Bersamaan dengan diangkatnya yang bersangkutan ke jabatan yang baru, menginstruksikan kepada karyawan tersebut untuk segera mengatur tugas dan pekerjaan yang termasuk dalam bidang tugasnya selambat-lambatnya 2 (dua) bulan sejak dikeluarkannya surat keputusan ini agar dapat menempati jabatannya secara penuh.\r\n\r\n3. Keputusan ini berlaku mulai tanggal 5 Mei 2021.\r\n\r\nDemikian keputusan ini dibuat dan apabila terdapat kekeliruan dalam keputusan ini, maka akan dilakukan peninjauan dan perbaikan sebagaimana mestinya.\r\n\r\nSurabaya, 5 Mei 2021', '2021-12-14 17:52:59'),
(12, 'bella@gmail.com', 'salsa@gmail.com', 'SELAMAT', 'Plgn YTH Selamat setelah diundi Telkomsel kemarin, simCARD Anda mendapatkan hadiah Rp 75 juta (belum dipotong pajak). Pin Anda 276C353. Untuk info lebih lanjut klik www.undiantelkomsel57.webs.com', '2021-12-24 07:55:47'),
(13, 'salsa@gmail.com', 'bella@gmail.com', 'Internal Web Designer', 'Dengan hormat,\r\nSesuai dengan informasi yang ada pada website bahwa PT. Buana Baru sedang membutuhkan tenaga kerja sebagai Web Designer, maka saya yang bertanda tangan di bawah ini:\r\n\r\n\r\nNama : Mikhaela Arumi\r\nAlamat : Kepanjen 113\r\nTempat, Tanggal Lahir : Solo, 29-04-1990\r\nPendidikan : S1 Ilmu Komunikasi\r\n\r\nBermaksud untuk mengisi lowongan pada pekerjaan tersebut.\r\nBersama dengan surat ini saya juga melampirkan daftar riwayat hidup dan data pendukung lainnya sebagai bahan pertimbangan Bapak/Ibu ke dalam bentuk attachment yang bisa diunduh.\r\n\r\nBesar harapan saya untuk menghadiri panggilan tes dan wawancara untuk menjelaskan lebih mendalam mengenai data diri saya.\r\n\r\nAtas perhatian Bapak/Ibu, saya mengucapkan terima kasih.', '2021-12-14 17:58:00'),
(14, 'jeremiagiven@gmail.com', 'bella@gmail.com', 'Tugas Hybrid Mobile Programming', 'Hallo Ini Balasaanya ya', '2021-12-15 17:12:43'),
(15, 'bella@gmail.com', 'salsa@gmail.com', 'Puisi Aku', 'Hallo Bagus Ya Puisinya', '2021-12-16 12:20:22');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users_janji`
--

CREATE TABLE IF NOT EXISTS `users_janji` (
  `email` varchar(100) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data untuk tabel `users_janji`
--

INSERT INTO `users_janji` (`email`, `password`, `nama`, `birthday`, `address`) VALUES
('bella@gmail.com', '123', 'metaa alert', '1999-06-01', 'huehemuehe'),
('irvan45@gmail.com', '123', 'coka', '2021-11-19', '123'),
('jeremiagiven@gmail.com', '123456789aw', 'Given Jeremia', '2021-11-10', 'Jl Mojo Kidul Blok B/34'),
('salsa@gmail.com', '123', 'salsa', '2021-11-13', '123');

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `action_janji`
--
ALTER TABLE `action_janji`
  ADD CONSTRAINT `fk_users_has_message_message1` FOREIGN KEY (`idmessage`) REFERENCES `message_janji` (`idmessage`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_message_users1` FOREIGN KEY (`email`) REFERENCES `users_janji` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `message_janji`
--
ALTER TABLE `message_janji`
  ADD CONSTRAINT `fk_users_has_users_users` FOREIGN KEY (`email_pengirim`) REFERENCES `users_janji` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_users_users1` FOREIGN KEY (`email_penerima`) REFERENCES `users_janji` (`email`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
