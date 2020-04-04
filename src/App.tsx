import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentHeader from './components/ContentHeader';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Product from './pages/Product';
import Footer from './components/Footer';
import './Config';
import { observer } from 'mobx-react';



@observer
export default class App extends React.Component{

	render(){
		return (
			<Router>
				<div className="wrapper">
					<Header />
					<Sidebar />
					<div className="content-wrapper">
						<ContentHeader />
						<section className="content">
							<div className="container-fluid">
								<Switch>
									<Route path='/' exact component={Home} />
									<Route path='/categories' exact component={Categories} />
									<Route path='/categories/:categoryID' component={Category} />
									<Route path='/products/:productID' component={Product} />
								</Switch>
							</div>
						</section>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}
