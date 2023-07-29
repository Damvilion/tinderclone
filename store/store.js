import { configureStore } from '@reduxjs/toolkit';
import userSetter from '../redux/user';

export default configureStore({
    reducer: {
        user: userSetter,
    },
});
