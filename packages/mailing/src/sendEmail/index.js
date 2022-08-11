import transporter from './transporter'
import logMail from './logMail'

const defaultMailOptions = {
  from: process.env.MAIL_FROM || '"Recylink" <plataforma@recylink.com>'
}

export default async function (options) {
  const mailOptions = {
    ...defaultMailOptions,
    ...options
  }

  if (!process.env.MAIL_URL) {
    logMail(mailOptions)
  } else {
    const result = await transporter.sendMail(mailOptions)
    return result
  }
}
