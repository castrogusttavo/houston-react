import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BoxingGloveIcon({
  iconName = 'boxing-glove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
