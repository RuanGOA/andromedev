import { useEffect, useState } from 'react'

import { HStack, Box } from '@chakra-ui/react'

import TabItem from './TabItem'

interface Props {
  items: string[]
}

//const items = ['Organização', 'Mentor', 'Aprendiz']

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
