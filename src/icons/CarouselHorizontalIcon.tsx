import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CarouselHorizontalIcon({
  iconName = 'carousel-horizontal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
