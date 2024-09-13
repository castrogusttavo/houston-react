import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GroupItemsIcon({
  iconName = 'group-items',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
