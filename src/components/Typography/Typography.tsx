import './fonts.css'
import styled from 'styled-components'

type TypographyTypes = 'heading' | 'body'
type TypographyWeight = 'regular' | 'medium' | 'semibold'
type TypographySize = 'xl' | 'l' | 'm' | 's' | 'xs'
type TypographyRTFSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

interface HeadingBodyProps {
  children: React.ReactNode;
  type: TypographyTypes;
  weight: TypographyWeight;
  size: TypographySize;
  italic?: boolean;
  as?: 'div';
}

interface RTFProps {
  children: React.ReactNode;
  type: 'rtf';
  weight: TypographyWeight;
  size: TypographyRTFSize;
  italic?: boolean;
  as?: TypographyRTFSize;
}

type TypographyProps = HeadingBodyProps | RTFProps

const sizeMap: Record<TypographyTypes, Record<TypographySize, { fontSize: string; lineHeight: string }>> = {
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
}

const weightMap: Record<TypographyWeight, number> = {
  regular: 400,
  medium: 500,
  semibold: 600,
}

const Text = styled.div<{
  lineHeight: string;
  fontWeight: number;
  fontFamily: string;
  fontSize: string;
  italic?: boolean;
}>`
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-optical-sizing: auto;
`;

const RichText = styled.div<{
  fontWeight: number;
  fontFamily: string;
  italic?: boolean;
}>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  font-optical-sizing: auto;
`;

const Typography = ({ children, type, weight, size, italic }: TypographyProps) => {
  const fontWeight = weightMap[weight]
  const fontFamily = type === 'heading' ? 'Poppins, sans-serif' : 'Inter, sans-serif'

  if (type === 'rtf') {
    return (
      <RichText
        as={size}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        italic={italic}
      >
        {children}
      </RichText>
    )
  }

  const { fontSize, lineHeight } = sizeMap[type][size]

  return (
    <Text
      as={'div'}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      fontSize={fontSize}
      italic={italic}>
      {children}
    </Text>
  )
}

export default Typography
