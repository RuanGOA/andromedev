import { Tab, useStyleConfig, css } from '@chakra-ui/react'

interface Props {
  itemValue: string
}

export const TabItem = ({ itemValue }: Props) => {
  const tabItemStyleHighlighted = useStyleConfig('TabItem', {
    variant: 'highlighted',
  })
  const tabItemStyle = useStyleConfig('TabItem')

  return (
    <Tab
      fontSize="sm"
      css={css(tabItemStyle)}
      _selected={tabItemStyleHighlighted}
    >
      {itemValue}
    </Tab>
  )
}

export default TabItem
