import React, {useState} from 'react';
// import { Menu, Dropdown, Button, Space } from 'antd';
import {
    DropdownSection,
    RepublicDropdown,
    RDHead,
    RDUl,
    RDLi,
    PositionDropdown,
    PDHead,
    PDUl,
    PDLi,
    LevelDropdown,
    LDHead,
    LDUl,
    LDLi,
} from './DropdownElements';

const DropdownMenu = () => {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    const onMouseEnter1 = () => {
        if (window.innerWidth < 960) {
            setDropdown1(false);
        } else {
            setDropdown1(true);
        }
    };
    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(true);
        }
    };
    const onMouseEnter3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(true);
        }
    };

    const onMouseLeave1 = () => {
        if (window.innerWidth < 960) {
          setDropdown1(false);
        } else {
          setDropdown1(false);
        }
    };

    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    };

    const onMouseLeave3 = () => {
        if (window.innerWidth < 960) {
            setDropdown3(false);
        } else {
            setDropdown3(false);
        }
    };

    return (
        <DropdownSection>
            <RepublicDropdown onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
                <RDHead onClick={()=>setDropdown1(!dropdown1)}>Republic</RDHead>
                {
                dropdown1 && <RDUl>
                    <RDLi>
                        <input type="checkbox" /> Nordrhein-Westfalen
                    </RDLi>
                    <RDLi>
                        <input type="checkbox" /> Bayern
                    </RDLi>
                    <RDLi>
                        <input type="checkbox" /> Other Republic
                    </RDLi>
                </RDUl>
                
                }    
            </RepublicDropdown>
            <PositionDropdown onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                <PDHead onClick={()=>setDropdown2(!dropdown2)}>Position</PDHead>
                {
                dropdown2 && <PDUl>
                    <PDLi>
                        <input type="checkbox" /> Artz
                    </PDLi>
                    <PDLi>
                        <input type="checkbox" /> Pflege
                    </PDLi>
                </PDUl>
                
                }    
            </PositionDropdown>
            <LevelDropdown onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
                <LDHead onClick={()=>setDropdown3(!dropdown3)}>Level</LDHead>
                {
                dropdown3 && <LDUl>
                    <LDLi>
                        <input type="checkbox" /> Head Doctor
                    </LDLi>
                    <LDLi>
                        <input type="checkbox" /> Assistant Doctor
                    </LDLi>
                    <LDLi>
                        <input type="checkbox" /> Specialist
                    </LDLi>
                </LDUl>
                
                }    
            </LevelDropdown>
        </DropdownSection>
    );
}

export default DropdownMenu;