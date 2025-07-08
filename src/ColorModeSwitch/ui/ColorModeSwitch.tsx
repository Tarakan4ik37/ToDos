import {
    Dropdown,
    IconButton,
    ListItemDecorator,
    Menu,
    MenuButton,
    MenuItem,
    useColorScheme,
} from '@mui/joy';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export const ColorModeSwitch = () => {
    const { mode, setMode } = useColorScheme();

    const handleLightModeChoose = () => {
        setMode('light');
    };

    const handleDarkModeChoose = () => {
        setMode('dark');
    };

    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { color: 'neutral', size: 'sm' } }}
            >
                {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </MenuButton>
            <Menu placement="right-start">
                <MenuItem onClick={handleLightModeChoose}>
                    <ListItemDecorator>
                        <LightModeIcon />
                    </ListItemDecorator>{' '}
                    Светлая тема
                </MenuItem>
                <MenuItem onClick={handleDarkModeChoose}>
                    <ListItemDecorator>
                        <DarkModeIcon />
                    </ListItemDecorator>{' '}
                    Темная тема
                </MenuItem>
            </Menu>
        </Dropdown>
    );
};
