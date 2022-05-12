import React from 'react';
import p1 from '../../../Images/p1.jpg'
import p2 from '../../../Images/p2.jpg'
import p3 from '../../../Images/p3.jpg'

const TeamInfo = () => {
    return (
        <section class="container my-5">
            <h2 class="my-4 text-center">Our <span className='text-warning'>Management</span> Team</h2>
            <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        <img src={p3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Mr. Mahiur</h5>
                            <p class="card-text text-center">My title is self-explanatory. They call me snowball, the George Orwell Snowball</p>
                        </div>
                        <div class="mx-auto my-1">
                            <h5 class="mx-4">Manager</h5>
                            <small class="text-muted"><button
                                class="btn btn-dark text-warning rounded-3  mx-auto d-block">Contact</button></small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        <img src={p2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Ms. Muna</h5>
                            <p class="card-text text-center">I now code the front end systems of our technology. Also, I can teach you Math and Physics.</p>
                        </div>
                        <div class="my-1">
                            <h5 class="mx-4 text-center">Co-Founder</h5>
                            <small class="text-muted"><button
                                class="btn btn-dark text-warning rounded-3 mx-auto d-block">Contact</button></small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        <img src={p1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center">Mr. Faiz</h5>
                            <p class="card-text text-center">Now I am the backend developer. I can solve any python problem within seconds.</p>
                        </div>
                        <div class="mx-auto my-1">
                            <h5 class="mx-4">Founder</h5>
                            <small class="text-muted"><button
                                class="btn btn-dark text-warning rounded-3 mx-auto d-block">Contact</button></small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamInfo;