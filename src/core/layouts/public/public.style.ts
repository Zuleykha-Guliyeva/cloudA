import {createUseStyles} from 'react-jss';

const styles = {
    public: {},
    content: {
        minHeight: 'calc(100vh - 700px) !important',
    },
};


export const usePublicLayoutStyles = createUseStyles(styles);
