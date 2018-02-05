import React from 'react';

import {storiesOf} from '@storybook/react';
import StartPage from '../js/pages/start/startPage';
import Card from '../js/components/card/card.jsx';

storiesOf('Pages', module).add('Start Page', () => <StartPage/>);

storiesOf('Components', module).
    add('Card',
        () => <div style={{width: '150px'}}><Card path='./img/cards/9S.png'/>
        </div>);
