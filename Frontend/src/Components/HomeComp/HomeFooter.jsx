import React from 'react'
import { Mail, Phone} from "lucide-react";

const HomeFooter = () => {
  return (
  <>
    <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-5">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <aside>
        <div className="avatar flex items-end justify-between">
          <div className="mask mask-squircle w-24">
            <img src="../../../public/logo.jpeg" alt="Product"/>
          </div>
        </div>
        <p className="font-bold">C.P. Bag Agency<br/>Providing reliable quality since 1992</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="mailto:faizanpasha356@gmail.com"><Mail/></a>
          <a href="tel:+919887370536"><Phone/></a>
        </div>
      </nav>
    </footer>
    <footer className="footer sm:footer-horizontal footer-center bg-gray-500 text-base-content p-2">
      <aside>
        <p>Copyright © {new Date().getFullYear()} UzziFuzzi —All rights reserved</p>
      </aside>
    </footer>
  </>
)};

export default HomeFooter
