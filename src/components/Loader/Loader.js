import { TailSpin } from 'react-loader-spinner';
const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      color="#3f51b5"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{ justifyContent: 'center', marginTop: '20px' }}
      visible={true}
    />
  );
};

export default Loader;
