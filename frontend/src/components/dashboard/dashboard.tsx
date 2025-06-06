import { HeaderSection } from "../header/header-section"
import { ChartAreaInteractive } from "@/components/ui/chart-area-interactive"


const Dashboard = () => {
  return (
    <div>
      <div className="flex h-full w-full flex-col items-center justify-start gap-4 p-4">
        <HeaderSection />
        <div className="h-full w-full max-w-7xl flex-1 overflow-y-auto mt-5">
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
