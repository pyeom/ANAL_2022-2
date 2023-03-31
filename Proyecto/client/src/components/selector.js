import React, { useState } from 'react'

function Selector() {

    const [radonShow, setRadonShow] = React.useState(false);
    const [maapShow, setMaapShow] = React.useState(false);
    const [mageeShow, setMageeShow] = React.useState(false);
    const [grimmShow, setGrimmShow] = React.useState(false);
    const [mpShow, setMpShow] = React.useState(false);
    const [radiometroShow, setRadiometroShow] = React.useState(false);

    const radonClick = () => {
        const target = document.getElementById('radon')
        const btn = document.getElementById('toggleRadon')
        btn.onclick = function() {
            if (target.style.display !== 'none') {
                target.style.display = 'none';
            }
            else {
                target.style.display = 'block';
            }
        }
        setRadonShow(!radonShow);
    }

    const bc_maapClick = () => {
        const target = document.getElementById('maap')
        const btn = document.getElementById('toggleMaap')
        btn.onclick = function() {
            if (target.style.display !== 'none') {
                target.style.display = 'none';
            }
            else {
                target.style.display = 'block';
            }
        }
        setMaapShow(!maapShow);
    }
    
    const bc_mageeClick = () => {
        const target = document.getElementById('magee')
        const btn = document.getElementById('toggleMagee')
        btn.onclick = function() {
            if (target.style.display !== 'none') {
                target.style.display = 'none';
            }
            else {
                target.style.display = 'block';
            }
        }
        setMageeShow(!mageeShow);
    }

    const mp_grimmClick = () => {
        const target = document.getElementById('grimm')
        const btn = document.getElementById('toggleGrimm')
        btn.onclick = function() {
            if (target.style.display !== 'none') {
                target.style.display = 'none';
            }
            else {
                target.style.display = 'block';
            }
        }
        setGrimmShow(!grimmShow);
    }

    const mpClick = () => {
        const target = document.getElementById('multiparametro')
        const btn = document.getElementById('toggleMP')
        btn.onclick = function() {
            if (target.style.display !== 'none') {
                target.style.display = 'none';
            }
            else {
                target.style.display = 'block';
            }
        }
        setMpShow(!mpShow);
    }

    const radiometroClick = () => {
        const target = document.getElementById('radiometro')
        const btn = document.getElementById('toggleRadiometro')
        btn.onclick = function() {
            if (target.style.display !== 'none') {
                target.style.display = 'none';
            }
            else {
                target.style.display = 'block';
            }
        }
        setRadiometroShow(!radiometroShow);
    }

    return (
        <div>
            <button className='button' id='toggleRadon' type="button" onClick={radonClick}>Radon</button>
            <button className='button' id='toggleMaap' type="button" onClick={bc_maapClick}>BC-MAAP</button>
            <button className='button' id='toggleMagee' type="button" onClick={bc_mageeClick}>BC-Magee</button>
            <button className='button' id='toggleGrimm' type="button" onClick={mp_grimmClick}>MP-GRIMM</button>
            <button className='button' id='toggleMP' type="button" onClick={mpClick}>Multi-parametro</button>
            <button className='button' id='toggleRadiometro' type="button" onClick={radiometroClick}>Radiometro</button>
            
        </div>
    );
};

export default Selector;