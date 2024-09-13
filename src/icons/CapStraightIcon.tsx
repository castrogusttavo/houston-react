import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CapStraightIcon({
  iconName = 'cap-straight',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
