import React from 'react'

const SignUp = () => {
  return (
    <div className="bg-white w-full h-[100vh]">
        <img />
        <section>
            <h1>Stay Updated</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
                <li>Product discovery and building what matters</li>
                <li>Measuring to ensure updates are a success</li>
                <li>And much more!</li>
            </ul>
        </section>
        <form>
            <label for="email">Email address</label>
            <input id="email" type="email" placeholder="email@company.com"></input>
            <button>Subscribe to monthly newsletter</button>
        </form>
    </div>
  )
}

export default SignUp