import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerRemoveIcon({
  iconName = 'computer-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
