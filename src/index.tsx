import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"
import { ThemeProvider } from '@mui/material/styles';
import "./index.css"
import "./services/i18n"
import theme from "./theme"

const container = document.getElementById("root")!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback='Loading...'>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </React.Suspense>
    </Provider>
  </React.StrictMode>
)
