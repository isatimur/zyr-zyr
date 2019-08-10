import React from 'react';
import PropTypes from 'prop-types';
import {Div, HeaderButton, IOS, Panel, PanelHeader, platform} from '@vkontakte/vkui';
import advertise from '../img/advertise.jpg';
import './Common.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

const Events = props => (
    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >
            Лента
        </PanelHeader>
        <Div id="advId">
            <img className="advertise" src={advertise} alt="Рекламное сообщение"/>
        </Div>
        <Div id="advId">
            <Div id="introId">Уточни немного?</Div>
        </Div>
    </Panel>
);

Events.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Events;
