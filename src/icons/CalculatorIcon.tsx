import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CalculatorIcon({
  iconName = 'calculator',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
