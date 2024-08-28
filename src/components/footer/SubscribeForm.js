import { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [thankYouMessage, setThankYouMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(window.location.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'subscribe', email }),
      });

      if (response.ok) {
        setThankYouMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setThankYouMessage('An error occurred. Please try again.');
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  return (
    <div className="mt-10 xl:mt-0 subscribe-form">
      <h3 className="text-sm font-semibold leading-6 text-white">
        Subscribe to our mailing list!
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-100">
        Receive the latest Wheel/Rail news, articles and announcements,
        sent to your inbox weekly. No spam. Unsubscribe anytime.
      </p>
      <form
        onSubmit={handleSubmit}
        name="subscribe"
        method="post"
        data-netlify="true"
        netlify
        data-netlify-honeypot="bot-field"
        className="mt-6 sm:flex sm:max-w-md"
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <div hidden>
          <input name="bot-field" />
        </div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
          placeholder="Enter your email"
          required
        />
        <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
          <button
            className="flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-wri-blue hover:bg-wri-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wri-blue"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      {thankYouMessage && <p className="mt-2 text-sm text-wri-yellow">{thankYouMessage}</p>}
    </div>
  );
};

export default SubscribeForm;