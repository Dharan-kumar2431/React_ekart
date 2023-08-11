import dress1 from "../Assects/dress1.jpeg";
import dress2 from "../Assects/dress2.png";
import dress3 from "../Assects/dress3.jpeg";
import dress4 from "../Assects/dress4.jpg";
import dress5 from "../Assects/dress5.png";

interface CardDetails {
    id: number;
    image: string;
    name: string;
    product_cat: string;
    size: string;
    color: string;
    price: number;
  }

export const productDetails: CardDetails[] = [
    {
      id: 101,
      image: dress1,
      name: "FLUTED HEM DRESS",
      product_cat: "Summer dress",
      size: "S",
      color: "Red",
      price: 10.99,
    },
    {
      id: 102,
      image: dress2,
      name: "PLEAT PRINTED DRESS",
      product_cat: "Summer dress",
      size: "M",
      color: "Blue",
      price: 19.99,
    },
    {
      id: 103,
      image: dress3,
      name: "BEAD DETAIL DRESS",
      product_cat: "Summer dress",
      size: "L",
      color: "Green",
      price: 14.99,
    },
    {
      id: 104,
      image: dress4,
      name: "PLEATED DETAIL DRESS",
      product_cat: "Summer dress",
      size: "M",
      color: "Yellow",
      price: 24.99,
    },
    {
      id: 105,
      image: dress5,
      name: "PRINTED DRESS",
      product_cat: "Summer dress",
      size: "XXL",
      color: "Black",
      price: 9.99,
    },
  ];
