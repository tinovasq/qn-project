export function GenerateHTMLPage(title, message) {
  return `<html>
            <head>
              <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet">
              <style>
                body {
                  background-color: #95c2de;
                }

                .mainbox {
                  background-color: #95c2de;
                  margin: auto;
                  height: 600px;
                  max-width: 800px;
                  display: flex;
                  flex-direction: column;
                  align-content: center;
                  align-items: center;
                  justify-content: center;
                }

                .title {
                  color: #ffffff;
                  font-family: 'Public Sans', sans-serif;
                  font-size: 11rem;
                }

                .msg {
                  text-align: center;
                  font-family: 'Public Sans', sans-serif;
                  font-size: 1.6rem;
                }
              </style>
            </head>

            <body>
              <div class="mainbox">
                <div class="title">${title}</div>
                <div class="msg">${message}</div>
              </div>
            </body>
            </html>`
}
