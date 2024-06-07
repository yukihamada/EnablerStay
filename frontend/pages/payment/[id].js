import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PaymentDetail = () => {
  const [payment, setPayment] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPayment = async () => {
      const res = await fetch(\`/api/payment/\${id}\`);
      const data = await res.json();
      setPayment(data);
    };

    if (id) {
      fetchPayment();
    }
  }, [id]);

  if (!payment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Payment Detail</h1>
      <p>Reservation ID: {payment.reservationId}</p>
      <p>Amount: ${payment.amount}</p>
      <p>Status: {payment.status}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
      const res = await fetch(\`https://api.enabler.cc/payment/\${id}\`, {
        headers: {
          'Authorization': \`Bearer \${context.req.cookies.token}\`
        }
      });
    }
  });
  const data = await res.json();

  return {
    props: {
      payment: data
    }
  };
};

export default PaymentDetail;

