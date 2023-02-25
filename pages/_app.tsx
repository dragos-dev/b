import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import {darkTheme, lightTheme } from '../application/theme'
import GlobalStyle from '../application/reset'
import { useStore } from '../application/store/store'
import { observer } from 'mobx-react-lite'
import {useEffect } from 'react'

const App = ({ Component, pageProps }: AppProps) => {
  const { store } = useStore()

  useEffect(() => {
    if (localStorage.getItem('light') == 'false') store.setLight(false)
  }, [])

  return <ThemeProvider theme={store.light ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
}

export default observer(App)