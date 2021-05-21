import { Flex, Text } from '@chakra-ui/layout';

const CustomLabel = (props) => {
  const { x, y, value, index, data } = props;
  const width = 40;

  if (index === 0 || index === data.length - 1) {
    return <div></div>;
  }

  const { name: unformatedName } = data[index];
  const formatedName = unformatedName.substring(0, 3).toUpperCase();

  return (
    <Flex as="g">
      <Text
        as="text"
        fontWeight="semibold"
        fontSize="8px"
        x={x}
        y={y + 25}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {formatedName}
      </Text>
      <Text
        as="text"
        fontWeight="semibold"
        fontSize="8px"
        x={x}
        y={y + 35}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}%
      </Text>
    </Flex>
  );
};

export default CustomLabel;
