import MyModal from 'global_shared/components/MyModal';
import { Size } from 'global_shared/enum/Size';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
interface CheckoutProps {
  isOpen: boolean;
  setCreatePaymentResponseData: any;
  createPaymentResponseData: any;
}

const Checkout: React.FC<CheckoutProps> = ({
  createPaymentResponseData,
  setCreatePaymentResponseData,
  isOpen,
}) => {
  const navigate = useNavigate();
  // This hook is listening an event that came from the Iframe
  useEffect(() => {
    const handler = (ev: Event) => {
      console.log('ev', ev);
      console.log('close popup');
      setCreatePaymentResponseData(false);
      navigate('/deposits');
    };

    window.addEventListener('message', handler);

    // Don't forget to remove addEventListener
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <MyModal
      show={isOpen}
      backgroundColor="bg-pink-800"
      size={Size.Small}
      onClose={function (): void {
        throw new Error('Function not implemented.');
      }}
    >
      <iframe
        title="bKash Checkout"
        className="h-screen w-full"
        // src="http://10.77.77.22/"
        src={createPaymentResponseData.bkashURL}
      />
    </MyModal>
  );
};

export default Checkout;
