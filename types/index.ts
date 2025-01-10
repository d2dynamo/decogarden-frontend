export interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  has2fa?: boolean;
  avatar?: string;
}

export interface Item {
  id: string;
  name: string;
  description?: string;
  properties?: Record<string, any>;
  price: number;
  image: string;
  stock: number;
}

export interface ItemBasic
  extends Pick<Item, "id" | "name" | "price" | "image"> {}
