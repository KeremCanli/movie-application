import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {MenuStyle, FixedMenuStyle} from "../Helpers/StyleHelper.js";
class Header extends React.Component
  {
    state={MenuFixed: null,
           OverlayFixed: false};
    render ()
      {
        const {MenuFixed}=this.state;
        return (<div>
                  <Visibility onBottomPassed={this.StickTopMenu} onBottomVisible={this.UnStickTopMenu} once={false}>
                    <Menu borderless fixed={MenuFixed && "top"} style={MenuFixed ? FixedMenuStyle : MenuStyle}>
                      <Container text>
                        <Menu.Item as={Link} to="/">
                          <Image src="https://react.semantic-ui.com/logo.png" size="mini"/>
                          <Menu.Item header>Movie Application</Menu.Item>
                        </Menu.Item>
                        <Menu.Item as={NavLink} to="/movies">Movies</Menu.Item>
                        <Menu.Item as={NavLink} to="/movieoperations">Movie Operations</Menu.Item> 
                      </Container>
                    </Menu>
                  </Visibility>
                </div>);
      }
    StickTopMenu=()=>
      {
        this.setState ({MenuFixed: true});
      }
    UnStickTopMenu=()=>
      {
        this.setState ({MenuFixed: null});
      }
  }
export default Header;