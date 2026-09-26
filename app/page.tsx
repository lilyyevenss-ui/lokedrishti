import { AppProvider } from '@/context/AppContext'
import { Dashboard } from '@/components/dashboard'

export default function Page() {
  return <AppProvider><Dashboard /></AppProvider>
}
