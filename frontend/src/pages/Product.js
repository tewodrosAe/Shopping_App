import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBookmarkPlusFill, BsFillCartPlusFill } from 'react-icons/bs'
import { colors } from '../constants'
import Magnifier from "react-magnifier";

const Product = () => {
    const [toggleDesc,setToggleDesc] = useState('specs')
    const handleToggle = (e) =>{
        const toggleName = e.target.id
        setToggleDesc(toggleName)
    }
    return (
        <div className="product-container">
            <div className="product-grid">
                <div className="product-image">
                    <div className="product-image-col">
                        <img src="/dummyproduct.png" alt="product" />
                        <img src="/dummyproduct.png" alt="product" />
                        <img src="/dummyproduct.png" alt="product" />
                    </div>
                    <Magnifier src={"/dummyproduct.png"} width={340} zoomFactor={1}/>
{/*                     <img src="/dummyproduct.png" alt="product" /> */}
                </div>
                <div className="product-info">
                    <div className='product-info-top'>
                        <h4>APPLE</h4>
                        
                    </div>
                    <h2>iPhone 14</h2>
                    <div className='product-rating'>
                        <AiFillStar size={35}/>
                        4.6 (3.5k ratings)
                    </div>
                    <p> Visit apple store </p>
                    <div className="product-breakline"/>
                    <div className="product-color">
                        <h3>Color</h3>
                        <ul>
                            {
                                colors.map((color) => <li style={{backgroundColor:color}}/>)
                            }
                        </ul>
                    </div>
                    <div className="product-buttons">
                        <button><BsFillBookmarkPlusFill/> Save</button>
                        <button><BsFillCartPlusFill/> Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="product-description">
                <div className="product-description-toggle">
                    <div id='specs' className={toggleDesc === 'specs' ? "active-description" : ''} onClick={handleToggle}>Specs</div>
                    <div id="toggle-divider"/>
                    <div id='disc' className={toggleDesc === 'disc' ? "active-description" : ''} onClick={handleToggle}>Reviews</div>
                    <div id="toggle-divider-bottom"/>
                </div>
                <div className='product-description-details'>
                    <h2> Key Features</h2>
                    <p>Brighter 6.1” Super Retina XDR display¹ featuring Always-On, which keeps your info at a glance
Dynamic Island, a magical new way to interact with iPhone

Emergency SOS via satellite² and Crash Detection — groundbreaking features designed to save lives³
48MP Main camera with an advanced quad-pixel sensor for up to 4x the resolution

A16 Bionic chip — superfast and superefficient for amazing all-day battery life</p>
                </div>
            </div>
        </div>
    )
}

export default Product