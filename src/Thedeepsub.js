import React, { useContext } from 'react'
import { DarkTheme } from './App'

const Thedeepsub = () => {
    const { dark, setDark } = useContext(DarkTheme);
    console.log(dark)
    return (
        <div className='dark_btn'>

            <label htmlFor='btn' className={`Btn ${dark ? "on" : ""}`}>
                dark
            </label>

            <button id="btn" onClick={
                () => setDark(!dark)
            }>
                mode</button>
        </div>
    )
}

export default Thedeepsub