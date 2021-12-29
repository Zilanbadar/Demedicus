import React from 'react';
import {PreLoaderContainer, Preloaders} from './PreloaderElements'

const Preloader = () => {
    return (
        <PreLoaderContainer>
            <Preloaders></Preloaders>
            <Preloaders></Preloaders>
            <Preloaders></Preloaders>
        </PreLoaderContainer>
    )
}

export default Preloader
