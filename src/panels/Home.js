import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Button, Div, Group, ListItem, Panel, PanelHeader} from '@vkontakte/vkui';
import logo from '../img/logo.png'
import intro from '../img/intro.png'
import button from '../img/button.png'

var buttonStyle = {
    backgroundColor:  `rgba(255, 0, 0, 0.81)`,
    color: "white",
    bottom: "5%"

}
const Home = ({id, go, fetchedUser}) => (
    <Panel id={id}>
        <PanelHeader>Слышь, Зырь, Приходи</PanelHeader>
        {/*{fetchedUser &&*/}
        {/*<Group title="User Data Fetched with VK Connect">*/}
        {/*    <ListItem*/}
        {/*        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}*/}
        {/*        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}*/}
        {/*    >*/}
        {/*        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}*/}
        {/*    </ListItem>*/}
        {/*</Group>}*/}
        {/*<img src={start} className="Favourites"/>*/}
        <Group id="eventId">
            <Div style={{
                padding: '100px'
            }}/>
            <img src={logo} alt=""/>
            <Div style={{
                padding: '100px'
            }}/>
            <img src={intro} alt=""/>
            <img src={button} alt="" onClick={go} data-to="secondScreen" />
            {/*<Div>*/}
            {/*    <Div id="buttonId">*/}
            {/*        <Button  style={buttonStyle} size="x1" level="2"  onClick={go} data-to="secondScreen" >*/}
            {/*            Начать*/}
            {/*        </Button>*/}
            {/*    </Div>*/}
            {/*</Div>*/}
        </Group>


    </Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
