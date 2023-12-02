import Script from 'next/script';
import React from 'react';



const Scripts = () => {
  return (

<>
   <Script strategy='lazyOnload' src={"https://www.googletagmanager.com/gtag/js?id=G-MTLEE81PSW"}/>
      <Script strategy='lazyOnload' id="gtag" >
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-MTLEE81PSW')`
        }
      </Script>
      </>
 
  )
}

export default Scripts