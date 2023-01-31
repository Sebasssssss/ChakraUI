import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function useEmail() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    const serviceID = 'service_5l3d1p7'
    const templateID = 'template_y1u1a6b'
    const publicKEY = '8g8oXLF8T_3RQc43g'

    emailjs.sendForm(serviceID, templateID, form.current, publicKEY).then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return { sendEmail, form }
}
