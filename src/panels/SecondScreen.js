import React from 'react';
import PropTypes from 'prop-types';
import {Button, Div, Group, HeaderButton, IOS, Panel, PanelHeader, platform, Search} from '@vkontakte/vkui';
import './Common.css';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Masonry from 'react-masonry-css'
import business from '../img/business.png'
import city from '../img/city.png'
import entrtainment from '../img/entartainment.png'
import family from '../img/family.png'
import music from '../img/music.png'
import sport from '../img/sport.png'
import nature from '../img/nature.png'

const interests = [
    {
        src: business
        // "https://cdn.pixabay.com/photo/2018/02/14/10/28/business-3152586_960_720.jpg"
        ,
        title: "Бизнес", id: 1
    },
    {
        src: sport
        // "https://image.shutterstock.com/image-photo/three-runners-sprinting-outdoors-sportive-260nw-393880156.jpg"
        ,
        title: "Спорт",
        id: 2
    },
    {
        src: music
        // "https://image.shutterstock.com/image-photo/charismatic-disc-jockey-turntable-dj-260nw-415922566.jpg"
        ,
        title: "Музыка",
        id: 3
    },
    {
        src: nature
        // "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg"
        , title: "Природа", id: 4
    },
    {
        src: entrtainment
        // "https://cdn.pixabay.com/photo/2016/03/03/10/17/interaction-1233873__340.jpg"
        ,
        title: "Развлечения Отдых",
        id: 5
    },
    {
        src: city
        // "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg"
        , title: "Город", id: 6
    },
    {
        src: family
        // "https://cdn.pixabay.com/photo/2016/11/08/05/08/adult-1807500__340.jpg"
        , title: "Семья и дети", id: 7
    },
    {src: "https://cdn.pixabay.com/photo/2016/02/19/11/15/american-1209605__340.jpg", title: "Изучение языков", id: 8}
]

const osname = platform();
const selected = [];
const cells = interests.map((item, key, props) =>
    <Group>
        <Div>
            <Button id="bg" style={{
                backgroundImage: "url(" + item.src + ")",
                height: 200,
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingBottom: '6px',
                borderRadius: '12px'
            }}
                    onClick={function () {
                        let idx = selected.indexOf(item);
                        if (idx > 0) {
                            selected[idx].pop();
                        } else {
                            selected.push(item);
                        }
                        console.log("pushed or not?")
                        return this;
                    }} data-to="home"
            >
                {/*<img src={item.src}/>*/}
                <Div className="centered"
                     style={{
                         color: "#fff", fontSize: "30pt",
                         lineHeight: 'normal'
                     }}
                >{item.title}</Div>
            </Button>
        </Div>
    </Group>
);
const SecondScreen = props => (

    <Panel id={props.id}>
        <PanelHeader
            left={<HeaderButton onClick={props.go} data-to="home">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}
        >Интересы

        </PanelHeader>
        <Search value="" onChange={function change() {
            console.log("CHANGE!");
        }}/>
        <Div id="introId">Выбери 4</Div>
        <Masonry
            // breakpointCols={breakpointColumnsObj}
        >
            {cells}
        </Masonry>
    </Panel>
);

SecondScreen.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default SecondScreen;
