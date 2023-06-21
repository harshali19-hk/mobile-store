import React, { useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/cartSlice";

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.AllCartItems);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    // navbar template taken from MDB
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand>My Shopping</MDBNavbarBrand>
        <Link to="/">
          <MDBBtn className="mx-2" color="info">
            All Products
          </MDBBtn>
        </Link>

        <Link to="/cart">
          <MDBBtn className="mx-2" color="info">
            <MDBBadge pill color="danger">
              {totalQuantity}
            </MDBBadge>
            <span style={{ color: "black" }}>
              <MDBIcon fas icon="shopping-cart"></MDBIcon>
            </span>
          </MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
