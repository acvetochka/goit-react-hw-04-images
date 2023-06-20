import { LoaderStyled, LoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderWrapper>
      <LoaderStyled
        visible={true}
        height="130"
        width="130"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderWrapper>
  );
}
