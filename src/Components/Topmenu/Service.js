import React from 'react'

export default function Service() {
  var myHeaders = new Headers();

        myHeaders.append("Cookie", "JSESSIONID=573368261308448F22149EA8D0DDC214; AWSALB=ayx8kfpbKkEa27aO8NcPQmNYZTQitCEsyRHKvIycYcZfFDLRwqeRZ0KdThMcZo/Y81Ar+a5gonoAmCJMAOfWSDAsyU1VtHWxUa6mz8CDPStGpcKOw7/FSxMrLTeQ; AWSALBCORS=ayx8kfpbKkEa27aO8NcPQmNYZTQitCEsyRHKvIycYcZfFDLRwqeRZ0KdThMcZo/Y81Ar+a5gonoAmCJMAOfWSDAsyU1VtHWxUa6mz8CDPStGpcKOw7/FSxMrLTeQ");

        myHeaders.append('Access-Control-Allow-Origin', '*');

       

        var formdata = new FormData();

        formdata.append("client_id", "aPuBbnfn6mJMNAIUeNnF");

        formdata.append("client_secret", "49hzpy05wX1vazrhZsnH");

        formdata.append("code", "Myi1XRaQZw5flTvzg7sk3UptQLYXpI");

        formdata.append("redirect_uri", "https://cloudedge-ui-usw2.sbx-eks-v121.aws.securekloud.io/compliance");

        formdata.append("grant_type", "authorization_code");

        formdata.append("code_verifier", "a898fbc83dce4f26aae3ce2827cbbde99222f528302141e598ced5a55165ece5cf8a75379b26400ea6214d79898ce3dc");

       

       

        var requestOptions = {

          method: 'POST',

          headers: myHeaders,

          body: formdata,

          redirect: 'follow',

          mode: 'no-cors'

        };

       

        fetch("https://secure-kloud.crossidentity.com/CIDSaas/default/user/oauth2token", requestOptions)

          .then(response => response.text())

          .then(result => console.log(result))

          .catch(error => console.log('error', error));
  return (
    <div>Service</div>
  )
}
