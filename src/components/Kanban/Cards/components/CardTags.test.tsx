import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardTags from './CardTags';

describe('CardTags', () => {
    const mockOnAddTag = jest.fn();
    const mockOnRemoveTag = jest.fn();

    beforeEach(() => {
        mockOnAddTag.mockClear();
        mockOnRemoveTag.mockClear();
    });

    it('renders existing tags', () => {
        const tags = ['Tag1', 'Tag2'];
        render(<CardTags tags={tags} onAddTag={mockOnAddTag} onRemoveTag={mockOnRemoveTag} />);

        tags.forEach((tag, index) => {
            expect(screen.getByText(tag)).toBeInTheDocument();
            expect(screen.getByTestId(`delete-tag-${index}`)).toBeInTheDocument();
        });
    });

    it('adds a new tag when input is submitted', () => {
        render(<CardTags tags={[]} onAddTag={mockOnAddTag} onRemoveTag={mockOnRemoveTag} />);

        fireEvent.click(screen.getByText('Tag'));
        fireEvent.change(screen.getByPlaceholderText('Add a tag'), { target: { value: 'NewTag' } });
        fireEvent.click(screen.getByTestId('add-tag-button'));

        expect(mockOnAddTag).toHaveBeenCalledWith('NewTag');
    });

    it('does not add a tag if input is empty', () => {
        render(<CardTags tags={[]} onAddTag={mockOnAddTag} onRemoveTag={mockOnRemoveTag} />);

        fireEvent.click(screen.getByText('Tag'));
        fireEvent.click(screen.getByTestId('add-tag-button'));

        expect(mockOnAddTag).not.toHaveBeenCalled();
    });

    it('toggles the tag input when add chip is clicked', () => {
        render(<CardTags tags={[]} onAddTag={mockOnAddTag} onRemoveTag={mockOnRemoveTag} />);

        fireEvent.click(screen.getByText('Tag'));
        expect(screen.getByPlaceholderText('Add a tag')).toBeInTheDocument();

        fireEvent.change(screen.getByPlaceholderText('Add a tag'), { target: { value: 'Test' } });
        expect(screen.getByDisplayValue('Test')).toBeInTheDocument();
    });
});
