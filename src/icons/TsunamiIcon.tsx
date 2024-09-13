import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TsunamiIcon({ iconName = 'tsunami', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
