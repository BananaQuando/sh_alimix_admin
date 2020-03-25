import React from 'react';
import './Styles';

function App() {
  return (
		<div className="wrapper"><nav className="main-header navbar navbar-expand navbar-white navbar-light">
				<ul className="navbar-nav">
					<li className="nav-item d-none d-sm-inline-block"><a className="nav-link" href="index3.html">Home</a></li>
					<li className="nav-item d-none d-sm-inline-block"><a className="nav-link" href="#1">Contact</a></li>
				</ul>
				<form className="form-inline ml-3">
					<div className="input-group input-group-sm"><input className="form-control form-control-navbar" type="search" placeholder="Search" />
					</div>
				</form>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown"><a className="nav-link" href="#1" data-toggle="dropdown"> 3 </a>
						<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
							<div className="media"><img className="img-size-50 mr-3 img-circle" src="dist/img/user1-128x128.jpg" alt="User Avatar" />
								<div className="media-body">
									<h3 className="dropdown-item-title">Brad Diesel</h3>
									<p className="text-sm">Call me whenever you can...</p>
									<p className="text-sm text-muted">4 Hours Ago</p>
								</div>
							</div>
							<div className="media"><img className="img-size-50 img-circle mr-3" src="dist/img/user8-128x128.jpg" alt="User Avatar" />
								<div className="media-body">
									<h3 className="dropdown-item-title">John Pierce</h3>
									<p className="text-sm">I got your message bro</p>
									<p className="text-sm text-muted">4 Hours Ago</p>
								</div>
							</div>
							<div className="media"><img className="img-size-50 img-circle mr-3" src="dist/img/user3-128x128.jpg" alt="User Avatar" />
								<div className="media-body">
									<h3 className="dropdown-item-title">Nora Silvester</h3>
									<p className="text-sm">The subject goes here</p>
									<p className="text-sm text-muted">4 Hours Ago</p>
								</div>
							</div>
							<a className="dropdown-item dropdown-footer" href="#1">See All Messages</a></div>
					</li>
					<li className="nav-item dropdown"><a className="nav-link" href="#1" data-toggle="dropdown"> 15 </a>
						<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">15 Notifications
							<a className="dropdown-item" href="#1"> 4 new messages 3 mins </a>
							<a className="dropdown-item" href="#1"> 8 friend requests 12 hours </a>
							<a className="dropdown-item" href="#1"> 3 new reports 2 days </a>
							<a className="dropdown-item dropdown-footer" href="#1">See All Notifications</a></div>
					</li>
				</ul>
			</nav>
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
			<div className="content-wrapper">
				<div className="content-header">
					<div className="container-fluid">
						<div className="row mb-2">
							<div className="col-sm-6">
								<h1 className="m-0 text-dark">Dashboard</h1>
							</div>
							<div className="col-sm-6">
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item"><a href="#1">Home</a></li>
									<li className="breadcrumb-item active">Dashboard v1</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<section className="content">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-6">
								<div className="small-box bg-info">
									<div className="inner">
										<h3>150</h3>
										<p>New Orders</p>
									</div>
									<a className="small-box-footer" href="#1">More info </a></div>
							</div>
							<div className="col-lg-3 col-6">
								<div className="small-box bg-success">
									<div className="inner">
										<h3>53<sup>%</sup></h3>
										<p>Bounce Rate</p>
									</div>
									<a className="small-box-footer" href="#1">More info </a></div>
							</div>
							<div className="col-lg-3 col-6">
								<div className="small-box bg-warning">
									<div className="inner">
										<h3>44</h3>
										<p>User Registrations</p>
									</div>
									<a className="small-box-footer" href="#1">More info </a></div>
							</div>
							<div className="col-lg-3 col-6">
								<div className="small-box bg-danger">
									<div className="inner">
										<h3>65</h3>
										<p>Unique Visitors</p>
									</div>
									<a className="small-box-footer" href="#1">More info </a></div>
							</div>
						</div>
						<div className="row">
							<section className="col-lg-7 connectedSortable">
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">Sales</h3>
										<div className="card-tools">
											<ul className="nav nav-pills ml-auto">
												<li className="nav-item"><a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a></li>
												<li className="nav-item"><a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a></li>
											</ul>
										</div>
									</div>
									<div className="card-body">
										<div className="tab-content p-0">
										</div>
									</div>
								</div>
								<div className="card direct-chat direct-chat-primary">
									<div className="card-header">
										<h3 className="card-title">Direct Chat</h3>
										<div className="card-tools">3 </div>
									</div>
									<div className="card-body">
										<div className="direct-chat-messages">
											<div className="direct-chat-msg">
												<div className="direct-chat-infos clearfix">Alexander Pierce 23 Jan 2:00 pm</div>
												<img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user" />
												<div className="direct-chat-text">Is this template really for free? That's unbelievable!</div>
											</div>
											<div className="direct-chat-msg right">
												<div className="direct-chat-infos clearfix">Sarah Bullock 23 Jan 2:05 pm</div>
												<img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user" />
												<div className="direct-chat-text">You better believe it!</div>
											</div>
											<div className="direct-chat-msg">
												<div className="direct-chat-infos clearfix">Alexander Pierce 23 Jan 5:37 pm</div>
												<img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user" />
												<div className="direct-chat-text">Working with AdminLTE on a great new app! Wanna join?</div>
											</div>
											<div className="direct-chat-msg right">
												<div className="direct-chat-infos clearfix">Sarah Bullock 23 Jan 6:10 pm</div>
												<img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user" />
												<div className="direct-chat-text">I would love to.</div>
											</div>
										</div>
										<div className="direct-chat-contacts">
											<ul className="contacts-list">
												<li><a href="#1"><img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="" /></a>
													<div className="contacts-list-info"> Count Dracula <small className="contacts-list-date float-right">2/28/2015</small> How have you been? I was...</div>
												</li>
												<li><a href="#1"><img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="" /></a>
													<div className="contacts-list-info"> Sarah Doe <small className="contacts-list-date float-right">2/23/2015</small> I will be waiting for...</div>
												</li>
												<li><a href="#1"><img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="" /></a>
													<div className="contacts-list-info"> Nadia Jolie <small className="contacts-list-date float-right">2/20/2015</small> I'll call you back at...</div>
												</li>
												<li><a href="#1"><img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="" /></a>
													<div className="contacts-list-info"> Nora S. Vans <small className="contacts-list-date float-right">2/10/2015</small> Where is your new...</div>
												</li>
												<li><a href="#1"><img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="" /></a>
													<div className="contacts-list-info"> John K. <small className="contacts-list-date float-right">1/27/2015</small> Can I take a look at...</div>
												</li>
												<li><a href="#1"><img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="" /></a>
													<div className="contacts-list-info"> Kenneth M. <small className="contacts-list-date float-right">1/4/2015</small> Never mind I found...</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="card-footer"><form action="#" method="post">
											<div className="input-group"><input className="form-control" name="message" type="text" placeholder="Type Message ..." /> <button className="btn btn-primary" type="button">Send</button></div>
										</form></div>
								</div>
								<div className="card">
									<div className="card-header">
										<h3 className="card-title">To Do List</h3>
										<div className="card-tools">
											<ul className="pagination pagination-sm">
												<li className="page-item"><a className="page-link" href="#1">&laquo;</a></li>
												<li className="page-item"><a className="page-link" href="#1">1</a></li>
												<li className="page-item"><a className="page-link" href="#1">2</a></li>
												<li className="page-item"><a className="page-link" href="#1">3</a></li>
												<li className="page-item"><a className="page-link" href="#1">&raquo;</a></li>
											</ul>
										</div>
									</div>
									<div className="card-body">
										<ul className="todo-list" data-widget="todo-list">
											<li>
												<div className="icheck-primary d-inline ml-2"><input id="todoCheck1" name="todo1" type="checkbox" value="" /></div>
												Design a nice theme <small className="badge badge-danger"> 2 mins</small>
											</li>
											<li>
												<div className="icheck-primary d-inline ml-2"><input id="todoCheck2" checked name="todo2" type="checkbox" value="" /></div>
												Make the theme responsive <small className="badge badge-info"> 4 hours</small>
											</li>
											<li>
												<div className="icheck-primary d-inline ml-2"><input id="todoCheck3" name="todo3" type="checkbox" value="" /></div>
												Let theme shine like a star <small className="badge badge-warning"> 1 day</small>
											</li>
											<li>
												<div className="icheck-primary d-inline ml-2"><input id="todoCheck4" name="todo4" type="checkbox" value="" /></div>
												Let theme shine like a star <small className="badge badge-success"> 3 days</small>
											</li>
											<li>
												<div className="icheck-primary d-inline ml-2"><input id="todoCheck5" name="todo5" type="checkbox" value="" /></div>
												Check your messages and notifications <small className="badge badge-primary"> 1 week</small>
											</li>
											<li>
												<div className="icheck-primary d-inline ml-2"><input id="todoCheck6" name="todo6" type="checkbox" value="" /></div>
												Let theme shine like a star <small className="badge badge-secondary"> 1 month</small>
											</li>
										</ul>
									</div>
									<div className="card-footer clearfix"><button className="btn btn-info float-right" type="button"> Add item</button></div>
								</div>
							</section>
							<section className="col-lg-5 connectedSortable">
								<div className="card bg-gradient-primary">
									<div className="card-header border-0">
										<h3 className="card-title">Visitors</h3>
									</div>
									<div className="card-footer bg-transparent">
										<div className="row">
											<div className="col-4 text-center">
												<div className="text-white">Visitors</div>
											</div>
											<div className="col-4 text-center">
												<div className="text-white">Online</div>
											</div>
											<div className="col-4 text-center">
												<div className="text-white">Sales</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card bg-gradient-info">
									<div className="card-header border-0">
										<h3 className="card-title">Sales Graph</h3>
									</div>
									<div className="card-footer bg-transparent">
										<div className="row">
											<div className="col-4 text-center"><input className="knob" type="text" value="20" data-readonly="true" data-width="60" data-height="60" data-fgcolor="#39CCCC" />
												<div className="text-white">Mail-Orders</div>
											</div>
											<div className="col-4 text-center"><input className="knob" type="text" value="50" data-readonly="true" data-width="60" data-height="60" data-fgcolor="#39CCCC" />
												<div className="text-white">Online</div>
											</div>
											<div className="col-4 text-center"><input className="knob" type="text" value="30" data-readonly="true" data-width="60" data-height="60" data-fgcolor="#39CCCC" />
												<div className="text-white">In-Store</div>
											</div>
										</div>
									</div>
								</div>
								<div className="card bg-gradient-success">
									<div className="card-header border-0">
										<h3 className="card-title">Calendar</h3>
										<div className="card-tools">
											<div className="btn-group">
												<div className="dropdown-menu float-right"><a className="dropdown-item" href="#1">Add new event</a><a className="dropdown-item" href="#1">Clear events</a>
													<a className="dropdown-item" href="#1">View calendar</a></div>
											</div>
										</div>
									</div>
									<div className="card-body pt-0">
									</div>
								</div>
							</section>
						</div>
					</div>
				</section>
			</div>
			<footer className="main-footer"><strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
				<div className="float-right d-none d-sm-inline-block"><strong>Version</strong> 3.0.3-pre</div>
			</footer>
		</div>
  );
}

export default App;
