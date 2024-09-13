import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframesDoubleIcon({
  iconName = 'keyframes-double',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
