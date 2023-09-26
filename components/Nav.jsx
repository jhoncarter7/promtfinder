'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {signIn, signOut, getProviders } from "next-auth/react";
const Nav = () => {
  const [Providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  });
  let isUserLoggedin = true;
  return (
    <nav className="flex-between w-full mb-12 pt-3">
      <Link href="/" className="gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="logo"
          className="object-contain"
        />
        <p className="logo_text">PromteFinder</p>
      </Link>
      {/* Desktop */}
      <div className="sm:flex hidden">
        {isUserLoggedin ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post{" "}
            </Link>
            <button className="outline_btn">sign Out</button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                alt="userProfile"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <>
          {Providers && Object.values(Providers).map((provider)=> (
            <button type="button" key={provider.name} onClick={()=> signIn(provider.id)} className="black_btn">
              signIn
            </button>
          ))}</>
        )}
      </div>
    </nav>
  );
};

export default Nav;
