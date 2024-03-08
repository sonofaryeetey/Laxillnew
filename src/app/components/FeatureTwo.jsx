import React from 'react'

const FeatureTwo = () => {

    const posts = [
        {
            title: "Data Cleaning and Quality Assurance",
            desc: "Data quality, consistency, reliability, and completeness are the standards that we adhere to. We transform our clients’ raw data into a format that is suitable for complex analysis by cleaning and normalizing it. ",
            img: "images/data-cleaning.png",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "Data Collection and Management",
            desc: "Our services enable businesses to handle their data efficiently and effectively. We create and maintain databases, guarantee data integrity, and apply data governance standards. ",
            img: "images/data-collection.png",
            authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
            authorName: "Micheal",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: " Data Visualization",
            desc: "Interactive dashboards and reports can be developed to simplify data comprehension for businesses, enabling them to make informed decisions to propel their companies forward. ",
            img: "images/data-visualization.png",
            authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
            authorName: "Luis",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "Predictive Analytics",
            desc: "By using historical data, we can forecast future scenarios and results. This can enable businesses to plan ahead and make proactive decisions that ensure business performance and growth. ",
            img: "images/predictive-analysis.png",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Lourin",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: "Consulting and Training",
            desc: "Our services include consulting businesses on how to leverage their data for optimal results. We can also train their staff on data literacy and data analysis tools." 

            ,
            img: "images/training.png",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Lourin",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        },
        {
            title: " Professional Partnership Program",
            desc: " At Laxill, we allow professionals the opportunity to register to partner with our in-house consultants so that we can assist them to complete their office or company data analysis projects on time after we sign a Non-Disclosure Agreement so that they can be rest-assured that their data will be well protected ",
            img: "images/partnership.png",
            authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
            authorName: "Lourin",
            date: "Jan 4 2022",
            href: "javascript:void(0)"
        }
    ]
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
            <div className="text-center">
                {/* <h1 className="text-3xl text-white font-semibold">
                   see what we offer
                </h1> */}
                <p className="mt-3 md:text-2xl text-white">
                    Browse through our services..
                </p>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <section className="max-w-sm mx-auto mt-4 shadow-lg rounded-md duration-300 hover:shadow-sm md:my-14" key={key}>
                            <a href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title} className="" />
                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    {/* <div className="flex-none w-10 h-10 rounded-full">
                                        <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} />
                                    </div> */}
                                    {/* <div className="ml-3">
                                        <span className="block text-gray-900">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.date}</span>
                                    </div> */}
                                </div>
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-2xl font-bold text-white pb-4 ">
                                        {items.title}
                                    </h3>
                                    <p className="text-white text-sm mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </section>
                    ))
                }
            </div>
        </section>
    )
}

export default FeatureTwo