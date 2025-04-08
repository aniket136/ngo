import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const mockProjects = [
  {
    id: 1,
    title: 'Bridge School Program',
    description: 'Short-term schooling programs for children who are out of school to bring them up to grade level before entering formal schools.',
    image: 'https://media.istockphoto.com/id/1148218795/photo/children-cheering-in-classroom.jpg?s=1024x1024&w=is&k=20&c=StKRJDD678wwrufC7eICXwBc9a5omU9lnmSaZA1wq-c=',
  },
  {
    id: 2,
    title: 'Digital Learning Initiative',
    description: 'Providing tablets and internet access to children in remote areas to support online learning and digital literacy.',
    image: 'https://media.istockphoto.com/id/901816632/photo/mother-and-daughter-playing-with-a-digital-tablet-in-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=JTNCHkjotSUh6_ro9jaPkfXf24pHhXT6aJjrGA44QR4=',
  },
  {
    id: 3,
    title: 'Girl Child Education',
    description: 'Encouraging and supporting education for girls through scholarships, supplies, and mentorship programs.',
    image: 'https://media.istockphoto.com/id/651673362/photo/school-girls-using-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=yF0l6F4HbRezG4XFekCY5OJaP-1JRiU_Rcn9RrUKBUU=',
  },
];


const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = mockProjects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4 fs-1 fw-bold">Our Projects & Programs</h2>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredProjects.map((project) => (
          <Col key={project.id}>
            <ProjectCard project={project} onReadMore={setSelectedProject} />
          </Col>
        ))}
      </Row>

      <Modal show={selectedProject !== null} onHide={() => setSelectedProject(null)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.image} alt={selectedProject?.title} className="img-fluid rounded mb-3" />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedProject(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectsPage;
