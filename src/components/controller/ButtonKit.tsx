import React from 'react';

import WriteIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonKit = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<WriteIcon />}>
                Write
            </Button>
        </Stack>
    );
};

export default ButtonKit;