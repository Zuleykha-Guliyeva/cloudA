import colors from 'assets/styles/abstracts/color';
import {createUseStyles} from 'react-jss';

const styles = {
    public: {
        background: colors.bodyColor,
    },
    content: {
        minHeight: 'calc(100vh - 700px) !important',
    },
};


export const usePublicLayoutStyles = createUseStyles(styles);
