import { FileProps } from './Files';

export interface Cards {
  id: string;
  title: string;
  priority: string;
  estimatedShippingDate: string;
}

export interface DetailedCardProps extends Cards {
  orderDetails?: {
    part: string;
    partNumber: string;
    releaseStatus: string;
    drawingNumber: string;
    flightArticle: string;
  };
  processDetails?: {
    material: string;
    materialStockSize: string;
    surfaceTreatment: string;
    machine: string;
  };
  files?: FileProps[];
  orderDescription?: string;
  isDeleted?: boolean;
  tags?: string[];
}
