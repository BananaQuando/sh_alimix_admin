import React from 'react';
import LoaderSpin from '../components/LoaderSpin';

export interface LoadingProps {
	
}

type Optionalize<T extends K, K> = Omit<T, keyof K>;

function withLoader<T extends LoadingProps = LoadingProps>(WrappedComponent: React.ComponentType<T>) {

	return class ComponentWithLoader extends React.Component<Optionalize<T, LoadingProps>> {
	
		public render() {
			
			// @ts-ignore
			if (this.props.loading === 'undefined'){
				return <WrappedComponent  {...(this.props as T)} />;
			}else{
				// @ts-ignore
				return this.props.loading ? <LoaderSpin /> : <WrappedComponent  {...(this.props as T)} />;
			}
			
		}
	};
}

export default withLoader;