import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileRemoveIcon({
  iconName = 'file-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
