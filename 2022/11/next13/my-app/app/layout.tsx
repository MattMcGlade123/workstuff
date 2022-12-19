import './globals.css'
import Header from '../components/Header'
import RootStyleRegistry from './RootStyleRegistry';


export default async function RootLayout({
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
        <RootStyleRegistry>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  )
}
