import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProcessDetails from './ProcessDetails';

describe('ProcessDetails', () => {
    it('renders process details correctly', () => {
        const mockDetails = {
            id: '1',
            title: 'Test Title',
            priority: 'High',
            estimatedShippingDate: '2023-12-15',
            processDetails: {
                material: 'Steel',
                materialStockSize: '20x20x100 mm',
                surfaceTreatment: 'Anodizing',
                machine: 'CNC Milling Machine'
            }
        };

        render(<ProcessDetails details={mockDetails} />);

        expect(screen.getByText('Material')).toBeInTheDocument();
        expect(screen.getByText('Steel')).toBeInTheDocument();
        expect(screen.getByText('Material Stock Size')).toBeInTheDocument();
        expect(screen.getByText('20x20x100 mm')).toBeInTheDocument();
        expect(screen.getByText('Surface Treatment')).toBeInTheDocument();
        expect(screen.getByText('Anodizing')).toBeInTheDocument();
        expect(screen.getByText('Machine')).toBeInTheDocument();
        expect(screen.getByText('CNC Milling Machine')).toBeInTheDocument();
    });

    it('renders fallback values when process details are missing', () => {
        const mockDetails = {
            id: '2',
            title: 'Fallback Test',
            priority: 'Medium',
            estimatedShippingDate: '2023-12-20',
            processDetails: {
                material: '',
                materialStockSize: '',
                surfaceTreatment: '',
                machine: ''
            }
        };

        render(<ProcessDetails details={mockDetails} />);

        expect(screen.getByText('Material')).toBeInTheDocument();
        expect(screen.getAllByText('-')).toHaveLength(4);
    });

    it('renders correctly when no processDetails are provided', () => {
        const mockDetails = {
            id: '3',
            title: 'No Details Test',
            priority: 'Low',
            estimatedShippingDate: '2023-12-25'
        };

        render(<ProcessDetails details={mockDetails} />);

        expect(screen.getByText('Material')).toBeInTheDocument();
        expect(screen.getAllByText('-')).toHaveLength(4);
    });
});
