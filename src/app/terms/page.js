import React from 'react'

const Terms = () => {
    return (
        <div className='container py-20'>
            <h1>Terms and Conditons</h1>
            <ul className='pl-10 w-lg'>

                <li className='pt-10'>
                    <h3 className='text-xl font-bold'>Introduction</h3>
                    <p>{`Welcome to Laxill! These terms and conditions outline the rules and regulations for the use of Laxill's Website, located at www.laxill.com.

                        By accessing this website we assume you accept these terms and conditions. Do not continue to use Laxill if you do not agree to take all of the terms and conditions stated on this page.`}
                    </p>
                </li>
                <li className='pt-10'>
                    <h3 className='text-xl font-bold'>License</h3>
                    <p>

                       {` Unless otherwise stated, Laxill and/or its licensors own the intellectual property rights for all material on Laxill. All intellectual property rights are reserved.`}

                    </p>
                </li>
                <li className='pt-10'>
                    <h3 className='text-xl font-bold'>User Responsibilities</h3>
                    <p>

                       {` As a user of Laxill's services, you agree to use our services responsibly and for lawful purposes. You are not allowed to use our services to infringe upon the rights of others, or to try to gain unauthorized access to or disrupt any service, device, data, account or network.`}

                    </p>
                </li>
                <li className='pt-10'>
                    <h3 className='text-xl font-bold'> Data Privacy</h3>
                    <p>

                        {`Laxill is committed to protecting and respecting your privacy. Our Privacy Policy, which details how we will use your information, can be found on our website.`}

                    </p>
                </li>
                <li className='pt-10'>
                    <h3 className='text-xl font-bold'>Changes to Terms</h3>
                    <p>

                        {`Laxill reserves the right to modify these terms and conditions at any time. We will notify you of any changes by posting the new terms and conditions on this page.`}

                    </p>
                </li>
                <li className='pt-10'>
                    <h3 className='text-xl font-bold'>Contact Us</h3>
                    <p>

                        {`If you have any questions about these terms and conditions, please contact us at support@laxill.com.`}

                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Terms