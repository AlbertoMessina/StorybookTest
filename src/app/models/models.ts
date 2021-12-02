export interface StorybookCard extends Actionbar{

    id: string;
    title: string;
    type: string;
    imageSrc?: string;
    altImageSrc?: string;
}

export interface Actionbar {

    position : 'left' | 'right' | 'center';
    
    rounded : Boolean;
    
    backgroundColor: string;
       
}