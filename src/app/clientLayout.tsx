'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import RadialMenu from '@/components/RadialMenu';
import EduvaltNavbar from "@/components/Navbar";
import { usePathname } from 'next/navigation';
import OfferBanner from "@/components/offer-banner"
import EducationForm from '@/components/adds';


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [show, setShow] = useState(true)
  // const [offer, setOffer] = useState(false)
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showOfferBanner, setShowOfferBanner] = useState(false);




  // useEffect(() => {
  //   function handleBanner() {
  //     if (pathname === '/') {
  //       setOffer(true)
  //     } else {
  //       setOffer(false)
  //     }
  //   }
  //   handleBanner()
  // }, [pathname])

  useEffect(() => {
    // Show offer banner and setup form popup timer only on home page
    if (pathname === '/') {
      setShowOfferBanner(true);
      const timer = setTimeout(() => {
        setShowFormPopup(true);
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    } else {
      setShowOfferBanner(false);
    }
  }, [pathname]);

  const closeFormPopup = () => {
    setShowFormPopup(false);
  };

  return (
    <div onClick={() => setShowFormPopup(false)}>
      <OfferBanner/>
      {show && (
        <EduvaltNavbar position='sticky' />
      )}
      {children}
      <RadialMenu />
      <Footer />
      {showFormPopup && (
        <div className="fixed inset-0 top-[100px] z-[2000] flex items-center justify-center ">
          <div className="relative mx-4 w-full max-w-2xl">
            <EducationForm closeFormPopup={closeFormPopup}/>
            {/* For clearing a type error of not using a state */}
            <p className='hidden'>{showOfferBanner}</p>
          </div>
        </div>
      )}
    </div>
  );
}
