import { useState } from 'react'

import { Tabs, TabList } from '@chakra-ui/react'

import { TabItem } from './TabItem'

interface Props {
  items: string[]
}

export const TabMenu = ({ items }: Props) => {
  return (
    <Tabs>
      <TabList>
        {items.map((itemValue, index) => (
          <TabItem key={index} itemValue={itemValue} />
        ))}
      </TabList>
    </Tabs>
  )
}

export default TabMenu
