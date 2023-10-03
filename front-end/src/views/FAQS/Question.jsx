import { useState } from "react"


export const Question = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleHidden = () => {
        setIsOpen(!isOpen);
    };
    return (

        <div className='border p-4 mb-5 rounded bg-gray-100'>
            <div className='flex justify-between'>
                <h3 className='text-orange-200 font-semibold text-sm sm:text-xl mb-2'>
                    {question}
                </h3>
                <button onClick={handleHidden}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                </button>
            </div>
            <p className={`${isOpen ? 'hidden' : ''} text-xs sm:text-base`}>
                {answer}
            </p>
        </div>
    )
}