import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const AboutPage = () => {
  return (
    <section className="py-5 bg-light text-dark">
      <Container>
        {/* Hero Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">Our Story</h1>
            <p className="lead">
              Welcome to BrandX — where style meets sustainability. What started
              in a small apartment with a dream to redefine online shopping has
              become a movement of mindful fashion and ethically made products.
            </p>
            <Button variant="dark" href="/shop">
              Explore Our Products
            </Button>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src="https://source.unsplash.com/600x400/?fashion,store"
              alt="Brand Story"
              fluid
              rounded
            />
          </Col>
        </Row>

        {/* Mission and Vision */}
        <Row className="text-center mb-5">
          <Col md={6} className="mb-4">
            <h3>Our Mission</h3>
            <p>
              To empower individuals through fashion that's affordable,
              sustainable, and inclusive.
            </p>
          </Col>
          <Col md={6}>
            <h3>Our Vision</h3>
            <p>
              We aim to become the leading platform for ethically sourced,
              community-driven shopping experiences.
            </p>
          </Col>
        </Row>

        {/* Values */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Our Values</h2>
            <Row className="text-center">
              <Col md={3} xs={6} className="mb-3">
                <h5>Quality</h5>
                <p>Only the best materials and designs.</p>
              </Col>
              <Col md={3} xs={6} className="mb-3">
                <h5>Sustainability</h5>
                <p>Eco-friendly practices in all we do.</p>
              </Col>
              <Col md={3} xs={6} className="mb-3">
                <h5>Community</h5>
                <p>Built for real people, by real people.</p>
              </Col>
              <Col md={3} xs={6} className="mb-3">
                <h5>Inclusivity</h5>
                <p>Styles for all body types and backgrounds.</p>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mb-5">
          <h2 className="text-center mb-4">Meet the Team</h2>
          <Col md={4} className="text-center">
            <Image
              src="https://source.unsplash.com/150x150/?person"
              roundedCircle
              className="mb-2"
            />
            <h5>Jane Doe</h5>
            <p>Founder & CEO</p>
          </Col>
          <Col md={4} className="text-center">
            <Image
              src="https://source.unsplash.com/150x150/?developer"
              roundedCircle
              className="mb-2"
            />
            <h5>John Smith</h5>
            <p>Head of Development</p>
          </Col>
          <Col md={4} className="text-center">
            <Image
              src="https://source.unsplash.com/150x150/?designer"
              roundedCircle
              className="mb-2"
            />
            <h5>Sarah Lee</h5>
            <p>Creative Director</p>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col>
            <h3 className="mb-3">Want to see what makes us different?</h3>
            <Button variant="dark" size="lg" href="/shop">
              Shop Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
