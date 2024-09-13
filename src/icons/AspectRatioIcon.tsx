import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AspectRatioIcon({
  iconName = 'aspect-ratio',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
