import type { Route } from './+types/index'
import About from '../modules/About'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Harrison Kidd' },
    { name: 'description', content: 'Welcome to my web page!' }
  ]
}

export default function LandingIndex() {
  return <About />
}
