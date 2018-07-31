import { PhotoEntity } from './PhotoEntity';

/**
 * Represents a PhotosetEntity that includes information about the
 * Album with an Array of PhotoEntity used to create URL sizes.
 */
export class PhotosetEntity {
    id: string;
    title: string;
    description: string;
    dateCreated: string;
    dateUpdated: string;
    photos: Array<PhotoEntity>;
}
