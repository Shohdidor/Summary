import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';



import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// IMG
import Cpp from "/img/pngegg.png"
import GIT from "/img/akar-icons_github-fill.svg"
import Rea from "/img/logos_react.svg"
import CSS from "/img/vscode-icons_file-type-css.svg"
import HTML from "/img/vscode-icons_file-type-html.svg"
import JS from "/img/vscode-icons_file-type-js-official.svg"
import TAILWIND from "/img/vscode-icons_file-type-tailwind.svg"
import VS from "/img/vscode-icons_file-type-vscode.svg"
import Avatar from "/img/Miyagi.jpg"

import Shop from "/img/Shop.png"
import Todo from "/img/Todo.png"
import Slide from "/img/Slide.png"

import 'animate.css';
// animate__animated 


// Card
import Card from './components/Card';
import { Card2 } from './components/Card';
import { Card3 } from './components/Card';

// MUI
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Instagram } from '@mui/icons-material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #F7BB0E',
  boxShadow: 24,
  p: 4,
};

function App ()  {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [ lng , setLng ] = useState ( "en" )
  const { t , i18n } = useTranslation ()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
 

  return (
    <>
    <div className='flex justify-between overflow-hidden'>
      
    <div className='dark:bg-[#F7BB0E] bg-[#29282C] sm:w-[50%] w-[50%]'>
      <img src={Avatar} alt="error" className='sm:rounded-[50%] sm:w-[40%] sm:m-auto sm:pt-[110px] sm:mt-[-15%]' />
      <Card h1={t("contact.h1")} li1={t("contact.li1")} li2={t("contact.li2")} li3={t("contact.li3")} li4={t("contact.li4")} li5={t("contact.li5")} li6={t("contact.li6")} li7={t("contact.li7")} li8={t("contact.li8")}  />
      <hr className='border-white'/>
        <h1 className='animate__animated animate__fadeInUp text-teal-600 font-bold text-[24px] text-center'>
            {t("Skill")}
        </h1>
        <hr className='border-white' />
      <div className='animate__animated animate__fadeInUp flex flex-wrap justify-evenly pt-[10px]'>
        
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper m-[-50px] w-[190px] sm:w-[210px]"
      >
        <SwiperSlide>
        <img className='w-[21%]' src={Cpp} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={HTML} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={CSS} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={TAILWIND} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={GIT} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={JS} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={Rea} alt="error" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-[21%]' src={VS} alt="error" />
        </SwiperSlide>
      </Swiper>
      </div>
      <hr className='border-teal-600 mt-[50px]'/>
        <h1 className=' text-white dark:text-[#29282C] font-bold text-[24px] text-center'>
            {t("Language")}
        </h1>
        <hr className='border-teal-600' />
        <div className='animate__animated animate__fadeInUp text-white font-bold mt-[10px] flex justify-evenly flex-wrap mb-[15px] dark:text-teal-600'>
          <h1>
            {t("Language.En")}
          </h1>
          <h1>
            {t("Language.Ru")}
          </h1>
          <h1>
            {t("Language.Pers")}
          </h1>
        </div>
        <hr className='border-white'/>
        <h1 className='text-teal-600 font-bold text-[24px] text-center'>
            {t("Hobbies")}
        </h1>
        <hr className='border-white' />
        <div className='animate__animated animate__fadeInUp text-white font-bold mt-[10px] flex gap-[4px] justify-evenly flex-wrap mb-[15px] dark:text-[#29282C]'>
          <h1>
            {t("Hobbies.Pianino")}
          </h1>
          <h1>
            {t("Hobbies.Draw")}
          </h1>
          <h1>
            {t("Hobbies.Codding")}
          </h1>
        </div>
    </div>
    <div className='sm:pr-[660px]'>
      
    <div className='dark:bg-[#29282C] text-black dark:text-white h-auto flex gap-[50px] mt-[10px] justify-between pr-[10px]'>
      <Switcher />
      

      <FormControl >
        <InputLabel id="demo-simple-select-label" className='dark:text-orange-500'>Age</InputLabel>
        <Select error
        value={lng}
        size='small'
        onChange={(event) => { changeLanguage ( event . target . value )
        setLng (event.target.value)}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value="en" sx={{color:"red"}}>English</MenuItem>
          <MenuItem value="ru" sx={{color:"blue"}}>Russian</MenuItem>
          <MenuItem value="pers" sx={{color:"green"}}>Persian</MenuItem>
        </Select>
      </FormControl>
    </div>

    <div className='sm:mb-[19px] mb-[8px]'>
      <h1 className='animate__animated animate__fadeInDown Name text-[26px] pl-[5px] sm:text-[43px]'>
        {t("Name")}
      </h1>

      <div className='pl-[15px] sm:ml-[250px]'>
      <Button variant='outlined' color='error' onClick={handleOpen}>{t("Biog")}</Button>
      </div>
      
    </div>

    <div className='animate__animated animate__fadeInUp sm:w-[270%]'>
    <hr className='border-white'/>
        <h1 className='text-teal-600 font-bold text-[24px] text-center'>
            {t("Exprience")}
        </h1>
        <hr className='border-white' />
 
      <Card2 li1={t("1 year")} li2={t("1 mounth")} li3={t("3 mounth")} li4={t("2 mounth")} li5={t("Cpp")} li6={t("HTML")} li7={t("JS")} li8={t("React")}  />
    
    </div>


    <div className='animate__animated animate__fadeInUp mt-[48px] sm:mt-[-1px] sm:w-[270%]'>
    <hr className='border-white'/>
        <h1 className='text-teal-600 font-bold text-[24px] text-center'>
            {t("GIT HUB")}
        </h1>
        <hr className='border-white' />
    </div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper hidden sm:flex">
        <SwiperSlide>
        <Card3 img={Shop} h1={t("online store")} a={"https://github.com/Shohdidor/Internet-Magaz"}/>
        </SwiperSlide>
        <SwiperSlide>
        <Card3 img={Todo} h1={t("TodoList")} a={"https://github.com/Shohdidor/Table"} />
        </SwiperSlide>
        <SwiperSlide>
        <Card3 img={Slide} h1={t("Slider")} a={"https://github.com/Shohdidor/Slider"} />
        </SwiperSlide>
      </Swiper>

      <div className='sm:hidden'>
    <Card3 img={Shop} h1={t("online store")} a={"https://github.com/Shohdidor/Internet-Magaz"}/>
    <Card3 img={Todo} h1={t("TodoList")} a={"https://github.com/Shohdidor/Table"} />
    <Card3 img={Slide} h1={t("Slider")} a={"https://github.com/Shohdidor/Slider"} />
      </div>



    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="dark:bg-[#29282C] ">
          <Typography id="modal-modal-title" variant="h6" component="h2" className='pb-[10px]'>
            {t("Biog")}
          </Typography>
          <p className='text-[11px] font-thin'>
        {t("Biogprhay")}
      </p>
        </Box>
      </Modal>


    
    </div>
    </>
  )
}

export default App

