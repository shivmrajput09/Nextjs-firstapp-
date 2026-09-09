import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/api-services/productionApi';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

export async function generateMetadata({ params }) {
  const { pid } = await params;
  const product = await getProductById(pid);

  if (!product) {
    return {
      title: 'Product Not Found',
      robots: { index: false, follow: false },
    };
  }

  const title = `${product.title} | FirstApp`;
  const description = product.description;
  const productUrl = siteUrl ? `${siteUrl}/products/${pid}` : undefined;

  return {
    title,
    description,
    keywords: [product.title, product.category, product.brand, 'buy online'].filter(Boolean),
    alternates: productUrl ? { canonical: productUrl } : undefined,
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      type: 'website',
      url: productUrl,
      siteName: 'FirstApp',
      images: [{ url: product.thumbnail, alt: product.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.thumbnail],
    },
  };
}

export default async function ProductDetails({ params }) {
  const { pid } = await params;
  const product = await getProductById(pid);

  if (!product) notFound();

  const rating = Number(product.rating || 0).toFixed(1);
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images?.length ? product.images : [product.thumbnail],
    sku: String(product.id),
    brand: { '@type': 'Brand', name: product.brand || 'FirstApp' },
    aggregateRating: product.rating
      ? { '@type': 'AggregateRating', ratingValue: product.rating, bestRating: 5, reviewCount: product.reviews?.length || 1 }
      : undefined,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: product.price,
      availability: product.availabilityStatus === 'In Stock'
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <section className="bg-white py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <Link href="/products" className="mb-8 inline-block text-sm font-medium text-gray-600 hover:text-black">
          ← Back to products
        </Link>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full max-h-[560px] w-full object-cover"
            />
          </div>

          <div className="py-2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{product.title}</h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xl text-yellow-500">★ {rating}</span>
              <span className="text-sm text-gray-500">{product.reviews?.length || 0} reviews</span>
            </div>
            <p className="mt-6 text-3xl font-bold text-gray-900">${product.price}</p>
            {product.discountPercentage && (
              <p className="mt-1 text-sm text-green-700">{product.discountPercentage}% off</p>
            )}
            <p className="mt-8 leading-7 text-gray-600">{product.description}</p>
            <p className="mt-6 text-sm text-gray-500">Availability: {product.availabilityStatus || 'In stock'}</p>
            <button className="mt-6 rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
