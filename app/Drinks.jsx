export default function Drinks({ goBack }) {
    return (
        <div className="bg-white">

            <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                <button
                    onClick={goBack}
                    className="rounded-md bg-gray-300 px-3 py-2 text-lg font-semibold text-gray-700 shadow-sm hover:bg-gray-400"
                >
                    Back
                </button>
            </div>

            <div>
                Coming soon...
            </div>

        </div>
    )
}