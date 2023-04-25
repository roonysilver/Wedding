import { styled } from '@stitches/react';
import { Button, Divider, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',

});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 0% 10% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
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

const GridLayout = styled('div', {
  // display: 'grid',
  gridTemplateColumns: '100%',
  maxWidth: "500px",
  marginInline: "auto"
});

const Description = styled('p', {
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  // const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <GridLayout>
        <HongBao
          title="Mở phong bì để mừng cưới nhé"
          subTitle=""
          onClick={() => setGroomVisible(true)}
        />
      </GridLayout>
      <Modal
        title={<b>Mừng cưới nè</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Vui quá xá là vui !!!</Description>]}
      >
        <div style={{ display: 'grid' }}>
          <b>Quét mã QR Nhớ kém lời chúc nhé!!!</b>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'block', textAlign: 'center' }}>
              <div>Chú rể nè</div>
              <img
                style={{ width: isPortrait ? '75%' : '75%', height: 'fit-content' }}
                src={config.qrMoney}
                alt="Wedding QR money"
              />
            </div>
            <div style={{ display: 'block', textAlign: 'center', marginRight: "5%" }}>
              <div>Cô dâu nè</div>
              <img
                style={{ width: isPortrait ? '100%' : '100%', height: 'fit-content', paddingTop: "2px" }}
                src={config.qrBrigde}
                alt="Wedding QR money"
              />
            </div>
          </div>
        </div>
      </Modal>
    </Section>
  );
};

export default CongratulatoryMoney;
