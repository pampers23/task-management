import logo from "@/assets/Task_Management__1_-removebg-preview.png";
import { cn } from "@/lib/utils";

function Logo({ className }: { className?: string }) {
  return <img className={cn("object-cover h-16 w-500 md:h-24", className)} src={logo} alt="logo" />;
}

export default Logo;