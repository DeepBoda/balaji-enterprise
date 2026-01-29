// SEO Structured Data for Rich Search Results
// These schemas help Google understand our content better

// Organization structured data
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Balaji Enterprise",
    url: "https://balaji-enterprise.com",
    logo: "https://balaji-enterprise.com/images/logo.png",
    description: "Premium organic honey from Gir Forest. Pure, raw, and ethically harvested.",
    foundingDate: "2018",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Forest Edge",
        addressRegion: "Gujarat",
        addressCountry: "IN"
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-95741-55240",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"]
    },
    sameAs: [
        "https://www.instagram.com/nature_honey_2018"
    ]
};

// Website structured data
export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Balaji Enterprise",
    url: "https://balaji-enterprise.com",
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://balaji-enterprise.com/products?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// Product structured data generator
export function generateProductSchema(product: {
    name: string;
    description: string;
    price: number;
    image: string;
    sku: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `https://balaji-enterprise.com${product.image}`,
        sku: product.sku,
        brand: {
            "@type": "Brand",
            name: "Balaji Enterprise"
        },
        offers: {
            "@type": "Offer",
            url: "https://balaji-enterprise.com/products",
            priceCurrency: "INR",
            price: product.price,
            availability: "https://schema.org/InStock",
            seller: {
                "@type": "Organization",
                name: "Balaji Enterprise"
            }
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127"
        }
    };
}

