import PhoneItem from '@/components/PhoneItem'
import PhoneItem2 from '@/components/PhoneItem2'
import { css } from '../../styled-system/css'
import PhoneItem3 from '@/components/PhoneItem3'

export default function Page() {
  return (
    <div>
      <h1 className={css({ color: 'text' })}>TESTING</h1>
      <PhoneItem />
      <PhoneItem2 />
      <PhoneItem3 />
    </div>
  )
}