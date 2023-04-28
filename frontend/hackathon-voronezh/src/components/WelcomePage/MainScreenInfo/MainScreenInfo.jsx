import classes from './MainScreenInfo.module.css';
import { motion } from 'framer-motion';
import {useState} from "react";

const MainScreenInfo = () => {
    const container = {
        hidden: {opacity: 1, scale: 0},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const [flip, setFlip] = useState(false);

    const item = {
        hidden: {y: 20, opacity: 0},
        visible: {y: 0, opacity: 1}
    }

    return (
        <div variants={container}
                   className={classes.container}>
            <h2 className={classes.motionTitle}>
                Для кого предназначена наша система
            </h2>
            <div style={{display: "flex", flexWrap: "wrap", width: '100%', justifyContent: 'space-around'}}>
                {[
                    {title:"Спортсмены", text:'Отображение мероприятий и личных достижений'},
                    // {title:"Админимтраторы", text:'Отображение и редактирование мероприятий'},
                    {title:"Партнеры", text:'Создание партнерских мероприятий'},
                    {title:"Представители", text:'Создание мероприятий'}
                ].map((index) => (
                    <>
                        {
                            flip ? (
                                    <div key={index.title} onMouseEnter={() => setFlip(true)}
                                                onMouseLeave={() => setFlip(setFlip(false))} className={classes.item} variants={item}
                                                value={index}
                                    >{index.text}</div>
                                ) :
                                <div key={index} onMouseEnter={() => setFlip(true)}
                                            onMouseDown={() => setFlip(false)} className={classes.item} variants={item}
                                            value={index}
                                >{index.title}</div>
                        }
                    </>
                ))}
            </div>
        </div>



    // <motion.div variants={container}
    //             initial={'hidden'} animate={'visible'} className={classes.container}>
    //     <h2 className={classes.motionTitle}>
    //         Для кого предназначена наша система
    //     </h2>
    //     <div style={{display: "flex", flexWrap: "wrap", width: '100%', justifyContent: 'space-around'}}>
    //         {[
    //             {title:"Спортсмены", text:'Отображение мероприятий и личных достижений'},
    //             // {title:"Админимтраторы", text:'Отображение и редактирование мероприятий'},
    //             {title:"Партнеры", text:'Создание партнерских мероприятий'},
    //             {title:"Представители", text:'Создание мероприятий'}
    //         ].map((index) => (
    //             <>
    //                 {
    //                     flip ? (
    //                             <motion.div key={index.title} onMouseEnter={() => setFlip(true)}
    //                                         onMouseLeave={() => setFlip(setFlip(false))} className={classes.item} variants={item}
    //                                         value={index}
    //                             >{index.text}</motion.div>
    //                         ) :
    //                         <motion.div key={index} onMouseEnter={() => setFlip(true)}
    //                                     onMouseDown={() => setFlip(false)} className={classes.item} variants={item}
    //                                     value={index}
    //                         >{index.title}</motion.div>
    //                 }
    //             </>
    //         ))}
    //     </div>
    // </motion.div>
    )
}

export default MainScreenInfo;