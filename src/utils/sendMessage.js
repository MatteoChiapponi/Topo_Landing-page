function sendWhatsappMessagge(messagge) {
  const url = 'https://graph.facebook.com/v17.0/5491140674791/messages'
  const body = {
    preview_url: false,
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: '5491140674791',
    type: 'text',
    text: { body: messagge },
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
  fetch(url, options).catch((e) => {
    console.log(e)
  })
}
export default sendWhatsappMessagge
