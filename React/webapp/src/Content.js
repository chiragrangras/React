import React from "react"
import car from './Car.jpg'

function Content(){
    return(
        <div>
            <section>
                <div className="cards">
                    <div className="card">
                        <img src="https://assets.mspimages.in/gear/wp-content/uploads/2023/01/Bugati.png" height={100} width={100}/>
                    </div>
                    <div className="card">Card 2</div>
                    <div className="card">Card 3</div>
                    <div className="card">Card 4</div>

                    <div className="card">
                        <img src={car} height={100} width={100}></img>
                    </div>
                    <div className="card">Card 6</div>
                    <div className="card">Card 7</div>
                    <div className="card">Card 8</div>
                </div>
            </section>
        </div>
    )
}
export default Content