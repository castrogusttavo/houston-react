import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HorizonalScrollPointIcon({
  iconName = 'horizonal-scroll-point',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
