// "use client";

// import { useEffect } from "react";
// import Script from "next/script";

// const GoogleTagManager = () => {
//   useEffect(() => {
//     window.dataLayer = window.dataLayer || [];
//     window.dataLayer.push({
//       "gtm.start": new Date().getTime(),
//       event: "gtm.js",
//     });

//     const script = document.createElement("script");
//     script.async = true;
//     script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-NJZXZHCW";
//     document.head.appendChild(script);

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <Script id="gtm-script" strategy="afterInteractive">
//         {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//         })(window,document,'script','dataLayer','GTM-NJZXZHCW');`}
//       </Script>
//       <script
//         async
//         src="https://www.googletagmanager.com/gtag/js?id=G-SNLLTHERBY"
//       ></script>
//       <script>
//         {`window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());

//           gtag('config', 'G-SNLLTHERBY');`}
//       </script>
//       <noscript>
//         <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-NJZXZHCW"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         ></iframe>
//       </noscript>
//     </>
//   );
// };

// export default GoogleTagManager;
