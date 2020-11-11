import React from 'react'
import Footer from 'rc-footer';
import './CustomFooter.css';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

function CustomFooter() {
    return (
        <div className="custom__footer">
            <Footer
                backgroundColor="#161625"
                columns={[
                    {
                        title: 'Get to know us.',
                        items: [
                            {
                                title: "Careers",
                            },
                            {
                                title: "Amazon and Our Planet",
                            },
                            {
                                title: "Investor Relations",
                            },
                            {
                                title: "Press Releases",
                            }

                        ]
                    },
                    {
                        title: 'Connect us',
                        items: [
                            {
                                title: "Facebook",
                            },
                            {
                                title: "Twiiter",
                            },
                            {
                                title: "Instagram",
                            },


                        ]
                    },
                    {
                        title: 'Make money with us',
                        items: [
                            {
                                title: "SELL ON AMAZON",
                            },
                            {
                                title: "ADVERTISE YOUR PRODUCTS ON AMAZON",
                            },
                            {
                                title: "FULFILMENT ON AMAZON",
                            },
                            {
                                title: "AMAZON PAY ON MERCHANTS",
                            }

                        ]
                    },
                    {
                        title: 'Let Us Help You',
                        items: [
                            {
                                title: "COVID-19 and Amazon",
                            },
                            {
                                title: "Shipping Rates & Policies",
                            },
                            {
                                title: "Amazon Prime",
                            },
                            {
                                title: "Customer Service",
                            }

                        ]
                    }
                ]}
                bottom="BY arnav aggarwal"
            />,

        </div>
    )
}

export default CustomFooter
