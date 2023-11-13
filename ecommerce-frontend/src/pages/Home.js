import React from 'react'
import { Link } from 'react-router-dom'
import categories from '../categories'
import { LinkContainer } from 'react-router-bootstrap'
import { Col, Row } from 'react-bootstrap'
import home_banner_image from '../assets/images/laughing shopping girls.webp'
import sale_banner_image from '../assets/images/big sale_banner.webp'
import './Home.css'


function Home() {
    return (
        <div>
            <img src={home_banner_image} className='home-banner' />
            <div className='featured-products-container container mt-4' >
                <h2> Last products</h2>
                {/* last products here */}
                <div>
                    <Link to='/category/all' style={{ textAlign: 'right', display: 'block', textDecoration: 'none' }} >See more {'>>'} </Link>
                </div>
            </div>
            {/* sale banner */}
            <div className='sale_banner--container mt-4'>
                <img src={sale_banner_image} />
            </div>
            <div className='recent-products-container container mt-4'>
                <h2> Categories </h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: '10px' }} className='category-tile'>
                                    {category.name}
                                </div>

                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home   