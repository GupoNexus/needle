import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Needle Móveis | Conforto e design",description:"Sofás, poltronas, colchões e móveis com entrega em todo o Rio de Janeiro."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
