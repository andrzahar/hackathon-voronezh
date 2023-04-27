import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import classes from './Documents.module.css';

const Documents = () => {
  return (
    <Form style={{ padding: '20px' }}>
      <style type="text/css">
        {`
                    .btn-blue {
                    background-color: var(--color--blue);
                    color: var(--color--grey);
                }
                    
                    .btn-red {
                    background-color: var(--color--red);
                    color: var(--color--grey);
                }
                `}
      </style>
      <Form.Group className="mb-3" style={{ width: '50%' }}>
        <Form.Label>Серия номер паспорта</Form.Label>
        <Form.Control type="text" value={'234'} />
      </Form.Group>

      <Form.Group className="mb-3" style={{ width: '50%' }}>
        <Form.Label>ПОЛИС</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="blue" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Documents;
