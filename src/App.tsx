import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Worker } from "@react-pdf-viewer/core"
import { PdfProvider } from "./context"

const App: React.FC = () => {

  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PdfProvider>
      <Worker workerUrl="../node_modules/pdfjs-dist/build/pdf.worker.min.js">
        <BrowserRouter>
          <Router />
      </BrowserRouter>
     </Worker>
     </PdfProvider>
    </ThemeProvider>
  )
}

export default App
