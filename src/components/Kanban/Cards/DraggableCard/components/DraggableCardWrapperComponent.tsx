import React from 'react';
import { useDrag } from 'react-dnd';

interface DraggableCardWrapperProps {
    children: React.ReactNode;
    id: string;
    columnId: string;
    isLastViewed: boolean;
}

const DraggableCardWrapperComponent: React.FC<DraggableCardWrapperProps> = ({
    children,
    id,
    columnId,
    isLastViewed,
}) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'CARD',
        item: { id, columnId },
        canDrag: !isLastViewed,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={dragRef}
            style={{
                opacity: isDragging ? 0.5 : 1,
                marginBottom: '8px',
                padding: '16px',
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: isLastViewed ? 'default' : 'grab',
            }}
        >
            {children}
        </div>
    );
};

export default DraggableCardWrapperComponent;
