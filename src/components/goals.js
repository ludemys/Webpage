import React from 'react'

const Goals = () =>
{
    return (
        <section className="goals">
            <h3 className="subtitle td-title">Reached and unreached goals, my To-Do List</h3>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">Learn React as my main front-end framework <i class="checked far fa-check-square"></i></p>

                <img src="./assets/react-logo.png" className="image" alt="react logo" />
            </div>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">Learn Laravel 8 as my main back-end framework <i class="checked far fa-check-square"></i></p>

                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" className="image" alt="laravel 8 logo" />
            </div>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">Reach a pretty good level at SQL <i class="checked far fa-check-square"></i></p>

                <img src="https://content.techgig.com/thumb/msid-77786852,width-860,resizemode-4/Top-7-most-used-databases-by-developers-in-2020.jpg?182293" className="image" alt="sql logo" />
            </div>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">Finish my website, so people can know who I am, check my portfolio and contact me</p>

                <img src="https://cdn.pixabay.com/photo/2016/08/31/00/44/www-1632431_1280.png" className="image" alt="www world wide web" />
            </div>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">Make a good looking professional Linkedin profile <i class="checked far fa-check-square"></i></p>

                <img src="https://logos-marcas.com/wp-content/uploads/2020/04/Linkedin-Logo.png" className="image" alt="www world wide web" />
            </div>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">Get active on twitter, so I can write my day to day learning, for me to have a register of my growth and for others to know what I learn everyday. Tweets must be in english<i class="checked far fa-check-square"></i></p>

                <img src="./assets/twitter.png" className="image" alt="twitter logo" />
            </div>
            
            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph">(Optional) Learn on Platzi, with the goal of getting better knowdlege about both my technical and social skills</p>

                <img src="https://production-tcf.imgix.net/app/uploads/2020/03/20155636/dudley_opm-01.png?auto=format%2Ccompress&q=80&fit=crop&w=1200&h=600" className="image" alt="platzi education" />
            </div>

            {/* <hr className="line" /> */}

            <div className="todo-item">
                <p className="paragraph more">And more are coming!</p>
            </div>

        </section>
    )
}

export default Goals