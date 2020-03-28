import React from 'react';
import TabButton from './TabButton';


interface Props{
	id?: string,
	title?: string,
	cardClass?: string,
	cardBodyClass?: string,
	cardHeaderClass?: string,
	cardTools?: boolean,
	cardTabs?: {
		title: string,
		link: string,
		tabsID: string
	}[]
}

export default class Card extends React.Component<Props> {

	render() {

		const { title, children, cardBodyClass, cardHeaderClass, cardClass, cardTabs, cardTools, id } = this.props;

		return (
			<div id={ id ? id : ''} className={`card ${ cardClass ? cardClass : ''}`}>
				{ title || cardTabs || cardTools ? <div className={`card-header ${ cardHeaderClass ? cardHeaderClass : ''}`}>
					{ title ? <h3 className="card-title">{ title }</h3> : ''}
					{
						cardTabs ?
						<ul className="nav nav-pills">
							{ cardTabs.map((tab, index) => (
								<li key={index} className="nav-item">
									<TabButton active={ index === 0 ? true : false} tabsID={tab.tabsID} link={tab.link} title={tab.title}  />
								</li>
							)) }
						</ul>
						: ''
					}
					{
						cardTools ?
						<div className="card-tools">
							<button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
							<i className="fas fa-minus"></i></button>
							<button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
							<i className="fas fa-times"></i></button>
						</div>
						: ''
					}
				</div> : '' }
				<div className={`card-body ${ cardBodyClass ? cardBodyClass : ''}`}>
					{ children }
				</div>
			</div>
		);
	}
}