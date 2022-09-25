import {ChangeEvent, useState} from 'react';
import {TextField} from '@mui/material';

type EditableSpanType = {
    value: string
    onChange: (value: string) => void
    disabled?: boolean
}

export const EditableSpan = ({value, onChange, disabled}: EditableSpanType) => {
    const [title, setTitle] = useState(value)
    // const [editMode, setEditMode] = useState(false)


    const changeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(e.currentTarget.value)
    }

    // const activateEditMode = () => {
    //     setEditMode(true)
    //     setTitle(value)
    // }

    const activateViewMode = () => {
        // setEditMode(false)
        onChange(title)
    }


    return (
        // editMode
        <TextField disabled={disabled} value={title} onChange={changeTitle} placeholder={'bla'} onBlur={activateViewMode} autoFocus variant="standard"/>
        // : <span onClick={activateEditMode}>{value}</span>
)}