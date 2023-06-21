import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import "../Styles/products.css";

export default function ProductCards() {
  const items = useSelector((state) => state.AllCartItems.items);

  const dispatch = useDispatch();

  return (
    <div className="m-2">
      <MDBContainer className="container d-flex">
        <MDBRow className="d-flex justify-content-between  ">
          {items.map((item) => (
            <MDBCol size="sm" key={item.id}>
              <MDBCard className="card  ">
                <MDBCardImage
                  src={item.img}
                  position="top"
                  alt="image"
                  className="img"
                />
                <MDBCardBody className="cardBody">
                  <MDBCardTitle>{item.title} </MDBCardTitle>
                  <MDBCardText>Rs {item.price}.</MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
