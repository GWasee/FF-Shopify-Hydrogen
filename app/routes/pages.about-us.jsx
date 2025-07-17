import {useLoaderData} from 'react-router';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [
    {title: `FlashFog Security | About Us`},
    {name: 'description', content: 'Learn about FlashFog Security, a leading provider of security fog systems with 25+ years of experience protecting properties worldwide.'},
    {name: 'keywords', content: 'FlashFog about us, security company, fog security systems, Arias Tech Ltd'},
    {rel: 'canonical', href: 'https://flashfog.com/pages/about-us'},
  ];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context}) {
  return {};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  return {};
}

export default function AboutUs() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  
  return (
    <div className="about-us-content">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12">About us.</h1>
      
      <div className="about-us-grid">
        <div>
          <p className="about-us-text">
            We are a highly technical firm with programming bases on 
            security, and we've been keeping fog technology, light barriers 
            and sound barriers in the forefront of development.
          </p>
          <p className="about-us-text">
            Starting our industrial success in Kingston, Canada, USA, 
            Europe and Asia, we've been helping others with advanced 
            technology using a mix distribution model, great support 
            and competitive pricing always.
          </p>
          <p className="about-us-text">
            This year we said we did not want to compromise the 
            innovative engineering teams we've worked together by 
            focusing on the needs of our customers exclusively.
          </p>
        </div>
        
        <div className="flex justify-center">
          <img 
            src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
            alt="FlashFog team at trade show"
            className="about-us-image"
          />
        </div>
      </div>

      <div className="relative mb-16">
        <div 
          className="about-us-hero-image"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop)'
          }}
        >
          <div className="about-us-hero-overlay"></div>
          <div className="about-us-hero-content">
            <h2 className="text-6xl font-bold mb-2">Toronto</h2>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg">
              <div className="text-sm font-semibold">ARIAS TECH LTD.</div>
              <div className="text-sm">Toronto, ON</div>
              <div className="text-sm">Toronto, ON, M8Z 2T7</div>
              <div className="text-sm mt-2">
                <a href="#" className="text-cyan-400">www.flashfog.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Contact us.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="text-center">
            <div className="text-cyan-400 text-2xl font-semibold mb-2">(888) 282-7740</div>
            <div className="text-gray-300">(905) 502-0249</div>
          </div>
          <div className="flex justify-center">
            <div className="text-2xl font-bold text-white">flashfog</div>
          </div>
        </div>

        <div className="about-us-contact-grid">
          <div className="about-us-contact-card">
            <h3 className="about-us-contact-title">Customer Support</h3>
            <p className="about-us-contact-text">For technical questions and help</p>
          </div>
          <div className="about-us-contact-card">
            <h3 className="about-us-contact-title">Sales</h3>
            <p className="about-us-contact-text">For orders and quotes</p>
          </div>
          <div className="about-us-contact-card">
            <h3 className="about-us-contact-title">First responders / Authorities</h3>
            <p className="about-us-contact-text">Special pricing available</p>
          </div>
          <div className="about-us-contact-card">
            <h3 className="about-us-contact-title">Media</h3>
            <p className="about-us-contact-text">Press and media inquiries</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Our Story.</h2>
        <div className="about-us-grid">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">A security business</h3>
            <p className="about-us-text">
              <span className="text-cyan-400 font-bold">25 years in fog security</span>
            </p>
            <p className="about-us-text">
              Since 1995 when we started we've been Arias tech and 
              flashfog with our subsidiary/branch companies.
            </p>
            <p className="about-us-text">
              We had a we spent time to provide the most value 
              to our customers, for our prices we have ordered over 
              1000 units mostly from ourselves, in more than 
              20 countries.
            </p>
            <p className="about-us-text">
              Our business is comprehensive integrated solutions 
              professionally sound and systematically organized. Our 
              products are also guaranteed by our network of 
              competent installers and dealers office.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
              alt="Trade show booth"
              className="about-us-image"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img 
          src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
          alt="Company team"
          className="about-us-image"
        />
        <img 
          src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
          alt="Team meeting"
          className="about-us-image"
        />
      </div>
    </div>
  );
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */ 