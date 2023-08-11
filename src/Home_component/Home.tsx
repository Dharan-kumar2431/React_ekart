import Sidenavebar from "../Sidenavebar_component/Sidenavebar";
import "./Home.css";
import { useState, useContext, useEffect, useCallback} from "react";
import { FaRupeeSign } from "react-icons/fa";
import { ProductdetailsContext } from "../Context_component/Productdetailscontext";
import { CartidProvider } from "../Context_component/Cartidcontext";

const Home = () => {
  const [handelmouse, sethandelmouse] = useState<number | null>(null);
  const [addToCartId, setaddToCartId] = useState(0);

  const cardcontextdetails = useContext(ProductdetailsContext);
  const [cardDetails, setCardDetails] = useState(cardcontextdetails)
  // const filterdatavalues = useContext(FilterPriceContext);
  // console.log('filterdatavalues #####==>', filterdatavalues)

  const colors = ["Red", "Blue", "Green", "Yellow"];

  const addToCart = (cartid: number) => {
    setaddToCartId(cartid);
  };

  // useEffect(() => {
  //   // const filteritems = cardDetails.filter((values)=> values.price >= filterdatavalues.MIN && values.price <= filterdatavalues.MAX);
  //   // console.log('filteritems ========>>>', filteritems)
  // }, [filterdatavalues])

  const filterdataitems = (min:number, max:number) => {
    const filteritems = cardDetails.filter((values) => values.price >= min && values.price <= max);
    setCardDetails(filteritems);
  }

  const filteritems = useCallback(filterdataitems,[])



  return (
    <CartidProvider value={addToCartId}>
      <div className="d-flex">
        <div>
          <Sidenavebar filterdata={filteritems} />
        </div>
        <div className="products_details">
          <div>
            <p>Showing 1-5 of 48</p>
          </div>
          <div className="cardrow">
            {cardDetails.map((values) => (
              <div
                className="card productcards d-flex"
                key={values.id}
                onMouseEnter={() => sethandelmouse(values.id)}
                onMouseLeave={() => sethandelmouse(null)}
              >
                <div className="image_link">
                  <a href="#">
                    <img
                      className="card-img-top card_img"
                      src={values.image}
                      alt="Card image cap"
                    />
                  </a>
                </div>
                <div className="card-body">
                  <div className="d-flex">
                    <h5 className="card-title">{values.name}</h5>
                    <FaRupeeSign className="ruppe_icon" />
                    <h5 className="price_details">{values.price}</h5>
                  </div>
                  <p className="card-text">{values.product_cat}</p>

                  <div
                    className={`cardadddetails ${
                      handelmouse === values.id ? "hovered" : ""
                    }`}
                  >
                    <section>
                      <h6 className="cardsizeheading">SIZES</h6>
                      <small> XS, S, M, L, XL, XXL, 3XL, 4XL, 5XL</small>
                    </section>

                    <section className="mt-3">
                      <h6 className="cardcolorheading">COLORS</h6>
                      <ul className="color-list">
                        <div className="d-flex">
                          {colors.map((color, index) => (
                            <a href="#" key={index}>
                              <li>
                                <span
                                  className="color-circle"
                                  style={{ backgroundColor: color }}
                                ></span>
                              </li>
                            </a>
                          ))}
                        </div>
                      </ul>
                    </section>

                    <section className="d-flex">
                      <button
                        className="col-6 cardbutton addtocartbutton"
                        onClick={() => addToCart(values.id)}
                      >
                        Add to Cart
                      </button>
                      <button className="col-6 cardbutton buynowbutton">
                        Buy Now
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CartidProvider>
  );
};

export default Home;
