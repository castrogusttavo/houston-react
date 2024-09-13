import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FileLockedIcon({
  iconName = 'file-locked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
