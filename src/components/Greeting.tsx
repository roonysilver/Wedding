import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import { Col, Image, Row } from 'antd';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '15% 5% 15% 5%' : '5% 5% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  height: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
});

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: 'auto',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Buổi lễ kết hôn</Title>
       <Image src={config.weddingImage}></Image>
      </Layout>
    </section>
  );
};

export default Greeting;
