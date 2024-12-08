import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Files from './Files';
import { File } from '../../../../../../../store/interfaces';

// eslint-disable-next-line react/display-name
jest.mock('./components/ItemFile', () => ({ file }: { file: File }) => (
    <div data-testid={`file-item-${file.id}`}>{file.name}</div>
));

describe('Files', () => {
    const mockFiles: File[] = [
        {
            id: '1',
            thumbnail: 'https://via.placeholder.com/100',
            name: 'Sample File 1',
            date: '2023-12-01',
            description: 'This is a sample file description.',
            category: 'Document',
            type: 'PDF',
        },
        {
            id: '2',
            thumbnail: 'https://via.placeholder.com/100',
            name: 'Sample File 2',
            date: '2023-12-02',
            description: 'This is another sample file description.',
            category: 'Image',
            type: 'JPEG',
        },
    ];

    it('renders the list of files correctly', () => {
        render(<Files files={mockFiles} />);

        mockFiles.forEach((file) => {
            expect(screen.getByTestId(`file-item-${file.id}`)).toBeInTheDocument();
            expect(screen.getByTestId(`file-item-${file.id}`)).toHaveTextContent(file.name);
        });
    });

    it('displays a message when no files are available', () => {
        render(<Files files={[]} />);

        expect(screen.getByText(/No files available in this category\./i)).toBeInTheDocument();
    });
});
