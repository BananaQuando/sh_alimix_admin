import React from 'react';
import { observer } from "mobx-react";
import withLoader from '../../HOC/WithLoader';


interface TableProps{
	tableData: {
		tableHead?: string[],
		tableBody?: string[][],
		tableFooter?: string[]
	},
	loading?: boolean
}

@observer
class Table extends React.Component<TableProps>{

	render(){
		
		const { tableBody, tableHead, tableFooter } = this.props.tableData;

		return (
			<table className="table table-striped">
				{
					tableHead ?
					<thead>
						<tr>
							{tableHead.map((col, key) => (
								<th key={key}>{col}</th>
							))}
						</tr>
					</thead> : null
				}
				{
					tableBody ?
					<tbody>
						{tableBody.map((row, rowKey) => (
							<tr key={rowKey}>{
								row.map((col, colKey) => (
									<td key={colKey}>{col}</td>
								))
							}</tr>
								
						))}
					</tbody> : null
				}
				{
					tableFooter ?
					<thead>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead> : null
				}
				
			</table>
		);
	}
}

export default withLoader(Table)