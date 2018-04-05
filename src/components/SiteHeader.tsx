import * as React from 'react';
// import { Link } from 'react-router-dom';
import {
  Container, Dropdown, Image, Menu, Visibility
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import logo from '../logo.svg';

/*
class SiteHeader extends React.Component {
    render() {
      return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/roster">Roster</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
          </ul>
        </header>
      );
    }
}
*/

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

interface SiteHeaderProps {}

interface SiteHeaderState {
  menuFixed?: 'left'| 'right'| 'bottom'| 'top' | boolean;
  overlayFixed: boolean;
}

class SiteHeader extends React.Component<SiteHeaderProps, SiteHeaderState> {
  constructor(props: SiteHeaderProps) {
    super(props);
    this.state = { 
      menuFixed: true,
      overlayFixed: true 
    };
  }
  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  render() {
    const menuFixed = this.state.menuFixed;

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          borderless={true}
          fixed={menuFixed ? 'top' : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text={true}>
            <Menu.Item>
              <Image size="mini" src={logo} />
            </Menu.Item>
            <Menu.Item header={true}>Project Name</Menu.Item>
            <Menu.Item as="a">Blog</Menu.Item>
            <Menu.Item as="a">Articles</Menu.Item>

            <Menu.Menu position="right">
              <Dropdown text="Dropdown" pointing={true} className="link item">
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Header Item</Dropdown.Header>
                  <Dropdown.Item>
                    <i className="dropdown icon" />
                    <span className="text">Submenu</span>
                    <Dropdown.Menu>
                      <Dropdown.Item>List Item</Dropdown.Item>
                      <Dropdown.Item>List Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

export default SiteHeader;