import { Grid } from '@material-ui/core';
import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';




const Info = () => {
    return (
        <Grid >
            <Grid >
                <section style={{ backgroundColor: '#000', height: '50vw' }} >
                    <div className='container-info'>
                        <div>
                            <h2 style={{ color: '#999', fontSize: '1.5rem', textAlign: 'left', padding: '10px', text: 'cener', margin: '0 40px ' }}>Мир HYPERPC</h2>
                            <h3 style={{ color: '#fff', fontSize: '2.652rem', textAlign: 'left', padding: '5px', text: 'cener', margin: '0 40px', fontWeight: 'bold' }}>Почему мы?</h3>
                        </div>
                        <div hidden>
                            Узнай за 2 минуты в чем отличие HYPERPC от других компаний и почему стоит выбрать именно нас
                        </div>
                        <div className='card-bordered mt-4 sm-8'>
                            <div style={{ display: 'flex' }}>

                                <div className='video'>
                                    <div>
                                        <ReactPlayer url="https://youtu.be/7ZB3rz1LdFM" playing={true} width={700} height={500} title='video' allow='autoplay; encrypted-media' />


                                    </div>
                                </div>

                                <div>
                                    <h2 style={{ color: '#fff', fontWeight: 'bold', margin: '0 0 20px 0', fontFamily: 'sans-serif' }}>Что нас делает первыми уже 12 лет</h2>
                                    <ul className='ul-list'>
                                        <li>Официальные партнеры NVIDIA, Intel и Microsoft</li>
                                        <li>Самый продвинутый онлайн конфигуратор компьютеров</li>
                                        <li>Только лучшие комплектующие и передовые технологии </li>
                                        <li>Профессиональная сборка, кастомизация и разгон</li>
                                        <li>Специальное стресс-тестирование и установка ПО</li>
                                        <li>Доставка, установка и настройка компьютера под ключ</li>
                                        <li>Собственное производство</li>
                                        <li>Шоурумы в Москве и Санкт-Петербурге с компьютерами в наличии</li>
                                        <li>Сервисные центры в более чем 40 крупных городах России.</li>
                                    </ul>
                                </div>


                            </div>
                        </div>

                    </div>
                </section>
            </Grid>
        </Grid>
    );
};

export default Info;