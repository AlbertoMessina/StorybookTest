export interface StorybookCard {
   
    card : Card;
    actionbar?: Actionbar;

}

export interface Actionbar {
    position : AlignType;
    rounded : Boolean;
    type :  contextType;
}

export interface Card {
    id: string;
    title: string;
    type: cardType;
    imageSrc?: string;
    altImageSrc?: string;
}

export declare type AlignType = 'left' | 'center' | 'right';

export declare type cardType = 'small-card' | 'large-card' | 'medium-card';

export declare type contextType = 'social' | 'cart';
