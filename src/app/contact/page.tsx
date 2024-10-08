"use client";
import React from "react";
import Script from "next/script";

const ContactPage = () => {
  return (
    <main className="h-screen w-screen flex  justify-center items-center">
      <div className="w-3/4 mt-[40vh] rounded-lg ">
        <div className="hb-p-6703e04b7b400700392b6ee6-1  w-full"></div>
        <img
          height="1"
          width="1000"
          style={{ display: "none", marginTop: "10vh" }}
          src="https://www.honeybook.com/p.png?pid=6703e04b7b400700392b6ee6"
        />

        <Script
          id="honeybook-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(h,b,s,n,i,p,e,t) {
              h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
              t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
              e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","6703e04b7b400700392b6ee6");
          `,
          }}
        />
      </div>
    </main>
  );
};

export default ContactPage;
