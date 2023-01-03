import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './page.module.css'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        <main className={styles.container}>
          {children}
        </main>
        {/* @ts-expect-error Server Component */}
        <Footer />
      </body>
    </html>
  )
}
