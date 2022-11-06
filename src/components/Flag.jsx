import { Image } from 'native-base';

export default function Flag({ ...rest }) {
  return (
    <Image
      {...rest}
      alt="Bandeira"
      w={8}
      h={6}
      mx={3}
    />
  );
}