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
  price: number,
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