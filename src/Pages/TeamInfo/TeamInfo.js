import React from 'react';

const TeamInfo = () => {
    return (
        <section class="container my-5">
            <h2 class="my-4 text-center">Our <span className='text-warning'>Management</span> Team</h2>
            <div class=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        {/*  <img src="" class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title text-center">Mr. Mahiur</h5>
                            <p class="card-text">They call me snowball, the George Orwell Snowball</p>
                        </div>
                        <div class="mx-auto my-1">
                            <h5 class="mx-4">CEO</h5>
                            <small class="text-muted"><button
                                class="btn btn-dark text-warning rounded-3  mx-auto d-block">Contact</button></small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        {/* <img src="" class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title text-center">Ms. Muna</h5>
                            <p class="card-text">I can teach you Math and Physics.</p>
                        </div>
                        <div class="my-1">
                            <h5 class="mx-4 text-center">COO</h5>
                            <small class="text-muted"><button
                                class="btn btn-dark text-warning rounded-3 mx-auto d-block">Contact</button></small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0 shadow-lg h-100">
                        {/* <img src="" class="card-img-top" alt="..."> */}
                        <div class="card-body">
                            <h5 class="card-title text-center">Mr. Faiz</h5>
                            <p class="card-text">I can solve any python problem within seconds</p>
                        </div>
                        <div class="mx-auto my-1">
                            <h5 class="mx-4">CMO</h5>
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