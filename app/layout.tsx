import "./globals.css";

export const metadata={
  title:"Muhammad Imran | WordPress, WooCommerce & Full-Stack Troubleshooting",
  description:"Technical portfolio of Muhammad Imran — WordPress and WooCommerce troubleshooting, Next.js/React development, Supabase/PostgreSQL security, API integration and production delivery."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>
}