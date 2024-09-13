import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AddSquareIcon({
  iconName = 'add-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
