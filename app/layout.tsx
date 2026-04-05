import './globals.css'

export const metadata = {
  title: 'Tryout RBB BUMN 2026',
  description: 'Simulasi Tryout Rekrutmen Bersama BUMN 2026',
  manifest: '/manifest.json',
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="min-h-screen font-sans bg-dark-900 text-gray-100 selection:bg-primary-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
