import React, { useState } from 'react';
import { Box, Chip, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';

interface CardTagsProps {
    tags: string[];
    onAddTag: (tag: string) => void;
    onRemoveTag: (tag: string) => void;
}

const CardTags: React.FC<CardTagsProps> = ({ tags, onAddTag, onRemoveTag }) => {
    const [addingTag, setAddingTag] = useState(false);
    const [tagInput, setTagInput] = useState('');

    const handleAddTag = () => {
        if (tagInput.trim()) {
            onAddTag(tagInput.trim());
            setTagInput('');
            setAddingTag(false);
        }
    };

    return (
        <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {tags.map((tag, index) => (
                <Chip
                    size="small"
                    key={index}
                    label={tag}
                    onDelete={() => onRemoveTag(tag)}
                    data-testid={`delete-tag-${index}`}
                />
            ))}
            {addingTag ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TextField
                        size="small"
                        value={tagInput}
                        onChange={e => setTagInput(e.target.value)}
                        placeholder="Add a tag"
                        sx={{
                            width: '80px',
                            fontSize: '10px',
                            '& .MuiInputBase-input': {
                                padding: '4px'
                            }
                        }}
                    />
                    <IconButton
                        size="small"
                        onClick={handleAddTag}
                        sx={{
                            color: '#61687c',
                            '&:hover': {
                                color: '#006ac6'
                            }
                        }}
                        data-testid="add-tag-button">
                        <AddCircleIcon />
                    </IconButton>
                </Box>
            ) : (
                <Chip
                    size="small"
                    label="Tag"
                    onClick={() => setAddingTag(true)}
                    icon={<AddIcon />}
                    clickable
                    color="primary"
                    variant="outlined"
                />
            )}
        </Box>
    );
};

export default CardTags;
