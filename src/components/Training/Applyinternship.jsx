
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import '../../index.css';
function Applyinternship() {
    const [phone, setPhone] = useState('');
    const [availability, setAvailability] = useState('');

    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };

    return (
        <>
            {/* NAME SECTION */}

            <div className="top">
                <div className='heading'>
                    <h1>Applying for UI/UX Designer Internship</h1>
                    <p>Genex Corporate service PVT.LTM</p>
                </div>
                <br />
                <hr />
                <div className='user-detail'>
                    <label htmlFor='name'>Enter your Name<span>*</span></label><br />
                    <input className='name'
                        type='text'
                        placeholder='enter your name'
                        required /><br /><br />

                    <label htmlFor='contact'>Contact<span>*</span></label><br />
                    <PhoneInput
                        style={{ marginTop: "8px" }}
                        country={"in"}
                        value={phone}
                        onChange={setPhone}
                        inputProps={{ required: true, autoFocus: true }}
                        required /><br />

                    <label htmlFor="Email">E-mail<span>*</span></label><br />
                    <input
                        type='email'
                        placeholder='enter your e-mail'
                        required />
                </div><br /><br />
                <hr />

                {/* RESUME SECTION */}
                <div className='resume-section'>
                    <label htmlFor="Resume">Upload Resume<span>*</span></label><br />
                    <p>Employers can download and view their resume</p><br />
                    <input
                        type='file'
                        required /><br />

                    <p>Max file size:10Mb</p><br />
                    <label htmlFor="Cover letter">Cover letter<span>*</span></label><br />
                    <p>Why should you be hired for this role?</p><br />
                    <textarea
                        placeholder="Enter your text here" /><b /><br />

                    {/* Assessment SECTION */}
                    <label htmlFor='Assessment'>Assessment<span>*</span></label><br /><br />
                    <h1>Q1. please share your Behance/Dribble portfolio</h1>
                    <p>
                        If you want to share any documents or files, please upload it on{" "}
                        <a href='https://drive.google.com'
                            target='_self'
                            rel='noopener noreferrer'
                            style={{ color: "blue", textDecoration: "underline" }}>
                            Google Drive</a>{" "}
                        or{" "}
                        <a href='https://www.dropbox.com'
                            target='_self'
                            rel='noopener noreferrer'
                            style={{ color: "blue", textDecoration: "underline" }}>
                            Dropbox</a> and paste the public link in the answer.
                    </p><br />
                    <input className='Assessment-box'
                        type='text'
                        required /><br /><br />

                    {/* AVAILABILITY SECTION */}
                    <label htmlFor="Your availability">Your availability<span>*</span></label><br />
                    <p className='confirm-avail'>Confirm your availability</p>

                    <input
                        type="radio"
                        id="available"
                        name="availability"
                        value="available"
                        checked={availability === 'available'}
                        onChange={handleAvailabilityChange}
                    />
                    <label className='available' htmlFor="available">Yes, I am available to join immediately</label> <br />

                    <input
                        type='radio'
                        id="notavailable"
                        name="availability"
                        value="notavailable"
                        checked={availability === 'notavailable'}
                        onChange={handleAvailabilityChange}
                    />
                    <label className='available' htmlFor="notavailable">No, (Please specify your availability)</label>
                </div>

                {/* SIDE BUTTON */}
                <div className='btn'>
                    <h1><a href="#"> Back </a></h1>
                    <button>Submit</button>
                </div>

            </div>

            <div className='footer'>
                {/* FOOTER     */}
                <footer className=" text-white py-10">
                    {/* Second Row - Footer Information */}
                    <div className="grid text-black grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
                        {/* First Column - About GenexCorp */}
                        <div>
                            <h3 className="text-lg mb-4 font-extrabold">ABOUT GENEXCORP</h3>
                            <p className="text-sm mb-5">
                                Some believe in the power of numbers. Some believe in the power of
                                technology. We believe in the power of people, power of human touch
                                which brings best out of the best and the impact people can have on
                                technology.
                            </p>
                            {/* Social Media Icons */}
                            <div className="flex space-x-4">
                                <FaFacebookSquare className="text-xl cursor-pointer hover:text-blue-500" />
                                <FaSquareInstagram className="text-xl cursor-pointer hover:text-blue-400" />
                                <FaTwitter className="text-xl cursor-pointer hover:text-blue-700" />
                                <MdEmail className="text-xl cursor-pointer hover:text-blue-800" />
                            </div>
                        </div>

                        {/* Second Column - Quick Links */}
                        <div>
                            <h3 className="text-lg font-extrabold mb-4">QUICK LINKS</h3>
                            <ul className="space-y-2">
                                <li className="hover:underline cursor-pointer"><Link to="/">HOME</Link></li>
                                <li className="hover:underline cursor-pointer"><Link to='/ourobjective'>Our Objectives</Link></li>
                                <li className="hover:underline cursor-pointer"><Link to='/portfolio'>Portfolio</Link></li>
                                <li className="hover:underline cursor-pointer"><Link to='/Corporatetraining'>Corporate Training</Link></li>
                                <li className="hover:underline cursor-pointer"><Link to='/careeraugmentationtraining'>Career Augmentation Training</Link></li>
                                <li className="hover:underline cursor-pointer"><Link to='/jobs'>Jobs</Link></li>
                                <li className="hover:underline cursor-pointer"><Link to='/support'>Support</Link></li>
                            </ul>
                        </div>

                        {/* Third Column - Contact Information */}
                        <div>
                            <h3 className="text-lg font-extrabold mb-4">CONTACT INFORMATION</h3>
                            <p className="text-sm mb-2">
                                Address - VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1,
                                Hyderabad - 500085, Telangana, India
                            </p>
                            <p className="text-sm mb-2">Phone: +91 9876543210</p>
                            <p className="text-sm">Email: info@genexcorp.com</p>
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="text-center">
                                <p className="text-lg">&#169;Genexcorp.com, 2021. All rights reserved</p>
                            </div>
                        </div>

                    </div>
                </footer>


            </div>


        </>
    )
}

export default Applyinternship;
