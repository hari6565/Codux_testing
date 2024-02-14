import React from 'react';
import { createBoard } from '@wixc3/react-board';
import About from '../../../component/About';

export default createBoard({
    name: 'About',
    Board: () => <About />,
    isSnippet: true,
    environmentProps: {
canvasWidth: 1347,
canvasHeight: 64
}
});