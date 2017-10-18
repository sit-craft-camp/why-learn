import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

const dev = process.env.NODE_ENV !== 'production'

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
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
          crossorigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  )
}
