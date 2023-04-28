import { useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import classes from './Approve.module.css';

const Approve = () => {
  const role = useSelector(state => state.user.role);
  const [id, setId] = useState('');

  const setRole=(role)=>{

  }

  return (
    <div style={{ width: '100%' }}>
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
      {role === 'representative' ? (
        <div>
          <h1 className={classes.title}>Добавление спортсмена</h1>
          <Form className={classes.form}>
            <Form.Group className="mb-3">
              <Form.Label>Укажите id спортсмена</Form.Label>
              <Form.Control value={id} onChange={e => setId(e.currentTarget.value)} type={'text'} />
            </Form.Group>
            <Button variant="blue" type="submit" >
              Найти спортсмена
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <h1 className={classes.title}>Добавление представителя</h1>
          <Form className={classes.form}>
            <Form.Group className="mb-3">
              <Form.Label>Укажите id представителя</Form.Label>
              <Form.Control value={id} onChange={e => setId(e.currentTarget.value)} type={'text'} />
            </Form.Group>
              <DropdownButton title="Найти" id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1" onClick={()=>setRole('sportsman')}>Добавить как спортсмена</Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={()=>setRole('representative')}>Доавить как представителя</Dropdown.Item>
              </DropdownButton>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Approve;
