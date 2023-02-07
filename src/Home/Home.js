import noImage from '../img/noImage.png'

const Home = () => {
    return(
        <div className="home">
            <section id="standOuot">
                <h1>Lugar destacado</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia a aut soluta, ipsam recusandae esse magni non, iste modi quidem nemo quas repudiandae itaque, reiciendis est aspernatur delectus labore.</p>
            </section>
            <section id="standPhoto">
                <img src={noImage} alt="" min_width="500px"/>
            </section>
            <section id="newPlaces">
                <h2>Lugares nuevos</h2>
                <div className="img">
                    <img src={noImage} alt="" />
                    <img src={noImage} alt="" />
                    <img src={noImage} alt="" />
                </div>
            </section>
        </div>
    );
}

export default Home;