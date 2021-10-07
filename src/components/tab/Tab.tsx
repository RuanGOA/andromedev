import { useState } from 'react'

import { HStack } from '@chakra-ui/react'

import TabItem from './TabItem'

interface Props {
  items: string[]
}

export const Tab = ({ items }: Props) => {
  const [currentItem, setCurrentItem] = useState('')

  return (
    <HStack spacing="2rem">
      {items.map((itemName, index) => (
        <TabItem
          key={index}
          itemValue={itemName}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      ))}
    </HStack>
  )
}

export default Tab
