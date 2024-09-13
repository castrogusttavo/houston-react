import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TransparencyIcon({
  iconName = 'transparency',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
