import React from 'react'
import './Test_2.css';
import {Suspense, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'

function Model1({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/shoe.gltf')
    return (
      <group  ref={group} {...props} dispose={null} position={[0, +0.5, 0]} scale={3}>
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.stripes}/>
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh}/>
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.sole}/>
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColors.inner}/>
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.sole}/>
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes}/>
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes}/>
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.patch}/>
      </group>
    )
}

function Model2({...props}) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Corset.gltf')
    return (
      <group ref={group} {...props} dispose={null} position={[0, -2, 0]} scale={80}>
        <mesh geometry={nodes.Corset.geometry} material={materials.Corset_O} material-color={props.customColors.main}/>
      </group>
    )
}
  
function Test_2() {

    const[mesh,setMesh]=useState("#ffffff")
    const[stripes,setStripes]=useState("#ffffff")
    const[sole,setSole]=useState("#ffffff")
    const[patch,setPatch]=useState("#ffffff")
    const[inner,setInner]=useState("#ffffff")
    const [selectedModel, setSelectedModel] = useState('Model1');
    const [main, setMain] = useState("#ffffff");

    return (
        <div>
            <div className="wrapper">
                <div className="wrapper2">
                    <div className="wrapper3">
                        <div className="model-selection">
                            <button 
                                onClick={() => setSelectedModel('Model1')}
                                className={selectedModel === 'Model1' ? 'active' : ''}
                            >
                                Model 1
                            </button>
                            <button 
                                onClick={() => setSelectedModel('Model2')}
                                className={selectedModel === 'Model2' ? 'active' : ''}
                            >
                                Model 2
                            </button>
                        </div>
                        <h1>Color chooser</h1>
                        <div className='colors'>
                            {selectedModel === 'Model1' && (
                                <>
                                    <div className="color-item">
                                        <label for="mesh">Mesh</label>
                                        <input 
                                            type="color" 
                                            id="mesh" 
                                            name="mesh"
                                            value={mesh}
                                            onChange={(e) => setMesh(e.target.value)}
                                        />
                                    </div>

                                    <div className="color-item">
                                        <label for="stripes">Stripes</label>
                                        <input 
                                            type="color" 
                                            id="stripes" 
                                            name="stripes"
                                            value={stripes}
                                            onChange={(e) => setStripes(e.target.value)}
                                        />
                                    </div>
                                    <div className="color-item">
                                        <label for="sole">Soul</label>
                                        <input 
                                            type="color" 
                                            id="sole" 
                                            name="sole" 
                                            value={sole}
                                            onChange={(e) => setSole(e.target.value)}
                                        />
                                    </div>
                                    <div className="color-item">
                                        <label for="sole">patch</label>
                                        <input 
                                            type="color" 
                                            id="patch" 
                                            name="patch" 
                                            value={patch}
                                            onChange={(e) => setPatch(e.target.value)}
                                        />
                                    </div>
                                    <div className="color-item">
                                        <label for="sole">inner</label>
                                        <input 
                                            type="color" 
                                            id="inner" 
                                            name="inner" 
                                            value={inner}
                                            onChange={(e) => setInner(e.target.value)}
                                        />
                                    </div>
                                </>
                            )}
                            {selectedModel === 'Model2' && (
                                <div className="color-item">
                                    <label htmlFor="main">Main Color</label>
                                    <input 
                                    type="color" 
                                    id="main" 
                                    name="main" 
                                    value={main}
                                    onChange={(e) => setMain(e.target.value)}
                                    />
                                </div>
                            )}
                           
                        </div>
                    </div>



                    <div className="product-canvas0">
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight intensity={3}/>
                                <spotLight 
                                    intensity={300} 
                                    angle={0.1} 
                                    penumbra={1}
                                    position={[10,15,10]}
                                    castShadow
                                />
                                {/* <Model1 customColors={{mesh:mesh, stripes:stripes, sole:sole, patch:patch, inner:inner}}/> */}

                                {selectedModel === 'Model1' && (
                                    <Model1 customColors={{ mesh: mesh, stripes: stripes, sole: sole, patch: patch, inner: inner }} />
                                )}
                                {selectedModel === 'Model2' && (
                                    <Model2 customColors={{ main: main }}/>
                                )}

                                <OrbitControls
                                    enablePan={true}
                                    enableZoom={true}
                                    enableRotate={true}
                                />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </div>
        

        </div>
    )
}

export default Test_2
