import { useState} from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(elem) => setText(elem.target.value)}>
                </input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(elem) => setDay(elem.target.value)}>
                </input>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input
                    type='checkbox'
                    value={reminder}
                    onChange={(elem) => setReminder(elem.currentTarget.checked)}>
                </input>
            </div>

            <input className='btn btn-block' type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask
