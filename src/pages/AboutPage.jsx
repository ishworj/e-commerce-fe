import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const team = [
  {
    name: "Jane Doe",
    title: "Founder & CEO",
    img: "./profile/1.jpg",
    delay: 100,
  },
  {
    name: "John Smith",
    title: "Head of Development",
    img: "./profile/2.jpg",
    delay: 200,
  },
  {
    name: "Sarah Lee",
    title: "Creative Director",
    img: "./profile/3.jpg",
    delay: 300,
  },
];

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about-section py-5">
      <Container>
        {/* Hero Section */}
        <Row className="align-items-center mb-4">
          <Col md={6} data-aos="fade-right" className="my-2">
            <h1 className="display-4 fw-bold gradient-text">Our Story</h1>
            <p className="lead text-muted">
              Welcome to <strong>BrandX</strong> — where style meets
              sustainability. From a small dream to a global movement, we're
              redefining fashion with a purpose.
            </p>
            <Button variant="dark" href="/shop" size="lg">
              Explore Our Products
            </Button>
          </Col>
          <Col md={6} data-aos="zoom-in">
            <Image
              src="./brand.jpg"
              alt="Brand Story"
              fluid
              rounded
              className="shadow-lg"
            />
          </Col>
        </Row>

        {/* Mission & Vision */}
        <Row className="text-center mb-5">
          <Col
            md={6}
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center bg-white py-4 px-2"
          >
            <h3 className="mb-3">Our Mission</h3>
            <p className="text-muted">
              Empowering individuals through fashion that's affordable,
              sustainable, and inclusive.
            </p>
          </Col>
          <Col
            md={6}
            data-aos="fade-up"
            data-aos-delay="200"
            className=" text-center bg-white py-4 px-2"
          >
            <h3 className="mb-3">Our Vision</h3>
            <p className="text-muted">
              To be the leading platform for ethically sourced, community-driven
              shopping experiences.
            </p>
          </Col>
        </Row>

        {/* Values */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4" data-aos="fade-up">
              Our Values
            </h2>
            <Row className="text-center">
              {[
                { title: "Quality", text: "Best materials & designs" },
                { title: "Sustainability", text: "Eco-friendly practices" },
                { title: "Community", text: "Built for and by people" },
                { title: "Inclusivity", text: "Styles for every body" },
              ].map((value, idx) => (
                <Col
                  md={3}
                  xs={6}
                  className="mb-4"
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="value-card shadow-sm p-3 rounded h-100">
                    <h5>{value.title}</h5>
                    <p className="text-muted small">{value.text}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mb-5">
          <h2 className="text-center mb-4" data-aos="fade-up">
            Meet the Team
          </h2>
          {team.map((member, idx) => (
            <Col
              md={4}
              className="text-center mb-4"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              <Image
                src={member.img}
                alt={`${member.name} - ${member.title}`}
                roundedCircle
                className="mb-3 shadow"
              />
              <h5>{member.name}</h5>
              <p className="text-muted small">{member.title}</p>
            </Col>
          ))}
        </Row>

        {/* Testimonials */}
        <Row className="mb-5">
          <h2 className="text-center mb-4" data-aos="fade-up">
            What Our Customers Say
          </h2>
          <Col md={6} data-aos="fade-right">
            <blockquote className="blockquote text-center bg-white p-4 rounded shadow">
              <p className="mb-0">
                "Absolutely love BrandX! Their eco-conscious mission really
                resonates with me."
              </p>
              <footer className="blockquote-footer mt-2">
                A Happy Customer
              </footer>
            </blockquote>
          </Col>
          <Col md={6} data-aos="fade-left">
            <blockquote className="blockquote text-center bg-white p-4 rounded shadow">
              <p className="mb-0">
                "Great quality and fast delivery. I’ll definitely shop again."
              </p>
              <footer className="blockquote-footer mt-2">Another Fan</footer>
            </blockquote>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col data-aos="zoom-in">
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
