import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import "./slideContent.css";
import { Button, Grid } from "@material-ui/core";
import Case from '../Header/Case.svg'
import { Link } from "react-router-dom";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel_box">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hyperpc.ru/images/product/gaming-pc/optimal/optimal-pc.jpg"

          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hyperpc.ru/images/product/lumen/esports/main/hyperpc-epicenter-pc-alt-2.jpg"

          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hyperpc.ru/images/product/gaming-pc/extreme/hyperpc-extreme-pc.jpg"

          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <Grid >
          <div className="Container">
            <div className='block1'>
              Станьте владельцем <br /> HYPERPC
            </div>
            <div className='block2'>
              <img src={Case} className='img' />
              <Link to="/products-comp" >
                <Button className='buton'>
                  Пк в наличий
                </Button>

              </Link>
            </div>
          </div>
        </Grid>
      </div>
      <Grid >
        <div className='container-1' style={{
          color: 'whitesmoke',
          //  display: "flex", justifyContent: "center", 
          textAlign: 'center'
        }}>
          <h2 style={{ color: 'whitesmoke' }}>Специальная серия</h2>

          <div style={{ display: "flex", color: 'red', flexDirection: 'column', flexFlow: 'wrap' }}>
            <div className='first-column' >
              <div>
                <img src="https://hyperpc.ru/images/product/gaming-pc/gaming-pc_banner_webp.jpg" height='300vw' alt="" />
                <h3>ENTHUSIAST</h3>
                <p>Мощные игровые компьютеры для энтузиастов</p>
              </div>
            </div>
            <div className='first-column' >
              <div>
                <img src="https://hyperpc.ru/images/product/special/content_category/mini/exclusive-pc-2-mini.jpg" height='300vw' alt="" />
                <h3>EXCLUSIVE</h3>
                <p>Самые дорогие компьютеры ручной работы</p>
              </div>
            </div>
            <div className='first-column'>
              <div  >
                <img src="https://uplaptop.pro/images/xeon/portfolio/start.jpg" height='300vw' alt="" />
                <h3>EPIX</h3>
                <p>Доступные ПК для входа в  мир гейминга</p>
              </div>
            </div>
            <div className='first-column' >
              <div>
                <img src="https://hyperpc.ru/images/content/main/choice-models-block/hyperpc-pro-pc-category-banner.jpg" height='300vw' alt="" />
                <h3>PRO</h3>
                <p>Профессиональные ПК для работы и творчества</p>
              </div>
            </div>
          </div>

        </div>
      </Grid>

    </div>


  );
}
