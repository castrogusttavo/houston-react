import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ImageCompositionOvalIcon({
  iconName = 'image-composition-oval',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
