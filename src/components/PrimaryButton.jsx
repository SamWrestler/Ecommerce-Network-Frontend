export default function PrimaryButton({ text, className, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`py-6 w-full rounded-md bg-textPrimary text-bgPrimary mt-6 hover:scale-[.99] transition-all ${className}`}>
            {text}
        </button>
    )
}
