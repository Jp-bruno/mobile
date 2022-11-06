import { Button as NativeBaseButton, Text, Icon } from "native-base"
import { Fontisto } from '@expo/vector-icons';

export default function Button({ title, type = 'PRIMARY', ...rest }) {
    return (
        <NativeBaseButton
            onPress={rest.onPress}
            mt={rest.mt}
            leftIcon={rest.iconName ? <Icon as={rest.iconLib || Fontisto} name={rest.iconName || ''} color={rest.iconColor || 'white'} size={rest.iconSize || 'md'} /> : null}
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            textTransform="uppercase"
            bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
            _pressed={{
                bg: type === 'SECONDARY' ? 'red.600' : 'yellow.600'
            }}
        >

            <Text
                fontSize="sm"
                fontFamily="heading"
                color={type === 'SECONDARY' ? 'white' : 'black'}
            >
                {title}
            </Text>
        </NativeBaseButton>
    )
}