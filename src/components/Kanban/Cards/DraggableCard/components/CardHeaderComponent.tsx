import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface CardHeaderProps {
    title: string;
    orderDescription?: string;
    currentCard?: { title?: string };
    onDetailsClick: () => void;
    onMenuClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    addLastViewed: () => void;
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, currentCard, onDetailsClick, onMenuClick, addLastViewed }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const { scrollWidth, clientWidth } = textRef.current;
            setIsTruncated(scrollWidth > clientWidth);
        }
    }, [currentCard?.title, title]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-between'
                }}>
                <Tooltip title={isTruncated ? currentCard?.title || title : ''}>
                    <Typography
                        ref={textRef}
                        variant="h6"
                        sx={{
                            maxWidth: '120px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            cursor: 'default'
                        }}>
                        {currentCard?.title || title}
                    </Typography>
                </Tooltip>
                <Box sx={{ marginRight: '-8px' }}>
                    <IconButton
                        aria-label="details"
                        size="medium"
                        onClick={() => {
                            addLastViewed();
                            onDetailsClick();
                        }}
                        sx={{
                            padding: 0
                        }}>
                        <Tooltip title="Details" placement="bottom">
                            <DescriptionIcon
                                fontSize="inherit"
                                sx={{
                                    color: '#626879',
                                    '&:hover': {
                                        color: '#006ac6'
                                    }
                                }}
                            />
                        </Tooltip>
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={event => onMenuClick(event)}
                        sx={{
                            padding: 0,
                            '&:hover': {
                                color: '#006ac6'
                            }
                        }}>
                        <MoreVertIcon
                            sx={{
                                color: '#626879',
                                '&:hover': {
                                    color: '#006ac6'
                                }
                            }}
                        />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default CardHeader;
