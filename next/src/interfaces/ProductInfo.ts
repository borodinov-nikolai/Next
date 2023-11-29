export interface ProductInfo {
    retval: number
    retdesc: string
    product: Product
  }
  
  export interface Product {
    id: number
    id_prev: number
    id_next: number
    name: string
    price: number
    currency: string
    url: string
    info: string
    add_info: string
    release_date: string
    agency_fee: number
    agency_sum: number
    agency_id: number
    collection: string
    propertygood: number
    is_available: number
    show_rest: number
    num_in_lock: number
    owner: number
    section_id: number
    pwyw: number
    label: string
    no_cart: number
    prices: Prices
    payment_methods: PaymentMethod[]
    preview_imgs: PreviewImg[]
    type_good: number
    type: string
    text: Text
    category_id: number
    breadcrumbs: any[]
    discounts: Discount[]
    options: Option[]
    options_check: number
    statistics: Statistics
    seller: Seller
  }
  
  export interface Prices {
    initial: Initial
    default: Default
  }
  
  export interface Initial {
    RUB: number
    USD: number
    EUR: number
    UAH: number
    mBTC: number
    mLTC: number
  }
  
  export interface Default {
    RUB: number
    USD: number
    EUR: number
    UAH: number
    mBTC: number
    mLTC: number
  }
  
  export interface PaymentMethod {
    name: string
    code: string
    hide: number
    currencies: Currency[]
  }
  
  export interface Currency {
    currency: string
    code: string
    price: number
  }
  
  export interface PreviewImg {
    id: number
    url: string
    width: number
    height: number
  }
  
  export interface Text {
    date: string
    size: number
  }
  
  export interface Discount {
    summa: number
    percent: number
  }
  
  export interface Option {
    id: number
    name: string
    label: string
    comment: string
    type: string
    separate_content: number
    required: number
    modifier_visible: number
    variants: Variant[]
  }
  
  export interface Variant {
    value: number
    text: string
    default: number
    modify: string
    modify_value: number
    modify_value_default: number
    modify_type: string
  }
  
  export interface Statistics {
    sales: number
    sales_hidden: number
    refunds: number
    refunds_hidden: number
    good_reviews: number
    good_reviews_hidden: number
    bad_reviews: number
    bad_reviews_hidden: number
  }
  
  export interface Seller {
    id: number
    name: string
  }