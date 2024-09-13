import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RemoveCircleIcon({
  iconName = 'remove-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
