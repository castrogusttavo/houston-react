import React from 'react'
import { Icon, IconProps } from '../Icon'

export function RainDropIcon({ iconName = 'rain-drop', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
