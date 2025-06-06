import Dashboard from "./components/dashboard/dashboard"
import Page from "./components/navbar/navbar"
import { SidebarProvider } from "./components/ui/sidebar"


function App() {

  return (
    <SidebarProvider>
      <Page/>
      <Dashboard />
    </SidebarProvider>
  )
}

export default App
