import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

const dev = process.env.NODE_ENV !== 'production'

const fbScript = `
  function fbLoader(d, s, id) {
    let js = ''
    let fjs = d.getElementsByTagName(s)[0]

    if (d.getElementById(id)) return

    js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.10&appId=153854811888809'
    fjs.parentNode.insertBefore(js, fjs)
  }

  fbLoader(document, 'script', 'facebook-jssdk')
`

export default class BaseDocument extends Document {
  // This will extract the critical stylesheets and render the page.
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return {...page, styleTags}
  }

  constructor(props) {
    super(props)

    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render = () => (
    <html lang="en">
      <Head>
        <title>Why Learn | Why do we have to learn this?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {this.props.styleTags}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400|Prompt:300"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
          crossorigin="anonymous"
        />
        <script src="https://www.gstatic.com/firebasejs/4.5.0/firebase.js" />
        <script dangerouslySetInnerHTML={{__html: fbScript}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}
