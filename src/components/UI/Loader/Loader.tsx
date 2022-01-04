import { Wrapper, Spinner, SpinnerCircle } from './Loader.styles';

const Loader = () => {
  return (
    <Wrapper>
      <Spinner>
        <SpinnerCircle></SpinnerCircle>
      </Spinner>
    </Wrapper>
  );
};

export default Loader;
