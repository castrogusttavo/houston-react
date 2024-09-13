import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CapProjectingIcon({
  iconName = 'cap-projecting',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
