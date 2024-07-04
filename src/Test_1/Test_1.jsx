import { Canvas } from '@react-three/fiber'
import React from 'react'
import {useState} from 'react'
import Test1_Scene from '../Components/Test1_Scene'
import './Test_1.css';

const Test_1 = () => {
  const [mainColor, setMainColor] = useState('#e66465');

    const handleMainColorChange = (event) => {
        setMainColor(event.target.value);
    };

  return (
    <div>
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                    <Canvas>
                    <Test1_Scene color={mainColor}/>
                    </Canvas>
                </div>
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input 
                            type="color" 
                            id="head" 
                            name="head"
                            value={mainColor}
                            onChange={handleMainColorChange}
                        />
                        <label for="head">Main Color</label>
                    </div>
                </div>
            </div>
        </div>
     

    </div>
  )
}

export default Test_1
