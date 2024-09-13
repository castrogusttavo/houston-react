import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RemoveSquareIcon({
  iconName = 'remove-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
