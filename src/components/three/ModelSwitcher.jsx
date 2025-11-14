import { PresentationControls } from '@react-three/drei';
import React, { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16.jsx';
import MacbookModel14 from '../models/Macbook-14.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = ( group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if(child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
    }
  })
}

const moveGroup = (group, x) => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION})
}

const ModelSwitcher = ({ scale, isMobile}) => {
  const smallMacbokRef = useRef();
  const largeMacbokRef = useRef();
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbokRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbokRef.current, 0);

      fadeMeshes(smallMacbokRef.current, 0);
      fadeMeshes(largeMacbokRef.current, 1);
    }
    else {
      moveGroup(smallMacbokRef.current, 0);
      moveGroup(largeMacbokRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbokRef.current, 1);
      fadeMeshes(largeMacbokRef.current, 0);
    }
  }, [scale])
  
  const controlsConfig = {
    snap: true, 
    speed: 1, 
    zoom: 1, 
    // polar: [-Math.PI, Math.PI], 
    azimuth: [-Infinity, Infinity], 
    config: {mass: 1, tension: 0, friction: 26}
  }

  return (
    <>
    <PresentationControls {...controlsConfig}>
      <group ref={largeMacbokRef}>
        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
      </group>
    </PresentationControls>
    <PresentationControls {...controlsConfig}>
      <group ref={smallMacbokRef}>
        <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
      </group>
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher