import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallLockedIcon({
  iconName = 'call-locked',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
