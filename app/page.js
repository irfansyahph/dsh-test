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
import googleLogo from '../public/googleplay.png'
import headerImage from '../public/Header-Image.jpg'
import efisheryku from '../public/efisheryku-logo.png'
import efarm from '../public/efarm-logo.png'
import efresh from '../public/efresh-logo.png'

export default function Home() {
  return (
    <main>
      {/* <Image style={{ width: "100%", height: "100%", position: "relative" }}
        src={headerImage}
      /> */}
      <div style={{
        backgroundImage: `url(${headerImage.src})`,
        width: "100%",
        height: "780px",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: "center center",
        padding: "80px 0px 200px 0px"
      }}>
        <div style={{ display: "flex", minHeight: "500px", alignItems: "center", maxWidth: "1140px", marginLeft: "auto", marginRight: "auto" }}>
          <span className='text-white header' style={{ fontSize: "41px", fontWeight: 800, lineHeight: "54.96px" }} >
            Tumbuh Bersama lebih dari<br />
            <span style={{ color: "#FFEC94" }}>70.000 </span>Pembudidaya<br />
            dari <span style={{ color: "#FFEC94" }}>280</span> Kota di Indonesia<br />
            melalui Teknologi
          </span>
        </div>
        <div className='bg-gradient-to-b from-transparent to-black text' style={{ height: "167.2px", position: "relative" }}>
          <div className='flex space-x-10 w-4/5 mx-32' style={{ position: 'absolute', fontSize: "20px" }}>
            <div className='w-1/3 flex '>
              <Image style={{ width: "91px", height: "91px" }}
                src={ikan}
                alt="ikan"
              />
              <span className='text-white ml-10 leading-[36px]'>
                Memfasilitasi<br />
                <span className='text-ijo font-[700] text-[24px]'>1,105 Triliun Rupiah</span><br />
                Total Transaksi Penjualan Ikan Tawar
              </span>
            </div>
            <div className='w-1/3 flex '>
              <Image style={{ width: "91px", height: "91px" }}
                src={udang}
                width={200}
                alt="udang"
              />
              <span className='text-white ml-10'>
                Memfasilitasi<br />
                <span className='text-ijo font-[700] text-[24px]'>1,125 Triliun Rupiah</span><br />
                Total Transaksi Penjualan Udang
              </span>
            </div>
            <div className='w-1/3 flex'>
              <Image style={{ width: "78px", height: "78px" }}
                src={waktu}
                width={200}
                alt="waktu"
              />
              <span className='text-white ml-10'>
                Mengakselerasi Waktu Panen hingga<br />
                <span className='text-ijo font-[700] text-[24px]'>74 Hari</span><br />
              </span>
            </div>
          </div>
        </div>
        <div className='bg-black' style={{ height: "199.2px" }}>
          <div className='flex space-x-10 w-4/5 ml-48 justify-center items-center mt-6' style={{ position: 'absolute', top: "95%", fontSize: "20px" }}>
            <div className='w-1/3 flex'>
              <Image style={{ width: "86px", height: "94px" }}
                src={pakan}
                width={120}
                alt="pakan"
              />
              <span className='text-white ml-10'>
                Memfasilitasi<br />
                <span className='text-ijo font-[700] text-[24px]'>1,99 Triliun Rupiah</span><br />
                Total Transaksi Penjualan Pakan Ikan dan Udang
              </span>
            </div>
            <div className='w-1/3 flex'>
              <Image style={{ width: "94px", height: "94px" }}
                src={akses}
                width={150}
                alt="akses"
              />
              <span className='text-white ml-10'>
                Memfasilitasi<br />
                <span className='text-ijo font-[700] text-[24px]'>15.000</span><br />
                Pembudidaya ke Institusi Finansial, Terdaftar dan Diawasi OJK
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center mt-40'>
        <div className='text-ijo mb-4 pt-4 header' style={{ fontWeight: 900, fontSize: "48px" }}>
          Misi Kami
        </div>
        <div className='header' style={{ fontWeight: 600, color: "#424242", fontSize: "28px", lineHeight: "36px", display: "inline" }}>
          Menjembatani Kesenjangan Digital, Memenuhi Kebutuhan Pangan Dunia
        </div>
      </div>

      <div className='flex text-center gap-3' style={{ height: "530px", maxWidth: "1140px", marginRight: "auto", marginLeft: "auto" }}>
        <div className='w-1/3' style={{ height: "509px", width: "380px", padding: "10px 10px 10px 10px", minHeight: "auto", minWidth: "auto" }}>
          <Image className='m-auto mt-12' style={{ width: "324px", height: "335px", maxWidth: "100%" }}
            src={a1}
            alt="a1"
          />
          <div className='header' style={{ height: "108px", width: "360px", margin: "0 0 16px 0", fontSize: "28px", display: "block", fontWeight: "600", color: "#424242", lineHeight: "36px" }}>
            Memenuhi Kebutuhan Pangan Dunia melalui Akuakultur
          </div>
        </div>
        <div className='w-1/3' style={{ height: "509px", width: "380px", padding: "10px 10px 10px 10px", minHeight: "auto", minWidth: "auto" }}>
          <Image className='m-auto mt-12' style={{ width: "290px", height: "357px", maxWidth: "100%" }}
            src={a2}
            alt="a2"
          />
          <div className='header' style={{ height: "108px", width: "360px", margin: "0 0 16px 0", fontSize: "28px", display: "block", fontWeight: "600", color: "#424242", lineHeight: "36px" }}>
            Menyediakan Teknologi Terjangkau
          </div>
        </div>
        <div className='w-1/3' style={{ height: "509px", width: "380px", padding: "10px 10px 10px 10px", minHeight: "auto", minWidth: "auto" }}>
          <Image className='m-auto mt-12' style={{ width: "360px", height: "371.712px", maxWidth: "100%" }}
            src={a3}
            width={300}
            alt="a3"
          />
          <div className='header' style={{ height: "108px", width: "360px", margin: "0 0 16px 0", fontSize: "28px", display: "block", fontWeight: "600", color: "#424242", lineHeight: "36px" }}>
            Membangun Ekonomi Digital yang Inklusif
          </div>
        </div>
      </div>

      <div className='w-full relative'>
        <div style={{ width: "1140px", marginLeft: "auto", marginRight: "auto" }} >
          <p className='text-center mb-6' style={{ color: "#424242", lineHeight: "36px", fontWeight: 100 }}>
            Per tahun 2050, kebutuhan untuk protein hewani akan meningkat hingga 52%. Sayangnya, sekitar 660 juta orang masih akan menghadapi isu kelaparan di tahun 2030. Akuakultur, sebagai sektor bisnis dengan pertumbuhan yang pesat dan penyedia sumber protein hewani dengan konversi pakan paling efisien, memiliki potensi untuk berkontribusi secara signifikan terhadap ketahanan pangan.
          </p>
          <p className='text-center mb-6' style={{ color: "#424242", lineHeight: "36px", fontWeight: 100 }}>
            eFishery percaya bahwa “The Future is Aquaculture”. Menggunakan kemajuan teknologi, eFishery membangun value chain yang sistematis untuk bisnis budidaya ikan dan udang, menghasilkan ekosistem yang terintegrasi dan berkelanjutan untuk memperkuat ketahanan pangan global di masa mendatang.
          </p>
        </div>
      </div>
      <div style={{ height: "108px" }}>
        <div className='flex items-center justify-center mb-4' >
          <button className='bg-ijo rounded-full px-8 py-4 text-xl text-white flex flex-col items-center justify-center' style={{ height: "70px", width: "265.125px" }} >Baca Lebih Lanjut</button>
        </div>
      </div>

      <div className='pt-4' style={{ height: "800px", backgroundColor: "#EDEDEF" }}>
        <div className='text-center mb-24 sora' style={{ fontSize: "48px" }}>
          Solusi Kami Untuk Dunia Aquaculture
        </div>
        <div className='flex mb-3 mt-4 text-center px-60'>
          <div className='w-1/3 bg-white pt-4 text-left px-4 mx-5' style={{ height: "600px", borderRadius: "60px", position: "relative" }}>
            <Image className='m-auto' style={{ marginTop: "-100px" }}
              src={b1}
              width={400}
              alt="b1"
            />
            <div className='mb-2 mt-6'>
              <Image style={{ height: "44px" }}
                src={efisheryku}
                alt="efisheryku"
              />
            </div>
            <span className='text-[21px] sora'>
              <span className='font-thin'>
                Solusi untuk<br />
              </span>
              Pembudidaya Ikan
            </span>
            <div className='text-md mt-2 text-[#424242]'>
              Layanan lengkap, dari hulu ke hilir untuk Pembudidaya ikan. Rasakan kemudahan transaksi pakan, akses ke institusi finansial yang terdaftar dan diawasi OJK, platform penjualan hasil panen ikan yang menguntungkan. Semua tersedia untuk memajukan bisnis Pembudidaya!
            </div>
            <div className='flex justify-between mb-6 ' style={{ position: "absolute", bottom: 0, width: "90%" }} >
              <button className='bg-ijo rounded-full px-2 text-[13px] text-white flex flex-col items-center justify-center leading-[13px]'>Cari Tahu Lebih Lanjut</button>
              <Link href="#">
                <Image
                  src={googleLogo}
                  width={125}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className='w-1/3 bg-white pt-4 text-left px-4 mx-5' style={{ height: "600px", borderRadius: "60px", position: "relative" }}>
            <Image className='m-auto' style={{ marginTop: "-100px" }}
              src={b2}
              width={260}
              height={200}
              alt="b2"
            />
            <div className='mb-2 mt-2'>
              <Image style={{ height: "35px" }}
                src={efarm}
                alt="efarm"
              />
            </div>
            <span className='text-[21px] sora'>
              <span className='font-thin'>
                Solusi untuk<br />
              </span>
              Pembudidaya Udang
            </span>
            <div className='text-md mt-2 text-[#424242]'>
              Ekosistem budidaya udang terpadu meliputi pencegahan penyakit dan wabah, manajemen kualitas air tambak, dan perekomendasian produk-produk SaProTam terbaik untuk Pembudidaya Udang. Solusi ini meningkatkan produktivitas dan keberhasilan budidaya udang secara efektif melalui teknologi.
            </div>
            <div className='flex justify-between mb-6 ' style={{ position: "absolute", bottom: 0, width: "90%" }} >
              <button className='bg-ijo rounded-full px-2 text-[13px] text-white flex flex-col items-center justify-center leading-[13px]'>Cari Tahu Lebih Lanjut</button>
              <Link href="#">
                <Image
                  src={googleLogo}
                  width={125}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className='w-1/3 bg-white pt-4 text-left px-4 mx-5' style={{ height: "600px", borderRadius: "60px", position: "relative" }}>
            <Image className='m-auto' style={{ marginTop: "-110px" }}
              src={b3}
              width={250}
              height={200}
              alt="b3"
            />
            <div className='mb-2 mt-2'>
              <Image style={{ height: "35px" }}
                src={efresh}
                alt="efresh"
              />
            </div>
            <span className='text-[21px] sora'>
              <span className='font-thin'>
                Solusi untuk<br />
              </span>
              Pembeli & Konsumen
            </span>
            <div className='text-md mt-2 text-[#424242]'>
              Memastikan ikan berkualitas terbaik dapat dinikmati di seluruh penjuru negeri dengan mendistribusikan hasil panen Pembudidaya dalam bentuk hidup, segar, dan beku.
            </div>
            <div className='flex justify-between mb-6' style={{ position: "absolute", bottom: 0, width: "90%" }} >
              <button className='bg-ijo rounded-full px-2 text-[13px] text-white flex flex-col items-center justify-center leading-[13px]'>
                Cari Tahu Lebih Lanjut
              </button>
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
