import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function LoginModal({refname, show, handler}) {

  return (
      <Modal
        show={show}
        onHide={handler}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
					<Modal.Title>  Sign in to {refname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
				<span className='modalstyle'><Link  to={'/sign-in'} state={{ from: "get a quote"}}>Sign In
        </Link></span><span className='modalstyle'><Link  to={'/sign-up'} state={{ from: "get a quote"}}>Sign Up
        </Link></span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handler}>
            Close
          </Button>
					<Link  to={'/sign-in'} state={{ from: "get a quote"}}><Button variant="primary">Understood</Button></Link>
        </Modal.Footer>
      </Modal>
  );
}

export default LoginModal;