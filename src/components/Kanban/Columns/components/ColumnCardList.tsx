import React from 'react';
import { Tooltip, Card, CardContent, Typography, Divider, Box, Chip } from '@mui/material';
import StatusColorChip from '../../Common/StatusColorChip';
import { DetailedCard } from '../../../../store/interfaces';
import DraggableCard from '../../Cards/DraggableCard';

interface ColumnCardListProps {
    cards: DetailedCard[];
    isLastViewed: boolean;
    columnId: string;
}

const ColumnCardList: React.FC<ColumnCardListProps> = ({ cards, isLastViewed, columnId }) => (
    <>
        {cards.map((card) =>
            isLastViewed ? (
                <Tooltip key={card.id} title={card.isDeleted ? 'This card was removed from the board' : ''} arrow>
                    <div
                        style={{
                            marginBottom: '8px',
                            padding: '16px',
                            background: '#fff',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                        }}>
                        <Card
                            sx={{
                                backgroundColor: card.isDeleted ? '#f8d7da' : '#f3f4f5',
                                paddingBottom: '8px',
                            }}>
                            <CardContent>
                                <div
                                    style={{
                                        cursor: card.isDeleted ? 'not-allowed' : 'default',
                                        textDecoration: card.isDeleted ? 'line-through' : 'none',
                                    }}>
                                    <Typography variant='h6'>{card.title}</Typography>
                                    <Typography variant='body2'>{card.orderDescription}</Typography>
                                    <Divider sx={{ my: '10px' }} />
                                    {!card.isDeleted && (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                gap: 2,
                                            }}>
                                            <Typography variant='body2'>Priority:</Typography>
                                            <StatusColorChip label={card.priority} isLastViewed={isLastViewed} />
                                        </Box>
                                    )}
                                    <Typography variant='body2'>Due Date: {card.estimatedShippingDate}</Typography>
                                    <Box
                                        sx={{
                                            mt: 2,
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 1,
                                        }}>
                                        {card.tags?.map((tag, index) => <Chip key={index} label={tag} />)}
                                    </Box>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Tooltip>
            ) : (
                <DraggableCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    orderDescription={card.orderDetails?.part}
                    priority={card.priority}
                    estimatedShippingDate={card.estimatedShippingDate}
                    columnId={columnId}
                    isLastViewed={isLastViewed}
                />
            ),
        )}
    </>
);

export default ColumnCardList;
