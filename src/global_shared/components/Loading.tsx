import { FC } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';

interface LoadingProps {
  isLoading: boolean;
}

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  if (isLoading) {
    return ReactDOM.createPortal(
      <Spinner />,
      document.getElementById('portal')!
    );
  } else {
    return null;
  }
};
export default Loading;
