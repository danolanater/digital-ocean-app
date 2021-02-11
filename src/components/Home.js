import { useState, useEffect } from 'react'

import airpod from '../images/airpod.jpg'
import homepod from '../images/homepod.jpg'
import ipad from '../images/ipad.jpg'


function Home() {

    const images = document.getElementsByClassName("home-image")
    const [selectedImage, setSelectedImage] = useState(0)


    setTimeout(() => {
        images[selectedImage].classList.remove("selected")
        setSelectedImage((selectedImage + 1) % 3)
    }, 10000)

    useEffect(() => {
        images[selectedImage].classList.add("selected")
    }, [selectedImage, images])

    return (
        <div className="container">
            <h1 className="home-header">Getting tested for Covid19 has its benefits...</h1>
            <h3 className="home-tagline">Win either an iPad, Airpods, Apple Watch, or Homepod!</h3>
            <div className="home-images-container">
                <img className="home-image selected" src={ipad} alt="win an ipad!" />
                <img className="home-image" src={airpod} alt="win some airpods!" />
                <img className="home-image" src={homepod} alt="win a homepod!" />
            </div>
            <div className="how-it-works-container">
                <h2 className="directions-header">How it works: </h2>
                <ul className="steps">
                    <li><span>Step 1:</span> Get tested on your designated testing day*</li>
                    <li><span>Step 2:</span> Receive a raffle ticket</li>
                    <li><span>Step 3:</span> Wait until the next coming Monday</li>
                    <li><span>Step 4:</span> Check back to see if you've won!</li>
                </ul>
            </div>
            <a className="view-tickets" href="#winners">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="62.553" viewBox="0 0 67.074 62.553">
                    <g id="Icon_ionic-md-paper" data-name="Icon ionic-md-paper" transform="translate(-2.25 -4.5)">
                        <path id="Path_1" data-name="Path 1" d="M66.928,4.5H26.2a2.591,2.591,0,0,0-2.4,2.688v5.131H8.538A6.6,6.6,0,0,0,2.25,19.161v33.8c0,7.754,5.839,14.091,12.876,14.091H57c6.752,0,12.322-6.011,12.322-13.358V7.106A2.515,2.515,0,0,0,66.928,4.5ZM23.809,17.532V48.809H17.521V20.66a8.583,8.583,0,0,0-.494-3.128Zm-2.545,41.6a8.485,8.485,0,0,1-6.064,2.7,7.819,7.819,0,0,1-5.764-2.606,9.233,9.233,0,0,1-2.4-6.272V20.66a2.986,2.986,0,0,1,2.845-3.128A2.986,2.986,0,0,1,12.73,20.66V51.415a2.515,2.515,0,0,0,2.4,2.606h8.609A8.838,8.838,0,0,1,21.264,59.136ZM64.533,53.7a8.472,8.472,0,0,1-2.231,5.75A7.187,7.187,0,0,1,57,61.84H25.5a14.325,14.325,0,0,0,3.1-8.878V9.876H64.533Z" transform="translate(0 0)" fill="#0071e3" />
                        <path id="Path_2" data-name="Path 2" d="M17.438,9.563h5.625v1.969H17.438Z" transform="translate(30.899 8.237)" fill="#0071e3" />
                        <path id="Path_3" data-name="Path 3" d="M17.438,15.75h5.625v1.125H17.438Z" transform="translate(30.899 16.672)" fill="#0071e3" />
                        <path id="Path_4" data-name="Path 4" d="M17.438,20.25h5.625v1.125H17.438Z" transform="translate(30.899 23.341)" fill="#0071e3" />
                        <path id="Path_5" data-name="Path 5" d="M22.781,24.75H17.156s0,1.125-.281,1.125H22.1C22.781,25.875,22.781,25.137,22.781,24.75Z" transform="translate(30.814 30.009)" fill="#0071e3" />
                    </g>
                </svg>
                <p>Click here to view winning tickets</p>
            </a>

        </div>
    )
}

export default Home