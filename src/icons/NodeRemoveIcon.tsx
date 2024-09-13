import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NodeRemoveIcon({
  iconName = 'node-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
