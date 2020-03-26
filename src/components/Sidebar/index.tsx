import React from 'react';


export default class Sidebar extends React.Component {


	render (){
		return (
			<aside className="main-sidebar sidebar-dark-primary elevation-4"><a className="brand-link" href="index3.html"><img className="brand-image img-circle elevation-3" src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" /> AdminLTE 3 </a>
				<div className="sidebar">
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<div className="image"><img className="img-circle elevation-2" src="dist/img/user2-160x160.jpg" alt="User" /></div>
						<div className="info"><a className="d-block" href="#1">Alexander Pierce</a></div>
					</div>
					<nav className="mt-2">
						<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" data-accordion="false">
							<li className="nav-item has-treeview menu-open">
								<p>Dashboard</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Dashboard v1</p>
									</li>
									<li className="nav-item">
										<p>Dashboard v2</p>
									</li>
									<li className="nav-item">
										<p>Dashboard v3</p>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<p>Widgets New</p>
							</li>
							<li className="nav-item has-treeview">
								<p>Layout Options 6</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Top Navigation</p>
									</li>
									<li className="nav-item">
										<p>Top Navigation + Sidebar</p>
									</li>
									<li className="nav-item">
										<p>Boxed</p>
									</li>
									<li className="nav-item">
										<p>Fixed Sidebar</p>
									</li>
									<li className="nav-item">
										<p>Fixed Navbar</p>
									</li>
									<li className="nav-item">
										<p>Fixed Footer</p>
									</li>
									<li className="nav-item">
										<p>Collapsed Sidebar</p>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<p>Charts</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>ChartJS</p>
									</li>
									<li className="nav-item">
										<p>Flot</p>
									</li>
									<li className="nav-item">
										<p>Inline</p>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<p>UI Elements</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>General</p>
									</li>
									<li className="nav-item">
										<p>Icons</p>
									</li>
									<li className="nav-item">
										<p>Buttons</p>
									</li>
									<li className="nav-item">
										<p>Sliders</p>
									</li>
									<li className="nav-item">
										<p>Modals &amp; Alerts</p>
									</li>
									<li className="nav-item">
										<p>Navbar &amp; Tabs</p>
									</li>
									<li className="nav-item">
										<p>Timeline</p>
									</li>
									<li className="nav-item">
										<p>Ribbons</p>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<p>Forms</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>General Elements</p>
									</li>
									<li className="nav-item">
										<p>Advanced Elements</p>
									</li>
									<li className="nav-item">
										<p>Editors</p>
									</li>
									<li className="nav-item">
										<p>Validation</p>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<p>Tables</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Simple Tables</p>
									</li>
									<li className="nav-item">
										<p>DataTables</p>
									</li>
									<li className="nav-item">
										<p>jsGrid</p>
									</li>
								</ul>
							</li>
							<li className="nav-header">EXAMPLES</li>
							<li className="nav-item">
								<p>Calendar 2</p>
							</li>
							<li className="nav-item">
								<p>Gallery</p>
							</li>
							<li className="nav-item has-treeview">
								<p>Mailbox</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Inbox</p>
									</li>
									<li className="nav-item">
										<p>Compose</p>
									</li>
									<li className="nav-item">
										<p>Read</p>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<p>Pages</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Invoice</p>
									</li>
									<li className="nav-item">
										<p>Profile</p>
									</li>
									<li className="nav-item">
										<p>E-commerce</p>
									</li>
									<li className="nav-item">
										<p>Projects</p>
									</li>
									<li className="nav-item">
										<p>Project Add</p>
									</li>
									<li className="nav-item">
										<p>Project Edit</p>
									</li>
									<li className="nav-item">
										<p>Project Detail</p>
									</li>
									<li className="nav-item">
										<p>Contacts</p>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<p>Extras</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Login</p>
									</li>
									<li className="nav-item">
										<p>Register</p>
									</li>
									<li className="nav-item">
										<p>Forgot Password</p>
									</li>
									<li className="nav-item">
										<p>Recover Password</p>
									</li>
									<li className="nav-item">
										<p>Lockscreen</p>
									</li>
									<li className="nav-item">
										<p>Legacy User Menu</p>
									</li>
									<li className="nav-item">
										<p>Language Menu</p>
									</li>
									<li className="nav-item">
										<p>Error 404</p>
									</li>
									<li className="nav-item">
										<p>Error 500</p>
									</li>
									<li className="nav-item">
										<p>Pace</p>
									</li>
									<li className="nav-item">
										<p>Blank Page</p>
									</li>
									<li className="nav-item">
										<p>Starter Page</p>
									</li>
								</ul>
							</li>
							<li className="nav-header">MISCELLANEOUS</li>
							<li className="nav-item">
								<p>Documentation</p>
							</li>
							<li className="nav-header">MULTI LEVEL EXAMPLE</li>
							<li className="nav-item">
								<p>Level 1</p>
							</li>
							<li className="nav-item has-treeview">
								<p>Level 1</p>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<p>Level 2</p>
									</li>
									<li className="nav-item has-treeview">
										<p>Level 2</p>
										<ul className="nav nav-treeview">
											<li className="nav-item">
												<p>Level 3</p>
											</li>
											<li className="nav-item">
												<p>Level 3</p>
											</li>
											<li className="nav-item">
												<p>Level 3</p>
											</li>
										</ul>
									</li>
									<li className="nav-item">
										<p>Level 2</p>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<p>Level 1</p>
							</li>
							<li className="nav-header">LABELS</li>
							<li className="nav-item">
								<p className="text">Important</p>
							</li>
							<li className="nav-item">
								<p>Warning</p>
							</li>
							<li className="nav-item">
								<p>Informational</p>
							</li>
						</ul>
					</nav></div>
			</aside>
		);
	}

}