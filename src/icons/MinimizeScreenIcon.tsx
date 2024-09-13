import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MinimizeScreenIcon({
  iconName = 'minimize-screen',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
