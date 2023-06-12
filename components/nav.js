import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'

export default function Nav() {
    return (
        <div className="flex text-center items-center justify-center sticky top-0 z-50 bg-white" style={{ height: "80px" }}>
            <div className="w-1/4 text-left">
                <Link href="/">
                    <Image
                        src={logo}
                        width={150}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="w-2/4">
                <ul className="flex space-x-10">
                    <li>
                        <Link className="text-ijo hover:text-slate-950" href="#">Home</Link>
                    </li>
                    <li>
                        <Link className="text-ijo hover:text-slate-950" href="#">Tentang Kami</Link>
                    </li>
                    <li>
                        <Link className="text-ijo hover:text-slate-950" href="#">Produk</Link>
                    </li>
                    <li>
                        <Link className="text-ijo hover:text-slate-950" href="#">Karir</Link>
                    </li>
                    <li>
                        <Link className="text-ijo hover:text-slate-950" href="#">Blog</Link>
                    </li>
                    <li>
                        <Link className="text-ijo hover:text-slate-950" href="#">Hubungi Kami</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
