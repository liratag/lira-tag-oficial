import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LIRA TAG — Mobilidade Inteligente',
  
  description:
    'A nova geração da mobilidade inteligente vinculada ao CPF.',

  keywords: [
    'TAG',
    'Mobilidade',
    'Pedágio',
    'RFID',
    'UHF',
    'NFC',
    'Smart Mobility',
    'Lira Tag',
  ],

  authors: [
    {
      name: 'LIRA TAG',
    },
  ],

  openGraph: {
    title: 'LIRA TAG',
    
    description:
      'A nova geração da mobilidade inteligente vinculada ao CPF.',

    url: 'https://lira-tag.vercel.app',

    siteName: 'LIRA TAG',

    locale: 'pt_BR',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'LIRA TAG',
    description:
      'A nova geração da mobilidade inteligente vinculada ao CPF.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}