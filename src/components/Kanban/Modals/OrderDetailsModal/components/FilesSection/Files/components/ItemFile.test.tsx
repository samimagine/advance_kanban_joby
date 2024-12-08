import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemFile from './ItemFile';

describe('ItemFile', () => {
    const mockFile = {
        id: '1',
        thumbnail: 'https://via.placeholder.com/100',
        name: 'Sample File',
        date: '2023-12-01',
        description: 'This is a sample file description.',
        category: 'Document',
        type: 'PDF',
    };

    it('renders the file details correctly', () => {
        render(<ItemFile file={mockFile} />);

        const thumbnailImage = screen.getByRole('img', { name: /sample file/i });
        expect(thumbnailImage).toBeInTheDocument();
        expect(thumbnailImage).toHaveAttribute('src', mockFile.thumbnail);

        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText(mockFile.name)).toBeInTheDocument();

        expect(screen.getByText('Date')).toBeInTheDocument();
        expect(screen.getByText(mockFile.date)).toBeInTheDocument();

        expect(screen.getByText('File Description')).toBeInTheDocument();
        expect(screen.getByText(mockFile.description)).toBeInTheDocument();
    });
});
