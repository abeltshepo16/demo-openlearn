import React from 'react';
import {Link} from 'react-router-dom';

class Courses extends React.Component{
    render() {
        return (
            <div>
                <div id="main">
                    <div className="inner">
                        <header>
                            <h1 className="center">Open Learn Coding Development Training</h1>
                            <p>Cras eu semper justo, mattis gravida dui. Nulla quis mauris finibus turpis fermentum commodo. Donec fermentum urna non augue pretium, sed pulvinar sapien sodales.
                                Donec euismod, ipsum sit amet rutrum sodales, ante massa sagittis felis, ac ultricies eros elit sit amet ligula.</p>
                            {/* video slider start*/}
                            <div id="myVideo">
                                <video controls="controls" width={550} height={320} style={{display: 'block', margin: '0 auto'}}>
                                    <source src="images/video/video_bg_element1.mov" />
                                </video>
                            </div>
                        </header>
                        <div className="background-wrap">
                            <video id="video_bg_element" preload="auto" autoPlay="true" loop="loop" muted="muted">
                                <source src="images/video/video_bg_element.mov" />
                                Video not supported.
                            </video>
                        </div>
                        <section className="tiles">
                            <article className="style1">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>Java</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style2">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>C#</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style3">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>Angular JS</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style4">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>ASP.NET</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style5">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>HTML5</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style6">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>CSS</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style2">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>Javascript</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style3">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>BPM</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style1">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>SQL</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style5">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>AZURE</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style6">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>API's</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                            <article className="style4">
               <span className="image">
                 <img src="images/Old%20Pictures/pic01.jpg" alt />
               </span>
                                <Link to="/SignUp">
                                    <h2>Spring</h2>
                                    <div className="content">
                                        <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                    </div>
                                </Link>
                            </article>
                        </section>
                    </div>
                </div>
                <br />
            </div>
        );
    }
};

export default Courses;