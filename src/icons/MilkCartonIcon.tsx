import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MilkCartonIcon({
  iconName = 'milk-carton',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
