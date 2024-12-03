export const JsonLd = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebDevelopment",
          name: "Lauf",
          description: "Professional web design and development services",
          url: "https://lauf.co",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "614-915-9326",
            email: "michael@lauf.co",
            contactType: "customer service",
          },
        }),
      }}
    />
  );
};
