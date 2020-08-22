import React from 'react'

import Layout from '../../components/Layout'
import ManufacturingList from '../../components/ManufacturingList'

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/manufacturing-index.jpeg')`,
                    }}
                >
                </div>
                <section className="section">
                    <div className="container">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            Manufacturing
                        </h1>
                        <p>
                            Metallor is knowledgeable across a wide variety of manufacturing processes. With over 100 sub-contracting factories, we are capable to provide a wide range of products, from metallic to plastic, machineries to electronics.
                        </p>
                        <h3>Our manufacturing capabilities include:</h3>
                        <div className="content">
                            <ManufacturingList />
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
