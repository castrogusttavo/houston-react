import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MaximizeScreenIcon({
  iconName = 'maximize-screen',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
