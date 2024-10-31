import { useState } from "react"
import './Form.css'

const Form = () => {
    const [input, setInput] = useState('')
    const [dialog, setDialog] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('customer request sent...')
        setDialog((prev) => [...prev, {question: input, reply: '', id: dialog.length + 1}])
        setInput('')
    }

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h3>Ask me a question</h3>
                <textarea type="text" value={input} onChange={(e) => setInput(e.target.value)} required rows={3} />
                <button type='submit'>Ask</button>
            </form>
            <div className="dialog">
                {dialog.length !== 0 && dialog.map((item) => {
                    return (
                        <div key={item.id} className="item">
                            <div>{item.question}</div>
                            <div>{item.reply}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Form