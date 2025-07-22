import { useParams } from 'react-router-dom';
import { products } from '../../data/products.js';
import styles from './productpage.module.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Rkg8xR2orPvtuHZDvLcjqVv41SH6PLqxFrbcrZpxr9xwMMW04PsCdQq2n3fB542flXCse7dr1rWqlcblcftVcEv004Fdfuqva');

function ProductPage() {
  const { productId } = useParams();
  const product = products.find(p => p.slug === productId);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleBuyNow = async () => {
    const stripe = await stripePromise;

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: {
          name: product.name,
          price: Math.round(parseFloat(product.price) * 100), // make sure it's in cents
          slug: product.slug,
        },
      }),
    });

    const data = await res.json();

    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageDiv}>
        <img className={styles.image} src={product.image} alt={product.name} draggable={false} />
      </div>

      <div className={styles.infoDiv}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}><strong>${product.price}</strong></p>

        <div className={styles.button} onClick={handleBuyNow}>
          <div className={styles.buttonWrapper}>
            <div className={styles.text}>Buy Now</div>
            <span className={styles.icon}>
              <svg
                viewBox="0 0 16 16"
                className="bi bi-cart2"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
