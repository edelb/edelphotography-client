import { ImageEntity } from './ImageEntity';

/**
 * Represents a Portfolio that includes the path
 * and number of pictures in that path.
 */
export class PortfolioEntity {
    id: number;
    title: string;
    event: string;
    path: string;
    files: number;
    images: Array<ImageEntity>;
    text: string;
}
