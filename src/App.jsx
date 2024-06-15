import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion, Row, Col, Card } from 'react-bootstrap'

function Experience({ title, company, date, description, eventKey }) {
  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
          <Row className='w-100 align-items-center'>
            <Col className='align-items-center' sm={8}>
              <h4 className=''>{title}</h4>
              <h6 className=''>{company}</h6>
            </Col>
            <Col className='align-items-center text-end text-start-sm' sm={4}>
              <p className='pe-2'>{date}</p>
            </Col>
          </Row>
        </Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </>
  )
}

function Education({ school, qualification, duration }) {
  return (
    <Col className='mx-3'>
      <Card>
        <Card.Body>
          <Card.Title>{qualification}</Card.Title>
          <Card.Subtitle className='text-muted mb-2'>{school} · {duration}</Card.Subtitle>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

function App() {
  const experience1 = {
    title: 'Software Developer',
    company: 'Sigma Labs Sdn Bhd',
    date: 'Dec 2023 - Present',
    description:
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
      </ul>
  }
  const experience2 = {
    title: 'Technical Interior Designer',
    company: 'Nu Infinity Sdn Bhd',
    date: 'Sept 2021 to June 2024',
    description:
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
      </ul>
  }
  const experience3 = {
    title: 'Interior Design Intern',
    company: 'Innovative Space Dimension Sdn Bhd',
    date: 'Jul 2020 - Dec 2020',
    description:
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis facere recusandae non veritatis rem culpa eligendi ipsa, at voluptates, suscipit fugiat, in excepturi voluptatum odio vero nesciunt dignissimos nihil.</li>
      </ul>
  }

  const education1 = {
    school: 'Sigma School',
    qualification: 'Coding Bootcamp',
    duration: 'Dec 2023 - Current'
  }
  const education2 = {
    school: 'UCSI University',
    qualification: 'BA(Hons) in Interior Architecture',
    duration: 'Jan 2019 - Jun 2021'
  }
  const education3 = {
    school: 'UCSI University',
    qualification: 'Diploma in Interior Architecture',
    duration: 'May 2016 - Oct 2019'
  }

  return (
    <>
      <div className="main-container">
        <div className="px-5 pt-5 pb-3 mb-4 bg-dark text-white">
          <h1>Chin Did Ken</h1>
          <h2>Software Developer</h2>
        </div>
        <div className='body-container mx-5'>
          <div className="about-me ms-3">
            <h3>About me</h3>
            <p>Sit minim ad aliquip non commodo ex do. Eu nostrud esse in labore enim. Amet nostrud laborum laboris veniam.

              Enim sunt deserunt deserunt elit eu magna minim duis exercitation eiusmod deserunt eu pariatur. Deserunt non exercitation id ullamco culpa id pariatur enim commodo. Incididunt consectetur veniam commodo adipisicing. Aliqua nulla mollit do duis ad eu officia commodo sint do consequat enim aliquip. Ea non Lorem voluptate mollit aliquip ut ea pariatur nisi cupidatat. Consectetur est enim Lorem consequat pariatur minim incididunt commodo.</p>
          </div>
          <div className='career-container mb-4'>
            <h3 className='ms-3'>Career</h3>
            <Accordion className='career-accordion'>
              <Experience
                title={experience1.title}
                company={experience1.company}
                date={experience1.date}
                description={experience1.description}
                eventKey={'0'}
              />
              <Experience
                title={experience2.title}
                company={experience2.company}
                date={experience2.date}
                description={experience2.description}
                eventKey={'1'}
              />
              <Experience
                title={experience3.title}
                company={experience3.company}
                date={experience3.date}
                description={experience3.description}
                eventKey={'2'}
              />
            </Accordion>
          </div>
          <div className="education-container">
            <h3 className='ps-3'>Education</h3>
            <Row className='ps-3'>
              <Education
                school={education1.school}
                duration={education1.duration}
                qualification={education1.qualification} />
              <Education
                school={education2.school}
                duration={education2.duration}
                qualification={education2.qualification} />
              <Education
                school={education3.school}
                duration={education3.duration}
                qualification={education3.qualification} />
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
