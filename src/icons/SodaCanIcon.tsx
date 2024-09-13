import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SodaCanIcon({ iconName = 'soda-can', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
