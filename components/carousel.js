import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid w-50">
          <Carousel>
            <Carousel.Item style={{ height: "500px" }}>
              <Link href="\blog">
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"/images/TheBlog1.jpg"}
                />
              </Link>

              <Carousel.Caption>
                <h3>The Blog</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px" }}>
              <Link href="\pigs">
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"/images/Piggies1.jpg"}
                />
              </Link>

              <Carousel.Caption>
                <h3>The Pigs </h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px" }}>
              <Link href="\fish">
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"/images/Avi1.jpg"}
                />
              </Link>

              <Carousel.Caption>
                <h3>The Fish</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px" }}>
              <Link href="\mountainBike">
                <img
                  style={{ height: "500px" }}
                  className="d-block w-100"
                  src={"/images/mtb1.jpg"}
                />
              </Link>
              >
              <Carousel.Caption>
                <h3>The Bike</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default BootstrapCarousel;
