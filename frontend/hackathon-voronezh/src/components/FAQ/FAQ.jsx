import classes from './FAQ.module.css'
import {Accordion} from "react-bootstrap";
import {useSelector} from "react-redux";

const FAQ = () => {

    const FAQData=useSelector(state=>state.FAQ.items);

    return (
        <div style={{width: '100%'}}>
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
            <h1 className={classes.title}>
                Частозадаваемые вопросы
            </h1>
            <Accordion defaultActiveKey="0" style={{width:'80%', margin:"auto"}}>
                {FAQData.map(item=>(
                    <Accordion.Item eventKey={item.id}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                            {item.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    )
}

export default FAQ;