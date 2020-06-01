import React, { Component } from 'react';
import './Header.css';
import { Button, Navbar, NavDropdown, Nav, Form, FormControl, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1 className='title'>The Wall Street Journal
                    <p>
                        English Edition | June 1, 2020 | Print Edition | Video | Latest Headlines
                    </p>
                </h1>
                {/* smallTitle used for smaller windows */}
                <h1 className='smallTitle'>WSJ</h1>
                <Navbar bg="light" expand="sm">

                    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <NavDropdown title='World' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Regions' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Africa</NavDropdown.Item>
                                    <NavDropdown.Item>Asia</NavDropdown.Item>
                                    <NavDropdown.Item>Canada</NavDropdown.Item>
                                    <NavDropdown.Item>China</NavDropdown.Item>
                                    <NavDropdown.Item>Europe</NavDropdown.Item>
                                    <NavDropdown.Item>Latin America</NavDropdown.Item>
                                    <NavDropdown.Item>Middle East</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Economy</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>World Video</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title="U.S." id="basic-nav-dropdown">
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Economy</NavDropdown.Item>
                                    <NavDropdown.Item>Law</NavDropdown.Item>
                                    <NavDropdown.Item>New York</NavDropdown.Item>
                                    <NavDropdown.Item>Politics</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Columns & Blogs' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Real Time Economics</NavDropdown.Item>
                                    <NavDropdown.Item>Washington Wire</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Journal Report</NavDropdown.Item>
                                    <NavDropdown.Item>U.S. Video</NavDropdown.Item>
                                    <NavDropdown.Item>What's News Podcast</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Politics' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Election 2020</NavDropdown.Item>
                                    <NavDropdown.Item>Campaign Wire</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>WSJ/NBC News Poll</NavDropdown.Item>
                                    <NavDropdown.Item>Politics Video</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Economy' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Blogs' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Real Time Economics</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='WSJ Pro' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Bankruptcy</NavDropdown.Item>
                                    <NavDropdown.Item>Central Banking</NavDropdown.Item>
                                    <NavDropdown.Item>Private Equity</NavDropdown.Item>
                                    <NavDropdown.Item>Strategic Intelligence</NavDropdown.Item>
                                    <NavDropdown.Item>Venture Capital</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Economic Forecasting Survey</NavDropdown.Item>
                                    <NavDropdown.Item>Economy Video</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Business' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Management</NavDropdown.Item>
                                    <NavDropdown.Item>Tech/WSJ.D</NavDropdown.Item>
                                    <NavDropdown.Item>The Future of Everything</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Industries' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Aerospace & Defense</NavDropdown.Item>
                                    <NavDropdown.Item>Autos & Transportation</NavDropdown.Item>
                                    <NavDropdown.Item>Commercial Real Estate</NavDropdown.Item>
                                    <NavDropdown.Item>Consumer Products</NavDropdown.Item>
                                    <NavDropdown.Item>Energy</NavDropdown.Item>
                                    <NavDropdown.Item>Entrepreneurship</NavDropdown.Item>
                                    <NavDropdown.Item>Financial Services</NavDropdown.Item>
                                    <NavDropdown.Item>Food & Services</NavDropdown.Item>
                                    <NavDropdown.Item>Healthcare</NavDropdown.Item>
                                    <NavDropdown.Item>Hospitality</NavDropdown.Item>
                                    <NavDropdown.Item>Law</NavDropdown.Item>
                                    <NavDropdown.Item>Manufacturing</NavDropdown.Item>
                                    <NavDropdown.Item>Media & Market</NavDropdown.Item>
                                    <NavDropdown.Item>Natural Resources</NavDropdown.Item>
                                    <NavDropdown.Item>Retail</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='C-Suite' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>CFO Journal</NavDropdown.Item>
                                    <NavDropdown.Item>CIO Journal</NavDropdown.Item>
                                    <NavDropdown.Item>CMO Today</NavDropdown.Item>
                                    <NavDropdown.Item>Logistics Report</NavDropdown.Item>
                                    <NavDropdown.Item>Risk & Compliance</NavDropdown.Item>
                                    <NavDropdown.Item>The Experience Report</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Columns' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Heard on the Street</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='WSJ Pro' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Artifical Intelligence</NavDropdown.Item>
                                    <NavDropdown.Item>Bankruptcy</NavDropdown.Item>
                                    <NavDropdown.Item>Central Banking</NavDropdown.Item>
                                    <NavDropdown.Item>Cybersecurity</NavDropdown.Item>
                                    <NavDropdown.Item>Private Equity</NavDropdown.Item>
                                    <NavDropdown.Item>Strategic Intelligence</NavDropdown.Item>
                                    <NavDropdown.Item>Venture Capital</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Business Video</NavDropdown.Item>
                                    <NavDropdown.Item>Journal Report</NavDropdown.Item>
                                    <NavDropdown.Item>Business Podcast</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Tech' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>CIO Journal</NavDropdown.Item>
                                    <NavDropdown.Item>The Future of Everything</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Columns and Blogs' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Christopher Mims</NavDropdown.Item>
                                    <NavDropdown.Item>Joanna Stern</NavDropdown.Item>
                                    <NavDropdown.Item>Julie Jargon</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Billion Dollar Startup Club</NavDropdown.Item>
                                    <NavDropdown.Item>Tech Video</NavDropdown.Item>
                                    <NavDropdown.Item>Tech Podcast</NavDropdown.Item>
                                    <NavDropdown.Item>Startup Stock Tracker</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Markets' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Bonds</NavDropdown.Item>
                                    <NavDropdown.Item>Commercial Real Estate</NavDropdown.Item>
                                    <NavDropdown.Item>Commodities & Futures</NavDropdown.Item>
                                    <NavDropdown.Item>Stocks</NavDropdown.Item>
                                    <NavDropdown.Item>Personal Finance</NavDropdown.Item>
                                    <NavDropdown.Item>WSJ Money</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Columns and Blogs' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Heard on the Street</NavDropdown.Item>
                                    <NavDropdown.Item>MoneyBeat</NavDropdown.Item>
                                    <NavDropdown.Item>Wealth Adviser</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Market Data' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Market Data Home</NavDropdown.Item>
                                    <NavDropdown.Item>U.S. Stocks</NavDropdown.Item>
                                    <NavDropdown.Item>Currencies</NavDropdown.Item>
                                    <NavDropdown.Item>Commodities</NavDropdown.Item>
                                    <NavDropdown.Item>Bonds and Rates</NavDropdown.Item>
                                    <NavDropdown.Item>Mutual Funds and ETFs</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>CFO Journal</NavDropdown.Item>
                                    <NavDropdown.Item>Journal Report</NavDropdown.Item>
                                    <NavDropdown.Item>Markets Video</NavDropdown.Item>
                                    <NavDropdown.Item>Your Money Briefing Podcast</NavDropdown.Item>
                                    <NavDropdown.Item>Secrets of Wealthy Women Podcast</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Markets' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Bonds</NavDropdown.Item>
                                    <NavDropdown.Item>Commercial Real Estate</NavDropdown.Item>
                                    <NavDropdown.Item>Commodities & Futures</NavDropdown.Item>
                                    <NavDropdown.Item>Stocks</NavDropdown.Item>
                                    <NavDropdown.Item>Personal Finance</NavDropdown.Item>
                                    <NavDropdown.Item>WSJ Money</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Columns and Blogs' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Heard on the Street</NavDropdown.Item>
                                    <NavDropdown.Item>MoneyBeat</NavDropdown.Item>
                                    <NavDropdown.Item>Wealth Adviser</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Market Data' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Market Data Home</NavDropdown.Item>
                                    <NavDropdown.Item>U.S. Stocks</NavDropdown.Item>
                                    <NavDropdown.Item>Currencies</NavDropdown.Item>
                                    <NavDropdown.Item>Commodities</NavDropdown.Item>
                                    <NavDropdown.Item>Bonds and Rates</NavDropdown.Item>
                                    <NavDropdown.Item>Mutual Funds and ETFs</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>CFO Journal</NavDropdown.Item>
                                    <NavDropdown.Item>Journal Report</NavDropdown.Item>
                                    <NavDropdown.Item>Markets Video</NavDropdown.Item>
                                    <NavDropdown.Item>Your Money Briefing Podcast</NavDropdown.Item>
                                    <NavDropdown.Item>Secrets of Wealthy Women Podcast</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Opinion' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Columnists' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Sadanand Dhume</NavDropdown.Item>
                                    <NavDropdown.Item>James Freeman</NavDropdown.Item>
                                    <NavDropdown.Item>William A. Galston</NavDropdown.Item>
                                    <NavDropdown.Item>Daniel Henninger</NavDropdown.Item>
                                    <NavDropdown.Item>Holman W. Jenkins</NavDropdown.Item>
                                    <NavDropdown.Item>Andy Kessler</NavDropdown.Item>
                                    <NavDropdown.Item>William McGurn</NavDropdown.Item>
                                    <NavDropdown.Item>Walter Russell Mead</NavDropdown.Item>
                                    <NavDropdown.Item>Peggy Noonan</NavDropdown.Item>
                                    <NavDropdown.Item>Mary Anastasia O'Grady</NavDropdown.Item>
                                    <NavDropdown.Item>Jason Riley</NavDropdown.Item>
                                    <NavDropdown.Item>Joseph Sternberg</NavDropdown.Item>
                                    <NavDropdown.Item>Kimberly A. Strassel</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='Reviews' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Books</NavDropdown.Item>
                                    <NavDropdown.Item>Film</NavDropdown.Item>
                                    <NavDropdown.Item>Television</NavDropdown.Item>
                                    <NavDropdown.Item>Theater</NavDropdown.Item>
                                    <NavDropdown.Item>Art</NavDropdown.Item>
                                    <NavDropdown.Item>Masterpiece Series</NavDropdown.Item>
                                    <NavDropdown.Item>Music</NavDropdown.Item>
                                    <NavDropdown.Item>Dance</NavDropdown.Item>
                                    <NavDropdown.Item>Opera</NavDropdown.Item>
                                    <NavDropdown.Item>Exhibition</NavDropdown.Item>
                                    <NavDropdown.Item>Cultural Commentary</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Editorials</NavDropdown.Item>
                                    <NavDropdown.Item>Commentary</NavDropdown.Item>
                                    <NavDropdown.Item>Future View</NavDropdown.Item>
                                    <NavDropdown.Item>Letters to the Editor</NavDropdown.Item>
                                    <NavDropdown.Item>The Weekend Interview</NavDropdown.Item>
                                    <NavDropdown.Item>Potomac Watch Podcast</NavDropdown.Item>
                                    <NavDropdown.Item>Foreign Edition Podcast</NavDropdown.Item>
                                    <NavDropdown.Item>Opinion Video</NavDropdown.Item>
                                    <NavDropdown.Item>Notable & Quotable</NavDropdown.Item>
                                    <NavDropdown.Item>Best of the Web Newsletter</NavDropdown.Item>
                                    <NavDropdown.Item>Morning Editorial Report Newsletter</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Life & Arts' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Arts</NavDropdown.Item>
                                    <NavDropdown.Item>Books</NavDropdown.Item>
                                    <NavDropdown.Item>Cars</NavDropdown.Item>
                                    <NavDropdown.Item>Food & Drink</NavDropdown.Item>
                                    <NavDropdown.Item>Health</NavDropdown.Item>
                                    <NavDropdown.Item>Ideas</NavDropdown.Item>
                                    <NavDropdown.Item>Reading & Retreating</NavDropdown.Item>
                                    <NavDropdown.Item>Real Estate</NavDropdown.Item>
                                    <NavDropdown.Item>Science</NavDropdown.Item>
                                    <NavDropdown.Item>Sports</NavDropdown.Item>
                                    <NavDropdown.Item>Style & Fashion</NavDropdown.Item>
                                    <NavDropdown.Item>Travel</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>WSJ. Magazine</NavDropdown.Item>
                                    <NavDropdown.Item>WSJ Puzzles</NavDropdown.Item>
                                    <NavDropdown.Item>The Future of Everything</NavDropdown.Item>
                                    <NavDropdown.Item>Far & Away</NavDropdown.Item>
                                    <NavDropdown.Item>Life Video</NavDropdown.Item>
                                    <NavDropdown.Item>Arts Video</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='Real Estate' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Commercial Real Estate</NavDropdown.Item>
                                    <NavDropdown.Item>House of the Day</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop='right' title='More' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Real Estate Video</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title='WSJ. Magazine' id='basic-nav-dropdown'>
                                <NavDropdown drop='right' title='Sections' id='basic-nav-dropdown'>
                                    <NavDropdown.Item>Fashion</NavDropdown.Item>
                                    <NavDropdown.Item>Art & Design</NavDropdown.Item>
                                    <NavDropdown.Item>Travel</NavDropdown.Item>
                                    <NavDropdown.Item>Food</NavDropdown.Item>
                                    <NavDropdown.Item>Culture</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button size='sm' variant="primary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    }
}

export default Header;