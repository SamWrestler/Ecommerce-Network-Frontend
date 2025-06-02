import FormLabel from '@/components/FormLabel'

export default function Field({ text, type = 'text', onChange, placeholder }) {
    return (
        <div className="flex w-full flex-col gap-2">
            <FormLabel text={text} />
            <input
                type={type}
                className="w-full py-4 rounded-sm disabled:opacity-30"
                onChange={e => onChange(e.target.value)}
                dir="rtl"
                placeholder={placeholder}
            />
        </div>
    )
}
