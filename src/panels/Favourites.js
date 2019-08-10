import React from 'react';
import PropTypes from 'prop-types';
import {Div, HeaderButton, IOS, Panel, PanelHeader, platform} from '@vkontakte/vkui';
import circles from '../img/circles.png';
import './Common.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Favourites = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
        </PanelHeader>
        <Div id="eventId">
            <Div id="introId">Уточни немного?</Div>
            <img className="Favourites" src={circles} alt="Второе окно интересов!"/>
        </Div>
    </Panel>
);

Favourites.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Favourites;
