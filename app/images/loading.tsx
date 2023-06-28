export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex justify-center items-center h-[85vh] min-w-[275px]">
      <div className="spinner-border" role="status">
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-10 w-10" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" fill="none" stroke="#f49200" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"></circle>
        </svg>
      </div>
    </div>
  )
}