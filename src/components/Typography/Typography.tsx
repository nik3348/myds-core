import './fonts.css'
import styled from 'styled-components';

type TypographyWeight = 'regular' | 'medium' | 'semibold';
type TypographySize = 'xl' | 'l' | 'm' | 's' | 'xs';
type TypographyRTFSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'paragraph';

interface HeadingBodyProps {
  children: React.ReactNode;
  type: 'heading' | 'body';
  weight: TypographyWeight;
  size: TypographySize;
}

interface RTFProps {
  children: React.ReactNode;
  type: 'rtf';
  weight: TypographyWeight;
  size: TypographyRTFSize;
}

type TypographyProps = HeadingBodyProps | RTFProps;

type SizeMapType = {
  heading: Record<TypographySize, { fontSize: string; lineHeight: string }>;
  body: Record<TypographySize, { fontSize: string; lineHeight: string }>;
  rtf: Record<TypographyRTFSize, { fontSize: string; lineHeight: string }>;
};

const sizeMap: SizeMapType = {
  heading: {
    xl: { fontSize: '60px', lineHeight: '72px' },
    l: { fontSize: '48px', lineHeight: '60px' },
    m: { fontSize: '36px', lineHeight: '44px' },
    s: { fontSize: '30px', lineHeight: '38px' },
    xs: { fontSize: '24px', lineHeight: '32px' },
  },
  body: {
    xl: { fontSize: '20px', lineHeight: '30px' },
    l: { fontSize: '18px', lineHeight: '26px' },
    m: { fontSize: '16px', lineHeight: '24px' },
    s: { fontSize: '14px', lineHeight: '20px' },
    xs: { fontSize: '12px', lineHeight: '18px' },
  },
  rtf: {
    h1: { fontSize: '30px', lineHeight: '38px' },
    h2: { fontSize: '24px', lineHeight: '32px' },
    h3: { fontSize: '20px', lineHeight: '30px' },
    h4: { fontSize: '18px', lineHeight: '26px' },
    h5: { fontSize: '16px', lineHeight: '24px' },
    h6: { fontSize: '14px', lineHeight: '20px' },
    paragraph: { fontSize: '16px', lineHeight: '28px' },
  },
};

const weightMap: Record<TypographyWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

const Text = styled.div<{
  fontFamily: string;
  fontSize: string;
  lineHeight: string;
  fontWeight: number;
}>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: normal;
  font-optical-sizing: auto;
`;

const Typography = ({ children, type, weight, size }: TypographyProps) => {
  const { fontSize, lineHeight } = sizeMap[type][size];
  const fontWeight = weightMap[weight];
  const fontFamily = type === 'heading' ? 'Poppins, sans-serif' : 'Inter, sans-serif';

  return (
    <Text fontFamily={fontFamily} fontSize={fontSize} lineHeight={lineHeight} fontWeight={fontWeight}>
      {children}
    </Text>
  );
};

export default Typography;
