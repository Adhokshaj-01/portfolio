import Script from 'next/script'
import React from 'react'

export default function Analytics() {
  return (
    <>
     {/* Google Analytics Scripts */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-SPHPFM7S40`} />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SPHPFM7S40');
            `}
          </Script>
    </>
  )
}
