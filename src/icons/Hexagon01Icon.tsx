import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hexagon01Icon({
  iconName = 'hexagon-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
