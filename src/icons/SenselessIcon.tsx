import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SenselessIcon({ iconName = 'senseless', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
