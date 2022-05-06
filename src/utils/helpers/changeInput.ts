import { ChangeEvent } from 'react';

export const handleChange = (e:ChangeEvent<HTMLInputElement>, setState:any) => {
    setState(e.target.value)
}