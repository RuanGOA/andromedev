import { Box } from '@chakra-ui/react'

interface Props {
  itemValue: string
  setCurrentItem: (itemValue: string) => void
  currentItem: string
}

export const TabItem = ({ itemValue, setCurrentItem, currentItem }: Props) => {
  return (
    <Box
      borderBottom="5px solid"
      borderColor={
        itemValue === currentItem
          ? 'var(--chakra-colors-primary-normal)'
          : 'transparent'
      }
      color={
        itemValue === currentItem ? 'var(--chakra-colors-primary-normal)' : ''
      }
      cursor="pointer"
      fontWeight="600"
      fontSize="0.85rem"
      padding="0.75rem 2rem"
      onClick={() => setCurrentItem(itemValue)}
    >
      {itemValue}
    </Box>
  )
}

export default TabItem
