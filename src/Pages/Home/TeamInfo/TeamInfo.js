import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import p1 from '../../../Images/p1.jpg'
import p2 from '../../../Images/p2.jpg'
import p3 from '../../../Images/p3.jpg'

const TeamInfo = () => {
    const handleKnock = () => {
        toast.success('Knocked')
    }
    return (
        <section className="container my-5">
            <h2 className="my-4 text-center">Our <span className='text-warning'>Management</span> Team</h2>
            <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card border-0 shadow-lg h-100">
                        <img src={p3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Mr. Mahiur</h5>
                            <p className="card-text text-center">My title is self-explanatory. They call me snowball, the George Orwell Snowball</p>
                        </div>
                        <div className="mx-auto my-1">
                            <h5 className="mx-4">Manager</h5>
                            <small className="text-muted"><button onClick={handleKnock}
                                className="btn btn-dark text-warning rounded-3  mx-auto d-block">Knock</button></small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow-lg h-100">
                        <img src={p2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Ms. Muna</h5>
                            <p className="card-text text-center">I now code the front end systems of our technology. Also, I can teach you Math and Physics.</p>
                        </div>
                        <div className="my-1">
                            <h5 className="mx-4 text-center">Co-Founder</h5>
                            <small className="text-muted"><button onClick={handleKnock}
                                className="btn btn-dark text-warning rounded-3 mx-auto d-block">Knock</button></small>
                        </div>
                        <a href=""></a>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-0 shadow-lg h-100">
                        <img src={p1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Mr. Faiz</h5>
                            <p className="card-text text-center">Now I am the backend developer. I can solve any python problem within seconds.</p>
                        </div>
                        <div className="mx-auto my-1">
                            <h5 className="mx-4">Founder</h5>
                            <small className="text-muted"><button onClick={handleKnock}
                                className="btn btn-dark text-warning rounded-3 mx-auto d-block">Knock</button></small>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default TeamInfo;