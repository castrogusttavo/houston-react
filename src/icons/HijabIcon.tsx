import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HijabIcon({ iconName = 'hijab', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
