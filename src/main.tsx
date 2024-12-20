import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <Analytics />
    </NextUIProvider>
  </StrictMode>
)