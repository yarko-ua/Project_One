import React from 'react';
import { Carousel } from 'react-bootstrap';


export default function Home(props) {

    return (
        <section className="home">
            <Carousel interval={3000} pauseOnHover={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/83516.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mt.Hook</h3>
                        <p>Photograph: Kaley Cuoko</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/02/e7/97/02e79775d1f567af51c203dbf6d83012.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Carpathian at night</h3>
                        <p>Photograph: Michail Bundash</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/83501.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Apline mountain's</h3>
                        <p>Photograph: Bradley Jakovskiy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/23678.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Alberta, Canada</h3>
                        <p>Photograph: Julia Erbono</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.xtrafondos.com/en/descargar.php?id=3037&resolucion=3840x2160"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        <h3>Mt. Rain</h3>
                        <p>Photograph: Kodjima Genius</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div className="blog">
                <div>
                    <p>
                        Just a few miles southeast of Salt Lake City lies Little Cottonwood Canyon, known for having the most extreme
                        terrain and best snow in Utah, if not in the U.S. Blessed with 500+ inches of snow a year, Little Cottonwood
                        Canyon draws locals and tourists alike to ski and ride. With its steep cliffs and dramatic terrain, the ski
                        resorts of Little Cottonwood Canyon often hosts freeski/freeride competitions and attracts skiers and riders
                        seeking extreme terrain. In the canyon's backcountry, endless bowls, steep chutes, and fresh lines await.
                    </p>
                </div>
            </div> */}
        </section >
    );
}
