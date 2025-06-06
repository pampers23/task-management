import { HeaderSection } from "../header/header-section"
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive"


const Dashboard = () => {
  return (
    <div>
      <div className="flex h-full w-full flex-col items-center justify-start gap-4 p-4">
        <HeaderSection />
      </div>
      <ChartAreaInteractive />
    </div>
  )
}

export default Dashboard
