import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import landingBrand from "../assets/landing-brand.jpg"
import company from "../assets/company.jpg"
import design1 from "../assets/design1.jpg"
import design2 from "../assets/design2.jpg"
import design3 from "../assets/design3.jpg"
import Projects from './Projects';
import maskImg from "../assets/maskImg.jpg"
import Carousal from './Carousal';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Banner Big Image
        gsap.to("#bannerBigimg", {
            duration: 2,
            // y: 1200,
            yPercent: 150,
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
            repeatRefresh: true
        });

        // Banner Big Text
        gsap.to("#headingBig", {
            duration: 1.5,
            scale: 2,
            delay: 0.8,
            transformOrigin: "top left",
            ease: "power2.inOut",
            yoyo: true,
            repeat: 1,
            repeatRefresh: true
        });

        // Banner Design Text
        gsap.to("#headingSmall", {
            delay: 1.2,
            opacity: 0
        });
        gsap.to("#headingSmall", {
            delay: 2,
            left: "-100vw"
        });
        gsap.to("#headingSmall", {
            delay: 3.6,
            duration: 1.8,
            left: 0,
            opacity: 1
        });

        // Banner Small Text
        gsap.to("#headingText", {
            delay: 1.2,
            opacity: 0
        });
        gsap.to("#headingText", {
            delay: 2,
            left: "-100vw"
        });
        gsap.to("#headingText", {
            delay: 3.6,
            duration: 1.8,
            left: 0,
            opacity: 1
        });

        // Company Section - Title
        gsap.set(".company-section .title, #compDescription", {
            opacity: 0,
            y: -200
        });
        gsap.to(".company-section .title, #compDescription", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".company-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Company section - Image
        gsap.set(".compy-box", {
            opacity: 0,
            scale: 0
        });
        gsap.to(".compy-box", {
            duration: 1.6,
            delay: 0.1,
            opacity: 1,
            scale: 1,
            transformOrigin: "top right",
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".company-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Designers section - Title
        gsap.set(".designer-section .title, #designDescription", {
            y: -200,
            opacity: 0
        });
        gsap.to(".designer-section .title, #designDescription", {
            duration: 1.6,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".designer-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Designer section - white border
        gsap.set(".box-border", {
            opacity: 0,
            scale: 0.6,
            rotate: 15
        });
        gsap.to(".box-border", {
            duration: 1.5,
            opacity: 1,
            scale: 1,
            rotate: 0,
            ease: "power.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".designer-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Designer section - Image - left
        gsap.set(".team1, .team3", {
            opacity: 0,
            rotate: 45,
            scale: 0.5
        });
        gsap.to(".team1, .team3", {
            duration: 1.6,
            delay: 0.2,
            opacity: 1,
            rotate: 0,
            scale: 1,
            ease: "power2.inOut",
            transformOrigin: "top",
            yoyo: true,
            scrollTrigger: {
                trigger: ".designer-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });
        // right
        gsap.set(".team2", {
            opacity: 0,
            rotate: -45,
            scale: 0.5
        });
        gsap.to(".team2", {
            duration: 1.6,
            delay: 0.2,
            opacity: 1,
            rotate: 0,
            scale: 1,
            ease: "power2.inOut",
            transformOrigin: "top",
            yoyo: true,
            scrollTrigger: {
                trigger: ".designer-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Projects section - Title
        gsap.set(".projects-section .title", {
            y: -200,
            opacity: 0
        });
        gsap.to(".projects-section .title", {
            duration: 1.6,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Projects section - Left
        gsap.set(".pbox-left", {
            opacity: 0,
            x: -800
        });
        gsap.to(".pbox-left", {
            duration: 1.6,
            x: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Projecr section - Right
        gsap.set(".pbox-right", {
            x: 500
        });
        gsap.to(".pbox-right", {
            duration: 1.6,
            x: 0,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top center",
                end: "center",
                marker: false
            }
        });

        // Project section - content section
        gsap.set(".project-content", {
            x: -200,
            y: -200,
            opacity: 0
        });
        gsap.to(".project-content", {
            duration: 1.6,
            x: 0,
            y: 0,
            opacity: 1,
            delay: 0.2,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".projects-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Testimonial section - Title
        gsap.set(".testimonial-section .title", {
            y: -200,
            opacity: 0
        });
        gsap.to(".testimonial-section .title", {
            duration: 1.6,
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".testimonial-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Testimonial section - Left Content
        gsap.set(".left-row", {
            opacity: 0,
            xPercent: -100
        });
        gsap.to(".left-row", {
            duration: 1.6,
            opacity: 1,
            xPercent: 0,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".testimonial-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Testimonial section - Right Content
        gsap.set(".right-row", {
            opacity: 0,
            xPercent: 100
        });
        gsap.to(".right-row", {
            duration: 1.6,
            opacity: 1,
            xPercent: 0,
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".testimonial-section",
                start: "top center",
                end: "center",
                markers: false
            }
        });

        // Contact section - Box & Border
        gsap.set(".contact-box, .contact-border", {
            opacity: 0,
            scale: 0
        });
        gsap.to(".contact-box, .contact-border", {
            duration: 1.6,
            opacity: 1,
            scale: 1,
            transformOrigin: "top right",
            ease: "power2.inOut",
            yoyo: true,
            scrollTrigger: {
                trigger: ".contact-us",
                start: "top center",
                end: "bottom",
                markers: false
            }
        });
    }, [])



    return (
        <div>
            <section className="banner overflow-hidden">
                <div className="container">
                    <div className="banner-box">
                        <h1 style={{ backgroundImage: `url(${maskImg})` }} id="headingBig">SN</h1>
                        <div className="banner-text">
                            <h2 id="headingSmall">Design a Space <br /> You Love.</h2>
                            <h3 id="headingText">Let’s bring your creative <br /> imagination to reality.</h3>
                        </div>
                        <div className="row gx-0">
                            <div className="col-md-6 col-xxl-7 ms-auto">
                                <div className="banner-img" id="bannerBigimg">
                                    <img loading="lazy"src={landingBrand} className="img-fluid" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="company-section white-bg position-relative overflow-hidden">
                <h2 className="title text-center">company</h2>
                <div className="container">
                    <div className="row align-items-stretch">
                        <div className="col-md-6 align-self-center pb-4 pb-md-5 pb-lg-0">
                            <div className="py-lg-5" id="compDescription">
                                <div className="pb-md-3 paragraph">
                                    <p>We take pride in our legacy, our talented team, and our dedicated professionals who continuously strive to bring innovative interior design solutions to life.
                                        <br />
                                        <br />
                                        At SN Interiror, we specialize in transforming spaces into environments that inspire and enhance the lives of those who use them. As a leading organization in interior design, we are committed to creating spaces that are not only visually stunning but also functional, safe, and sustainable. Guided by a deep sense of social and environmental responsibility, we aim to make every project a testament to thoughtful design and innovation.</p>
                                </div>
                                <a href="javascript:void(0)" className="common-btn">read more <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg" className="img-fluid" alt="Arrow" /></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="compy-box mt-4 my-md-0 position-relative">
                                <img loading="lazy"src={company} className="img-fluid" alt="Company" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </section>

            <section className="designer-section black-bg theme-dark position-relative">
                <h2 className="title text-center">Designers</h2>
                <div className="container">
                    <div className="row gx-4 align-items-stretch">
                        <div className="col-md-6">
                            <div className="designer-box position-relative">
                                <div className="team-member team1">
                                    <img loading="lazy"src={design1} className="img-fluid" alt="Team Member" />
                                </div>
                                <div className="team-member team2">
                                    <img loading="lazy"src={design2} className="img-fluid" alt="Team Member" />
                                </div>
                                <div className="team-member team3">
                                    <img loading="lazy"src={design3} className="img-fluid" alt="Team Member" />
                                </div>
                                <div className="box-border"></div>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="py-4 py-lg-5" id="designDescription">
                                <div className="pb-3 paragraph">
                                    <p>At the heart of our company are our visionary designers, who bring creativity, expertise, and passion to every project. Based in the vibrant city of Bhubaneswar, our team draws inspiration from Odisha's rich cultural heritage and blends it with modern design principles to create truly unique spaces.

                                        Whether it’s residential interiors, corporate spaces, or commercial projects, our designers work closely with clients to transform their ideas into reality, ensuring each space reflects individuality and functionality. Committed to excellence and sustainability, we take pride in shaping the interior landscapes of Bhubaneswar and beyond.</p>
                                </div>
                                <a href="javascript:void(0)" className="common-btn">read more <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg" className="img-fluid" alt="Arrow" /></a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </section>
            <section className="projects-section white-bg position-relative overflow-hidden">
                <h2 className="title text-center">Projects</h2>
                <div className="container">
                    <div className="row align-items-stretch overflow-hidden gy-1 gy-md-0 gx-1 gx-md-3 gx-lg-4">
                        <Projects />
                    </div>
                </div>
            </section>
            <section className="testimonial-section white-bg position-relative overflow-hidden">
                <h2 className="title text-center">Testimonials</h2>
                <div className="container">
                    <div className="row g-0 left-row">
                        <div className="col-md-6">
                            <div className="content border-end-0">
                                <h3>Bertie Norton</h3>
                                <p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/person-01.jpg" className="img-fluid" alt="person" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 reverse-row right-row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/person-02.jpg" className="img-fluid" alt="person" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content border-start-0">
                                <h3>Mike Perry</h3>
                                <p>"Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="highlights-section black-bg theme-dark position-relative">
                <h2 className="title text-center">Highlights</h2>
                <div className="container">
                    <Carousal />
                </div>
            </section>

            <section className="contact-us position-relative overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h4>School of Interior Design</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/location.svg" className="img-fluid" alt="Location" />
                                    <a className="nav-link pe-none" href="javascript:void(0)">
                                        633 Pleasant Brook Autoroute,
                                        Columbus,
                                        TX 19092
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/email.svg" className="img-fluid" alt="Email" />
                                    <a className="nav-link" href="mailto:info@design.com">info@design.com</a>
                                </li>
                                <li className="nav-item">
                                    <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/call.svg" className="img-fluid" alt="Call" />
                                    <a className="nav-link" href="tel:2150021500">215-002-1500</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-7">
                            <div className="contact-info">
                                <div className="contact-box"></div>
                                <div className="contact-border"></div>
                                <h3>Follow Us !</h3>
                                <p>Please fill out the form below with any questions you may have and someone will respond to you shortly. Thank You.</p>
                                <a href="javascript:void(0)" className="common-btn">Follow <img loading="lazy"src="https://www.yudiz.com/codepen/interior-design/arrow-right.svg" className="img-fluid" alt="Arrow" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage