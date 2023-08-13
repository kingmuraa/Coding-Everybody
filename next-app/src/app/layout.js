import Link from "next/link"
import './globals.css'


export const metadata = {
  title: 'Web Tutorials',
  description: 'Generated by HSKim',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href="/read/1">HTML</Link></li>
          <li><Link href="/read/2">CSS</Link></li>
          <li><Link href="/read/3">JavaScript</Link></li>
        </ol>
        {children}
        <ul>
          <li><Link href="/create">create</Link></li>
          <li><Link href="/update/1">update</Link></li>
          <li><input type="button" value="delete"/></li>
        </ul>
      </body>
    </html>
  )
}
