'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classnames from "classnames";

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const currentPath = usePathname();
    const breakpoint = 650;
    const links = [
        { label: "Home", href: "/" },
        { label: "Take Quiz", href: "/quiz" },
        { label: "Top Blogs", href: "/blogs" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Categories", href: "/quiz" },
      ];
    return (
        <div>
            <nav className='flex justify-between m-3'>
                <div className='py-2'>
                    logo
                </div>
                <ul className='flex md:space-x-5 sm:space-x-3 lg:space-x-5  md:text-base  bg-black text-white border-2 px-5 py-2 rounded-full' id='nav-items'>
                    {links.map((link) => (
                        <li key={link.href}>
                          <Link
                            className={classnames({
                              "nav-link": true,
                              "!text-slate-500": link.href === currentPath,
                              "hover:text-slate-500 ": true,
                            })}
                            href={link.href}
                            c
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                </ul>
                <div className='py-2 centeronMb'>
                    <input placeholder='search blog' className='w-20' />
                </div>

            </nav>
            {nav && <ul className='flex flex-col space-y-5 '><Link href={"/"}>
                Home
            </Link>
                <Link href={"/quiz"}>
                    Take Quiz
                </Link>
                <Link href={"/about"}>
                    About
                </Link>
                <Link href={"/contact"}>
                    Contact
                </Link>
                <Link href={"/blogs"}>
                    Top Blogs
                </Link>
            </ul>}
        </div>
    )
}

export default NavBar
