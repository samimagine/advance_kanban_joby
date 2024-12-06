import React, { useState } from 'react';
import { Box, Chip, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface CardTagsComponentProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

const CardTagsComponent: React.FC<CardTagsComponentProps> = ({
  tags,
  onAddTag,
  onRemoveTag,
}) => {
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
        />
      ))}
      {addingTag ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            size="small"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Add a tag"
          />
          <Button variant="contained" size="small" onClick={handleAddTag}>
            Add
          </Button>
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

export default CardTagsComponent;
