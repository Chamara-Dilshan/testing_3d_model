import React from 'react'
import './Test_2.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Test_2() {

  return (
    <div>
        <div className="wrapper">
            <div className="card">
                <div className="product-canvas">
                    <Canvas>
                    </Canvas>
                </div>
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input 
                            type="color" 
                            id="head" 
                            name="head"
                            value="#e66465" 
                        />
                        <label for="head">Main Color</label>
                    </div>

                    <div>
                        <input 
                            type="color" 
                            id="body" 
                            name="body"
                            value="#f6b73c" 
                        />
                        <label for="body">Stripes</label>
                    </div>
                    <div>
                        <input 
                            type="color" 
                            id="body" 
                            name="body" 
                            value="#f6b73c" 
                        />
                        <label for="body">Soul</label>
                    </div>
                </div>
            </div>
        </div>
     

    </div>
  )
}

export default Test_2
