import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HexagonIcon({ iconName = 'hexagon', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
