import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframesMultipleIcon({
  iconName = 'keyframes-multiple',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
