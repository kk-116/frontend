import React, { useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import onepiece from './assets/onepiece.png'
import ScrollableSection from './ScrollableSection';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import sea from './assets/sea.jpg'

// function Model() {
//   const gltf = useLoader(GLTFLoader, '/going_merry.glb');

//   return (
//     <primitive object={gltf.scene} />
//   );
// }

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <section>
          <div className='s2' style={
          {
            backgroundImage: `url(${sea})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}>
          <div>
          <h2 className='font' style={{color: '#f0f0f0'}}>Welcome to The World of </h2>
            <img  className='onepiece' src={onepiece} />
          </div>   
          <Canvas >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model />
          </Canvas>
          </div>
        </section>
        <section>
        <ScrollableSection />
        </section>
        <section>
          <h2>Discover One Piece</h2>
          <h4>Explore our wide range of Devil Fruits and find the perfect fit for your needs.</h4>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
