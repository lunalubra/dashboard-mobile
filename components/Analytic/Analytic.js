import { Flex, Text } from '@chakra-ui/layout';
import {
  ResponsiveContainer,
  AreaChart,
  LabelList,
  Tooltip,
  Area
} from 'recharts';

import CustomLabel from './CustomLabel';

const data = [
  { uv: '33', name: 'Enero' },
  { uv: '29', name: 'Enero' },
  { uv: '80', name: 'Febrero' },
  { uv: '33', name: 'Marzo' },
  { uv: '73', name: 'Abril' },
  { uv: '29', name: 'Mayo' },
  { uv: '69', name: 'Junio' },
  { uv: '23', name: 'Julio' },
  { uv: '48', name: 'Agosto' },
  { uv: '55', name: 'Junio' }
];

export default function Analytic() {
  return (
    <Flex w="110%" h="100%" style={{ transform: 'translateX(-5%)' }}>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2C2CE7" stopOpacity={0.7} />
              <stop offset="85%" stopColor="#31374E" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#31374E" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#2C2CE7" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            payload={data}
            content={(props) => {
              if (!props.active) return <div></div>;

              return (
                <Flex
                  px={4}
                  direction="column"
                  alignItems="center"
                  bg="#2C2CE7"
                  color="white"
                  rounded={7}
                  opacity={0.7}
                >
                  <Text as="u">{props.payload[0].payload.name}</Text>
                  <Text fontSize="lg" fontWeight="semibold">
                    {props.payload[0].payload.uv}%
                  </Text>
                </Flex>
              );
            }}
          />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="url(#strokeGradient)"
            strokeWidth={5}
            fillOpacity={1}
            fill="url(#colorUv)"
            style={{ transform: 'translateY(5%)' }}
          >
            <LabelList
              dataKey="uv"
              position="insideTop"
              content={<CustomLabel data={data} />}
            />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
}
