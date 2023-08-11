import "./Sidenavebar.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CartidContext } from "../Context_component/Cartidcontext";
import { ProductdetailsContext } from "../Context_component/Productdetailscontext";
import { useFormik } from "formik";

interface CardDetails {
  id: number;
  image: string;
  name: string;
  price: number;
}

type FilterDataFunction = (min:number, max:number) => void;

const Sidenavebar = ({filterdata}: any) => {
  const cartsitems = useContext(ProductdetailsContext);

  const cardid = useContext(CartidContext);
  console.log("cardid", cardid);

  const [addcartitems, setAddcartitems] = useState<CardDetails[]>([]);

  const [filterdatavalues, setfilterdatavalues] = useState({
    MIN: 0,
    MAX: 10000,
  });
  console.log("filterdatavalues====>", filterdatavalues);

  const formik = useFormik({
    initialValues: {
      MIN: 0,
      MAX: 10000,
    },
    onSubmit: (values) => {
      console.log(values);
      filterdata(values.MIN, values.MAX)
      setfilterdatavalues(values);
    },
  });

  useEffect(() => {
    const addcartitem = cartsitems.filter((values) => values.id === cardid);

    if (
      addcartitem.length > 0 &&
      !addcartitems.some((item) => item.id === cardid)
    ) {
      setAddcartitems((prevItems) => [...prevItems, ...addcartitem]);
    }
  }, [cardid]);

  // const filterDataByRange = (min: number, max: number) =>{
  //   console.log(min, max);
  // }

  


  return (
        <div>
          <div id="sidebar">
            <header>
              <div className="d-flex">
                <p className="carttext">Cart</p>
                <FaShoppingBag className="carticon" />
              </div>
              <div>
                <section
                  className={`${
                    addcartitems.length > 0 ? "cardpresentitemvalue" : ""
                  }`}
                >
                  <small className="cartitem">No item display</small>
                </section>

                <section>
                  <div>
                    {addcartitems.map((values) => (
                      <div className="card cartcard" key={values.id}>
                        <div className="row no-gutters">
                          <div className="col-4">
                            <img
                              className="card-img sidebarcartimag"
                              src={values.image}
                              alt="Suresh Dasari Card"
                            />
                          </div>
                          <div className="col-8">
                            <section className="d-flex cartcardtext">
                              <h6 className="cartcardname">{values.name}</h6>
                              <FaRupeeSign className="cartruppe_icon" />
                              <h6 className="cartcardprice">{values.price}</h6>
                            </section>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </header>

            {/* <div className="catrgories">
              <p className="sidenaveheading">CATEGORIES</p>
              <div>
                <ul className="cat_list">
                  <li className="cat_items">
                    <input
                      type="checkbox"
                      id="new-arrivals"
                      value="New Arrivals"
                    />{" "}
                    <label htmlFor="new-arrivals">New Arrivals</label>
                  </li>
                  <li className="cat_items">
                    <input
                      type="checkbox"
                      id="accessories"
                      value="Accessories"
                    />{" "}
                    <label htmlFor="accessories">Accessories</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="bags" value="Bags" />{" "}
                    <label htmlFor="bags">Bags</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="dresses" value="Dresses" />{" "}
                    <label htmlFor="dresses">Dresses</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="jackets" value="Jackets" />{" "}
                    <label htmlFor="jackets">Jackets</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="jewelry" value="Jewelry" />{" "}
                    <label htmlFor="jewelry">Jewelry</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="shoes" value="Shoes" />{" "}
                    <label htmlFor="shoes">Shoes</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="shirts" value="Shirts" />{" "}
                    <label htmlFor="shirts">Shirts</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="sweaters" value="Sweaters" />{" "}
                    <label htmlFor="sweaters">Sweaters</label>
                  </li>
                  <li className="cat_items">
                    <input type="checkbox" id="t-shirts" value="T-shirts" />{" "}
                    <label htmlFor="t-shirts">T-shirts</label>
                  </li>
                </ul>
              </div>

              <div>
                <p className="sidenaveheading">COLORS</p>
                <ul className="color-round">
                  <div className="d-flex">
                    <div className="col-6">
                      <li>
                        <span className="red"></span>
                        <a href="#">Red</a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li>
                        <span className="orange"></span>
                        <a href="#">orange</a>
                      </li>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-6">
                      <li>
                        <span className="yellow"></span>
                        <a href="#">yellow</a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li>
                        <span className="green"></span>
                        <a href="#">Green</a>
                      </li>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-6">
                      <li>
                        <span className="blue"></span>
                        <a href="#">Blue</a>
                      </li>
                    </div>
                    <div className="col-6">
                      <li>
                        <span className="indigo"></span>
                        <a href="#">Indigo</a>
                      </li>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-6">
                      <li>
                        <span className="violet"></span>
                        <a href="#">Violet</a>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>
            </div> */}

            {/* <div>
              <p className="sidenaveheading">SIZES</p>
            </div> */}

            {/* <div>
              <ul className="size_list">
                <div className="d-flex">
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="xs" name="size" value="XS" />
                      <label htmlFor="xs">XS</label>
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="s" name="size" value="S" />
                      <label htmlFor="s">S</label>
                    </li>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="m" name="size" value="M" />
                      <label htmlFor="m">M</label>
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="l" name="size" value="L" />
                      <label htmlFor="l">L</label>
                    </li>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="xl" name="size" value="XL" />
                      <label htmlFor="xl">XL</label>
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="xxl" name="size" value="XXL" />
                      <label htmlFor="xxl">XXL</label>
                    </li>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="3xl" name="size" value="3XL" />
                      <label htmlFor="3xl">3XL</label>
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="4xl" name="size" value="4XL" />
                      <label htmlFor="4xl">4XL</label>
                    </li>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="5xl" name="size" value="5XL" />
                      <label htmlFor="5xl">5XL</label>
                    </li>
                  </div>
                  <div className="col-6">
                    <li>
                      <input type="checkbox" id="6xl" name="size" value="6XL" />
                      <label htmlFor="6xl">6XL</label>
                    </li>
                  </div>
                </div>
              </ul>
            </div> */}

            <div>
              <section>
                <p className="sidenaveheading mt-4">FILTERS</p>
              </section>

              <section>
                <p className="pricefilterheading">PRICES RANGE : </p>

                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <section className="d-flex">
                      <section className="col-5">
                        <label htmlFor="MIN" className="pricelable">
                          MIN
                        </label>
                        <input
                          type="number"
                          name="MIN"
                          className="priceinput"
                          onChange={formik.handleChange}
                        />
                      </section>

                      <section className="col-2">
                        <label className="ifunlable"> - </label>
                      </section>

                      <section className="col-5">
                        <label htmlFor="MAX" className="pricelable">
                          MAX
                        </label>
                        <input
                          type="number"
                          name="MAX"
                          className="priceinput"
                          onChange={formik.handleChange}
                        />
                      </section>
                    </section>

                    <section>
                      <button
                        type="submit"
                        className="btn btn-primary filterbutton"
                      >
                        Filter
                      </button>
                    </section>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
  );
};

export default Sidenavebar;
