import { css } from '../../styled-system/css'
import { headers, cookies } from 'next/headers';

export default function Page() {
  const headersList = headers()
  const cookieList = cookies();

  console.log('headersList', headersList)
  console.log('cookieList', cookieList)

  return (
    <div>
      <h1 className={css({ color: 'text' })}>Hello World</h1>
    </div>
  )
}