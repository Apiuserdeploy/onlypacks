import { Spinner } from "@/public/svgIcons"

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center items-center h-[85vh] min-w-[260px]">
      <button type="button" disabled>
        <Spinner></Spinner>
      </button>
    </div>
  )
}