'use client'

export default function Error() {

    return (
        <div className="flex justify-center items-center h-[85vh] min-w-[275px] px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center overflow-hidden">
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Failed to load</h1>
                <p className="mt-6 text-base leading-7 text-white">Sorry, we had a problem loading the page, if the error persists try again later.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                     <button onClick={() => window.location.reload()} type="button" className="rounded-md bg-amber-500 hover:bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm">Reload the page</button>
                </div>
            </div>
        </div>
    )
}