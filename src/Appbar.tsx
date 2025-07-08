import { Stack } from '@mui/joy';
import { ColorModeSwitch } from './ColorModeSwitch/ui/ColorModeSwitch.tsx';

export const Appbar = () => {
    return (
        <Stack direction="row">
            <ColorModeSwitch />
        </Stack>
    );
};
