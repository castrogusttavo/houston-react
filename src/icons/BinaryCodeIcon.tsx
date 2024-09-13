import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BinaryCodeIcon({
  iconName = 'binary-code',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
