const page = () => {
    return (
        <div className="text-black p-10px">
            <div className={'my-[20px] flex flex-col gap-[10px]'}>
                <h1 className={'text-4xl font-bold'}>Overview</h1>
                <p className={'text-md font-semibold text-gray-800'}> Welcome to Bend Point, your comprehensive solution
                    for all your API endpoint needs. Our library offers a variety of endpoints designed to streamline
                    and simplify commonly used tasks, such as email validation, data formatting, and more. Whether
                    you're a seasoned developer or just starting out, Bend Point provides reliable, efficient, and
                    easy-to-use endpoints to enhance your applications and workflows.
                </p>
            </div>
            <div className={'my-[20px] flex flex-col gap-[10px]'}>
                <h1 className={'text-3xl font-bold'}>Why Use Bend Point?</h1>
                <p className={'text-md font-semibold text-gray-800'}> In the fast-paced world of software development,
                    time and efficiency are crucial. Bend Point is designed
                    to help you achieve both by providing ready-made solutions for everyday tasks. Here are a few
                    compelling
                    reasons to integrate our API endpoints into your projects
                </p>
            </div>
            <p><span className={'font-bold'}>Save Time and Effort:</span> Skip the hassle of writing and maintaining
                your own code for common tasks.
                Our endpoints are pre-built and ready to use, allowing you to focus on the core functionalities
                of your application.</p>
            <p><span className={'font-bold'}>Reliable and Secure:</span> Built with best practices and security in mind,
                our API endpoints ensure
                that your data is handled safely and efficiently. We regularly update our endpoints to stay
                ahead of potential security vulnerabilities.</p>

            <p><span className={'font-bold'}>Scalable Solutions:</span> Whether you're handling a small user base or
                millions of requests, our API
                endpoints are designed to scale with your needs, ensuring consistent performance and
                reliability.</p>


            <p><span className={'font-bold'}>Ease of Integration:</span> Our clear and comprehensive documentation makes
                it easy to integrate our
                endpoints into your projects, regardless of the platform or programming language you use.</p>

            <p><span className={'font-bold'}>Continuous Improvement:</span> We continuously enhance our endpoints based
                on user feedback and
                emerging technology trends, ensuring you always have access to the most up-to-date solutions.
            </p>

            <div className={'my-[20px] flex flex-col gap-[10px]'}>
                <h1 className={'text-3xl font-bold'}>When to Use Bend Point?</h1>
                <p className={'text-md font-semibold text-gray-800'}> Bend Point is the perfect choice for a wide range
                    of scenarios, including:
                </p>
            </div>
            <p><span className={'font-bold'}>Email Validation:</span> Ensure the validity of email addresses entered by
                users, reducing bounce rates and
                improving communication efficiency.</p>

            <p><span className={'font-bold'}>Data Formatting:</span> Standardize and format data inputs for consistency
                and ease of processing.</p>

            <p><span className={'font-bold'}>User Authentication:</span> Simplify the implementation of secure user authentication processes.</p>


        </div>
    );
}

export default page;