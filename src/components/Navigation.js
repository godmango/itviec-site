import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

const Navigation = ({ handleSearch, onSearch, keyword }) => {
	return (
		<div>
			<div>
				<Navbar bg="light" expand="lg">
					<Navbar.Brand href="#home">itviec</Navbar.Brand>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto"></Nav>
						<Form onSubmit={handleSearch} inline>
							<FormControl
								value={keyword}
								onChange={(event) => onSearch(event)}
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button
								type="submit"
								// disabled={loading || !searchTerm}
								variant="outline-success"
							>
								Search
							</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Navigation;
