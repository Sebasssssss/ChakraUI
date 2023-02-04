import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { serviceID, templateID, publicKEY } from './settings'

export default function useEmail() {
  const form = useRef()
  const [isSent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendEmail = e => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(serviceID, templateID, form.current, publicKEY).then(
      result => {
        console.log(result.text)
        setSent(true)
        setLoading(false)
      },
      error => {
        console.log(error.text)
        setSent(false)
      }
    )
    e.target.reset()
    setTimeout(() => {
      setSent(false)
    }, 5000)
  }

  return { sendEmail, form, isSent, loading }
}
