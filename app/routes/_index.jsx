import {Await, useLoaderData, Link} from 'react-router';
import {Suspense} from 'react';
import {Image} from '@shopify/hydrogen';
import {ProductItem} from '~/components/ProductItem';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [
    {title: 'FlashFog Security - Professional Security Fog Systems & Barriers'},
    {name: 'description', content: 'Leading provider of security fog systems, light barriers, and sound barriers. 25+ years of experience protecting properties worldwide with advanced security technology.'},
    {name: 'keywords', content: 'security fog system, fog security, burglary protection, security strobe, sound barrier, light barrier, property security'},
    {name: 'author', content: 'Arias Tech Ltd.'},
    {property: 'og:title', content: 'FlashFog Security - Professional Security Fog Systems'},
    {property: 'og:description', content: 'Advanced security fog systems and barriers for comprehensive property protection.'},
    {property: 'og:type', content: 'website'},
    {rel: 'canonical', href: 'https://flashfog.com'},
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
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="flashfog-hero">
        <div className="flashfog-hero-content">
          <h1 className="flashfog-title">
            <span>Flash</span>Fog
          </h1>
          <p className="flashfog-subtitle">
            Professional Security Fog Systems
          </p>
          <p className="flashfog-description">
            Protecting properties for over 25 years with advanced fog technology, 
            light barriers, and sound barriers. When security matters, choose FlashFog.
          </p>
          <div className="flashfog-cta-buttons">
            <Link 
              to="/collections/all" 
              className="btn btn-primary"
            >
              Shop Now →
            </Link>
            <Link 
              to="/pages/fog-details" 
              className="btn btn-secondary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flashfog-features">
        <div className="container">
          <h2 className="flashfog-section-title">
            Advanced Security Technologies
          </h2>
          <div className="flashfog-features-grid">
            <div className="flashfog-feature-card">
              <div className="flashfog-feature-icon">🛡️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Security Fog</h3>
              <p className="text-gray-300">
                Instant fog deployment creates impenetrable barrier against intruders
              </p>
              <Link 
                to="/pages/fog-details" 
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="flashfog-feature-card">
              <div className="flashfog-feature-icon">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Security Strobe</h3>
              <p className="text-gray-300">
                High-intensity strobe lights disorient and deter intruders
              </p>
              <Link 
                to="/pages/security-strobe" 
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="flashfog-feature-card">
              <div className="flashfog-feature-icon">🔊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Sound Barrier</h3>
              <p className="text-gray-300">
                Advanced audio deterrent system with customizable alerts
              </p>
              <Link 
                to="/pages/sound-barrier" 
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="flashfog-feature-card">
              <div className="flashfog-feature-icon">👁️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Light Barrier</h3>
              <p className="text-gray-300">
                Invisible perimeter protection with instant detection
              </p>
              <Link 
                to="/pages/light-barrier" 
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FlashFog */}
      <section className="flashfog-why-choose">
        <div className="container">
          <div className="flashfog-why-choose-grid">
            <div>
              <h2 className="text-4xl font-bold text-cyan-400 mb-8">
                Why Choose FlashFog?
              </h2>
              <div className="space-y-6">
                <div className="flashfog-benefit-item">
                  <div className="flashfog-benefit-dot"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">25+ Years Experience</h3>
                    <p className="text-gray-300">
                      Trusted by thousands of customers worldwide with proven security solutions
                    </p>
                  </div>
                </div>
                <div className="flashfog-benefit-item">
                  <div className="flashfog-benefit-dot"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Professional Installation</h3>
                    <p className="text-gray-300">
                      Certified installer network ensures proper setup and optimal performance
                    </p>
                  </div>
                </div>
                <div className="flashfog-benefit-item">
                  <div className="flashfog-benefit-dot"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">100% Money Back Guarantee</h3>
                    <p className="text-gray-300">
                      14-day return policy with full refund if not completely satisfied
                    </p>
                  </div>
                </div>
                <div className="flashfog-benefit-item">
                  <div className="flashfog-benefit-dot"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Advanced Technology</h3>
                    <p className="text-gray-300">
                      Cutting-edge security systems designed for maximum effectiveness
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="FlashFog security system installation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">25</div>
                <div className="text-sm">YEARS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flashfog-cta-section">
        <div className="flashfog-cta-content">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of satisfied customers who trust FlashFog for their security needs. 
            Get started today with our professional consultation.
          </p>
          <div className="flashfog-cta-buttons">
            <Link 
              to="/collections/all" 
              className="btn btn-primary"
            >
              Shop Products
            </Link>
            <Link 
              to="/pages/about-us" 
              className="btn btn-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
            Featured Products
          </h2>
          <Suspense fallback={<div className="text-center text-gray-300">Loading products...</div>}>
            <Await resolve={data.recommendedProducts}>
              {(response) => (
                <div className="recommended-products-grid">
                  {response
                    ? response.products.nodes.map((product) => (
                        <ProductItem key={product.id} product={product} />
                      ))
                    : <div className="text-center text-gray-300">No products available</div>}
                </div>
              )}
            </Await>
          </Suspense>
        </div>
      </section>
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('react-router').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
