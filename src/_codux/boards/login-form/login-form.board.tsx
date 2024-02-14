import React from 'react';
import { createBoard } from '@wixc3/react-board';
import LoginForm from '../../../component/LoginForm';

export default createBoard({
    name: 'LoginForm',
    Board: () => <LoginForm />,
    isSnippet: true,
    environmentProps: {
canvasWidth: 1490,
canvasHeight: 792
}
});