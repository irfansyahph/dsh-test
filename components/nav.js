'use client'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

export default function Nav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className="flex text-center items-center  lg:justify-center sticky top-0 z-50 bg-white mx-auto border-2" style={{ minHeight: "80px", fontSize: "16px" }}>
            <div className="w-1/5">
                <Link href="/">
                    <Image style={{ width: "148.194px", height: "37.0417" }}
                        src={logo}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="w-2/4 ">
                <ul className="flex space-x-10 max-lg:invisible" style={{ width: "912px" }}>
                    <li >
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

            {/* @Media Mobile */}

            {/* <div onClick={handleNav} className='lg:hidden z-10' style={{ position: "fixed", right: 0, padding: 10 }}> */}
            <div onClick={handleNav} className='lg:hidden z-10' style={{ marginLeft: "auto" }}>
                {nav ? (
                    <AiOutlineClose className='text-ijo' size={30} />
                ) : (
                    <AiOutlineMenu className='text-ijo' size={30} />
                )}
            </div>

            <div>
                <div
                    className={
                        nav
                            ? 'lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                            : 'lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
                    }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-ijo'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-ijo'>
                            <Link href='#'>Tentang Kami</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-ijo'>
                            <Link href='#'>Produk</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-ijo'>
                            <Link href='#'>Karir</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-ijo'>
                            <Link href='#'>Blog</Link>
                        </li>
                        <li onClick={handleNav} className='p-4 text-ijo'>
                            <Link href='#'>Hubungi Kami</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
