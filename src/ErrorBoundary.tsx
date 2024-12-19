import React, { ReactNode, useState } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [error, setError] = useState<Error | null>(null)

  // Error boundary logic using a derived component for catching errors
  const ErrorCatcher = React.useMemo(() => {
    return function ErrorCatcher({ children }: { children: ReactNode }) {
      try {
        return <>{children}</>
      } catch (err) {
        setError(err as Error)
        return null
      }
    }
  }, [])

  if (error) {
    return (
      <main className='pt-16 p-4 container mx-auto'>
        <h1 className='text-4xl text-red-500'>Something went wrong!</h1>
        <p className='text-lg text-gray-700'>{error.message}</p>
      </main>
    )
  }

  return <ErrorCatcher>{children}</ErrorCatcher>
}
