import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />

          <title>WhatsApp Wrapped - Chat Insights and Analysis</title>
          <meta
            name="description"
            content="Get Spotify Wrapped style insights of your WhatsApp chats with your friends like who texts you first, who texts more, when y'all text the most and more!"
          />
          <meta name="author" content="Yajat Malhotra &amp; Anshul Agarwala" />
          <meta
            name="keywords"
            content="WhatsApp, Wrapped, WhatsAppWrapped, #WhatsAppWrapped, Ourchatstory, our, chat, story, spotify, reddit, recap, 2022"
          />

          <meta property="og:url" content="https://OurChatStory.co/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="WhatsApp Wrapped - Chat Insights and Analysis"
          />
          <meta
            property="og:description"
            content="Get Spotify Wrapped style insights of your WhatsApp chats with your friends like who texts you first, who texts more, when y'all text the most and more!"
          />
          <meta
            property="og:image"
            content="https://ourchatstory.co/banner_sdd.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="OurChatStory.co" />
          <meta property="twitter:url" content="https://OurChatStory.co/" />
          <meta
            name="twitter:title"
            content="WhatsApp Wrapped - Chat Insights and Analysis"
          />
          <meta
            name="twitter:description"
            content="Get Spotify Wrapped style insights of your WhatsApp chats with your friends like who texts you first, who texts more, when y'all text the most and more!"
          />
          <meta
            name="twitter:image"
            content="https://ourchatstory.co/banner_sdd.png"
          />

          <link rel="manifest" href="manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#536878" />

          <link rel="manifest" href=" manifest.json" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8GG4ESYN0D"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-8GG4ESYN0D');`,
            }}
          />
        </Head>
        <body style={{ margin: "0" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
