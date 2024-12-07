import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilesSection from './FilesSection';
import { FileProps } from '../../../../../../store/interfaces';

jest.mock('./SelectDepartment/SelectDepartment', () => ({
    __esModule: true,
    default: ({
        selectedTab,
        onTabChange
    }: {
        selectedTab: string;
        onTabChange: (event: React.SyntheticEvent, newValue: string) => void;
    }) => (
        <div data-testid="select-department">
            <span>{selectedTab}</span>
            <button onClick={e => onTabChange(e, 'Mock Tab')}>Change Tab</button>
        </div>
    )
}));

jest.mock('./Files/Files', () => ({
    __esModule: true,
    default: ({ files }: { files: FileProps[] }) => (
        <div data-testid="files-component">
            <span>{files.length} files</span>
        </div>
    )
}));

describe('FilesSection', () => {
    const mockOnTabChange = jest.fn();
    const mockFiles: FileProps[] = [
        {
            id: '1',
            name: 'File1',
            date: '2023-01-01',
            description: 'Description1',
            category: 'Category1',
            type: 'pdf',
            thumbnail: ''
        },
        {
            id: '2',
            name: 'File2',
            date: '2023-01-02',
            description: 'Description2',
            category: 'Category2',
            type: 'docx',
            thumbnail: ''
        }
    ];

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the component with files and selected tab', () => {
        render(
            <FilesSection
                selectedTab="All Categories"
                onTabChange={mockOnTabChange}
                filteredFiles={mockFiles}
            />
        );

        expect(screen.getByText(/Files:/i)).toBeInTheDocument();
        expect(screen.getByTestId('select-department')).toBeInTheDocument();

        expect(screen.getByTestId('files-component')).toBeInTheDocument();
        expect(screen.getByText(/2 files/i)).toBeInTheDocument();
    });

    it('calls onTabChange when the tab is changed', () => {
        render(
            <FilesSection
                selectedTab="All Categories"
                onTabChange={mockOnTabChange}
                filteredFiles={mockFiles}
            />
        );

        fireEvent.click(screen.getByText(/Change Tab/i));

        expect(mockOnTabChange).toHaveBeenCalledTimes(1);
        expect(mockOnTabChange).toHaveBeenCalledWith(expect.any(Object), 'Mock Tab');
    });

    it('renders empty files component when no files are provided', () => {
        render(<FilesSection selectedTab="All Categories" onTabChange={mockOnTabChange} filteredFiles={[]} />);

        expect(screen.getByTestId('files-component')).toBeInTheDocument();
        expect(screen.getByText(/0 files/i)).toBeInTheDocument();
    });
});
