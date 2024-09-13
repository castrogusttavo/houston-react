import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GasStoveIcon({ iconName = 'gas-stove', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
