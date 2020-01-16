import React from 'react';
import { Row } from '../../../assets/styles/GridSystem/index';
import { Icon, Image, Transition } from 'semantic-ui-react';
import { IconBar,ButtonBar,Header,LogoHeader,LogoImage,LogoName, DivImg, DivButton } from '../../../assets/styles/HeaderSideBar/index';
import logo from '../../../assets/images/logo.png';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const HeaderComp = () => {
  const dispatch = useDispatch();
  const toggleMenu = useSelector(state => state.menuStatus.menuStatus);
  return (
    <Row rowHeader={true}>
      <LogoHeader desktop={toggleMenu ? "240px" : "75px"}>
           <DivImg menuisOpen={toggleMenu}>

           <Transition animation="pulse" duration='300' visible={toggleMenu}>
          <LogoImage src={logo} menuisOpen={toggleMenu} />
          </Transition>

           </DivImg>

          <DivButton menuisOpen={toggleMenu}>

          <ButtonBar onClick={id => dispatch({ type: "TOGGLE_MENU" })}>
          <IconBar 
            menuisOpen={toggleMenu}
            name="bars"
            size="large"
          />
        </ButtonBar>
  
        </DivButton>

      </LogoHeader>
      
      <Header>
      </Header>
    </Row>
  );
};

export default HeaderComp;
