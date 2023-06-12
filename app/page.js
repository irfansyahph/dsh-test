import Image from 'next/image'
import Link from 'next/link'
import a1 from '../public/a1.png'
import a2 from '../public/a2.png'
import a3 from '../public/a3.png'
import b1 from '../public/b1.png'
import b2 from '../public/b2.png'
import b3 from '../public/b3.png'
import ikan from '../public/ikan.png'
import udang from '../public/udang.png'
import waktu from '../public/waktu.png'
import pakan from '../public/pakan.png'
import akses from '../public/akses.png'
import Section from '../public/Section.png'
import googleLogo from '../public/googleplay.png'

export default function Home() {
  return (
    <main>
      <Image style={{ width: "100%", height: "100%", position: "relative" }}
        src={Section}
      />
      <span className='w-1/2 text-5xl font-black text-white' style={{ margin: 0, position: 'absolute', top: "40%", left: "10%" }}>
        Tumbuh Bersama lebih dari<br />
        <span style={{ color: "#FFEC94", fontWeight: "bold" }}>70.000 </span>Pembudidaya<br />
        dari <span style={{ color: "#FFEC94", fontWeight: "bold" }}>280</span> Kota di Indonesia<br />
        melalui Teknologi
      </span>
      <div style={{ backgroundColor: "black", height: "400px", position: "relative" }}>
        <div className='flex space-x-10 w-4/5 mx-32' style={{ position: 'absolute', top: "10%", fontSize: "20px" }}>
          <div className='w-1/3 flex'>
            <Image
              src={ikan}
              width={200}
              alt="ikan"
            />
            <span className='text-white ml-10'>
              Memfasilitasi<br />
              <span className='text-ijo'>1,105 Triliun</span><br />
              Total Transaksi Penjualan Ikan Tawar
            </span>
          </div>
          <div className='w-1/3 flex'>
            <Image
              src={udang}
              width={200}
              alt="udang"
            />
            <span className='text-white ml-10'>
              Memfasilitasi<br />
              <span className='text-ijo'>1,125 Triliun</span><br />
              Total Transaksi Penjualan Udang
            </span>
          </div>
          <div className='w-1/3 flex'>
            <Image
              src={waktu}
              width={200}
              alt="waktu"
            />
            <span className='text-white ml-10'>
              Mengakselerasi Waktu Panen hingga<br />
              <span className='text-ijo'>74 Hari</span><br />
            </span>
          </div>
        </div>
        <div className='flex space-x-10 w-4/5 ml-80 mt-6' style={{ position: 'absolute', top: "50%", fontSize: "20px" }}>
          <div className='w-1/3 flex'>
            <Image
              src={pakan}
              width={120}
              alt="pakan"
            />
            <span className='text-white ml-10'>
              Memfasilitasi<br />
              <span className='text-ijo'>1,125 Triliun</span><br />
              Total Transaksi Penjualan Udang
            </span>
          </div>
          <div className='w-1/3 flex'>
            <Image
              src={akses}
              width={150}
              alt="akses"
            />
            <span className='text-white ml-10'>
              Memfasilitasi<br />
              <span className='text-ijo'>1,125 Triliun</span><br />
              Total Transaksi Penjualan Udang
            </span>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <div className='text-ijo mb-4 pt-4' style={{ fontWeight: 900, fontSize: "48px" }}>
          Misi Kami
        </div>
        <div className='text-3xl font-bold'>
          Menjembatani Kesenjangan Digital, Memenuhi Kebutuhan Pangan Dunia
        </div>
      </div>
      <div className='flex text-center px-60'>
        <div className='w-1/3 text-2xl font-medium' style={{ height: "500px" }}>
          <Image className='m-auto mt-12'
            src={a1}
            width={300}
            alt="a1"
          />
          Memenuhi Kebutuhan Pangan Dunia melalui Akuakultur
        </div>
        <div className='w-1/3 text-2xl font-medium' style={{ height: "500px" }}>
          <Image className='m-auto mt-12'
            src={a2}
            width={250}
            alt="a1"
          />
          Menyediakan Teknologi Terjangkau
        </div>
        <div className='w-1/3 text-2xl font-medium' style={{ height: "500px" }}>
          <Image className='m-auto mt-12'
            src={a3}
            width={300}
            alt="a1"
          />
          Membangun Ekonomi Digital yang Inklusif
        </div>
      </div>
      <div className='px-56 text-center font-thin mb-6'>
        <div>
          Per tahun 2050, kebutuhan untuk protein hewani akan meningkat hingga 52%. Sayangnya, sekitar 660 juta orang masih akan menghadapi isu kelaparan di tahun 2030. Akuakultur, sebagai sektor bisnis dengan pertumbuhan yang pesat dan penyedia sumber protein hewani dengan konversi pakan paling efisien, memiliki potensi untuk berkontribusi secara signifikan terhadap ketahanan pangan.
          <br />
          eFishery percaya bahwa “The Future is Aquaculture”. Menggunakan kemajuan teknologi, eFishery membangun value chain yang sistematis untuk bisnis budidaya ikan dan udang, menghasilkan ekosistem yang terintegrasi dan berkelanjutan untuk memperkuat ketahanan pangan global di masa mendatang.
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mb-4'>
        <button className='bg-ijo rounded-full px-8 py-4 text-xl text-white flex flex-col items-center justify-center'>Baca Lebih Lanjut</button>
      </div>
      <div className='pt-4 bg-gray-200' style={{ height: "800px" }}>
        <div className='text-4xl text-center mb-24 mt-6'>
          Solusi Kami Untuk Dunia Aquaculture
        </div>
        <div className='flex mb-3 mt-4 text-center px-60'>
          <div className='w-1/3 bg-white pt-4 text-left px-4 mx-4' style={{ height: "600px", borderRadius: "60px", position: "relative" }}>
            <Image className='m-auto' style={{ marginTop: "-100px" }}
              src={b1}
              width={300}
              height={200}
              alt="b1"
            />
            <div className='text-4xl text-ijo mb-2 font-bold'>
              eFisheryku
            </div>
            <div className='text-2xl mb-4'>
              Solusi untuk<br />
              Pembudidaya Ikan
            </div>
            <div className='text-md'>
              Layanan lengkap, dari hulu ke hilir untuk Pembudidaya ikan. Rasakan kemudahan transaksi pakan, akses ke institusi finansial yang terdaftar dan diawasi OJK, platform penjualan hasil panen ikan yang menguntungkan. Semua tersedia untuk memajukan bisnis Pembudidaya!
            </div>
            <div className='flex justify-between mb-6 ' style={{ position: "absolute", bottom: 0, width: "90%" }} >
              <button className='bg-ijo rounded-full px-2 text-xs text-white flex flex-col items-center justify-center'>Cari Tahu Lebih Lanjut</button>
              <Link href="#">
                <Image
                  src={googleLogo}
                  width={125}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className='w-1/3 bg-white pt-4 text-left px-4 mr-4' style={{ height: "600px", borderRadius: "60px", position: "relative" }}>
            <Image className='m-auto' style={{ marginTop: "-100px" }}
              src={b2}
              width={260}
              height={200}
              alt="b2"
            />
            <div className='text-4xl text-ijo mb-2 font-bold'>
              eFarm
            </div>
            <div className='text-2xl mb-4'>
              Solusi untuk<br />
              Pembudidaya Udang
            </div>
            <div className='text-md'>
              Ekosistem budidaya udang terpadu meliputi pencegahan penyakit dan wabah, manajemen kualitas air tambak, dan perekomendasian produk-produk SaProTam terbaik untuk Pembudidaya Udang. Solusi ini meningkatkan produktivitas dan keberhasilan budidaya udang secara efektif melalui teknologi.
            </div>
            <div className='flex justify-between mb-6 ' style={{ position: "absolute", bottom: 0, width: "90%" }} >
              <button className='bg-ijo rounded-full px-2 text-xs text-white flex flex-col items-center justify-center'>Cari Tahu Lebih Lanjut</button>
              <Link href="#">
                <Image
                  src={googleLogo}
                  width={125}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className='w-1/3 bg-white pt-4 text-left px-4' style={{ height: "600px", borderRadius: "60px", position: "relative" }}>
            <Image className='m-auto' style={{ marginTop: "-100px" }}
              src={b3}
              width={260}
              height={200}
              alt="b3"
            />
            <div className='text-4xl text-ijo mb-2 font-bold'>
              eFresh
            </div>
            <div className='text-2xl mb-4'>
              Solusi untuk<br />
              Pembeli & Konsumen
            </div>
            <div className='text-md'>
              Memastikan ikan berkualitas terbaik dapat dinikmati di seluruh penjuru negeri dengan mendistribusikan hasil panen Pembudidaya dalam bentuk hidup, segar, dan beku.
            </div>
            <div className='flex justify-between mb-6 ' style={{ position: "absolute", bottom: 0, width: "90%" }} >
              <button className='bg-ijo rounded-full px-2 text-xs text-white flex flex-col items-center justify-center'>Cari Tahu Lebih Lanjut</button>
              <Link href="#">
                <Image
                  src={googleLogo}
                  width={125}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
