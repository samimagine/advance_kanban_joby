import React from 'react';
import { Typography, Box } from '@mui/material';
import { DetailedCardProps } from '../../../../../../store/interfaces';

interface ProcessDetailsProps {
    details?: DetailedCardProps;
}

const ProcessDetailsComponent: React.FC<ProcessDetailsProps> = ({
    details,
}) => {
    const processDetails = [
        { label: 'Material', value: details?.processDetails?.material },
        {
            label: 'Material Stock Size',
            value: details?.processDetails?.materialStockSize,
        },
        {
            label: 'Surface Treatment',
            value: details?.processDetails?.surfaceTreatment,
        },
        { label: 'Machine', value: details?.processDetails?.machine },
    ];

    return (
        <>
            <Typography variant="h6" sx={{ margin: '16px' }}>
                Process Details
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {processDetails.map((detail, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            borderBottom: '1px solid #ddd',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 'bold', flex: 1 }}
                        >
                            {detail.label}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ textAlign: 'right', flex: 2 }}
                        >
                            {detail.value || '-'}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default ProcessDetailsComponent;
