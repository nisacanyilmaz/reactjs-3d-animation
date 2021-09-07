import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { useSnapshot } from 'valtio'

export const Palette = ({state}) => {
    const snap = useSnapshot(state);
    return (
        <div style={{
            position: 'absolute',
            top: '74px',
            left: '70px',
        }}>
            <HexColorPicker 
                color={snap.items[snap.current]} 
                onChange={(color) => (state.items[snap.current]=color)} 
            />
            <h1>{state.current}</h1>
        </div>
    )
}
export default Palette