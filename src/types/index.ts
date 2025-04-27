export interface Property {
    id: string;
    title: string;
    address: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    imageUrl: string;
    featured: boolean;
    type: 'sale' | 'rent';
    built: number;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    content: string;
    imageUrl: string;
  }
  
  export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
  }