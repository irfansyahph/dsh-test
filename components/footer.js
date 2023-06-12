import Link from 'next/link'
import Image from 'next/image'
import logoWhite from '../public/logo-white.png'
import googleLogo from '../public/googleplay.png'

export default function Footer() {
    return (
        <div>
            <div className='bg-ijofooter' style={{ height: "500px" }}>
                <Image className='ml-60 pt-4 mb-4'
                    src={logoWhite}
                    width={200}
                    alt="Logo"
                />
                <div className='flex ml-60 text-white text-left space-x-10 leading-10' style={{ width: "70%" }}>
                    <ul className='w-1/4'>
                        <li style={{ color: "#FFEC94", fontWeight: "bold" }}>
                            Perusahaan
                        </li>
                        <li>
                            <Link href="#">Tentang eFishery</Link>
                        </li>
                        <li>
                            <Link href="#">Blog</Link>
                        </li>
                        <li>
                            <Link href="#">Hubungi Kami</Link>
                        </li>
                        <li>
                            <Link href="#">Syarat & Ketentuan</Link>
                        </li>
                        <li>
                            <Link href="#">FAQ</Link>
                        </li>
                        <li>
                            <Link href="#">Layanan Pengaduan</Link>
                        </li>
                        <li>
                            <Link href="#">Konsumen</Link>
                        </li>

                    </ul>
                    <ul className='w-1/4'>
                        <li style={{ color: "#FFEC94", fontWeight: "bold" }}>Produk</li>
                        <li>
                            <Link href="#">Solusi Untuk Pembudidaya Ikan</Link>
                        </li>
                        <li>
                            <Link href="#">Solusi Untuk Pembudidaya Udang</Link>
                        </li>
                        <li>
                            <Link href="#">Solusi Untuk Pembeli & Pelanggan</Link>
                        </li>
                    </ul>
                    <ul className='w-1/4'>
                        <li style={{ color: "#FFEC94", fontWeight: "bold" }}>Gabung di eFishery</li>
                        <li>
                            <Link href="#">Karir</Link>
                        </li>
                    </ul>
                    <ul className='w-1/4'>
                        <li style={{ color: "#FFEC94", fontWeight: "bold" }}>eFishery Technoplex</li>
                        <li style={{ fontWeight: "700" }}>PT. Multidaya Teknologi Nusantara</li>
                        <li style={{ fontSize: "small" }}>Jl. Bukit Pakar Timur IV Kav. B1, Ciburial, Kecamatan Cimenyan, Bandung, Jawa Barat, 40198</li>
                        <li style={{ color: "#FFEC94", fontWeight: "bold" }}>Download Our Apps</li>
                        <li>
                            <div className='text-left float-left'>
                                <Link href="#">
                                    <Image
                                        src={googleLogo}
                                        width={180}
                                        alt="Logo"
                                    />
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}