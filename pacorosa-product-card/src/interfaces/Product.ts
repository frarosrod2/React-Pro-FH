import { CSSProperties, ReactElement } from 'react';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount: number;
}

export interface ProductCardProps {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues: InitialValues;
}

export interface ProductTitleProps {
  title?: string;
  className?: string;
}

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductImageProps {
  img?: string;
  className?: string;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
