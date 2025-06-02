'use client'
import { useEffect, useRef, useState } from 'react'
import CodeInput from './CodeInput'
import FormLabel from '@/components/FormLabel'
import Link from 'next/link'

export default function Code({ codeExpired }) {
    const [countDown, setCountTime] = useState(10) // Initial countdown time in seconds

    const [part1, setPart1] = useState('')
    const [part2, setPart2] = useState('')
    const [part3, setPart3] = useState('')
    const [part4, setPart4] = useState('')
    const [part5, setPart5] = useState('')

    // Refs for each input to manage focus
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputRef5 = useRef(null)

    // Handle input change, focus shift, and backspace logic
    const handleInputChange = (e, partSetter, nextInputRef, prevInputRef) => {
        const value = e.target.value
        partSetter(value) // Update state for the part

        // Move focus to the next input field when the current input is filled
        if (value.length === 1 && nextInputRef) {
            nextInputRef.current.focus()
        }

        // Move focus to the previous input field if backspace is pressed and the current input is empty
        if (value.length === 0 && prevInputRef) {
            prevInputRef.current.focus()
        }
    }

    // Handle paste event to automatically move focus if all inputs are filled
    const handlePaste = (e, partSetter, nextInputRef) => {
        const pastedValue = e.clipboardData.getData('Text')

        // If the pasted value has the expected length (e.g., 5 characters), update all inputs
        if (pastedValue.length === 5) {
            const parts = pastedValue.split('')
            setPart1(parts[0])
            setPart2(parts[1])
            setPart3(parts[2])
            setPart4(parts[3])
            setPart5(parts[4])

            // Automatically move focus to the next input after each part
            inputRef2.current.focus()
        } else {
            handleInputChange(e, partSetter, nextInputRef)
        }
    }

    // Handle form submission
    const handleSubmit = event => {
        event.preventDefault()

        // Combine the code parts
        const fullCode = part1 + part2 + part3 + part4 + part5

        // Optionally, validate the input (e.g., ensuring all parts are filled)
        if (fullCode.length === 5) {
            alert('Code: ' + fullCode)
        } else {
            alert('Please fill in all parts of the code.')
        }
    }

    // Countdown timer
    useEffect(() => {
        if (countDown === 0) return codeExpired()

        const timer = setInterval(() => {
            setCountTime(prev => {
                if (prev > 1) return prev - 1
                clearInterval(timer)
                return 0
            })
        }, 1000)

        return () => clearInterval(timer) // Clear interval on unmount
    }, [countDown])

    return (
        <div dir="rtl" className="flex flex-col gap-4 w-full">
            <h2 className="font-semibold text-[18px]">کد تایید</h2>
            <FormLabel text={'کد تایید به شماره 09352318343 ارسال شد'} />
            <form
                dir={'ltr'}
                className="flex w-full flex-col gap-4"
                onSubmit={handleSubmit}>
                <div className="flex w-full justify-between">
                    <CodeInput
                        value={part1}
                        onChange={e =>
                            handleInputChange(e, setPart1, inputRef2, null)
                        }
                        onPaste={e => handlePaste(e, setPart1, inputRef2)}
                        refProp={inputRef1}
                        nextInputRef={inputRef2}
                    />
                    <CodeInput
                        value={part2}
                        onChange={e =>
                            handleInputChange(e, setPart2, inputRef3, inputRef1)
                        }
                        onPaste={e => handlePaste(e, setPart2, inputRef3)}
                        refProp={inputRef2}
                        nextInputRef={inputRef3}
                    />
                    <CodeInput
                        value={part3}
                        onChange={e =>
                            handleInputChange(e, setPart3, inputRef4, inputRef2)
                        }
                        onPaste={e => handlePaste(e, setPart3, inputRef4)}
                        refProp={inputRef3}
                        nextInputRef={inputRef4}
                    />
                    <CodeInput
                        value={part4}
                        onChange={e =>
                            handleInputChange(e, setPart4, inputRef5, inputRef3)
                        }
                        onPaste={e => handlePaste(e, setPart4, inputRef5)}
                        refProp={inputRef4}
                        nextInputRef={inputRef5}
                    />
                    <CodeInput
                        value={part5}
                        onChange={e =>
                            handleInputChange(e, setPart5, null, inputRef4)
                        }
                        onPaste={e => handlePaste(e, setPart5, null)}
                        refProp={inputRef5}
                        nextInputRef={null}
                    />
                </div>
                <div dir={'rtl'} className="flex items-center gap-4">
                    <Link
                        href={''}
                        className="text-textPrimary font-medium text-[16px] hover:text-textSecondary transition-all duration-50">
                        ارسال مجدد کد
                    </Link>
                    <p className="font-light text-[16px] text-success">
                        {countDown > 0 ? `${countDown} ثانیه` : 'کد منقضی شد'}
                    </p>
                </div>
                <button className="w-full flex justify-center items-center text-bgPrimary rounded-md py-4 bg-textPrimary">
                    ورود / ثبت‌نام
                </button>
            </form>
        </div>
    )
}
