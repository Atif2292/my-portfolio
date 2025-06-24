import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const skills = [
  { icon: 'fab fa-java', color: '#E44D26', name: 'Java' },
  { icon: 'fab fa-css3-alt', color: '#264de4', name: 'CSS' },
  { icon: 'fab fa-js-square', color: '#F0DB4F', name: 'JavaScript' },
  { icon: 'fab fa-react', color: '#61DBFB', name: 'React' },
  { icon: 'fab fa-html5', color: '#68A063', name: 'HTML' },
  { icon: 'fab fa-docker', color: '#0db7ed', name: 'Docker' },
  { icon: 'fab fa-aws', color: '#FF9900', name: 'AWS' },
  { icon: 'fab fa-github', color: '#333', name: 'GitHub' },
];

const Experience = () => {
  return (
    <Container className="py-5">
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 font-weight-bold">Tech Stack</h1>
          <p className="lead text-muted">Technologies I use and love working with:</p>
        </Col>
      </Row>

     <Row className="text-center justify-content-center">
  {skills.map(({ icon, color, name }, index) => (
    <Col
      key={index}
      xs={4}
      sm={3}
      md={2}
      className="mb-4 d-flex flex-column align-items-center"
    >
      <div
        className="glow"
        style={{
          ['--color']: color,
          fontSize: '2.2rem',
          padding: '15px',
          borderRadius: '10px',
        }}
      >
        <i className={icon}></i>
      </div>
      <p className="mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
        {name}
      </p>
    </Col>
  ))}
</Row>

      <Row className="text-center mt-5">
        <Col>
          <blockquote className="blockquote">
            <p className="mb-0">"Code is like humor. When you have to explain it, it’s bad."</p>
            <footer className="blockquote-footer">Cory House</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
