import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
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
        height: '100vh',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Buổi lễ kết hôn</Title>
        <SubTitle>
          Chú rể {config.bride.name}
          <br />
          Cô dâu {config.groom.name}
          <br />
          <br />
          Hai người có sở thích và giá trị khác nhau
          <br />
          Trở thành một sự tương đồng thông qua tình yêu
          <br />
          Cùng đi trên một hành trình gọi là cuộc sống với nhau.
          <br />
          <br />
          với sự khích lệ và chúc phúc nồng nhiệt
          <br />
          Hãy thắp sáng tình yêu của một khởi đầu mạnh mẽ.
          <br />
          <br />
          {config.groom.name} con trai của {config.groom.fatherName} · {config.groom.motherName}
          <br />
          {config.bride.name} con gái của {config.bride.fatherName} · {config.bride.motherName}
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
