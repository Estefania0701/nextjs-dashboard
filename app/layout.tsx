import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /**
     * RootLayout es el layout principal de la aplicación.
     * Se requiere en toda aplicación Next.js.
     * Cualquier UI que se añada a este archivo se aplicará a todas las páginas de la aplicación.
     * Se puede usar para modificar las etiquetas html y body, y añadir metadatos.
     */
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
