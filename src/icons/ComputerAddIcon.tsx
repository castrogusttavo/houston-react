import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerAddIcon({
  iconName = 'computer-add',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
