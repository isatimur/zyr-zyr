import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Interests from './panels/Interests';
// import ThirdScreen from './panels/ThirdScreen';
import Events from './panels/Events';
import Favourites from './panels/Favourites';
import DetailEvent from './panels/DetailEvent';
import Example from "./panels/Example";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Interests id="secondScreen" go={this.go} />
				<Example id="example" go={this.go} />
				{/*<ThirdScreen id="thirdScreen" go={this.go} />*/}
				<Events id="events" go={this.go} />
				<Favourites id="favourites" go={this.go} />
				<DetailEvent id="detailEvent" go={this.go} />
			</View>
		);
	}
}

export default App;
