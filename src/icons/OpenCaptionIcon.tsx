import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OpenCaptionIcon({
  iconName = 'open-caption',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
