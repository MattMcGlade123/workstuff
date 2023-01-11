export interface LinkProps {
  href: string;
  linkName: string
}

export interface MenuProps {
  menu: LinkProps[]
}

export interface HeaderState {
  header: {
    menu: MenuProps,
    logo: string
  }
}

export interface BasketItem {
  name: string,
  price: string,
  quantity: number
}

export interface BasketState {
  basket: BasketItem[]
}

export interface PostInterface {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface ProductItem {
  name: string,
  description: string,
  price: string,
  images: string[]
}